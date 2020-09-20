CREATE OR REPLACE FORCE VIEW SMVW_CONSOLIDATED_USERROLEPDB AS
/*------------------------------------------------------------------------------------------
** This source is part of the Oracle FLEXCUBE Software Product.
** Copyright (R) 2018 , Oracle and/or its affiliates.  All rights reserved
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
---------------------------------------------------------------------------------------------*/
SELECT a.role_id, a.user_id, branch_code, a.auth_stat
  FROM containers(smtbs_user_role) a, containers(smtbs_role_master) b, containers(smtb_user) m
 WHERE a.role_id = b.role_id
   AND b.auth_stat = 'A'
   AND m.user_id = a.user_id
   AND m.record_stat = 'O'
   AND m.once_auth = 'Y'
   AND b.record_stat = 'O'
   AND b.once_auth = 'Y'
UNION
SELECT a.role_id, a.user_id, a.auth_stat, n.branch_code
  FROM containers(smtb_user_central_roles) a,
       (SELECT a.user_id, b.branch branch_code
          FROM containers(smtb_user )a, containers(smtb_user_branches) b
         WHERE a.branches_allowed = 'A'
           AND b.user_id = a.user_id
           AND a.record_stat = 'O'
           AND a.once_auth = 'Y'
        UNION ALL
        SELECT a.user_id, b.branch_code
          FROM containers(smtb_user) a, containers(sttm_core_branch) b
         WHERE a.branches_allowed = 'd'
           AND b.record_stat = 'O'
           AND b.once_auth = 'Y'
           AND a.record_stat = 'O'
           AND a.once_auth = 'Y'
           AND NOT EXISTS (SELECT 1
                  FROM containers(smtb_user_branches) c
                 WHERE c.user_id = a.user_id
                   AND c.branch = b.branch_code)) n
 WHERE a.user_id = n.user_id
/
create or replace synonym SMVWS_CONSOLIDATED_USERROLEPDB for SMVW_CONSOLIDATED_USERROLEPDB 
/