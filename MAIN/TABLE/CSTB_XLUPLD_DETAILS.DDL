PROMPT PROCESSING FOR CSTB_XLUPLD_DETAILS 

CREATE TABLE CSTB_XLUPLD_DETAILS
(
BATCH_REF_NO VARCHAR2(50) , 
RECORD_NO  NUMBER , 
RECORD_KEY VARCHAR2(4000) , 
UPLOAD_STATUS VARCHAR2(1) , 
ERRORS VARCHAR2(4000) , 
REC_ID VARCHAR2(255)
)
/
ALTER TABLE CSTB_XLUPLD_DETAILS
ADD CONSTRAINT PK_CSTB_XLUPLD_DETAILS PRIMARY KEY(BATCH_REF_NO,RECORD_NO)
/

CREATE OR REPLACE SYNONYM  CSTBS_XLUPLD_DETAILS FOR CSTB_XLUPLD_DETAILS
/

