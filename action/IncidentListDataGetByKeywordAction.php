<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：キーワードでインシデントリスト情報取得(API)
//	作成日付・作成者：2018.01.17 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/IncidentListGetByKeywordLogic.php');

// dto読み込み
require_once('./dto/IncidentListGetDto.php');

class IncidentListDataGetByKeywordAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        // 画面からパラメータ取得
        $keyword = $P['keyword'];

        // インシデント情報検索用パラメータ
        $IncidentListGetDto = new IncidentListGetDto();
        $IncidentListGetDto->setRelateFlg(TRUE);
        $IncidentListGetDto->setLogFlg(FALSE);
        $IncidentListGetDto->setKeywordStr($keyword);
        // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add Start newtouch
        $IncidentListGetDto->setPagingStart($P['pagingStart']);
        $IncidentListGetDto->setPagingEnd($P['pagingEnd']);
        // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add End   newtouch

        // インシデントリスト情報を取得
        $IncidentListGetByKeywordLogic = new IncidentListGetByKeywordLogic();
        $eventResult = $IncidentListGetByKeywordLogic->execute($IncidentListGetDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);
        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($eventResult) {
        $incidentListAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Del Start newtouch
            // ::: array_push($incidentListAry, array("result" => true));
            // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Del End   newtouch
            // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add Start newtouch
            $incidentListAry[] = array("result" => true, "count" => $eventResult->getCount());
            // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add End   newtouch

            if ($eventResult->getIncidentList() && is_array($eventResult->getIncidentList()) && count($eventResult->getIncidentList()) > 0) {
                foreach ($eventResult->getIncidentList() as $incident) {
                    $incidentAry = array();

                    // インシデント情報
                    $incidentMainInfo = $incident->getIncidentMainInfo();
                    $incidentAry["incidentId"] = $incidentMainInfo->getIncidentId();
                    $incidentAry["incidentNo"] = $incidentMainInfo->getIncidentNo();
                    $incidentAry["incidentStatusCd"] = $incidentMainInfo->getIncidentStsCd();
                    $incidentAry["incidentStatusNm"] = $this->getConstArrayString(unserialize(INCIDENT_STS_NAME), $incidentMainInfo->getIncidentStsCd());
                    $incidentAry["incidentTypeCd"] = $incidentMainInfo->getIncidentTypeCd();
                    $incidentAry["incidentTypeNm"] = $this->getConstArrayString(unserialize(INCIDENT_TYPE_NAME), $incidentMainInfo->getIncidentTypeCd());
                    $incidentAry["callContent"] = $incidentMainInfo->getCallContent();
                    $incidentAry["kijoId"] = $incidentMainInfo->getKijoId();
                    $incidentAry["kijoNm"] = $incidentMainInfo->getKijoNm();
                    $incidentAry["setubiId"] = $incidentMainInfo->getSetubiId();
                    $incidentAry["setubiNm"] = $incidentMainInfo->getSetubiNm();
                    $incidentAry["prefId"] = $incidentMainInfo->getPrefId();
                    $incidentAry["prefNm"] = $incidentMainInfo->getPrefNm();
                    $incidentAry["incidentStartDateTime"] = $incidentMainInfo->getIncidentStartDateTime();
                    $incidentAry["callDate"] = $incidentMainInfo->getCallDate();

                    // 関連情報の有無
                    $incidentRelateLinkInfo = $incident->getRelateLink();
                    $incidentAry["relatePj"] = $this->checkDataExistence($incidentRelateLinkInfo->getPjInfo());
                    $incidentAry["relateJiko"] = $this->checkDataExistence($incidentRelateLinkInfo->getJikoInfo());
                    $incidentAry["relateMr2"] = $this->checkDataExistence($incidentRelateLinkInfo->getMr2Info());
                    $incidentAry["relateHiyo"] = $this->checkDataExistence($incidentRelateLinkInfo->getHiyoInfo());

                    // 1件分の情報をセット
                    // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Del Start newtouch
                    // ::: array_push($incidentListAry, $incidentAry);
                    // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Del End   newtouch
                    // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add Start newtouch
                    $incidentListAry[] = $incidentAry;
                    // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add End   newtouch
                }
            }
        } else {
            // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Del Start newtouch
            // ::: array_push($incidentListAry, array("result" => false));
            // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Del End   newtouch
            // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add Start newtouch
            $incidentListAry[] = array("result" => false);
            // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add End   newtouch
        }

        return $incidentListAry;
    }

    public function checkDataExistence($ary) {
        if (isset($ary) && is_array($ary) && count($ary) > 0) {
            return "有";
        } else {
            return null;
        }
    }

}
