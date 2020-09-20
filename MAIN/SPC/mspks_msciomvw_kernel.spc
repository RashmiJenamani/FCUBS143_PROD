CREATE OR REPLACE PACKAGE  mspks_msciomvw_kernel AS
  /*-----------------------------------------------------------------------------------------------------
  **
  ** File Name  : mspks_msciomvw_kernel.spc
  **
  ** Module     : Messaging
  ** 
  ** This source is part of the Oracle FLEXCUBE Software Product.
  ** Copyright (R) 2008,2016 , Oracle and/or its affiliates.  All rights reserved
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
  
  
PROCEDURE Pr_Skip_Handler  (P_Stage  IN  VARCHAR2);

FUNCTION Fn_Main       (p_Source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Child_Function    IN     VARCHAR2,
                        p_Multi_Trip_Id     IN     VARCHAR2,
                        p_Request_No        IN     VARCHAR2,
                        p_msciomvw          IN OUT  mspks_msciomvw_Main.Ty_msciomvw,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ; 

FUNCTION Fn_Post_Build_Type_Structure (p_Source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Key_Tags_Vals   IN  VARCHAR2,
p_Addl_Info       IN Cspks_Req_Global.Ty_Addl_Info,
p_msciomvw     IN  OUT mspks_msciomvw_Main.Ty_msciomvw,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Check_Mandatory(p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_msciomvw IN  OUT  mspks_msciomvw_Main.Ty_msciomvw,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Check_Mandatory(p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Pk_Or_Full     IN  VARCHAR2 DEFAULT 'FULL',
p_msciomvw IN   mspks_msciomvw_Main.ty_msciomvw,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Default_And_Validate (p_source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Check_Amendables       IN VARCHAR2,
p_msciomvw IN   mspks_msciomvw_Main.Ty_msciomvw,
p_Prev_msciomvw IN OUT mspks_msciomvw_Main.Ty_msciomvw,
p_Wrk_msciomvw IN OUT  mspks_msciomvw_Main.Ty_msciomvw,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Default_And_Validate (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Check_Amendables       IN VARCHAR2,
p_msciomvw IN   mspks_msciomvw_Main.Ty_msciomvw,
p_Prev_msciomvw IN OUT mspks_msciomvw_Main.Ty_msciomvw,
p_Wrk_msciomvw IN OUT  mspks_msciomvw_Main.Ty_msciomvw,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Upload_Db (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Post_Upl_Stat    IN  VARCHAR2,
p_Multi_Trip_Id    IN  VARCHAR2,
p_msciomvw IN mspks_msciomvw_Main.ty_msciomvw,
p_Prev_msciomvw IN mspks_msciomvw_Main.ty_msciomvw,
p_Wrk_msciomvw IN OUT  mspks_msciomvw_Main.ty_msciomvw,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Upload_Db (p_Source    IN  VARCHAR2,
                        p_source_operation  IN     VARCHAR2,
                        p_Function_id       IN     VARCHAR2,
                        p_action_code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Post_Upl_Stat    IN  VARCHAR2,
p_Multi_Trip_Id    IN  VARCHAR2,
p_msciomvw IN mspks_msciomvw_Main.ty_msciomvw,
p_Prev_msciomvw IN mspks_msciomvw_Main.ty_msciomvw,
p_Wrk_msciomvw IN OUT  mspks_msciomvw_Main.ty_msciomvw,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Query  ( p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Key_Tags_Vals   IN OUT VARCHAR2,
p_QryData_Reqd IN  VARCHAR2 ,
p_msciomvw IN   mspks_msciomvw_Main.ty_msciomvw,
p_Wrk_msciomvw IN OUT   mspks_msciomvw_Main.ty_msciomvw,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Query  ( p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Main_Function    IN  VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Key_Tags_Vals   IN OUT VARCHAR2,
p_QryData_Reqd IN  VARCHAR2 ,
p_msciomvw IN   mspks_msciomvw_Main.Ty_msciomvw,
p_Wrk_msciomvw IN OUT   mspks_msciomvw_Main.Ty_msciomvw,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

END mspks_msciomvw_kernel;
/
CREATE OR REPLACE SYNONYM mspkss_msciomvw_kernel FOR mspks_msciomvw_kernel
/