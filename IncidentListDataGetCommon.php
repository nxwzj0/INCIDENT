<?php
//*****************************************************************************
//	システム名　　　：共通DBAPI
//	サブシステム名　：
//	処理名　　　　　：インシデント情報取得処理
//	HTMLID　　　　 ：IncidentListDataGetCommon
//	作成日付・作成者：2018.01.22·newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// Action処理読み込み
require_once("./action/IncidentListDataGetAction.php");

$action = new IncidentListDataGetAction();
$action->indexCommon();
exit;
