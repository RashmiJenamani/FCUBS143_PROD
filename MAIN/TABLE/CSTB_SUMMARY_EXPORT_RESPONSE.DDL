PROMPT PROCESSING FOR CSTB_SUMMARY_EXPORT_RESPONSE 

CREATE TABLE CSTB_SUMMARY_EXPORT_RESPONSE
(
REFERENCE_NUMBER VARCHAR2(16) , 
FILE_NAME VARCHAR2(100) , 
RESPONSE_STATUS VARCHAR2(1) , 
RESPONSE_TIME DATE , 
RECORD_COUNT NUMBER(10)
)
/
ALTER TABLE CSTB_SUMMARY_EXPORT_RESPONSE
ADD CONSTRAINT PK_CSTB_SUM_EXP_RESP PRIMARY KEY(REFERENCE_NUMBER,FILE_NAME)
/

