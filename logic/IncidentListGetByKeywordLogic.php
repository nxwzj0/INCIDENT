<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListGetByKeywordLogic
//	作成日付・作成者：2018.01.17 NEWTOUCH)newtouch
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

class IncidentListGetByKeywordLogic extends CommonLogic {

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
        $conditions['keyword'] = $IncidentListGetDto->getKeywordStr();
        try {
            // O_インシデントモデルを作成
            $OIdentTIncidentModel = new OIdentTIncidentModel();

            //関連フラグ true : 関連有り、false : 関連無し
            if ($relateFlg == RELATE_FLG_ON) {
                // インシデント情報、プロジェクト情報、MR2情報、事故クレーム情報、費用決裁申請情報を取得
                $incidentDataAll = $OIdentTIncidentModel->getIncidentWithRelByKeyword($conditions);
            } else {
                // インシデント情報を取得
                $incidentDataAll = $OIdentTIncidentModel->getIncidentByKeyword($conditions);
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

        // 取得したインシデント情報から、機場IDと顧客IDを取得する
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
        // 顧客IDが有る場合
        if(count($custId) > 0){
            $custId  = array_unique($custId);
            $custIdArray['custId'] = $custId;
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

            if(parent::checkDataExistence($incidentRelationDataByKijiIdAll) == SAVE_TRUE){
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
                    $incidentTypeNm = $CommonService->getConstArrayString(unserialize(INCIDENT_TYPE),$one['IN_INCIDENT_TYPE']);
                    $IncidentRelationDto->setRelateIncidentType($incidentTypeNm);
                    $IncidentRelationDto->setRelateIncidentStartDateTime($one['IN_INCIDENT_START_DATETIME']);
                    $IncidentRelationDto->setRelateIncidentKijoNm($one['IN_KIJO_NM']);

                    // インシデントメイン情報⇒IncidentDtoのセット
                    $IncidentDto->addRelateIncidentList($IncidentRelationDto);
                }
            }

            if(parent::checkDataExistence($incidentRelationDataByCustIdAll) == SAVE_TRUE){
                // 顧客IDでインシデントメイン情報の取得(相関インシデントIDで取得)
                $incidentRelationDataByCustId = array();
                foreach($incidentRelationDataByCustIdAll as $incidentRelationDataByCustIdOne){
                    if($incidentRelationDataByCustIdOne['IN_CUST_NM'] == $incidentData['IN_CUST_NM'] &&
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
                    $incidentTypeNm = $CommonService->getConstArrayString(unserialize(INCIDENT_TYPE),$one['IN_INCIDENT_TYPE']);
                    $IncidentRelationDto->setRelateIncidentType($incidentTypeNm);
                    $IncidentRelationDto->setRelateIncidentStartDateTime($one['IN_INCIDENT_START_DATETIME']);
                    $IncidentRelationDto->setRelateIncidentKijoNm($one['IN_KIJO_NM']);

                    // インシデントメイン情報⇒IncidentDtoのセット
                    $IncidentDto->addRelateIncidentList($IncidentRelationDto);
                }
            }

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

}
