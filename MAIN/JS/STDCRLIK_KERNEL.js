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
**  File Name          : STDCRLIK_KERNEL.js
**  Purpose            : 
**  Called From        : 
****************************************************************************************************************************/
function fnPostNew_KERNEL() {
	debugs( "In fnPostNew", "A");
	document.getElementById("BLK_LIAB_CUST__BRANCH_CODE").value=mainWin.CurrentBranch;	
    return true;	
}

function fnPostUnlock_KERNEL() {
	fnDisableElement(document.getElementById("BLK_LIAB_CUST__CUSTOMER_NO"));
	debugs( "In fnPostUnlock", "A");
	return true;
}
function fnPostCopy_KERNEL() {
	debugs( "In fnPostCopy", "A");
	document.getElementById('BLK_LIAB_CUST__CUSTOMER_NO').value = "";
    return true;
}

function fnPreEnterQuery_KERNEL() {
	fnEnableElement(document.getElementById("BLK_LIAB_CUST__CUSTOMER_NO"));
	debugs( "In fnPreEnterQuery", "A");
	return true;
}

function fnPostEnterQuery_KERNEL() {
	document.getElementById('BLK_LIAB_CUST__BRANCH_CODE').value=mainWin.CurrentBranch;
	debugs( "In fnPostEnterQuery", "A");
	return true;
}