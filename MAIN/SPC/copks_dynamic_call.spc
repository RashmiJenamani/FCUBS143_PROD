CREATE OR REPLACE PACKAGE copks_dynamic_call AS
/*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2018  Oracle and/or its affiliates.  All rights reserved.
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
**
**	Modified By   :	Priyadharshini Balachandran
** 	Modified on   : 09-Oct-2018
** 	Description   : New function added and exposed for handling the dynamic package creation in PDB 
					and DML execution in PDB which has to happen as part of approot functions for common core.
** 	Search String : FCUBS_14.2_18C_Changes
**
-----------------------------------------------------------------------------------------*/
--FCUBS_14.2_18C_Changes Starts
 
  FUNCTION fn_invoke_dynamic_pdbcall (p_module_code    IN  sttb_appdyn_call.module_code%TYPE,
									  p_function_id    IN  sttb_appdyn_call.function_id%TYPE,
									  p_function_type  IN  sttb_appdyn_call.function_type%TYPE,
									  p_function_param IN  sttb_appdyn_call.function_param%TYPE,
									  p_version_no     IN  sttb_appdyn_call.version_no%TYPE,
									  p_error_code     IN OUT VARCHAR2,
									  p_error_param    IN OUT VARCHAR2)
  RETURN BOOLEAN;
--FCUBS_14.2_18C_Changes ends
END copks_dynamic_call;
/