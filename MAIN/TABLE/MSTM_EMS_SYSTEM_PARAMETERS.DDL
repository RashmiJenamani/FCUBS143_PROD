PROMPT PROCESSING FOR MSTM_EMS_SYSTEM_PARAMETERS 

CREATE TABLE MSTM_EMS_SYSTEM_PARAMETERS
(
PARAMETER VARCHAR2(150) , 
VALUE VARCHAR2(150) , 
REMARK VARCHAR2(300) , 
RECORD_STAT VARCHAR2(1) DEFAULT 'O' , 
AUTH_STAT VARCHAR2(1) DEFAULT 'A' , 
MAKER_ID VARCHAR2(12) DEFAULT 'admin' , 
MAKER_DT_STAMP TIMESTAMP(3) DEFAULT SYSTIMESTAMP , 
CHECKER_ID VARCHAR2(12) , 
CHECKER_DT_STAMP TIMESTAMP(3) , 
CONFIGURABLE CHAR(1) DEFAULT 'Y' , 
DAT_FORMAT VARCHAR2(150) , 
APP_ID VARCHAR2(10) DEFAULT 'FCSSI' , 
ONCE_AUTH VARCHAR2(1) , 
MOD_NO NUMBER(4) , 
SHOW_IN_UI VARCHAR2(1) DEFAULT 'N'
)
/
ALTER TABLE MSTM_EMS_SYSTEM_PARAMETERS
ADD CONSTRAINT PK01_EMS_SYSTEM_PARAMETERS PRIMARY KEY(PARAMETER)
/

