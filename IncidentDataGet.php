<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデント情報取得
//	作成日付・作成者：2017.11.01 ADF)Y.Sugawara
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');
/* * ****************************************************************************
  ACTION_ID：IncidentDataGetAction.php
 * ***************************************************************************** */
require_once('./action/IncidentDataGetAction.php');

// 共通処理
$common = new CommonService();

/* 返り値初期設定 */
$rtnAry = array();

// リクエストタイプを確認
//if (!$common->checkRequestType("POST")) {
//    exit;
//}

// 共通認証


// アクション
$DataAction = new IncidentDataGetAction();
$DataAction->index();
exit;