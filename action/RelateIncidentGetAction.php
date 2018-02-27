<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：関連インシデント情報取得
//	作成日付・作成者：2018.01.31 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/RelateIncidentGetLogic.php');

// dto読み込み
require_once('./dto/RelateIncidentGetDto.php');

class RelateIncidentGetAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        $incidentId = $P['incidentId']; // 画面からパラメータ取得

        // 関連インシデント情報用パラメータ
        $RelateIncidentGetDto = new RelateIncidentGetDto();
        $RelateIncidentGetDto->setIncidentId($incidentId);

        // 関連インシデント情報を取得
        $RelateIncidentGetLogic = new RelateIncidentGetLogic();
        $eventResult = $RelateIncidentGetLogic->execute($RelateIncidentGetDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($eventResult) {
        $relateIncidentAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {

            // ロジック処理が正常終了した場合
            array_push($relateIncidentAry, array("result" => true));

            $relateIncidentKijiIdList = (array)$eventResult->getRelateIncidentKijiIdList();
            $relateIncidentKijiIdAry = array();
            $relateIncidentCustIdList = (array)$eventResult->getRelateIncidentCustIdList();
            $relateIncidentCustIdAry = array();

            // 機場Idの関連インシデント情報
            if ($relateIncidentKijiIdList) {
                foreach ($relateIncidentKijiIdList as $kijiIdOne) {
                    $tmp = array();
                    $tmp["relateIncidentId"] = $kijiIdOne->getRelateIncidentId();
                    $tmp["relateIncidentNo"] = $kijiIdOne->getRelateIncidentNo();
                    $tmp["relateIncidentType"] = $kijiIdOne->getRelateIncidentType();
                    $tmp["relateIncidentStartDateTime"] = $kijiIdOne->getRelateIncidentStartDateTime();
                    $tmp["relateIncidentKijoNm"] = $kijiIdOne->getRelateIncidentKijoNm();
                    $tmp["relateIncidentCustNm"] = $kijiIdOne->getRelateIncidentCustNm();
                    $tmp["relateIncidentContent"] = $kijiIdOne->getRelateIncidentContent();
                    array_push($relateIncidentKijiIdAry, $tmp);
                }
                $relateIncidentAry['relateIncidentKijiIdAry'] = $relateIncidentKijiIdAry;
            }

            // 顧客IDの関連インシデント情報
            if ($relateIncidentCustIdList) {
                foreach ($relateIncidentCustIdList as $custIdOne) {
                    $tmp = array();
                    $tmp["relateIncidentId"] = $custIdOne->getRelateIncidentId();
                    $tmp["relateIncidentNo"] = $custIdOne->getRelateIncidentNo();
                    $tmp["relateIncidentType"] = $custIdOne->getRelateIncidentType();
                    $tmp["relateIncidentStartDateTime"] = $custIdOne->getRelateIncidentStartDateTime();
                    $tmp["relateIncidentKijoNm"] = $custIdOne->getRelateIncidentKijoNm();
                    $tmp["relateIncidentCustNm"] = $custIdOne->getRelateIncidentCustNm();
                    $tmp["relateIncidentContent"] = $custIdOne->getRelateIncidentContent();
                    array_push($relateIncidentCustIdAry, $tmp);
                }
                $relateIncidentAry['relateIncidentCustIdAry'] = $relateIncidentCustIdAry;
            }

        } else {
            // ロジック処理が異常終了した場合
            array_push($relateIncidentAry, array("result" => false));
        }

        return $relateIncidentAry;
    }

}
