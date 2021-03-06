PROMPT PROCESSING FOR STTM_CORE_EL_FACILITY_HIST 

CREATE TABLE STTM_CORE_EL_FACILITY_HIST
(
ID NUMBER(20) , 
HOST_CODE VARCHAR2(8) , 
SOURCE VARCHAR2(140) , 
SOURCE_LIAB_ID NUMBER(20) , 
SOURCE_LINE_CODE VARCHAR2(40) , 
SOURCE_LINE_SERIAL NUMBER(3) , 
LIAB_ID NUMBER(20) , 
LINE_CODE VARCHAR2(40) , 
LINE_SERIAL NUMBER(3) , 
MAIN_LINE_ID NUMBER(20) , 
LINE_CURRENCY VARCHAR2(12) , 
LINE_START_DATE DATE , 
LINE_EXPIRY_DATE DATE , 
AVAILABILITY_FLAG VARCHAR2(4) , 
BOOKING_DATE DATE , 
INTEREST_CALC_ACC VARCHAR2(80) , 
LMT_AMT_BASIS VARCHAR2(4) , 
TRANSFER_AMOUNT NUMBER(24,3) , 
INTEREST_REQD VARCHAR2(4) , 
LIMIT_AMOUNT NUMBER(24,3) , 
COLLATERAL_CONTRIBUTION NUMBER(24,3) , 
LIAB_BR VARCHAR2(12) , 
BRN VARCHAR2(12) , 
DESCRIPTION VARCHAR2(1020) , 
FACILITY_TYPE VARCHAR2(1) , 
DSP_EFF_LINE_AMOUNT NUMBER(24,3) , 
BULK_PMT_REQD VARCHAR2(4) , 
REVOLVING_LINE VARCHAR2(1) , 
UNADVISED VARCHAR2(1) , 
BLOCK_AMOUNT NUMBER(24,3) DEFAULT 0 , 
RECORD_STAT VARCHAR2(4) , 
AUTH_STAT VARCHAR2(4) , 
ONCE_AUTH VARCHAR2(4) , 
MOD_NO NUMBER(4) , 
MAKER_ID VARCHAR2(200) , 
MAKER_DT_STAMP DATE , 
CHECKER_ID VARCHAR2(200) , 
CHECKER_DT_STAMP DATE
)
/
ALTER TABLE STTM_CORE_EL_FACILITY_HIST
ADD CONSTRAINT PK01_STTM_CORE_EL_FACL_HIST PRIMARY KEY(ID,MOD_NO)
/

CREATE OR REPLACE SYNONYM  STTMS_CORE_EL_FACILITY_HIST FOR STTM_CORE_EL_FACILITY_HIST
/

