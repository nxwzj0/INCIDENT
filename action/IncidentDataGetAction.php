<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデント情報取得(API)
//	作成日付・作成者：2017.11.01 ADF)Y.Sugawara
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/IncidentGetLogic.php');

// dto読み込み
require_once('./dto/IncidentGetDto.php');

//require_once('./dto/UserDto.php');

class IncidentDataGetAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        $incidentId = $P['incidentId']; // 画面からパラメータ取得
        // インシデント情報用パラメータ
        $IncidentGetDto = new IncidentGetDto();
        $IncidentGetDto->setIncidentId($incidentId);
        $IncidentGetDto->setRelateFlg(TRUE);
        $IncidentGetDto->setLogFlg(TRUE);

        // インシデント情報を取得
        $IncidentGetLogic = new IncidentGetLogic();
        $eventResult = $IncidentGetLogic->execute($IncidentGetDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray(IncidentGetResultDto $eventResult) {
        $incidentUnitAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            // ロジック処理を正常に終了した場合
            $incidentMainInfo = $eventResult->getIncidentInfo()->getIncidentMainInfo();

            // インシデント情報
            if ($incidentMainInfo) {
                $relateUserList = array();
                $arr = (array) $incidentMainInfo->getRelateUserList();
                for ($index = 0; $index < count($arr); $index++) {
                    $tmp = array();
                    $tmp["relateId"] = $arr[$index]->getRelateId();
                    $tmp["incidentId"] = $arr[$index]->getIncidentId();
                    $tmp["relateUserId"] = $arr[$index]->getRelateUserId();
                    $tmp["relateUserNm"] = $arr[$index]->getRelateUserNm();
                    $tmp["relateUserSectionCd"] = $arr[$index]->getRelateUserSectionCd();
                    $tmp["relateUserSectionNm"] = $arr[$index]->getRelateUserSectionNm();
                    $tmp["kidokuDate"] = $arr[$index]->getKidokuDate();
                    array_push($relateUserList, $tmp);
                }
                $incidentUnitAry[]= array("result" => true,
                    "relateUserList" => $relateUserList,
                    "incidentId" => $incidentMainInfo->getIncidentId(),
                    "incidentNo" => $incidentMainInfo->getIncidentNo(),
                    "incidentStatusCd" => $incidentMainInfo->getIncidentStsCd(),
                    "incidentStatusNm" => $this->getConstArrayString(unserialize(INCIDENT_STS_NAME), $incidentMainInfo->getIncidentStsCd()),
                    "incidentTypeCd" => $incidentMainInfo->getIncidentTypeCd(),
                    "incidentTypeNm" => $this->getConstArrayString(unserialize(INCIDENT_TYPE_NAME), $incidentMainInfo->getIncidentTypeCd()),
                    "insDate" => $incidentMainInfo->getInsDate(),
                    "insUserNm" => $incidentMainInfo->getInsUserNm(),
                    "updDate" => $incidentMainInfo->getUpdDate(),
                    "updUserNm" => $incidentMainInfo->getUpdUserNm(),
                    "parentIncidentNo" => $incidentMainInfo->getParentIncidentNo(),
                    "incidentStartDateTime" => $incidentMainInfo->getIncidentStartDateTime(),
                    "industryTypeCd" => $incidentMainInfo->getIndustryTypeCd(),
                    "industryTypeNm" => $this->getConstArrayString(unserialize(INDUSTRY_TYPE_NAME), $incidentMainInfo->getIndustryTypeCd()),
                    "infoSourceCd" => $incidentMainInfo->getInfoSource(),
                    "infoSourceNm" => $this->getConstArrayString(unserialize(INCIDENT_INFO_SOURCE), $incidentMainInfo->getInfoSource()),
                    "infoProvider" => $incidentMainInfo->getInfoProvider(),
                    "infoProvidedTel" => $incidentMainInfo->getInfoProviderTel(),
//                "relateList" => $incidentMainInfo->
                    "memo" => $incidentMainInfo->getMemo(),
                    "kijoNm" => $incidentMainInfo->getKijoNm(),
                    "jigyosyutaiNm" => $incidentMainInfo->getJigyosyutaiNm(),
                    "setubiNm" => $incidentMainInfo->getSetubiNm(),
                    "prefId" => $incidentMainInfo->getPrefId(),
                    "prefNm" => $this->getConstArrayString(unserialize(PREF_NAME), $incidentMainInfo->getPrefId()),
                    "custNm" => $incidentMainInfo->getCustNm(),
                    "custTypeCd" => $incidentMainInfo->getCustTypeCd(),
                    "custTypeNm" => $this->getConstArrayString(unserialize(CUST_TYPE_NAME), $incidentMainInfo->getCustTypeCd()),
                    "salesDeptCd" => $incidentMainInfo->getSalesDept() ? $incidentMainInfo->getSalesDept()->getSectionCd() : null,
                    "salesDeptNm" => $incidentMainInfo->getSalesDept() ? $incidentMainInfo->getSalesDept()->getSectionNm() : null,
                    "salesUserId" => $incidentMainInfo->getSalesUser() ? $incidentMainInfo->getSalesUser()->getUserId() : null,
                    "salesUserNm" => $incidentMainInfo->getSalesUser() ? $incidentMainInfo->getSalesUser()->getUserNm() : null,
                    "deliveryPjNm" => $incidentMainInfo->getDeliveryPjNm(),
                    "custDept" => $incidentMainInfo->getCustDept(),
                    "requester" => $incidentMainInfo->getRequester(),
                    "contactTel" => $incidentMainInfo->getContactTel(),
                    "contactFax" => $incidentMainInfo->getContactFax(),
                    "contactMail" => $incidentMainInfo->getContactMail(),
                    "skanDeptCd" => $incidentMainInfo->getSkanDept() ? $incidentMainInfo->getSkanDept()->getSectionCd() : null,
                    "skanDeptNm" => $incidentMainInfo->getSkanDept() ? $incidentMainInfo->getSkanDept()->getSectionNm() : null,
                    "skanUserId" => $incidentMainInfo->getSkanUser() ? $incidentMainInfo->getSkanUser()->getUserId() : null,
                    "skanUserNm" => $incidentMainInfo->getSkanUser() ? $incidentMainInfo->getSkanUser()->getUserNm() : null,
                    "callDate" => $incidentMainInfo->getCallDate(),
                    "callStartDate" => $incidentMainInfo->getCallStartDate(),
                    "callEndDate" => $incidentMainInfo->getCallEndDate(),
                    "callDeptCd" => $incidentMainInfo->getCallDept() ? $incidentMainInfo->getCallDept()->getSectionCd() : null,
                    "callDeptNm" => $incidentMainInfo->getCallDept() ? $incidentMainInfo->getCallDept()->getSectionNm() : null,
                    "callUserId" => $incidentMainInfo->getCallUser() ? $incidentMainInfo->getCallUser()->getUserId() : null,
                    "callUserNm" => $incidentMainInfo->getCallUser() ? $incidentMainInfo->getCallUser()->getUserNm() : null,
                    "callTel" => $incidentMainInfo->getCallTel(),
                    "callMail" => $incidentMainInfo->getCallMail(),
                    "callContent" => $incidentMainInfo->getCallContent(),
                    "taioDate" => $incidentMainInfo->getTaioDate(),
                    "taioStartDate" => $incidentMainInfo->getTaioStartDate(),
                    "taioEndDate" => $incidentMainInfo->getTaioEndDate(),
                    "taioDeptCd" => $incidentMainInfo->getTaioDept() ? $incidentMainInfo->getTaioDept()->getSectionCd() : null,
                    "taioDeptNm" => $incidentMainInfo->getTaioDept() ? $incidentMainInfo->getTaioDept()->getSectionNm() : null,
                    "taioUserId" => $incidentMainInfo->getTaioUser() ? $incidentMainInfo->getTaioUser()->getUserId() : null,
                    "taioUserNm" => $incidentMainInfo->getTaioUser() ? $incidentMainInfo->getTaioUser()->getUserNm() : null,
                    "taioTel" => $incidentMainInfo->getTaioTel(),
                    "taioMail" => $incidentMainInfo->getTaioMail(),
                    "taioContent" => $incidentMainInfo->getTaioContent(),
                    "actDate" => $incidentMainInfo->getActDate(),
//"actTypeNm" => $incidentMainInfo->getActType(),
                    "actStartDateTime" => $incidentMainInfo->getActStartTime(),
                    "actEndDateTime" => $incidentMainInfo->getActEndTime(),
                    "actDeptCd" => $incidentMainInfo->getActDept() ? $incidentMainInfo->getActDept()->getSectionCd() : null,
                    "actDeptNm" => $incidentMainInfo->getActDept() ? $incidentMainInfo->getActDept()->getSectionNm() : null,
                    "actUserId" => $incidentMainInfo->getActUser() ? $incidentMainInfo->getActUser()->getUserId() : null,
                    "actUserNm" => $incidentMainInfo->getActUser() ? $incidentMainInfo->getActUser()->getUserNm() : null,
                    "actTel" => $incidentMainInfo->getActTel(),
                    "actMail" => $incidentMainInfo->getActMail(),
                    "actContent" => $incidentMainInfo->getActContent(),
//                    "productTypeCd" => $incidentMainInfo->
//                    "productTypeNm" => $incidentMainInfo->get
                    "productTriggerCd" => $incidentMainInfo->getProductTrigger(),
                    "productTriggerNm" => $this->getConstArrayString(unserialize(PRODUCT_TRIGGER_NAME), $incidentMainInfo->getProductTrigger()),
                    "productHindoCd" => $incidentMainInfo->getProductHindo(),
                    "productHindoNm" => $this->getConstArrayString(unserialize(PRODUCT_HINDO_NAME), $incidentMainInfo->getProductHindo()),
                    "productGensyoCd" => $incidentMainInfo->getProductGensyo(),
                    "productGensyoNm" => $this->getConstArrayString(unserialize(PRODUCT_GENSYO_NAME), $incidentMainInfo->getProductGensyo()),
                    "productStatusCd" => $incidentMainInfo->getProductStatus(),
                    "productStatusNm" => $this->getConstArrayString(unserialize(PRODUCT_STATUS_NAME), $incidentMainInfo->getProductStatus()),
                );
            } else {
                $incidentUnitAry[]= array("result" => false);
            }

            // 変更履歴情報
            $logListAry = array();
            if (is_array($eventResult->getIncidentInfo()->getLogList()) && count($eventResult->getIncidentInfo()->getLogList()) > 0) {
                // 変更履歴
                $logList = $eventResult->getIncidentInfo()->getLogList();

                $tmpLogUpdDate = null;
                foreach ($logList as $log) { // $log = RevDto
                    $logAry = array();
                    $logUpdDate = $log->getUpdDate();

                    if (is_null($tmpLogUpdDate) || $tmpLogUpdDate != $logUpdDate) {
                        // 変更履歴情報 1件分のログ情報をセット 日付ごとにまとめる
                        $logAry["sortNo"] = $log->getSortNo();
                        $logAry["updUserNm"] = $log->getUpdUserNm();
                        $logAry["updDate"] = $log->getUpdDate();
                        $logDetailAry = array();
                        $detailFlg = false;
                        foreach ($logList as $log) { // $log = RevDto
                            if ($logUpdDate == $log->getUpdDate()) {
                                // 同じ日付でまとめる（日付は降順で取得している）
                                $logDetailAry[]= array( 'key' => $log->getRev(0)->getRevItem(), 'value' => $log->getRev(0)->getRevDetail());
                                $detailFlg = true;
                            } else if ($detailFlg) {
                                $logAry["DetailList"] = $logDetailAry;
                                $detailFlg = false;
                            }
                            if ($log === end($logList) && $logUpdDate == $log->getUpdDate()) {
                                // 最後かつ同じ日付の場合
                                $logAry["DetailList"] = $logDetailAry;
                                $detailFlg = false;
                            }
                        }
                        // 1件分のログ情報をセット
                        $logListAry[]= $logAry;
                        if (is_null($tmpLogUpdDate)) {
                            $tmpLogUpdDate = $logUpdDate;
                        }
                    }
                }
            }
            // ログListをセット
            $incidentUnitAry[]= $logListAry;
        } else {
            // ロジック処理が異常終了した場合
            $incidentUnitAry[]= array("result" => false);
        }

        return $incidentUnitAry;
    }

}
