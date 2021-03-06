PROMPT PROCESSING FOR GITM_COMPONENT_LINKAGE 

CREATE TABLE GITM_COMPONENT_LINKAGE
(
BRANCH_CODE VARCHAR2(3) , 
EXTERNAL_SYSTEM VARCHAR2(10) , 
INTERFACE_CODE VARCHAR2(8) , 
COMPONENT_NAME VARCHAR2(10) , 
PARENT VARCHAR2(10) , 
RELATION VARCHAR2(255) , 
PRE_COMPONENT_TRIGGER VARCHAR2(4000) , 
POST_COMPONENT_TRIGGER VARCHAR2(4000) , 
START_IDENTIFIER VARCHAR2(30) , 
END_IDENTIFIER VARCHAR2(30) , 
WHERE_CLAUSE VARCHAR2(4000) , 
GROUPBY_CLAUSE VARCHAR2(4000) , 
ORDERBY_CLAUSE VARCHAR2(4000) , 
HAVING_CLAUSE VARCHAR2(4000) , 
COMPONENT_TYPE VARCHAR2(10) , 
SERIAL_NO NUMBER(10) , 
BATCH_BY_FIELD VARCHAR2(10) , 
RECORD_START_ID VARCHAR2(30) , 
RECORD_END_ID VARCHAR2(30) , 
PRE_RECORD_TRIGGER VARCHAR2(4000) , 
POST_RECORD_TRIGGER VARCHAR2(4000) , 
POST_COMPONENT_AUDF VARCHAR2(4000) , 
PRE_RECORD_AUDF VARCHAR2(4000) , 
POST_RECORD_AUDF VARCHAR2(4000) , 
PRE_COMPONENT_AUDF VARCHAR2(4000) , 
CALLFORM_NAME VARCHAR2(30)
)
/
ALTER TABLE GITM_COMPONENT_LINKAGE
ADD CONSTRAINT PK01_GITM_COMPONENT_LINKAGE PRIMARY KEY(INTERFACE_CODE,COMPONENT_NAME)
/

