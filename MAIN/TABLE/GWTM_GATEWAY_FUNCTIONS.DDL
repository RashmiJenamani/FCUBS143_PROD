PROMPT PROCESSING FOR GWTM_GATEWAY_FUNCTIONS 

CREATE TABLE GWTM_GATEWAY_FUNCTIONS
(
SERVICE_NAME VARCHAR2(50) , 
OPERATION_CODE VARCHAR2(50) , 
FUNCTION_ID VARCHAR2(8) , 
ACTION VARCHAR2(15)
)
/
ALTER TABLE GWTM_GATEWAY_FUNCTIONS
ADD CONSTRAINT PK01_GWTM_GATEWAY_FUNCTIONS PRIMARY KEY(SERVICE_NAME,OPERATION_CODE)
/

CREATE OR REPLACE SYNONYM  GWTMS_GATEWAY_FUNCTIONS FOR GWTM_GATEWAY_FUNCTIONS
/

