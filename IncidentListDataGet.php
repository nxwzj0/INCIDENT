<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントリスト情報取得
//	作成日付・作成者：2017.11.27 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');
/* * ****************************************************************************
  ACTION_ID：IncidentListDataGetAction.php
 * ***************************************************************************** */
require_once('./action/IncidentListDataGetAction.php');

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
$ListDataAction = new IncidentListDataGetAction();
// ::: 2018.01.23 [#23] 入力補助モーダル　インシデント Del Start newtouch
// ::: $ListDataAction->index();
// ::: 2018.01.23 [#23] 入力補助モーダル　インシデント Del End   newtouch
// ::: 2018.01.23 [#23] 入力補助モーダル　インシデント Add Start newtouch
$ListDataAction->indexCommon();
// ::: 2018.01.23 [#23] 入力補助モーダル　インシデント Add End   newtouch

exit;