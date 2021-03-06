PROMPT PROCESSING FOR MSTM_EMS_OVERLAP_PROTOCOL 

CREATE TABLE MSTM_EMS_OVERLAP_PROTOCOL
(
PROTOCOL_NAME VARCHAR2(30) , 
DESCRIPTION VARCHAR2(300) , 
PROTOCOL VARCHAR2(1) , 
FILE_PATH VARCHAR2(1000) , 
ONCE_AUTH VARCHAR2(1) , 
RECORD_STAT VARCHAR2(1) , 
AUTH_STAT VARCHAR2(1) , 
MOD_NO NUMBER(4) , 
MAKER_ID VARCHAR2(12) , 
MAKER_DT_STAMP DATE , 
CHECKER_ID VARCHAR2(12) , 
CHECKER_DT_STAMP DATE , 
SIGNATURE_LIST VARCHAR2(1) , 
DIGEST_ALGORITHM VARCHAR2(1000)
)
/
ALTER TABLE MSTM_EMS_OVERLAP_PROTOCOL
ADD CONSTRAINT C1_MSTM_EMS_OVERLAP_PROTOCOL CHECK(  "PROTOCOL_NAME" IS NOT NULL)
/
ALTER TABLE MSTM_EMS_OVERLAP_PROTOCOL
ADD CONSTRAINT PK01_MSTM_EMS_OVERLAP_PROTOCOL PRIMARY KEY(PROTOCOL_NAME)
/

