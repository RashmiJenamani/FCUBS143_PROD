INSERT INTO CSTB_LOV_INFO
(FUNCTION_ID, LOV_ID, FIELD_LIST, LABEL_LIST, REDUCTION_LIST, LOV_QUERY, VISIBLE_LIST, DATATYPE_LIST, LOV_TYPE)
 VALUES 
('LIDTRONL',
'LOV_DEBIT_ACC',
'AC_GL_NO~BRANCH_CODE~AC_GL_CCY1~IBAN_AC_NO~AC_GL_DESC~',
'LBL_ACCGLNO~LBL_BRANCH_CODE~LBL_ACCGLCCY~LBL_IBANACNO~LBL_ACCGLDESC~',
'AC_GL_NO~BRANCH_CODE~AC_GL_CCY1~IBAN_AC_NO~AC_GL_DESC~',
'SELECT Ac_Gl_No, NVL(branch_code,?) branch_code, NVL(Ac_Gl_Ccy, ?) Ac_Gl_Ccy1, Iban_Ac_No, Ac_Gl_Desc FROM stvw_ac_gl_accounts WHERE Auth_Stat = ''A'' AND Ac_Gl_Rec_Status = ''O'' AND Ac_Gl_No NOT IN (SELECT Gl_Code FROM Gltm_Glmaster WHERE Posting_Res = ''N'') AND ((ac_class in (SELECT account_class FROM Sttm_Account_Class WHERE (ac_class_type in (''S'', ''U'', ''N'') or multi_currency = ''Y'') and auth_stat = ''A'' and record_stat = ''O'')) OR (ac_class = ''10'') OR ac_class IS NULL)',
'Y~Y~Y~Y~Y~',
'VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~',
'I'
)
/
INSERT INTO CSTB_LOV_INFO
(FUNCTION_ID, LOV_ID, FIELD_LIST, LABEL_LIST, REDUCTION_LIST, LOV_QUERY, VISIBLE_LIST, DATATYPE_LIST, LOV_TYPE)
 VALUES 
('LIDTRONL',
'LOV_DEBIT_BRN',
'BRANCH_CODE~BRANCH_NAME~',
'LBL_BRNCD~LBL_BRNNAME~',
'BRANCH_CODE~BRANCH_NAME~',
'select branch_code, branch_name from sttms_branch where record_stat = ''O'' and auth_stat = ''A''',
'Y~Y~',
'VARCHAR2~VARCHAR2~',
'I'
)
/
INSERT INTO CSTB_LOV_INFO
(FUNCTION_ID, LOV_ID, FIELD_LIST, LABEL_LIST, REDUCTION_LIST, LOV_QUERY, VISIBLE_LIST, DATATYPE_LIST, LOV_TYPE)
 VALUES 
('LIDTRONL',
'LOV_DEBIT_CCY',
'CCY_CODE~CCY_NAME~',
'LBL_CCYCD~LBL_CCYNAME~',
'CCY_CODE~CCY_NAME~',
'select ccy_code, ccy_name from cytms_ccy_defn where record_stat = ''O'' and auth_stat = ''A''',
'Y~Y~',
'VARCHAR2~VARCHAR2~',
'I'
)
/