<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントリスト検索項目削除(検索条件名一覧)
//	作成日付・作成者：2018.01.04 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');

/* * ****************************************************************************
  ACTION_ID：IncidentListConditionDeleteAction.php
 * ***************************************************************************** */
// action処理読み込み
require_once('./action/IncidentListConditionDeleteAction.php');

// 共通処理
$common = new CommonService();

// アクション
$ConditionDeleteAction = new IncidentListConditionDeleteAction();
$ConditionDeleteAction->index();

exit;