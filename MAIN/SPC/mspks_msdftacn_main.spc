CREATE OR REPLACE PACKAGE  mspks_msdftacn_main AS
  /*-----------------------------------------------------------------------------------------------------
  **
  ** File Name  : mspks_msdftacn_main.spc
  **
  ** Module     : Messaging
  ** 
  ** This source is part of the Oracle FLEXCUBE Software Product.
  ** Copyright (R) 2008,2017 , Oracle and/or its affiliates.  All rights reserved
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
  
  

TYPE ty_msdftacn IS RECORD (
     v_ems_connectivity_line     mstm_ems_connectivity_line%ROWTYPE,
     v_ems_connectivity_line_fta     mstm_ems_connectivity_line_fta%ROWTYPE,
                 Desc_Fields    Cspks_Req_Global.Ty_Tb_Xml_Data,
                 Addl_Info    Cspks_Req_Global.Ty_Addl_info );

FUNCTION  Fn_Get_Curr_Stage RETURN VARCHAR2 ;
FUNCTION  Fn_Get_Tanked_Stat RETURN VARCHAR2 ;
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
                        p_Wrk_msdftacn  IN   OUT mspks_msdftacn_Main.ty_msdftacn,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;
FUNCTION Fn_Populate_Record_Master (p_Source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_msdftacn          IN  mspks_msdftacn_Main.Ty_msdftacn,
                        p_Record_Master     IN OUT Sttbs_Record_Master%ROWTYPE,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ;

FUNCTION Fn_Get_Key_Information (p_Source    IN  VARCHAR2, 
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_msdftacn       IN  OUT mspks_msdftacn_Main.Ty_msdftacn,
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
                        p_msdftacn          IN OUT  mspks_msdftacn_Main.ty_msdftacn,
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
                        p_msdftacn          IN OUT  mspks_msdftacn_Main.ty_msdftacn,
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
END mspks_msdftacn_main;
/
CREATE OR REPLACE SYNONYM mspkss_msdftacn_main FOR mspks_msdftacn_main
/