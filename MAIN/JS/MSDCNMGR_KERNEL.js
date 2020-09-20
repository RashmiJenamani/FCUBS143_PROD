/***************************************************************************************************************************
**  This source is part of the FLEXCUBE Software Product. 
**  Copyright (c) 2008 ,2016, Oracle and/or its affiliates.
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
**  Written by         : sandhya Nerlikar
**  Date of creation   : 
**  File Name          : MSDCNMGR_KERNEL.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : 
**  Last modified on   : 
**  Full Version       : 
**  Reason             : 
****************************************************************************************************************************/


function fnPostExecuteQuery_KERNEL() {
	debugs("In fnPostExecuteQuery", "A");
	fnEnableElement(document.getElementById("BLK_RESULT__START"));
	fnEnableElement(document.getElementById("BLK_RESULT__STOP"));
	fnEnableElement(document.getElementById("BLK_SEARCH__LINE_ID"));
  fnEnableElement(document.getElementById("BLK_SEARCH__OPERATION_MODE"));
  fnEnableElement(document.getElementById("BLK_SEARCH__SEARCH"));

	}
 function fnPostLoad_KERNEL() {
	
	fnEnableElement(document.getElementById("BLK_SEARCH__LINE_ID"));
  fnEnableElement(document.getElementById("BLK_SEARCH__OPERATION_MODE"));
  fnEnableElement(document.getElementById("BLK_SEARCH__SEARCH"));
  }

function fn_psearch()
{
 var g_prevAction = "PSEARCH";
 
 	
	
    gAction = "PSEARCH";
	createDOM(dbStrRootTableName);
    appendData();
    fcjRequestDOM = buildUBSXml();
    fcjResponseDOM = fnPost(fcjRequestDOM, servletURL, functionId);
    showProcessMsg = true;
    var l_resp_code = fnProcessResponse();
    var pureXMLDOM = fnGetDataXMLFromFCJXML(fcjResponseDOM, 1);
	 gAction = "DEFAULT";
    setDataXML(getXMLString(pureXMLDOM));
    showData(dbStrRootTableName, 1);
	gAction = g_prevAction;
	fnEnableElement(document.getElementById("BLK_RESULT__START"));
	fnEnableElement(document.getElementById("BLK_RESULT__STOP"));
    fnDisableElement(document.getElementById("cmdAddRow_BLK_RESULT"));
    fnDisableElement(document.getElementById("cmdDelRow_BLK_RESULT"));
    
    return true;

}

function fn_pstart()
{
var rowlen= document.getElementById("BLK_RESULT").tBodies[0].rows.length;;

var j=0;
var chkstatus=[rowlen];
var truecount=0;
var falsecount=0;
if(rowlen==0){
alert('No Connectivity Lines to start');
	return false;

}
for(k=0;k<rowlen;k++)
{
	if(document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[0].getElementsByTagName("INPUT")[0].checked)
	{
		chkstatus[j]=document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value;
        j=j+1;
 
	}
	
}
j=j-1;
for(j;j>0;j--)
{
	if(chkstatus[j]==chkstatus[j-1])
	{
		truecount=truecount+1;
	}
	else
	{
		falsecount=falsecount+1;
	}
}
if(falsecount>0)
{
	alert('Please select connectivity lines with same status');
	return false;
}
else
{
for(k=0;k<rowlen;k++)
{
if (document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[0].getElementsByTagName("INPUT")[0].checked)
{

if(document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value=='STARTED')
{
alert('Line is already in started mode');
return false;
}
else{
document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[4].getElementsByTagName("INPUT")[0].value='STARTED';
document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value='STARTED';

}
}
}
}


  var g_prevAction = gAction;

    gAction = "PSTART";
	createDOM(dbStrRootTableName);
    appendData();
    fcjRequestDOM = buildUBSXml();
    fcjResponseDOM = fnPost(fcjRequestDOM, servletURL, functionId);
    showProcessMsg = true;
    var l_resp_code = fnProcessResponse();
    var pureXMLDOM = fnGetDataXMLFromFCJXML(fcjResponseDOM, 1);
    gAction = "DEFAULT";
    setDataXML(getXMLString(pureXMLDOM));
    showData(dbStrRootTableName, 1);
    gAction = g_prevAction;
    return true;




}


function fn_pstop()
{
var rowlen= document.getElementById("BLK_RESULT").tBodies[0].rows.length;;

var j=0;
var chkstatus=[rowlen];
var truecount=0;
var falsecount=0;
if(rowlen==0){
alert('No Connectivity Lines to stop');
	return false;

}
for(k=0;k<rowlen;k++)
{
	if(document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[0].getElementsByTagName("INPUT")[0].checked)
	{
		chkstatus[j]=document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value;
        j=j+1;
 
	}
	
}
j=j-1;
for(j;j>0;j--)
{
	if(chkstatus[j]==chkstatus[j-1])
	{
		truecount=truecount+1;
	}
	else
	{
		falsecount=falsecount+1;
	}
}
if(falsecount>0)
{
	alert('Please select connectivity lines with same status');
	return false;
}
else
{
for(k=0;k<rowlen;k++)
{
if (document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[0].getElementsByTagName("INPUT")[0].checked)
{
if(document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value=='STOPPED')
{
alert('Line is already stopped');
return false;
}
else{
document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[4].getElementsByTagName("INPUT")[0].value='STOPPED';
document.getElementById("BLK_RESULT").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value='STOPPED';
}
}
}
}

  var g_prevAction = gAction;

    gAction = "PSTOP";
	createDOM(dbStrRootTableName);
    appendData();
    fcjRequestDOM = buildUBSXml();
    fcjResponseDOM = fnPost(fcjRequestDOM, servletURL, functionId);
    showProcessMsg = true;
    var l_resp_code = fnProcessResponse();
    var pureXMLDOM = fnGetDataXMLFromFCJXML(fcjResponseDOM, 1);
    gAction = "DEFAULT";
    setDataXML(getXMLString(pureXMLDOM));
    showData(dbStrRootTableName, 1);
    gAction = g_prevAction;
    return true;




}