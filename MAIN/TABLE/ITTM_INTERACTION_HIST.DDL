PROMPT PROCESSING FOR ITTM_INTERACTION_HIST 

CREATE TABLE ITTM_INTERACTION_HIST
(
CONVERSATION_ID VARCHAR2(20) , 
STATUS CHAR(1) , 
LAST_MODIFIED DATE , 
CATEGORY VARCHAR2(50) , 
SEVERITY CHAR(1) DEFAULT 'L' , 
ASSIGNED_TO VARCHAR2(15) , 
CUSTOMER_ID VARCHAR2(9) , 
CUSTOMER_NAME VARCHAR2(105) , 
CONVERSATION_MODE VARCHAR2(50) , 
CONVERSATION_DATE DATE , 
CONVERSATION_TIME VARCHAR2(5) , 
DEPARTMENT VARCHAR2(50) , 
OTHER_DEPT VARCHAR2(255) , 
ETA_DATE DATE , 
VENUE VARCHAR2(50) , 
SNR_MGMT VARCHAR2(50) , 
OTH_OFFICERS VARCHAR2(50) , 
SUBJECT VARCHAR2(255) , 
DETAILS CLOB , 
DOCUMENTS_PRESENTED VARCHAR2(255) , 
DISP_CLOSURE_REMARKS CHAR(1) DEFAULT 'N' , 
CLOSURE_REMARKS VARCHAR2(255) , 
MAKER_ID VARCHAR2(48) , 
MAKER_DT_STAMP DATE , 
CHECKER_ID VARCHAR2(48) , 
CHECKER_DT_STAMP DATE , 
MOD_NO NUMBER(4) , 
AUTH_STAT CHAR(4) , 
ONCE_AUTH CHAR(4) DEFAULT 'N' , 
RECORD_STAT CHAR(1) , 
EXT_SYS_USER_ID VARCHAR2(20) , 
CHANNEL_USER_ID VARCHAR2(20) , 
U_R_FLAG VARCHAR2(1) , 
EXT_SYS_IS_DB VARCHAR2(1) , 
ORGINAL_REQ VARCHAR2(4000) , 
BRANCH_CODE VARCHAR2(3) , 
CUSTOMER_REPLY CLOB
)
/

