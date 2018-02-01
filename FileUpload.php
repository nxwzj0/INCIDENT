<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ファイルダウンロード
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');
/* * ****************************************************************************
  ACTION_ID：FileDlAction.php
 * ***************************************************************************** */
require_once('./action/FileUploadAction.php');

// 共通処理
$common = new CommonService();

// 共通認証

// アクション
$fileUploadAction = new FileUploadAction();
$fileUploadAction->index();
exit;