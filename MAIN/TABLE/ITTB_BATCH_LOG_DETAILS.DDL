PROMPT PROCESSING FOR ITTB_BATCH_LOG_DETAILS 

CREATE TABLE ITTB_BATCH_LOG_DETAILS
(
COMMUNICATION_TYPE VARCHAR2(2) , 
BATCH_RUN_DATE DATE , 
COMMUNICATION_REFERENCE VARCHAR2(20) , 
COMMUNICATION_SUB_REFERENCE VARCHAR2(20) , 
ERROR_CODE VARCHAR2(4000) , 
ERROR_MESSAGE VARCHAR2(4000) , 
ID RAW(16) DEFAULT SYS_GUID()
)
/
ALTER TABLE ITTB_BATCH_LOG_DETAILS
ADD CONSTRAINT PK01_ITTB_BATCH_LOG_DETAIL PRIMARY KEY(ID)
/

CREATE OR REPLACE SYNONYM  ITTBS_BATCH_LOG_DETAILS FOR ITTB_BATCH_LOG_DETAILS
/

