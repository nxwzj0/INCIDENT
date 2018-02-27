<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ファイル削除
//	作成日付・作成者：2018.02.13 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');
/* * ****************************************************************************
  ACTION_ID：FileDeleteAction.php
 * ***************************************************************************** */
require_once('./action/FileDeleteAction.php');

// 共通処理
$common = new CommonService();

// アクション
$fileDeleteAction = new FileDeleteAction();
$fileDeleteAction->index();
exit;