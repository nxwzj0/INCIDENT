<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントリスト検索項目削除
//	作成日付・作成者：2018.01.05 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');

/* * ****************************************************************************
  ACTION_ID：IncidentListConditionDeleteRunAction.php
 * ***************************************************************************** */
require_once('./action/IncidentListConditionDeleteRunAction.php');

// 共通処理
$common = new CommonService();

// アクション
$ConditionDeleteRunAction = new IncidentListConditionDeleteRunAction();
$ConditionDeleteRunAction->index();

exit;