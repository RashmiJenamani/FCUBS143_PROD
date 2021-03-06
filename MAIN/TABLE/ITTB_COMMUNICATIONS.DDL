PROMPT PROCESSING FOR ITTB_COMMUNICATIONS 

CREATE TABLE ITTB_COMMUNICATIONS
(
COMMUNICATION_ID  NUMBER , 
COMMUNICATION_TYPE VARCHAR2(1) , 
COMMUNICATION_REFERENCE VARCHAR2(20) , 
COMMUNICATION_SUB_REFERENCE VARCHAR2(20) , 
FREQUENCY VARCHAR2(1) , 
EFFECTIVE_DATE DATE , 
EXPIRY_DATE DATE , 
TARGET VARCHAR2(255) , 
TARGET_TYPE VARCHAR2(1) , 
CHANNEL VARCHAR2(1) , 
LANGUAGE VARCHAR2(3) , 
PROCESS_STATUS VARCHAR2(1) , 
MESSAGE VARCHAR2(4000) , 
PHONE_NUMBER VARCHAR2(20) , 
EMAIL_SUBJECT VARCHAR2(255) , 
EMAIL_ADDRESS VARCHAR2(255) , 
END_DATE DATE , 
REVIEWED VARCHAR2(1) DEFAULT 'N' , 
DEPARTMENT VARCHAR2(3)
)
/

CREATE INDEX  IN_TARGET
 ON ITTB_COMMUNICATIONS
 (
TARGET
)
/
ALTER TABLE ITTB_COMMUNICATIONS
ADD CONSTRAINT C1_ITTB_COMMUNICATIONS CHECK(    "COMMUNICATION_ID" IS NOT NULL)
/
ALTER TABLE ITTB_COMMUNICATIONS
ADD CONSTRAINT PK01_ITTB_COMMUNICATIONS PRIMARY KEY(COMMUNICATION_ID)
/

