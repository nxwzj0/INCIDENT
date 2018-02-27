<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListGetLogic
//	作成日付・作成者：2017.11.06 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");

require_once('./logic/CommonLogic.php');
require_once('./logic/DtoCreateLogic.php');

require_once('./model/OIdentTIncidentModel.php');
require_once('./model/IdentTIncidentModel.php');
require_once('./model/IdentTIncidentChangeLogModel.php');
require_once('./model/IdentTIncidentRelateUserModel.php');

require_once('./common/CommonService.php');

require_once('./inc/const.php');

require_once('./dto/IncidentGetResultDto.php');
require_once('./dto/IncidentGetDto.php');
require_once('./dto/IncidentDto.php');
require_once('./dto/RevDto.php');
require_once('./dto/RevDetailDto.php');
require_once('./dto/IncidentMainDto.php');
require_once('./dto/IncidentRelationDto.php');
require_once('./dto/UserDto.php');
require_once('./dto/SectionDto.php');
require_once('./dto/LinkRelationDto.php');
require_once('./dto/CommonDto.php');
require_once('./dto/IncidentListGetDto.php');
require_once('./dto/IncidentListGetResultDto.php');

class IncidentListGetLogic extends CommonLogic {

    public function execute(IncidentListGetDto $IncidentListGetDto) {
        // 戻りオブジェクト(IncidentListGetResultDto)を作成
        $IncidentListGetResultDto = new IncidentListGetResultDto();
        // DtoCreateLogicを作成
        $DtoCreateLogic = new DtoCreateLogic();
        // CommonServiceを作成
        $CommonService = new CommonService();

        // IncidentListGetDtoから、パラメータを取得する
        // 関連フラグ
        $relateFlg = $IncidentListGetDto->getRelateFlg();
        // 変更履歴フラグ
        $logFlg = $IncidentListGetDto->getLogFlg();
        // IncidentListGetDtoから、パラメータを取得する、$conditionsを作成
        $conditions = array();
        $conditions['keywordStr'] = $IncidentListGetDto->getKeywordStr();
        $conditions['incidentId'] = $IncidentListGetDto->getIncidentId();
        $conditions['incidentNo'] = $IncidentListGetDto->getIncidentNo();
        $conditions['parentIncidentNo'] = $IncidentListGetDto->getParentIncidentNo();
        $conditions['incidentStartDateTimeFrom'] = $IncidentListGetDto->getIncidentStartDateTimeFrom();
        $conditions['incidentStartDateTimeTo'] = $IncidentListGetDto->getIncidentStartDateTimeTo();
        $conditions['infoSource'] = $IncidentListGetDto->getInfoSource();
        $conditions['infoProvider'] = $IncidentListGetDto->getInfoProvider();
        $conditions['infoProviderTel'] = $IncidentListGetDto->getInfoProviderTel();
        $conditions['relateNm'] = $IncidentListGetDto->getRelateNm();
        $conditions['memo'] = $IncidentListGetDto->getMemo();
        $conditions['kijoNm'] = $IncidentListGetDto->getKijoNm();
        $conditions['jigyosyutaiNm'] = $IncidentListGetDto->getJigyosyutaiNm();
        $conditions['setubiNm'] = $IncidentListGetDto->getSetubiNm();
        $conditions['prefNm'] = $IncidentListGetDto->getPrefNm();
        $conditions['deliveryPjNo'] = $IncidentListGetDto->getDeliveryPjNo();
        $conditions['custNm'] = $IncidentListGetDto->getCustNm();
        $conditions['custTypeNm'] = $IncidentListGetDto->getCustTypeNm();
        $conditions['custDept'] = $IncidentListGetDto->getCustDept();
        $conditions['requester'] = $IncidentListGetDto->getRequester();
        $conditions['contactTel'] = $IncidentListGetDto->getContactTel();
        $conditions['contactFax'] = $IncidentListGetDto->getContactFax();
        $conditions['contactMail'] = $IncidentListGetDto->getContactMail();
        $conditions['salesDeptNm'] = $IncidentListGetDto->getSalesDeptNm();
        $conditions['salesUserNm'] = $IncidentListGetDto->getSalesUserNm();
        $conditions['skanDeptNm'] = $IncidentListGetDto->getSkanDeptNm();
        $conditions['skanUserNm'] = $IncidentListGetDto->getSkanUserNm();
        $conditions['callStartDateFrom'] = $IncidentListGetDto->getCallStartDateFrom();
        $conditions['callStartDateTo'] = $IncidentListGetDto->getCallStartDateTo();
        $conditions['callEndDateFrom'] = $IncidentListGetDto->getCallEndDateFrom();
        $conditions['callEndDateTo'] = $IncidentListGetDto->getCallEndDateTo();
        $conditions['callDeptNm'] = $IncidentListGetDto->getCallDeptNm();
        $conditions['callUserNm'] = $IncidentListGetDto->getCallUserNm();
        $conditions['callTel'] = $IncidentListGetDto->getCallTel();
        $conditions['callMail'] = $IncidentListGetDto->getCallMail();
        $conditions['callContent'] = $IncidentListGetDto->getCallContent();
        $conditions['taioStartDateFrom'] = $IncidentListGetDto->getTaioStartDateFrom();
        $conditions['taioStartDateTo'] = $IncidentListGetDto->getTaioStartDateTo();
        $conditions['taioEndDateFrom'] = $IncidentListGetDto->getTaioEndDateFrom();
        $conditions['taioEndDateTo'] = $IncidentListGetDto->getTaioEndDateTo();
        $conditions['taioDeptNm'] = $IncidentListGetDto->getTaioDeptNm();
        $conditions['taioUserNm'] = $IncidentListGetDto->getTaioUserNm();
        $conditions['taioTel'] = $IncidentListGetDto->getTaioTel();
        $conditions['taioMail'] = $IncidentListGetDto->getTaioMail();
        $conditions['taioContent'] = $IncidentListGetDto->getTaioContent();
        $conditions['actDateFrom'] = $IncidentListGetDto->getActDateFrom();
        $conditions['actDateTo'] = $IncidentListGetDto->getActDateTo();
        $conditions['actType'] = $IncidentListGetDto->getActType();
        $conditions['actStartTimeFrom'] = $IncidentListGetDto->getActStartTimeFrom();
        $conditions['actStartTimeTo'] = $IncidentListGetDto->getActStartTimeTo();
        $conditions['actEndTimeFrom'] = $IncidentListGetDto->getActEndTimeFrom();
        $conditions['actEndTimeTo'] = $IncidentListGetDto->getActEndTimeTo();
        $conditions['actDeptNm'] = $IncidentListGetDto->getActDeptNm();
        $conditions['actUserNm'] = $IncidentListGetDto->getActUserNm();
        $conditions['actTel'] = $IncidentListGetDto->getActTel();
        $conditions['actMail'] = $IncidentListGetDto->getActMail();
        $conditions['actContent'] = $IncidentListGetDto->getActContent();
        $conditions['productType'] = $IncidentListGetDto->getProductType();
        $conditions['productTrigger'] = $IncidentListGetDto->getProductTrigger();
        $conditions['productHindo'] = $IncidentListGetDto->getProductHindo();
        $conditions['productGensyo'] = $IncidentListGetDto->getProductGensyo();
        $conditions['productStatus'] = $IncidentListGetDto->getProductStatus();
        // 2018.01.09 Newtouch追加　start
        $conditions['incidentTypeSyougai'] = $IncidentListGetDto->getIncidentTypeSyougai();
        $conditions['incidentTypeJiko'] = $IncidentListGetDto->getIncidentTypeJiko();
        $conditions['incidentTypeClaim'] = $IncidentListGetDto->getIncidentTypeClaim();
        $conditions['incidentTypeToiawase'] = $IncidentListGetDto->getIncidentTypeToiawase();
        $conditions['incidentTypeInfo'] = $IncidentListGetDto->getIncidentTypeInfo();
        $conditions['incidentTypeOther'] = $IncidentListGetDto->getIncidentTypeOther();
        $conditions['incidentStatusCall'] = $IncidentListGetDto->getIncidentStatusCall();
        $conditions['incidentStatusTaio'] = $IncidentListGetDto->getIncidentStatusTaio();
        $conditions['incidentStatusAct'] = $IncidentListGetDto->getIncidentStatusAct();
        $conditions['industryTypeMachinery'] = $IncidentListGetDto->getIndustryTypeMachinery();
        $conditions['industryTypeElectricalMachinery'] = $IncidentListGetDto->getIndustryTypeElectricalMachinery();
        $conditions['industryTypeInstrumentation'] = $IncidentListGetDto->getIndustryTypeInstrumentation();
        $conditions['industryTypeInfo'] = $IncidentListGetDto->getIndustryTypeInfo();
        $conditions['industryTypeEnvironment'] = $IncidentListGetDto->getIndustryTypeEnvironment();
        $conditions['industryTypeWBC'] = $IncidentListGetDto->getIndustryTypeWBC();
        $conditions['industryTypeOther'] = $IncidentListGetDto->getIndustryTypeOther();
        $conditions['prefCd'] = $IncidentListGetDto->getPrefCd();
        $conditions['custTypeNenkan'] = $IncidentListGetDto->getCustTypeNenkan();
        $conditions['custTypeTenken'] = $IncidentListGetDto->getCustTypeTenken();
        $conditions['custTypeNasi'] = $IncidentListGetDto->getCustTypeNasi();
        $conditions['custTypeKasi'] = $IncidentListGetDto->getCustTypeKasi();
        $conditions['custTypeOther'] = $IncidentListGetDto->getCustTypeOther();
        $incidentType = "";
        $incidentType = $this->madeCheckboxCondtion($incidentType, $conditions, INCIDENT_TYPE_VALUE, "incidentTypeSyougai");
        $incidentType = $this->madeCheckboxCondtion($incidentType, $conditions, INCIDENT_TYPE_VALUE, "incidentTypeJiko");
        $incidentType = $this->madeCheckboxCondtion($incidentType, $conditions, INCIDENT_TYPE_VALUE, "incidentTypeClaim");
        $incidentType = $this->madeCheckboxCondtion($incidentType, $conditions, INCIDENT_TYPE_VALUE, "incidentTypeToiawase");
        $incidentType = $this->madeCheckboxCondtion($incidentType, $conditions, INCIDENT_TYPE_VALUE, "incidentTypeInfo");
        $incidentType = $this->madeCheckboxCondtion($incidentType, $conditions, INCIDENT_TYPE_VALUE, "incidentTypeOther");
        $conditions['incidentType'] = $incidentType;
        $incidentStatus = "";
        $incidentStatus = $this->madeCheckboxCondtion($incidentStatus, $conditions, INCIDENT_STATUS_VALUE, "incidentStatusCall");
        $incidentStatus = $this->madeCheckboxCondtion($incidentStatus, $conditions, INCIDENT_STATUS_VALUE, "incidentStatusTaio");
        $incidentStatus = $this->madeCheckboxCondtion($incidentStatus, $conditions, INCIDENT_STATUS_VALUE, "incidentStatusAct");
        $conditions['incidentStatus'] = $incidentStatus;
        $industryType = "";
        $industryType = $this->madeCheckboxCondtion($industryType, $conditions, INDUSTRY_TYPE_VALUE, "industryTypeMachinery");
        $industryType = $this->madeCheckboxCondtion($industryType, $conditions, INDUSTRY_TYPE_VALUE, "industryTypeElectricalMachinery");
        $industryType = $this->madeCheckboxCondtion($industryType, $conditions, INDUSTRY_TYPE_VALUE, "industryTypeInstrumentation");
        $industryType = $this->madeCheckboxCondtion($industryType, $conditions, INDUSTRY_TYPE_VALUE, "industryTypeInfo");
        $industryType = $this->madeCheckboxCondtion($industryType, $conditions, INDUSTRY_TYPE_VALUE, "industryTypeEnvironment");
        $industryType = $this->madeCheckboxCondtion($industryType, $conditions, INDUSTRY_TYPE_VALUE, "industryTypeWBC");
        $industryType = $this->madeCheckboxCondtion($industryType, $conditions, INDUSTRY_TYPE_VALUE, "industryTypeOther");
        $conditions['industryType'] = $industryType;
        $custType = "";
        $custType = $this->madeCheckboxCondtion($custType, $conditions, CUST_TYPE_VALUE, "custTypeNenkan");
        $custType = $this->madeCheckboxCondtion($custType, $conditions, CUST_TYPE_VALUE, "custTypeTenken");
        $custType = $this->madeCheckboxCondtion($custType, $conditions, CUST_TYPE_VALUE, "custTypeNasi");
        $custType = $this->madeCheckboxCondtion($custType, $conditions, CUST_TYPE_VALUE, "custTypeKasi");
        $custType = $this->madeCheckboxCondtion($custType, $conditions, CUST_TYPE_VALUE, "custTypeOther");
        $conditions['custType'] = $custType;
        // 2018.01.09 Newtouch追加　end
        try {
            // O_インシデントモデルを作成
            $OIdentTIncidentModel = new OIdentTIncidentModel();

            //関連フラグ true : 関連有り、false : 関連無し
            if ($relateFlg == RELATE_FLG_ON) {
                // インシデント情報、プロジェクト情報、MR2情報、事故クレーム情報、費用決裁申請情報を取得
                $incidentDataAll = $OIdentTIncidentModel->getIncidentWithRel($conditions);
            } else {
                // インシデント情報を取得
                $incidentDataAll = $OIdentTIncidentModel->getIncident($conditions);
            }
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(IncidentGetResultDto)
            return $IncidentListGetResultDto;
        }

        // インシデントID配列作成処理
        $incidentIdArray = array();
        // インシデントID配列のセット処理
        foreach($incidentDataAll as $one){
            array_push($incidentIdArray, $one['IN_INCIDENT_ID']);
        }

        //変更履歴フラグ true : 変更履歴有り、false : 変更履歴無し　かつ　インシデント情報が有る
        if($logFlg == LOG_FLG_ON && isset($incidentDataAll)){
            try {
                // IdentTIncidentChangeLogModelを作成
                $IdentTIncidentChangeLogModel = new IdentTIncidentChangeLogModel();
                // 変更履歴情報の取得
                $incidentChangeLogData = $IdentTIncidentChangeLogModel->getByIncidentIdList($incidentIdArray);
            } catch (Exception $e) {
                // LOGIC結果　SQLエラー '1' をセット
                $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
                // 戻りオブジェクト(IncidentGetResultDto)
                return $IncidentListGetResultDto;
            }
        }

        // インシデント情報が有る場合は、関係者リストを取得する
        if (isset($incidentDataAll)) {
            try {
                // IdentTIncidentRelateUserModelを作成
                $IdentTIncidentRelateUserModel = new IdentTIncidentRelateUserModel();
                // インシデントメイン情報(IncidentMainDto)の関係者リスト(relateList)の取得
                $incidentRelateUserData = $IdentTIncidentRelateUserModel->getByIncidentIdList($incidentIdArray);
            } catch (Exception $e) {
                // LOGIC結果　SQLエラー '1' をセット
                $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
                // 戻りオブジェクト(IncidentGetResultDto)
                return $IncidentListGetResultDto;
            }
        }

        // 取得したインシデント情報から、機場IDと顧客名を取得する
        // 機場IDのarray変数
        $kijiId = array();
        $kijiIdArray = array();
        // 機場ID配列のセット処理
        foreach($incidentDataAll as $one){
            if($one['IN_KIJO_ID'] != null){
                array_push($kijiId, $one['IN_KIJO_ID']);
            }
        }
        // 機場IDが有る場合
        if(count($kijiId) > 0){
            $kijiId  = array_unique($kijiId);
            $kijiIdArray['kijoId'] = $kijiId;
        }

        // 顧客IDのarray変数
        $custId = array();
        $custIdArray = array();
        // 顧客IDのセット処理
        foreach($incidentDataAll as $one){
            if($one['IN_CUST_ID'] != null){
                array_push($custId, $one['IN_CUST_ID']);
            }
        }
        // 顧客名が有る場合
        if(count($custId) > 0){
            $custId  = array_unique($custId);
            $custNmArray['custId'] = $custId;
        }

        try {
            // IdentTIncidentModelを作成
            $IdentTIncidentModel = new IdentTIncidentModel();
            if($kijiIdArray['kijoId'] != NULL){
                // 機場IDでインシデントメイン情報の取得
                $incidentRelationDataByKijiIdAll = $IdentTIncidentModel->getIncidentList($kijiIdArray);
            }
            if($custIdArray['custId'] != NULL){
                // 顧客IDでインシデントメイン情報の取得
                $incidentRelationDataByCustIdAll = $IdentTIncidentModel->getIncidentList($custIdArray);
            }
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(IncidentGetResultDto)
            return $IncidentListGetResultDto;
        }

        // 個数分インシデント情報リストをループ
        foreach ($incidentDataAll as $incidentData) {
            // IncidentDtoを作成
            $IncidentDto = new IncidentDto();
            //関連フラグ true : 関連有り、false : 関連無し
            if($relateFlg == RELATE_FLG_ON){
                // プロジェクト情報、MR2情報、事故クレーム情報、費用決裁申請情報⇒$LinkRelationDtoにセットする処理
                $LinkRelationDto = $DtoCreateLogic->createLinkRelationDto($incidentData);
            }
            // インシデントメイン情報(IncidentMainDto)の取得
            $IncidentMainDto = $DtoCreateLogic->createIncidentMainDto($incidentData);

            if(isset($incidentChangeLogData)){
                // 変更履歴情報(相関インシデントIDで取得)
                $incidentChangeLog = array();
                foreach($incidentChangeLogData as $incidentChangeLogDataOne){
                    if($incidentChangeLogDataOne['INCIDENT_ID'] == $incidentData['IN_INCIDENT_ID']){
                        array_push($incidentChangeLog,$incidentChangeLogDataOne);
                    }
                }

                foreach($incidentChangeLog as $one){
                    $RevDto = new RevDto();
                    $RevDetailDto = new RevDetailDto();

                    $RevDto->setSortNo($one['SORT_NO']);
                    $RevDto->setUpdUserNm($one['CHANGE_USER_NM']);
                    $RevDto->setUpdDate($one['CHANGE_DATE']);
                    $RevDetailDto->setRevItem($one['CHANGE_ITEM']);
                    $RevDetailDto->setRevDetail($one['CHANGE_CONTENT']);
                    $RevDto->addRevList($RevDetailDto);
                    // 戻り値の設定
                    // 変更履歴情報(RevDto)⇒IncidentDtoのセット
                    $IncidentDto->addLogList($RevDto);
                }
            }

            // 関係者リスト(relateList)(相関インシデントIDで取得)
            $incidentRelateUser = array();
            foreach($incidentRelateUserData as $incidentRelateUserOne){
                if($incidentRelateUserOne['INCIDENT_ID'] == $incidentData['IN_INCIDENT_ID']){
                    array_push($incidentRelateUser,$incidentRelateUserOne);
                }
            }

            foreach($incidentRelateUser as $one){
                $UserDto = new UserDto();

                $UserDto->setUserId($one['RELATE_USER_ID']);
                $UserDto->setUserNm($one['RELATE_USER_NM']);

                // 関係者リスト(relateList)⇒インシデントメイン情報(IncidentMainDto)のセット
                $IncidentMainDto->addRelateList($UserDto);
            }

            // 2018.01.18 Newtouch追加 start
            if(parent::checkDataExistence($incidentRelationDataByKijiIdAll) == SAVE_TRUE){
            // 2018.01.18 Newtouch追加 end
                // 機場IDでインシデントメイン情報の取得(相関機場IDで取得)
                $incidentRelationDataByKijiId = array();
                foreach($incidentRelationDataByKijiIdAll as $incidentRelationDataByKijiIdOne){
                    if($incidentRelationDataByKijiIdOne['IN_KIJO_ID'] == $incidentData['IN_KIJO_ID'] &&
                        $incidentRelationDataByKijiIdOne['IN_INCIDENT_ID'] != $incidentData['IN_INCIDENT_ID'] ){ // 自身のインシデント情報は除外する
                        array_push($incidentRelationDataByKijiId,$incidentRelationDataByKijiIdOne);
                    }
                }

                foreach($incidentRelationDataByKijiId as $one){
                    $IncidentRelationDto = new IncidentRelationDto();

                    $IncidentRelationDto->setRelateType(RELATE_INCIDENT_TYPE_KIJO);
                    $IncidentRelationDto->setRelateIncidentId($one['IN_INCIDENT_ID']);
                    $IncidentRelationDto->setRelateIncidentContent($one['IN_CALL_CONTENT']);
                    $IncidentRelationDto->setRelateIncidentNo($one['IN_INCIDENT_NO']);
                    $incidentTypeNm = $CommonService->getConstArrayString(unserialize(INCIDENT_TYPE),$one['IN_INCIDENT_TYPE_CD']);
                    $IncidentRelationDto->setRelateIncidentType($incidentTypeNm);
                    $IncidentRelationDto->setRelateIncidentStartDateTime($one['IN_INCIDENT_START_DATETIME']);
                    $IncidentRelationDto->setRelateIncidentKijoNm($one['IN_KIJO_NM']);

                    // インシデントメイン情報⇒IncidentDtoのセット
                    $IncidentDto->addRelateIncidentList($IncidentRelationDto);
                }
            // 2018.01.18 Newtouch追加 start
            }
            // 2018.01.18 Newtouch追加 end

            // 2018.01.18 Newtouch追加 start
            if(parent::checkDataExistence($incidentRelationDataByCustId) == SAVE_TRUE){
            // 2018.01.18 Newtouch追加 end
                // 顧客IDでインシデントメイン情報の取得(相関インシデントIDで取得)
                $incidentRelationDataByCustId = array();
                foreach($incidentRelationDataByCustIdAll as $incidentRelationDataByCustIdOne){
                    if($incidentRelationDataByCustIdOne['IN_CUST_ID'] == $incidentData['IN_CUST_ID'] &&
                        $incidentRelationDataByCustIdOne['IN_INCIDENT_ID'] != $incidentData['IN_INCIDENT_ID'] ){ // 自身のインシデント情報は除外する
                        array_push($incidentRelationDataByCustId,$incidentRelationDataByCustIdOne);
                    }
                }

                foreach($incidentRelationDataByCustId as $one){
                    $IncidentRelationDto = new IncidentRelationDto();

                    $IncidentRelationDto->setRelateType(RELATE_INCIDENT_TYPE_CUST);
                    $IncidentRelationDto->setRelateIncidentId($one['IN_INCIDENT_ID']);
                    $IncidentRelationDto->setRelateIncidentContent($one['IN_CALL_CONTENT']);
                    $IncidentRelationDto->setRelateIncidentNo($one['IN_INCIDENT_NO']);
                    $incidentTypeNm = $CommonService->getConstArrayString(unserialize(INCIDENT_TYPE),$one['IN_INCIDENT_TYPE_CD']);
                    $IncidentRelationDto->setRelateIncidentType($incidentTypeNm);
                    $IncidentRelationDto->setRelateIncidentStartDateTime($one['IN_INCIDENT_START_DATETIME']);
                    $IncidentRelationDto->setRelateIncidentKijoNm($one['IN_KIJO_NM']);

                    // インシデントメイン情報⇒IncidentDtoのセット
                    $IncidentDto->addRelateIncidentList($IncidentRelationDto);
                }
            // 2018.01.18 Newtouch追加 start
            }
            // 2018.01.18 Newtouch追加 end

            // インシデントメイン情報(IncidentMainDto)⇒IncidentDtoのセット
            if (isset($IncidentMainDto)) {
                $IncidentDto->setIncidentMainInfo($IncidentMainDto);
            }
            // 関連リンク情報(LinkRelationDto)⇒IncidentDtoのセット
            if (isset($LinkRelationDto)) {
                $IncidentDto->setRelateLink($LinkRelationDto);
            }

            // IncidentDto⇒IncidentGetResultDtoのセット
            $IncidentListGetResultDto->addIncidentList($IncidentDto);
        }

        // LOGIC結果　正常時 '0' をセット
        $IncidentListGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // 戻りオブジェクト(IncidentListGetResultDto)
        return $IncidentListGetResultDto;
    }

// ::: 2018.01.25 [#23] 入力補助モーダル　インシデント Add Start newtouch
    /**
     * チェックボックスの状態に応じて検索条件を作成する
     * @param type $result 結果
     * @param type $conditions 条件配列
     * @param type $type カテゴリ名
     * @param type $paramNm フィールド名
     * @return string
     */
    public function madeCheckboxCondtion($result, $conditions, $type, $paramNm) {
        $CommonService = new CommonService();
        $param = $conditions[$paramNm];
        $val = $CommonService->getConstArrayString(unserialize($type), $paramNm);
        if ($param == null || $param == "" || $param == "false") {
            return $result;
        } elseif ($param == "true") {
            if ($result == "") {
                $result .= "'" . $val . "'";
            } else {
                $result .= "," . "'" . $val . "'";
            }
        }
        return $result;
    }
// ::: 2018.01.25 [#23] 入力補助モーダル　インシデント Add End   newtouch

}
