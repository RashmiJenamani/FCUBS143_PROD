UPDATE CSTM_APPROOT_OBJECTS SET SHARING = 'DL'
 WHERE FUNCTION_ID='UDDFFLMT'
 AND OBJECT_NAME='CSTM_FUNCTION_UDF_FIELDS_MAP'
 AND OBJECT_TYPE='TABLE'
/