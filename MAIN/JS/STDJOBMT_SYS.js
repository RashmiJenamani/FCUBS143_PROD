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
**  File Name          : STDJOBMT_SYS.js
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
var fieldNameArray = {"BLK_STTM_JOB_DEFINITION":"JOBCD~JOBDESC~SCHED~TRGTYP~CRONEXPR~JOBTYP~JOBCLSPROC~TRGRPT~SMPTRGFREQ~TRGLISTR~ACTV~JNDINAME~LOGREQD~JOBGRP~SCHEDTYP~PRIORITY~VETOBLKTRG~MAXNOINST~MSGQUE~STARTUPMOD~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH","BLK_STTB_JOB_PARAM":"PRMNAME~DATATYP~PRMVAL"};

var multipleEntryPageSize = {"BLK_STTB_JOB_PARAM" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_MAIN__TAB_MAIN":"BLK_STTB_JOB_PARAM"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_STTM_JOB_DEFINITION">JOBCD~JOBDESC~SCHED~TRGTYP~CRONEXPR~JOBTYP~JOBCLSPROC~TRGRPT~SMPTRGFREQ~TRGLISTR~ACTV~JNDINAME~LOGREQD~JOBGRP~SCHEDTYP~PRIORITY~VETOBLKTRG~MAXNOINST~MSGQUE~STARTUPMOD~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '      <FN PARENT="BLK_STTM_JOB_DEFINITION" RELATION_TYPE="N" TYPE="BLK_STTB_JOB_PARAM">PRMNAME~DATATYP~PRMVAL</FN>'; 
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
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_STTM_JOB_DEFINITION">AUTHSTAT~TXNSTAT~JOBCD~JOBDESC~JOBGRP~JOBTYP~TRGTYP~SCHEDTYP</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "STDJOBMT";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_STTM_JOB_DEFINITION";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_STTM_JOB_DEFINITION" : "","BLK_STTB_JOB_PARAM" : "BLK_STTM_JOB_DEFINITION~N"}; 

 var dataSrcLocationArray = new Array("BLK_STTM_JOB_DEFINITION","BLK_STTB_JOB_PARAM"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside STDJOBMT.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside STDJOBMT.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_STTM_JOB_DEFINITION__JOBCD";
pkFields[0] = "BLK_STTM_JOB_DEFINITION__JOBCD";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
//***** Fields Amendable while Modification *****
var modifyAmendArr = {"BLK_STTB_JOB_PARAM":["DATATYP","PRMVAL"],"BLK_STTM_JOB_DEFINITION":["ACTV","BTN_VALIDATE","CRONEXPR","JNDINAME","JOBCLSPROC","JOBDESC","JOBGRP","JOBTYP","LOGREQD","MSGQUE","PRIORITY","SCHED","SCHEDTYP","SMPTRGFREQ","TRGLISTR","TRGRPT","TRGTYP","VETOBLKTRG"]};
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
var lovInfoFlds = {"BLK_STTM_JOB_DEFINITION__JOBGRP__LOV_GRP":["BLK_STTM_JOB_DEFINITION__JOBGRP~","","N","N"]};
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
var multipleEntryIDs = new Array("BLK_STTB_JOB_PARAM");
var multipleEntryArray = new Array();
var multipleEntryCells = new Array();
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY VIEW SINGLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR ATTACHED CALLFORMS *****
 //----------------------------------------------------------------------------------------------------------------------

 var CallFormArray= new Array(); 

 var CallFormRelat=new Array(); 

 var CallRelatType= new Array(); 


 var ArrFuncOrigin=new Array();
 var ArrPrntFunc=new Array();
 var ArrPrntOrigin=new Array();
 var ArrRoutingType=new Array();


 // Code for Loading Cluster/Custom js File Starts
 var ArrClusterModified=new Array();
 var ArrCustomModified=new Array();
 // Code for Loading Cluster/Custom js File ends

ArrFuncOrigin["STDJOBMT"]="KERNEL";
ArrPrntFunc["STDJOBMT"]="";
ArrPrntOrigin["STDJOBMT"]="";
ArrRoutingType["STDJOBMT"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["STDJOBMT"]="N";
ArrCustomModified["STDJOBMT"]="N";

 // Code for Loading Cluster/Custom js File ends


 /* Code For OBIEE functionalities */ 
var obScrArgName  = new Array(); 
var obScrArgSource  = new Array(); 
//***** CODE FOR SCREEN ARGS *****
//----------------------------------------------------------------------------------------------------------------------
var scrArgName = {};
var scrArgSource = {};
var scrArgVals = {};
var scrArgDest = {};
//***** CODE FOR SUB-SYSTEM DEPENDENT  FIELDS   *****
//----------------------------------------------------------------------------------------------------------------------
var dpndntOnFlds = {};
var dpndntOnSrvs = {};
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