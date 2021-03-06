PROMPT PROCESSING FOR MSTM_PDE_FUNC_TAGS_001

BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('103',
1,'32',
'Amount',
1,6,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('103',
2,'32',
'Value Date',
10,15,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('103',
3,'32',
'CCY',
7,9,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('103',
4,'59',
'Ult Beneficiary',
1,11,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('103',
5,'71',
'Charges',
1,5,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('200',
1,'32',
'Amount',
1,6,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('200',
2,'32',
'Value Date',
10,15,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('200',
3,'32',
'CCY',
7,9,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('200',
4,'57',
'Account With Institution',
1,11,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('202',
1,'32',
'Amount',
1,6,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('202',
2,'32',
'CCY',
7,9,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('202',
3,'32',
'Value Date',
10,15,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('202',
4,'58',
'Beneficiary Institution',
1,11,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('400',
1,'32',
'Value Date',
1,6,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('400',
2,'32',
'CCY',
7,9,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('400',
3,'32',
'Amount',
10,15,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('400',
4,'33',
'Value Date',
1,6,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('400',
5,'33',
'CCY',
7,9,'Y'
)
;
END;
/
BEGIN
INSERT INTO MSTM_PDE_FUNC_TAGS
(SWIFT_MSG_TYPE,SEQ_NO,SWIFT_FIELD,TAG_NAME
,TAG_START_POSITION,TAG_END_POSITION,INCLUDE_FOR_PDE)
 VALUES 
('400',
6,'33',
'Amount',
10,15,'Y'
)
;
END;
/



commit;
