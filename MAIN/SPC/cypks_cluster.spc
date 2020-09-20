create or replace package cypks_cluster as
/*
------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2008 - 2015  Oracle and/or its affiliates.  All rights reserved.
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
CHANGE HISTORY
NEW PACKAGE

     Changed On          : Anjali
    Changed On          : 11-Apr-2014
    Change Description  : WUIB Customization
    Search string       : Extensibility changes

    Changed On          : Rajalekshmi G
    Changed On          : 04-June-2015
    Change Description  : Retro for-21126695 - VAT_ADV IN CASE OF REVERSAL TRANSACTION
    Search string       : bug#21198923
	  **
	  Changed By         :  Vinutha Kini
	  Changed On		 :  24-Nov-2016
	  Change Description :  Retro FCUBS_12.2_Support changes
	  Search String		 :  FCUBS_Retro_12.2Supp__12.3Core_1  
------------------------------------------------------------------------------------------------
*/  
    --1202_18479516 changes  Starts
    FUNCTION fn_pre_hisRate (
            pBranchCode IN      STTMS_Core_BRANCH.BRANCH_CODE%TYPE,
            pCcy1       IN      CYTMS_CCY_DEFN.CCY_CODE%TYPE,
            pCcy2       IN      CYTMS_CCY_DEFN.CCY_CODE%TYPE,
            pRateType   IN      CYTMS_RATE_TYPE.CCY_RATE_TYPE%TYPE,
            pIndicator  IN          CHAR,
            pDate       IN      DATE ,
            pRate       IN OUT  CYTMS_RATES.MID_RATE%TYPE,
            pRateFlag   IN OUT  NUMBER,
            pErrorCode  IN OUT  ERTBS_MSGS.ERR_CODE%TYPE )
    RETURN BOOLEAN;
    
   FUNCTION fn_post_hisRate (
            pBranchCode IN      STTMS_Core_BRANCH.BRANCH_CODE%TYPE,
            pCcy1       IN      CYTMS_CCY_DEFN.CCY_CODE%TYPE,
            pCcy2       IN      CYTMS_CCY_DEFN.CCY_CODE%TYPE,
            pRateType   IN      CYTMS_RATE_TYPE.CCY_RATE_TYPE%TYPE,
            pIndicator  IN          CHAR,
            pDate       IN      DATE ,
            pRate       IN OUT  CYTMS_RATES.MID_RATE%TYPE,
            pRateFlag   IN OUT  NUMBER,
            pErrorCode  IN OUT  ERTBS_MSGS.ERR_CODE%TYPE )
    RETURN BOOLEAN;
    
    --1202_18479516 changes Ends
     --bug#21198923 starts
FUNCTION pre_csfn_format_amt (
        pCcy    IN  CYTMS_CCY_DEFN.ccy_code%TYPE, 
        pAmt    IN NUMBER)
RETURN VARCHAR2;

FUNCTION post_csfn_format_amt (
        pCcy    IN  CYTMS_CCY_DEFN.ccy_code%TYPE, 
        pAmt    IN NUMBER)
RETURN VARCHAR2;    
    --bug#21198923 ends
	
	--FCUBS_Retro_12.2Supp__12.3Core_1 starts	
	FUNCTION fn_pre_amt1_to_amt2 (
	pBranch 	IN	STTMS_CORE_BRANCH.BRANCH_CODE%TYPE,
	pCcy1 		IN 	CYTMS_CCY_DEFN.CCY_CODE%TYPE,
	pCcy2 		IN 	CYTMS_CCY_DEFN.CCY_CODE%TYPE,
	pRateType 	IN 	CYTMS_RATE_TYPE.CCY_RATE_TYPE%TYPE,
	pRateIndicator 	IN 	varchar2,
	pAmount1 	IN 	number,
	pRounding 	IN 	CHAR,
	pAmount2 	IN OUT 	number,
	pRate		IN OUT	CYTMS_RATES.MID_RATE%TYPE,
	pErrorCode	IN OUT	ERTBS_MSGS.ERR_CODE%TYPE) 
    return BOOLEAN;

 	FUNCTION fn_post_amt1_to_amt2 (
	pBranch 	IN	STTMS_CORE_BRANCH.BRANCH_CODE%TYPE,
	pCcy1 		IN 	CYTMS_CCY_DEFN.CCY_CODE%TYPE,
	pCcy2 		IN 	CYTMS_CCY_DEFN.CCY_CODE%TYPE,
	pRateType 	IN 	CYTMS_RATE_TYPE.CCY_RATE_TYPE%TYPE,
	pRateIndicator 	IN 	varchar2,
	pAmount1 	IN 	number,
	pRounding 	IN 	CHAR,
	pAmount2 	IN OUT 	number,
	pRate		IN OUT	CYTMS_RATES.MID_RATE%TYPE,
	pErrorCode	IN OUT	ERTBS_MSGS.ERR_CODE%TYPE) 
    return BOOLEAN;
	
	FUNCTION fn_pre_getRate(
		pBranch		IN	STTMS_CORE_BRANCH.BRANCH_CODE%TYPE,
		pCcy1		IN 	CYTMS_CCY_DEFN.CCY_CODE%TYPE,
		pCcy2		IN 	CYTMS_CCY_DEFN.CCY_CODE%TYPE,
		pRateType		IN 	CYTMS_RATE_TYPE.CCY_RATE_TYPE%TYPE,
		pIndicator	IN   CHAR,
		pDate		IN	DATE,
		pBranchDate	IN	DATE ,
		pRate		IN OUT   	CYTMS_RATES.MID_RATE%TYPE,
		pRateFlag		IN OUT	NUMBER,
		pErrorCode	IN OUT 	ERTBS_MSGS.ERR_CODE%TYPE )
	return BOOLEAN;
  
   	FUNCTION fn_post_getRate(
		pBranch		IN	STTMS_CORE_BRANCH.BRANCH_CODE%TYPE,
		pCcy1		IN 	CYTMS_CCY_DEFN.CCY_CODE%TYPE,
		pCcy2		IN 	CYTMS_CCY_DEFN.CCY_CODE%TYPE,
		pRateType		IN 	CYTMS_RATE_TYPE.CCY_RATE_TYPE%TYPE,
		pIndicator	IN   CHAR,
		pDate		IN	DATE,
		pBranchDate	IN	DATE ,
		pRate		IN OUT   	CYTMS_RATES.MID_RATE%TYPE,
		pRateFlag		IN OUT	NUMBER,
		pErrorCode	IN OUT 	ERTBS_MSGS.ERR_CODE%TYPE )
	return BOOLEAN;
    --FCUBS_Retro_12.2Supp__12.3Core_1 ends
END cypks_cluster;
/
CREATE OR REPLACE SYNONYM cypkss_cluster FOR cypks_cluster
/