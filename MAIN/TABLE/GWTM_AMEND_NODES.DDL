PROMPT PROCESSING FOR GWTM_AMEND_NODES 

CREATE TABLE GWTM_AMEND_NODES
(
EXT_SYSTEM VARCHAR2(15) , 
SOURCE_OPERATION VARCHAR2(50) , 
NODE_NAME VARCHAR2(50) , 
NEW_ALLOWED VARCHAR2(1) , 
DELETE_ALLOWED VARCHAR2(1) , 
ALL_RECORDS VARCHAR2(1) , 
RAD_FUNCTION_ID VARCHAR2(50) , 
ORIGIN_SYSTEM VARCHAR2(50)
)
/
ALTER TABLE GWTM_AMEND_NODES
ADD CONSTRAINT PK01_GWTM_AMEND_NODES PRIMARY KEY(EXT_SYSTEM,SOURCE_OPERATION,NODE_NAME,ORIGIN_SYSTEM)
/

CREATE OR REPLACE SYNONYM  GWTMS_AMEND_NODES FOR GWTM_AMEND_NODES
/
CREATE OR REPLACE SYNONYM  PM_GWTM_AMEND_NODES FOR GWTM_AMEND_NODES
/

