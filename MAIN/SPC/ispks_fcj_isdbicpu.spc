CREATE OR REPLACE PACKAGE ispks_fcj_isdbicpu AS
  /*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2007 - 2009  Oracle and/or its affiliates.  All rights reserved.
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
-------------------------------------------------------------------------------------------------
  CHANGE HISTORY
  
  Changed By         :  SYSTEM
  Change Description :  01-AUG-2007 17:04:08
  
  -------------------------------------------------------------------------------------------------------
  */

  TYPE ty_isdbicpu IS RECORD(
    bicpu_isvws_bic_upload isvw_bic_upload%ROWTYPE,
    --udf_details            uvpkss_udf_upload.ty_upl_func_udf, --vinutha
    addl_info              Stpks_Fcmaint_Service.Ty_Addl_info);

  FUNCTION fn_process_msg(p_source           IN cotms_source.source_code%TYPE,
                          p_source_operation IN VARCHAR2,
                          p_action_code      IN VARCHAR2,
                          p_multi_trip_id    IN OUT VARCHAR2,
                          p_tb_xml_data      IN OUT Stpks_Fcmaint_Service.ty_tb_xml_data,
                          p_addl_info        IN OUT Stpks_Fcmaint_Service.Ty_Addl_Info,
                          p_status           IN OUT VARCHAR2,
                          p_err_code         IN OUT VARCHAR2,
                          p_err_params       IN OUT VARCHAR2) RETURN BOOLEAN;

  FUNCTION Fn_Main(p_source           IN cotms_source.source_code%TYPE,
                   p_source_operation IN VARCHAR2,
                   p_action_code      IN VARCHAR2,
                   p_multi_trip_id    IN OUT VARCHAR2,
                   p_isdbicpu         IN OUT ty_isdbicpu,
                   p_status           IN OUT VARCHAR2,
                   p_err_code         IN OUT VARCHAR2,
                   p_err_params       IN OUT VARCHAR2) RETURN BOOLEAN;

END ispks_fcj_isdbicpu;
/
CREATE OR REPLACE SYNONYM ispkss_fcj_isdbicpu FOR ispks_fcj_isdbicpu
/