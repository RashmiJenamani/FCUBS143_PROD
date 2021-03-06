PROMPT PROCESSING FOR CSTM_APPROOT_FUNCTIONS_MENU 

CREATE TABLE CSTM_APPROOT_FUNCTIONS_MENU
(
FUNCTION_ID VARCHAR2(35) , 
MODIFIABLE VARCHAR2(1) , 
SUMMARY_FN_ID VARCHAR2(35)
)
/
ALTER TABLE CSTM_APPROOT_FUNCTIONS_MENU
ADD CONSTRAINT C1_CSTM_APPROOT_FUNCTIONS_MENU CHECK( "MODIFIABLE" IS NOT NULL)
/
ALTER TABLE CSTM_APPROOT_FUNCTIONS_MENU
ADD CONSTRAINT C2_CSTM_APPROOT_FUNCTIONS_MENU CHECK( "FUNCTION_ID" IS NOT NULL)
/
ALTER TABLE CSTM_APPROOT_FUNCTIONS_MENU
ADD CONSTRAINT PK_APPROOT_FUNCTIONS_MENU PRIMARY KEY(FUNCTION_ID)
/

