CREATE OR REPLACE PACKAGE  ispks_fcj_isdbicpu_addon AS
  /*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2008 - 2009  Oracle and/or its affiliates.  All rights reserved.
** 												
** No part of this work may be reproduced, stored in a retrieval system,
** adopted or transmitted in any form or by any means, electronic, mechanical, photographic, graphic, optic recording or otherwise,
** translated in any language or computer language,
** without the prior written permission of Oracle and/or its affiliates.
** 
** 
** Oracle Financial Services Software Limited.
** Oracle Park, Off Western Express Highway,
** Goregaon (East),
** Mumbai - 400 063, India.
------------------------------------------------------------------------------------------
*/
/*
  -------------------------------------------------------------------------------------------------------
  CHANGE HISTORY
  
  SFR Number         :  
  Changed By         :  
  Change Description :  
  
  -------------------------------------------------------------------------------------------------------
  */
  
  
FUNCTION fn_Post_build_type_structure (
p_parents_List	 IN  CLOB,
P_Parents_Format  IN  CLOB,
P_Tag_Names	    IN  CLOB,
P_Tag_Values	    IN  CLOB,
p_addl_info       IN Stpks_Fcmaint_Service.Ty_Addl_Info,
p_isdbicpu     IN  OUT ispks_fcj_isdbicpu.ty_isdbicpu,
p_err_code          IN OUT VARCHAR2,
p_err_params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION fn_pre_check_mandatory(p_source		IN  cotms_source.source_code%TYPE,
p_action_code		IN  VARCHAR2,
p_isdbicpu IN  OUT  ispks_fcj_isdbicpu.ty_isdbicpu,
p_err_code       IN  OUT VARCHAR2,
p_err_params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION fn_post_check_mandatory(p_source		IN  cotms_source.source_code%TYPE,
p_action_code		IN  VARCHAR2,
p_pk_or_full     IN  VARCHAR2 DEFAULT 'FULL',
p_isdbicpu IN   ispks_fcj_isdbicpu.ty_isdbicpu,
p_err_code       IN  OUT VARCHAR2,
p_err_params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION fn_pre_default_and_validate (p_source		IN  cotms_source.source_code%TYPE,
p_source_operation     IN  VARCHAR2,
p_action_code		IN  VARCHAR2,
p_isdbicpu IN   ispks_fcj_isdbicpu.ty_isdbicpu,
p_err_code       IN  OUT VARCHAR2,
p_err_params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION fn_post_default_and_validate (p_source		IN  cotms_source.source_code%TYPE,
p_source_operation     IN  VARCHAR2,
p_action_code		IN  VARCHAR2,
p_isdbicpu IN   ispks_fcj_isdbicpu.ty_isdbicpu,
p_prev_isdbicpu IN OUT ispks_fcj_isdbicpu.ty_isdbicpu,
p_wrk_isdbicpu IN OUT  ispks_fcj_isdbicpu.ty_isdbicpu,
p_err_code       IN  OUT VARCHAR2,
p_err_params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION fn_pre_upload_db (p_source		IN  cotms_source.source_code%TYPE,
p_action_code		IN  VARCHAR2,
p_post_upl_stat		IN  VARCHAR2,
p_multi_trip_id    IN  VARCHAR2,
p_prev_isdbicpu IN ispks_fcj_isdbicpu.ty_isdbicpu,
p_wrk_isdbicpu IN OUT  ispks_fcj_isdbicpu.ty_isdbicpu,
p_err_code       IN  OUT VARCHAR2,
p_err_params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION fn_post_upload_db (p_source		IN  cotms_source.source_code%TYPE,
p_action_code		IN  VARCHAR2,
p_post_upl_stat		IN  VARCHAR2,
p_multi_trip_id    IN  VARCHAR2,
p_prev_isdbicpu IN ispks_fcj_isdbicpu.ty_isdbicpu,
p_wrk_isdbicpu IN OUT  ispks_fcj_isdbicpu.ty_isdbicpu,
p_err_code       IN  OUT VARCHAR2,
p_err_params     IN  OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION fn_pre_query  ( p_source		IN  cotms_source.source_code%TYPE,
p_isdbicpu IN   ispks_fcj_isdbicpu.ty_isdbicpu,
p_wrk_isdbicpu IN OUT   ispks_fcj_isdbicpu.ty_isdbicpu,
p_err_code          IN OUT VARCHAR2,
p_err_params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION fn_post_query  ( p_source		IN  cotms_source.source_code%TYPE,
p_isdbicpu IN   ispks_fcj_isdbicpu.ty_isdbicpu,
p_wrk_isdbicpu IN OUT   ispks_fcj_isdbicpu.ty_isdbicpu,
p_err_code          IN OUT VARCHAR2,
p_err_params        IN OUT VARCHAR2)
RETURN BOOLEAN;

END ispks_fcj_isdbicpu_addon;
/
CREATE OR REPLACE SYNONYM ispkss_fcj_isdbicpu_addon FOR ispks_fcj_isdbicpu_addon
/