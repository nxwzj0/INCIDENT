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

    public function createReturnArray($eventResult) {
        $incidentUnitAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            // ロジック処理を正常に終了した場合
            $incidentMainInfo = $eventResult->getIncidentInfo()->getIncidentMainInfo();

            // インシデント情報
            if ($incidentMainInfo) {
                array_push($incidentUnitAry, array("result" => true,
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
        } else {
            // ロジック処理が異常終了した場合
            array_push($incidentUnitAry, array("result" => false));
        }

        return $incidentUnitAry;
    }

//    public function createDummyReturnArray($request) {
//        /*
//         * TODO:テスト用の戻り値用配列の作成
//         */
//        $incidentUnitAry = array();
//        array_push($incidentUnitAry, array("result" => true,
//            "incidentNo" => "201712005", "incidentStatusNm" => "処置入力済", "incidentTypeNm" => "障害", "incidentTypeCd" => 1,
//            "insDate" => "2017/1/1", "insUserName" => "川本　健", "updDate" => "2017/1/2", "updUserName" => "川本　健",
//            "parentIncidentId" => "6", "parentIncidentNo" => "親インシデント番号",
//            "incidentStartDate" => "2017/01/01 10:00", "incidentStartTime" => "2017/01/01 10:00", "incidentStartDateTime" => "2017/1/1 10:00",
//            "industryTypeCd" => "1", "industryTypeNm" => "機械",
//            "infoSourceCd" => "1", "infoSourceNm" => "顧客",
//            "infoProvider" => "水道　太郎", "infoProvidedTel" => "090-1234-5678",
//            "relateList" => array(array(name => '川本　健'), array(name => '吉原　聡'), array(name => '近藤　純平'), array(name => '吉田　伸一')),
//            "memo" => "2017/1/2に処置完了 今後の再発を防ぐ方法を検討",
//            "kijoId" => "1", "kijoNm" => "秋田市仁井田浄水場",
//            "jigyosyutaiId" => "1", "jigyosyutaiNm" => "秋田市水道局",
//            "setubiId" => "1", "setubiNm" => "ポンプ設備",
//            "prefId" => "2", "prefNm" => "秋田県",
//            "custId" => "custId01", "custNm" => "○○県○○市",
//            "custTypeCd" => "1", "custTypeNm" => "年間契約",
//            "salesDeptCd" => "salesDeptCd01", "salesDeptNm" => "○○部門",
//            "salesUserId" => "salesUserId01", "salesUserNm" => "営業担当者",
//            "deliveryPjId" => "deliveryPjId01", "deliveryPjNm" => "納入プロジェクト",
//            "custDept" => "○○市水道局", "requester" => "依頼　太郎",
//            "contactTel" => "連絡先(TEL)", "contactFax" => "連絡先(FAX)", "contactMail" => "連絡先(E-mail)",
//            "skanDeptCd" => "skanDeptCd01", "skanDeptNm" => "主管部門",
//            "skanUserId" => "skanUserId01", "skanUserNm" => "主管担当者",
//            "callDate" => "2017/1/1", "callStartDate" => "2017/1/1 10:00", "callEndDate" => "2017/1/1 10:30",
//            "callDeptCd" => "calldep1", "callDeptNm" => "受付部門１", "callUserId" => "calluser1", "callUserNm" => "川本　健",
//            "callTel" => "018-000-1111", "callMail" => "kawamoto@adf.co.jp",
//            "callContent" => "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。",
//            "taioDate" => "2017/1/2", "taioStartDate" => "2017/1/2 10:00",
//            "taioEndDate" => "2017/1/2 10:30", "taioDeptCd" => "taioDeptCd01", "taioDeptNm" => "対応部門１", "taioUserId" => "taioUser01",
//            "taioUserNm" => "川本　健", "taioTel" => "018-000-1111", "taioMail" => "kawamoto@adf.co.jp",
//            "taioContent" => "22:29 MW)南関東サービスへサービスへメール送信。
//22:31 同）〇〇殿より応答があり、対応を依頼
//22:37 〇〇殿より、「本件につき、FE)新横浜GRと連絡とりたい、おそらく、担当者は××殿である」との取次依頼あり。
//対応を依頼",
//            "actDate" => "2017/1/2",
//            "actTypeCd" => "1", "actTypeNm" => "出動",
//            "actStartDate" => "2017/1/2", "actStartTime" => "2017/1/2 10:00", "actStartDateTime" => "2017/1/2 10:00",
//            "actEndDate" => "2017/1/2", "actEndTime" => "2017/1/2 10:30", "actEndDateTime" => "2017/1/2 10:30",
//            "actDeptCd" => "actDeptCd01", "actDeptNm" => "処置部門１",
//            "actUserId" => "actUserId01", "actUserNm" => "川本　健",
//            "actTel" => "018-000-1111", "actMail" => "kawamoto@adf.co.jp",
//            "actContent" => "22:29 MW)南関東サービスへサービスへメール送信。
//22:31 同）〇〇殿より応答があり、対応を依頼
//22:37 〇〇殿より、「本件につき、FE)新横浜GRと連絡とりたい、おそらく、担当者は××殿である」との取次依頼あり。
//対応を依頼",
//            "productTypeCd" => "1", "productTypeNm" => "機種区分１",
//            "productTriggerCd" => "1", "productTriggerNm" => "通常運用",
//            "productHindoCd" => "1", "productHindoNm" => "常時",
//            "productGensyoCd" => "1", "productGensyoNm" => "運転不能",
//            "productStatusCd" => "1", "productStatusNm" => "システムダウン",
//            "request" => $request));
//
//        return $incidentUnitAry;
//    }
}
