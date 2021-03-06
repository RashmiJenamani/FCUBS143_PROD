PROMPT PROCESSING FOR CSTM_AMTWORD_LANG 

CREATE TABLE CSTM_AMTWORD_LANG
(
LANG_CODE VARCHAR2(3) , 
RECORD_STAT CHAR(1) , 
ONCE_AUTH CHAR(1) , 
AUTH_STAT CHAR(1) , 
MOD_NO NUMBER(4) , 
MAKER_ID VARCHAR2(12) , 
MAKER_DT_STAMP DATE , 
CHECKER_ID VARCHAR2(12) , 
CHECKER_DT_STAMP DATE
)
/
ALTER TABLE CSTM_AMTWORD_LANG
ADD CONSTRAINT PK_CSTM_AMTWORD_LANG PRIMARY KEY(LANG_CODE)
/

CREATE OR REPLACE SYNONYM  CSTMS_AMTWORD_LANG FOR CSTM_AMTWORD_LANG
/

