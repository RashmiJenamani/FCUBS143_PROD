PROMPT PROCESSING FOR GWTB_PARAMETERS_001

BEGIN
INSERT INTO GWTB_PARAMETERS
(PARAM_NAME,PARAM_VALUE)
 VALUES 
('DEBUG_LEVEL',
'0'
)
;
END;
/
BEGIN
INSERT INTO GWTB_PARAMETERS
(PARAM_NAME,PARAM_VALUE)
 VALUES 
('DEBUG_MODE',
'N'
)
;
END;
/
BEGIN
INSERT INTO GWTB_PARAMETERS
(PARAM_NAME,PARAM_VALUE)
 VALUES 
('DEBUG_PATH',
'/export/home/fcdev/log/gwlog'
)
;
END;
/



commit;
