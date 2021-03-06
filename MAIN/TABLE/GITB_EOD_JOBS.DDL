PROMPT PROCESSING FOR GITB_EOD_JOBS 

CREATE TABLE GITB_EOD_JOBS
(
BRANCH_CODE VARCHAR2(3) , 
BRANCH_DATE DATE , 
INTERFACE_CODE VARCHAR2(8) , 
EOD_STAGE VARCHAR2(30) , 
INTERFACE_TYPE VARCHAR2(1) , 
MANDATORY VARCHAR2(1) , 
EXECUTION_STATUS VARCHAR2(2) , 
JOB_ID  NUMBER , 
ERROR VARCHAR2(255) , 
ERROR_PARAMS VARCHAR2(255)
)
/
ALTER TABLE GITB_EOD_JOBS
ADD CONSTRAINT PK01_GITB_EOD_JOBS PRIMARY KEY(BRANCH_CODE,BRANCH_DATE,INTERFACE_CODE,EOD_STAGE)
/

