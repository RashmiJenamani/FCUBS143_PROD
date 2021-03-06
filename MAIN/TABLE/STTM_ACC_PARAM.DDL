PROMPT PROCESSING FOR STTM_ACC_PARAM 

CREATE TABLE STTM_ACC_PARAM
(
BRANCH_CODE VARCHAR2(3) , 
CUSTOMER_ACC_MASK VARCHAR2(20) , 
CHECKSUM_ALGORITHM VARCHAR2(30) , 
START_AC_NO NUMBER(20) , 
END_AC_NO NUMBER(20) , 
AC_AUTOGEN_FLAG CHAR(1) , 
CUST_AC_NO VARCHAR2(20) , 
LD_AUTO_ACC_FLAG CHAR(1) , 
LD_CUST_AC_NO VARCHAR2(20) , 
AUTO_START_AC_NO NUMBER(20) , 
AUTO_END_AC_NO NUMBER(20) , 
CUST_ACC_ALG VARCHAR2(20) , 
CUST_NO_ALG VARCHAR2(20) , 
FUND_START_AC_NO NUMBER(20) , 
FUND_END_AC_NO NUMBER(20) , 
FUND_ACC_NO NUMBER(20) , 
VIRTUAL_ACC_MASK VARCHAR2(20)
)
/
ALTER TABLE STTM_ACC_PARAM
ADD CONSTRAINT PK01_STTM_ACC_PARAM PRIMARY KEY(BRANCH_CODE)
/

CREATE OR REPLACE SYNONYM  STTMS_ACC_PARAM FOR STTM_ACC_PARAM
/

