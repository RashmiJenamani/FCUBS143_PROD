CREATE OR REPLACE PACKAGE  ifpks_fcj_gwdexsys AS
  /*-----------------------------------------------------------------------------------------------------
  **
  ** File Name  : IFPKS_FCJ_GWDEXSYS.SPC
  **
  ** Module     : Interfaces
  ** 
  ** This source is part of the Oracle FLEXCUBE Software System and is copyrighted by Oracle Financial Services Software Limited.
  ** 
  ** 
  ** All rights reserved. No part of this work may be reproduced, stored in a retrieval system,
  ** adopted or transmitted in any form or by any means, electronic, mechanical, photographic,
  ** graphic, optic recording or otherwise, translated in any language or computer language,
  ** without the prior written permission of Oracle Financial Services Software Limited.
  ** 
  ** Oracle Financial Services Software Limited.
  ** 10-11, SDF I, SEEPZ, Andheri (East),
  ** Mumbai - 400 096.
  ** India
  ** Copyright � 2008 - 2016 Oracle Financial Services Software Limited. All rights reserved.
  -------------------------------------------------------------------------------------------------------
  CHANGE HISTORY
  
  Changed By         :  SYSTEM
  Change Description :  15-SEP-2016 15:31:09
  
  -------------------------------------------------------------------------------------------------------
  */
  
  
TYPE ty_tb_xsys_gwtm_ext_sys_queues IS TABLE OF gwtm_ext_sys_queues%ROWTYPE INDEX BY BINARY_INTEGER;

TYPE ty_gwdexsys IS RECORD (
                 exsys_gwtm_ext_sys_master          gwtm_ext_sys_master%ROWTYPE,
                 exsys_gwtm_ext_sys_queues          ty_tb_xsys_gwtm_ext_sys_queues,
                 exsys_gwtm_ftp_parameter          gwtm_ftp_parameter%ROWTYPE,
                 addl_info    Stpks_Fcmaint_Service.Ty_Addl_info );


FUNCTION fn_process_msg(p_source            IN     cotms_source.source_code%TYPE,
                        p_source_operation  IN     VARCHAR2,
                        p_action_code       IN     VARCHAR2,
                        p_multi_trip_id     IN OUT    VARCHAR2,
                        p_tb_xml_data		   IN OUT Stpks_Fcmaint_Service.ty_tb_xml_data,
                        p_addl_info			IN OUT Stpks_Fcmaint_Service.Ty_Addl_Info,
                        p_status            IN OUT VARCHAR2 ,
                        p_err_code          IN OUT VARCHAR2,
                        p_err_params        IN OUT VARCHAR2)
RETURN BOOLEAN;


FUNCTION fn_process_msg(p_source            IN     cotms_source.source_code%TYPE,
                        p_source_operation  IN     VARCHAR2,
                        p_action_code       IN     VARCHAR2,
                        p_exchange_pattern	IN     VARCHAR2,
                        p_multi_trip_id     IN OUT VARCHAR2,
                        p_parents_List      IN OUT NOCOPY CLOB,
                        P_Parents_Format    IN OUT NOCOPY CLOB,
                        P_Tag_Names         IN OUT NOCOPY CLOB,
                        P_Tag_Values        IN OUT NOCOPY CLOB,
                        p_addl_info			IN OUT Stpks_Fcmaint_Service.Ty_Addl_Info,
                        p_status            IN OUT VARCHAR2 ,
                        p_err_code          IN OUT VARCHAR2,
                        p_err_params        IN OUT VARCHAR2)
RETURN BOOLEAN;


FUNCTION Fn_Main       (p_source            IN     cotms_source.source_code%TYPE,
                        p_source_operation  IN     VARCHAR2,
                        p_action_code       IN     VARCHAR2,
                        p_multi_trip_id     IN OUT VARCHAR2,
                        p_gwdexsys          IN OUT ty_gwdexsys,
                        p_status            IN OUT VARCHAR2 ,
                        p_err_code          IN OUT VARCHAR2,
                        p_err_params        IN OUT VARCHAR2)
RETURN BOOLEAN;

END ifpks_fcj_gwdexsys;
/
CREATE OR REPLACE SYNONYM ifpkss_fcj_gwdexsys FOR ifpks_fcj_gwdexsys
/