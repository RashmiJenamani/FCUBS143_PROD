PROMPT PROCESSING FOR CYTM_CCY_PAIR_DEFN_MASTER 

CREATE TABLE CYTM_CCY_PAIR_DEFN_MASTER
(
CCY1 VARCHAR2(3) , 
CCY2 VARCHAR2(3) , 
THROUGH_CCY VARCHAR2(3) , 
QUOTATION CHAR(1) , 
NO_OF_UNITS NUMBER(1) , 
SPREAD_DEFN CHAR(1) , 
POINTS_MULTIPLIER NUMBER(5,4) , 
RECORD_STAT CHAR(1) , 
ONCE_AUTH CHAR(1) , 
AUTH_STAT CHAR(1) , 
MOD_NO NUMBER(4) , 
MAKER_ID VARCHAR2(12) , 
MAKER_DT_STAMP DATE , 
CHECKER_ID VARCHAR2(12) , 
CHECKER_DT_STAMP DATE , 
MAINTENANCE_COUNTRY VARCHAR2(3)
)
/
ALTER TABLE CYTM_CCY_PAIR_DEFN_MASTER
ADD CONSTRAINT PK01_CYTM_CCY_PAIR_DEFN_MASTER PRIMARY KEY(CCY1,CCY2,MAINTENANCE_COUNTRY)
/

CREATE OR REPLACE SYNONYM  CYTMS_CCY_PAIR_DEFN_MASTER FOR CYTM_CCY_PAIR_DEFN_MASTER
/

