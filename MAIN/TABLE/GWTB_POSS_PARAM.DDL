PROMPT PROCESSING FOR GWTB_POSS_PARAM 

CREATE TABLE GWTB_POSS_PARAM
(
PARAMNAME VARCHAR2(100) , 
PARAMVAL VARCHAR2(4000)
)
/
ALTER TABLE GWTB_POSS_PARAM
ADD CONSTRAINT C1_GWTB_POSS_PARAM CHECK( "PARAMNAME" IS NOT NULL)
/
ALTER TABLE GWTB_POSS_PARAM
ADD CONSTRAINT PK_GWTB_POSS_PARAM PRIMARY KEY(PARAMNAME)
/

CREATE OR REPLACE SYNONYM  GWTBS_POSS_PARAM FOR GWTB_POSS_PARAM
/

