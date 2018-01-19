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

        if($condId != "0"){
            // 検索条件を取得
            $IncidentListSearchConditionGetLogic = new IncidentListSearchConditionGetLogic();
            $conditionResult = $IncidentListSearchConditionGetLogic->execute($IncidentListGetDto);

            // 検索条件からパラメータ取得
            foreach ($conditionResult as $one){
                switch ($one['COND_FLD'])
                {
                case "incidentTypeSyougai":// インシデント分類（障害）
                    $incidentTypeSyougai = $one['COND_VAL'];
                    break;
                case "incidentTypeJiko":// インシデント分類（事故）
                    $incidentTypeJiko = $one['COND_VAL'];
                    break;
                case "incidentTypeClaim":// インシデント分類（クレーム）
                    $incidentTypeClaim = $one['COND_VAL'];
                    break;
                case "incidentTypeToiawase":// インシデント分類（問合せ）
                    $incidentTypeToiawase = $one['COND_VAL'];
                    break;
                case "incidentTypeInfo":// インシデント分類（情報）
                    $incidentTypeInfo = $one['COND_VAL'];
                    break;
                case "incidentTypeOther":// インシデント分類（その他）
                    $incidentTypeOther = $one['COND_VAL'];
                    break;
                case "incidentStatusCall":// ステータス（受入済）
                    $incidentStatusCall = $one['COND_VAL'];
                    break;
                case "incidentStatusTaio":// ステータス（対応入力済）
                    $incidentStatusTaio = $one['COND_VAL'];
                    break;
                case "incidentStatusAct":// ステータス（処置入力済）
                    $incidentStatusAct = $one['COND_VAL'];
                    break;
                case "incidentNo":// インシデント番号
                    $incidentNo = $one['COND_VAL'];
                    break;
                case "callContent":// 受付内容
                    $callContent = $one['COND_VAL'];
                    break;
                case "parentIncidentNo":// 親インシデント番号
                    $parentIncidentNo = $one['COND_VAL'];
                    break;
                case "incidentStartDateTimeFrom":// 発生日時（開始）
                    $incidentStartDateTimeFrom = $one['COND_VAL'];
                    break;
                case "incidentStartDateTimeTo":// 発生日時（終了）
                    $incidentStartDateTimeTo = $one['COND_VAL'];
                    break;
                case "callStartDateFrom":// 受付日（開始）
                    $callStartDateFrom = $one['COND_VAL'];
                    break;
                case "callStartDateTo":// 受付日（終了）
                    $callStartDateTo = $one['COND_VAL'];
                    break;
                case "industryTypeMachinery":// 業種区分（機械）
                    $industryTypeMachinery = $one['COND_VAL'];
                    break;
                case "industryTypeElectricalMachinery":// 業種区分（電機（E））
                    $industryTypeElectricalMachinery = $one['COND_VAL'];
                    break;
                case "industryTypeInstrumentation":// 業種区分（計装（I））
                    $industryTypeInstrumentation = $one['COND_VAL'];
                    break;
                case "industryTypeInfo":// 業種区分（情報（C））
                    $industryTypeInfo = $one['COND_VAL'];
                    break;
                case "industryTypeEnvironment":// 業種区分（環境）
                    $industryTypeEnvironment = $one['COND_VAL'];
                    break;
                case "industryTypeWBC":// 業種区分（WBC）
                    $industryTypeWBC = $one['COND_VAL'];
                    break;
                case "industryTypeOther":// 業種区分（その他）
                    $industryTypeOther = $one['COND_VAL'];
                    break;
                case "kijoNm":// 機場
                    $kijoNm = $one['COND_VAL'];
                    break;
                case "jigyosyutaiNm":// 事業主体
                    $jigyosyutaiNm = $one['COND_VAL'];
                    break;
                case "setubiNm":// 設備
                    $setubiNm = $one['COND_VAL'];
                    break;
                case "prefCd":// 都道府県
                    $prefCd = $one['COND_VAL'];
                    break;
                case "custNm":// 顧客
                    $custNm = $one['COND_VAL'];
                    break;
                case "custTypeNenkan":// 顧客分類（年間契約）
                    $custTypeNenkan = $one['COND_VAL'];
                    break;
                case "custTypeTenken":// 顧客分類（点検契約）
                    $custTypeTenken = $one['COND_VAL'];
                    break;
                case "custTypeNasi":// 顧客分類（契約なし）
                    $custTypeNasi = $one['COND_VAL'];
                    break;
                case "custTypeKasi":// 顧客分類（瑕疵期間中）
                    $custTypeKasi = $one['COND_VAL'];
                    break;
                case "custTypeOther":// 顧客分類（その他）
                    $custTypeOther = $one['COND_VAL'];
                    break;
                case "salesDeptNm":// 営業部門
                    $custNm = $one['COND_VAL'];
                    break;
                case "salesUserNm":// 営業担当者
                    $custNm = $one['COND_VAL'];
                    break;
                case "relateUserNm":// 関係者
                    $custNm = $one['COND_VAL'];
                    break;
                default:
                  echo NULL;
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
            $IncidentListGetDto->setPrefCd($prefCd);
            $IncidentListGetDto->setCustNm($custNm);
            $IncidentListGetDto->setCustTypeNenkan($custTypeNenkan);
            $IncidentListGetDto->setCustTypeTenken($custTypeTenken);
            $IncidentListGetDto->setCustTypeNasi($custTypeNasi);
            $IncidentListGetDto->setCustTypeKasi($custTypeKasi);
            $IncidentListGetDto->setCustTypeOther($custTypeOther);
        }

        // インシデントリスト情報を取得
        $IncidentListGetLogic = new IncidentListGetLogic();
        $eventResult = $IncidentListGetLogic->execute($IncidentListGetDto);

        
        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);
        array_push($rtnAry, $conditionResult);
        
        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($eventResult) {
        $incidentListAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            array_push($incidentListAry, array("result" => true));

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
                    array_push($incidentListAry, $incidentAry);
                }
            }
        } else {
            array_push($incidentListAry, array("result" => false));
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
