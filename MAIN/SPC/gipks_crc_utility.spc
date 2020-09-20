CREATE OR REPLACE PACKAGE GIPKS_CRC_UTILITY AS
/*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Universal Banking Software Product.
** Copyright © 2008 - 2009  Oracle and/or its affiliates.  All rights reserved.
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
  -------------------------------------------------------------------------------------------------------
  CHANGE HISTORY

  SFR Number         :
  Changed By         :
  Change Description :

  -------------------------------------------------------------------------------------------------------
  */



FUNCTION createChecksum (file  IN  VARCHAR2) RETURN VARCHAR2
AS LANGUAGE JAVA
NAME 'MoveFile.createChecksum (java.lang.String) return java.lang.String';

FUNCTION createAdlerChecksum (file  IN  VARCHAR2) RETURN VARCHAR2
AS LANGUAGE JAVA
NAME 'MoveFile.createAdlerChecksum (java.lang.String) return java.lang.String';
END GIPKS_CRC_UTILITY;
/
create or replace synonym GIPKSS_CRC_UTILITY FOR GIPKS_CRC_UTILITY
/