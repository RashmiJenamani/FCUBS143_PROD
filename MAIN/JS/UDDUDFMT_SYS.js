/***************************************************************************************************************************
**  This source is part of the FLEXCUBE Software Product. 
**  Copyright (c) 2008 ,2018, Oracle and/or its affiliates.
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
**  File Name          : UDDUDFMT_SYS.js
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
var fieldNameArray = {"BLK_UDF_FIELD":"FLDNAME~FLDDES~FLDTY~VALTYP~MAND~MINV~MAXV~MASK~FXDLE~FLDLN~MINLN~MAXLN~BKDTA~BKDTP~FDALWD~FDPRD~FACTSH~DFLVAL~DRVRULTY~VALRULTY~USGALWD~AMEND~UNIQ~UPDTALWD~FNCTNID~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH","BLK_UDF_VAL_RULE":"VALRLE","BLK_UDF_DRV_RULE":"DRVRLE","BLK_UDF_CUBE":"CBENTITY~ENTNAME~ENTDESC~ENTABL~ENTWRCL~ENTYP~ENTQURY","BLK_UDF_LOV":"FLDNME~LOV~LOVDES~DFLTVAL"};

var multipleEntryPageSize = {"BLK_UDF_LOV" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_LOV__TAB_MAIN":"BLK_UDF_LOV"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_UDF_FIELD">FLDNAME~FLDDES~FLDTY~VALTYP~MAND~MINV~MAXV~MASK~FXDLE~FLDLN~MINLN~MAXLN~BKDTA~BKDTP~FDALWD~FDPRD~FACTSH~DFLVAL~DRVRULTY~VALRULTY~USGALWD~AMEND~UNIQ~UPDTALWD~FNCTNID~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '      <FN PARENT="BLK_UDF_FIELD" RELATION_TYPE="1" TYPE="BLK_UDF_VAL_RULE">VALRLE</FN>'; 
msgxml += '      <FN PARENT="BLK_UDF_FIELD" RELATION_TYPE="1" TYPE="BLK_UDF_DRV_RULE">DRVRLE</FN>'; 
msgxml += '      <FN PARENT="BLK_UDF_FIELD" RELATION_TYPE="1" TYPE="BLK_UDF_CUBE">CBENTITY~ENTNAME~ENTDESC~ENTABL~ENTWRCL~ENTYP~ENTQURY</FN>'; 
msgxml += '      <FN PARENT="BLK_UDF_FIELD" RELATION_TYPE="N" TYPE="BLK_UDF_LOV">FLDNME~LOV~LOVDES~DFLTVAL</FN>'; 
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
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_UDF_FIELD">AUTHSTAT~TXNSTAT~FLDNAME~VALTYP~FLDTY~USGALWD</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "UDDUDFMT";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_UDF_FIELD";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_UDF_FIELD" : "","BLK_UDF_VAL_RULE" : "BLK_UDF_FIELD~1","BLK_UDF_DRV_RULE" : "BLK_UDF_FIELD~1","BLK_UDF_CUBE" : "BLK_UDF_FIELD~1","BLK_UDF_LOV" : "BLK_UDF_FIELD~N"}; 

 var dataSrcLocationArray = new Array("BLK_UDF_FIELD","BLK_UDF_VAL_RULE","BLK_UDF_DRV_RULE","BLK_UDF_CUBE","BLK_UDF_LOV"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside UDDUDFMT.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside UDDUDFMT.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_UDF_FIELD__FLDNAME";
pkFields[0] = "BLK_UDF_FIELD__FLDNAME";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
//***** Fields Amendable while Modification *****
var modifyAmendArr = {"BLK_UDF_CUBE":["CBENTITY","ENTABL","ENTDESC","ENTNAME","ENTQURY","ENTWRCL","ENTYP"],"BLK_UDF_DRV_RULE":["BTNDRVERROR","BTNDRVEXECUTE","DRVRLE"],"BLK_UDF_FIELD":["AMEND","BKDTA","BKDTP","DFLVAL","DRVRULTY","FACTSH","FDALWD","FDPRD","FLDDES","FLDLN","FLDTY","FNCTNID","FXDLE","MAND","MASK","MAXLN","MAXV","MINLN","MINV","UNIQ","UPDTALWD","VALRULTY","VALTYP"],"BLK_UDF_LOV":["DFLTVAL","LOV","LOVDES"],"BLK_UDF_VAL_RULE":["BTNERROR","BTNEXECUTE","VALERR","VALRLE"]};
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
var lovInfoFlds = {"BLK_UDF_FIELD__FNCTNID__LOV_FUNCTION_ID":["BLK_UDF_FIELD__FNCTNID~","","N",""],"BLK_UDF_CUBE__CBENTITY__LOV_CUBE_ENTITY":["BLK_UDF_CUBE__CBENTITY~BLK_UDF_CUBE__ENTNAME~BLK_UDF_CUBE__ENTABL~BLK_UDF_CUBE__ENTDESC~BLK_UDF_CUBE__ENTWRCL~","","N","N"]};
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
var multipleEntryIDs = new Array("BLK_UDF_LOV");
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

ArrFuncOrigin["UDDUDFMT"]="KERNEL";
ArrPrntFunc["UDDUDFMT"]="";
ArrPrntOrigin["UDDUDFMT"]="";
ArrRoutingType["UDDUDFMT"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["UDDUDFMT"]="N";
ArrCustomModified["UDDUDFMT"]="N";

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
var actStageArry = {"QUERY":"2","NEW":"2","MODIFY":"2","AUTHORIZE":"1","DELETE":"1","CLOSE":"1","REOPEN":"1","REVERSE":"1","ROLLOVER":"1","CONFIRM":"1","LIQUIDATE":"1","SUMMARYQUERY":"2"};
//***** CODE FOR IMAGE FLDSET *****
//----------------------------------------------------------------------------------------------------------------------