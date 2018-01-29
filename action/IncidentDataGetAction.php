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
                $arr=(array)$incidentMainInfo->getRelateUserList();
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
                array_push($incidentUnitAry, array("result" => true,
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
//"industryTypeNm" => $incidentMainInfo->
                    "infoSourceCd" => $incidentMainInfo->getInfoSource(),
                    "infoSourceNm" => $this->getConstArrayString(unserialize(INCIDENT_TYPE_NAME), $incidentMainInfo->getInfoSource()),
                    "infoProvider" => $incidentMainInfo->getInfoProvider(),
                    "infoProvidedTel" => $incidentMainInfo->getInfoProviderTel(),
//                "relateList" => $incidentMainInfo->
                    "memo" => $incidentMainInfo->getMemo(),
                    "kijoNm" => $incidentMainInfo->getKijoNm(),
                    "jigyosyutaiNm" => $incidentMainInfo->getJigyosyutaiNm(),
                    "setubiNm" => $incidentMainInfo->getSetubiNm(),
                    "prefNm" => $incidentMainInfo->getPrefNm(),
                    "custNm" => $incidentMainInfo->getCustNm(),
                    "custTypeNm" => $incidentMainInfo->getCustTypeNm(),
//                "salesDeptCd" => $incidentMainInfo->
//                "salesDeptNm" => $incidentMainInfo->
//                "salesUserId" => $incidentMainInfo->
//                "salesUserNm" => $incidentMainInfo->
                    "deliveryPjNm" => $incidentMainInfo->getDeliveryPjNm(),
                    "custDept" => $incidentMainInfo->getCustDept(),
                    "requester" => $incidentMainInfo->getRequester(),
                    "contactTel" => $incidentMainInfo->getContactTel(),
                    "contactFax" => $incidentMainInfo->getContactFax(),
                    "contactMail" => $incidentMainInfo->getContactMail(),
//                "skanDeptCd" => $incidentMainInfo->
//                "skanDeptNm" => $incidentMainInfo->
//                "skanUserId" => $incidentMainInfo->
//                "skanUserNm" => $incidentMainInfo->
                    "callDate" => $incidentMainInfo->getCallDate(),
                    "callStartDate" => $incidentMainInfo->getCallStartDate(),
                    "callEndDate" => $incidentMainInfo->getCallEndDate(),
//                "callDeptCd" => $incidentMainInfo->
//                "callDeptNm" => $incidentMainInfo->
//                "callUserId" => $incidentMainInfo->
//                "callUserNm" => $incidentMainInfo->
                    "callTel" => $incidentMainInfo->getCallTel(),
                    "callMail" => $incidentMainInfo->getCallMail(),
                    "callContent" => $incidentMainInfo->getCallContent(),
                    "taioDate" => $incidentMainInfo->getTaioDate(),
                    "taioStartDate" => $incidentMainInfo->getTaioStartDate(),
                    "taioEndDate" => $incidentMainInfo->getTaioEndDate(),
//"taioDeptCd" => $incidentMainInfo->
//"taioDeptNm" => $incidentMainInfo->
//"taioUserId" => $incidentMainInfo->
//"taioUserNm" => $incidentMainInfo->
                    "taioTel" => $incidentMainInfo->getTaioTel(),
                    "taioMail" => $incidentMainInfo->getTaioMail(),
                    "taioContent" => $incidentMainInfo->getTaioContent(),
                    "actDate" => $incidentMainInfo->getActDate(),
//"actTypeNm" => $incidentMainInfo->getActType(),
                    "actStartDateTime" => $incidentMainInfo->getActStartTime(),
                    "actEndDateTime" => $incidentMainInfo->getActEndTime(),
//"actDeptCd" => $incidentMainInfo->
//"actDeptNm" => $incidentMainInfo->
//"actUserId" => $incidentMainInfo->
//"actUserNm" => $incidentMainInfo->
                    "actTel" => $incidentMainInfo->getActTel(),
                    "actMail" => $incidentMainInfo->getActMail(),
                    "actContent" => $incidentMainInfo->getActContent(),
//                    "productTypeCd" => $incidentMainInfo->
//"productTypeNm" => $incidentMainInfo->
//"productTriggerCd" => $incidentMainInfo->
//"productTriggerNm" => $incidentMainInfo->
//"productHindoCd" => $incidentMainInfo->
//"productHindoNm" => $incidentMainInfo->
//"productGensyoCd" => $incidentMainInfo->
//"productGensyoNm" => $incidentMainInfo->
//"productStatusCd" => $incidentMainInfo->
//"productStatusNm" => $incidentMainInfo->
                ));
            } else {
                array_push($incidentUnitAry, array("result" => false));
            }

            // 変更履歴情報
            $logListAry = array();
            if ($eventResult->getIncidentInfo()->getLogList() && is_array($eventResult->getIncidentInfo()->getLogList()) && count($eventResult->getIncidentInfo()->getLogList()) > 0) {
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
                                array_push($logDetailAry, array($log->getRev(0)->getRevItem() => $log->getRev(0)->getRevDetail()));
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
                        array_push($logListAry, $logAry);
                        if (is_null($tmpLogUpdDate)) {
                            $tmpLogUpdDate = $logUpdDate;
                        }
                    }
                }
            }
            // ログListをセット
            array_push($incidentUnitAry, $logListAry);
        } else {
            // ロジック処理が異常終了した場合
            array_push($incidentUnitAry, array("result" => false));
        }

        return $incidentUnitAry;
    }

}
