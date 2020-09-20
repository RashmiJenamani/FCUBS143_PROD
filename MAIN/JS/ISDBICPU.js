/*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2011 - 2012  Oracle and/or its affiliates.  All rights reserved.
** 												
** No part of this work may be reproduced, stored in a retrieval system,
** adopted or transmitted in any form or by any means, electronic, mechanical, photographic, graphic, optic recording or otherwise,
** translated in any language or computer language,
** without the prior written permission of Oracle and/or its affiliates.
** 
** 
** Oracle Financial Services Software Limited.
** Oracle Park, Off Western Express Highway,
** Goregaon (East),
** Mumbai - 400 063, India.
------------------------------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------------------------
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
 							   
	Changed By	: Sweta Panda
    SFR No		: 39
    Change Desc	: Modified FnPostAsync to do Submit Batch operation
    Search Tag 	: 9NT1466 FCUBS_11 3 1 SMT sfr#39
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
	DisableToolbar_buttons('ENTERQUERY');
}
/*
 * Called to perform some neccessary operation after the fnNew() Window event
 * Specific to the functionid
 */
function fnPostLoad() {
	debugs("In fnPostLoad", "A");
	DisableToolbar_buttons('ENTERQUERY');

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
          fnDisableElement(document.getElementsByName("BTN_SUBMIT_BATCH")[0]);
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
	if (gAction == 'ENTERQUERY') {
		showErrorAlerts('IN-HEAR-152');
		return false;	
	}
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
	if (gAction == 'EXECUTEQUERY') {
		showErrorAlerts('IN-HEAR-152');
		return false;	
	}
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
	if(!fnValidate())
        return false;

	debugs("In fnPreSave", "A");	
	var isValid = true;
	// Do Mandatory validations
	

	// Do basic datatype validations
	

	// Get all the Messages from Previuos Validate and now
	// display all
	if (!isValid) {
		//Call Functions in Util
		var msg = buildMessage(gErrCodes);
		alertMessage(msg);
		return false;
	}
	
	//alert('Save Operation not Allowed. Please use the Buttons in the screen');
	showErrorAlerts('IN-HEAR-153');//NLS change -Removal of hardcoded alerts

  return false;	
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

function fnPostGoToRec() {
	
}
/*
** Function included by Aravind for Calling the main package to populate the parameters
** This call is Synchronous
*/
function fnSubmitParams()
{
  
 var flag;
 flag = 0; 
  
 if (flag == 0)
 {
 
 if(gIsAuditExist){
              appendData(document.getElementById("DIV_BLK_AUDIT"));
       }
       appendData(document.getElementById("TBLPage" + strCurrentTabID));
       if (typeof(l_HeaderTabId) != 'undefined' && l_HeaderTabId != "")
          appendData(document.getElementById("TBLPage" + l_HeaderTabId));
  	//Customized code to call the package to populate the params    
    fcjRequestDOM = buildUBSXml(); // PHASE2 INFRA - STDFCJGN
    //show_remarks();  //STDFCJGN PHASE1
    // Post the XML to Server
    fcjResponseDOM = fnPost(fcjRequestDOM,servletURL,functionId);
   	//debug(dlgArg.mainWin, fcjResponseDOM.xml, "P");
  	if(fcjResponseDOM) {
      var msgStatus   =getNodeText( selectSingleNode(fcjResponseDOM,"FCUBS_RES_ENV/FCUBS_HEADER/MSGSTAT"));
      if (msgStatus == 'FAILURE') {
      var messageNode = selectSingleNode(fcjResponseDOM,"FCUBS_RES_ENV/FCUBS_BODY/FCUBS_ERROR_RESP");
     }
     else if (msgStatus == "WARNING" || msgStatus == "SUCCESS" )       {
       var messageNode = selectSingleNode(fcjResponseDOM,"FCUBS_RES_ENV/FCUBS_BODY/FCUBS_WARNING_RESP");
     } 
    
    // PHASE2 INFRA - STDFCJGN
    
		var pureXMLDOM  = fnGetDataXMLFromFCJXML(fcjResponseDOM,1);
   	setDataXML(getXMLString(pureXMLDOM));
	  showData(dbStrRootTableName, 1);
		//alert(msgStatus);
    if(msgStatus == 'SUCCESS')
		{
       disableForm();
			//setOperation("");
			//document.getElementById("BTN_EXIT_IMG").src = cache1.src;
			//document.forms(0).BTN_EXIT.disabled = false;
      fnEnableElement(document.getElementsByName("BTN_EXIT")[0]);
      fnEnableElement(document.getElementsByName("BTN_SUBMIT_BATCH")[0]);
     //dlgArg.mainWin.frames["FrameToolbar"].showToolbar(functionId, '', ''); //Anjali
      /* Kals On May 10 , Comenting 
      toolbarReset();
      */
        gAction = "";
        showToolbar(functionId, '', '');
       // Kals Ends here 

      
            //Post action code - Moved by Sankarganesh on 16/03/05
			//fnPostSave();
            fnSetExitButton(false);
		}
		else {
            fnSetExitButton(true);
            // Kals May 10 St
            showToolbar(functionId, '', '');
            // Kals ends here   

		} 
		//displayReponse is changed to displayResponse by Sankarganesh on 22/03/05
		var returnVal = displayResponse(messageNode);
	}
  
//sandeep
  else
    {
        //alert("Processing Has Failed"); // PHASE2 INFRA - STDFCJGN
		showErrorAlerts('IN-HEAR-120');//NLS change -Removal of hardcoded alerts

        return;
    }
    }
}

/*
** Function included by Aravind for Calling the process package to Submit the Batch for processing
** This call is Synchronous
*/
function fnSubmitBatch()
{
if(gIsAuditExist){
              appendData(document.getElementById("DIV_BLK_AUDIT"));
       }
       appendData(document.getElementById("TBLPage" + strCurrentTabID));
       	   //gAction = "MODIFY";
  	   gAction = "SUBMITBATCH";
       fcjRequestDOM = buildUBSXml(); // PHASE2 INFRA - STDFCJGN
    //show_remarks();  //STDFCJGN PHASE1
    fnPostAsync(fcjRequestDOM,servletURL,functionId);
    disableForm();
		fnEnableElement(document.getElementsByName("BTN_EXIT")[0]);
    //alert('Batch Submitted successfully for processing . Refer the log for the status of the process');
	//showErrorAlerts('IN-HEAR-157');//NLS change -Removal of hardcoded alerts //9NT1466 FCUBS_11 3 1 SMT sfr#39  sweta commented

  
}
//commented HTTPObject
//var objHTTP = createDOMActiveXObject(); 
//9NT1466 FCUBS_11 3 1 SMT sfr#39 commented sweta starts
/*
function fnPostAsync(fcjMsgDOM, servletURL, functionID)
{  
 
//alert('inside fnPostAsync');

  if (fcjMsgDOM != null )    
  {
    //alert('inside fcjMsgDOM != null');
    var strFormData = getXMLString(fcjMsgDOM); 
     //added HTTPObject
    var objHTTP = createHTTPActiveXObject();   
    objHTTP.open("POST", servletURL, true); // Open the Connection to the Server
    //objHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");      
    objHTTP.setRequestHeader("Content-Type", "application/xml");
    objHTTP.setRequestHeader("charset", "utf-8");
    objHTTP.setRequestHeader("FUNCTIONID", functionID); 
    objHTTP.setRequestHeader("OPERATION", gAction);
    if(strFormData.indexOf("<ATTACHMENTS>")>-1){
        objHTTP.setRequestHeader("HASATTACHMENTS", "TRUE");
    }
    else{
        objHTTP.setRequestHeader("HASATTACHMENTS", "FALSE");
     }
     //objHTTP.onreadystatechange = callbackMethod;
	 //var XMLobj = (new DOMParser()).parseFromString(strFormData, "text/xml")
	objHTTP.send(strFormData);
	/*
	var oldDbDataDOM = dbDataDOM.cloneNode(true);
  dbDataDOM=loadXMLDoc(strFormData);
     objHTTP.send(dbDataDOM);
	 dbDataDOM = oldDbDataDOM;
	 */
        
 // } 

//}	
//9NT1466 FCUBS_11 3 1 SMT sfr#39 commented sweta ends
//9NT1466 FCUBS_11 3 1 SMT sfr#39 sweta wrote new starts
function fnPostAsync(fcjMsgDOM, serverURL, functionID)
{
    debugs("serverURL", serverURL);
    if (fcjMsgDOM != null)
    {
        mask();
				/*To mask when system is processing - start*/
				if(navigator.userAgent.indexOf("MSIE") >= 0) {
					window.showModalDialog("Processing.jsp",null,"status:no;resizable:no;dialogHeight:0px;dialogWidth:0px;dialogLeft:0px;dialogTop:0px");
				}
				/*To mask when system is processing - end*/
        var strFormData = getXMLString(fcjMsgDOM);
        var objHTTP = createHTTPActiveXObject();
        objHTTP.open("POST", serverURL, false);
        objHTTP.setRequestHeader("Content-Type", "application/xml");
        objHTTP.setRequestHeader("charset", "utf-8");

        objHTTP.setRequestHeader("FUNCTIONID", functionID);
        objHTTP.setRequestHeader("OPERATION", gAction);
        objHTTP.setRequestHeader("TXNBRANCH", g_txnBranch);
        if(typeof(seqNo) != 'undefined' ){
             objHTTP.setRequestHeader("SEQNO", seqNo);
        }
        objHTTP.setRequestHeader("X-CSRFTOKEN", mainWin.CSRFtoken);
        if (typeof(g_SummaryType) != 'undefined')
        {
            if (g_SummaryType == "U") objHTTP.setRequestHeader("DBUPLOAD", "TRUE");
            else objHTTP.setRequestHeader("DBUPLOAD", "FALSE");
        } else
        {
            objHTTP.setRequestHeader("DBUPLOAD", "FALSE");
        }

        if (strFormData.indexOf("<ATTACHMENTS>") > -1)
        {
            objHTTP.setRequestHeader("HASATTACHMENTS", "TRUE");
        } else
        {
            objHTTP.setRequestHeader("HASATTACHMENTS", "FALSE");
        } 

        objHTTP.send(strFormData);
	
			disableForm();
		  showErrorAlerts('IN-HEAR-157');//NLS change -Removal of hardcoded alerts
	}
}  
//9NT1466 FCUBS_11 3 1 SMT sfr#39 sweta ends