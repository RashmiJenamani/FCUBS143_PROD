INSERT INTO STTM_JOB_DEFINITION
(JOB_CODE, JOB_GROUP, JOB_DESCRIPTION, SCHEDULER, TRG_TYPE, CRON_EXPR, JOB_TYPE, JOB_CLASS_OR_PROC, SIMPLE_TRG_REPEAT, SIMPLE_TRG_FREQUENCY, TRIGGER_LISTENER, ACTIVE, JNDI_NAME, LOGGING_REQD, AUTH_STAT, CHECKER_DT_STAMP, CHECKER_ID, MAKER_DT_STAMP, MOD_NO, ONCE_AUTH, RECORD_STAT, MAKER_ID, SCHED_TYPE, VETO_BLK_TRG, PRIORITY, MSG_QUEUE, MAX_NO_INSTANCES, STARTUP_MODE)
 VALUES 
('PDBSCHEDULER',
'EMS',
'PDB Scheduler Service',
'SchedulerFactory',
'S',
'50 * * * * ?',
'JAVA',
'com.ofss.scheduler.quartz.PDBScheduler.PDBSchedulerQrtz.java',
-1,60,'','Y',
'jdbc/fcjdevDS',
'Y',
'A',
TO_DATE('06/28/2018 11:17:23','MM/DD/YYYY HH24:MI:SS'),'VANDIT08',
TO_DATE('06/28/2018 11:17:23','MM/DD/YYYY HH24:MI:SS'),1,'Y',
'O',
'VANDIT08',
'QUARTZ',
'N',
5,'',3,'A'
)
/