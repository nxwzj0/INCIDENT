<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：テスト
//	処理名　　　　　：開発前テスト用　ajax　receive
//	HTMLID　　　　　：receive.php
//	作成日付・作成者：2017.09.29 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once("./common/CommonService.php");

// Action処理読み込み
require_once("./action/ReceiveAction.php");

// 共通処理
$common = new CommonService();

/* 返り値初期設定 */
$rtnAry = array();

// リクエストタイプを確認
if (!$common->checkRequestType("POST")) {
    // 不正なアクセス
//    array_push($rtnAry, array("result" => false));
//    echo json_encode($rtnAry);
    exit;
}

$ReceiveAction = new ReceiveAction();
$ReceiveAction->index();
exit;
