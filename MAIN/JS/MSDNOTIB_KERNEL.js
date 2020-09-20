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
**  Copyright (c) 2008 - 2012 by Oracle Financial Services Software Limited. All rights reserved.
**  
**  Written by         : 
**  Date of creation   : 
**  File Name          : MSDNOTIB_KERNEL.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : 
**  Last modified on   : 
**  Full Version       : 
**  Reason             : 
****************************************************************************************************************************/
var local_dom = "";
var fcjRequestDOM;
var fcjResponseDOM;
var currRowIndex = "";
var gErrCodes = "";
var gCur
var l_pk_arr = new Array();
var detailWinParams = new Object();
function SingleCheck() {
    var selected_row = 0;
    var msob_tchk = 0;
    l_currRow = 0;
    currRowIndex = 0;
    len = document.getElementById("TBL_QryRslts").tBodies[0].rows.length;
    temp = 0;

    for (i = 0; i < len; i++) {
        if (document.getElementById("TBL_QryRslts").tBodies[0].rows[i].cells[0].getElementsByTagName("INPUT")[0]) {
            if (document.getElementById("TBL_QryRslts").tBodies[0].rows[i].cells[0].getElementsByTagName("INPUT")[0].checked) {
                l_currRow = i;
                msob_tchk = msob_tchk + 1;
                selected_row = i;
                temp = i;
            }
        } else
            break;
    }

    if (msob_tchk > 1) {
        showErrorAlerts('IN-HEAR-205');
        return false;
    } else if (msob_tchk == 0) {
        showErrorAlerts('IN-HEAR-206');
        return false;
    } else {
        currRowIndex = selected_row+1 ;
    }
}

function fnPostExecuteQuery_sum_KERNEL()
{	
	var RecnodeList = selectNodes(fcjResponseDOM, "//REC");
	for (var i = 0; i < RecnodeList.length; i++) 
	{      
		l_pk_arr[i] = RecnodeList[i].getAttribute("RECID");
	}
}

function fnView_msg() 
{
    SingleCheck()
        if (currRowIndex == 0) {
        return false;
    }
	var detailPk = l_pk_arr[currRowIndex-1];
    detailWinParams.ShowSummary = "TRUE";
    detailWinParams.DetailPkVals = detailPk;
	screenArgs['DCN'] = detailPk;
    detailWinParams.sumTxnBranch = sumTxnBranch;
    mainWin.dispHref1('MSDVWNOT', seqNo);
	parent.screenArgs=screenArgs;     
    return true;			
}

function fnPostLoad_CVS_MAIN(screenArgs) {
    dbIndexArray['MSTBS_DLY_SWIFT_MSG_NOTIF'] = 1;
    disableForm();
    showTabData();
}