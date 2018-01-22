<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデント登録アクション
//	作成日付・作成者：2018.01.21 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// dto読み込み
require_once('./dto/IncidentSaveDto.php');
require_once('./dto/IncidentDto.php');
require_once('./dto/IncidentMainDto.php');
require_once('./dto/UserDto.php');
require_once('./dto/SectionDto.php');

// logic処理読み込み
require_once('./logic/CreateArrayLogic.php');
require_once('./logic/IncidentSaveLogic.php');

class IncidentEntryAction extends CommonAction {

    public function index() {
        // 戻り値用配列
        $rtnAry = array();

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        /* 画面からパラメータ取得 */
        // TODO ログインユーザパラメータ
        // インシデント情報パラメータ
        $incidentId = $P['incidentId'];
        $incidentNo = $P['incidentNo'];
        $incidentStatusCd = $P['incidentStatusCd'];
        $incidentStatusNm = $P['incidentStatusNm'];
        $incidentTypeCd = $P['incidentTypeCd'];
        $insDate = $P['insDate'];
        $insUserNm = $P['insUserNm'];
        $updDate = $P['updDate'];
        $updUserNm = $P['updUserNm'];
        $parentIncidentId = $P['parentIncidentId'];
        $parentIncidentNo = $P['parentIncidentNo'];
        $incidentStartDate = $P['incidentStartDate'];
        $industryTypeCd = $P['industryTypeCd'];
        $infoSourceCd = $P['infoSourceCd'];
        $infoSourceNm = $P['infoSourceNm'];
        $infoProvider = $P['infoProvider'];
        $infoProvidedTel = $P['infoProvidedTel'];
        $memo = $P['memo'];
        $kijoId = $P['kijoId'];
        $kijoNm = $P['kijoNm'];
        $jigyosyutaiId = $P['jigyosyutaiId'];
        $jigyosyutaiNm = $P['jigyosyutaiNm'];
        $setubiId = $P['setubiId'];
        $setubiNm = $P['setubiNm'];
        $prefId = $P['prefId'];
        $prefNm = $P['prefNm'];
        $custId = $P['custId'];
        $custNm = $P['custNm'];
        $custTypeCd = $P['custTypeCd'];
        $custTypeNm = $P['custTypeNm'];
        $salesDeptCd = $P['salesDeptCd'];
        $salesDeptNm = $P['salesDeptNm'];
        $salesUserId = $P['salesUserId'];
        $salesUserNm = $P['salesUserNm'];
        $deliveryPjId = $P['deliveryPjId'];
        $deliveryPjNm = $P['deliveryPjNm'];
        $custDept = $P['custDept'];
        $requester = $P['requester'];
        $contactTel = $P['contactTel'];
        $contactFax = $P['contactFax'];
        $contactMail = $P['contactMail'];
        $skanDeptCd = $P['skanDeptCd'];
        $skanDeptNm = $P['skanDeptNm'];
        $skanUserId = $P['skanUserId'];
        $skanUserNm = $P['skanUserNm'];
        $callStartDate = $P['callStartDate'];
        $callEndDate = $P['callEndDate'];
        $callDeptCd = $P['callDeptCd'];
        $callDeptNm = $P['callDeptNm'];
        $callUserId = $P['callUserId'];
        $callUserNm = $P['callUserNm'];
        $callTel = $P['callTel'];
        $callMail = $P['callMail'];
        $callContent = $P['callContent'];
        $taioStartDate = $P['taioStartDate'];
        $taioEndDate = $P['taioEndDate'];
        $taioDeptCd = $P['taioDeptCd'];
        $taioDeptNm = $P['taioDeptNm'];
        $taioUserId = $P['taioUserId'];
        $taioUserNm = $P['taioUserNm'];
        $taioTel = $P['taioTel'];
        $taioMail = $P['taioMail'];
        $taioContent = $P['taioContent'];
        $actDate = $P['actDate'];
        $actTypeCd = $P['actTypeCd'];
        $actStartDate = $P['actStartDate'];
        $actEndDate = $P['actEndDate'];
        $actDeptCd = $P['actDeptCd'];
        $actDeptNm = $P['actDeptNm'];
        $actUserId = $P['actUserId'];
        $actUserNm = $P['actUserNm'];
        $actTel = $P['actTel'];
        $actMail = $P['actMail'];
        $actContent = $P['actContent'];
        $productTypeCd = $P['productTypeCd'];
        $productTypeNm = $P['productTypeNm'];
        $productTriggerCd = $P['productTriggerCd'];
        $productTriggerNm = $P['productTriggerNm'];
        $productHindoCd = $P['productHindoCd'];
        $productHindoNm = $P['productHindoNm'];
        $productGensyoCd = $P['productGensyoCd'];
        $productGensyoNm = $P['productGensyoNm'];
        $productStatusCd = $P['productStatusCd'];
        $productStatusNm = $P['productStatusNm'];

        /* Dto作成処理 */
        // @property IncidentSaveDto $IncidentSaveDto
        $IncidentSaveDto = new IncidentSaveDto();
        $IncidentDto = new IncidentDto();
        $IncidentMainDto = new IncidentMainDto();

        // ログインユーザ
        $loginuserDto = new UserDto();
        $loginuserDto->setUserId('newUId');
        $loginuserDto->setUserNm('newUNm');
        $loginuserDto->setSectionCd('newSCd');
        $loginuserDto->setSectionNm('newSNm');
        $IncidentSaveDto->setLoginUser($loginuserDto);

        // インシデントメイン情報
        $IncidentMainDto->setIncidentId($incidentId);
        $IncidentMainDto->setIncidentNo($incidentNo);
        $IncidentMainDto->setIncidentStsCd($incidentStatusCd);
        $IncidentMainDto->setIncidentTypeCd($incidentTypeCd);
//        $IncidentMainDto->setParentIncidentId($parentIncidentId); // TODO
        $IncidentMainDto->setParentIncidentNo($parentIncidentNo);
        $IncidentMainDto->setIncidentStartDateTime($incidentStartDate);
//        $IncidentMainDto->setIndustryTypeCd($industryTypeCd); // TODO
        $IncidentMainDto->setInfoSource($infoSourceCd);
        $IncidentMainDto->setInfoProvider($infoProvider);
        $IncidentMainDto->setInfoProviderTel($infoProvidedTel);
        $IncidentMainDto->setMemo($memo);
        $IncidentMainDto->setKijoId($kijoId);
        $IncidentMainDto->setKijoNm($kijoNm);
        $IncidentMainDto->setJigyosyutaiId($jigyosyutaiId);
        $IncidentMainDto->setJigyosyutaiNm($jigyosyutaiNm);
        $IncidentMainDto->setSetubiId($setubiId);
        $IncidentMainDto->setSetubiNm($setubiNm);
        $IncidentMainDto->setPrefId($prefId);
        $IncidentMainDto->setPrefNm($prefNm);
//        $IncidentMainDto->setDeliveryPjNo('DPNO01'); // TODO
//        $IncidentMainDto->setDeliveryPjNm('納入プロジェクト名01'); // TODO
        $IncidentMainDto->setCustId($custId);
        $IncidentMainDto->setCustNm($custNm);
        $IncidentMainDto->setCustTypeCd($custTypeCd);
        $IncidentMainDto->setCustTypeNm($custTypeNm);
        $IncidentMainDto->setCustDept($salesDeptCd);
//        $IncidentMainDto->setCustDept($salesDeptNm); // TODO 確認
        $IncidentMainDto->setRequester($requester);
        $IncidentMainDto->setContactTel($contactTel);
        $IncidentMainDto->setContactFax($contactFax);
        $IncidentMainDto->setContactMail($contactMail);
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($salesDeptCd);
        $SectionDto->setSectionNm($salesDeptNm);
        $IncidentMainDto->setSalesDept($SectionDto);
        $UserDto = new UserDto();
        $UserDto->setUserId($salesUserId);
        $UserDto->setUserNm($salesUserNm);
        $IncidentMainDto->setSalesUser($UserDto);
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($skanDeptCd);
        $SectionDto->setSectionNm($skanDeptNm);
        $IncidentMainDto->setSkanDept($SectionDto);
        $UserDto = new UserDto();
        $UserDto->setUserId($skanUserId);
        $UserDto->setUserNm($skanUserNm);
        $IncidentMainDto->setSkanUser($UserDto);
        // 受付情報
        $IncidentMainDto->setCallStartDate($callStartDate);
        $IncidentMainDto->setCallEndDate($callEndDate);
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($callDeptCd);
        $SectionDto->setSectionNm($callDeptNm);
        $IncidentMainDto->setCallDept($SectionDto);
        $UserDto = new UserDto();
        $UserDto->setUserId($callUserId);
        $UserDto->setUserNm($callUserNm);
        $IncidentMainDto->setCallUser($UserDto);
        $IncidentMainDto->setCallTel($callTel);
        $IncidentMainDto->setCallMail($callMail);
        $IncidentMainDto->setCallContent($callContent);
        // 対応情報
        $IncidentMainDto->setTaioStartDate($taioStartDate);
        $IncidentMainDto->setTaioEndDate($taioEndDate);
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($taioDeptCd);
        $SectionDto->setSectionNm($taioDeptNm);
        $IncidentMainDto->setTaioDept($SectionDto);
        $UserDto = new UserDto();
        $UserDto->setUserId($taioUserId);
        $UserDto->setUserNm($taioUserNm);
        $IncidentMainDto->setTaioUser($UserDto);
        $IncidentMainDto->setTaioTel($taioTel);
        $IncidentMainDto->setTaioMail($taioMail);
        $IncidentMainDto->setTaioContent($taioContent);
        // 処置情報
        $IncidentMainDto->setActDate($actDate);
        $IncidentMainDto->setActType($actTypeCd);
        $IncidentMainDto->setActStartTime($actStartDate);
        $IncidentMainDto->setActEndTime($actEndDate);
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($actDeptCd);
        $SectionDto->setSectionNm($actDeptNm);
        $IncidentMainDto->setActDept($SectionDto);
        $UserDto = new UserDto();
        $UserDto->setUserId($actUserId);
        $UserDto->setUserNm($actUserNm);
        $IncidentMainDto->setActUser($UserDto);
        $IncidentMainDto->setActTel($actTel);
        $IncidentMainDto->setActMail($actMail);
        $IncidentMainDto->setActContent($actContent);
        // 製品情報
        $IncidentMainDto->setProductType($productTypeCd);
        $IncidentMainDto->setProductTrigger($productTriggerCd);
        $IncidentMainDto->setProductHindo($productHindoCd);
        $IncidentMainDto->setProductGensyo($productGensyoCd);
        $IncidentMainDto->setProductStatus($productStatusCd);
//        // 登録情報 TODO
//        $IncidentMainDto->setInsDate();
//        $IncidentMainDto->setInsUserId();
//        $IncidentMainDto->setInsUserNm();
//        $IncidentMainDto->setInsSectionCd();
//        $IncidentMainDto->setInsSectionNm();

        $IncidentDto->setIncidentMainInfo($IncidentMainDto);
        $IncidentSaveDto->setIncidentInfo($IncidentDto);

        /* ロジック処理 */
        $IncidentSaveLogic = new IncidentSaveLogic();
        $eventResult = $IncidentSaveLogic->execute($IncidentSaveDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($eventResult) {
        $incidentSaveAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getReturnRst() == LOGIC_RESULT_SEIJOU) {
            array_push($incidentSaveAry, array("result" => true));
        } else {
            array_push($incidentSaveAry, array("result" => false));
        }

        return $incidentSaveAry;
    }

}
