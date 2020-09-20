CREATE OR REPLACE VIEW givw_interface_pkey_master AS
/*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2004 - 2010  Oracle and/or its affiliates.  All rights reserved.
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
By         : S.ChandraMohan
** Change Description : 9NT1428: ITR1 - SFR#110
** Search String      : 9NT1428 - ITR1 - SFR#110
----------------------------------------------------------------------------------------------------*/
SELECT
FL.BRANCH_CODE  ,
FL.INTERFACE_CODE	,
FL.EXTERNAL_SYSTEM,
FL.STATUS	,
FL.FILE_NAME	,
FL.USER_ID	,
FM.PROCESS_CODE	,
FM.PROCESS_REF_NO	,
FL.START_DATE_STAMP	,
FL.END_DATE_STAMP	,
FL.UPLOAD_DATE	,
FL.RECORDS_PROCESSED	,
FL.RECORDS_ERRORED	,
FL.ERROR_CODE	,
FL.ERROR_PARAMS	,
FL.CHECKER_DT_STAMP	,
FL.ONCE_AUTH	,
FL.MOD_NO	,
FL.RECORD_STAT	,
FL.AUTH_STAT	,
FM.PHY_FILE_NAME	,
FL.ERR_FILE_NAME	,
K.PKEY1	,
K.PKEY2	,
K.PKEY3	,
K.PKEY4	,
K.PKEY5
FROM GITB_FILE_LOG FL, GITM_INTERFACE_PKEY K, GITB_FILE_MASTER FM
WHERE FL.INTERFACE_CODE=K.INTERFACE_CODE AND FM.INTERFACE_CODE=FL.INTERFACE_CODE AND FL.PROCESS_REF_NO=FM.PROCESS_REF_NO AND FL.FILE_NAME = FM.FILE_NAME
AND FL.PROCESS_CODE = FM.PROCESS_CODE--9NT1428 - ITR2 - SFR#110
--#15901330
union
SELECT
FL.BRANCH_CODE  ,
FL.INTERFACE_CODE	,
FL.EXTERNAL_SYSTEM,
FL.STATUS	,
FL.FILE_NAME	,
FL.USER_ID	,
FL.PROCESS_CODE	,
FL.PROCESS_REF_NO	,
FL.START_DATE_STAMP	,
FL.END_DATE_STAMP	,
FL.UPLOAD_DATE	,
FL.RECORDS_PROCESSED	,
FL.RECORDS_ERRORED	,
FL.ERROR_CODE	,
FL.ERROR_PARAMS	,
FL.CHECKER_DT_STAMP	,
FL.ONCE_AUTH	,
FL.MOD_NO	,
FL.RECORD_STAT	,
FL.AUTH_STAT	,
FL.PHY_FILE_NAME	,
FL.ERR_FILE_NAME	,
'',
'',
'',
'',
''
FROM GITB_FILE_LOG FL, GITM_INTERFACE_DEFINITION K
WHERE FL.INTERFACE_CODE=K.INTERFACE_CODE AND K.INTERFACE_TYPE = 'O'
/

CREATE OR REPLACE SYNONYM givws_interface_pkey_master FOR givw_interface_pkey_master
/
