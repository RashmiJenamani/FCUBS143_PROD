PROMPT PROCESSING FOR ERTB_SUPPRESSED_ERR_CODES 

CREATE TABLE ERTB_SUPPRESSED_ERR_CODES
(
FUNCTION_ID VARCHAR2(8) , 
SOURCE_CODE VARCHAR2(15) , 
ERROR_CODE_LIST VARCHAR2(1000)
)
/
ALTER TABLE ERTB_SUPPRESSED_ERR_CODES
ADD CONSTRAINT PK_ERTB_SUPPRESSED_ERR_CODES PRIMARY KEY(SOURCE_CODE,FUNCTION_ID)
/

CREATE OR REPLACE SYNONYM  ERTBS_SUPPRESSED_ERR_CODES FOR ERTB_SUPPRESSED_ERR_CODES
/

