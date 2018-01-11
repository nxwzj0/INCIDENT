<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：テスト
//	処理名　　　　　：エラーページ
//	作成日付・作成者：2017.11.01 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./common/CommonService.php');
require_once("./action/TestAction.php");

// 共通処理
$common = new CommonService();

$TestAction = new TestAction();
$data = $TestAction->index();

echo "エラーページです。";