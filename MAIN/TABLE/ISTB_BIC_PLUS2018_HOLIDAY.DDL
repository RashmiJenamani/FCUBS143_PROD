PROMPT PROCESSING FOR ISTB_BIC_PLUS2018_HOLIDAY 

CREATE TABLE ISTB_BIC_PLUS2018_HOLIDAY
(
TAG VARCHAR2(2) , 
COUNTRY_CODE VARCHAR2(2) , 
COUNTRY_NAME VARCHAR2(70) , 
HOLIDAY_DATE VARCHAR2(8) , 
HOLIDAY_TYPE CHAR(1) , 
SPECIAL_HOLIDAY_INFO VARCHAR2(320) , 
ACTIVATION_DATE DATE
)
/
ALTER TABLE ISTB_BIC_PLUS2018_HOLIDAY
ADD CONSTRAINT C1_ISTB_BIC_PLUS2018_HOLIDAY CHECK( "COUNTRY_NAME" IS NOT NULL)
/
ALTER TABLE ISTB_BIC_PLUS2018_HOLIDAY
ADD CONSTRAINT C2_ISTB_BIC_PLUS2018_HOLIDAY CHECK( "COUNTRY_CODE" IS NOT NULL)
/
ALTER TABLE ISTB_BIC_PLUS2018_HOLIDAY
ADD CONSTRAINT C3_ISTB_BIC_PLUS2018_HOLIDAY CHECK( "HOLIDAY_DATE" IS NOT NULL)
/
ALTER TABLE ISTB_BIC_PLUS2018_HOLIDAY
ADD CONSTRAINT C4_ISTB_BIC_PLUS2018_HOLIDAY CHECK( "ACTIVATION_DATE" IS NOT NULL)
/
ALTER TABLE ISTB_BIC_PLUS2018_HOLIDAY
ADD CONSTRAINT C5_ISTB_BIC_PLUS2018_HOLIDAY CHECK( "HOLIDAY_TYPE" IS NOT NULL)
/
ALTER TABLE ISTB_BIC_PLUS2018_HOLIDAY
ADD CONSTRAINT C6_ISTB_BIC_PLUS2018_HOLIDAY CHECK( "TAG" IS NOT NULL)
/
ALTER TABLE ISTB_BIC_PLUS2018_HOLIDAY
ADD CONSTRAINT PK01_ISTB_BIC_PLUS2018_HOLIDAY PRIMARY KEY(TAG,COUNTRY_CODE,HOLIDAY_DATE)
/

CREATE OR REPLACE SYNONYM  ISTBS_BIC_PLUS2018_HOLIDAY FOR ISTB_BIC_PLUS2018_HOLIDAY
/

