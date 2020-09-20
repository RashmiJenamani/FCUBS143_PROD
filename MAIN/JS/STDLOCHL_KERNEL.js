/*------------------------------------------------------------------------------------------
**
** This source is part of the Oracle FLEXCUBE Software Product.
** Copyright (R) 2016 , Oracle and/or its affiliates.  All rights reserved
**
**
** No part of this work may be reproduced, stored in a retrieval system, adopted
** or transmitted in any form or by any means, electronic, mechanical,
** photographic, graphic, optic recording or otherwise, translated in any
** language or computer language, without the prior written permission of
** Oracle and/or its affiliates.
**
** Oracle Financial Services Software Limited.
** Oracle Park, Off Western Express Highway,
** Goregaon (East),
** Mumbai - 400 063, India
** India
------------------------------------------------------------------------------------------
*/
/*
**  
**  Written by         : 
**  Date of creation   : 
**  File Name          : STDLOCHL_KERNEL.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   :  shashanka koormachalam
**  Last modified on   :  05-Jun-2013
**  Full Version       : 12.0.2.0.0
**  Reason             :  Holidays are not getting highlighted with color.
**  search string      :  9NT1587_FC_12.0.2_IUT BUGNo 16904799
**
**  Last Modified By   :  Guruprasad Bhat
**  Last modified on   :  25-Jun-2013
**  Full Version       :  12.0.2.0.0
**  Reason             :  Year not defaulted in Firefox and Opera
**  search string      :  9NT1587_FC_12.0.2_ITR1 Bug# 16995458 

**  Last Modified By   : Sandeep Sambidi
**  Last modified on   : 5-Aug-2013
**  Full Version       : 
**  Reason             : 
**  Search String      : 9NT1587_12.0.2_17211558

**  Last Modified By   : Tapsi Dubey
**  Last modified on   : 14-April-2014
**  Reason             :  Weekly Holidays maintained in branch parameters (STDBRANC) should be defaulted on click on refresh    
**  Search String      : 9NT1620_12.0.3_18999439

**  Last Modified By 	 : Deva Anand
**  Last modified on  	: 07-Oct-2014
**  Reason           		:  Modified the code  in order to display the changes in a different colour
**  Search String     	 : 9NT1620#1203RETRO#19767144

**  Modified by       : Geeta Adhikari
**  Modified Reason   : Bug#20659130
**  Search String     : FCUBS_12.1.0_21066833

****************************************************************************************************************************/


//------------------------------------------------------------------------------
// VARIABLE DECLARATIONS
//------------------------------------------------------------------------------

var fcjRequestDOM;
var fcjResponseDOM;

var gErrCodes = "";

var gCCYRef         = null;
var gYearRef           = null;
var gWeeklyHol1        = 0;
var gWeeklyHol2        = 6;
//9NT1587_FC_12.0.2_IUT BUGNo 16904799 starts
/*var gCSSReadOnly    = "TXTro";
var gCSSHoliday        = "TXTHD";*/
var gCSSReadOnly	= "TXTro numeric";
var gCSSHoliday		= "TXTro numeric TxtHD";
//9NT1587_FC_12.0.2_IUT BUGNo 16904799 ends
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
var gModified = "#1f77FF"; //9NT1620#1203RETRO#19767144


function fnPostLoad_KERNEL() 
{
	//selectSingleNode(document, '//fieldset[@block="BLK_LOCAL_HOLIDAY"]').style.display = 'none';
	document.getElementById("dataContainer_BLK_LOCAL_HOLIDAY").style.display="none";
	document.getElementById("dataContainer_BLK_LOCAL_HOLIDAY").style.height = '0px';
	document.getElementById("dataContainer_BLK_LOCAL_HOLIDAY").style.overflow = 'hidden';
	document.getElementById("BLK_LOCAL_HOLIDAY").firstChild.nextSibling.style.display = 'none';
	document.getElementById("dataContainer_BLK_LOCAL_HOLIDAY").firstChild.firstChild.style.display = 'none';
	//document.getElementById("dataContainer_BLK_LOCAL_HOLIDAY").visibility=false;
	//gYearRef = document.getElementsByName("YEAR")[0];
	gYearRef=document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEARI").value;//FCUBS_12.1.0_21066833
	//9NT1620#1203RETRO#19767144 changes starts
	if (viewMnt) 
	{
	  gAction="VIEWMNTLOG";
	}
	//9NT1620#1203RETRO#19767144 changes ends
    displayCalendar();
	setCss();
	//9NT1587_12.0.2_17211558 start
	if (parent.screenArgs['PARENT_FUNC_ID'] == "STDBRREF") 
	{
		fnPostLoad_CVS_MAIN_VIEWLOG();
    }
	//9NT1587_12.0.2_17211558 end
	return true;
}
function fnPostNew_KERNEL()  
{
		isRefresh = false;  //FCUBS_12.2.0.0.0_SUPPORT_23658200
        document.getElementsByName("BRANCH_CODE")[0].value = mainWin.CurrentBranch;
      	//document.getElementsByName("YEAR")[0].value = parent.AppDate.substr(0,4); -- Commented as part of fix for 9NT1587_FC_12.0.2_ITR1 Bug# 16995458
		// Fix for 9NT1587_FC_12.0.2_ITR1 Bug# 16995458 Starts
		document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEAR").value = parent.AppDate.substr(0,4);  
        fireHTMLEvent(document.getElementById('BLK_LOCAL_HOLIDAY_MASTER__YEAR'), "onpropertychange");
		// Fix for 9NT1587_FC_12.0.2_ITR1 Bug# 16995458	Ends
		//fnEnableElement(document.getElementById("STTMS_LCL_HOL_MASTER__YEAR"));
		//9NT1620_12.0.3_18999439 Function Call
		fnDefaultWeeklyHolidays();		
		return true;

}


function fnPostUnlock_KERNEL() {
	fnDisableElement(document.getElementsByName('BTN_REFRESH')[0]);
	document.getElementsByName("BRANCH_CODE")[0].readOnly = true;
	document.getElementsByName("YEAR")[0].readOnly = true;
	
	//document.getElementsByName("BRANCH_CODE")[0].disabled = true;
    //document.getElementsByName("YEAR")[0].disabled = true;
    displayCalendar();
	return true;
}

function fnPostAuthorize_KERNEL() 
{
	displayCalendar();
	return true;
}

//FCUBS_12.2.0.0.0_SUPPORT_23657375 starts
function fnPostFocus_KERNEL() 
{
    if(gAction != 'NEW')
	   displayCalendar();
	   
	return true;
}
//FCUBS_12.2.0.0.0_SUPPORT_23657375  ends

/*
 * Called to perform some neccessary operation after the fnEnterQuery() Action event
 * Specific to the functionid
 */
function fnPostEnterQuery_KERNEL() 
{
   
   document.getElementsByName("BRANCH_CODE")[0].value = mainWin.CurrentBranch;   
	return true;
}

function fnPostExecuteQuery_KERNEL() 
{
   displayCalendar();
	return true;
}

function fnPostSave_KERNEL()  
{
	displayCalendar();
	return true;
}

function fnPreExecuteQuery_KERNEL()  
{
	displayCalendar();
	return true;
}

function fnPreUnlock_KERNEL()  
{
	displayCalendar();
	return true;
}



function fnPreSave_KERNEL() {
    debugs("In fnPreSave", "A");
    if(!isRefresh && gAction =='NEW'){
        //alert("Please Input the Calendar values.");
		showErrorAlerts('IN-HEAR-402');//NLS change -Removal of hardcoded alerts
        return false;
    }
    setChildKeyValues("STTMS_LCL_HOL_MASTER","BRANCH_CODE","BRANCH_CODE");
    setChildKeyValues("STTMS_LCL_HOL_MASTER","YEAR","YEAR");
    var yearVal        = document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEAR").value;
	var gBRANCHCODERef = document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__BRANCH_CODE").value;
	gyearValue    = yearVal;
    gYearRef      = yearVal;
	gBranchCodeReference = gBRANCHCODERef;
    displayCalendar();
    return true;
}

/***************************************************
 STDCCHOL function specific functions starts here
 ***************************************************/

/*
 *Returns number of days of a given month
 *inMonth - Numeric equvalent of Month
 *inYear  - Current Year
 */
function fnGetDays(inMonth,inYear)
{
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
function fnGetMonthName(inMonth)
{
    // return name of specified month (parameter)
    return monthNames[inMonth];
}

/*
 *Returns numeric equvalent of the given month
 */
function fnGetMonthIndex(monthName)
{
    for(var monCnt = 0; monCnt < monthNames.length; monCnt++)
    {
        if(monthNames[monCnt] == monthName)
        {
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
function displayCalendar()
{
   //var curYear2  = document.getElementsByName("YEAR")[0].value; FCUBS_12.1.0_21066833 commented
    var curYear2  = document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEARI").value; //FCUBS_12.1.0_21066833 added

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
    if(inYear != "")
    {
            if(gAction =="NEW")
            {
		  isRefresh = true;
		  deleteAllRows("BLK_LOCAL_HOLIDAY");//FCUBS11.2_Cross_Browser#1
                for(var monthCnt = 0; monthCnt<12; monthCnt++)
                {
                    firstDayInstance = new Date(inYear,monthCnt,1);
                    monthName = fnGetMonthName(monthCnt);
                    noDays = fnGetDays(monthCnt, inYear);
                    firstDay = firstDayInstance.getDay();
                    col = firstDay;
                    row = 0;
                    monthList = "";
                    for(var dayCnt = 1; dayCnt <= noDays ; dayCnt++)
                    {
                        //strCell = monthName + "_" + row + "_" + col; //comment 9NT1587_FC_12.0.2_IUT BUGNo 16904799
						strCell = monthName + "_" + row + "_" + col +  "I"; //added 9NT1587_FC_12.0.2_IUT BUGNo 16904799 
						
                        
				//currObj = eval(document.getElementsByName(strCell)[0]); //FCUBS11.2_Cross_Browser#1 //FCUBS_12.1.0_21066833 commented
				currObj = eval(document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__" + monthName + "_" + row + "_" + col +  "I"));  //  FCUBS_12.1.0_21066833 added
                        currObj.value = "";
                        currObj.className = gCSSReadOnly;
                        currObj.value = dayCnt;
                        currObj.tabIndex = tabIndex;
						currObj.removeAttribute('onkeydown');//FCUBS11.2_Cross_Browser#1
                        tabIndex++;

                        if(col == gWeeklyHol1 || col == gWeeklyHol2)
                        {
                            currObj.className = gCSSHoliday;
                            monthList += "H";
                        }
                        else
                        {
                            monthList += "W";
                        }

                        if(col == 6)
                        {
                            col = 0;
                            row = row + 1;
                        }
                        else
                        {
                            col = col + 1;
                        }
                    }
			
                    var currRow = addNewRow("BLK_LOCAL_HOLIDAY");
                   // currRow.cells[1].getElementsByTagName("INPUT")[0].value = document.getElementsByName("BRANCH_CODE")[0].value; //FCUBS_12.1.0_21066833 commented
                   currRow.cells[1].getElementsByTagName("INPUT")[0].value = document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__BRANCH_CODE").value; // FCUBS_12.1.0_21066833 added
					//currRow.cells[2].getElementsByTagName("INPUT")[0].value = gYearRef.value;
                    //currRow.cells[2].getElementsByTagName("INPUT")[0].value = document.getElementsByName("YEAR")[0].value; //FCUBS_12.1.0_21066833 commented
					currRow.cells[2].getElementsByTagName("INPUT")[0].value = document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEARI").value;  // FCUBS_12.1.0_21066833 added
                    currRow.cells[3].getElementsByTagName("INPUT")[0].value = monthCnt+1;
                    currRow.cells[4].getElementsByTagName("INPUT")[0].value = monthList;

                    //To clear the Existing unchanged values in the calendar
                    for(var tempCol = 0; tempCol < firstDay; tempCol++)
                    {
                        //strCell   = monthName + "_0_" + tempCol; //comment 9NT1587_FC_12.0.2_IUT BUGNo 16904799
						strCell   = monthName + "_0_" + tempCol +  "I"; //added 9NT1587_FC_12.0.2_IUT BUGNo 16904799 
                        //currObj = eval(strCell); ///FCUBS11.1 ITR1 SFR 831 //FCUBS11.2_Cross_Browser#1
				//currObj = eval(document.getElementsByName(strCell)[0]);//FCUBS11.2_Cross_Browser#1 FCUBS_12.1.0_21066833 commented
                currObj = eval(document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__" + monthName + "_0_" + tempCol +  "I")); // FCUBS_12.1.0_21066833 added      
						currObj.value         = "";
                        currObj.className    = gCSSReadOnly;
                    }

                    if(col != 6) { col--; }

                    while(row <= 5)
                    {
                        for(var tempCol = col+1; tempCol < 7; tempCol++)
                        {
                            //strCell   = monthName + "_" + row + "_" + tempCol; //comment 9NT1587_FC_12.0.2_IUT BUGNo 16904799
							strCell   = monthName + "_" + row + "_" + tempCol + "I";  //added 9NT1587_FC_12.0.2_IUT BUGNo 16904799 
                           //currObj = eval(strCell); ///FCUBS11.1 ITR1 SFR 831  //FCUBS11.2_Cross_Browser#1
				    //currObj = eval(document.getElementsByName(strCell)[0]);//FCUBS11.2_Cross_Browser#1 //FCUBS_12.1.0_21066833 commented
					currObj = eval(document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__" + monthName + "_" + row + "_" + tempCol + "I"));// FCUBS_12.1.0_21066833 added
                            currObj.value         = "";
                            currObj.className    = gCSSReadOnly;
                        }

                        tempCol = 0;
                        col     = -1;
                        row++;
                    }
                }
            }
            else if(gAction == "EXECUTEQUERY" || gAction == 'MODIFY' || gAction == '')
            {
		  
                var tblRef = document.getElementById("BLK_LOCAL_HOLIDAY").tBodies[0];
		  //var tblRef = selectNodes(document,'//table[@id="BLK_LOCAL_HOLIDAY"]/tbody/tr/td[3]/input');
                var dayStatus = '';

                for(var monthCnt = 0; monthCnt<12; monthCnt++)
                {
				var cnt = tblRef.rows[monthCnt].cells[3].getElementsByTagName("INPUT")[0].value -1 ; //113_GBPFBN_16202684 added
                   // firstDayInstance = new Date(inYear,monthCnt,1); //113_GBPFBN_16202684 commented
					firstDayInstance = new Date(inYear,cnt,1); //113_GBPFBN_16202684 added
					monthName        = fnGetMonthName(cnt); //113_GBPFBN_16202684 added
                  //  monthName        = fnGetMonthName(monthCnt);  //113_GBPFBN_16202684 commented
                  //  noDays = fnGetDays(monthCnt, inYear); //113_GBPFBN_16202684   commented
				    noDays = fnGetDays(cnt, inYear); //113_GBPFBN_16202684 added
                    //gets the integer equavalent of the particular day
                    firstDay        = firstDayInstance.getDay();
                    col = firstDay; // sets to the first daycnt of the month
                    row = 0;
               if(typeof(tblRef.rows[monthCnt].cells[4].getElementsByTagName("INPUT")[0]) == 'undefined')
			{
                        monthList =    tblRef.rows[monthCnt].cells[4].getElementsByTagName("TEXTAREA")[0].value;
                    }
			else
			{
                    		monthList =    tblRef.rows[monthCnt].cells[4].getElementsByTagName("INPUT")[0].value;
                    }	

                    //BUG#11896253 starts
					//monthList =    tblRef.rows[monthCnt].cells[3].getElementsByTagName("INPUT")[0].value;
					// monthList =    tblRef.rows[monthCnt].cells[2].getElementsByTagName("INPUT")[0].value;
                    //BUG#11896253 ends
                    for(var dayCnt = 1; dayCnt <= noDays ; dayCnt++)
                    {
                        dayStatus = monthList.charAt((dayCnt-1));
                        //strCell   = monthName + "_" + row + "_" + col; //comment 9NT1587_FC_12.0.2_IUT BUGNo 16904799
						strCell   = monthName + "_" + row + "_" + col + "I";   //added 9NT1587_FC_12.0.2_IUT BUGNo 16904799 
                        //currObj = eval(strCell); ///FCUBS11.1 ITR1 SFR 831 //FCUBS11.2_Cross_Browser#1
				currObj = eval(document.getElementsByName(strCell)[0]);//FCUBS11.2_Cross_Browser#1 
                        currObj.value = "";
                        currObj.value = dayCnt;
                        currObj.tabIndex = tabIndex;
                        //currObj.detachEvent('onkeydown',fnToggleFromKey); //FCUBS11.2_Cross_Browser#1
               //currObj.attachEvent('onkeydown',fnToggleFromKey); ///FCUBS11.1 ITR1 SFR 1130
						//currObj.setAttribute('onkeydown',fnToggleFromKey);//FCUBS11.2_Cross_Browser#1
				currObj.removeAttribute('onkeydown'); //FCUBS11.2_Cross_Browser#1
                        tabIndex++;
                       if(dayStatus == 'H')
                        {
                            currObj.className = gCSSHoliday;
                        }
                        else
                        {
                            //currObj.className    = gCSSReadOnly;
                        }
						//9NT1587_FC_12.0.2_IUT BUGNo 16904799 starts --comment starts 
						/*if (dayStatus !=modDayStatus)
						{
							currObj.style.color = gModified;
							currObj.title = modDayStatus;
						}*/						
						//9NT1587_FC_12.0.2_IUT BUGNo 16904799 ends --comment ends
                        if(col == 6)
                        {
                            col = 0;
                            row = row + 1;
                        }
                        else
                        {
                            col = col + 1;
                        }
                    }

                    //To clear the Existing unchanged values and style of the calendar
                    for(var tempCol = 0; tempCol < firstDay; tempCol++)
                    {
                        //strCell   = monthName + "_0_" + tempCol; //comment 9NT1587_FC_12.0.2_IUT BUGNo 16904799
						strCell   = monthName + "_0_" + tempCol + "I"; //added 9NT1587_FC_12.0.2_IUT BUGNo 16904799 
                        //currObj = eval(strCell); ///FCUBS11.1 ITR1 SFR 831 //FCUBS11.2_Cross_Browser#1
				currObj = eval(document.getElementsByName(strCell)[0]);//FCUBS11.2_Cross_Browser#1 
                        currObj.value         = "";
                        currObj.className    = gCSSReadOnly;
                    }

                    if(col != 6) { col--; }

                    while(row <= 5)
                    {
                        tempCol = 0;
                        for(var tempCol = col+1; tempCol < 7; tempCol++)
                        {
                            //strCell   = monthName + "_" + row + "_" + tempCol;  //comment 9NT1587_FC_12.0.2_IUT BUGNo 16904799
							strCell   = monthName + "_" + row + "_" + tempCol + "I"; //added 9NT1587_FC_12.0.2_IUT BUGNo 16904799 
                            //currObj = eval(strCell);///FCUBS11.1 ITR1 SFR 831  //FCUBS11.2_Cross_Browser#1
				    currObj = eval(document.getElementsByName(strCell)[0]);//FCUBS11.2_Cross_Browser#1
 
                            currObj.value         = "";
                            currObj.className    = gCSSReadOnly;
                        }

                        //tempCol = 0;
                        col     = -1;
                        row++;
                    }
                }
            }
		//9NT1620#1203RETRO#19767144 changes starts			
	   else if (gAction == "VIEWMNTLOG") //
            {
                var tblRef = document.getElementById('BLK_LOCAL_HOLIDAY').tBodies[0];
                var dayStatus = '';
				var modDayStatus = '';
				var regExp = new RegExp('[^HW]','g');
				var title = "";			    
                for(var monthCnt = 0; monthCnt<12; monthCnt++)
                {
					var cnt = tblRef.rows[monthCnt].cells[3].getElementsByTagName("INPUT")[0].value -1;
					modifiedMonthList="";
                    //gets the first days instance of the given Month
                    firstDayInstance = new Date(inYear,cnt,1);
                    //gets the Month name
					monthName        = fnGetMonthName(cnt);
                    //monthName        = fnGetMonthName(monthCnt);
                    //gets the numbers of days for the given Month
                    noDays = fnGetDays(cnt, inYear);
                    //gets the integer equavalent of the particular day
                    firstDay        = firstDayInstance.getDay();
                    col = firstDay; // sets to the first daycnt of the month
                    row = 0;					
					
                    if(typeof(tblRef.rows[monthCnt].cells[4].getElementsByTagName("INPUT")[0]) == 'undefined')
					{
						monthList =    tblRef.rows[monthCnt].cells[4].getElementsByTagName("TEXTAREA")[0].value;
						var innerHTML = tblRef.rows[monthCnt].cells[4].getElementsByTagName("TEXTAREA")[0].getAttribute("oldInnerHTML");
						var el = document.createElement(innerHTML);
						if (el.title != '') 
							{
								title = el.title;
								if (!regExp.test(title) && title.length == monthList.length )
									{
										modifiedMonthList = title;
									}
							}
                    }
					else
					{
						monthList =    tblRef.rows[monthCnt].cells[4].getElementsByTagName("INPUT")[0].value;
					   if (tblRef.rows[monthCnt].cells[4].getElementsByTagName("INPUT")[0].title !='') 
					   {
							title = tblRef.rows[monthCnt].cells[4].getElementsByTagName("INPUT")[0].title;
							if (!regExp.test(title) && title.length == monthList.length )
								{
									modifiedMonthList = tblRef.rows[monthCnt].cells[4].getElementsByTagName("INPUT")[0].title;
								}
							}

                    }
					
                    for(var dayCnt = 1; dayCnt <= noDays ; dayCnt++)
                    {
                        dayStatus = monthList.charAt((dayCnt-1));
						if (modifiedMonthList != '')
							modDayStatus= modifiedMonthList.charAt((dayCnt-1));
						else
							modDayStatus = monthList.charAt((dayCnt-1));
                        //strCell   = monthName + "_" + row + "_" + col;
						strCell   = monthName + "_" + row + "_" + col + "I"; 
						currObj = eval(document.getElementsByName(strCell)[0]);
                        currObj.value = "";
                        currObj.value = dayCnt;
                        currObj.tabIndex = tabIndex;
						currObj.removeAttribute('onkeydown');
                        tabIndex++;
                        if(dayStatus == 'H')
                        {
                            currObj.className = gCSSHoliday;
                        }
                        else
                        {
                            //currObj.className    = gCSSReadOnly;
                        }
						if (dayStatus !=modDayStatus)
						{
							currObj.style.color = gModified;
							currObj.title = modDayStatus;
						 }
                        if(col == 6)
                        {
                            col = 0;
                            row = row + 1;
                        }
                        else
                        {
                            col = col + 1;
                        }
                    }

                    //To clear the Existing unchanged values and style of the calendar
                    for(var tempCol = 0; tempCol < firstDay; tempCol++)
                    {
                        //strCell   = monthName + "_0_" + tempCol;
						strCell   = monthName + "_0_" + tempCol + "I";
						currObj = eval(document.getElementsByName(strCell)[0]);//FC11.2,ITR2 SFR512
                        currObj.value         = "";
                        currObj.className    = gCSSReadOnly;
                    }

                    if(col != 6) { col--; }

                    while(row <= 5)
                    {
                        tempCol = 0;
                        for(var tempCol = col+1; tempCol < 7; tempCol++)
                        {
                            //strCell   = monthName + "_" + row + "_" + tempCol;
							strCell   = monthName + "_" + row + "_" + tempCol + "I";
							currObj = eval(document.getElementsByName(strCell)[0]);
                            currObj.value         = "";
                            currObj.className    = gCSSReadOnly;
                        }
                        col     = -1;
                        row++;
                    }					
                }
			} //9NT1620#1203RETRO#19767144 changes ends
        

    }
    else
    {//Year is left blank
        appendErrorCode('ST-COM013','YEAR');
        isValid = false;
    }

    if(isValid == false)
    {
        var msg = buildMessage(gErrCodes);
        alertMessage(msg);
        document.getElementById("YEAR").select();
    }

    gYearRef.tabIndex = tabIndex++;
  //  document.getElementById("BLK_LOCAL_HOLIDAY").tabIndex = tabIndex++;
   // document.forms[0].BTN_EXIT.tabIndex   = tabIndex++;
	 document.getElementsByName("BTN_EXIT")[0].tabIndex   = tabIndex++; //FCUBS11.1 ITR1 SFR 1130
	if(document.getElementsByName("YEAR")[0].readOnly == false) {
    document.getElementsByName("YEAR")[0].readOnly = true;
    }
}

/*
 * Toggle color when the user duble click on the day
 * and
 * Create holiday list of that particular month
 */
function fnToggleColor(currObj)
{
    if(gAction == "NEW" || gAction == "MODIFY")
    {
		
		
        var currObjName = currObj.name;
        var index = currObjName.indexOf("_");
        var day = 1;
		if (currObj.className != gCSSHoliday){
		currObj.className = gCSSReadOnly;
		}
        if(currObj.value != "")
        {
            day = currObj.value;
			var monthName        = currObjName.substring(0, index);
			var month            = fnGetMonthIndex(monthName);
			var loopObj          = null;
			var currMonthCell    = document.getElementById("BLK_LOCAL_HOLIDAY").tBodies[0].rows[month].cells[4].getElementsByTagName("INPUT")[0];
			var inYear           = document.getElementById("BLK_LOCAL_HOLIDAY").tBodies[0].rows[month].cells[2].getElementsByTagName("INPUT")[0].value;
			var firstDayInstance = new Date(inYear,month,1);

			col                  = firstDayInstance.getDay();

            if(currObj.className == gCSSReadOnly)
            {
                currObj.className = gCSSHoliday;
				currMonthCell.value = currMonthCell.value.substring(0,day-1) + "H" + currMonthCell.value.substring(day,currMonthCell.value.length)
				
            }
            else
            {
                currObj.className = gCSSReadOnly;
				currMonthCell.value = currMonthCell.value.substring(0,day-1) + "W" + currMonthCell.value.substring(day,currMonthCell.value.length)
				
            }
        }
    }
}

/*
 * Funtion to clear the calendar and set its default style
 */
function fnResetStyle()
{
    var monthName = "";
    var strCell   = "";
    var currObj   = null;
    gYearRef      = document.getElementsByName("YEAR")[0];
    gLblYearOf    = document.getElementsByName("YEAR")[0];
    
    for(var monthCnt = 0; monthCnt < 12 ;monthCnt++)
    {
        monthName = fnGetMonthName(monthCnt);

        for(var rowCnt = 0; rowCnt < 6; rowCnt++)
        {
            for(var colCnt = 0; colCnt < 7;colCnt++)
            {
                //strCell = monthName + "_" + rowCnt + "_" + colCnt; //comment 9NT1587_FC_12.0.2_IUT BUGNo 16904799
				strCell = monthName + "_" + rowCnt + "_" + colCnt + "I";  //added 9NT1587_FC_12.0.2_IUT BUGNo 16904799
                //currObj = eval(strCell);      ///FCUBS11.1 ITR1 SFR 831 //FCUBS11.2_Cross_Browser#1
		    currObj = eval(document.getElementsByName(strCell)[0]);//FCUBS11.2_Cross_Browser#1
                currObj.className = gCSSReadOnly;
                currObj.tabIndex  = -1;
            }
        }
    }

    gYearRef.tabIndex = -1;
 //   document.getElementById("BLK_LOCAL_HOLIDAY").tabIndex = -1;
   // document.forms[0].BTN_EXIT.tabIndex = -1; ///FCUBS11.1 ITR1 SFR 831
	document.getElementsByName("BTN_EXIT")[0].tabIndex = -1;   ///FCUBS11.1 ITR1 SFR 1130
}

/*
 * Function  to validate year
 */
 /*
function fnValidateYear(year)		//Commented as a part of FC8.0LOT2ITR2 SFR 888
{
    var isValid = true;
    if(year != '' )
    {
        		
		if(isNumeric(year))
        {				
            if(year < 2000)
            {
                appendErrorCode('ST-CCH01','YEAR');
                isValid = true;  //Changed from false to true in order to save calender earlier than 2000.
                document.getElementById("YEAR").select();
            }
        }        
		else
        {
            appendErrorCode('ST-COM015','YEAR');
            isValid = false;
            document.getElementById("YEAR").select();
        }		
    }
    return isValid;

}
*/		//Commented as a part of FC8.0LOT2ITR2 SFR 888


/*
 * used to toggle the between holiday to working day using SPACEBAR
 */
function fnToggleFromKey()
{
    var srcElem = event.srcElement;
    if(event.keyCode == 32 && srcElem.value != "")
    {
        fnToggleColor(srcElem);
    }
    event.cancelBubble = true;
}



function fnPrevYear()
{
    if (gAction == "NEW")
    {
		//if(document.getElementsByName("YEAR")[0].value == "") //FCUBS_12.1.0_21066833 commented
		if(document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEARI").value == "")  //FCUBS_12.1.0_21066833 added
		{
			alert("Please Enter valid Year");
			return false;
		}	
		// var inputYear = document.getElementsByName("YEAR")[0].value; //FCUBS_12.1.0_21066833 commented
		var inputYear = document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEARI").value;  // FCUBS_12.1.0_21066833 added
		var curYear2 = parseInt(inputYear);
        curYear2 = curYear2 - 1;
        // document.getElementsByName("YEAR")[0].value = curYear2; //FCUBS_12.1.0_21066833 commented
		document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEARI").value=curYear2; // FCUBS_12.1.0_21066833 added
		document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEAR").value=curYear2;  // FCUBS_12.1.0_21066833 added
        
    }
	displayCalendar();
return true;
}


function fnNextYear()
{
    if (gAction == "NEW")
    {
		// if(document.getElementsByName("YEAR")[0].value == "") //FCUBS_12.1.0_21066833 commented
		if(document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEARI").value == "")  // FCUBS_12.1.0_21066833 added
		{
			alert("Please Enter valid Year");
			return false;
		}
		//var inputYear = document.getElementsByName("YEAR")[0].value; //FCUBS_12.1.0_21066833 commented
		var inputYear = document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEARI").value; // FCUBS_12.1.0_21066833 added
		var curYear2 = parseInt(inputYear);
        curYear2 = curYear2 + 1;
       // document.getElementsByName("YEAR")[0].value = curYear2; //FCUBS_12.1.0_21066833 commented
	   document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEARI").value=curYear2;  // FCUBS_12.1.0_21066833 added
		document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__YEAR").value=curYear2;   // FCUBS_12.1.0_21066833 added
    }
	displayCalendar();
return true;	
}

function fnCalHolHeading() {
    var l_hol_head_list = new Array("SUNDAY1", "MONDAY1", "TUESDAY1", "WEDNESDAY1", "THURSDAY1", "FRIDAY1", "SATURDAY1",
                        "SUNDAY2", "MONDAY2", "TUESDAY2", "WEDNESDAY2", "THURSDAY2", "FRIDAY2", "SATURDAY2",
                        "SUNDAY3", "MONDAY3", "TUESDAY3", "WEDNESDAY3", "THURSDAY3", "FRIDAY3", "SATURDAY3");
    document.getElementById("BLK_LOCAL_HOLIDAY_MASTER").style.display="none";
    for (var i=0; i<l_hol_head_list.length; i++) {    
        document.getElementsByName(l_hol_head_list[i])[0].className = "TEXTCalHead";
    }
}
function setCss()
{
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

//9NT1620_12.0.3_18999439 function Start
function fnDefaultWeeklyHolidays(){
	 try
	 {
		debugs("In fnDefaultWeeklyHolidays", "A");
		var fcjRequestDOM;
		var fcjResponseDOM;

		var oldAction = gAction;
		var holList = "0-6";
		gAction = 'DEFAULT';
		appendData();
		fcjRequestDOM = buildUBSXml();
		fcjResponseDOM = fnPost(fcjRequestDOM,servletURL,functionId);
		var wklyHolydaysList =getNodeText(selectSingleNode(fcjResponseDOM,"//FCUBS_RES_ENV/FCUBS_BODY/REC/FV"));
			
		if  (wklyHolydaysList)
		{
			wklyHolydaysList = wklyHolydaysList.split('~').join('');
			var wekholsprtr= wklyHolydaysList.substring(7,10);
			gWeeklyHol1 = wklyHolydaysList.substring(7,8);
			gWeeklyHol2 = wklyHolydaysList.substring(9,10);
			document.getElementById("BLK_LOCAL_HOLIDAY_MASTER__WEEKLY_HOLIDAYS").value=wekholsprtr.replace('-','');
			gAction = oldAction;
		}	
	  }catch(e) 
	  {
	  	  gWeeklyHol1 = 0 ; 	
		  gWeeklyHol2 = 6 ;		 
		  gAction = oldAction;
		  debugs("TAP Exception In frontend", "A")
		  debugs("Error: " + e.description,"A" );  
	  }
      
}
//9NT1620_12.0.3_18999439 function End

//9NT1587_12.0.2_17211558 start
function fnPostLoad_CVS_MAIN_VIEWLOG() {

	 var codes = new Array();

	 createDOM(dbStrRootTableName);

	 codes = parent.screenArgs['KEY'].split("|");

	 if (codes.length > 0)
	 {
		  document.getElementsByName("BRANCH_CODE")[0].value = codes[0];
		  document.getElementsByName("YEAR")[0].value = codes[1];
	 }
	  document.getElementsByName("MODNO")[0].value = parent.screenArgs['MOD_NO'];

	  gAction = 'VIEWMNTLOG';
	  functionId = 'STDLOCHL' ;  

	var relationArray = new Array(); 			// {Table Name} is the array index, {Parent Table Name}~{Relation} is the array value 
relationArray['BLK_LOCAL_HOLIDAY_MASTER'] = ""; 
relationArray['BLK_LOCAL_HOLIDAY'] = "BLK_LOCAL_HOLIDAY_MASTER~N"; 

var dataSrcLocationArray = new Array(); 	// Array of all Data Sources used in the screen 
dataSrcLocationArray[0] = "BLK_LOCAL_HOLIDAY_MASTER"; 
dataSrcLocationArray[1] = "BLK_LOCAL_HOLIDAY"; 


	//appendData(document.getElementById("TBLPageAll"));
	appendTextFieldValue(document.getElementsByName('BRANCH_CODE')[0], 1, 'BLK_LOCAL_HOLIDAY_MASTER');
	appendTextFieldValue(document.getElementsByName('YEAR')[0], 1, 'BLK_LOCAL_HOLIDAY_MASTER');	
	appendTextFieldValue(document.getElementsByName('MODNO')[0], 1, 'BLK_LOCAL_HOLIDAY_MASTER');	


	//  dbFCJDOM.loadXML(dbDataDOM.xml);
	fcjRequestDOM = buildUBSXml();

	// Post the XML to Server
	fcjResponseDOM = fnPost(fcjRequestDOM,servletURL,functionId);

	if(fcjResponseDOM) {
		var msgStatus   =getNodeText( selectSingleNode(fcjResponseDOM,"FCUBS_RES_ENV/FCUBS_HEADER/MSGSTAT"));

		if (msgStatus == 'FAILURE') {
			var messageNode = selectSingleNode(fcjResponseDOM,"FCUBS_RES_ENV/FCUBS_BODY/FCUBS_ERROR_RESP");
		    var returnVal = displayResponse(messageNode);
	    }

		if(msgStatus == 'SUCCESS') {
			var authResDom = fnGetDataXMLFromFCJXML(fcjResponseDOM, 1);
			setDataXML(getXMLString(authResDom));
			mainWin.Authdom = null;
			resetIndex();
			//showTabData_Viewchg();
			viewMnt = true;
			showData();
	        gAction = "";
		}
	//disableForm();
  }
}
//9NT1587_12.0.2_17211558 end

