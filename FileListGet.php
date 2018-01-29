<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ファイルリスト取得
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');
/* * ****************************************************************************
  ACTION_ID：FileListGetAction.php
 * ***************************************************************************** */
require_once('./action/FileListGetAction.php');

// 共通処理
$common = new CommonService();

// 共通認証

// アクション
$fileListGetAction = new FileListGetAction();
$fileListGetAction->index();
exit;