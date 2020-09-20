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
**  File Name          : AEDBRMTR_SYS.js
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
var fieldNameArray = {"BLK_EOC_MONITOR":"BRNCD~EOCSTATS~MESSAGE~BRNNAME","BLK_EOC_RUNCHART":"BRNCD~BRNDATE~EOCSEQUENCE~EOCSTAGE~EOCSTAGESTATUS~EOCREFNO~SESSION~ERROCDE~ERRPARAM~ERR","BLK_EOC_PROGRAMS":"BRNCD~EOCSEQUENCE~EOCSTAGE~EOCBATCH~BRNDT~EOCBATCHSTATUS~EOCREFNUM~SESSION~ERRCD~ERR~EOCBATCHSEQ"};

var multipleEntryPageSize = {"BLK_EOC_RUNCHART" :"15" ,"BLK_EOC_PROGRAMS" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_MAIN__TAB_MAIN":"BLK_EOC_RUNCHART~BLK_EOC_PROGRAMS"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_EOC_MONITOR">BRNCD~EOCSTATS~MESSAGE~BRNNAME</FN>'; 
msgxml += '      <FN PARENT="BLK_EOC_MONITOR" RELATION_TYPE="N" TYPE="BLK_EOC_RUNCHART">BRNCD~BRNDATE~EOCSEQUENCE~EOCSTAGE~EOCSTAGESTATUS~EOCREFNO~SESSION~ERROCDE~ERRPARAM~ERR</FN>'; 
msgxml += '      <FN PARENT="BLK_EOC_RUNCHART" RELATION_TYPE="N" TYPE="BLK_EOC_PROGRAMS">BRNCD~EOCSEQUENCE~EOCSTAGE~EOCBATCH~BRNDT~EOCBATCHSTATUS~EOCREFNUM~SESSION~ERRCD~ERR~EOCBATCHSEQ</FN>'; 
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
msgxml_sum += '      <FN PARENT="BLK_EOC_MONITOR" RELATION_TYPE="1" TYPE="BLK_SUMMARY">BRNCD~EOCREFNO~EOCSEQNO~EODDATE~BRNDATE~CURRENTSTAGE~TARGETSTAGE~RUNNINGSTAGE~EOCSTTUS~MESSAGE</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "AEDBRMTR";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_SUMMARY";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_EOC_MONITOR" : "","BLK_EOC_RUNCHART" : "BLK_EOC_MONITOR~N","BLK_EOC_PROGRAMS" : "BLK_EOC_RUNCHART~N"}; 

 var dataSrcLocationArray = new Array("BLK_EOC_MONITOR","BLK_EOC_RUNCHART","BLK_EOC_PROGRAMS"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside AEDBRMTR.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside AEDBRMTR.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_EOC_MONITOR__BRNCD";
pkFields[0] = "BLK_EOC_MONITOR__BRNCD";
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
var lovInfoFlds = {"BLK_EOC_MONITOR__BRNCD__LOV_BRANCH":["BLK_EOC_MONITOR__BRNCD~BLK_EOC_MONITOR__BRNNAME~","","N~N",""]};
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
var multipleEntryIDs = new Array("BLK_EOC_RUNCHART","BLK_EOC_PROGRAMS");
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

ArrFuncOrigin["AEDBRMTR"]="KERNEL";
ArrPrntFunc["AEDBRMTR"]="";
ArrPrntOrigin["AEDBRMTR"]="";
ArrRoutingType["AEDBRMTR"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["AEDBRMTR"]="N";
ArrCustomModified["AEDBRMTR"]="N";

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