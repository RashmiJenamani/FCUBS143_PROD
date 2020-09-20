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
**  Written by         : 
**  Date of creation   : 
**  File Name          : STDCRBRN_KERNEL.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : 
**  Last modified on   : 
**  Full Version       : 
**  Reason             : 
****************************************************************************************************************************/
function fnPostUnlock_KERNEL() {
	var L_OnceAuthStat1 = getNodeText(selectSingleNode(fnGetDataXMLFromFCJXML(fcjResponseDOM, 1), "//BLK_CORE_BRANCH/ONCEAUTH"));
	if  (L_OnceAuthStat1 == 'Y')
	{
		fnDisableElement(document.getElementById("BLK_CORE_BRANCH__HOST_CODE"));
	}
	return true;
}