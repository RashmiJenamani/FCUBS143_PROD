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
**  File Name          : IFDINPRM_SYS.js
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
var fieldNameArray = {"BLK_INTEGRATION_MASTER":"BRNCODE~EXTSYSTEM~BRANCHCODE~EXTERNALSYS~AMTBLKVALREQD~OFSREQD~OFSNETTING~OFSTXNCODE~OFSAMTTAG~FORCEPOST~AUTOAUTH~BRNDESC~EXTSYSDESC~EXTSYS_USERID~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH","BLK_INTEGRATION_DETAILS":"BRNCODE~EXTSYS~SERVICENAME~COMMCHANNEL~COMMNMODE~COMMNLAYER~WSSERVICENAME~WSPORT~WSENDPOINT~WSUSER~WSPWD~WSXSLFILE~CUSTOMCLASSNAME~ATMSERVERIP~ATMSERVERPORT~MDBQCF~MDBOUTQUEUE~MDBRESPINQUEUE~REST_CONTEXT~REST_IP~REST_PATTERN~REST_PORT"};

var multipleEntryPageSize = {"BLK_INTEGRATION_DETAILS" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_MAIN__TAB_MAIN":"BLK_INTEGRATION_DETAILS"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_INTEGRATION_MASTER">BRNCODE~EXTSYSTEM~BRANCHCODE~EXTERNALSYS~AMTBLKVALREQD~OFSREQD~OFSNETTING~OFSTXNCODE~OFSAMTTAG~FORCEPOST~AUTOAUTH~BRNDESC~EXTSYSDESC~EXTSYS_USERID~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '      <FN PARENT="BLK_INTEGRATION_MASTER" RELATION_TYPE="N" TYPE="BLK_INTEGRATION_DETAILS">BRNCODE~EXTSYS~SERVICENAME~COMMCHANNEL~COMMNMODE~COMMNLAYER~WSSERVICENAME~WSPORT~WSENDPOINT~WSUSER~WSPWD~WSXSLFILE~CUSTOMCLASSNAME~ATMSERVERIP~ATMSERVERPORT~MDBQCF~MDBOUTQUEUE~MDBRESPINQUEUE~REST_CONTEXT~REST_IP~REST_PATTERN~REST_PORT</FN>'; 
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
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_INTEGRATION_MASTER">AUTHSTAT~TXNSTAT~BRNCODE~EXTSYSTEM</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "IFDINPRM";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_INTEGRATION_MASTER";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_INTEGRATION_MASTER" : "","BLK_INTEGRATION_DETAILS" : "BLK_INTEGRATION_MASTER~N"}; 

 var dataSrcLocationArray = new Array("BLK_INTEGRATION_MASTER","BLK_INTEGRATION_DETAILS"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside IFDINPRM.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside IFDINPRM.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_INTEGRATION_MASTER__BRNCODE";
pkFields[0] = "BLK_INTEGRATION_MASTER__BRNCODE";
queryFields[1] = "BLK_INTEGRATION_MASTER__EXTSYSTEM";
pkFields[1] = "BLK_INTEGRATION_MASTER__EXTSYSTEM";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
//***** Fields Amendable while Modification *****
var modifyAmendArr = {"BLK_INTEGRATION_DETAILS":["ATMSERVERIP","ATMSERVERPORT","COMMCHANNEL","COMMNLAYER","COMMNMODE","CUSTOMCLASSNAME","MDBOUTQUEUE","MDBQCF","MDBRESPINQUEUE","REST_CONTEXT","REST_IP","REST_PATTERN","REST_PORT","SERVICENAME","WSENDPOINT","WSPORT","WSPWD","WSSERVICENAME","WSUSER","WSXSLFILE"],"BLK_INTEGRATION_MASTER":["AMTBLKVALREQD","AUTOAUTH","EXTSYS_USERID","FORCEPOST","OFSAMTTAG","OFSNETTING","OFSREQD","OFSTXNCODE"]};
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
var lovInfoFlds = {"BLK_INTEGRATION_MASTER__BRNCODE__LOV_BRNCODE":["BLK_INTEGRATION_MASTER__BRNCODE~BLK_INTEGRATION_MASTER__BRNDESC~","","N~N",""],"BLK_INTEGRATION_MASTER__EXTSYSTEM__LOV_EXTSYS":["BLK_INTEGRATION_MASTER__EXTSYSTEM~BLK_INTEGRATION_MASTER__EXTSYSDESC~","","N~N",""],"BLK_INTEGRATION_MASTER__OFSTXNCODE__LOV_OFSTXNCODE":["BLK_INTEGRATION_MASTER__OFSTXNCODE~BLK_INTEGRATION_MASTER__OFSTXNCODEDESC~","","N~N","N"],"BLK_INTEGRATION_MASTER__OFSAMTTAG__LOV_OFSAMTTAG":["BLK_INTEGRATION_MASTER__OFSAMTTAG~BLK_INTEGRATION_MASTER__OFSAMTTAGDESC~","","N~N","N"]};
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
var multipleEntryIDs = new Array("BLK_INTEGRATION_DETAILS");
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

ArrFuncOrigin["IFDINPRM"]="KERNEL";
ArrPrntFunc["IFDINPRM"]="";
ArrPrntOrigin["IFDINPRM"]="";
ArrRoutingType["IFDINPRM"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["IFDINPRM"]="N";
ArrCustomModified["IFDINPRM"]="N";

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