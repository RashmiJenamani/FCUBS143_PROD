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
**  File Name          : STDCCHOL_SYS.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : 
**  Last modified on   : 
**  Full Version       : 
**  Reason             : 
****************************************************************************************************************************/

var gErrCodes = "";
var gCCYRef         = null;
var gYearRef           = null;
var gWeeklyHol1        = 0;
var gWeeklyHol2        = 6;
//var gCSSReadOnly    = "TXTro";
//var gCSSHoliday        = "TextHoliday";
//var gCSSReadOnly         = "TextReadonly";
//var gCSSHoliday          = "TextHoliday";

var gCSSReadOnly	= "TXTro numeric"; //17043238
var gCSSHoliday		= "TXTro numeric TxtHD"; //17043238
var gCSSHalfday          = "TXTro numeric TxtHFD";//FCUBS_12.0.2_#17043238 Changes


var gLblYearOf;
var isRefresh = false;
var monthNames    = new Array(12);
monthNames[0]    = "JAN";
monthNames[1]     = "FEB";
monthNames[2]     = "MAR";
monthNames[3]     = "APR";
monthNames[4]     = "MAY";
monthNames[5]     = "JUN";
monthNames[6]     = "JUL";
monthNames[7]     = "AUG";
monthNames[8]     = "SEP";
monthNames[9]     = "OCT";
monthNames[10]     = "NOV";
monthNames[11]     = "DEC";
var gyearValue    = "";
var gCcyReference = "";
function fnPostLoad_KERNEL() {
	document.getElementById("dataContainer_BLK_STTMS_CCY_HOLIDAY").style.display="none";
	document.getElementById("dataContainer_BLK_STTMS_CCY_HOLIDAY").style.height = '0px';
	document.getElementById("dataContainer_BLK_STTMS_CCY_HOLIDAY").style.overflow = 'hidden';
	document.getElementById("BLK_STTMS_CCY_HOLIDAY").firstChild.nextSibling.style.display = 'none';
	document.getElementById("dataContainer_BLK_STTMS_CCY_HOLIDAY").firstChild.firstChild.style.display = 'none';
	//FCUBS12.3Payments_Hide_HolidayList ends
	
     
	gYearRef = document.getElementsByName("YEAR")[0];
    displayCalendar();
	setCss();
	return true;
}
function fnPostNew_KERNEL(){
//Bug_22937194  Starts
//    document.getElementsByName("YEAR")[0].value = parent.AppDate.substr(0,4); 
    document.getElementById("BLK_STTMS_CCY_HOL_MASTER__YEAR").value  = parent.AppDate.substr(0,4); 
    fireHTMLEvent(document.getElementById('BLK_STTMS_CCY_HOL_MASTER__YEAR'), "onpropertychange");
     appendData();
//Bug_22937194  Ends
		return true;
}
function fnPostUnlock_KERNEL() {
	fnDisableElement(document.getElementsByName('BTN_GO')[0]);
	document.getElementsByName("CCY")[0].readOnly = true;
	document.getElementsByName("YEAR")[0].readOnly = true;
	displayCalendar();
	return true;
}
function fnPostClose_KERNEL() {
	displayCalendar();
	return true;
}

function fnPostReOpen_KERNEL() {
	displayCalendar();
	return true;
}

function fnPostAuthorize_KERNEL(){
	displayCalendar();
	return true;
}
//21439734
/*
function fnPostCopy_KERNEL(){
 document.getElementById('BLK_STTMS_CCY_HOL_MASTER__COUNTRY_OFFICE_CODE').value =  mainWin.countryCode; /*countryOfficeCode; ZENGIN CHANGES Srinidhi Rao //testing country
return true;
}
//21439734
*/
/*
 * Called to perform some neccessary operation after the fnEnterQuery() Action event
 * Specific to the functionid
 */
function fnPostEnterQuery_KERNEL(){

    document.getElementsByName("YEAR")[0].value = parent.AppDate.substr(0,4);  
		return true;
}
function fnPostExecuteQuery_KERNEL(){

   displayCalendar();
	return true;
}
function fnPostSave_KERNEL(){
	displayCalendar();
	return true;
}
function fnPreExecuteQuery_KERNEL(){
	//displayCalendar();
	 // Bug_22954654 changes commented
	return true;
}
function fnPreUnlock_KERNEL(){
	displayCalendar();
	return true;
}
function fnPreSave_KERNEL() {
    if(!isRefresh && gAction =='NEW'){
        //alert("Please Input the Calendar values.");
		showErrorAlerts('IN-HEAR-402');
        return false;
    }
    setChildKeyValues("STTMS_CCY_HOL_MASTER","CCY","CCY");
    setChildKeyValues("STTMS_CCY_HOL_MASTER","YEAR","YEAR");
    var yearVal        = document.getElementsByName("YEAR").value;
	
	gyearValue    = yearVal;
    gYearRef      = yearVal;

    displayCalendar();
    return true;
}
/*
 *Returns number of days of a given month
 *inMonth - Numeric equvalent of Month
 *inYear  - Current Year
 */
function fnGetDays(inMonth,inYear){
    var noDays   = new Array(12);
    noDays[0]    = 31; // January
    noDays[1]    = (fnLeapYear(inYear)) ? 29 : 28; // February
    noDays[2]    = 31; // March
    noDays[3]    = 30; // April
    noDays[4]    = 31; // May
    noDays[5]    = 30; // June
    noDays[6]    = 31; // July
    noDays[7]    = 31; // August
    noDays[8]    = 30; // September
    noDays[9]    = 31; // October
    noDays[10]   = 30; // November
    noDays[11]   = 31; // December
    // return number of days in the specified month (parameter)
    return noDays[inMonth];
 }
/*
 *Returns the Function names
 */
function fnGetMonthName(inMonth){
    // return name of specified month (parameter)
    return monthNames[inMonth];
}
/*
 *Returns numeric equvalent of the given month
 */
function fnGetMonthIndex(monthName){
    for(var monCnt = 0; monCnt < monthNames.length; monCnt++){
        if(monthNames[monCnt] == monthName){
            return monCnt;
        }
    }
    return -1;
}
/*
 * Function which fills the Calendar values corresponding the year entered
 * and
 * Value of gAction
 */
function displayCalendar(){
   var curYear2  = document.getElementsByName("YEAR")[0].value;
    var strCell   = "";
    var row       = 0;
    var col          = 0;
    var currObj   = null;
    var monthName = "";
    var noDays    = 0;
    var firstDay  = 0;
    var firstDayInstance = null;
    var monthList = "";
    var isValid   = true;
    var tabIndex = 1;
	var inYear = parseInt(curYear2);

	//To populate the calendar only when the year and Currency both are entered.
    if(inYear != ""){
       if(gAction =="NEW"){
		  isRefresh = true;
		  deleteAllRows("BLK_STTMS_CCY_HOLIDAY");
                for(var monthCnt = 0; monthCnt<12; monthCnt++){
                    firstDayInstance = new Date(inYear,monthCnt,1);
                    monthName = fnGetMonthName(monthCnt);
                    noDays = fnGetDays(monthCnt, inYear);
                    firstDay = firstDayInstance.getDay();
                    col = firstDay;
                    row = 0;
                    monthList = "";
                    for(var dayCnt = 1; dayCnt <= noDays ; dayCnt++){
                        strCell = monthName + "_" + row + "_" + col + "I"; //17043238
						currObj = eval(document.getElementsByName(strCell)[0]); 
                        currObj.value = "";
                        currObj.className = gCSSReadOnly;
                        currObj.value = dayCnt;
                        currObj.tabIndex = tabIndex;
						currObj.removeAttribute('onkeydown'); 
						currObj.setAttribute('onkeydown',"fnToggleFromKey()");
                        tabIndex++;
                        //if(col == gWeeklyHol1 || col == gWeeklyHol2){//FCUBS_12.0.2_#17043238 Changes
						if(col == gWeeklyHol1 || col == gWeeklyHol2){//FCUBS_12.0.2_#17043238 Changes 
					        currObj.className = gCSSHoliday;
                            monthList += "H";
                        }
                        else{

                            monthList += "W";
                        }
                        if(col == 6){
                            col = 0;
                            row = row + 1;
                        }
                        else{
                            col = col + 1;
                        }
                    }
			        var currRow = addNewRow("BLK_STTMS_CCY_HOLIDAY");
                    currRow.cells[1].getElementsByTagName("INPUT")[0].value = document.getElementsByName("YEAR")[0].value;
                    currRow.cells[2].getElementsByTagName("INPUT")[0].value = monthCnt+1;
                    currRow.cells[4].getElementsByTagName("INPUT")[0].value = monthList;
					currRow.cells[3].getElementsByTagName("INPUT")[0].value = document.getElementsByName("CCY")[0].value;
                    //currRow.cells[5].getElementsByTagName("INPUT")[0].value =  mainWin.CurrentBranch; //testing
					//To clear the Existing unchanged values in the calendar
                    for(var tempCol = 0; tempCol < firstDay; tempCol++){
                        strCell   = monthName + "_0_" + tempCol + "I"; //17043238
                        currObj = eval(document.getElementsByName(strCell)[0]); 
                        currObj.value         = "";
                        currObj.className    = gCSSReadOnly;
                    }
                    if(col != 6){ 
						col--; 
					}
                    while(row <= 5){
                        for(var tempCol = col+1; tempCol < 7; tempCol++){
                            strCell   = monthName + "_" + row + "_" + tempCol + "I"; //17043238
							currObj = eval(document.getElementsByName(strCell)[0]); 
                            currObj.value         = "";
                            currObj.className    = gCSSReadOnly;
                        }
                        tempCol = 0;
                        col     = -1;
                        row++;
                    }
                }
            }
            else if(gAction == "EXECUTEQUERY" || gAction == 'MODIFY' || gAction == ''){
                var tblRef = document.getElementById("BLK_STTMS_CCY_HOLIDAY").tBodies[0];
	            var dayStatus = '';
                for(var monthCnt = 0; monthCnt<12; monthCnt++){
                    //gets the first day's instance of the given Month
                    firstDayInstance = new Date(inYear,monthCnt,1);
                    //gets the Month name
                    monthName        = fnGetMonthName(monthCnt);
                    //gets the numbers of days for the given Month
                  	noDays            = fnGetDays(monthCnt,inYear);  
                    //gets the integer equavalent of the particular day
                    firstDay        = firstDayInstance.getDay();
                    col = firstDay; // sets to the first daycnt of the month
                    row = 0;
		// Bug_22954654 changes starts
		//if(typeof(tblRef.rows[monthCnt].cells[3].getElementsByTagName("INPUT")[0]) == undefined){
               if(typeof(tblRef.rows[monthCnt].cells[4].getElementsByTagName("INPUT")[0]) == "undefined"){
	       // Bug_22954654 changes ends
					monthList =    tblRef.rows[monthCnt].cells[4].getElementsByTagName("TEXTAREA")[0].value;
                }
				else{
                   monthList =    tblRef.rows[monthCnt].cells[4].getElementsByTagName("INPUT")[0].value;
                }	
                for(var dayCnt = 1; dayCnt <= noDays ; dayCnt++){
                    dayStatus = monthList.charAt((dayCnt-1));
                    strCell   = monthName + "_" + row + "_" + col + "I";
					currObj = eval(document.getElementsByName(strCell)[0]); 
                    currObj.value = "";
                    currObj.value = dayCnt;
                    currObj.tabIndex = tabIndex;
					currObj.removeAttribute('onkeydown');  
					currObj.setAttribute('onkeydown',"fnToggleFromKey()");
					tabIndex++;
					if(dayStatus == 'H'){
					     currObj.className = gCSSHoliday;
					 }
					//FCUBS_12.0.2_#17043238 Changes Starts
					else if (dayStatus == 'S'){
						currObj.className = gCSSHalfday;
					}
					else{
                        currObj.className    = gCSSReadOnly;
                    }
					//FCUBS_12.0.2_#17043238 Changes Ends
                   if(col == 6){
                     col = 0;
                     row = row + 1;
                   }
                   else{
                      col = col + 1;
                   }
               }
				//To clear the Existing unchanged values and style of the calendar
                for(var tempCol = 0; tempCol < firstDay; tempCol++){
                    strCell   = monthName + "_0_" + tempCol + "I"; //17043238
                    currObj = eval(document.getElementsByName(strCell)[0]); 
                    currObj.className    = gCSSReadOnly;
				}
				if(col != 6) { col--; }
                    while(row <= 5) {
                        tempCol = 0;
                        for(var tempCol = col+1; tempCol < 7; tempCol++){
                            strCell   = monthName + "_" + row + "_" + tempCol + "I"; //17043238
							currObj = eval(document.getElementsByName(strCell)[0]);
                             currObj.value         = "";
                            currObj.className    = gCSSReadOnly;
                        }
                        col     = -1;
                        row++;
                    }
                }
            }
        }
    else{//Year is left blank
        appendErrorCode('ST-COM013','YEAR');
        isValid = false;
    }
    if(isValid == false){
        var msg = buildMessage(gErrCodes);
        alertMessage(msg);
        document.getElementById("YEAR").select();
    }
    gYearRef.tabIndex = tabIndex++;
   document.getElementsByName("BTN_EXIT")[0].tabIndex   = tabIndex++;  
	if(document.getElementsByName("YEAR")[0].readOnly == false) {
		document.getElementsByName("YEAR")[0].readOnly = true;
    }
}
/*
 * Toggle color when the user duble click on the day
 * and
 * Create holiday list of that particular month
 */
function fnToggleColor(currObj){
    if(gAction == "NEW" || gAction == "MODIFY"){
        var currObjName = currObj.name;
        var index = currObjName.indexOf("_");
        var day = 1;
		//FCUBS_12.0.2_#17043238 Changes Starts
		/*if (currObj.className != gCSSHoliday){
		currObj.className = gCSSReadOnly;
		}*/
		//FCUBS_12.0.2_#17043238 Changes Ends
        if(currObj.value != ""){
            day = currObj.value;
			var monthName        = currObjName.substring(0, index);
			var month            = fnGetMonthIndex(monthName);
			var loopObj          = null;
			var currMonthCell    = document.getElementById("BLK_STTMS_CCY_HOLIDAY").tBodies[0].rows[month].cells[4].getElementsByTagName("INPUT")[0];
			var inYear           = document.getElementById("BLK_STTMS_CCY_HOLIDAY").tBodies[0].rows[month].cells[1].getElementsByTagName("INPUT")[0].value;
			var firstDayInstance = new Date(inYear,month,1);
			col                  = firstDayInstance.getDay();
			if(currObj.className == gCSSReadOnly){
                currObj.className = gCSSHoliday;
				currMonthCell.value = currMonthCell.value.substring(0,day-1) + "H" + currMonthCell.value.substring(day,currMonthCell.value.length)
		    }
			//FCUBS_12.0.2_#17043238 Changes Starts
			else if (currObj.className == gCSSHoliday){
                currObj.className = gCSSHalfday ;
                currMonthCell.value = currMonthCell.value.substring(0,day-1) + "S" + currMonthCell.value.substring(day,currMonthCell.value.length)
            }
			//FCUBS_12.0.2_#17043238 Changes Ends
            else{
                currObj.className = gCSSReadOnly;
				currMonthCell.value = currMonthCell.value.substring(0,day-1) + "W" + currMonthCell.value.substring(day,currMonthCell.value.length)
			}
        }
    }
}
/*
 * Funtion to clear the calendar and set its default style
 */
function fnResetStyle(){
    var monthName = "";
    var strCell   = "";
    var currObj   = null;
    gYearRef      = document.getElementsByName("YEAR")[0];
    gLblYearOf    = document.getElementsByName("YEAR")[0];
    for(var monthCnt = 0; monthCnt < 12 ;monthCnt++){
        monthName = fnGetMonthName(monthCnt);
        for(var rowCnt = 0; rowCnt < 6; rowCnt++){
            for(var colCnt = 0; colCnt < 7;colCnt++){
                strCell = monthName + "_" + rowCnt + "_" + colCnt + "I"; //17043238
				currObj = eval(document.getElementsByName(strCell)[0]);
                currObj.className = gCSSReadOnly;
                currObj.tabIndex  = -1;
            }
        }
    }
    gYearRef.tabIndex = -1;
	document.getElementsByName("BTN_EXIT")[0].tabIndex = -1;   
}
/*
 * used to toggle the between holiday to working day using SPACEBAR
 */
function fnToggleFromKey(){
    var srcElem = event.srcElement;
    if(event.keyCode == 32 && srcElem.value != ""){
        fnToggleColor(srcElem);
    }
    event.cancelBubble = true;
}
function fnPrevYear(){
    if (gAction == "NEW"){
		if(document.getElementsByName("YEAR")[0].value == ""){
			alert("Please Enter valid Year");
			return false;
		}	
		var inputYear = document.getElementsByName("YEAR")[0].value;
		var curYear2 = parseInt(inputYear);
        curYear2 = curYear2 - 1;
        document.getElementsByName("YEAR")[0].value = curYear2;
 //Bug_22937194  Starts 
        document.getElementById("BLK_STTMS_CCY_HOL_MASTER__YEAR").value  = curYear2; 
         fireHTMLEvent(document.getElementById('BLK_STTMS_CCY_HOL_MASTER__YEAR'), "onpropertychange");
//Bug_22937194  Ends

      }
	displayCalendar();
return true;
}
function fnNextYear(){
    if (gAction == "NEW"){
		if(document.getElementsByName("YEAR")[0].value == ""){
			alert("Please Enter valid Year");
			return false;
		}
		var inputYear = document.getElementsByName("YEAR")[0].value;
		var curYear2 = parseInt(inputYear);
        curYear2 = curYear2 + 1;
        document.getElementsByName("YEAR")[0].value = curYear2;
 //Bug_22937194  Starts
       document.getElementById("BLK_STTMS_CCY_HOL_MASTER__YEAR").value  = curYear2; 
        fireHTMLEvent(document.getElementById('BLK_STTMS_CCY_HOL_MASTER__YEAR'), "onpropertychange");
 //Bug_22937194  Ends
    }
	displayCalendar();
return true;	
}
function fnCalHolHeading() {
    var l_hol_head_list = new Array("SUNDAY1", "MONDAY1", "TUESDAY1", "WEDNESDAY1", "THURSDAY1", "FRIDAY1", "SATURDAY1",
                        "SUNDAY2", "MONDAY2", "TUESDAY2", "WEDNESDAY2", "THURSDAY2", "FRIDAY2", "SATURDAY2",
                        "SUNDAY3", "MONDAY3", "TUESDAY3", "WEDNESDAY3", "THURSDAY3", "FRIDAY3", "SATURDAY3");
    document.getElementById("BLK_STTMS_CCY_HOL_MASTER").style.display="none";
    for (var i=0; i<l_hol_head_list.length; i++){    
        document.getElementsByName(l_hol_head_list[i])[0].className = "TEXTCalHead";
    }
}
function setCss(){
	document.getElementsByName("SUNDAY1")[0].className = gCSSReadOnly;
	document.getElementsByName("MONDAY1")[0].className = gCSSReadOnly;
	document.getElementsByName("TUESDAY1")[0].className = gCSSReadOnly;
	document.getElementsByName("WEDNESDAY1")[0].className = gCSSReadOnly;
	document.getElementsByName("THURSDAY1")[0].className = gCSSReadOnly;
	document.getElementsByName("FRIDAY1")[0].className = gCSSReadOnly;
	document.getElementsByName("SATURDAY1")[0].className = gCSSReadOnly;
	document.getElementsByName("SUNDAY2")[0].className = gCSSReadOnly;
	document.getElementsByName("SUNDAY3")[0].className = gCSSReadOnly;
	document.getElementsByName("MONDAY2")[0].className = gCSSReadOnly;
	document.getElementsByName("MONDAY3")[0].className = gCSSReadOnly;
	document.getElementsByName("TUESDAY2")[0].className = gCSSReadOnly;
	document.getElementsByName("TUESDAY3")[0].className = gCSSReadOnly;
	document.getElementsByName("WEDNESDAY2")[0].className = gCSSReadOnly;
	document.getElementsByName("WEDNESDAY3")[0].className = gCSSReadOnly;
	document.getElementsByName("THURSDAY2")[0].className = gCSSReadOnly;
	document.getElementsByName("THURSDAY3")[0].className = gCSSReadOnly;
	document.getElementsByName("FRIDAY2")[0].className = gCSSReadOnly;
	document.getElementsByName("FRIDAY3")[0].className = gCSSReadOnly;
	document.getElementsByName("SATURDAY2")[0].className = gCSSReadOnly;
	document.getElementsByName("SATURDAY3")[0].className = gCSSReadOnly;
}

function fnPreExit_KERNEL(event) {
	
	if (gAction == "MODIFY"){
	customAlertAction = "ACCEPTCLOSEBATCH";
	}
	return true;    
}

function fnCloseAlertWin_ACCEPTCLOSEBATCH(event) {
	
	if (alertAction == "EXITACTION"){
		if (gAction != "" && gAction != 'EXECUTEQUERY'){
			if (gAction == "MODIFY"){
		     	releaseLock();
			}
		}	
		event.cancelBubble = true;
		gAction = "";
	}
	fnSetExitButton(); 
	return true;
}