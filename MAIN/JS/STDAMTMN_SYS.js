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
**  File Name          : STDAMTMN_SYS.js
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
var fieldNameArray = {"BLK_CSTMS_AMTWORD_LANG":"LANG_CODE~LANG_NAME~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH","BLK_CSTMS_AMTWORD_TEXT":"LANG~AMT~TEXT~ONE_FLAG","BLK_CSTMS_AMTWORD_CCY":"LANG~CCY~PRE_DECIMAL~POST_DECIMAL~TEXT_BEFORE~FINAL_TEXT~DECIMALS_AS_FRACTION"};

var multipleEntryPageSize = {"BLK_CSTMS_AMTWORD_TEXT" :"15" ,"BLK_CSTMS_AMTWORD_CCY" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_MAIN__TAB_ALL":"BLK_CSTMS_AMTWORD_TEXT~BLK_CSTMS_AMTWORD_CCY"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_CSTMS_AMTWORD_LANG">LANG_CODE~LANG_NAME~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '      <FN PARENT="BLK_CSTMS_AMTWORD_LANG" RELATION_TYPE="N" TYPE="BLK_CSTMS_AMTWORD_TEXT">LANG~AMT~TEXT~ONE_FLAG</FN>'; 
msgxml += '      <FN PARENT="BLK_CSTMS_AMTWORD_LANG" RELATION_TYPE="N" TYPE="BLK_CSTMS_AMTWORD_CCY">LANG~CCY~PRE_DECIMAL~POST_DECIMAL~TEXT_BEFORE~FINAL_TEXT~DECIMALS_AS_FRACTION</FN>'; 
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
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_CSTMS_AMTWORD_LANG">AUTHSTAT~TXNSTAT~LANG_CODE</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "STDAMTMN";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_CSTMS_AMTWORD_LANG";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_CSTMS_AMTWORD_LANG" : "","BLK_CSTMS_AMTWORD_TEXT" : "BLK_CSTMS_AMTWORD_LANG~N","BLK_CSTMS_AMTWORD_CCY" : "BLK_CSTMS_AMTWORD_LANG~N"}; 

 var dataSrcLocationArray = new Array("BLK_CSTMS_AMTWORD_LANG","BLK_CSTMS_AMTWORD_TEXT","BLK_CSTMS_AMTWORD_CCY"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside STDAMTMN.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside STDAMTMN.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_CSTMS_AMTWORD_LANG__LANG_CODE";
pkFields[0] = "BLK_CSTMS_AMTWORD_LANG__LANG_CODE";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
//***** Fields Amendable while Modification *****
var modifyAmendArr = {"BLK_CSTMS_AMTWORD_CCY":["CCY","DECIMALS_AS_FRACTION","FINAL_TEXT","LANG","POST_DECIMAL","PRE_DECIMAL","TEXT_BEFORE"],"BLK_CSTMS_AMTWORD_TEXT":["AMT","LANG","ONE_FLAG","TEXT"]};
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
var lovInfoFlds = {"BLK_CSTMS_AMTWORD_LANG__LANG_CODE__LOV_LANG_CODE":["BLK_CSTMS_AMTWORD_LANG__LANG_CODE~BLK_CSTMS_AMTWORD_LANG__LANG_NAME~","","N~N",""],"BLK_CSTMS_AMTWORD_CCY__CCY__LOV_CCY_CODE":["BLK_CSTMS_AMTWORD_CCY__CCY~~","","N~N",""]};
var offlineLovInfoFlds = {};
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR TABS *****
//----------------------------------------------------------------------------------------------------------------------
var strHeaderTabId = 'TAB_HEADER';
var strFooterTabId = 'TAB_FOOTER';
var strCurrentTabId = 'TAB_ALL';
//--------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------
var multipleEntryIDs = new Array("BLK_CSTMS_AMTWORD_TEXT","BLK_CSTMS_AMTWORD_CCY");
var multipleEntryArray = new Array();
var multipleEntryCells = new Array();
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY VIEW SINGLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR ATTACHED CALLFORMS *****
 //----------------------------------------------------------------------------------------------------------------------

 var CallFormArray= new Array("CSCFNUDF~BLK_CSTMS_AMTWORD_LANG"); 

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

ArrFuncOrigin["STDAMTMN"]="KERNEL";
ArrPrntFunc["STDAMTMN"]="";
ArrPrntOrigin["STDAMTMN"]="";
ArrRoutingType["STDAMTMN"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["STDAMTMN"]="N";
ArrCustomModified["STDAMTMN"]="N";

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
var actStageArry = {"QUERY":"2","NEW":"2","MODIFY":"2","AUTHORIZE":"1","DELETE":"1","CLOSE":"1","REOPEN":"1","REVERSE":"1","ROLLOVER":"1","CONFIRM":"1","LIQUIDATE":"1","SUMMARYQUERY":"2"};
//***** CODE FOR IMAGE FLDSET *****
//----------------------------------------------------------------------------------------------------------------------