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
**  File Name          : CODFNLOV_KERNEL.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : 
**  Last modified on   : 
**  Full Version       : 
**  Reason             : 
****************************************************************************************************************************/
var g_oldexttype="";
function fnPostReturnValToParent_LOV_FUNCTIONID_KERNEL()
{
fnDefault();
return true;
}
function fnDefault()
{
if(document.getElementsByName("EXT_TYPE")[0].checked==true)
{
	document.getElementById("BLK_MAIN__KEY_ID").value=document.getElementById("BLK_MAIN__FUNCTION_ID").value;
	fnDisableElement(document.getElementById("BLK_MAIN__KEY_ID")); 
	g_oldexttype=document.getElementsByName("EXT_TYPE")[0].value;//F
}
else if(document.getElementsByName("EXT_TYPE")[1].checked==true)
{
	document.getElementById("BLK_MAIN__KEY_ID").value="";
	fnEnableElement(document.getElementById("BLK_MAIN__KEY_ID"));
	g_oldexttype=document.getElementsByName("EXT_TYPE")[1].value;//L
}
return true;
}
//On change of ext type radio button
function fnChange()
{
if ((document.getElementsByName("EXT_TYPE")[0].checked==true && g_oldexttype==document.getElementsByName("EXT_TYPE")[0].value)||
  (document.getElementsByName("EXT_TYPE")[1].checked==true && g_oldexttype==document.getElementsByName("EXT_TYPE")[1].value))
{
return true;
}
document.getElementById("BLK_MAIN__KEY_ID").value="";
if(document.getElementsByName("EXT_TYPE")[0].checked==true)
{
	fnDisableElement(document.getElementById("BLK_MAIN__KEY_ID")); 
	g_oldexttype=document.getElementsByName("EXT_TYPE")[0].value;//F
}
else if(document.getElementsByName("EXT_TYPE")[1].checked==true)
{
	fnEnableElement(document.getElementById("BLK_MAIN__KEY_ID"));
	g_oldexttype=document.getElementsByName("EXT_TYPE")[1].value;//L
}
return true;
}
function fnPostEnterQuery_KERNEL()
{
fnEnableElement(document.getElementById("BLK_MAIN__EXT_TYPE"));
return true;
}