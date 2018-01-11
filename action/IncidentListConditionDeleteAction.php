<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントリスト検索項目削除(検索条件名一覧)
//	作成日付・作成者：2018.01.04 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/IncidentListConditionDeleteLogic.php');

// dto読み込み
require_once('./dto/IncidentListGetDto.php');

class IncidentListConditionDeleteAction extends CommonAction {

    public function index() {

        // 実例化model
        $IncidentListConditionDeleteLogic = new IncidentListConditionDeleteLogic();
        // 実行Logic
        $eventResult = $IncidentListConditionDeleteLogic->execute();

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($eventResult);
    }

}

