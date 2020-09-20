/***************************************************************************************************************************
**  This source is part of the FLEXCUBE Software Product. 
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
**  File Name          : MSDMEDMT_SYS.js
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
var fieldNameArray = {"BLK_MSTMS_MEDIA":"MEDIA~DESCRIPTION~MEDIA_NO~TW_REQ_STATUS~MSG_SUFFIX~PADDING_REQ~MSG_TERMINATOR~STOP_PROCESS~MEDIA_PRIORITY~NO_OF_CHAR~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH","BLK_MSTMS_COMPATIBLE_MEDIA":"MEDIA~COMPATIBLE_MEDIA"};

var multipleEntryPageSize = {"BLK_MSTMS_COMPATIBLE_MEDIA" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_MAIN__TAB_MAIN":"BLK_MSTMS_COMPATIBLE_MEDIA"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_MSTMS_MEDIA">MEDIA~DESCRIPTION~MEDIA_NO~TW_REQ_STATUS~MSG_SUFFIX~PADDING_REQ~MSG_TERMINATOR~STOP_PROCESS~MEDIA_PRIORITY~NO_OF_CHAR~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '      <FN PARENT="BLK_MSTMS_MEDIA" RELATION_TYPE="N" TYPE="BLK_MSTMS_COMPATIBLE_MEDIA">MEDIA~COMPATIBLE_MEDIA</FN>'; 
msgxml += '    </FLD>'; 

var strScreenName = "CVS_MAIN";
var qryReqd = "Y";
var txnBranchFld = "" ;
var originSystem = "";
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** FCJ XML FOR SUMMARY SCREEN *****
//----------------------------------------------------------------------------------------------------------------------
var msgxml_sum=""; 
msgxml_sum += '    <FLD>'; 
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_MSTMS_MEDIA">AUTHSTAT~TXNSTAT~MEDIA~DESCRIPTION~MEDIA_NO</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "MSDMEDMT";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_MSTMS_MEDIA";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_MSTMS_MEDIA" : "","BLK_MSTMS_COMPATIBLE_MEDIA" : "BLK_MSTMS_MEDIA~N"}; 

 var dataSrcLocationArray = new Array("BLK_MSTMS_MEDIA","BLK_MSTMS_COMPATIBLE_MEDIA"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside MSDMEDMT.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside MSDMEDMT.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_MSTMS_MEDIA__MEDIA";
pkFields[0] = "BLK_MSTMS_MEDIA__MEDIA";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
//***** Fields Amendable while Modification *****
var modifyAmendArr = {"BLK_MSTMS_MEDIA":["DESCRIPTION","MEDIA_NO","MEDIA_PRIORITY","MSG_SUFFIX","MSG_TERMINATOR","NO_OF_CHAR","PADDING_REQ","STOP_PROCESS","TW_REQ_STATUS"]};
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
var lovInfoFlds = {"BLK_MSTMS_COMPATIBLE_MEDIA__COMPATIBLE_MEDIA__LOV_MEDIA":["BLK_MSTMS_COMPATIBLE_MEDIA__COMPATIBLE_MEDIA~~","BLK_MSTMS_MEDIA__MEDIA!VARCHAR2","N~N",""]};
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
var multipleEntryIDs = new Array("BLK_MSTMS_COMPATIBLE_MEDIA");
var multipleEntryArray = new Array();
var multipleEntryCells = new Array();
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY VIEW SINGLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR ATTACHED CALLFORMS *****
 //----------------------------------------------------------------------------------------------------------------------

 var CallFormArray= new Array("CSCFNUDF~BLK_MSTMS_MEDIA"); 

 var CallFormRelat=new Array(""); 

 var CallRelatType= new Array("1"); 


 var ArrFuncOrigin=new Array();
 var ArrPrntFunc=new Array();
 var ArrPrntOrigin=new Array();
 var ArrRoutingType=new Array();


 // Code for Loading Cluster/Custom js File Starts
 var ArrClusterModified=new Array();
 var ArrCustomModified=new Array();
 // Code for Loading Cluster/Custom js File ends

ArrFuncOrigin["MSDMEDMT"]="KERNEL";
ArrPrntFunc["MSDMEDMT"]="";
ArrPrntOrigin["MSDMEDMT"]="";
ArrRoutingType["MSDMEDMT"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["MSDMEDMT"]="N";
ArrCustomModified["MSDMEDMT"]="N";

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
var actStageArry = {"QUERY":"2","NEW":"2","MODIFY":"2","AUTHORIZE":"1","DELETE":"1","CLOSE":"1","REOPEN":"1","REVERSE":"1","ROLLOVER":"1","CONFIRM":"1","LIQUIDATE":"1","SUMMARYQUERY":"1"};
//***** CODE FOR IMAGE FLDSET *****
//----------------------------------------------------------------------------------------------------------------------