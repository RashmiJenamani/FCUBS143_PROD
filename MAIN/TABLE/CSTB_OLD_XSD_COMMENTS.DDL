PROMPT PROCESSING FOR CSTB_OLD_XSD_COMMENTS 

CREATE TABLE CSTB_OLD_XSD_COMMENTS
(
XSD_NAME VARCHAR2(60) , 
XSD_NODE_KEY VARCHAR2(750) , 
XSD_ELEMENT_TAG VARCHAR2(60) , 
COMMENT_ID VARCHAR2(60)
)
/
ALTER TABLE CSTB_OLD_XSD_COMMENTS
ADD CONSTRAINT PK_CSTB_OLD_XSD_COMMENTS PRIMARY KEY(XSD_NAME,XSD_NODE_KEY)
/

