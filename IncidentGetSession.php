<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントセッション取得
//	作成日付・作成者：20178.1.30 ADF)K.Kawamoto
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');

require_once('./action/IncidentGetSessionAction.php');

// 共通処理
$common = new CommonService();

/*
if( !isset( $_SESSION ) ) {
    session_name("INCIDENT");
    session_start();
}

// セッション取得
if($_SESSION['user_id']){
	print $_SESSION['user_id'];

}else{
	//ユーザーID無し
	print -1;
}
*/

/*
if($_COOKIE["incident_user_id"]){
	print $_COOKIE['incident_user_id'];
}else{
	print -1;
}
*/

// アクション
$incidentGetSessionAction = new IncidentGetSessionAction();
$incidentGetSessionAction->index();
exit;
