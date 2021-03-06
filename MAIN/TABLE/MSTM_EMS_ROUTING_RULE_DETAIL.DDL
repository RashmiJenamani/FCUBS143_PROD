PROMPT PROCESSING FOR MSTM_EMS_ROUTING_RULE_DETAIL 

CREATE TABLE MSTM_EMS_ROUTING_RULE_DETAIL
(
RULENAME VARCHAR2(30) , 
EXPRESSIONSECTION VARCHAR2(30) , 
LOGICALNOT VARCHAR2(30) , 
SCOPESTART VARCHAR2(30) , 
LOPTYPE VARCHAR2(30) , 
LOPDATATYPE VARCHAR2(30) , 
LEFTOPERANT VARCHAR2(4000) , 
OPERATO VARCHAR2(30) , 
ROPTYPE VARCHAR2(30) , 
ROPDATATYPE VARCHAR2(30) , 
LOGICALOPERATOR VARCHAR2(30) , 
SCOPEEND VARCHAR2(30) , 
RIGHTOPERANT VARCHAR2(4000) , 
LOPPARAMDEF VARCHAR2(1000) , 
ROPPARAMDEF VARCHAR2(1000) , 
LOPEXP_PARAMETERS VARCHAR2(400) , 
ROPEXP_PARAMETERS VARCHAR2(400)
)
/
ALTER TABLE MSTM_EMS_ROUTING_RULE_DETAIL
ADD CONSTRAINT C1_MSTM_EMS_ROUTING_RULE_DT CHECK( "RULENAME" IS NOT NULL)
/
ALTER TABLE MSTM_EMS_ROUTING_RULE_DETAIL
ADD CONSTRAINT C2MSTM_EMS_ROUTING_RULE_DT CHECK( "EXPRESSIONSECTION" IS NOT NULL)
/
ALTER TABLE MSTM_EMS_ROUTING_RULE_DETAIL
ADD CONSTRAINT PK02_MSTM_EMS_ROUTING_RULE_DT PRIMARY KEY(RULENAME,EXPRESSIONSECTION)
/

