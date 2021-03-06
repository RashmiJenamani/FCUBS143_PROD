PROMPT PROCESSING FOR SMTB_TXN_STATUS 

CREATE TABLE SMTB_TXN_STATUS
(
TXN_STATUS CHAR(1) , 
AUTH_STATUS CHAR(1) , 
INTERFACE_STATUS VARCHAR2(5) DEFAULT 'XXXXX' , 
CONTROL_STRING VARCHAR2(16) , 
CONTROL_1 NUMBER(1) , 
CONTROL_10 NUMBER(1) , 
CONTROL_11 NUMBER(1) , 
CONTROL_12 NUMBER(1) , 
CONTROL_13 NUMBER(1) , 
CONTROL_14 NUMBER(1) , 
CONTROL_15 NUMBER(1) , 
CONTROL_16 NUMBER(1) , 
CONTROL_2 NUMBER(1) , 
CONTROL_3 NUMBER(1) , 
CONTROL_4 NUMBER(1) , 
CONTROL_5 NUMBER(1) , 
CONTROL_6 NUMBER(1) , 
CONTROL_7 NUMBER(1) , 
CONTROL_8 NUMBER(1) , 
CONTROL_9 NUMBER(1)
)
/
ALTER TABLE SMTB_TXN_STATUS
ADD CONSTRAINT PK01_SMTB_TXN_STATUS PRIMARY KEY(INTERFACE_STATUS,TXN_STATUS,AUTH_STATUS)
/

CREATE OR REPLACE SYNONYM  SMTBS_TXN_STATUS FOR SMTB_TXN_STATUS
/

