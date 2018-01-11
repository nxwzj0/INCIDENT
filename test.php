<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：テスト
//	処理名　　　　　：開発前テスト用
//	作成日付・作成者：2017.09.29 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./common/CommonService.php');
require_once("./action/TestAction.php");

// 共通処理
$common = new CommonService();

// リクエストタイプを確認
//if (!$common->checkRequestType("POST")) {
//    // 不正なアクセス
//    array_push($rtnAry, array("result" => false));
//    echo json_encode($rtnAry);
//    exit;
//}

$TestAction = new TestAction();
$data = $TestAction->index();

/* * ****************************************************************************
  画面名：TODOリスト画面
  HTMLID：todo.php
 * ***************************************************************************** */
require_once('./view/todo.php');
