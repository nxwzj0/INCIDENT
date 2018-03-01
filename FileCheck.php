<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ファイル存在チェック
//	作成日付・作成者：2018.02.27 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');
/* * ****************************************************************************
  ACTION_ID：FileCheckAction.php
 * ***************************************************************************** */
require_once('./action/FileCheckAction.php');

// 共通処理
$common = new CommonService();

// 共通認証

// アクション
$fileCheckAction = new FileCheckAction();
$fileCheckAction->index();
exit;