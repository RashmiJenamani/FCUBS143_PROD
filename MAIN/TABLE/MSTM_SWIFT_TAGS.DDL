PROMPT PROCESSING FOR MSTM_SWIFT_TAGS 

CREATE TABLE MSTM_SWIFT_TAGS
(
MSG_TYPE VARCHAR2(3) , 
TAG_VALUE VARCHAR2(3) , 
TAG_OPTION VARCHAR2(1) , 
LINES NUMBER(3) , 
SEQUENCE NUMBER(2) , 
REPEATABLE VARCHAR2(1) , 
ALL_OPTIONS VARCHAR2(27) , 
DESCRIPTION VARCHAR2(105) , 
SEQUENCE_NAME VARCHAR2(2) , 
TAG_CHARSET CHAR(1)
)
/
ALTER TABLE MSTM_SWIFT_TAGS
ADD CONSTRAINT PK_MSTM_SWIFT_TAGS PRIMARY KEY(MSG_TYPE,TAG_VALUE,SEQUENCE_NAME)
/

CREATE OR REPLACE SYNONYM  MSTMS_SWIFT_TAGS FOR MSTM_SWIFT_TAGS
/

