PROMPT PROCESSING FOR CSTM_APPROOT_MENU_MOVEDTOPDB 

CREATE TABLE CSTM_APPROOT_MENU_MOVEDTOPDB
(
FUNCTION_ID VARCHAR2(35) , 
SUMMARY_FN_ID VARCHAR2(35)
)
/
ALTER TABLE CSTM_APPROOT_MENU_MOVEDTOPDB
ADD CONSTRAINT C1_CSTM_APPROOT_MENU_MOVEDTOPD CHECK( "FUNCTION_ID" IS NOT NULL)
/

