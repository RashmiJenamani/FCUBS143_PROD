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
**  File Name          : MSDRLDFN_KERNEL.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : 
**  Last modified on   : 
**  Full Version       : 
**  Reason             : 
****************************************************************************************************************************/
var fcjRequestDOM;
var fcjResponseDOM;
var objHTTP;



function fnPostNew_KERNEL() {

    fnDisableElement(document.getElementById("cmdAddRow_BLK_BLOCK3"));
    fnDisableElement(document.getElementById("cmdDelRow_BLK_BLOCK3"));


}


function fnPostCopy_KERNEL() {
	 var rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;
	 var j=0;
	 for(j=0;j<rowlength;j++)
	 {
	 
	 if(document.getElementsByName("LOPTYPE")[j].value=="E")
	 {
	fnDisableElement(document.getElementsByName("LEFTOPERANT")[j]);
	 
	 }
	 
	 	 if(document.getElementsByName("ROPTYPE")[j].value=="E")
	 {
	fnDisableElement(document.getElementsByName("RIGHTOPERANT")[j]);
	 
	 }
	 
	 }
	 
	 
		return true;
}
function fnPostUnlock_KERNEL(){
 var rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;
	 var j=0;
	 for(j=0;j<rowlength;j++)
	 {
	 
	 if(document.getElementsByName("LOPTYPE")[j].value=="E")
	 {
	fnDisableElement(document.getElementsByName("LEFTOPERANT")[j]);
	 
	 }
	 
	 	 if(document.getElementsByName("ROPTYPE")[j].value=="E")
	 {
	fnDisableElement(document.getElementsByName("RIGHTOPERANT")[j]);
	 
	 }
	 
	 }
	 
	 
		return true;

}

function fnPreSave_KERNEL() {
        var rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;
        var LOGICALNOT="";
        var SCOPSTART;
        var LOPTYPE;
        var LEFTOPERANT;
        var OPERATO;
        var RIGHTOPERANT;
        var ROPTYPE;
        var SCOPEEND;
        var LOGICALOPERATOR;
        var LOGICALOPERATOR1;
        var Expressionbuilt = "";
        var str_scope;
        var end_scope;
        var Block_var1;
        var Block_var2;
        var LOPDATATYPE;
        var ROPDATATYPE;

        var PARAMNAME;
        var PARAMVALUE;
        var PARAMTYPE;
   
var params_string="";
var params_map ={};

var params_map_key="";
        for (var j = 0; j < rowlength; j++) {

          //  LOGICALNOT = document.getElementsByName("LOGICALNOT")[j].value;
            SCOPSTART = document.getElementsByName("SCOPSTART")[j].value;
            LOPTYPE = document.getElementsByName("LOPTYPE")[j].value;
            LOPDATATYPE = document.getElementsByName("LOPDATATYPE")[j].value;
            LEFTOPERANT = document.getElementsByName("LEFTOPERANT")[j].value;
            OPERATO = document.getElementsByName("OPERATO")[j].value;
            RIGHTOPERANT = document.getElementsByName("RIGHTOPERANT")[j].value;
            ROPTYPE = document.getElementsByName("ROPTYPE")[j].value;
            ROPDATATYPE = document.getElementsByName("ROPDATATYPE")[j].value;
            SCOPEEND = document.getElementsByName("SCOPEEND")[j].value;
            LOGICALOPERATOR = document.getElementsByName("LOGICALOPERATOR")[j].value;
  if (LOPTYPE == "P") {
             //   params = params + LEFTOPERANT + "#" ;
                if(!(LEFTOPERANT in params_map))
				{
				params_map[LEFTOPERANT]=LEFTOPERANT;
				}
            }
            if (ROPTYPE == "P") {
               // params = params + RIGHTOPERANT + "#";
             if(!(RIGHTOPERANT in params_map))
				{
				params_map[RIGHTOPERANT]=RIGHTOPERANT;
				}
            }
			
			   if(!(document.getElementsByName("ROPEXP_PARAMETERS")[j].value in params_map))
				{
				params_map[document.getElementsByName("ROPEXP_PARAMETERS")[j].value]=document.getElementsByName("ROPEXP_PARAMETERS")[j].value;
				}
				
				   if(!(document.getElementsByName("LOPEXP_PARAMETERS")[j].value in params_map))
				{
				params_map[document.getElementsByName("LOPEXP_PARAMETERS")[j].value]=document.getElementsByName("LOPEXP_PARAMETERS")[j].value;
				}
			//params=params+document.getElementsByName("ROPEXP_PARAMETERS")[j].value+document.getElementsByName("LOPEXP_PARAMETERS")[j].value;
            if (LOPTYPE == "P" &&   LOPDATATYPE == "S" )  {
                Block_var1 = document.getElementsByName("LEFTOPERANT")[j].value;
                LEFTOPERANT = "ValueOf"+" "+"{"+" "+ "'" + Block_var1 + "'"+" "+"}" ;
            } else if (LOPTYPE == "P" && LOPDATATYPE == "M") {
				Block_var1 = document.getElementsByName("LEFTOPERANT")[j].value;
                LEFTOPERANT = "ValueOf"+" "+"{"+" "+  Block_var1 + " "+"}" ;
			}else if( LOPTYPE == "C" &&   LOPDATATYPE == "S"  ) {
			     Block_var1 = document.getElementsByName("LEFTOPERANT")[j].value;
                LEFTOPERANT =  "'" + Block_var1 + "'" ;			
			} else if(LOPTYPE == "C" && LOPDATATYPE == "M"  ) {
			     Block_var1 = document.getElementsByName("LEFTOPERANT")[j].value;
                LEFTOPERANT =   Block_var1  ;			
			}

            if (ROPTYPE == "P"  &&   ROPDATATYPE == "S"  )  {
                Block_var2 = document.getElementsByName("RIGHTOPERANT")[j].value;
                RIGHTOPERANT = "ValueOf"+" "+"{"+" "+"'"+ Block_var2 + "'"+" "+"}";

            }else if (ROPTYPE == "P"  && ROPDATATYPE == "M"  )  {
                Block_var2 = document.getElementsByName("RIGHTOPERANT")[j].value;
                RIGHTOPERANT = "ValueOf"+" "+"{"+" "+ Block_var2 + " "+"}";

            }else if(ROPTYPE == "C" &&   ROPDATATYPE == "S" ){
			    Block_var2 = document.getElementsByName("RIGHTOPERANT")[j].value;
                RIGHTOPERANT = "'"+ Block_var2 + "'";
			}else if(ROPTYPE == "C" && ROPDATATYPE == "M"  ) {
			    Block_var2 = document.getElementsByName("RIGHTOPERANT")[j].value;
                RIGHTOPERANT =  Block_var2 ;
			}

            if (j + 1 <= rowlength - 1) {
                if (document.getElementsByName("LOGICALOPERATOR")[j].value == "") {
                    document.getElementById("BLK_MSTM_RULE_EXPRESSION__FINALEXPRESSION").value = "";
                    alert("Logical Operator cannot be null for the expression detail" + (j + 1));
                    return false;
                }
            } else if (j == rowlength - 1) {
                if (document.getElementsByName("LOGICALOPERATOR")[j].value != "") {
                    document.getElementById("BLK_MSTM_RULE_EXPRESSION__FINALEXPRESSION").value = "";
                    alert("Logical Operator should be null for the expression detail" + (j + 1));
                    return false;
                }
            }
            Expressionbuilt = fn_finalExpression(Expressionbuilt, LOGICALNOT, SCOPSTART, LEFTOPERANT, OPERATO, RIGHTOPERANT, SCOPEEND, LOGICALOPERATOR);

          

            str_scope = fn_occurofchar(Expressionbuilt, "(");
            end_scope = fn_occurofchar(Expressionbuilt, ")");

if(document.getElementsByName("LOPTYPE")[j].value!="E")
{
            document.getElementsByName("LOPEXP_PARAMETERS")[j].value = ""; 
			
}

if(document.getElementsByName("ROPTYPE")[j].value!="E")
{
            document.getElementsByName("ROPEXP_PARAMETERS")[j].value = ""; 
			
}

if(document.getElementsByName("EXPRESSIONSECTION")[j].value=="")
{
            document.getElementsByName("EXPRESSIONSECTION")[j].value = j + 1;
			
}


        }

      
        if (str_scope != end_scope) {
            alert('Scope is not proper');
            return false;
        }
		
		for(params_map_key in params_map)
		{
		if(params_map_key!="")
		{
		if(params_string=="")
		{
		params_string="#"+params_map[params_map_key]+"#";
		}
		else{
			params_string=params_string+params_map[params_map_key]+"#";
		
		}
		}
		}
		
		  document.getElementsByName("CUSTOM_PARAMETERS")[0].value = params_string;
		
		
        document.getElementById("BLK_MSTM_RULE_EXPRESSION__FINALEXPRESSION").value = Expressionbuilt;
        return true;
    }
    //function fn_populate_ropparamname starts

	
	function fn_editloperand()
	{
	 document.getElementById("BLK_MSTM_RULE_EXPRESSION__EXPRSSIONFOR").value = 'L';
	 var rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;
	 var expression_split=[];
	 var count = 0;
	var checked_rownum;
	var old_expression="";
	
	
	for (var j = 0; j < rowlength; j++) {
        if (document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows[j].cells[0].getElementsByTagName("INPUT")[0].checked) {
            checked_rownum = j;
            ++count;
        }

    }
	if (count > 1) {
        alert("Please select only one row");
        return false;
    } else if (count == 0) {
        alert("Please select a row");
        return false;
    }
	
	 if (document.getElementsByName("LOPTYPE")[checked_rownum].value != "E") {
        alert("Only left operand of Expression type is editable");
		return false;
    }
	
	old_expression=document.getElementsByName("LEFTOPERANT")[checked_rownum].value;
	
	
	 if (old_expression.indexOf("IndexOf")>=0) {
      
document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="I";
fn_predeffn();
expression_split=old_expression.split(" ");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[4].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[6].replace(/(')/g,"");

       

    } else if (old_expression.indexOf("Substring")>=0) {
    
document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="S";
fn_predeffn();
expression_split=old_expression.split(" ");
//expression_split=old_expression.split("\'");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[4].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[6].replace(/(')/g,"");

     

    } else if (old_expression.indexOf("Length")>=0) {

document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="L";
fn_predeffn();
expression_split=old_expression.split(" ");
         document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");

    } else if (old_expression.indexOf("Replace")>=0) {
      document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="R";
	  fn_predeffn();
expression_split=old_expression.split(" ");
            document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[4].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[6].replace(/(')/g,"");
    } else if (old_expression.indexOf("ReplaceAll")>=0) {
	
         document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="RA";
		 fn_predeffn();
expression_split=old_expression.split(" ");
           document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[4].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[6].replace(/(')/g,"");
		
    } else if (old_expression.indexOf("ToUpperCase")>=0) {
	
	    document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="U";
		fn_predeffn();
expression_split=old_expression.split(" ");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
    
    } else if (old_expression.indexOf("ToLowerCase")>=0) {
	
  document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="O";
  fn_predeffn();
expression_split=old_expression.split(" ");
          document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
		
    } else if (old_expression.indexOf("Trim")>=0) {
   
   document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="T";
   fn_predeffn();
expression_split=old_expression.split(" ");
       document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
   
    }
	
	
	}
	
	
	
	
	
	function fn_editroperand()
	{
	document.getElementById("BLK_MSTM_RULE_EXPRESSION__EXPRSSIONFOR").value='R';
	 var rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;
	 var expression_split=[];
	 var count = 0;
	var checked_rownum;
	var old_expression="";
	for (var j = 0; j < rowlength; j++) {
        if (document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows[j].cells[0].getElementsByTagName("INPUT")[0].checked) {
            checked_rownum = j;
            ++count;
        }

    }
	if (count > 1) {
        alert("Please select only one row");
        return false;
    } else if (count == 0) {
        alert("Please select a row");
        return false;
    }
	
	 if (document.getElementsByName("ROPTYPE")[checked_rownum].value != "E") {
        alert("Only right operand of Expression type is editable");
		return false;
    }
	
	old_expression=document.getElementsByName("RIGHTOPERANT")[checked_rownum].value;
	
	
	 if (old_expression.indexOf("IndexOf")>=0) {
      
document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="I";
fn_predeffn();
expression_split=old_expression.split(" ");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[4].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[6].replace(/(')/g,"");

       

    } else if (old_expression.indexOf("Substring")>=0) {
    
document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="S";
fn_predeffn();
expression_split=old_expression.split(" ");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[4].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[6].replace(/(')/g,"");

     

    } else if (old_expression.indexOf("Length")>=0) {

document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="L";
fn_predeffn();
expression_split=old_expression.split(" ");
         document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replaceAll("\'","");

    } else if (old_expression.indexOf("Replace")>=0) {
      document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="R";
	  fn_predeffn();
expression_split=old_expression.split(" ");
            document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[4].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[6].replace(/(')/g,"");
    } else if (old_expression.indexOf("ReplaceAll")>=0) {
	
         document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="RA";
		 fn_predeffn();
expression_split=old_expression.split(" ");
           document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[4].replace(/(')/g,"");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[6].replace(/(')/g,"");
		
    } else if (old_expression.indexOf("ToUpperCase")>=0) {
	
	    document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="U";
		fn_predeffn();
expression_split=old_expression.split(" ");
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
    
    } else if (old_expression.indexOf("ToLowerCase")>=0) {
	
  document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="O";
  fn_predeffn();
expression_split=old_expression.split(" ");
          document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
		
    } else if (old_expression.indexOf("Trim")>=0) {
   
   document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value="T";
   fn_predeffn();
expression_split=old_expression.split(" ");
       document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value = expression_split[2].replace(/(')/g,"");
   
    }
	
	
	}
	
	
	
	
	
function fn_populate_ropparamname() {
    var rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;
    var rowlength_param = document.getElementById("BLK_BLOCK3").tBodies[0].rows.length;
    var count = 0;
    var checked_rownum;
    var predefinedfnname;
    for (var j = 0; j < rowlength; j++) {
        if (document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows[j].cells[0].getElementsByTagName("INPUT")[0].checked) {
            checked_rownum = j;
            ++count;
        }

    }

    if (document.getElementsByName("ROPTYPE")[checked_rownum].value == "E") {
        fnDisableElement(document.getElementsByName("RIGHTOPERANT")[checked_rownum]);
    } else {
        fnEnableElement(document.getElementsByName("RIGHTOPERANT")[checked_rownum]);
    }


}

//function fn_populate_ropparamname ends

//fn_predeffn starts
function fn_predeffn() {
    var rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;

    var count = 0;
    var checked_rownum;
    var predefinedfnname;
    var rowlength_param = document.getElementById("BLK_BLOCK3").tBodies[0].rows.length;
    for (var t = 0; t < rowlength_param; t++) {
        document.getElementById("BLK_BLOCK3").deleteRow(0);
    }

    predefinedfnname = document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value;
    if (predefinedfnname == "I") {

        var k = 0;

        for (var r = 0; r < 3; r++) {
            fnAddRow('BLK_BLOCK3');
        }
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[1].getElementsByTagName("INPUT")[0].value = "Source_String";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Parameter";

        document.getElementById("BLK_BLOCK3").tBodies[0].rows[++k].cells[1].getElementsByTagName("INPUT")[0].value = "Search_Value";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Constant";

        document.getElementById("BLK_BLOCK3").tBodies[0].rows[++k].cells[1].getElementsByTagName("INPUT")[0].value = "Start_Pos";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Constant";
    } else if (predefinedfnname == "S") {

        var k = 0;

        for (var r = 0; r < 3; r++) {
            fnAddRow('BLK_BLOCK3');
        }
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[1].getElementsByTagName("INPUT")[0].value = "Source_String";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Parameter";

        document.getElementById("BLK_BLOCK3").tBodies[0].rows[++k].cells[1].getElementsByTagName("INPUT")[0].value = "Start_Pos";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Constant";

        document.getElementById("BLK_BLOCK3").tBodies[0].rows[++k].cells[1].getElementsByTagName("INPUT")[0].value = "End_Pos";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Constant";
    } else if (predefinedfnname == "L") {

        var k = 0;
        for (var r = 0; r < 1; r++) {
            fnAddRow('BLK_BLOCK3');
        }
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[1].getElementsByTagName("INPUT")[0].value = "Source_String";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Parameter";


    } else if (predefinedfnname == "R") {

        var k = 0;
        for (var r = 0; r < 3; r++) {
            fnAddRow('BLK_BLOCK3');
        }
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[1].getElementsByTagName("INPUT")[0].value = "Source_String";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Parameter";

        document.getElementById("BLK_BLOCK3").tBodies[0].rows[++k].cells[1].getElementsByTagName("INPUT")[0].value = "Old_Char";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Constant";

        document.getElementById("BLK_BLOCK3").tBodies[0].rows[++k].cells[1].getElementsByTagName("INPUT")[0].value = "New_Char ";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Constant";

    } else if (predefinedfnname == "RA") {

        var k = 0;
        for (var r = 0; r < 3; r++) {
            fnAddRow('BLK_BLOCK3');
        }
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[1].getElementsByTagName("INPUT")[0].value = "Source_String";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Parameter";

        document.getElementById("BLK_BLOCK3").tBodies[0].rows[++k].cells[1].getElementsByTagName("INPUT")[0].value = "Regex";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Constant";

        document.getElementById("BLK_BLOCK3").tBodies[0].rows[++k].cells[1].getElementsByTagName("INPUT")[0].value = "Replacement_String ";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Constant";

    } else if (predefinedfnname == "U") {

        var k = 0;
        for (var r = 0; r < 1; r++) {
            fnAddRow('BLK_BLOCK3');
        }
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[1].getElementsByTagName("INPUT")[0].value = "Source_String";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Parameter";


    } else if (predefinedfnname == "O") {

        var k = 0;
        for (var r = 0; r < 1; r++) {
            fnAddRow('BLK_BLOCK3');
        }
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[1].getElementsByTagName("INPUT")[0].value = "Source_String";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Parameter";


    } else if (predefinedfnname == "T") {

        var k = 0;
        for (var r = 0; r < 1; r++) {
            fnAddRow('BLK_BLOCK3');
        }
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[1].getElementsByTagName("INPUT")[0].value = "Source_String";
        document.getElementById("BLK_BLOCK3").tBodies[0].rows[k].cells[3].getElementsByTagName("INPUT")[0].value = "Parameter";
    }

}

//fn_predeffn ends 



//function fn_populate_lopparamname starts

function fn_populate_lopparamname() {
    var rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;

    var count = 0;
    var checked_rownum;
    var predefinedfnname;

    for (var j = 0; j < rowlength; j++) {
        if (document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows[j].cells[0].getElementsByTagName("INPUT")[0].checked) {
            checked_rownum = j;
            ++count;
        }

    }

    if (document.getElementsByName("LOPTYPE")[checked_rownum].value == "E") {
        fnDisableElement(document.getElementsByName("LEFTOPERANT")[checked_rownum]);




    } else {
        fnEnableElement(document.getElementsByName("LEFTOPERANT")[checked_rownum]);
    }


}

//function fn_populate_lopparamname ends
function fn_occurofchar(a, b) {
    Str = a;


    var matchesCount = Str.split(b).length - 1;
    return matchesCount;
}

function fn_operand_updater(PARAMVALUE, EXPRSSIONFOR, i) {
    if (EXPRSSIONFOR == "L") {
        document.getElementsByName("LEFTOPERANT")[i].value = PARAMVALUE;
    } else if (EXPRSSIONFOR == "R") {
        document.getElementsByName("RIGHTOPERANT")[i].value = PARAMVALUE;
    }

}

function fn_finalExpression(Expressionbuilt, LOGICALNOT, SCOPSTART, LEFTOPERANT, OPERATO, RIGHTOPERANT, SCOPEEND, LOGICALOPERATOR)

{
    var space = " ";


if(Expressionbuilt=="")
{
 var total_expre =  LOGICALNOT + "" + space + SCOPSTART + space + "" + LEFTOPERANT + space + "" + OPERATO + "" + space + RIGHTOPERANT + "" + space + SCOPEEND + space + "" + LOGICALOPERATOR;
}
else{
 var total_expre = Expressionbuilt + "" + LOGICALNOT + "" + space + SCOPSTART + space + "" + LEFTOPERANT + space + "" + OPERATO + "" + space + RIGHTOPERANT + "" + space + SCOPEEND + space + "" + LOGICALOPERATOR;

}
   


    return total_expre;
}

function fn_buildExpression() {

    var rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;

    var param_rowlength = document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows.length;
    var count = 0;
    var checked_rownum;
    var builtexp;
    var param_name;
    var param_value;
    var param_type;
    var predefinef_funcname;
    var paramdef;
    var space=" ";
    predefinef_funcname = document.getElementsByName("PREDEFINEDFUNCTIONS")[0].value;
var temp_expparam="";
    for (var j = 0; j < rowlength; j++) {
        if (document.getElementById("BLK_MSTM_EMS_ROUTING_RULE_DETAIL").tBodies[0].rows[j].cells[0].getElementsByTagName("INPUT")[0].checked) {
            checked_rownum = j;
            ++count;
        }

    }
	



    if (count > 1) {
        alert("Please select only one row");
        return false;
    } else if (count == 0) {
        alert("Please select a row");
        return false;
    }

    if (predefinef_funcname == "") {

        alert("Please choose a predefined function");
        return false;
    }


    if (document.getElementsByName("EXPRSSIONFOR")[0].value == "L") {

        if (document.getElementsByName("LOPTYPE")[checked_rownum].value != "E") {
            alert("Build expression is only for expression type");
            return false;
        }

        if (predefinef_funcname == 'I' || predefinef_funcname == 'L') {
            if (document.getElementsByName('LOPDATATYPE')[checked_rownum].value != "M") {
                alert("The LOPDATATYPE should be a number for the selected pre-defined function");
                return false;
            }

        } else {
            if (document.getElementsByName('LOPDATATYPE')[checked_rownum].value != "S") {
                alert("The LOPDATATYPE should be a string for the selected pre-defined function");
                return false;
            }
        }

    } else if (document.getElementsByName("EXPRSSIONFOR")[0].value == "R") {
        if (document.getElementsByName("ROPTYPE")[checked_rownum].value != "E") {
            alert("Build expression is only for expression type");
            return false;
        }

        if (predefinef_funcname == 'I' || predefinef_funcname == 'L') {
            if (document.getElementsByName('ROPDATATYPE')[checked_rownum].value != "M") {
                alert("The ROPDATATYPE should be a number for the selected pre-defined function");
                return false;
            }

        } else {
            if (document.getElementsByName('ROPDATATYPE')[checked_rownum].value != "S") {
                alert("The ROPDATATYPE should be a string for the selected pre-defined function");
                return false;
            }
        }


    }


    if (predefinef_funcname == 'I') {
        param_name1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[1].getElementsByTagName("INPUT")[0].value;
        param_name2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[1].getElementsByTagName("INPUT")[0].value;
        param_name3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[1].getElementsByTagName("INPUT")[0].value;


        param_val1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value;
        param_val2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value;
        param_val3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value;

        param_type1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[3].getElementsByTagName("INPUT")[0].value;
        param_type2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[3].getElementsByTagName("INPUT")[0].value;
        param_type3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[3].getElementsByTagName("INPUT")[0].value;
        temp_expparam =  param_val1 ;
        //   builtexp =  param_val1 + "." + "indexOf" + "(" + "\\\"" + param_val2 + "\\\"" + "," + param_val3 + ")";
        builtexp = "IndexOf" + space + "{" + space + "\'" + param_val1 + "\'" + space + "," + space + "\'" + param_val2 + "'" + space + "," + space + "\'" + param_val3 + "\'" + space + "}";
       // paramdef = "IndexOf" + "," + param_name1 + "#" + param_val1 + "#" + param_type1 + "#" + "," + param_name2 + "#" + param_val2 + "#" + param_type2 + "#" + "," + param_name3 + "#" + param_val3 + "#" + param_type3 + "#";

    } else if (predefinef_funcname == 'S') {
        param_name1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[1].getElementsByTagName("INPUT")[0].value;
        param_name2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[1].getElementsByTagName("INPUT")[0].value;
        param_name3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[1].getElementsByTagName("INPUT")[0].value;

        param_val1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value;
        param_val2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value;
        param_val3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value;

        param_type1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[3].getElementsByTagName("INPUT")[0].value;
        param_type2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[3].getElementsByTagName("INPUT")[0].value;
        param_type3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[3].getElementsByTagName("INPUT")[0].value;
        temp_expparam =  param_val1 ;
        //  builtexp =  param_val1 + "." + "substring" + "(" + "\\\"" + param_val2 + "\\\"" + "," + param_val3 + ")";
        builtexp = "Substring" + space + "{" + space + "\'" + param_val1 + "\'" + space + "," + space + "\'" + param_val2 + "'" + space + "," + space + "\'" + param_val3 + "\'" + space + "}";
       // paramdef = "Substring" + "," + param_name1 + "#" + param_val1 + "#" + param_type1 + "#" + "," + param_name2 + "#" + param_val2 + "#" + param_type2 + "#" + "," + param_name3 + "#" + param_val3 + "#" + param_type3 + "#";

    } else if (predefinef_funcname == 'L') {


        param_name1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[1].getElementsByTagName("INPUT")[0].value;
        param_val1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value;
        param_type1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[3].getElementsByTagName("INPUT")[0].value;
        temp_expparam =  param_val1 ;
        //builtexp =  param_val1  + "." + "length()";
        builtexp = "Length" + space + "{" + space + "\'" + param_val1 + "\'" + space + "}";
       // paramdef = "Length" + "," + param_name1 + "#" + param_val1 + "#" + param_type1 + "#";

    } else if (predefinef_funcname == 'R') {
        param_name1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[1].getElementsByTagName("INPUT")[0].value;
        param_name2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[1].getElementsByTagName("INPUT")[0].value;
        param_name3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[1].getElementsByTagName("INPUT")[0].value;

        param_val1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value;
        param_val2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value;
        param_val3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value;

        param_type1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[3].getElementsByTagName("INPUT")[0].value;
        param_type2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[3].getElementsByTagName("INPUT")[0].value;
        param_type3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[3].getElementsByTagName("INPUT")[0].value;
        temp_expparam =  param_val1 ;
        /* builtexp =  param_val1  + "." + "replace" + "(" + "\\\"" + param_val2 + "\\\"" + "," + "\\\"" + param_val3 + "\\\"" + ")";*/
        builtexp = "Replace" + space + "{" + space + "\'" + param_val1 + "\'" + space + "," + space + "\'" + param_val2 + "'" + space + "," + space + "\'" + param_val3 + "\'" + space + "}";
       // paramdef = "Replace" + "," + param_name1 + "#" + param_val1 + "#" + param_type1 + "#" + "," + param_name2 //+ "#" + param_val2 + "#" + param_type2 + "#" + "," + param_name3 + "#" + param_val3 + "#" + param_type3 + //"#";
    } else if (predefinef_funcname == 'RA') {
        param_name1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[1].getElementsByTagName("INPUT")[0].value;
        param_name2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[1].getElementsByTagName("INPUT")[0].value;
        param_name3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[1].getElementsByTagName("INPUT")[0].value;

        param_val1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value;
        param_val2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[2].getElementsByTagName("INPUT")[0].value;
        param_val3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[2].getElementsByTagName("INPUT")[0].value;

        param_type1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[3].getElementsByTagName("INPUT")[0].value;
        param_type2 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[1].cells[3].getElementsByTagName("INPUT")[0].value;
        param_type3 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[2].cells[3].getElementsByTagName("INPUT")[0].value;
       temp_expparam =  param_val1 ;
        /*builtexp = param_val1 + "." + "replaceAll" + "(" + "\\\"" + param_val2 + "\\\"" + "," + "\\\"" + param_val3 + "\\\"" + ")";*/

        builtexp = "ReplaceAll" + space + "{" + space + "\'" + param_val1 + "\'" + space + "," + space + "\'" + param_val2 + "'" + space + "," + space + "\'" + param_val3 + "\'" + space + "}";

     //   paramdef = "ReplaceAll" + "," + param_name1 + "#" + param_val1 + "#" + param_type1 + "#" + "," + //param_name2 + "#" + param_val2 + "#" + param_type2 + "#" + "," + param_name3 + "#" + param_val3 + "#" + //param_type3 + "#";
    } else if (predefinef_funcname == 'U') {
        param_name1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[1].getElementsByTagName("INPUT")[0].value;
        param_val1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value;
        param_type1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[3].getElementsByTagName("INPUT")[0].value;
        temp_expparam =  param_val1 ;

        builtexp = "ToUpperCase" + space + "{" + space + "\'" + param_val1 + "\'" + space + "}";
        //  builtexp =  param_val1 + "." + "toUpperCase()";

     //   paramdef = "toUpperCase" + "," + param_name1 + "#" + param_val1 + "#" + param_type1 + "#";
    } else if (predefinef_funcname == 'O') {
        param_name1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[1].getElementsByTagName("INPUT")[0].value;
        param_val1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value;
        param_type1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[3].getElementsByTagName("INPUT")[0].value;
        temp_expparam =  param_val1 ;
        //builtexp = param_val1 + "." + "toLowerCase()";
        builtexp = "ToLowerCase" + space + "{" + space + "\'" + param_val1 + "\'" + space + "}";

       // paramdef = "toLowerCase" + "," + param_name1 + "#" + param_val1 + "#" + param_type1 + "#";
    } else if (predefinef_funcname == 'T') {
        param_name1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[1].getElementsByTagName("INPUT")[0].value;
        param_val1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[2].getElementsByTagName("INPUT")[0].value;
        param_type1 = document.getElementById("BLK_BLOCK3").tBodies[0].rows[0].cells[3].getElementsByTagName("INPUT")[0].value;
     temp_expparam=  param_val1 ;
        // builtexp =  param_val1  + "." + "trim()";
        builtexp = "Trim" + space + "{" + space + "\'" + param_val1 + "\'" + space + "}";

     //   paramdef = "trim" + "," + param_name1 + "#" + param_val1 + "#" + param_type1 + "#";
    }

    if (document.getElementsByName("EXPRSSIONFOR")[0].value == "L") {

document.getElementsByName("LOPEXP_PARAMETERS")[checked_rownum].value=temp_expparam;
        document.getElementsByName("LEFTOPERANT")[checked_rownum].value = builtexp;
        
    } else if (document.getElementsByName("EXPRSSIONFOR")[0].value == "R") {

document.getElementsByName("ROPEXP_PARAMETERS")[checked_rownum].value=temp_expparam;
        document.getElementsByName("RIGHTOPERANT")[checked_rownum].value = builtexp;
  
    }
	
}