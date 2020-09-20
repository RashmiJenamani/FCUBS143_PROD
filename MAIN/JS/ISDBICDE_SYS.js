/***************************************************************************************************************************
**  This source is part of the FLEXCUBE Software Product. 
**  Copyright (c) 2008 ,2019, Oracle and/or its affiliates.
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
**  File Name          : ISDBICDE_SYS.js
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
var fieldNameArray = {"BLK_ISTMS_BIC_DIRECTORY":"GENMT103~BLACKLISTED~CUGMEMBER~GENMT103P~MULTICUSTTRANSFER~MAXSIZE~REMITMEMBER~SUBTYPECODE~GENMT102P~GENMT101~TRANSACTIONPERMSG~BICCODE~BANKNAME~CUSTOMERNO~SKARRANGEMENT~BANKADDRESS1~BANKADDRESS2~BANKADDRESS3~RELATIONSHIP~SWIFTKEY~TELEXKEY~UPLOADFLAG~UPLOADUPDATE~CUSTNAME~ADB_MEMBER~BE_INDICATOR~BRANCH_INFO~CITY~CPS~ISO_COUNTRY_CODE~POB_NUMBER~STREET_ADDR_1~STREET_ADDR_2~STREET_ADDR_3~STREET_ADDR_4~ZIP_CODE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH"};

var multipleEntryPageSize = {};

var multipleEntrySVBlocks = "";

var tabMEBlks = {};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_ISTMS_BIC_DIRECTORY">GENMT103~BLACKLISTED~CUGMEMBER~GENMT103P~MULTICUSTTRANSFER~MAXSIZE~REMITMEMBER~SUBTYPECODE~GENMT102P~GENMT101~TRANSACTIONPERMSG~BICCODE~BANKNAME~CUSTOMERNO~SKARRANGEMENT~BANKADDRESS1~BANKADDRESS2~BANKADDRESS3~RELATIONSHIP~SWIFTKEY~TELEXKEY~UPLOADFLAG~UPLOADUPDATE~CUSTNAME~ADB_MEMBER~BE_INDICATOR~BRANCH_INFO~CITY~CPS~ISO_COUNTRY_CODE~POB_NUMBER~STREET_ADDR_1~STREET_ADDR_2~STREET_ADDR_3~STREET_ADDR_4~ZIP_CODE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
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
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_ISTMS_BIC_DIRECTORY">AUTHSTAT~TXNSTAT~BICCODE~BANKNAME~BANKADDRESS1~BE_INDICATOR</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "ISDBICDE";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_ISTMS_BIC_DIRECTORY";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_ISTMS_BIC_DIRECTORY" : ""}; 

 var dataSrcLocationArray = new Array("BLK_ISTMS_BIC_DIRECTORY"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside ISDBICDE.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside ISDBICDE.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_ISTMS_BIC_DIRECTORY__BICCODE";
pkFields[0] = "BLK_ISTMS_BIC_DIRECTORY__BICCODE";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
//***** Fields Amendable while Modification *****
var modifyAmendArr = {"BLK_ISTMS_BIC_DIRECTORY":["ADB_MEMBER","BANKADDRESS1","BANKADDRESS2","BANKADDRESS3","BANKNAME","BE_INDICATOR","BLACKLISTED","CUSTOMERNO","GENMT101","GENMT102P","GENMT103","GENMT103P","MAXSIZE","MULTICUSTTRANSFER","RELATIONSHIP","REMITMEMBER","SKARRANGEMENT","SUBTYPECODE","SWIFTKEY","TELEXKEY","TRANSACTIONPERMSG","UPLOADUPDATE"]};
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
var lovInfoFlds = {"BLK_ISTMS_BIC_DIRECTORY__SUBTYPECODE__LOV_SUBTYPE_CODE":["BLK_ISTMS_BIC_DIRECTORY__SUBTYPECODE~~BLK_ISTMS_BIC_DIRECTORY__BE_INDICATOR~","","N~N~N",""],"BLK_ISTMS_BIC_DIRECTORY__CUSTOMERNO__LOV_BANK_CUST":["BLK_ISTMS_BIC_DIRECTORY__CUSTOMERNO~BLK_ISTMS_BIC_DIRECTORY__CUSTNAME~~BLK_ISTMS_BIC_DIRECTORY__BANKADDRESS1~BLK_ISTMS_BIC_DIRECTORY__BANKADDRESS2~BLK_ISTMS_BIC_DIRECTORY__BANKADDRESS3~","","N~N~N~N~N~N",""]};
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

 var CallFormArray= new Array("CSCFNUDF~BLK_ISTMS_BIC_DIRECTORY"); 

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

ArrFuncOrigin["ISDBICDE"]="KERNEL";
ArrPrntFunc["ISDBICDE"]="";
ArrPrntOrigin["ISDBICDE"]="";
ArrRoutingType["ISDBICDE"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["ISDBICDE"]="N";
ArrCustomModified["ISDBICDE"]="N";

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