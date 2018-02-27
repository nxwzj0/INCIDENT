<?php // autotool_migration Ver3 20130111195550 このファイルは自動化ツールにより編集されました ?>
<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php
//	共通インクルードファイル
//--------------------------------------------------------------------
//	環境別の定数定義
//$CONFIG_FILE = str_replace(":","_",$HTTP_HOST) . ".conf";
//	INC_REL_PATHはenv.incで定義済み
//require("$INC_REL_PATH/$CONFIG_FILE");
//	ディレクトリ別の定数定義インクルード
//if( is_file($CONFIG_FILE) ){
//	include($CONFIG_FILE);
//}
//現在のパスを保持する変数
$COMMON_NOW_PATH = preg_replace("/(.*)(\/.*)/si","\\1",$GLOBALS["PATH_TRANSLATED"]);

//--------------------------------------------------------------------
//PHP環境設定
if( strtoupper($COMMON_SYSTEM_TYPE) != "WINDOWS" ){
	ini_set("include_path",ini_get("include_path").":$COMMON_INC_PATH:$COMMON_DEFINC_PATH");
}else{
	ini_set("include_path",ini_get("include_path").";$COMMON_INC_PATH;$COMMON_DEFINC_PATH");
}

//--------------------------------------------------------------------
//共通クラスのインクルード
require("cls_Common.inc");

//--------------------------------------------------------------------
//エラーハンドラ
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
		print "<hr><b>エラーが発生しました。実行を中断します。</b><br>\n";
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
//共通オブジェクトの生成
$LOG = new Logging($COMMON_DEBUG_LOG_PATH);
$LOG->log_request_data();

//--------------------------------------------------------------------
//共通関数

//SQLを実行して、最初の1行を連想配列で返す
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
//SQLを実行する(UPDATE,INSERT,DELETEなどで使用)
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
