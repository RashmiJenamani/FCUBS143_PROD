PROMPT PROCESSING FOR MSTM_EMS_CACHE 

CREATE TABLE MSTM_EMS_CACHE
(
FILE_NAME VARCHAR2(250) , 
FILE_TYPE VARCHAR2(50)
)
/
ALTER TABLE MSTM_EMS_CACHE
ADD CONSTRAINT C1_MSTM_EMS_CACHE CHECK(  "FILE_NAME" IS NOT NULL)
/
ALTER TABLE MSTM_EMS_CACHE
ADD CONSTRAINT PK01_MSTM_EMS_CACHE PRIMARY KEY(FILE_NAME,FILE_TYPE)
/

