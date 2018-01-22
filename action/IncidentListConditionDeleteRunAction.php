<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントリスト検索項目削除
//	作成日付・作成者：2018.01.05 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/IncidentListConditionDeleteRunLogic.php');

// dto処理読み込み
require_once('./dto/IncidentListConditionDeleteRunDto.php');

class IncidentListConditionDeleteRunAction extends CommonAction {

    public function index() {

        // 実例化Dto
        $IncidentListConditionDeleteRunDto = new IncidentListConditionDeleteRunDto();
        // 共通パラメータ配列取得
        $P = $GLOBALS[P];
        // 画面からパラメータ取得
        $IncidentListConditionDeleteRunDto->setCondId($P['condId']);

        // 実例化Logic
        $IncidentListConditionDeleteRunLogic = new IncidentListConditionDeleteRunLogic();
        // 実行Logic
        $eventResult = $IncidentListConditionDeleteRunLogic->execute($IncidentListConditionDeleteRunDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

     public function createReturnArray($eventResult) {

        // 戻り値の作成
        $resultListAry = array();
        $resultAty = array();
        $resultAty['resultFlg'] = $eventResult->getLogicResult();
        $resultAty['resultMsg'] = $eventResult->getResultMsg();
        array_push($resultListAry, $resultAty);

        return $resultListAry;

    }

}


