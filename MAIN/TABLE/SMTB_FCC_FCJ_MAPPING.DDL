PROMPT PROCESSING FOR SMTB_FCC_FCJ_MAPPING 

CREATE TABLE SMTB_FCC_FCJ_MAPPING
(
FCC_FUNCTION_ID VARCHAR2(32) , 
FCJ_FUNCTION_ID VARCHAR2(32) , 
RAD_FUNCTION_ID VARCHAR2(200)
)
/
ALTER TABLE SMTB_FCC_FCJ_MAPPING
ADD CONSTRAINT PK_SMTB_FCC_FCJ_MAPPING PRIMARY KEY(FCJ_FUNCTION_ID)
/

CREATE OR REPLACE SYNONYM  SMTBS_FCC_FCJ_MAPPING FOR SMTB_FCC_FCJ_MAPPING
/

