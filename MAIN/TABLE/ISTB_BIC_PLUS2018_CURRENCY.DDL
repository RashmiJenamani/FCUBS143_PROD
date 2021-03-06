PROMPT PROCESSING FOR ISTB_BIC_PLUS2018_CURRENCY 

CREATE TABLE ISTB_BIC_PLUS2018_CURRENCY
(
TAG VARCHAR2(2) , 
CURRENCY_CODE VARCHAR2(3) , 
CURRENCY_NAME VARCHAR2(70) , 
FRACTIONAL_DIGIT NUMBER(1) , 
COUNTRY_CODE VARCHAR2(2) DEFAULT 'NA' , 
COUNTRY_NAME VARCHAR2(70) , 
ACTIVATION_DATE DATE
)
/
ALTER TABLE ISTB_BIC_PLUS2018_CURRENCY
ADD CONSTRAINT PK01_ISTB_BIC_PLUS18_CCY PRIMARY KEY(TAG,CURRENCY_CODE,COUNTRY_CODE,FRACTIONAL_DIGIT)
/

CREATE OR REPLACE SYNONYM  ISTBS_BIC_PLUS2018_CURRENCY FOR ISTB_BIC_PLUS2018_CURRENCY
/

