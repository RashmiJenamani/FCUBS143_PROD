CREATE OR REPLACE PACKAGE  copks_coddyncl_kernel AS
  /*-----------------------------------------------------------------------------------------------------
  **
  ** File Name  : copks_coddyncl_kernel.spc
  **
  ** Module     : CO
  ** 
  ** This source is part of the Oracle FLEXCUBE Software Product.
  ** Copyright (R) 2008,2018 , Oracle and/or its affiliates.  All rights reserved
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
FUNCTION Fn_Post_Build_Type_Structure (p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Addl_Info       IN Cspks_Req_Global.Ty_Addl_Info,
p_coddyncl     IN  OUT copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Check_Mandatory(p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_pk_or_full     IN  VARCHAR2 DEFAULT 'FULL',
p_coddyncl IN  OUT  copks_coddyncl_Main.ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Check_Mandatory(p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Pk_Or_Full     IN  VARCHAR2 DEFAULT 'FULL',
p_coddyncl IN   copks_coddyncl_Main.ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Default_And_Validate (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_coddyncl IN   copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN OUT copks_coddyncl_Main.Ty_coddyncl,
p_Wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Default_And_Validate (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_coddyncl IN   copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN OUT copks_coddyncl_Main.Ty_coddyncl,
p_wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Resolve_Ref_Numbers         (p_Source            IN VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_coddyncl     IN OUT copks_coddyncl_Main.ty_coddyncl,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ;
FUNCTION Fn_Post_Resolve_Ref_Numbers         (p_Source            IN VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_coddyncl     IN OUT copks_coddyncl_Main.ty_coddyncl,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ;
FUNCTION Fn_Pre_Product_Default (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.ty_coddyncl,
p_wrk_coddyncl IN OUT  copks_coddyncl_Main.ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Product_Default (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Unlock (p_Source            IN VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
p_Action_Code       IN  OUT  VARCHAR2,
p_coddyncl     IN  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ;
FUNCTION Fn_Post_Unlock (p_Source            IN VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
p_Action_Code       IN  OUT  VARCHAR2,
p_coddyncl     IN  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ;
FUNCTION Fn_Pre_Subsys_Pickup (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Subsys_Pickup (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_action_code       IN     VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Enrich (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_err_params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Enrich (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Upload_Db (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Multi_Trip_Id    IN  VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Upload_Db (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Multi_Trip_Id    IN  VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Process (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Multi_Trip_Id    IN  VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Process (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Multi_Trip_Id    IN  VARCHAR2,
p_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Prev_coddyncl IN copks_coddyncl_Main.Ty_coddyncl,
p_Wrk_coddyncl IN OUT  copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Query  ( p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Full_Data     IN  VARCHAR2 DEFAULT 'Y',
p_with_Lock     IN  VARCHAR2 DEFAULT 'N',
p_QryData_Reqd IN  VARCHAR2 ,
p_coddyncl IN   copks_coddyncl_Main.Ty_coddyncl,
p_wrk_coddyncl IN OUT   copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Query  ( p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Full_Data     IN  VARCHAR2 DEFAULT 'Y',
p_With_Lock     IN  VARCHAR2 DEFAULT 'N',
p_QryData_Reqd IN  VARCHAR2 ,
p_coddyncl IN   copks_coddyncl_Main.Ty_coddyncl,
p_wrk_coddyncl IN OUT   copks_coddyncl_Main.Ty_coddyncl,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

END copks_coddyncl_kernel;
/
CREATE OR REPLACE SYNONYM copkss_coddyncl_kernel FOR copks_coddyncl_Kernel
/