PROMPT PROCESSING FOR GITM_OBJECT_FIELD_MAPPING 

CREATE TABLE GITM_OBJECT_FIELD_MAPPING
(
NAME VARCHAR2(16) , 
FIELD_NAME VARCHAR2(50) , 
TABLE_NAME VARCHAR2(50) , 
ALIAS_NAME VARCHAR2(100) , 
DATA_TYPE VARCHAR2(10) , 
DATA_LENGTH NUMBER(4)
)
/
ALTER TABLE GITM_OBJECT_FIELD_MAPPING
ADD CONSTRAINT PK01_GITM_OBJECT_FIELD_MAPPIN PRIMARY KEY(NAME,TABLE_NAME,FIELD_NAME)
/

