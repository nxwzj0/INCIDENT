<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントリスト検索項目保存
//	作成日付・作成者：2018.01.02 NWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');

/* * ****************************************************************************
  ACTION_ID：IncidentListConditionSaveAction.php
 * ***************************************************************************** */
// action処理読み込み
require_once('./action/IncidentListConditionSaveAction.php');

// 共通処理
$common = new CommonService();

// アクション
$ConditionSaveAction = new IncidentListConditionSaveAction();
$ConditionSaveAction->index();

exit;