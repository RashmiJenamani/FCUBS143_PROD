/*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2008 - 2011  Oracle and/or its affiliates.  All rights reserved.
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
**  
**  Written by         : 
**  Date of creation   : 
**  File Name          : SMDPIFRT_KERNEL.js
**  Purpose            : 
**  Called From        : 

****************************************************************************************************************************/

function fnPostLoad_KERNEL(){
  g_prevAction = gAction;
  gAction = "ENTERQUERY";
  fnEnterQuery(); 
  gAction = "EXECUTEQUERY"; 
  document.getElementById("BLK_FRT_MASTER__MASK_TYPE").value = 'Forget Customer';  
  fnExecuteQuery();
  gAction = g_prevAction;
  DisableToolbar_buttons ("EnterQuery");
  document.getElementById("EnterQuery").disabled = true;
  document.getElementById("EnterQuery").setAttribute("disabled","disabled");
  document.getElementById("EnterQuery").className="BTNiconD";  
  document.getElementById("EnterQuery").style.display = "none";

  return true;
}
function fnMouseDownEvents(event){
  try{
	  var tableRef =document.getElementById("BLK_FRT_MAS");
	  var rowRef = tableRef.tBodies[0].rows;
	  var rowIndex = document.getElementById("BLK_FRT_MAS").tBodies[0].rows.length;
      var srcElement = getEventSourceElement(event);  
      if(getPreviousSibling(srcElement).name == "chkDeleteRow"){
	  for( i=0 ; i < rowIndex ; i++ ) 
		{	   
			rowRef[i].cells[0].getElementsByTagName("INPUT")[0].checked = false;
		}
  	}
  }catch(err){}
  return true;
}

function fnPostNavigate_BLK_FRT_DET_KERNEL(){
  fnUniqueMask();
  return true;
}

function fnPostFocus_KERNEL()
{
  DisableToolbar_buttons ("EnterQuery");
  document.getElementById("EnterQuery").disabled = true;
  document.getElementById("EnterQuery").setAttribute("disabled","disabled");
  document.getElementById("EnterQuery").className="BTNiconD";  
  document.getElementById("EnterQuery").style.display = "none";	
  fnUniqueMask();
}

function fnPostUnlock_KERNEL()
{
  fnUniqueMask();
}

function fnUniqueMask()
{
  try{
  var rowIndex = document.getElementById("BLK_FRT_DET").tBodies[0].rows.length;
  for (i = 0; i < rowIndex; i++)
	{
	if (document.getElementsByName("UNIQUE_COL")[i].checked == true)
		{
			document.getElementsByName("MASK_CHAR")[i].disabled = true;
		}
	}
	}catch(err){}
}