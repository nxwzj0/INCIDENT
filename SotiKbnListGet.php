<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：装置区分リスト取得
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');
/* * ****************************************************************************
  ACTION_ID：SotiKbnListGetAction.php
 * ***************************************************************************** */
require_once('./action/SotiKbnListGetAction.php');

// 共通処理
$common = new CommonService();

// 共通認証

// アクション
$sotiKbnListGetAction = new SotiKbnListGetAction();
$sotiKbnListGetAction->index();
exit;