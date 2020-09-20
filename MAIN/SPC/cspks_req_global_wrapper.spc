CREATE OR REPLACE PACKAGE cspks_req_global_wrapper AS

  /*-----------------------------------------------------------------------------------------------------
    **
    ** File Name  : cspks_req_global_wrapper.sql
    **
    ** Module     : Core
    **
    ** This source is part of the Oracle FLEXCUBE Universal Banking Software Product
    ** Copyright © 2008 - 2015  Oracle and/or its affiliates.  All rights reserved.
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
	**
	** Change History
	**
	** Changed by 	 : Vinutha Kini
	** Changed on 	 : 26-July-2016
	** Description	 : Core clean up for 12.3Payments
	** Search String : Standalone12.3 CleanUp
	
	** Changed by 	 : Shishira Shetty
	** Changed on 	 : 14-Sep-2017
	** Description	 : Additional OUT parameter p_extintegration_key added to send MsgID to INFRA layer.
	** Search String : ELCM_Integration Changes
	
    -------------------------------------------------------------------------------------------------------
  */
  /*PROCEDURE Pr_Process_Request(p_user           IN SMTB_USER.User_Id%TYPE,
                               p_branch         IN STTM_BRANCH.Branch_Code%TYPE,
                               p_request        IN CLOB,
                               p_header_names   IN OUT VARCHAR2,
                               p_header_vals    IN OUT VARCHAR2,
                               p_addl_names     IN OUT VARCHAR2,
                               p_addl_vals      IN OUT VARCHAR2,
                               p_parents_list   IN OUT VARCHAR2,
                               p_parents_format IN OUT VARCHAR2,
                               p_tag_name       IN OUT CLOB,
                               p_tag_values     IN OUT CLOB,
                               p_response       IN OUT CLOB); */
 /* BPEL Changes STart Here*/
  /*PROCEDURE Pr_Process_RequestJ(p_user              IN SMTB_USER.User_Id%TYPE,
                               p_branch            IN STTM_BRANCH.Branch_Code%TYPE,
                               p_header_names      IN OUT VARCHAR2,
                               p_header_vals       IN OUT VARCHAR2,
                               p_addl_names        IN OUT VARCHAR2,
                               p_addl_vals         IN OUT VARCHAR2,
                               p_parents_name_list IN OUT CHARARRAYTYP_TY,
                               p_parents_fmt_list  IN OUT CHARARRAYTYP_TY,
                               p_tag_name_list     IN OUT CHARARRAYTYP_TY,
                               p_tag_values_list   IN OUT CHARARRAYTYP_TY,
                               p_error_nodes       IN OUT VARCHAR2,
                               p_status            IN OUT VARCHAR2,
                               p_extsys_msg        IN OUT NOCOPY CLOB,
                               p_timelog           IN OUT VARCHAR2,
                               p_db_log            OUT    CLOB);*/

  PROCEDURE Pr_Process_Request_Bpel(p_user              IN SMTB_USER.User_Id%TYPE,
                                    p_branch            IN STTM_CORE_BRANCH.Branch_Code%TYPE,--Standalone12.3 Changes
                                    p_header_names      IN OUT VARCHAR2,
                                    p_header_vals       IN OUT VARCHAR2,
                                    p_addl_names        IN OUT VARCHAR2,
                                    p_addl_vals         IN OUT VARCHAR2,
                                    p_parents_name_list IN OUT CHARARRAYTYP_TY,
                                    p_parents_fmt_list  IN OUT CHARARRAYTYP_TY,
                                    p_tag_name_list     IN OUT CHARARRAYTYP_TY,
                                    p_tag_values_list   IN OUT CHARARRAYTYP_TY,
                                    p_masterfunc_id     IN OUT CHARARRAYTYP_TY,
                                    p_action_code       IN OUT CHARARRAYTYP_TY,
                                    p_error_nodes       IN OUT VARCHAR2,
                                    p_status            IN OUT VARCHAR2,
                                    p_extsys_msg        IN OUT NOCOPY CLOB,
                                    p_timelog           IN OUT VARCHAR2,
                                    p_db_log            OUT    VARCHAR2,--21430826
                                    p_attachment        OUT VARCHAR2,
                                    p_extintegration_key       IN OUT VARCHAR2);
  /*BPEL CHanges Ends Here */
                               

   PROCEDURE Pr_Process_RequestJ(p_user              IN SMTB_USER.User_Id%TYPE,
                               p_branch            IN STTM_CORE_BRANCH.Branch_Code%TYPE,--Standalone12.3 Changes
                               p_header_names      IN OUT VARCHAR2,
                               p_header_vals       IN OUT VARCHAR2,
                               p_addl_names        IN OUT VARCHAR2,
                               p_addl_vals         IN OUT VARCHAR2,
                               p_parents_name_list IN OUT CHARARRAYTYP_TY,
                               p_parents_fmt_list  IN OUT CHARARRAYTYP_TY,
                               p_tag_name_list     IN OUT CHARARRAYTYP_TY,
                               p_tag_values_list   IN OUT CHARARRAYTYP_TY,
                               p_error_nodes       IN OUT VARCHAR2,
                               p_status            IN OUT VARCHAR2,
                               p_extsys_msg        IN OUT NOCOPY CLOB,
                               p_timelog           IN OUT VARCHAR2,
                               p_db_log            OUT    VARCHAR2, ----21430826 
                                p_attachment        OUT VARCHAR2,
                                p_req_xml           IN CLOB,-- 25062166 :: ADDED P_REQ_XML
                               p_extintegration_key       IN OUT VARCHAR2); 

--FCUBS14.0_PricingIntegration_28020090
   PROCEDURE Pr_Process_RequestJ(p_user              IN SMTB_USER.User_Id%TYPE,
                               p_branch            IN STTM_CORE_BRANCH.Branch_Code%TYPE,--Standalone12.3 Changes
                               p_header_names      IN OUT VARCHAR2,
                               p_header_vals       IN OUT VARCHAR2,
                               p_addl_names        IN OUT VARCHAR2,
                               p_addl_vals         IN OUT VARCHAR2,
                               p_parents_name_list IN OUT CHARARRAYTYP_TY,
                               p_parents_fmt_list  IN OUT CHARARRAYTYP_TY,
                               p_tag_name_list     IN OUT CHARARRAYTYP_TY,
                               p_tag_values_list   IN OUT CHARARRAYTYP_TY,
                               p_error_nodes       IN OUT VARCHAR2,
                               p_status            IN OUT VARCHAR2,
                               p_extsys_msg        IN OUT NOCOPY CLOB,
                               p_timelog           IN OUT VARCHAR2,
                               p_db_log            OUT    VARCHAR2, ----21430826 
                               p_attachment        OUT VARCHAR2,
                               p_req_xml           IN CLOB,-- 25062166 :: ADDED P_REQ_XML
                               p_extintegration_key       IN OUT VARCHAR2,
                               p_pricing_req_xml   IN OUT NOCOPY CLOB ); 
--FCUBS14.0_PricingIntegration_28020090
							   
  PROCEDURE Pr_Udf_Pickup(p_user                  IN SMTB_USER.User_Id%TYPE,
                            p_branch                IN STTM_CORE_BRANCH.Branch_Code%TYPE,--Standalone12.3 Changes
                            p_Function_Id           IN VARCHAR2,
                            p_Rec_Key               IN VARCHAR2,
                            p_Udf_Field_Name        OUT VARCHAR2,
                            p_Udf_Field_Value       OUT VARCHAR2,
                            p_Udf_Data_Type         OUT VARCHAR2,
                            p_Udf_Val_Type          OUT VARCHAR2,
                            p_Udf_Field_Description OUT VARCHAR2,
                            p_Udf_Mandatory         OUT VARCHAR2,
                            p_Udf_Field_Val_Desc    OUT VARCHAR2);       
  PROCEDURE Pr_Process_Maint_Call(p_user              IN SMTB_USER.User_Id%TYPE,
                                  p_branch            IN STTM_CORE_BRANCH.Branch_Code%TYPE,--Standalone12.3 Changes
                                  p_header_names      IN OUT VARCHAR2,
                                  p_header_vals       IN OUT VARCHAR2,
                                  p_addl_names        IN OUT VARCHAR2,
                                  p_addl_vals         IN OUT VARCHAR2,
                                  p_parents_name_list IN OUT CHARARRAYTYP_TY,
                                  p_parents_fmt_list  IN OUT CHARARRAYTYP_TY,
                                  p_tag_name_list     IN OUT CHARARRAYTYP_TY,
                                  p_tag_values_list   IN OUT CHARARRAYTYP_TY,
                                  p_error_nodes       IN OUT VARCHAR2,
                                  p_status            IN OUT VARCHAR2,
                                  p_extsys_msg        IN OUT NOCOPY CLOB,
                                  p_timelog           IN OUT VARCHAR2,
                                  p_db_log            OUT    VARCHAR2, --21430826 
                                  p_attachment        OUT VARCHAR2,
                                  p_req_xml           IN CLOB,-- vrishti added.
                                  p_extintegration_key           IN OUT VARCHAR2); 

--FCUBS14.0_PricingIntegration_28020090 start								  
PROCEDURE Pr_Process_Maint_Call(p_user              IN SMTB_USER.User_Id%TYPE,
                                  p_branch            IN STTM_CORE_BRANCH.Branch_Code%TYPE,--Standalone12.3 Changes
                                  p_header_names      IN OUT VARCHAR2,
                                  p_header_vals       IN OUT VARCHAR2,
                                  p_addl_names        IN OUT VARCHAR2,
                                  p_addl_vals         IN OUT VARCHAR2,
                                  p_parents_name_list IN OUT CHARARRAYTYP_TY,
                                  p_parents_fmt_list  IN OUT CHARARRAYTYP_TY,
                                  p_tag_name_list     IN OUT CHARARRAYTYP_TY,
                                  p_tag_values_list   IN OUT CHARARRAYTYP_TY,
                                  p_error_nodes       IN OUT VARCHAR2,
                                  p_status            IN OUT VARCHAR2,
                                  p_extsys_msg        IN OUT NOCOPY CLOB,
                                  p_timelog           IN OUT VARCHAR2,
                                  p_db_log            OUT    VARCHAR2, --21430826 
                                  p_attachment        OUT VARCHAR2,
                                  p_req_xml           IN CLOB,-- vrishti added.
                                  p_extintegration_key IN OUT VARCHAR2,
								  p_pricing_req_xml    IN OUT NOCOPY CLOB ); 								  
--FCUBS14.0_PricingIntegration_28020090 end

  PROCEDURE Pr_Compare_Msgs(p_Function_Id IN VARCHAR2,
                            p_Prev_Msg    IN CLOB,
                            p_Curr_Msg    IN CLOB,
                            p_Final_Msg   OUT CLOB,
                            p_Err_Code    IN OUT VARCHAR2,
                            p_Err_Params  IN OUT VARCHAR2,
                            p_db_log      OUT CLOB,
                            p_action_code IN VARCHAR2,
                            p_source      IN VARCHAR2); -- sangeeta chANGES
                            
  PROCEDURE Pr_Get_DBLOG( p_db_log   OUT    CLOB); ----shruti changes
  PROCEDURE Pr_Strt_Processtime(p_starttime IN OUT NUMBER);--Non extensible gateway changes
  PROCEDURE Pr_Cal_Processtime(p_starttime   IN NUMBER,
                               p_end_time    OUT NUMBER,
                               p_dbsessionid OUT NUMBER);--Non extensible gateway changes
  /*FUNCTION fn_set_session_debug_trace(p_user         IN VARCHAR2,
                                      p_source       IN VARCHAR2,
                                      p_function_id  IN VARCHAR2,
                                      p_action       IN VARCHAR2,
                                      p_msg_id       IN VARCHAR2,
                                      p_service      IN VARCHAR2,
                                      p_debug_mode   IN VARCHAR2,
                                      p_log_enabled  IN OUT SMTB_SMSACTION_USERLEVELDEBUGS.DEBUGLOG_ENABLED%TYPE,
                                      p_trc_enabled  IN OUT SMTB_SMSACTION_USERLEVELDEBUGS.Dbtrace_Enabled%TYPE) RETURN BOOLEAN; */


--Standalone12.3 CleanUp Start									  
FUNCTION fn_pickup_udf(p_user                  IN SMTB_USER.User_Id%TYPE,
					 p_branch                IN STTM_CORE_BRANCH.Branch_Code%TYPE,--Standalone12.3 Changes
					 p_Function_Id           IN VARCHAR2,
					 p_Rec_Key               IN VARCHAR2,
					 p_Udf_Field_Name        OUT VARCHAR2,
					 p_Udf_Field_Value       OUT VARCHAR2,
					 p_Udf_Data_Type         OUT VARCHAR2,
					 p_Udf_Val_Type          OUT VARCHAR2,
					 p_Udf_Field_Description OUT VARCHAR2,
					 p_Udf_Mandatory         OUT VARCHAR2,
					 p_Udf_Field_Val_Desc    OUT VARCHAR2) RETURN BOOLEAN;
--Standalone12.3 CleanUp End						 
									  
END cspks_req_global_wrapper;
/