PROMPT PROCESSING FOR CSTB_CALL_FORM_NODES_001

BEGIN
INSERT INTO CSTB_CALL_FORM_NODES
(CALL_FORM,MASTER_DATA_SOURCE,MASTER_BLOCK,MASTER_XSD_NODE
,XSD_TYPE_DESC,MASTER_MULTI_RECORD,SCREEN_ARGS,CALL_FORM_TYPE,CALL_FORM_MODULE
,IS_UPLOAD_TABLE_PRESENT)
 VALUES 
('CSCFNUDF',
'UDTBS_FUNC_UDF_UPLOAD_DETAIL',
'BLK_UDF_DETAILS',
'Udf-Details',
'','Y',
'','DATA',
'CS',
'')
;
END;
/
BEGIN
INSERT INTO CSTB_CALL_FORM_NODES
(CALL_FORM,MASTER_DATA_SOURCE,MASTER_BLOCK,MASTER_XSD_NODE
,XSD_TYPE_DESC,MASTER_MULTI_RECORD,SCREEN_ARGS,CALL_FORM_TYPE,CALL_FORM_MODULE
,IS_UPLOAD_TABLE_PRESENT)
 VALUES 
('CSCUFVAL',
'UDTBS_FUNC_UDF_UPLOAD_DETAIL',
'','','','','','','','')
;
END;
/
BEGIN
INSERT INTO CSTB_CALL_FORM_NODES
(CALL_FORM,MASTER_DATA_SOURCE,MASTER_BLOCK,MASTER_XSD_NODE
,XSD_TYPE_DESC,MASTER_MULTI_RECORD,SCREEN_ARGS,CALL_FORM_TYPE,CALL_FORM_MODULE
,IS_UPLOAD_TABLE_PRESENT)
 VALUES 
('LMCAUTHZ',
'CSVWS_CONTRACT',
'BLK_CONTRACT',
'Contract',
'','N',
'FCCREF~ACTION_CODE~',
'DATA',
'LM',
'')
;
END;
/
BEGIN
INSERT INTO CSTB_CALL_FORM_NODES
(CALL_FORM,MASTER_DATA_SOURCE,MASTER_BLOCK,MASTER_XSD_NODE
,XSD_TYPE_DESC,MASTER_MULTI_RECORD,SCREEN_ARGS,CALL_FORM_TYPE,CALL_FORM_MODULE
,IS_UPLOAD_TABLE_PRESENT)
 VALUES 
('MSCIOMVW',
'MSVW_EMS_FILE_DTL',
'BLK_MESSAGE',
'Message',
'','N',
'','DATA',
'MS',
'')
;
END;
/



commit;
