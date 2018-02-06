<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：関連インシデント情報取得
//	作成日付・作成者：2018.01.31 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./common/CommonService.php');
/* * ****************************************************************************
  ACTION_ID：RelateIncidentGetAction.php
 * ***************************************************************************** */
require_once('./action/RelateIncidentGetAction.php');

// 共通処理
$common = new CommonService();

/* 返り値初期設定 */
$rtnAry = array();

// アクション
$RelateIncidentGetAction = new RelateIncidentGetAction();
$RelateIncidentGetAction->index();
exit;
