INSERT INTO CSTB_SUMMARY_INFO
(FUNCTION_ID, SUMMARY_QUERY, COLUMN_LIST, DATATYPE_LIST, FIELD_LIST, TANKED_SUMMARY_QUERY, MULTIBRN_SUMMARY_QUERY, TANKED_MULTIBRN_SUMMARY_QUERY)
 VALUES 
('CFSFRTCD',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,RATE_CODE AS RATE_CODE,DESCRIPTION AS DESCRIPTION FROM CFTM_FLOATING_RATE_CODE SUMMARYDSN',
'AUTH_STAT~RECORD_STAT~RATE_CODE~DESCRIPTION~',
'VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~',
'AUTHSTAT~TXNSTAT~RATE_CODE~DESCRIPTION~',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,CHAR_FLD_1 AS RATE_CODE,CHAR_FLD_2 AS DESCRIPTION FROM  STTB_RECORD_MASTER  SUMMARYDSN WHERE FUNCTION_ID = ''CFDFRTCD''',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,RATE_CODE AS RATE_CODE,DESCRIPTION AS DESCRIPTION FROM CFTM_FLOATING_RATE_CODE SUMMARYDSN',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,CHAR_FLD_1 AS RATE_CODE,CHAR_FLD_2 AS DESCRIPTION FROM  STTB_RECORD_MASTER SUMMARYDSN WHERE FUNCTION_ID = ''CFDFRTCD'''
)
/