<?php // autotool_migration Ver3 20130111195550 このファイルは自動化ツールにより編集されました ?>
<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php
//*****************************************************************************
//	システム名　　　：認証システム共通化
//	処理名　　　　　：共通認証 ログアウト呼出処理
//	HTMLID　　　　　：kyo_logout.php
//	作成日付・作成者：2006-11-14 adf.kama
//	修正履歴　　　　：
//*****************************************************************************
function CMN_DispError($msg){
	print <<<HTML_ERR
<html><head><title>共通認証呼出しエラー</title></head>
<body>
<center><br><span style="font-size:12pt;font-weight:bold;">{$msg}<br></span></center>
<br>
<center>
<form name="frmDel">
<input type="button" value="戻る" onclick="window.history.back()">
</form>
</center>
</body>
</html>
HTML_ERR;
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
	CMN_DispError("設定ファイルの読込に失敗しました。");
	exit;
}
//--------------------------------------------------------------------

	// クッキーからセッションIDを削除
	if( $COOKIE_SAVE_MODE == "1" ){
		setCookie("CAMS_LOGIN_ID","",time()-3600,$COOKIE_PATH);
	}
	//Cookieを削除
    setcookie("incident_user_id", "", time()-1800);

	// 共通認証ログアウトURLをCONFファイルより取得
	$logoutUrl = $KYONINSYO_LOGOUT_URL;

	/*********************************
	* 共通認証サーバ切替対応　ここから
	**********************************/
	// 接続先サーバURL定義ファイル
	$fileUrl = "http://".$SERVER_ADDR."/camsUrl.txt";
	// ファイルオープン
	$fp = @fopen($fileUrl,"rb");

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
//			$logoutUrl = ereg_replace($pattern, trim($retUrl), $logoutUrl);
			$logoutUrl = preg_replace("/".$pattern."/",  trim($retUrl), $logoutUrl);
		}
	}
	/*********************************
	* 共通認証サーバ切替対応　ここまで
	**********************************/
	$sMnuHiddenTag = "";

	//sMnu編集
	if( strlen($sMnu) ){
		$sMnuHiddenTag = "<input type=\"hidden\" name=\"sMnu\" value=\"".$sMnu."\">";
	}

	//*************************
	//共通認証ログアウト呼出
	//*************************
	print <<<HTML_STR
<html><head><title></title></head>
<body>
<!--
<form name="f1" method="post" action="{$KYONINSYO_LOGOUT_URL}">
-->
<form name="f1" method="post" action="{$logoutUrl}">
{$sMnuHiddenTag}
</form>
</body>
<script language="JavaScript">
window.document.f1.submit();
</script>
</html>
HTML_STR;
?>
