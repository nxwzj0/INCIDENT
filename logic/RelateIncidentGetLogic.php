<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：RelateIncidentGetlogic
//	作成日付・作成者：2018.01.31 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");

require_once('./logic/CommonLogic.php');

require_once('./model/IdentTIncidentModel.php');

require_once('./common/CommonService.php');

require_once('./inc/const.php');

require_once('./dto/RelateIncidentGetResultDto.php');
require_once('./dto/RelateIncidentGetDto.php');
require_once('./dto/IncidentRelationDto.php');
require_once('./dto/CommonDto.php');

class RelateIncidentGetLogic extends CommonLogic {

    public function execute(RelateIncidentGetDto $RelateIncidentGetDto) {
        // 戻りオブジェクト(RelateIncidentGetResultDto)を作成
        $RelateIncidentGetResultDto = new RelateIncidentGetResultDto();

        // インシデントIDを取得する
        $incidentId = $RelateIncidentGetDto->getIncidentId();

        try {
            // インシデントモデルを作成
            $IdentTIncidentModel = new IdentTIncidentModel();
            // インシデント情報の取得
            $incidentData = $IdentTIncidentModel->findByKey($incidentId);
            // 二次元配列は一次元配列に変更する
            $incidentData = $incidentData[0];
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $RelateIncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(RelateIncidentGetResultDto)
            return $RelateIncidentGetResultDto;
        }

        // CommonServiceを作成
        $CommonService = new CommonService();
        // 取得したインシデント情報から　同一機場ID、顧客ID、機種区分、類似障害(障害状況コードで)を取得する
        // 機場IDのarray変数
        $kijiIdArray = array();
        $kijiIdArray['kijoId'] = $incidentData['IN_KIJO_ID'];
        $kijiIdArray['excludeIncidentId'] = $incidentId;
        // 顧客IDのarray変数
        $custIdArray = array();
        $custIdArray['custId'] = $incidentData['IN_CUST_ID'];
        $custIdArray['excludeIncidentId'] = $incidentId;
        // 機種区分のarray変数
        $KisyuKbnCdArray = array();
        $KisyuKbnCdArray['KisyuKbnCd'] = $incidentData['IN_KISYU_KBN_CD'];
        $KisyuKbnCdArray['excludeIncidentId'] = $incidentId;
        // 類似障害(障害状況トリガー、障害状況頻度、障害状況現象、障害状況状態で)のarray変数
        $productArray = array();
        $productArray['productTrigger'] = $incidentData['IN_PRODUCT_TRIGGER'];
        $productArray['productHindo'] = $incidentData['IN_PRODUCT_HINDO'];
        $productArray['productGensyo'] = $incidentData['IN_PRODUCT_GENSYO'];
        $productArray['productStatus'] = $incidentData['IN_PRODUCT_STATUS'];
        $productArray['excludeIncidentId'] = $incidentId;
        // IdentTIncidentModelを作成
        $IdentTIncidentModel = new IdentTIncidentModel();

        try {
            if ($kijiIdArray['kijoId'] != NULL) {
                // 機場IDでインシデントメイン情報の取得
                $incidentRelationDataByKijiId = $IdentTIncidentModel->getRelateIncident($kijiIdArray);
            }
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $RelateIncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(RelateIncidentGetResultDto)
            return $RelateIncidentGetResultDto;
        }

        if (isset($incidentRelationDataByKijiId)) {
            foreach ($incidentRelationDataByKijiId as $one) {
                $IncidentRelationDto = new IncidentRelationDto();

                $IncidentRelationDto->setRelateType(RELATE_INCIDENT_TYPE_KIJO);
                $IncidentRelationDto->setRelateIncidentId($one['IN_INCIDENT_ID']);
                $IncidentRelationDto->setRelateIncidentContent($one['IN_CALL_CONTENT']);
                $IncidentRelationDto->setRelateIncidentNo($one['IN_INCIDENT_NO']);
                $incidentTypeNm = $CommonService->getConstArrayString(unserialize(INCIDENT_TYPE_NAME), $one['IN_INCIDENT_TYPE_CD']);
                $IncidentRelationDto->setRelateIncidentType($incidentTypeNm);
                $IncidentRelationDto->setRelateIncidentStartDateTime($one['IN_INCIDENT_START_DATETIME']);
                $IncidentRelationDto->setRelateIncidentKijoNm($one['IN_KIJO_NM']);
                $IncidentRelationDto->setRelateIncidentCustNm($one['IN_CUST_NM']);

                // 関連インシデントメイン情報⇒RelateIncidentGetResultDtoのセット
                $RelateIncidentGetResultDto->addRelateIncidentKijiIdList($IncidentRelationDto);
            }
        }

        try {
            if ($custIdArray['custId'] != NULL) {
                // 顧客IDでインシデントメイン情報の取得
                $incidentRelationDataByCustId = $IdentTIncidentModel->getRelateIncident($custIdArray);
            }
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $RelateIncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(RelateIncidentGetResultDto)
            return $RelateIncidentGetResultDto;
        }

        if (isset($incidentRelationDataByCustId)) {
            foreach ($incidentRelationDataByCustId as $one) {
                $IncidentRelationDto = new IncidentRelationDto();

                $IncidentRelationDto->setRelateType(RELATE_INCIDENT_TYPE_CUST);
                $IncidentRelationDto->setRelateIncidentId($one['IN_INCIDENT_ID']);
                $IncidentRelationDto->setRelateIncidentContent($one['IN_CALL_CONTENT']);
                $IncidentRelationDto->setRelateIncidentNo($one['IN_INCIDENT_NO']);
                $incidentTypeNm = $CommonService->getConstArrayString(unserialize(INCIDENT_TYPE_NAME), $one['IN_INCIDENT_TYPE_CD']);
                $IncidentRelationDto->setRelateIncidentType($incidentTypeNm);
                $IncidentRelationDto->setRelateIncidentStartDateTime($one['IN_INCIDENT_START_DATETIME']);
                $IncidentRelationDto->setRelateIncidentKijoNm($one['IN_KIJO_NM']);
                $IncidentRelationDto->setRelateIncidentCustNm($one['IN_CUST_NM']);

                // 関連インシデントメイン情報⇒$RelateIncidentGetResultDtoのセット
                $RelateIncidentGetResultDto->addRelateIncidentCustIdList($IncidentRelationDto);
            }
        }

        try {
            if ($KisyuKbnCdArray['KisyuKbnCd'] != NULL) {
                // 機種区分コードでインシデントメイン情報の取得
                $incidentRelationDataByKisyuKbnCd = $IdentTIncidentModel->getRelateIncident($KisyuKbnCdArray);
            }
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $RelateIncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(RelateIncidentGetResultDto)
            return $RelateIncidentGetResultDto;
        }

        if (isset($incidentRelationDataByKisyuKbnCd)) {
            foreach ($incidentRelationDataByKisyuKbnCd as $one) {
                $IncidentRelationDto = new IncidentRelationDto();

                $IncidentRelationDto->setRelateType(RELATE_INCIDENT_TYPE_KIJO);
                $IncidentRelationDto->setRelateIncidentId($one['IN_INCIDENT_ID']);
                $IncidentRelationDto->setRelateIncidentContent($one['IN_CALL_CONTENT']);
                $IncidentRelationDto->setRelateIncidentNo($one['IN_INCIDENT_NO']);
                $incidentTypeNm = $CommonService->getConstArrayString(unserialize(INCIDENT_TYPE_NAME), $one['IN_INCIDENT_TYPE_CD']);
                $IncidentRelationDto->setRelateIncidentType($incidentTypeNm);
                $IncidentRelationDto->setRelateIncidentStartDateTime($one['IN_INCIDENT_START_DATETIME']);
                $IncidentRelationDto->setRelateIncidentKijoNm($one['IN_KIJO_NM']);
                $IncidentRelationDto->setRelateIncidentCustNm($one['IN_CUST_NM']);

                // 関連インシデントメイン情報⇒RelateIncidentGetResultDtoのセット
                $RelateIncidentGetResultDto->addRelateIncidentKisyuKbnCdList($IncidentRelationDto);
            }
        }

        try {
            if ($productArray['productTrigger'] != NULL || $productArray['productHindo'] != NULL ||
                $productArray['productGensyo'] != NULL || $productArray['productStatus'] != NULL) {
                // 類似障害(障害状況トリガー、障害状況頻度、障害状況現象、障害状況状態で)インシデントメイン情報の取得
                $incidentRelationDataByProduct = $IdentTIncidentModel->getRelateIncident($productArray);
            }
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $RelateIncidentGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(RelateIncidentGetResultDto)
            return $RelateIncidentGetResultDto;
        }

        if (isset($incidentRelationDataByProduct)) {
            foreach ($incidentRelationDataByProduct as $one) {
                $IncidentRelationDto = new IncidentRelationDto();

                $IncidentRelationDto->setRelateType(RELATE_INCIDENT_TYPE_KIJO);
                $IncidentRelationDto->setRelateIncidentId($one['IN_INCIDENT_ID']);
                $IncidentRelationDto->setRelateIncidentContent($one['IN_CALL_CONTENT']);
                $IncidentRelationDto->setRelateIncidentNo($one['IN_INCIDENT_NO']);
                $incidentTypeNm = $CommonService->getConstArrayString(unserialize(INCIDENT_TYPE_NAME), $one['IN_INCIDENT_TYPE_CD']);
                $IncidentRelationDto->setRelateIncidentType($incidentTypeNm);
                $IncidentRelationDto->setRelateIncidentStartDateTime($one['IN_INCIDENT_START_DATETIME']);
                $IncidentRelationDto->setRelateIncidentKijoNm($one['IN_KIJO_NM']);
                $IncidentRelationDto->setRelateIncidentCustNm($one['IN_CUST_NM']);

                // 関連インシデントメイン情報⇒RelateIncidentGetResultDtoのセット
                $RelateIncidentGetResultDto->addRelateIncidentProductList($IncidentRelationDto);
            }
        }

        // LOGIC結果　正常時 '0' をセット
        $RelateIncidentGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);

        // 戻りオブジェクト(RelateIncidentGetResultDto)
        return $RelateIncidentGetResultDto;
    }

}
