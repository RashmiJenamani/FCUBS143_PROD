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
**  File Name          : STDCRCOL_SYS.js
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
var fieldNameArray = {"BLK_COLLATERALS":"ID~COLLATERAL_CURRENCY~COLLATERAL_VALUE~COLLATERAL_CODE~LIAB_ID~AVAILABLE~LIAB_BRANCH~START_DATE~COLLATERAL_TYPE~CUSTOMER_NO~LIMIT_CONTRIBUTION~END_DATE~INTEREST_RATE~BRANCH_CODE~COLLATERAL_DESCRIPTION~LIAB_NO~LIAB_NAME~SOURCE_SYSTEM~TAKEN_OVER~HOST_CODE~SOURCE_SYSTEM_LIAB_ID~SOURCE_SYSTEM_COLLATERAL_CODE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH"};

var multipleEntryPageSize = {};

var multipleEntrySVBlocks = "";

var tabMEBlks = {};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_COLLATERALS">ID~COLLATERAL_CURRENCY~COLLATERAL_VALUE~COLLATERAL_CODE~LIAB_ID~AVAILABLE~LIAB_BRANCH~START_DATE~COLLATERAL_TYPE~CUSTOMER_NO~LIMIT_CONTRIBUTION~END_DATE~INTEREST_RATE~BRANCH_CODE~COLLATERAL_DESCRIPTION~LIAB_NO~LIAB_NAME~SOURCE_SYSTEM~TAKEN_OVER~HOST_CODE~SOURCE_SYSTEM_LIAB_ID~SOURCE_SYSTEM_COLLATERAL_CODE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
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
msgxml_sum += '      <FN PARENT="BLK_COLLATERALS" RELATION_TYPE="1" TYPE="BLK_COLLAT_SUMMARY">AUTHSTAT~TXNSTAT~LIAB_NO~COLLATERAL_CODE~COLLATERAL_DESCRIPTION~COLLATERAL_CURRENCY~COLLATERAL_VALUE~LIMIT_CONTRIBUTION~START_DATE~END_DATE~COLLATERAL_TYPE~ID~CUSTOMER_NO~HOST_CODE~SOURCE_SYSTEM</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "STDCRCOL";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_COLLAT_SUMMARY";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_COLLATERALS" : ""}; 

 var dataSrcLocationArray = new Array("BLK_COLLATERALS"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside STDCRCOL.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside STDCRCOL.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_COLLATERALS__ID";
pkFields[0] = "BLK_COLLATERALS__ID";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
//***** Fields Amendable while Modification *****
var modifyAmendArr = {"BLK_COLLATERALS":["AVAILABLE","BRANCH_CODE","BTN_UDF","COLLATERAL_CODE","COLLATERAL_CURRENCY","COLLATERAL_DESCRIPTION","COLLATERAL_TYPE","COLLATERAL_VALUE","CUSTOMER_NO","END_DATEI","HOST_CODE","INTEREST_RATE","LIAB_NAME","LIAB_NO","LIMIT_CONTRIBUTION","SOURCE_SYSTEM","START_DATEI","TAKEN_OVER"]};
var closeAmendArr = new Array(); 
var reopenAmendArr = new Array(); 
var reverseAmendArr = new Array(); 
var deleteAmendArr = new Array(); 
var rolloverAmendArr = new Array(); 
var confirmAmendArr = new Array(); 
var liquidateAmendArr = new Array(); 
//***** Fields Amendable while Query *****
var queryAmendArr = {"BLK_COLLATERALS":["COLLATERAL_CODE","LIAB_NO"]};
var authorizeAmendArr = new Array(); 
//----------------------------------------------------------------------------------------------------------------------

var subsysArr    = new Array(); 

//----------------------------------------------------------------------------------------------------------------------

//***** CODE FOR LOVs *****
//----------------------------------------------------------------------------------------------------------------------
var lovInfoFlds = {"BLK_COLLATERALS__COLLATERAL_CURRENCY__LOV_CURRENCY":["BLK_COLLATERALS__COLLATERAL_CURRENCY~~","","N~N",""],"BLK_COLLATERALS__CUSTOMER_NO__LOV_CUSTOMER_NO":["BLK_COLLATERALS__CUSTOMER_NO~","BLK_COLLATERALS__LIAB_NO!","N",""],"BLK_COLLATERALS__LIAB_NO__LOV_LIAB_NO":["BLK_COLLATERALS__LIAB_NO~BLK_COLLATERALS__LIAB_ID~BLK_COLLATERALS__LIAB_BRANCH~","","N~N~N",""],"BLK_COLLATERALS__SOURCE_SYSTEM__LOV_SOURCE_SYSTEM":["BLK_COLLATERALS__SOURCE_SYSTEM~","","N",""],"BLK_COLLATERALS__HOST_CODE__LOV_HOSTCODE":["BLK_COLLATERALS__HOST_CODE~","","N",""]};
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

 var CallFormArray= new Array("CSCFNUDF~BLK_COLLATERALS"); 

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

ArrFuncOrigin["STDCRCOL"]="KERNEL";
ArrPrntFunc["STDCRCOL"]="";
ArrPrntOrigin["STDCRCOL"]="";
ArrRoutingType["STDCRCOL"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["STDCRCOL"]="N";
ArrCustomModified["STDCRCOL"]="N";

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