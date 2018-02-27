<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：登録処理
//	HTMLID　　　　　：IncidentSave.php
//	作成日付・作成者：2017.01.19 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once("./common/CommonService.php");

// Action処理読み込み
require_once("./action/IncidentSaveAction.php");

// 共通処理
$common = new CommonService();

/* 返り値初期設定 */
$rtnAry = array();

$incidentSaveAction = new IncidentSaveAction();
$incidentSaveAction->index();
exit;
