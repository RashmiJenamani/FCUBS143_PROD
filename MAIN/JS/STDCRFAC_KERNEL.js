/***************************************************************************************************************************
**  This source is part of the FLEXCUBE Software System and is copyrighted by 
**  Oracle Financial Services Software Limited.
**  
**  All rights reserved.  No part of this work may be reproduced, stored in a retrieval system, 
**  adopted or transmitted in any form or by any means, electronic, mechanical, photographic, 
**  graphic, optic recording or otherwise, translated in any language or computer language, 
**  without the prior written permission of Oracle Financial Services Software Limited.
**  
**  Oracle Financial Services Software Limited.
**  10-11, SDF I, SEEPZ, Andheri (East),
**  Mumbai - 400 096.
**  India.
**  
**  Copyright (c) 2008 - 2011 by Oracle Financial Services Software Limited. All rights reserved.
**  
**  Written by         : 
**  Date of creation   : 
**  File Name          : STDCRFAC_KERNEL.js
**  Purpose            : 
**  Called From        : 
**
**  Modified By   : Niranjana R	 
** Modified  On         : 23-Jan-2018
** Modified Reason      : NoELCM mode,minicore screens to be launched for facilites and collaterals.
** Search String        : NoELCM Changes

**  modified on   : 25-jan-2018
**  Reason        : Customer Landing Page changes to launch STSCRFAC summary screen on click of Facility button and to launch  STDCRFAC if elcm setupmode is NOELCM, GWDFACLT if elcm mode is standalone and GEDFACLT if elcm setup mode is embedded
** Search String  :	14.0_POST_IT_FIX_CHANGES
****************************************************************************************************************************/

function fnPostCopy_KERNEL() {
	debugs("In fnPostCopy", "A");
	document.getElementById("BLK_FACILITY__LINE_CODE").value = "";
	return true;
}	
//NoELCM Changes starts
function fnPostLoad_KERNEL() {
if (parent.screenArgs!=undefined && parent.screenArgs['ACTION']=='LAUNCH')
{
g_prev_action = gAction;
gAction = "ENTERQUERY"; 
fnEnterQuery();
gAction = "EXECUTEQUERY";
document.getElementsByName("LINE_CODE")[0].value = parent.screenArgs['LINE_ID'];
document.getElementsByName("LINE_SERIAL")[0].value = parent.screenArgs['LINE_SERIAL'];
document.getElementsByName("LIAB_NO")[0].value = parent.screenArgs['LIAB_ID'];
parent.screenArgs = undefined;
fnExecuteQuery();
gAction = g_prev_action;
}

return true;
}
//NoELCM Changes ends

//14.0_POST_IT_FIX_CHANGES starts
function fnPostLoad_Sum_KERNEL() {
	if(typeof(mainWin.gCustInfo["LiabNo"])!= 'undefined' && mainWin.gCustInfo["LiabNo"]!=''){
		document.getElementsByName("LIAB_NO")[0].value = mainWin.gCustInfo["LiabNo"]; 	
		document.getElementById("Search").children[0].click();
	}
}
function fnPreShowDetail_Sum_KERNEL(arg) {
var iRowIndex=getRowIndex();
if (iRowIndex == -1)
{
	screenArgs = new Array();  
	screenArgs['LIAB_ID'] = getInnerText(document.getElementById("TBL_QryRslts").tBodies[0].rows[sumRsltRowNo].cells[14]); 
	screenArgs['LINE_ID'] = getInnerText(document.getElementById("TBL_QryRslts").tBodies[0].rows[sumRsltRowNo].cells[3]);
    screenArgs['LINE_SERIAL'] = getInnerText(document.getElementById("TBL_QryRslts").tBodies[0].rows[sumRsltRowNo].cells[4]);	
}
else
{
    screenArgs = new Array();  
	screenArgs['LIAB_ID'] = getInnerText(document.getElementById("TBL_QryRslts").tBodies[0].rows[iRowIndex-1].cells[14]); 
	screenArgs['LINE_ID'] = getInnerText(document.getElementById("TBL_QryRslts").tBodies[0].rows[iRowIndex-1].cells[3]);
    screenArgs['LINE_SERIAL'] = getInnerText(document.getElementById("TBL_QryRslts").tBodies[0].rows[iRowIndex-1].cells[4]);	
}
	   if(mainWin.elcmMode == 'E')
	   {
       gAction='EXECUTEQUERY'; 
       screenArgs['SCREEN_NAME'] = 'CVS_MAIN';	
	   screenArgs['FUNCTION_ID'] = 'GEDFACLT';
       screenArgs['ACTION']='LAUNCH';
       screenArgs['UI_XML'] = 'CVS_MAIN';
       screenArgs['LANG'] = mainWin.LangCode;
       screenArgs['DESCRIPTION'] = fnGetSubScreenTitle('UIXML/'+mainWin.LangCode+'/'+'GEDFACLT'+'.xml',screenArgs['SCREEN_NAME']);
       screenArgs['PARENT_FUNC_ID'] = 'STDCRFAC';      
		funcid='GEDFACLT';
		parent.screenArgs=screenArgs;   
	  	mainWin.dispHref1("GEDFACLT",parent.seqNo);
		}
		else if(mainWin.elcmMode == 'S')
		{
	   gAction='EXECUTEQUERY'; 
       screenArgs['SCREEN_NAME'] = 'CVS_MAIN';	
	   screenArgs['FUNCTION_ID'] = 'GWDFACLT';
       screenArgs['ACTION']='LAUNCH';
       screenArgs['UI_XML'] = 'CVS_MAIN';
       screenArgs['LANG'] = mainWin.LangCode;
       screenArgs['DESCRIPTION'] = fnGetSubScreenTitle('UIXML/'+mainWin.LangCode+'/'+'GWDFACLT'+'.xml',screenArgs['SCREEN_NAME']);
       screenArgs['PARENT_FUNC_ID'] = 'STDCRFAC';      
		funcid='GWDFACLT';
		parent.screenArgs=screenArgs;   
	  	mainWin.dispHref1("GWDFACLT",parent.seqNo);
		}
		else
		{
		return true;
		}
		return false;
}  
//14.0_POST_IT_FIX_CHANGES ends 