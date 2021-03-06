PROMPT PROCESSING FOR SMTB_SYSTEM_REG 

CREATE TABLE SMTB_SYSTEM_REG
(
PARAM_NAME VARCHAR2(30) , 
PARAM_VALUE VARCHAR2(255) , 
RECORD_STAT CHAR(1) , 
AUTH_STAT CHAR(1) , 
MOD_NO NUMBER(4) , 
MAKER_ID VARCHAR2(12) , 
MAKER_DT_STAMP DATE , 
CHECKER_ID VARCHAR2(12) , 
CHECKER_DT_STAMP DATE , 
ONCE_AUTH CHAR(1)
)
/
ALTER TABLE SMTB_SYSTEM_REG
ADD CONSTRAINT PK01_SMTB_SYSTEM_REG PRIMARY KEY(PARAM_NAME)
/

CREATE OR REPLACE SYNONYM  SMTBS_SYSTEM_REG FOR SMTB_SYSTEM_REG
/

