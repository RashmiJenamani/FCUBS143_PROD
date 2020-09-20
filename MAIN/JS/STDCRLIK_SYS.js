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
**  File Name          : STDCRLIK_SYS.js
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
var fieldNameArray = {"BLK_LIAB_CUST":"ID~SOURCE_SYSTEM_CUSTOMER_NO~HOST_CODE~SOURCE_SYSTEM_LIAB_ID~LIAB_ID~CUSTOMER_NO~BRANCH_CODE~SOURCE_SYSTEM~LIAB_NO~LIAB_NAME~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH"};

var multipleEntryPageSize = {};

var multipleEntrySVBlocks = "";

var tabMEBlks = {};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_LIAB_CUST">ID~SOURCE_SYSTEM_CUSTOMER_NO~HOST_CODE~SOURCE_SYSTEM_LIAB_ID~LIAB_ID~CUSTOMER_NO~BRANCH_CODE~SOURCE_SYSTEM~LIAB_NO~LIAB_NAME~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
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
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_LIAB_CUST">AUTHSTAT~TXNSTAT~CUSTOMER_NO~ID~LIAB_ID~BRANCH_CODE~HOST_CODE~SOURCE_SYSTEM</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "STDCRLIK";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_LIAB_CUST";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_LIAB_CUST" : ""}; 

 var dataSrcLocationArray = new Array("BLK_LIAB_CUST"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside STDCRLIK.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside STDCRLIK.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_LIAB_CUST__ID";
pkFields[0] = "BLK_LIAB_CUST__ID";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
//***** Fields Amendable while Modification *****
var modifyAmendArr = {"BLK_LIAB_CUST":["BRANCH_CODE","BTN_FIELDS","CUSTOMER_NO","HOST_CODE","LIAB_ID","LIAB_NAME","LIAB_NO","SOURCE_SYSTEM","SOURCE_SYSTEM_CUSTOMER_NO","SOURCE_SYSTEM_LIAB_ID"]};
var closeAmendArr = new Array(); 
var reopenAmendArr = new Array(); 
var reverseAmendArr = new Array(); 
var deleteAmendArr = new Array(); 
var rolloverAmendArr = new Array(); 
var confirmAmendArr = new Array(); 
var liquidateAmendArr = new Array(); 
//***** Fields Amendable while Query *****
var queryAmendArr = {"BLK_LIAB_CUST":["CUSTOMER_NO","LIAB_NO"]};
var authorizeAmendArr = new Array(); 
//----------------------------------------------------------------------------------------------------------------------

var subsysArr    = new Array(); 

//----------------------------------------------------------------------------------------------------------------------

//***** CODE FOR LOVs *****
//----------------------------------------------------------------------------------------------------------------------
var lovInfoFlds = {"BLK_LIAB_CUST__HOST_CODE__LOV_HOSTCODE":["BLK_LIAB_CUST__HOST_CODE~","","N",""],"BLK_LIAB_CUST__CUSTOMER_NO__LOV_CUSTOMER_NO":["BLK_LIAB_CUST__CUSTOMER_NO~~","","N~N",""],"BLK_LIAB_CUST__SOURCE_SYSTEM__LOV_SOURCE_SYSTEM":["BLK_LIAB_CUST__SOURCE_SYSTEM~","","N",""],"BLK_LIAB_CUST__LIAB_NO__LOV_LIABILITY":["BLK_LIAB_CUST__LIAB_NO~BLK_LIAB_CUST__LIAB_NAME~BLK_LIAB_CUST__LIAB_ID~","","N~N~N",""]};
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

 var CallFormArray= new Array("CSCFNUDF~BLK_LIAB_CUST"); 

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

ArrFuncOrigin["STDCRLIK"]="KERNEL";
ArrPrntFunc["STDCRLIK"]="";
ArrPrntOrigin["STDCRLIK"]="";
ArrRoutingType["STDCRLIK"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["STDCRLIK"]="N";
ArrCustomModified["STDCRLIK"]="N";

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