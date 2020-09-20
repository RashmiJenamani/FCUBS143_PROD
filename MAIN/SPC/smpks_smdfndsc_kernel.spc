CREATE OR REPLACE PACKAGE  smpks_smdfndsc_kernel AS
  /*-----------------------------------------------------------------------------------------------------
  **
  ** File Name  : smpks_smdfndsc_kernel.spc
  **
  ** Module     : Security Management System
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
FUNCTION Fn_Post_Build_Type_Structure (p_Source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Addl_Info       IN Cspks_Req_Global.Ty_Addl_Info,
p_smdfndsc     IN  OUT smpks_smdfndsc_Main.Ty_smdfndsc,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Check_Mandatory(p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_smdfndsc IN  OUT  smpks_smdfndsc_Main.Ty_smdfndsc,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Check_Mandatory(p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Pk_Or_Full     IN  VARCHAR2 DEFAULT 'FULL',
p_smdfndsc IN   smpks_smdfndsc_Main.ty_smdfndsc,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Default_And_Validate (p_source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_smdfndsc IN   smpks_smdfndsc_Main.Ty_smdfndsc,
p_Prev_smdfndsc IN OUT smpks_smdfndsc_Main.Ty_smdfndsc,
p_Wrk_smdfndsc IN OUT  smpks_smdfndsc_Main.Ty_smdfndsc,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Default_And_Validate (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_smdfndsc IN   smpks_smdfndsc_Main.Ty_smdfndsc,
p_Prev_smdfndsc IN OUT smpks_smdfndsc_Main.Ty_smdfndsc,
p_Wrk_smdfndsc IN OUT  smpks_smdfndsc_Main.Ty_smdfndsc,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Upload_Db (p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Post_Upl_Stat    IN  VARCHAR2,
p_Multi_Trip_Id    IN  VARCHAR2,
p_smdfndsc IN smpks_smdfndsc_Main.ty_smdfndsc,
p_Prev_smdfndsc IN smpks_smdfndsc_Main.ty_smdfndsc,
p_Wrk_smdfndsc IN OUT  smpks_smdfndsc_Main.ty_smdfndsc,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Post_Upload_Db (p_Source    IN  VARCHAR2,
                        p_source_operation  IN     VARCHAR2,
                        p_Function_id       IN     VARCHAR2,
                        p_action_code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Post_Upl_Stat    IN  VARCHAR2,
p_Multi_Trip_Id    IN  VARCHAR2,
p_smdfndsc IN smpks_smdfndsc_Main.ty_smdfndsc,
p_Prev_smdfndsc IN smpks_smdfndsc_Main.ty_smdfndsc,
p_Wrk_smdfndsc IN OUT  smpks_smdfndsc_Main.ty_smdfndsc,
p_Err_Code       IN  OUT VARCHAR2,
p_Err_Params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Pre_Query  ( p_Source    IN  VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_Child_Function    IN  VARCHAR2,
p_Full_Data     IN  VARCHAR2 DEFAULT 'Y',
p_With_Lock     IN  VARCHAR2 DEFAULT 'N',
p_QryData_Reqd IN  VARCHAR2 ,
p_smdfndsc IN   smpks_smdfndsc_Main.ty_smdfndsc,
p_Wrk_smdfndsc IN OUT   smpks_smdfndsc_Main.ty_smdfndsc,
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
p_smdfndsc IN   smpks_smdfndsc_Main.Ty_smdfndsc,
p_Wrk_smdfndsc IN OUT   smpks_smdfndsc_Main.Ty_smdfndsc,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

END smpks_smdfndsc_kernel;
/
CREATE OR REPLACE SYNONYM smpkss_smdfndsc_kernel FOR smpks_smdfndsc_kernel
/