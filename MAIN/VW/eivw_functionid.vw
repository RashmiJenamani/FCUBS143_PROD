create or replace view eivw_functionid as
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
select function_id ,func_desc, module
from   (select distinct a.function_id
			  ,a.main_menu || ' ' || a.sub_menu_1 || ' ' || a.sub_menu_2 func_desc,
              b.module
		from   smtbs_function_description a
			  ,smtbs_menu b
		where  
		      (ltrim(rtrim(a.main_menu)) is not null or executable_type = 'S')
		and    a.function_id = b.function_id		
		and    b.type_string = 'B'
		AND a.Lang_Code = global.lang  -- NLS_11.4
		union
		select report_batch_code function_id
			  ,report_batch_desc func_desc,module
		from   aetm_eoc_reports_master
		where  auth_stat = 'A'
		and    record_stat = 'O')
/