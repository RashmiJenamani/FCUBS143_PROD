/***************************************************************************************************************************
**  This source is part of the FLEXCUBE Software System and is copyrighted by 
**  Oracle Financial Services Software Limited.
**  
**  All rights reserved.  No part of this work may be reproduced, stored in a retrieval system, 
**  adopted or transmitted in any form or by any means, electronic, mechanical, photographic, 
**  graphic, optic recording or otherwise, translated in any language or computer language, 
**  without the prior written permission of Oracle Financial Services Software Limited.
**  
**  Oracle Corporation
**  World Headquarters
**  500 Oracle Parkway
**  Redwood Shores, CA 94065
**  U.S.A.
**  
**  Copyright � 2008- 2009 by Oracle Financial Services Software Limited.
**  Oracle Financial Services Software Limited.
**  
**  Written by         : 
**  Date of creation   : 
**  File Name          : CODUPLDM.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : Rohit
**  Last modified on   : 21-04-2010
**  Full Version       : 
**  Reason             : FCUBS11.1, ITR-1,SFR# 72 (Did Cross Browser related changes)
***************************************************************************************************************************
Copyright � 2004- 2009 by Oracle Financial Services Software Limited.
----------------------------------------------------------------------------------------------------
Caution Don't Delete this. This is used by the Version control utility.
  
********************************** START OF LOG HISTORY **************************************
$Log: Template.js.v $
Revision 1.2  2005/02/22 09:30:48  IDSENTHILL
1.2:Relesing to vercon

Revision 1.1.1.0  2005/02/22 09:02:34  IDSENTHILL
All the preAction functions should return a flag indicating the caller to proceed or not.

Revision 1.1  2005/02/08 12:33:59  IDSENTHILL
1.1:Relesing to vercon

Revision 1.0.1.0  2005/02/07 07:39:16  IDSENTHILL
Usage of AVCS Begin.

Revision 1.0  2005/02/02 08:10:26  IDSENTHILL
Initial Checkin

********************************** END   OF LOG HISTORY **************************************

*/ 
//------------------------------------------------------------------------------
// VARIABLE DECLARATIONS
//------------------------------------------------------------------------------


var fcjRequestDOM;
var fcjResponseDOM;

var gErrCodes = "";

/*
 * Called to perform some neccessary operation before the fnLoad() Window event
 * Specific to the functionid
 */
function fnPreLoad() {
    debugs("In fnPreLoad", "A");
}

/*
 * Called to perform some neccessary operation after the fnNew() Window event
 * Specific to the functionid
 */
function fnPostLoad() {
    debugs("In fnPostLoad", "A");
}

/*
 * Called to perform some neccessary operation before the fnNew() Action event
 * Specific to the functionid
 */
function fnPreNew() {
    var newAction = true;
    debugs("In fnPreNew", "A");
    return newAction;
}

/*
 * Called to perform some neccessary operation after the fnNew() Action event
 * Specific to the functionid 
 */
function fnPostNew() {
    debugs("In fnPostNew", "A");
    document.getElementById("COTMS_SOURCE_PREF__ALLOW_EOD_WITH_DEFERRED").disabled = true;
}

/*
 * Called to perform some neccessary operation before the fnUlock() Action event
 * Specific to the functionid 
 */
function fnPreUnlock() {
    var unlock = true;
    debugs("In fnPreUnlock", "A");
    return unlock;
}

/*
 * Called to perform some neccessary operation after the fnUlock() Action event
 * Specific to the functionid 
 */
function fnPostUnlock() {
    debugs("In fnPostUnlock", "A");
	
	if (document.getElementById("COTMS_SOURCE_PREF__ALLOW_DEFERRED_PROCESSING").checked) {
		document.getElementById("COTMS_SOURCE_PREF__ALLOW_EOD_WITH_DEFERRED").disabled = false;
	} else {
		document.getElementById("COTMS_SOURCE_PREF__ALLOW_EOD_WITH_DEFERRED").disabled = true;		
	}
}

/*
 * Called to perform some neccessary operation before the fnAuthorize() Action event
 * Specific to the functionid 
 */
function fnPreAuthorize() {
    var authorize = true;
    debugs("In fnPreAuthorize", "A");
    return authorize;
}

/*
 * Called to perform some neccessary operation after the fnAuthorize() Action event
 * Specific to the functionid 
 */
function fnPostAuthorize() {
    debugs("In fnPostAuthorize", "A");
}

/*
 * Called to perform some neccessary operation before the fnCopy() Action event
 * Specific to the functionid 
 */
function fnPreCopy() {
    var copy = true;
    debugs("In fnPreCopy", "A");
    return copy;
}

/*
 * Called to perform some neccessary operation after the fnCopy() Action event
 * Specific to the functionid 
 */
function fnPostCopy() {
    debugs("In fnPostCopy", "A");
}

/*
 * Called to perform some neccessary operation before the fnClose() Window event
 * Specific to the functionid 
 */
function fnPreClose() {
    var close = true;
    debugs("In fnPreClose", "A");
    return close;
}

/*
 * Called to perform some neccessary operation after the fnClose() Window event
 * Specific to the functionid 
 */
function fnPostClose() {
    debugs("In fnPostClose", "A");
}

/*
 * Called to perform some neccessary operation before the fnReOpen() Window event
 * Specific to the functionid 
 */
function fnPreReOpen() {
    var reOpen = true;
    debugs("In fnPreReOpen", "A");
    return reOpen;
}

/*
 * Called to perform some neccessary operation after the fnReOpen() Window event
 * Specific to the functionid 
 */
function fnPostReOpen() {
    debugs("In fnPostReOpen", "A");
}

/*
 * Called to perform some neccessary operation before the fnDelete() Action event
 * Specific to the functionid 
 */
function fnPreDelete() {
    var deleteAction = true;
    debugs("In fnPreDelete", "A");
    return deleteAction;
}

/*
 * Called to perform some neccessary operation after the fnDelete() Action event
 * Specific to the functionid 
 */
function fnPostDelete() {
    debugs("In fnPostDelete", "A");
}

/*
 * Called to perform some neccessary operation before the fnEnterQuery() Action event
 * Specific to the functionid 
 */
function fnPreEnterQuery() {
    var execute = true;
    debugs("In fnPreEnterQuery", "A");
    return execute;
}

/*
 * Called to perform some neccessary operation after the fnEnterQuery() Action event
 * Specific to the functionid 
 */
function fnPostEnterQuery() {
    debugs("In fnPostEnterQuery", "A");
}

/*
 * Called to perform some neccessary operation before the fnExecuteQuery() Action event
 * Specific to the functionid 
 */
function fnPreExecuteQuery() {
    var execute = true;
    debugs("In fnPreExecuteQuery", "A");
    return execute;
}

/*
 * Called to perform some neccessary operation after the fnExecuteQuery() Action event
 * Specific to the functionid 
 */
function fnPostExecuteQuery() {
    debugs("In fnPostExecuteQuery", "A");
}

/*
 * Called to perform some neccessary operation before the fnSave() Action event and
 * this function has to return a success/failure flag to fnSave function.
 * Specific to the functionid.
 */
function fnPreSave() {
    debugs("In fnPreSave", "A");
    var isValid = true;
    // Do Mandatory validations
    isValid = isValid & fnValidateMandatory();

    // Do basic datatype validations
    isValid = isValid & fnValidateDataType();

    // Get all the Messages from Previuos Validate and now
    // display all

    if (!isValid) {
        //Call Functions in Util
        var msg = buildMessage(gErrCodes);
        alertMessage(msg);
        return false;
    }

    return isValid;
}

/*
 * Called to perform some neccessary operation after the fnSave() Action event
 * Specific to the functionid 
 */
function fnPostSave() {
    debugs("In fnPostSave", "A");
}

/*
 * Before Navigating to the next/prev record.
 */
function fnPreGoToRec() {
    var navigate = true;
    return navigate;
}

/*
 * After Navigating to the next/prev record.
 */

function fnPostGoToRec() {}

function fnSetEODStatus() {
	// Enable EOD status only if deferred is selected.
	if (document.getElementById("COTMS_SOURCE_PREF__ALLOW_DEFERRED_PROCESSING").checked) {
		document.getElementById("COTMS_SOURCE_PREF__ALLOW_EOD_WITH_DEFERRED").disabled = false;
	} else {
		document.getElementById("COTMS_SOURCE_PREF__ALLOW_EOD_WITH_DEFERRED").disabled = true;
		document.getElementById("COTMS_SOURCE_PREF__ALLOW_EOD_WITH_DEFERRED").checked = false;
	}
}

function fnShowSubscreen_CVS_DETAIL(){
	screenArgs['SCREEN_NAME'] = 'CVS_DETAIL';
	screenArgs['FUNCTION_ID'] = 'CODUPLDM';
	screenArgs['LANG'] = mainWin.LangCode;
	screenArgs['UI_XML'] = 'CODUPLDM';
	screenArgs['SOURCE_CODE'] = document.getElementById("COTMS_SOURCE_PREF__SOURCE_CODE").value;
	screenArgs['MODULE_CODE'] = document.getElementById("COTMS_SOURCE_PREF__MODULE_CODE").value;
	appendData(document.getElementById('TBLPage'+strCurrentTabID));
	screenArgs['DESCRIPTION'] = fnGetSubScreenTitle('UIXML/'+mainWin.LangCode+'/CODUPLDM.xml',screenArgs['SCREEN_NAME']);

	fnShowSubScreen(screenArgs);
}

function fnPostAddRow_BLK_COTMS_SOURCE_FUNCID_PREF(newRow) {
    document.getElementsByName("SOURCE_CODE")[newRow.rowIndex - 2].value = parent.screenArgs['SOURCE_CODE'];
    document.getElementsByName("MODULE_CODE")[newRow.rowIndex - 2].value = parent.screenArgs['MODULE_CODE'];
    return true;
}
