PROMPT PROCESSING FOR CSTB_FID_CALLFORMS_011

BEGIN
INSERT INTO CSTB_FID_CALLFORMS
(FUNCTION_ID,CALL_FORM,FORM_TYPE,REL_TYPE
,CALL_FORM_NO,CALLFORM_PARENT_DATASRC,CALLFORM_PARENT_BLOCK)
 VALUES 
('SMDBANKP',
'CSCFNUDF',
'MAINTENANCE',
'N',
1,'SMTBS_PARAMETERS',
'BLK_SMTBS_PARAMETERS'
)
;
END;
/



commit;
