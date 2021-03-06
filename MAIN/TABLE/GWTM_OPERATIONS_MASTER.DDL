PROMPT PROCESSING FOR GWTM_OPERATIONS_MASTER 

CREATE TABLE GWTM_OPERATIONS_MASTER
(
SERVICE_NAME VARCHAR2(50) , 
OPERATION_CODE VARCHAR2(50) , 
SERVICE_DESC VARCHAR2(4000) , 
OPERATION_DESCRIPTION VARCHAR2(4000) , 
MODULE_CODE VARCHAR2(2) , 
REPLY_REQD VARCHAR2(1) , 
FULL_SCREEN_XSD VARCHAR2(50) , 
INPUT_ONLY_XSD VARCHAR2(50) , 
PKEY_XSD VARCHAR2(50) , 
ERROR_XSD VARCHAR2(50) , 
PKEY_RES_XSD VARCHAR2(50) , 
FULL_SCREEN_RES_XSD VARCHAR2(50) , 
FC_FUNCTION_ID VARCHAR2(8) , 
FC_ACTION VARCHAR2(50) , 
DEFAULT_FUNCTION VARCHAR2(1) , 
LOG_REQD VARCHAR2(1) , 
SMS_FUNCTION_ID VARCHAR2(8) , 
SMS_ACTION VARCHAR2(50) , 
FS_REQ_XSD VARCHAR2(50) , 
PK_RES_XSD VARCHAR2(50) , 
FS_RES_XSD VARCHAR2(50) , 
LOGGING_REQD VARCHAR2(50) , 
IO_REQ_XSD VARCHAR2(50)
)
/
ALTER TABLE GWTM_OPERATIONS_MASTER
ADD CONSTRAINT PK01_GWTM_OPERATIONS_MASTER PRIMARY KEY(SERVICE_NAME,OPERATION_CODE)
/

CREATE OR REPLACE SYNONYM  GWTMS_OPERATIONS_MASTER FOR GWTM_OPERATIONS_MASTER
/

