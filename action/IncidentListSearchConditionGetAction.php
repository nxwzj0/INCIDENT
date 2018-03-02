<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：検索条件IDで検索条件情報取得(API)
//	作成日付・作成者：2018.01.08 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/IncidentListSearchConditionGetLogic.php');
require_once('./logic/IncidentListGetLogic.php');

// dto読み込み
require_once('./dto/IncidentListGetDto.php');

class IncidentListSearchConditionGetAction extends CommonAction {

    public function index() {
        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        // 画面からパラメータ取得
        $condId = $P['condId'];

        // インシデント情報検索用パラメータ
        $IncidentListGetDto = new IncidentListGetDto();
        $IncidentListGetDto->setRelateFlg(TRUE);
        $IncidentListGetDto->setLogFlg(FALSE);
        $IncidentListGetDto->setCondId($condId);
        // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add Start newtouch
        $IncidentListGetDto->setPagingStart($P['pagingStart']);
        $IncidentListGetDto->setPagingEnd($P['pagingEnd']);
        // ::: 2018.03.02 [#44] ページング修正：インシデント検索、インシデントモーダル Add End   newtouch

        if($condId != CONDITION_NONE){
            // 検索条件を取得
            $IncidentListSearchConditionGetLogic = new IncidentListSearchConditionGetLogic();
            $conditionResult = $IncidentListSearchConditionGetLogic->execute($IncidentListGetDto);

            $conditionAry = array();
            $conditionListAry = array();
            // 検索条件からパラメータ取得
            if ($conditionResult->getConditionDtList() && is_array($conditionResult->getConditionDtList()) && count($conditionResult->getConditionDtList()) > 0) {
                foreach ($conditionResult->getConditionDtList() as $conditionDt){
                    switch ($conditionDt->getCondFld())
                    {
                    case "incidentTypeSyougai":// インシデント分類（障害）
                        $incidentTypeSyougai = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentTypeSyougai";
                        $conditionAry['condVal'] = $incidentTypeSyougai;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentTypeJiko":// インシデント分類（事故）
                        $incidentTypeJiko = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentTypeJiko";
                        $conditionAry['condVal'] = $incidentTypeJiko;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentTypeClaim":// インシデント分類（クレーム）
                        $incidentTypeClaim = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentTypeClaim";
                        $conditionAry['condVal'] = $incidentTypeClaim;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentTypeToiawase":// インシデント分類（問合せ）
                        $incidentTypeToiawase = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentTypeToiawase";
                        $conditionAry['condVal'] = $incidentTypeToiawase;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentTypeInfo":// インシデント分類（情報）
                        $incidentTypeInfo = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentTypeInfo";
                        $conditionAry['condVal'] = $incidentTypeInfo;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentTypeOther":// インシデント分類（その他）
                        $incidentTypeOther = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentTypeOther";
                        $conditionAry['condVal'] = $incidentTypeOther;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentStatusCall":// ステータス（受入済）
                        $incidentStatusCall = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentStatusCall";
                        $conditionAry['condVal'] = $incidentStatusCall;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentStatusTaio":// ステータス（対応入力済）
                        $incidentStatusTaio = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentStatusTaio";
                        $conditionAry['condVal'] = $incidentStatusTaio;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentStatusAct":// ステータス（処置入力済）
                        $incidentStatusAct = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentStatusAct";
                        $conditionAry['condVal'] = $incidentStatusAct;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentNo":// インシデント番号
                        $incidentNo = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentNo";
                        $conditionAry['condVal'] = $incidentNo;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "callContent":// 受付内容
                        $callContent = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "callContent";
                        $conditionAry['condVal'] = $callContent;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "parentIncidentNo":// 親インシデント番号
                        $parentIncidentNo = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "parentIncidentNo";
                        $conditionAry['condVal'] = $parentIncidentNo;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentStartDateTimeFrom":// 発生日時（開始）
                        $incidentStartDateTimeFrom = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentStartDateTimeFrom";
                        $conditionAry['condVal'] = $incidentStartDateTimeFrom;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "incidentStartDateTimeTo":// 発生日時（終了）
                        $incidentStartDateTimeTo = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "incidentStartDateTimeTo";
                        $conditionAry['condVal'] = $incidentStartDateTimeTo;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "callStartDateFrom":// 受付日（開始）
                        $callStartDateFrom = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "callStartDateFrom";
                        $conditionAry['condVal'] = $callStartDateFrom;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "callStartDateTo":// 受付日（終了）
                        $callStartDateTo = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "callStartDateTo";
                        $conditionAry['condVal'] = $callStartDateTo;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "industryTypeMachinery":// 業種区分（機械）
                        $industryTypeMachinery = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "industryTypeMachinery";
                        $conditionAry['condVal'] = $industryTypeMachinery;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "industryTypeElectricalMachinery":// 業種区分（電機（E））
                        $industryTypeElectricalMachinery = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "industryTypeElectricalMachinery";
                        $conditionAry['condVal'] = $industryTypeElectricalMachinery;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "industryTypeInstrumentation":// 業種区分（計装（I））
                        $industryTypeInstrumentation = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "industryTypeInstrumentation";
                        $conditionAry['condVal'] = $industryTypeInstrumentation;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "industryTypeInfo":// 業種区分（情報（C））
                        $industryTypeInfo = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "industryTypeInfo";
                        $conditionAry['condVal'] = $industryTypeInfo;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "industryTypeEnvironment":// 業種区分（環境）
                        $industryTypeEnvironment = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "industryTypeEnvironment";
                        $conditionAry['condVal'] = $industryTypeEnvironment;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "industryTypeWBC":// 業種区分（WBC）
                        $industryTypeWBC = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "industryTypeWBC";
                        $conditionAry['condVal'] = $industryTypeWBC;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "industryTypeOther":// 業種区分（その他）
                        $industryTypeOther = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "industryTypeOther";
                        $conditionAry['condVal'] = $industryTypeOther;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "kijoNm":// 機場
                        $kijoNm = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "kijoNm";
                        $conditionAry['condVal'] = $kijoNm;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "jigyosyutaiNm":// 事業主体
                        $jigyosyutaiNm = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "jigyosyutaiNm";
                        $conditionAry['condVal'] = $jigyosyutaiNm;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "setubiNm":// 設備
                        $setubiNm = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "setubiNm";
                        $conditionAry['condVal'] = $setubiNm;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "prefNm":// 都道府県
                        $prefNm = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "prefNm";
                        $conditionAry['condVal'] = $prefNm;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "custNm":// 顧客
                        $custNm = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "custNm";
                        $conditionAry['condVal'] = $custNm;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "custTypeNenkan":// 顧客分類（年間契約）
                        $custTypeNenkan = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "custTypeNenkan";
                        $conditionAry['condVal'] = $custTypeNenkan;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "custTypeTenken":// 顧客分類（点検契約）
                        $custTypeTenken = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "custTypeTenken";
                        $conditionAry['condVal'] = $custTypeTenken;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "custTypeNasi":// 顧客分類（契約なし）
                        $custTypeNasi = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "custTypeNasi";
                        $conditionAry['condVal'] = $custTypeNasi;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "custTypeKasi":// 顧客分類（瑕疵期間中）
                        $custTypeKasi = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "custTypeKasi";
                        $conditionAry['condVal'] = $custTypeKasi;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "custTypeOther":// 顧客分類（その他）
                        $custTypeOther = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "custTypeOther";
                        $conditionAry['condVal'] = $custTypeOther;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "salesDeptNm":// 営業部門
                        $salesDeptNm = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "salesDeptNm";
                        $conditionAry['condVal'] = $salesDeptNm;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "salesUserNm":// 営業担当者
                        $salesUserNm = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "salesUserNm";
                        $conditionAry['condVal'] = $salesUserNm;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    case "relateUserNm":// 関係者
                        $relateUserNm = $conditionDt->getCondVal();
                        $conditionAry['condFld'] = "relateUserNm";
                        $conditionAry['condVal'] = $relateUserNm;
                        array_push($conditionListAry,$conditionAry);
                        break;
                    default:
                      echo NULL;
                    }
                }
            }

            $IncidentListGetDto->setIncidentTypeSyougai($incidentTypeSyougai);
            $IncidentListGetDto->setIncidentTypeJiko($incidentTypeJiko);
            $IncidentListGetDto->setIncidentTypeClaim($incidentTypeClaim);
            $IncidentListGetDto->setIncidentTypeToiawase($incidentTypeToiawase);
            $IncidentListGetDto->setIncidentTypeInfo($incidentTypeInfo);
            $IncidentListGetDto->setIncidentTypeOther($incidentTypeOther);
            $IncidentListGetDto->setIncidentStatusCall($incidentStatusCall);
            $IncidentListGetDto->setIncidentStatusTaio($incidentStatusTaio);
            $IncidentListGetDto->setIncidentStatusAct($incidentStatusAct);
            $IncidentListGetDto->setIncidentNo($incidentNo);
            $IncidentListGetDto->setCallContent($callContent);
            $IncidentListGetDto->setParentIncidentNo($parentIncidentNo);
            $IncidentListGetDto->setIncidentStartDateTimeFrom($incidentStartDateTimeFrom);
            $IncidentListGetDto->setIncidentStartDateTimeTo($incidentStartDateTimeTo);
            $IncidentListGetDto->setCallStartDateFrom($callStartDateFrom);
            $IncidentListGetDto->setCallStartDateTo($callStartDateTo);
            $IncidentListGetDto->setIndustryTypeMachinery($industryTypeMachinery);
            $IncidentListGetDto->setIndustryTypeElectricalMachinery($industryTypeElectricalMachinery);
            $IncidentListGetDto->setIndustryTypeInstrumentation($industryTypeInstrumentation);
            $IncidentListGetDto->setIndustryTypeInfo($industryTypeInfo);
            $IncidentListGetDto->setIndustryTypeEnvironment($industryTypeEnvironment);
            $IncidentListGetDto->setIndustryTypeWBC($industryTypeWBC);
            $IncidentListGetDto->setIndustryTypeOther($industryTypeOther);
            $IncidentListGetDto->setKijoNm($kijoNm);
            $IncidentListGetDto->setJigyosyutaiNm($jigyosyutaiNm);
            $IncidentListGetDto->setSetubiNm($setubiNm);
            $IncidentListGetDto->setPrefNm($prefNm);
            $IncidentListGetDto->setCustNm($custNm);
            $IncidentListGetDto->setCustTypeNenkan($custTypeNenkan);
            $IncidentListGetDto->setCustTypeTenken($custTypeTenken);
            $IncidentListGetDto->setCustTypeNasi($custTypeNasi);
            $IncidentListGetDto->setCustTypeKasi($custTypeKasi);
            $IncidentListGetDto->setCustTypeOther($custTypeOther);
            $IncidentListGetDto->setSalesDeptNm($salesDeptNm);
            $IncidentListGetDto->setSalesUserNm($salesUserNm);
            $IncidentListGetDto->setRelateNm($relateUserNm);
        }

        // インシデントリスト情報を取得
        $IncidentListGetLogic = new IncidentListGetLogic();
        $eventResult = $IncidentListGetLogic->execute($IncidentListGetDto);

        
        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);
        array_push($rtnAry, $conditionListAry);
        
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
