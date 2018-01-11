<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentGetLogic
//	作成日付・作成者：2017.11.01 NEWTOUCH)newtouch
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

class IncidentGetLogic extends CommonLogic {

    public function execute(IncidentGetDto $IncidentGetDto) {
        // 戻りオブジェクト(IncidentGetResultDto)を作成
        $IncidentGetResultDto = new IncidentGetResultDto();
        // IncidentDtoを作成
        $IncidentDto = new IncidentDto();
        // DtoCreateLogicを作成
        $DtoCreateLogic = new DtoCreateLogic();

        // インシデントIDを取得する
        $incidentId = $IncidentGetDto->getIncidentId();
        // 関連フラグを取得する
        $relateFlg = $IncidentGetDto->getRelateFlg();
        // 変更履歴フラグを取得する
        $logFlg = $IncidentGetDto->getLogFlg();

        // 関連フラグ true : 関連有り、false : 関連無し
        // 関連フラグ　⇒ true : 関連有り
        if($relateFlg == RELATE_FLG_ON){
            try {
                // インシデント情報と関係リンク情報の取得
                // O_インシデントモデルを作成
                $OIdentTIncidentModel = new OIdentTIncidentModel();

                // インシデント情報、プロジェクト情報、MR2情報、事故クレーム情報、費用決裁申請情報を取得
                $incidentData = $OIdentTIncidentModel->findIncidentWithRel($incidentId);

                if (isset($incidentData[0])) {
                    // 二次元配列は一次元配列に変更する
                    $incidentData = $incidentData[0];
                    // インシデント情報、プロジェクト情報、MR2情報、事故クレーム情報、費用決裁申請情報⇒$LinkRelationDtoにセットする処理
                    $LinkRelationDto = $DtoCreateLogic->createLinkRelationDto($incidentData);
                }
            } catch (Exception $e) {
                // LOGIC結果　SQLエラー '1' をセット
                $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
                // 戻りオブジェクト(IncidentGetResultDto)
                return $IncidentGetResultDto;
            }

        // 関連フラグ ⇒　false : 関連無し
        }else{
            try {
                // インシデントモデルを作成
                $IdentTIncidentModel = new IdentTIncidentModel();
                // インシデント情報の取得
                $incidentData = $IdentTIncidentModel->findByKey($incidentId);
                // 二次元配列は一次元配列に変更する
                $incidentData = $incidentData[0];
            } catch (Exception $e) {
                // LOGIC結果　SQLエラー '1' をセット
                $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
                // 戻りオブジェクト(IncidentGetResultDto)
                return $IncidentGetResultDto;
            }
        }

        try {
            if (isset($incidentData) && count($incidentData) > 0) {
                // インシデントメイン情報(IncidentMainDto)の取得
                $IncidentMainDto = $DtoCreateLogic->createIncidentMainDto($incidentData);
            }
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(IncidentGetResultDto)
            return $IncidentGetResultDto;
        }

        //変更履歴フラグ true : 変更履歴有り、false : 変更履歴無し　かつ　インシデント情報が有る
        if ($logFlg == LOG_FLG_ON && isset($incidentData)) {
            try {
                // IdentTIncidentChangeLogModelを作成
                $IdentTIncidentChangeLogModel = new IdentTIncidentChangeLogModel();
                // 変更履歴情報の取得
                $incidentChangeLogData = $IdentTIncidentChangeLogModel->getByIncidentId($incidentId);
            } catch (Exception $e) {
                // LOGIC結果　SQLエラー '1' をセット
                $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
                // 戻りオブジェクト(IncidentGetResultDto)
                return $IncidentGetResultDto;
            }

            foreach($incidentChangeLogData as $one){
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

        // インシデント情報が有る場合は、関係者リストを取得する
        if (isset($incidentData)) {
            try {
                // IdentTIncidentRelateUserModelを作成
                $IdentTIncidentRelateUserModel = new IdentTIncidentRelateUserModel();
                // インシデントメイン情報(IncidentMainDto)の関係者リスト(relateList)の取得
                $incidentRelateUserData = $IdentTIncidentRelateUserModel->getByIncidentId($incidentId);
            } catch (Exception $e) {
                // LOGIC結果　SQLエラー '1' をセット
                $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
                // 戻りオブジェクト(IncidentGetResultDto)
                return $IncidentGetResultDto;
            }

            foreach($incidentRelateUserData as $one){
                $UserDto = new UserDto();

                $UserDto->setUserId($one['RELATE_USER_ID']);
                $UserDto->setUserNm($one['RELATE_USER_NM']);

                // 関係者リスト(relateList)⇒インシデントメイン情報(IncidentMainDto)のセット
                $IncidentMainDto->addRelateList($UserDto);
            }
        }

        // CommonServiceを作成
        $CommonService = new CommonService();
        // 取得したインシデント情報から、機場IDと顧客名を取得する
        // 機場IDのarray変数
        $kijiIdArray = array();
        $kijiIdArray['kijoId'] = $incidentData['IN_KIJO_ID'];
        $kijiIdArray['excludeIncidentId'] = $incidentId;
        // 顧客名のarray変数
        $custNmArray = array();
        $custNmArray['custNm'] = $incidentData['IN_CUST_NM'];
        $custNmArray['excludeIncidentId'] = $incidentId;
        // IdentTIncidentModelを作成
        $IdentTIncidentModel = new IdentTIncidentModel();

        try {
            if (isset($kijiIdArray['kijoId'])) {
                // 機場IDでインシデントメイン情報の取得
                $incidentRelationDataByKijiId = $IdentTIncidentModel->getIncident($kijiIdArray);
            }
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(IncidentGetResultDto)
            return $IncidentGetResultDto;
        }

        if (isset($incidentRelationDataByKijiId)) {
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

        try {
            if (isset($custNmArray['custNm'])) {
                // 顧客名でインシデントメイン情報の取得
                $incidentRelationDataByCustNm = $IdentTIncidentModel->getIncident($custNmArray);
            }
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(IncidentGetResultDto)
            return $IncidentGetResultDto;
        }

        if (isset($incidentRelationDataByCustNm)) {
            foreach($incidentRelationDataByCustNm as $one){
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

        // 戻り値の設定
            // インシデントメイン情報(IncidentMainDto)⇒IncidentDtoのセット
            if (isset($IncidentMainDto)) {
                $IncidentDto->setIncidentMainInfo($IncidentMainDto);
            }
            // 関連リンク情報(LinkRelationDto)⇒IncidentDtoのセット
            if (isset($LinkRelationDto)) {
                $IncidentDto->setRelateLink($LinkRelationDto);
            }

        // IncidentDto⇒IncidentGetResultDtoのセット
        $IncidentGetResultDto->setIncidentInfo($IncidentDto);
        // LOGIC結果　正常時 '0' をセット
        $IncidentGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);

        // 戻りオブジェクト(IncidentGetResultDto)
        return $IncidentGetResultDto;
    }

}
