CREATE OR REPLACE PACKAGE  cspks_cscfnudf_main AS
  /*-----------------------------------------------------------------------------------------------------
  **
  ** File Name  : cspks_cscfnudf_main.spc
  **
  ** Module     : Core
  ** 
  ** This source is part of the Oracle FLEXCUBE Software Product.
  ** Copyright (R) 2008,2019 , Oracle and/or its affiliates.  All rights reserved
  ** 
  ** 
  ** No part of this work may be reproduced, stored in a retrieval system, adopted 
  ** or transmitted in any form or by any means, electronic, mechanical, 
  ** photographic, graphic, optic recording or otherwise, translated in any 
  ** language or computer language, without the prior written permission of 
  ** Oracle and/or its affiliates. 
  ** 
  ** Oracle Financial Services Software Limited.
  ** Oracle Park, Off Western Express Highway,
  ** Goregaon (East), 
  ** Mumbai - 400 063, India
  ** India
  -------------------------------------------------------------------------------------------------------
  CHANGE HISTORY
  
  SFR Number         :  
  Changed By         :  
  Change Description :  
  
  -------------------------------------------------------------------------------------------------------
  */
  
  
TYPE ty_tb_v_func_udf_upload_detail IS TABLE OF udtb_func_udf_upload_detail%ROWTYPE INDEX BY BINARY_INTEGER;

TYPE ty_cscfnudf IS RECORD (
     v_func_udf_upload_detail    ty_tb_v_func_udf_upload_detail,
                 Desc_Fields    Cspks_Req_Global.Ty_Tb_Xml_Data,
                 Addl_Info    Cspks_Req_Global.Ty_Addl_info );

PROCEDURE Pr_Set_Skip_Sys;
PROCEDURE Pr_Set_Activate_Sys;
FUNCTION  Fn_Skip_Sys RETURN BOOLEAN;
PROCEDURE Pr_Set_Skip_Kernel;
PROCEDURE Pr_Set_Activate_Kernel;
FUNCTION  Fn_Skip_Kernel RETURN BOOLEAN;
FUNCTION Fn_Sys_Query_Desc_Fields  ( p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Wrk_cscfnudf  IN   OUT cspks_cscfnudf_Main.ty_cscfnudf,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;
FUNCTION Fn_Build_Type (p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Key_Tags_Vals   IN  VARCHAR2,
p_Addl_Info       IN Cspks_Req_Global.Ty_Addl_Info,
p_cscfnudf       IN   OUT cspks_cscfnudf_Main.Ty_cscfnudf,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Build_Ts_List (p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_cscfnudf          IN cspks_cscfnudf_Main.Ty_cscfnudf,
p_Level_Format   IN       VARCHAR2,
p_Level_counter   IN  OUT  NUMBER,
p_Err_Code        IN OUT VARCHAR2,
p_Err_Params      IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Check_Mandatory (p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Pk_Or_Full     IN  VARCHAR2 DEFAULT 'FULL',
p_cscfnudf IN OUT  cspks_cscfnudf_Main.Ty_cscfnudf,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
  RETURN BOOLEAN;

FUNCTION Fn_Default_And_Validate        (p_Source            IN VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Check_Amendables       IN VARCHAR2,
p_cscfnudf     IN  cspks_cscfnudf_Main.Ty_cscfnudf,
p_Prev_cscfnudf IN OUT  cspks_cscfnudf_Main.Ty_cscfnudf,
p_Wrk_cscfnudf IN OUT  cspks_cscfnudf_Main.Ty_cscfnudf,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Upload_Db  (p_Source            IN VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Main_Function     IN  VARCHAR2,
p_Post_Upl_Stat    IN     VARCHAR2,
p_Multi_Trip_Id    IN  VARCHAR2,
p_cscfnudf     IN  cspks_cscfnudf_Main.Ty_cscfnudf,
p_Prev_cscfnudf     IN  cspks_cscfnudf_Main.Ty_cscfnudf,
p_Wrk_cscfnudf      IN OUT  cspks_cscfnudf_Main.Ty_cscfnudf,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ;
FUNCTION Fn_Query  ( p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Key_Tags_Vals   IN  VARCHAR2,
p_QryData_Reqd       IN  VARCHAR2,
p_cscfnudf         IN  cspks_cscfnudf_Main.Ty_cscfnudf, 
p_Wrk_cscfnudf  IN   OUT  cspks_cscfnudf_Main.Ty_cscfnudf,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;
FUNCTION Fn_Maint_Log (p_Source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Key_Id    IN  VARCHAR2,
p_Mod_No    IN  NUMBER,
                        p_Prev_cscfnudf          IN  cspks_cscfnudf_Main.Ty_cscfnudf,
                        p_Wrk_cscfnudf          IN  cspks_cscfnudf_Main.Ty_cscfnudf,
P_Tb_Field_Log   IN OUT  NOCOPY Cspks_Req_Global.Ty_Tb_Fld_Log,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Extract_Custom_Data (p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Addl_Info         IN OUT Cspks_Req_Global.Ty_Addl_Info,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ; 
FUNCTION Fn_Rebuild_Ts_List (p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_exchange_pattern  IN     VARCHAR2,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;
FUNCTION Fn_Int_Main    (p_Source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Multi_Trip_Id     IN     VARCHAR2,
                        p_Request_No        IN     VARCHAR2,
                        p_cscfnudf          IN OUT  cspks_cscfnudf_Main.ty_cscfnudf,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ; 

FUNCTION Fn_main       (p_source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Multi_Trip_Id     IN     VARCHAR2,
                        p_Request_No        IN     VARCHAR2,
                        p_cscfnudf          IN OUT  cspks_cscfnudf_Main.ty_cscfnudf,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ; 


FUNCTION Fn_Process_Request (p_source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Exchange_Pattern  IN     VARCHAR2,
                        p_Multi_Trip_Id     IN     VARCHAR2,
                        p_Request_No        IN     VARCHAR2,
                        p_Addl_Info         IN OUT Cspks_Req_Global.Ty_Addl_Info,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Get_Node_Data ( 
p_Node_Data         IN OUT Cspks_Req_Global.Ty_Tb_Chr_Node_Data,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;
END cspks_cscfnudf_main;
/
CREATE OR REPLACE SYNONYM cspkss_cscfnudf_main FOR cspks_cscfnudf_main
/