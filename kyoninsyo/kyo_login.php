<?php // autotool_migration Ver3 20130111195550 このファイルは自動化ツールにより編集されました ?>
<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php
//*****************************************************************************
//	システム名　　　：認証システム共通化
//	処理名　　　　　：共通認証 ログイン呼出／受付処理
//	HTMLID　　　　　：kyo_login.php
//	作成日付・作成者：2006-11-14 adf.kama
//	修正履歴　　　　：2007-09-06 adf.kama 検証モード追加対応
//	　　　　　　　　：2007-11-19 adf.kama REFERERが通知されない一部FFCユーザ等の暫定処置
//*****************************************************************************
function CMN_DispError($title,$msg){
	global $SYSTEM_HTML_CHARSET;

	//ログ出力
	$err_str=$title.":".$msg;
	require_once("env.inc");
	$log = new Logging($GLOBALS["COMMON_DEBUG_LOG_PATH"]);
	$log->log_request_data(TRUE);
	$log->write($err_str,TRUE);
	//ログ出力

	print <<<HTML_ERR
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset={$SYSTEM_HTML_CHARSET}">
<title>{$title}</title>
</head>
<body>
<form name="fmerr">
<center><br>
<span style="font-size:12pt;font-weight:bold;">{$msg}<br></span>
<br>
<!--
<input type="button" value="戻る" onclick="window.history.go(-2)">
-->
</center>
</form>
</body>
</html>
HTML_ERR;
}

function CMN_GetCookie($name){
// HTTP_COOKIE_VARS対応 autotool_migration 20130111195550 
//	global $HTTP_COOKIE_VARS;
	global $_COOKIE;
// HTTP_COOKIE_VARS対応 autotool_migration 20130111195550 
//	return $HTTP_COOKIE_VARS[$name];
	return $_COOKIE[$name];
}
//--------------------------------------------------------------------
//グローバル変数定義
//サーバ環境別の定数定義インクルード
if(!$CONFIG_FILE){
	$CONFIG_FILE = $SERVER_ADDR."_".$SERVER_PORT.".conf";
}
// $INC_REL_PATHはenv.incで定義済み
//require("$INC_REL_PATH/$CONFIG_FILE");
//ディレクトリ別の定数定義インクルード
if( is_file($CONFIG_FILE) ){
	include($CONFIG_FILE);
}else{
	CMN_DispError("共通認証呼出しエラー","設定ファイルの読込に失敗しました。");
	exit;
}

//if( $_SERVER["REQUEST_METHOD"] != "POST" ){
// HTTP_SERVER_VARS対応 autotool_migration 20130111195550 
//if( $HTTP_SERVER_VARS["REQUEST_METHOD"] != "POST" ){
if( $_SERVER["REQUEST_METHOD"] != "POST" ){
	CMN_DispError("共通認証呼出しエラー","この要求を受付けることができません。");
	exit;
}
//2007-09-06 add 共通認証以外からのアクセスを拒否
if( $syoriMode == "kyoninsyo_return" ){
	$ref_str = $_SERVER["HTTP_REFERER"];
// HTTP_SERVER_VARS対応 autotool_migration 20130111195550 
//	if( !$ref_str ) $ref_str = $HTTP_SERVER_VARS["HTTP_REFERER"];
	if( !$ref_str ) $ref_str = $_SERVER["HTTP_REFERER"];
	$pattern = $KYONINSYO_SERVER_REFERER;
	if( $ref_str ){
		if( !preg_match("/".$pattern."/",$ref_str) ){
			CMN_DispError("共通認証呼出しエラー","共通認証サーバ以外からの要求は受付けることができません。");
			exit;
		}
	}else{
		//2007.11.19 REFERERが通知されない場合、リモートアドレスが10.xxx.xxx.xxx以外であればアクセス許可
		$remote_str = $_SERVER["REMOTE_ADDR"];
// HTTP_SERVER_VARS対応 autotool_migration 20130111195550 
//		if( !$remote_str ) $remote_str = $HTTP_SERVER_VARS["REMOTE_ADDR"];
		if( !$remote_str ) $remote_str = $_SERVER["REMOTE_ADDR"];
		if( substr($remote_str,0,3)=="10." ){
			CMN_DispError("共通認証呼出しエラー","対象外リモートアドレスのため要求は受付けることができません。");
			exit;
		}
	}
}
//--------------------------------------------------------------------
//システム一時停止状態か
if( $SYSTEM_OFFLINE_FLG[$kyoninsyo_request_key] && $SYSTEM_OFFLINE_MESSAGE_URL[$kyoninsyo_request_key] ){
	include($SYSTEM_OFFLINE_MESSAGE_URL[$kyoninsyo_request_key]);
	exit;
}else if( $SYSTEM_OFFLINE_FLG["kyoninsyo_return"] && $SYSTEM_OFFLINE_MESSAGE_URL["kyoninsyo_return"] ){
	include($SYSTEM_OFFLINE_MESSAGE_URL["kyoninsyo_return"]);
	exit;
}

//2007-09-06 add DB登録用クラスインクルード
require("env.inc");

//応答処理
if( $syoriMode != "kyoninsyo_return" ){

	//*************************
	//共通認証ログイン呼出
	//*************************
	//ログイン後に呼出すＵＲＬの索引キーを指定
	if( !strlen($kyoninsyo_request_key) || !$SYSTEM_ORIGINAL_URL[$kyoninsyo_request_key] ){
		CMN_DispError("共通認証呼出しエラー","指定内容に不正があるため要求を受付けることができません。");
		exit;
	}
	$syoriMode = "kyoninsyo_return";
	$reqKey = $kyoninsyo_request_key;

	// ログインURLを取得
	$POST_ACTION_STR = $KYONINSYO_LOGIN_URL;

	/*********************************
	* 共通認証サーバ切替対応　ここから
	**********************************/
	// 接続先サーバURL定義ファイル
	$fileUrl = "http://".$SERVER_ADDR."/camsUrl.txt";
	// ファイルオープン
	$tmp = set_error_handler("file_open_error_handler");
	$fp = @fopen($fileUrl,"rb");
	set_error_handler($tmp);
	if( $fp !== false ){
		// 定義されているURLを取得
		$retUrl = fread( $fp, 4096 );
		// 認証チェック処理クローズ
		fclose($fp);

		/** 置換対象の文字列 ***/
		$pattern = "w50h-bnvcrtf.metawater.co.jp";
		//$pattern = "10.190.39.16";

		if( trim($retUrl) !== "" ){
			// ログインURLを置換する
// ereg_replace対応 autotool_migration 20130111195550 
//			$POST_ACTION_STR = ereg_replace($pattern, trim($retUrl), $POST_ACTION_STR);
			$POST_ACTION_STR = preg_replace("/".$pattern."/",  trim($retUrl), $POST_ACTION_STR);
		}
	}
	/*********************************
	* 共通認証サーバ切替対応　ここまで
	**********************************/

// HTTP_POST_VARS対応 autotool_migration 20130111195550 
//	foreach( $GLOBALS["HTTP_POST_VARS"] as $key => $val ){
	foreach( $_POST as $key => $val ){
		if( !is_array($val) ){
			$POST_ACTION_STR .= "&".$key."=".$val;
		}
	}
	$POST_ACTION_STR .= "&syoriMode=".$syoriMode;
	$POST_ACTION_STR .= "&reqKey=".$reqKey;

//	if( $COOKIE_SAVE_MODE == "1" ){
//		// ファイルCookieの場合はパラメータにCookieから取得したセッションIDをセットする
//		$sId = CMN_GetCookie("CAMS_LOGIN_ID");
//		if( $sId ){
//			$POST_ACTION_STR .= "&sId=".$sId;
//		}
//	}

	//呼出し
	header("Location:$POST_ACTION_STR");
	exit;

}else{
	//共通認証からの応答時
	//*************************
	//共通認証ログイン通知受付
	//*************************

	if( strcmp($no_login,"1") != 0 ){
		// ログイン画面非表示モードの場合はUID無しの場合もあるため
		//パラメタ:UID,UPASSが渡ってくるはず
		if( !strlen($UID) ){
			CMN_DispError("共通認証応答エラー","共通認証が失敗しました。");
			exit;
		}

		if( $LOGIN_ID == "" ){
			$LOGIN_ID = $LOGINID;
		}
		// パラメタ:LOGIN_ID
		if( !strlen($LOGIN_ID) ){
			CMN_DispError("共通認証応答エラー","共通認証が失敗しました。");
			exit;
		}
	}

	if( !$SYSTEM_ORIGINAL_URL[$reqKey] ){
		CMN_DispError("共通認証応答エラー","ＵＲＬ呼出しに失敗しました。");
		exit;
	}else{
		$action_str = $SYSTEM_ORIGINAL_URL[$reqKey];
	}

	//2007-09-06 add 検証モードログインの場合、ログ出力
	if( $reqKey=="kensyo_login" && strlen($MNGID) ){
		$ip_str = $_SERVER["REMOTE_ADDR"];
		if( !$ip_str ) $ip_str = $REMOTE_ADDR;
		$INS_SQL_LOGIN=<<<SQL1
insert into KYONINSYO_KENSYOLOGIN(ログイン日,管理者ID,検証用ID,システム区分,IPアドレス) values (sysdate,'$MNGID','$UID','$SYSCD','$ip_str')
SQL1;
		CMN_ExecSql($INS_SQL_LOGIN);
	}

	if( $COOKIE_SAVE_MODE == "1" ){
		// クッキー使用モード

		// 前回COOKIE保存値を取得
		$OLD_CAMS_LOGIN_ID = CMN_GetCookie("CAMS_LOGIN_ID");

		if( $LOGIN_ID != $OLD_CAMS_LOGIN_ID ) {
			// 前回COOKIEに設定したセッションIDとパラメータで渡されたログインIDが変更されている場合
			// COOKIEを再設定する。
			if( strcmp($COOKIE_TIME,"") == 0 ){
				setCookie( "CAMS_LOGIN_ID", $LOGIN_ID, 0, $COOKIE_PATH );
			}else{
				setCookie( "CAMS_LOGIN_ID", $LOGIN_ID, time()+60*60*$COOKIE_TIME, $COOKIE_PATH );
			}
		}
	}

	//-------------------------------------------------------------------------
	//HTMLフォーム出力開始
	//-------------------------------------------------------------------------
	print <<<HTML_STR
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset={$SYSTEM_HTML_CHARSET}">
<title></title>
</head>
<body>
<form name="f1" method="post" action="{$action_str}">

HTML_STR;

	//呼出元画面のパラメタ出力
	$auto_announce_param = "";
// HTTP_POST_VARS対応 autotool_migration 20130111195550 
//	foreach( $GLOBALS["HTTP_POST_VARS"] as $key => $val ){
	foreach( $_POST as $key => $val ){
		if( !is_array($val) ){
			// sMnuについてもhiddenは作成しない(2008.1.10)
			if( $key!="syoriMode" && $key!="reqKey" && $key!="UID" && $key!="UPASS" && $key!="SYSCD" && $key!="value=" && $key!="sMnu" && $key!="LOGIN_ID" ){
				print <<<HTML_STR
<INPUT type="hidden" name="{$key}" value="{$val}">
HTML_STR;
				$auto_announce_param .= "&".$key."=".$val;
			}
		}
	}

	//ＩＤ読替パラメタ出力＆お知らせポップアップ呼出しチェック処理
	if( $SYSTEM_ANNOUNCE_POPUP_CHECK_URL[$reqKey] && $SYSTEM_ANNOUNCE_POPUP_FLG[$reqKey] ){
		if( $KYONINSYO_INCLUDE_MODE=="readfile" ){
			readfile($SYSTEM_ANNOUNCE_POPUP_CHECK_URL[$reqKey]."?UID=".$UID."&SYSTEM_ANNOUNCE_POPUP_FLG=".$SYSTEM_ANNOUNCE_POPUP_FLG[$reqKey]."&SYSTEM_ANNOUNCE_POPUP_ADD_MINUTES=".$SYSTEM_ANNOUNCE_POPUP_ADD_MINUTES.$auto_announce_param);
		}else{
			include($SYSTEM_ANNOUNCE_POPUP_CHECK_URL[$reqKey]."?UID=".$UID."&SYSTEM_ANNOUNCE_POPUP_FLG=".$SYSTEM_ANNOUNCE_POPUP_FLG[$reqKey]."&SYSTEM_ANNOUNCE_POPUP_ADD_MINUTES=".$SYSTEM_ANNOUNCE_POPUP_ADD_MINUTES.$auto_announce_param);
		}
	}else{
		print <<<HTML_STR
<INPUT type="hidden" name="UID" value="{$UID}">

HTML_STR;
	}

	print <<<HTML_STR
</form>
</body>
<script language="JavaScript">
window.document.f1.submit();
</script>
</html>
HTML_STR;
	//-------------------------------------------------------------------------
	//HTMLフォーム出力終了
	//-------------------------------------------------------------------------
}
?>
<?php
// エラーハンドラ
function file_open_error_handler($errno, $errmsg, $filename, $linenum, $vars){
	return;
}
?>
