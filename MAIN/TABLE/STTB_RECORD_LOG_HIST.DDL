PROMPT PROCESSING FOR STTB_RECORD_LOG_HIST 

CREATE TABLE STTB_RECORD_LOG_HIST
(
KEY_ID VARCHAR2(200) , 
MOD_NO  NUMBER , 
BRANCH_CODE VARCHAR2(3) , 
FUNCTION_ID VARCHAR2(30) , 
TABLE_NAME VARCHAR2(30) , 
MAKER_ID VARCHAR2(12) , 
MAKER_DT_STAMP DATE , 
CHECKER_ID VARCHAR2(12) , 
CHECKER_DT_STAMP DATE , 
RECORD_STAT CHAR(1) , 
AUTH_STAT CHAR(1)
)
/
ALTER TABLE STTB_RECORD_LOG_HIST
ADD CONSTRAINT PK01_STTB_RECORD_LOG_HIST PRIMARY KEY(KEY_ID,MOD_NO)
/

CREATE OR REPLACE SYNONYM  STTBS_RECORD_LOG_HIST FOR STTB_RECORD_LOG_HIST
/

