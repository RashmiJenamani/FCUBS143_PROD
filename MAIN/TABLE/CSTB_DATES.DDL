PROMPT PROCESSING FOR CSTB_DATES 

CREATE TABLE CSTB_DATES
(
DATE_TYPE VARCHAR2(30) , 
DATE_VALUE DATE
)
/
ALTER TABLE CSTB_DATES
ADD CONSTRAINT PK01_CSTB_DATES PRIMARY KEY(DATE_TYPE)
/

CREATE OR REPLACE SYNONYM  CSTBS_DATES FOR CSTB_DATES
/

