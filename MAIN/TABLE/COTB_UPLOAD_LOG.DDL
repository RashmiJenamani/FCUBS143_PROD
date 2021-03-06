PROMPT PROCESSING FOR COTB_UPLOAD_LOG 

CREATE TABLE COTB_UPLOAD_LOG
(
UPLOAD_ID VARCHAR2(16) , 
BRANCH_CODE VARCHAR2(3) , 
SOURCE_CODE VARCHAR2(15) , 
MODULE_CODE CHAR(2) , 
UPLOAD_DATE DATE , 
USER_ID VARCHAR2(12) , 
START_TIME DATE , 
END_TIME DATE , 
POST_UPLOAD_STATUS CHAR(1) , 
ON_ERROR_STATUS CHAR(1) , 
ON_OVERRIDE_STATUS CHAR(1) , 
PROCESS_STATUS CHAR(1) , 
PROCESS_ERR_CODE VARCHAR2(11) , 
UPLOADED_AUTH NUMBER(10) , 
UPLOADED_UNAUTH NUMBER(10) , 
UPLOADED_HOLD NUMBER(10) , 
REJECTED NUMBER(10) , 
TOTAL_PROCESSED NUMBER(10)
)
/
ALTER TABLE COTB_UPLOAD_LOG
ADD CONSTRAINT PK01_COTB_UPLOAD_LOG PRIMARY KEY(UPLOAD_ID)
/

CREATE OR REPLACE SYNONYM  COTBS_UPLOAD_LOG FOR COTB_UPLOAD_LOG
/

