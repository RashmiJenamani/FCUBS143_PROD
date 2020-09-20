/*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2008 - 2016  Oracle and/or its affiliates.  All rights reserved.
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
---------------------------------------------------------------------------------------
**  Written by         : Geetanjali Patted 
**  Date of creation   : 17th November 2016
**  File Name          : EIDDEOTI_KERNEL.js
*/
//------------------------------------------------------------------------------
var fcjRequestDOM;
var fcjResponseDOM;

var gErrCodes = "";


function fnPostLoad_KERNEL() {
	
	try{
        gAction = 'NEW';
        fnNew();
	   //DisableToolbar_buttons("Save");
	   //document.getElementsByName("Save")[0].style.visibility = "hidden";
        document.getElementsByName('BRANCH_CODE')[0].value = mainWin.CurrentBranch;
        document.getElementsByName('BRANCH_NAME')[0].value = mainWin.CurrentBranchName;
        document.getElementsByName('END_OF_INPUT')[0].value = mainWin.BranchEoi;
        var branchEoiDesc = mainWin.BranchEoi;
        branchEoiDesc = (branchEoiDesc=='B')?'Beginning of Day'
            :(branchEoiDesc=='N')?'Daily Transactions Input'
            :(branchEoiDesc=='T')?'End of Transactions Input'
            :(branchEoiDesc=='F')?'End of Financials Input'
            :'Unknown Status';
        document.getElementsByName('END_OF_INPUT')[0].value = branchEoiDesc;
	    gAction = '';
	    DisableToolbar_buttons("Save");
	   //document.getElementsByName("Save")[0].style.visibility = "hidden";
	    gAction = '';
return true;
}
catch(e) {return false;}
		
		}

function fn_drop() 
{
        // DisableToolbar_buttons("Save");
	    //document.getElementsByName("Save")[0].style.visibility = "hidden";
	     gAction ='DROPEOTI';  
		document.getElementsByName('BRANCH_NAME')[0].value = '';
        document.getElementsByName('END_OF_INPUT')[0].value = '';
		document.getElementsByName('END_OF_INPUT')[0].value ='';
        appendData();
		gAction ='DROPEOTI';  
		fcjRequestDOM = buildUBSXml();
		fcjResponseDOM = fnPost(fcjRequestDOM, servletURL, functionId);
		resetIndex();
		var msgStatus = fnProcessResponse();
		fnPostProcessResponse(msgStatus);
		gAction = '';
		document.getElementsByName('BRANCH_CODE')[0].value = mainWin.CurrentBranch;
        document.getElementsByName('BRANCH_NAME')[0].value = mainWin.CurrentBranchName;
        document.getElementsByName('END_OF_INPUT')[0].value = mainWin.BranchEoi;
        var branchEoiDesc = mainWin.BranchEoi;
        branchEoiDesc = (branchEoiDesc=='B')?'Beginning of Day'
            :(branchEoiDesc=='N')?'Daily Transactions Input'
            :(branchEoiDesc=='T')?'End of Transactions Input'
            :(branchEoiDesc=='F')?'End of Financials Input'
            :'Unknown Status';
        document.getElementsByName('END_OF_INPUT')[0].value = branchEoiDesc;
	    DisableToolbar_buttons("Save");
		//document.getElementsByName("Save")[0].style.visibility = "hidden";
	    gAction = '';
	return true;
}
	

