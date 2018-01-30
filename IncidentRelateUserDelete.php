<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデント関係者を削除
//	作成日付・作成者：2018.01.05 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');

/* * ****************************************************************************
  ACTION_ID：IncidentRelateUserDelete.php
 * ***************************************************************************** */
require_once('./action/IncidentRelateUserDeleteAction.php');

// アクション
$action = new IncidentRelateUserDeleteAction();
$action->index();

exit;
