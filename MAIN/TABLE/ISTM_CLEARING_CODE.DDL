PROMPT PROCESSING FOR ISTM_CLEARING_CODE 

CREATE TABLE ISTM_CLEARING_CODE
(
NETWORK_CODE VARCHAR2(2) , 
COUNTRY_CODE VARCHAR2(3) , 
CLEARING_CODE VARCHAR2(105) , 
CLEARING_CODE_DESC VARCHAR2(105) , 
BANK_NAME VARCHAR2(105) , 
ADDRESS_1 VARCHAR2(105) , 
ADDRESS_2 VARCHAR2(105) , 
ADDRESS_3 VARCHAR2(105) , 
ADDRESS_4 VARCHAR2(105) , 
OWN_CLEARING_CODE VARCHAR2(105) , 
CLEARING_CODE_IND CHAR(1) , 
BIC_CODE VARCHAR2(11) , 
RECORD_STAT CHAR(1) , 
AUTH_STAT CHAR(1) , 
MOD_NO  NUMBER , 
MAKER_ID VARCHAR2(12) , 
MAKER_DT_STAMP DATE , 
CHECKER_ID VARCHAR2(12) , 
CHECKER_DT_STAMP DATE , 
ONCE_AUTH CHAR(1) , 
CUSTOMER_NO VARCHAR2(9) , 
CLEARING_CODE_TYPE VARCHAR2(70) , 
BRANCH_INFO VARCHAR2(70) , 
POB_NUMBER VARCHAR2(35) , 
CITY VARCHAR2(35) , 
CPS VARCHAR2(90) , 
ZIP_CODE VARCHAR2(15) , 
ISO_COUNTRY_CODE VARCHAR2(2)
)
/
ALTER TABLE ISTM_CLEARING_CODE
ADD CONSTRAINT PK01_ISTM_CLEARING_CODE PRIMARY KEY(NETWORK_CODE,CLEARING_CODE)
/

CREATE OR REPLACE SYNONYM  ISTMS_CLEARING_CODE FOR ISTM_CLEARING_CODE
/

