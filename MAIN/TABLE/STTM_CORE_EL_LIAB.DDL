PROMPT PROCESSING FOR STTM_CORE_EL_LIAB 

CREATE TABLE STTM_CORE_EL_LIAB
(
ID NUMBER(20) , 
LIAB_NO VARCHAR2(9) , 
LIAB_NAME VARCHAR2(255) , 
LIAB_BRANCH VARCHAR2(3) , 
LIAB_CCY VARCHAR2(3) , 
HOST_CODE VARCHAR2(8) , 
SOURCE_SYSTEM VARCHAR2(35) , 
SOURCE_SYSTEM_LIAB_NO VARCHAR2(9) , 
OVERALL_LIMIT NUMBER(24,3) , 
MAIN_LIAB_ID NUMBER(20) , 
REVISION_DATE DATE , 
CREDIT_RATING VARCHAR2(10) , 
RECORD_STAT VARCHAR2(1) , 
AUTH_STAT VARCHAR2(1) , 
MOD_NO NUMBER(4) , 
ONCE_AUTH VARCHAR2(1) , 
MAKER_ID VARCHAR2(50) , 
MAKER_DT_STAMP DATE , 
CHECKER_ID VARCHAR2(50) , 
CHECKER_DT_STAMP DATE
)
/

CREATE INDEX  UI01_STTM_CORE_EL_LIAB
 ON STTM_CORE_EL_LIAB
 (
LIAB_NO
)
/
ALTER TABLE STTM_CORE_EL_LIAB
ADD CONSTRAINT PK01_STTM_CORE_EL_LIAB PRIMARY KEY(ID)
/

CREATE OR REPLACE SYNONYM  STTMS_CORE_EL_LIAB FOR STTM_CORE_EL_LIAB
/

