PROMPT PROCESSING FOR FCTB_ONLINE_STATS 

CREATE TABLE FCTB_ONLINE_STATS
(
FUNCTIONID VARCHAR2(8) , 
ACTION VARCHAR2(35) , 
SOURCE VARCHAR2(20) , 
MAXRESP NUMBER(5,3) , 
MINRESP NUMBER(5,3) , 
AVGRESP NUMBER(5,3) , 
COUNT NUMBER(5) , 
LOGTIME DATE
)
/
ALTER TABLE FCTB_ONLINE_STATS
ADD CONSTRAINT PK01_FCTB_ONLINE_STATS PRIMARY KEY(FUNCTIONID,ACTION,SOURCE)
/

CREATE OR REPLACE SYNONYM  FCTBS_ONLINE_STATS FOR FCTB_ONLINE_STATS
/

