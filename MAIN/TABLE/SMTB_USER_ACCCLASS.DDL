PROMPT PROCESSING FOR SMTB_USER_ACCCLASS 

CREATE TABLE SMTB_USER_ACCCLASS
(
USER_ID VARCHAR2(12) , 
ACCOUNT_CLASS VARCHAR2(6)
)
/
ALTER TABLE SMTB_USER_ACCCLASS
ADD CONSTRAINT PK01_SMTB_USER_ACCCLASS PRIMARY KEY(USER_ID,ACCOUNT_CLASS)
/

CREATE OR REPLACE SYNONYM  SMTBS_USER_ACCCLASS FOR SMTB_USER_ACCCLASS
/

