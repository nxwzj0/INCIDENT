<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントリスト情報取得
//	作成日付・作成者：2017.11.27 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');
/* * ****************************************************************************
  ACTION_ID：IncidentListDataGetAction.php
 * ***************************************************************************** */
require_once('./action/IncidentListDataGetAction.php');

// アクション
$ListDataAction = new IncidentListDataGetAction();
$ListDataAction->index();

exit;
