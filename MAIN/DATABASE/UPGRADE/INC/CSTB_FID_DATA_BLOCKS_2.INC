INSERT INTO CSTB_FID_DATA_BLOCKS
(FUNCTION_ID, BLOCK_NAME, BLOCK_NO, BLOCK_TYPE, BLOCK_PARENT, RELATION_TYPE, MULTI_RECORD, BLOCK_TITLE, XSD_NODE, DSN_LIST, RELATION_WITH_PARENT, FLD_TAG_FIELDS, FLD_TAG_XSD_TAGS, DSN_LIST_1, FLD_TAG_FIELDS_1, FLD_TAG_XSD_TAGS_1, DSN_LIST_2, FLD_TAG_FIELDS_2, FLD_TAG_XSD_TAGS_2)
 VALUES 
('CODDYNCL',
'BLK_CHILD',
2,'NORMAL',
'BLK_MASTER',
'N',
'Y',
'','Child',
'STTBS_PDBDYN_CALL_LOG~STTBS_PDBDYN_CALL_LOG~STTBS_PDBDYN_CALL_LOG~STTBS_PDBDYN_CALL_LOG~STTBS_PDBDYN_CALL_LOG~STTBS_PDBDYN_CALL_LOG~',
'','MODULE_CODE~FUNCTION_ID~FUNCTION_TYPE~FUNCTION_PARAM~VERSION_NO~STATUS~',
'MODULE_CODE~FUNCTION_ID~FUNCTION_TYPE~FUNCTION_PARAM~VERSION_NO~STATUS~',
'','','','','','')
/
INSERT INTO CSTB_FID_DATA_BLOCKS
(FUNCTION_ID, BLOCK_NAME, BLOCK_NO, BLOCK_TYPE, BLOCK_PARENT, RELATION_TYPE, MULTI_RECORD, BLOCK_TITLE, XSD_NODE, DSN_LIST, RELATION_WITH_PARENT, FLD_TAG_FIELDS, FLD_TAG_XSD_TAGS, DSN_LIST_1, FLD_TAG_FIELDS_1, FLD_TAG_XSD_TAGS_1, DSN_LIST_2, FLD_TAG_FIELDS_2, FLD_TAG_XSD_TAGS_2)
 VALUES 
('CODDYNCL',
'BLK_ERROR',
3,'NORMAL',
'BLK_MASTER',
'N',
'Y',
'','Error',
'STTBS_DYNCALL_EXCEPTION~STTBS_DYNCALL_EXCEPTION~STTBS_DYNCALL_EXCEPTION~STTBS_DYNCALL_EXCEPTION~STTBS_DYNCALL_EXCEPTION~STTBS_DYNCALL_EXCEPTION~',
'','MODULE_CODE~FUNCTION_ID~FUNCTION_TYPE~FUNCTION_PARAM~VERSION_NO~ERROR~',
'MODULE_CODE~FUNCTION_ID~FUNCTION_TYPE~FUNCTION_PARAM~VERSION_NO~ERROR~',
'','','','','','')
/
INSERT INTO CSTB_FID_DATA_BLOCKS
(FUNCTION_ID, BLOCK_NAME, BLOCK_NO, BLOCK_TYPE, BLOCK_PARENT, RELATION_TYPE, MULTI_RECORD, BLOCK_TITLE, XSD_NODE, DSN_LIST, RELATION_WITH_PARENT, FLD_TAG_FIELDS, FLD_TAG_XSD_TAGS, DSN_LIST_1, FLD_TAG_FIELDS_1, FLD_TAG_XSD_TAGS_1, DSN_LIST_2, FLD_TAG_FIELDS_2, FLD_TAG_XSD_TAGS_2)
 VALUES 
('CODDYNCL',
'BLK_MASTER',
1,'NORMAL',
'','1',
'N',
'','Master',
'CSTBS_UI_COLUMNS~CSTBS_UI_COLUMNS~CSTBS_UI_COLUMNS~',
'','MODULECODE~FUNCTIONID~STATUS~',
'MODULECODE~FUNCTIONID~STATUS~',
'','','','','','')
/