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

//    public function createDummyReturnArray($request) {
//        /*
//         * TODO:テスト用の戻り値用配列の作成
//         */
//        $incidentUnitAry = array();
//        array_push($incidentUnitAry, array(array("result" => true),
//            array("incidentNo" => "201712005", "incidentStatus" => "処置入力済", "incidentType" => "障害", "incidentTypeValue" => 1,
//                "memo" => "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。",
//                "kijoNm" => "秋田市仁井田浄水場", "setubiNm" => "XXポンプ",
//                "prefNm" => "秋田県", "incidentStartDateTime" => "2017/12/18", "callDate" => "2017/12/18",
//                "relatePj" => "有", "relateJiko" => "", "relateMr2" => "有", "relateHiyo" => "",
//                "request" => $request),
//            array("incidentNo" => "201712004", "incidentStatus" => "処置入力済", "incidentType" => "問合せ", "incidentTypeValue" => 3,
//                "memo" => "ＤＣＳの障害。
//先程から水処理１系１－１・２コントローラ（型式：ＰＣＳ－５００）で、「ＰＣＳ装置停止」が発生中。本体内部のＭＰＵカード（型式：ＷＭＰＵＡ－２０）が「ＥＲランプ点灯」の状態で、曝気槽風量自動制御が不能の状態にて対応願いたい。",
//                "kijoNm" => "万世橋浄水場", "setubiNm" => "ＤＣＳ",
//                "prefNm" => "東京都", "incidentStartDateTime" => "2017/12/17", "callDate" => "2017/12/17",
//                "relatePj" => "", "relateJiko" => "有", "relateMr2" => "有", "relateHiyo" => "",
//                "request" => $request),
//            array("incidentNo" => "201712003", "incidentStatus" => "対応入力済", "incidentType" => "障害", "incidentTypeValue" => 1,
//                "memo" => "
//№１、２の２台運転中に、№１加圧ポンプインバータが故障により停止した。故障表示はＯＨ３。現場調査をお願いしたい。そのときに№３がバックアップで立ち上がったが、正常な№２が停止動作に入った。",
//                "kijoNm" => "秋田浄水場", "setubiNm" => "№１加圧ポンプインバータ",
//                "prefNm" => "秋田県", "incidentStartDateTime" => "2017/12/17", "callDate" => "2017/12/17",
//                "relatePj" => "", "relateJiko" => "", "relateMr2" => "", "relateHiyo" => "有",
//                "request" => $request),
//            array("incidentNo" => "201712002", "incidentStatus" => "処置入力済", "incidentType" => "問合せ", "incidentTypeValue" => 3,
//                "memo" => "配水ポンプ設備の障害。
//６号配水ポンプの始動渋滞が再発生したとのこと。
//６月１５日にＭＷ)内堀殿が部品交換を行ったがその時は原因を特定出来ていなかったとのこと。",
//                "kijoNm" => "愛知浄水場", "setubiNm" => "配水ポンプ",
//                "prefNm" => "愛知県", "incidentStartDateTime" => "2017/12/04", "callDate" => "2017/12/05",
//                "relatePj" => "有", "relateJiko" => "有", "relateMr2" => "", "relateHiyo" => "",
//                "request" => $request),
//            array("incidentNo" => "201712001", "incidentStatus" => "受付済", "incidentType" => "障害", "incidentTypeValue" => 1,
//                "memo" => "機械濃縮A棟　汚泥供給ﾎﾟﾝﾌﾟA2号インバータが、汚泥供給ﾎﾟﾝﾌﾟA7号へ移設中に電解ｺﾝﾃﾞﾝｻ破裂により故障しA7号が運転不可となった。盤内にインバータ以外の機器がありそれらも電解液を浴び使用不可となった。",
//                "kijoNm" => "神奈川浄水場", "setubiNm" => "汚泥供給ﾎﾟﾝﾌﾟA2号インバータ",
//                "prefNm" => "神奈川県", "incidentStartDateTime" => "2017/12/01", "callDate" => "2017/12/01",
//                "relatePj" => "", "relateJiko" => "", "relateMr2" => "有", "relateHiyo" => "",
//                "request" => $request),
//            array("incidentNo" => "201711020", "incidentStatus" => "処置入力済", "incidentType" => "障害", "incidentTypeValue" => 1,
//                "memo" => "第１高度オゾン処理所の1号オゾン発生器用熱交換器の詰りがみられるため、洗浄等を実施し復旧させて欲しい。",
//                "kijoNm" => "山梨浄水場", "setubiNm" => "1号オゾン発生器用熱交換器",
//                "prefNm" => "山梨県", "incidentStartDateTime" => "2017/11/25", "callDate" => "2017/11/25",
//                "relatePj" => "", "relateJiko" => "", "relateMr2" => "有", "relateHiyo" => "",
//                "request" => $request),
//            array("incidentNo" => "201711019", "incidentStatus" => "受付済", "incidentType" => "障害", "incidentTypeValue" => 1,
//                "memo" => "瀬野川浄水場?戸坂取水場間のテレメータ装置　DAST-20（Mｼｽﾃﾑ：納入は富士電機）のテレメータ異常が発生。顧客にてNTT
//に調査依頼したがNTT回線に異常なしとの回答あり、テレメータ装置の故障が疑われるので対応依頼。",
//                "kijoNm" => "釧路浄水場", "setubiNm" => "テレメータ装置",
//                "prefNm" => "北海道", "incidentStartDateTime" => "2017/11/22", "callDate" => "2017/11/23",
//                "relatePj" => "有", "relateJiko" => "有", "relateMr2" => "有", "relateHiyo" => "",
//                "request" => $request),
//            array("incidentNo" => "201711018", "incidentStatus" => "処置入力済", "incidentType" => "障害", "incidentTypeValue" => 1,
//                "memo" => "№１配水ポンプ盤のファン故障発報
//サーマルがトリップ",
//                "kijoNm" => "釧路浄水場", "setubiNm" => "送水配水ポンプ盤",
//                "prefNm" => "東京都", "incidentStartDateTime" => "2017/11/20", "callDate" => "2017/11/21",
//                "relatePj" => "", "relateJiko" => "", "relateMr2" => "有", "relateHiyo" => "",
//                "request" => $request),
//            array("incidentNo" => "201711017", "incidentStatus" => "処置入力済", "incidentType" => "事故", "incidentTypeValue" => 2,
//                "memo" => "	
//小松中央ポンプ場の日報「滞水池排水量」表示がおかしい。
//その他不具合事項多数あり。",
//                "kijoNm" => "北総浄水場", "setubiNm" => "床排水ポンプ",
//                "prefNm" => "千葉県", "incidentStartDateTime" => "2017/11/14", "callDate" => "2017/11/14",
//                "relatePj" => "有", "relateJiko" => "有", "relateMr2" => "", "relateHiyo" => "",
//                "request" => $request),
//            array("incidentNo" => "201711016", "incidentStatus" => "受付済", "incidentType" => "クレーム", "incidentTypeValue" => 4,
//                "memo" => "6：55頃　ポンプ井水位　偏差異常発生。
//現地確認にて、計装盤内偏差異常と静電式異常が発生していたため、ポンプ井切替を自動→静電式メンテにしたが
//ポンプ起動せず、調節計指示にて静電式が高かったので投込メンテに切替実施。流入ゲート閉、ポンプ起動となった。",
//                "kijoNm" => "福井浄水場", "setubiNm" => "送水ポンプ",
//                "prefNm" => "福井県", "incidentStartDateTime" => "2017/11/10", "callDate" => "2017/11/10",
//                "relatePj" => "有", "relateJiko" => "", "relateMr2" => "有", "relateHiyo" => "有",
//                "request" => $request),
//        ));
//
//        return $incidentUnitAry;
//    }
}
