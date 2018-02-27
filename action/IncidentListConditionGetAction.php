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
require_once('./logic/IncidentListConditionGetLogic.php');

// dto読み込み
require_once('./dto/UserDto.php');
require_once('./dto/IncidentListConditionGetDto.php');
require_once('./dto/IncidentListConditionGetResultDto.php');

class IncidentListConditionGetAction extends CommonAction {

    public function index() {
        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        // 実例化Dto
        $incidentListConditionGetDto = new IncidentListConditionGetDto();

        // ログインユーザ
        $loginuserDto = new UserDto();
        $loginuserDto->setUserId($P['userId']);
        $loginuserDto->setUserNm($P['userName']);
        $loginuserDto->setSectionCd($P['sectionCd']);
        $loginuserDto->setSectionNm($P['sectionName']);
        $incidentListConditionGetDto->setLoginUser($loginuserDto);

        // 実例化Logic
        $incidentListConditionGetLogic = new IncidentListConditionGetLogic();

        // 実行Logic
        $eventResult = $incidentListConditionGetLogic->execute($incidentListConditionGetDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray(IncidentListConditionGetResultDto $eventResult) {
        $conditionListAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            $conditionListAry[] = array("result" => true);

            if (is_array($eventResult->getConditionList()) && count($eventResult->getConditionList()) > 0) {
                foreach ($eventResult->getConditionList() as $condition) {
                    $conditionAry = array();

                    // 検索条件名情報
                    $conditionAry["condId"] = $condition->getCondId();
                    $conditionAry["condNm"] = $condition->getCondNm();
                    $conditionAry["insDate"] = $condition->getInsDate();

                    // 1件分の情報をセット
                    $conditionListAry[] = $conditionAry;
                }
            }
        } else {
            $conditionListAry[] = array("result" => false);
        }

        return $conditionListAry;
    }

}
