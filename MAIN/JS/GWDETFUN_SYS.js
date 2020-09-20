/***************************************************************************************************************************
**  This source is part of the Oracle Banking Software Product. 
**  Copyright (c) 2008 ,2017, Oracle and/or its affiliates.
**  All rights reserved.
**  
**  No part of this work may be reproduced, stored in a retrieval system, 
**  adopted or transmitted in any form or by any means, electronic, mechanical, photographic, 
**  graphic, optic recording or otherwise, translated in any language or computer language, 
**  without the prior written permission of Oracle and/or its affiliates.
**  
**  Oracle Financial Services Software Limited.
**  Oracle Park, Off Western Express Highway,
**  Goregaon (East),
**  Mumbai - 400 063,
**  India.
**  
**  Written by         : 
**  Date of creation   : 
**  File Name          : GWDETFUN_SYS.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : 
**  Last modified on   : 
**  Full Version       : 
**  Reason             : 
****************************************************************************************************************************/

//***** Code for criteria Search *****
var criteriaSearch  = 'N';
//----------------------------------------------------------------------------------------------------------------------
//***** FCJ XML FOR THE SCREEN *****
//----------------------------------------------------------------------------------------------------------------------
var fieldNameArray = {"BLK_GWTMS_EXT_SYS_FUNCTIONS":"FUNCTION_ID~ACTION~BULK_SMS_CHK_REQ~EXT_SYSTEM~EXTSYSTEM~DESCRIPTION~ACT~FUNCTIONID~OPERATION_CODE~SERVICE_NAME~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH"};

var multipleEntryPageSize = {};

var multipleEntrySVBlocks = "";

var tabMEBlks = {};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_GWTMS_EXT_SYS_FUNCTIONS">FUNCTION_ID~ACTION~BULK_SMS_CHK_REQ~EXT_SYSTEM~EXTSYSTEM~DESCRIPTION~ACT~FUNCTIONID~OPERATION_CODE~SERVICE_NAME~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '    </FLD>'; 

var strScreenName = "CVS_EXTFUNC";
var qryReqd = "Y";
var txnBranchFld = "" ;
var originSystem = "";
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** FCJ XML FOR SUMMARY SCREEN *****
//----------------------------------------------------------------------------------------------------------------------
var msgxml_sum=""; 
msgxml_sum += '    <FLD>'; 
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_GWTMS_EXT_SYS_FUNCTIONS">AUTHSTAT~TXNSTAT~FUNCTION_ID~ACTION~EXT_SYSTEM</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "GWDETFUN";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_GWTMS_EXT_SYS_FUNCTIONS";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_GWTMS_EXT_SYS_FUNCTIONS" : ""}; 

 var dataSrcLocationArray = new Array("BLK_GWTMS_EXT_SYS_FUNCTIONS"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside GWDETFUN.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside GWDETFUN.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_GWTMS_EXT_SYS_FUNCTIONS__EXT_SYSTEM";
pkFields[0] = "BLK_GWTMS_EXT_SYS_FUNCTIONS__EXT_SYSTEM";
queryFields[1] = "BLK_GWTMS_EXT_SYS_FUNCTIONS__FUNCTION_ID";
pkFields[1] = "BLK_GWTMS_EXT_SYS_FUNCTIONS__FUNCTION_ID";
queryFields[2] = "BLK_GWTMS_EXT_SYS_FUNCTIONS__ACTION";
pkFields[2] = "BLK_GWTMS_EXT_SYS_FUNCTIONS__ACTION";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
var modifyAmendArr = new Array(); 
var closeAmendArr = new Array(); 
var reopenAmendArr = new Array(); 
var reverseAmendArr = new Array(); 
var deleteAmendArr = new Array(); 
var rolloverAmendArr = new Array(); 
var confirmAmendArr = new Array(); 
var liquidateAmendArr = new Array(); 
var queryAmendArr = new Array(); 
var authorizeAmendArr = new Array(); 
//----------------------------------------------------------------------------------------------------------------------

var subsysArr    = new Array(); 

//----------------------------------------------------------------------------------------------------------------------

//***** CODE FOR LOVs *****
//----------------------------------------------------------------------------------------------------------------------
var lovInfoFlds = {"BLK_GWTMS_EXT_SYS_FUNCTIONS__FUNCTION_ID__LOV_FUNCID":["BLK_GWTMS_EXT_SYS_FUNCTIONS__FUNCTION_ID~BLK_GWTMS_EXT_SYS_FUNCTIONS__ACTION~BLK_GWTMS_EXT_SYS_FUNCTIONS__SERVICE_NAME~BLK_GWTMS_EXT_SYS_FUNCTIONS__OPERATION_CODE~","BLK_GWTMS_EXT_SYS_FUNCTIONS__EXT_SYSTEM!VARCHAR2","N~N~N~N",""],"BLK_GWTMS_EXT_SYS_FUNCTIONS__EXT_SYSTEM__LOV_EXTSYS":["BLK_GWTMS_EXT_SYS_FUNCTIONS__EXT_SYSTEM~BLK_GWTMS_EXT_SYS_FUNCTIONS__DESCRIPTION~","","N~N",""]};
var offlineLovInfoFlds = {};
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR TABS *****
//----------------------------------------------------------------------------------------------------------------------
var strHeaderTabId = 'TAB_HEADER';
var strFooterTabId = 'TAB_FOOTER';
var strCurrentTabId = 'TAB_MAIN';
//--------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------
var multipleEntryIDs = new Array();
var multipleEntryArray = new Array();
var multipleEntryCells = new Array();
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY VIEW SINGLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR ATTACHED CALLFORMS *****
 //----------------------------------------------------------------------------------------------------------------------

 var CallFormArray= new Array("CSCFNUDF~BLK_GWTMS_EXT_SYS_FUNCTIONS"); 

 var CallFormRelat=new Array(""); 

 var CallRelatType= new Array("N"); 


 var ArrFuncOrigin=new Array();
 var ArrPrntFunc=new Array();
 var ArrPrntOrigin=new Array();
 var ArrRoutingType=new Array();


 // Code for Loading Cluster/Custom js File Starts
 var ArrClusterModified=new Array();
 var ArrCustomModified=new Array();
 // Code for Loading Cluster/Custom js File ends

ArrFuncOrigin["GWDETFUN"]="KERNEL";
ArrPrntFunc["GWDETFUN"]="";
ArrPrntOrigin["GWDETFUN"]="";
ArrRoutingType["GWDETFUN"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["GWDETFUN"]="N";
ArrCustomModified["GWDETFUN"]="N";

 // Code for Loading Cluster/Custom js File ends


 /* Code For OBIEE functionalities */ 
var obScrArgName  = new Array(); 
var obScrArgSource  = new Array(); 
//***** CODE FOR SCREEN ARGS *****
//----------------------------------------------------------------------------------------------------------------------
var scrArgName = {"CSCFNUDF":""};
var scrArgSource = {"CSCFNUDF":""};
var scrArgVals = {"CSCFNUDF":""};
var scrArgDest = {};
//***** CODE FOR SUB-SYSTEM DEPENDENT  FIELDS   *****
//----------------------------------------------------------------------------------------------------------------------
var dpndntOnFlds = {"CSCFNUDF":""};
var dpndntOnSrvs = {"CSCFNUDF":""};
//***** CODE FOR TAB DEPENDENT  FIELDS   *****
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR CALLFORM TABS *****
//----------------------------------------------------------------------------------------------------------------------
var callformTabArray = new Array(); 
//***** CODE FOR ACTION STAGE DETAILS *****
//----------------------------------------------------------------------------------------------------------------------
var actStageArry = {};
//***** CODE FOR IMAGE FLDSET *****
//----------------------------------------------------------------------------------------------------------------------