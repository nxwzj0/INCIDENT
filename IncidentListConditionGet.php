<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：保存されたインシデント検索条件を取得
//	作成日付・作成者：2018.01.04 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');

/* * ****************************************************************************
  ACTION_ID：IncidentListConditionGetAction.php
 * ***************************************************************************** */
// action処理読み込み
require_once('./action/IncidentListConditionGetAction.php');

// 共通処理
$common = new CommonService();

// アクション
$conditionGetAction = new IncidentListConditionGetAction();
$conditionGetAction->index();

exit;