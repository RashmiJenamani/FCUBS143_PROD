PROMPT PROCESSING FOR GITM_TRANSLATE_PARAM 

CREATE TABLE GITM_TRANSLATE_PARAM
(
TNAME VARCHAR2(50) , 
IN_PARAM VARCHAR2(250) , 
OUT_PARAM VARCHAR2(250)
)
/
ALTER TABLE GITM_TRANSLATE_PARAM
ADD CONSTRAINT PK01_GITM_TRANSLATE_PARAM PRIMARY KEY(TNAME,IN_PARAM,OUT_PARAM)
/

