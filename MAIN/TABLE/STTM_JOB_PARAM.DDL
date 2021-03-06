PROMPT PROCESSING FOR STTM_JOB_PARAM 

CREATE TABLE STTM_JOB_PARAM
(
JOB_CODE VARCHAR2(100) , 
PARAM_NAME VARCHAR2(200) , 
DATA_TYPE VARCHAR2(9) , 
PARAM_VALUE VARCHAR2(200)
)
/
ALTER TABLE STTM_JOB_PARAM
ADD CONSTRAINT C1_STTM_JOB_PARAM CHECK(    "JOB_CODE" IS NOT NULL)
/
ALTER TABLE STTM_JOB_PARAM
ADD CONSTRAINT C2_STTM_JOB_PARAM CHECK(    "PARAM_NAME" IS NOT NULL)
/
ALTER TABLE STTM_JOB_PARAM
ADD CONSTRAINT STTM_JOB_PARAM_PK PRIMARY KEY(JOB_CODE,PARAM_NAME)
/

