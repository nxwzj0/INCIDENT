<?php // autotool_migration Ver3 20130111195550 ���Υե�����ϼ�ư���ġ���ˤ���Խ�����ޤ��� ?>
<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php
//	���̥��󥯥롼�ɥե�����
//--------------------------------------------------------------------
//	�Ķ��̤�������
//$CONFIG_FILE = str_replace(":","_",$HTTP_HOST) . ".conf";
//	INC_REL_PATH��env.inc������Ѥ�
//require("$INC_REL_PATH/$CONFIG_FILE");
//	�ǥ��쥯�ȥ��̤����������󥯥롼��
//if( is_file($CONFIG_FILE) ){
//	include($CONFIG_FILE);
//}
//���ߤΥѥ����ݻ������ѿ�
$COMMON_NOW_PATH = preg_replace("/(.*)(\/.*)/si","\\1",$GLOBALS["PATH_TRANSLATED"]);

//--------------------------------------------------------------------
//PHP�Ķ�����
if( strtoupper($COMMON_SYSTEM_TYPE) != "WINDOWS" ){
	ini_set("include_path",ini_get("include_path").":$COMMON_INC_PATH:$COMMON_DEFINC_PATH");
}else{
	ini_set("include_path",ini_get("include_path").";$COMMON_INC_PATH;$COMMON_DEFINC_PATH");
}

//--------------------------------------------------------------------
//���̥��饹�Υ��󥯥롼��
require("cls_Common.inc");

//--------------------------------------------------------------------
//���顼�ϥ�ɥ�
function CustomErrorHandler($errno, $errmsg, $filename, $linenum, $vars){
	/*
	1 E_ERROR
	2 E_WARNING
	4 E_PARSE
	8 E_NOTICE
	16 E_CORE_ERROR
	32 E_CORE_WARNING
	64 E_COMPILE_ERROR
	128 E_COMPILE_WARNING
	*/
	$err_str = "ERR: $errno $errmsg $filename $linenum";
	switch( $errno ){
	case E_NOTICE:
		break;
	case E_WARNING:
	case E_ERROR:
		$log = new Logging($GLOBALS["COMMON_DEBUG_LOG_PATH"]);
		$log->log_request_data(TRUE);
		$log->write($err_str,TRUE);
		if( stristr($errmsg,"ORA-") ){
			$log->write("Oracle Server: ".$GLOBALS["COMMON_ORA_SERVER"]);
			$log->write("Oracle User: ".$GLOBALS["COMMON_ORA_USER"]);
			$log->write("Oracle Passwd: ".$GLOBALS["COMMON_ORA_PASSWD"]);
			$log->write($GLOBALS["RECENT_SQL"]);
		}
	default:
		print "<hr><b>���顼��ȯ�����ޤ������¹Ԥ����Ǥ��ޤ���</b><br>\n";
		print "<div>$err_str</div>";
		if( stristr($errmsg,"ORA-") ){
			$log->write("Oracle Server: ".$GLOBALS["COMMON_ORA_SERVER"]);
			$log->write("Oracle User: ".$GLOBALS["COMMON_ORA_USER"]);
			$log->write("Oracle Passwd: ".$GLOBALS["COMMON_ORA_PASSWD"]);
			$log->write($GLOBALS["RECENT_SQL"]);
		}
		exit;
		break;
	}
}
set_error_handler("CustomErrorHandler");

//--------------------------------------------------------------------
//���̥��֥������Ȥ�����
$LOG = new Logging($COMMON_DEBUG_LOG_PATH);
$LOG->log_request_data();

//--------------------------------------------------------------------
//���̴ؿ�

//SQL��¹Ԥ��ơ��ǽ��1�Ԥ�Ϣ��������֤�
function CMN_GetSqlFirstResult($sql){
	$CON = new OraConnection();
	$CUR = new OraCursor($CON->getConnection());
	if( $CUR->open_ex($sql) ){
		if( $CUR->get($rslt) ){
			return $rslt;
		}
		$CUR->close();
	}
	$CON->close();
}
//SQL��¹Ԥ���(UPDATE,INSERT,DELETE�ʤɤǻ���)
function CMN_ExecSql($sql){
	$CON = new OraConnection();
	$CUR = new OraCursor($CON->getConnection());
	if( $CUR->open_ex($sql) ){
		$CUR->close();
	}
	$CON->close();
}
function CMN_SetOracleConnection($username,$password,$server){
	$GLOBALS["COMMON_ORA_USER"] = $username;
	$GLOBALS["COMMON_ORA_PASSWD"] = $password;
	$GLOBALS["COMMON_ORA_SERVER"] = $server;
}
?>