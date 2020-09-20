CREATE OR REPLACE VIEW itvw_alrt_comms
(communication_id, email_subject, message, effective_date, rocess_status, un_id, fn_id, review, dismiss, target)
AS
/*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2011 - 2015  Oracle and/or its affiliates.  All rights reserved.
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
-----------------------------------------------------------------------------------------
*/
SELECT communication_id, email_subject, message, effective_date, process_status, UN_ID, FN_ID,
REVIEW, DISMISS, TARGET from
(SELECT communication_id,email_subject,message,effective_date,'Process_status' Process_status, 'UN_ID' UN_ID, 'FN_ID' FN_ID,
'' REVIEW,'' DISMISS, 'TARGET' TARGET
FROM ittb_communications
WHERE communication_type= 'A'
UNION
SELECT ic.communication_id communication_id,ic.email_subject email_subject,ic.message message,ic.effective_date effective_date,
ic.Process_status Process_status,
SUBSTR(ic.message,0,INSTR(ic.message, ' ')-1) UN_ID,
(CASE
  WHEN UPPER(SUBSTR(iac.from_clause,0,INSTR(iac.from_clause, ' ')-1)) = 'GETM_FACILITY' and (select param_val from cstb_param where param_name='PROCESS_ENGINE') ='BPM' THEN 'ORDLMRIN'
  WHEN UPPER(SUBSTR(iac.from_clause,0,INSTR(iac.from_clause, ' ')-1)) = 'GETM_FACILITY' and (select param_val from cstb_param where param_name='PROCESS_ENGINE') ='BPEL' THEN /*'ORDLRWIN'*/'ORDLMRIN' --21839024 change
end) FN_ID,
(CASE
  WHEN UPPER(SUBSTR(iac.from_clause,0,INSTR(iac.from_clause, ' ')-1)) = 'GETM_FACILITY' and (select param_val from cstb_param where param_name='PROCESS_ENGINE') ='BPM' THEN 'REVIEW'
  WHEN UPPER(SUBSTR(iac.from_clause,0,INSTR(iac.from_clause, ' ')-1)) = 'GETM_FACILITY' and (select param_val from cstb_param where param_name='PROCESS_ENGINE') ='BPEL' THEN 'REVIEW'
end) "REVIEW", 'DISMISS' "DISMISS", ic.TARGET TARGET
FROM ittb_communications ic,ittm_alert_definition iad,ittm_alert_criteria iac
WHERE ic.communication_reference=iad.alert_code
and iad.criteria_code=iac.criteria_code
and ic.communication_type= 'A'
and ic.reviewed='N'
and ic.channel='D'
) vals
order by effective_date
/
CREATE OR REPLACE SYNONYM itvws_alrt_comms FOR itvw_alrt_comms
/