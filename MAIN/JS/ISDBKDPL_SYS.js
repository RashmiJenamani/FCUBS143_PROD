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
**  File Name          : ISDBKDPL_SYS.js
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
var fieldNameArray = {"BLK_BIC_DIRECTORYPLUS":"RECORDKEY~OFFICETYPE~PARENT_OFFICEKEY~HEAD_OFFICEKEY~LEGALTYPE~LEGAL_PARENTKEY~GROUPTYPE~GROUP_PARENTKEY~INSTITUTIONSTATUS~COOPERATIVE_GROUPKEY~ISO_LEICODE~BIC8_CODE~BRANCH_BIC_CODE~BIC_CODE~CHIPSUID~NATIONALID~CONNECTED_BIC_CODE~INSTITUTIONNAME~BRANCH_INFORMATION~POB_NO~STREET_ADDR1~STREET_ADDR2~STREET_ADDR3~STREET_ADDR4~CITY_NAME~CPS~ZIPCODE~COUNTRYNAME~ISO_COUNTRYCODE~TIMEZONE~SUB_TYPE_INDICATOR~NETWORKCONNECTIVITY~BRANCHQUALIFIERS~SERVICECODES~SSI_GROUP_KEY~IBANKEY~FIELD_A~FIELD_B"};

var multipleEntryPageSize = {};

var multipleEntrySVBlocks = "";

var tabMEBlks = {};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_BIC_DIRECTORYPLUS">RECORDKEY~OFFICETYPE~PARENT_OFFICEKEY~HEAD_OFFICEKEY~LEGALTYPE~LEGAL_PARENTKEY~GROUPTYPE~GROUP_PARENTKEY~INSTITUTIONSTATUS~COOPERATIVE_GROUPKEY~ISO_LEICODE~BIC8_CODE~BRANCH_BIC_CODE~BIC_CODE~CHIPSUID~NATIONALID~CONNECTED_BIC_CODE~INSTITUTIONNAME~BRANCH_INFORMATION~POB_NO~STREET_ADDR1~STREET_ADDR2~STREET_ADDR3~STREET_ADDR4~CITY_NAME~CPS~ZIPCODE~COUNTRYNAME~ISO_COUNTRYCODE~TIMEZONE~SUB_TYPE_INDICATOR~NETWORKCONNECTIVITY~BRANCHQUALIFIERS~SERVICECODES~SSI_GROUP_KEY~IBANKEY~FIELD_A~FIELD_B</FN>'; 
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
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_BIC_DIRECTORYPLUS">RECORDKEY~OFFICETYPE~PARENT_OFFICEKEY~HEAD_OFFICEKEY~LEGALTYPE~LEGAL_PARENTKEY~GROUPTYPE~GROUP_PARENTKEY~INSTITUTIONSTATUS~COOPERATIVE_GROUPKEY~ISO_LEICODE~BIC8_CODE~BRANCH_BIC_CODE~BIC_CODE~CHIPSUID~NATIONALID~CONNECTED_BIC_CODE~INSTITUTIONNAME~BRANCH_INFORMATION~POB_NO~STREET_ADDR1~STREET_ADDR2~STREET_ADDR3~STREET_ADDR4~CITY_NAME~CPS~ZIPCODE~COUNTRYNAME~ISO_COUNTRYCODE~TIMEZONE~SUB_TYPE_INDICATOR~NETWORKCONNECTIVITY~BRANCHQUALIFIERS~SERVICECODES~SSI_GROUP_KEY~IBANKEY~FIELD_B</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "ISDBKDPL";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_BIC_DIRECTORYPLUS";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_BIC_DIRECTORYPLUS" : ""}; 

 var dataSrcLocationArray = new Array("BLK_BIC_DIRECTORYPLUS"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside ISDBKDPL.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside ISDBKDPL.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_BIC_DIRECTORYPLUS__RECORDKEY";
pkFields[0] = "BLK_BIC_DIRECTORYPLUS__RECORDKEY";
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
var lovInfoFlds = {};
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

ArrFuncOrigin["ISDBKDPL"]="KERNEL";
ArrPrntFunc["ISDBKDPL"]="";
ArrPrntOrigin["ISDBKDPL"]="";
ArrRoutingType["ISDBKDPL"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["ISDBKDPL"]="N";
ArrCustomModified["ISDBKDPL"]="N";

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
var actStageArry = {"QUERY":"2","NEW":"2","MODIFY":"2","AUTHORIZE":"2","DELETE":"2","CLOSE":"2","REOPEN":"2","REVERSE":"2","ROLLOVER":"2","CONFIRM":"2","LIQUIDATE":"2","SUMMARYQUERY":"2"};
//***** CODE FOR IMAGE FLDSET *****
//----------------------------------------------------------------------------------------------------------------------