PROMPT PROCESSING FOR MSTB_MSG_MODULE_GROUP 

CREATE TABLE MSTB_MSG_MODULE_GROUP
(
MODULE_GROUP_ID VARCHAR2(6) , 
MSG_TYPE VARCHAR2(5)
)
/
ALTER TABLE MSTB_MSG_MODULE_GROUP
ADD CONSTRAINT PK_MSTB_MSG_MODULE_GROUP PRIMARY KEY(MODULE_GROUP_ID,MSG_TYPE)
/

