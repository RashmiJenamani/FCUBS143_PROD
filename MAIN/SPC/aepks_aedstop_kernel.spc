CREATE OR REPLACE PACKAGE Aepks_Aedstop_Kernel AS
   /*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright � 2008 - 2011  Oracle and/or its affiliates.  All rights reserved.
** 												
** No part of this work may be reproduced, stored in a retrieval system,
** adopted or transmitted in any form or by any means, electronic, mechanical, photographic, graphic, optic recording or otherwise,
** translated in any language or computer language,
** without the prior written permission of Oracle and/or its affiliates.
** 
** 
** Oracle Financial Services Software Limited.
** Oracle Park, Off Western Express Highway,
** Goregaon (East),
** Mumbai - 400 063, India.
------------------------------------------------------------------------------------------
*/
/*
   -------------------------------------------------------------------------------------------------------
   CHANGE HISTORY

   SFR Number         :
   Changed By         :
   Change Description :

   -------------------------------------------------------------------------------------------------------
   */

   PROCEDURE Pr_Skip_Handler(p_Stage IN VARCHAR2);

   FUNCTION Fn_Main(p_Source           IN VARCHAR2
                   ,p_Source_Operation IN VARCHAR2
                   ,p_Function_Id      IN VARCHAR2
                   ,p_Action_Code      IN VARCHAR2
                   ,p_Child_Function   IN VARCHAR2
                   ,p_Multi_Trip_Id    IN VARCHAR2
                   ,p_Request_No       IN VARCHAR2
                   ,p_Aedstop          IN OUT Aepks_Aedstop_Main.Ty_Aedstop
                   ,p_Status           IN OUT VARCHAR2
                   ,p_Err_Code         IN OUT VARCHAR2
                   ,p_Err_Params       IN OUT VARCHAR2) RETURN BOOLEAN;

   FUNCTION Fn_Post_Build_Type_Structure(p_Source           IN VARCHAR2
                                        ,p_Source_Operation IN VARCHAR2
                                        ,p_Function_Id      IN VARCHAR2
                                        ,p_Action_Code      IN VARCHAR2
                                        ,p_Child_Function   IN VARCHAR2
                                        ,p_Addl_Info        IN Cspks_Req_Global.Ty_Addl_Info
                                        ,p_Aedstop          IN OUT Aepks_Aedstop_Main.Ty_Aedstop
                                        ,p_Err_Code         IN OUT VARCHAR2
                                        ,p_Err_Params       IN OUT VARCHAR2) RETURN BOOLEAN;

END Aepks_Aedstop_Kernel;
/
CREATE OR REPLACE SYNONYM Aepkss_Aedstop_Kernel FOR Aepks_Aedstop_Kernel
/
