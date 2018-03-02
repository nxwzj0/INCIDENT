<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントリスト情報取得(API)
//	作成日付・作成者：2017.11.27 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/IncidentListGetLogic.php');

// dto読み込み
require_once('./dto/IncidentListGetDto.php');

class IncidentListDataGetAction extends CommonAction {

    public function index() {
        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        // 画面からパラメータ取得
        $incidentNo = $P['incidentNo'];
        $callContent = $P['callContent'];
        $kijoNm = $P['kijoNm'];
        $setubiNm = $P['setubiNm'];
        $prefNm = $P['prefNm'];
        $callStartDateFrom = $P['callStartDateFrom'];
        $callStartDateTo = $P['callStartDateTo'];
        $incidentStartDateTimeFrom = $P['incidentStartDateTimeFrom'];
        $incidentStartDateTimeTo = $P['incidentStartDateTimeTo'];
        
        $incidentTypeSyougai =  $P["incidentTypeSyougai"];
        $incidentTypeJiko = $P["incidentTypeJiko"];
        $incidentTypeClaim = $P["incidentTypeClaim"];
        $incidentTypeToiawase = $P["incidentTypeToiawase"];
        $incidentTypeInfo = $P["incidentTypeInfo"];
        $incidentTypeOther = $P["incidentTypeOther"];
        $incidentStatusCall = $P["incidentStatusCall"];
        $incidentStatusTaio = $P["incidentStatusTaio"];
        $incidentStatusAct = $P["incidentStatusAct"];
        
        $parentIncidentNo = $P["parentIncidentNo"];
        $industryTypeMachinery = $P["industryTypeMachinery"];
        $industryTypeElectricalMachinery = $P["industryTypeElectricalMachinery"];
        $industryTypeInstrumentation = $P["industryTypeInstrumentation"];
        $industryTypeInfo = $P["industryTypeInfo"];
        $industryTypeEnvironment = $P["industryTypeEnvironment"];
        $industryTypeWBC = $P["industryTypeWBC"];
        $industryTypeOther = $P["industryTypeOther"];
        $jigyosyutaiNm = $P["jigyosyutaiNm"];
        $custNm = $P["custNm"];
        $custTypeNenkan = $P["custTypeNenkan"];
        $custTypeTenken = $P["custTypeTenken"];
        $custTypeNasi = $P["custTypeNasi"];
        $custTypeKasi = $P["custTypeKasi"];
        $custTypeOther = $P["custTypeOther"];
        $salesDeptNm = $P["salesDeptNm"];
        $salesUserNm = $P["salesUserNm"];
        $relateUserNm = $P["relateUserNm"];
        
        // インシデント情報検索用パラメータ
        $IncidentListGetDto = new IncidentListGetDto();
        $IncidentListGetDto->setRelateFlg(TRUE);
        $IncidentListGetDto->setLogFlg(FALSE);
        $IncidentListGetDto->setIncidentNo($incidentNo);
        $IncidentListGetDto->setCallContent($callContent);
        $IncidentListGetDto->setKijoNm($kijoNm);
        $IncidentListGetDto->setSetubiNm($setubiNm);
        $IncidentListGetDto->setPrefNm($prefNm);
        $IncidentListGetDto->setCallStartDateFrom($callStartDateFrom);
        $IncidentListGetDto->setCallStartDateTo($callStartDateTo);
        $IncidentListGetDto->setIncidentStartDateTimeFrom($incidentStartDateTimeFrom);
        $IncidentListGetDto->setIncidentStartDateTimeTo($incidentStartDateTimeTo);
        $IncidentListGetDto->setIncidentTypeSyougai($incidentTypeSyougai);
        $IncidentListGetDto->setIncidentTypeJiko($incidentTypeJiko);
        $IncidentListGetDto->setIncidentTypeClaim($incidentTypeClaim);
        $IncidentListGetDto->setIncidentTypeToiawase($incidentTypeToiawase);
        $IncidentListGetDto->setIncidentTypeInfo($incidentTypeInfo);
        $IncidentListGetDto->setIncidentTypeOther($incidentTypeOther);
        $IncidentListGetDto->setIncidentStatusCall($incidentStatusCall);
        $IncidentListGetDto->setIncidentStatusTaio($incidentStatusTaio);
        $IncidentListGetDto->setIncidentStatusAct($incidentStatusAct);
        
        $IncidentListGetDto->setParentIncidentNo($parentIncidentNo);
        $IncidentListGetDto->setIndustryTypeMachinery($industryTypeMachinery);
        $IncidentListGetDto->setIndustryTypeElectricalMachinery($industryTypeElectricalMachinery);
        $IncidentListGetDto->setIndustryTypeInstrumentation($industryTypeInstrumentation);
        $IncidentListGetDto->setIndustryTypeInfo($industryTypeInfo);
        $IncidentListGetDto->setIndustryTypeEnvironment($industryTypeEnvironment);
        $IncidentListGetDto->setIndustryTypeWBC($industryTypeWBC);
        $IncidentListGetDto->setIndustryTypeOther($industryTypeOther);
        $IncidentListGetDto->setJigyosyutaiNm($jigyosyutaiNm);
        $IncidentListGetDto->setCustNm($custNm);
        $IncidentListGetDto->setCustTypeNenkan($custTypeNenkan);
        $IncidentListGetDto->setCustTypeTenken($custTypeTenken);
        $IncidentListGetDto->setCustTypeNasi($custTypeNasi);
        $IncidentListGetDto->setCustTypeKasi($custTypeKasi);
        $IncidentListGetDto->setCustTypeOther($custTypeOther);
        $IncidentListGetDto->setSalesDeptNm($salesDeptNm);
        $IncidentListGetDto->setSalesUserNm($salesUserNm);
        $IncidentListGetDto->setRelateNm($relateUserNm);
        
        // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add Start newtouch
        $IncidentListGetDto->setPagingStart($P['pagingStart']);
        $IncidentListGetDto->setPagingEnd($P['pagingEnd']);
        // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add End   newtouch
        
        // インシデントリスト情報を取得
        $IncidentListGetLogic = new IncidentListGetLogic();
        $eventResult = $IncidentListGetLogic->execute($IncidentListGetDto);
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
