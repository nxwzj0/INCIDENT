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
require_once('./dto/IncidentListConditionDeleteDto.php');

class IncidentListConditionDeleteAction extends CommonAction {

    public function index() {

        // 実例化Dto
        $IncidentListConditionDeleteDto = new IncidentListConditionDeleteDto();

        // 実例化Logic
        $IncidentListConditionDeleteLogic = new IncidentListConditionDeleteLogic();

        // 実行Logic
        $eventResult = $IncidentListConditionDeleteLogic->execute($IncidentListConditionDeleteDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($eventResult) {
        $conditionListAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            array_push($conditionListAry, array("result" => true));

            if ($eventResult->getConditionList() && is_array($eventResult->getConditionList()) && count($eventResult->getConditionList()) > 0) {
                foreach ($eventResult->getConditionList() as $condition) {
                    $conditionAry = array();

                    // 検索条件名情報
                    $conditionAry["condId"] = $condition->getCondId();
                    $conditionAry["condNm"] = $condition->getCondNm();
                    $conditionAry["insDate"] = $condition->getInsDate();

                    // 1件分の情報をセット
                    array_push($conditionListAry, $conditionAry);
                }
            }
        } else {
            array_push($conditionListAry, array("result" => false));
        }

        return $conditionListAry;
    }

}

