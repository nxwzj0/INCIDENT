<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionSaveLogic
//	作成日付・作成者：2018.01.03 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once("./env.inc");
// logic処理読み込み
require_once('./logic/CommonLogic.php');
// 共通処理読み込み
require_once('./common/CommonService.php');
// dto処理読み込み
require_once('./dto/IncidentListConditionSaveDto.php');
// model処理読み込み
require_once('./model/IdentTSearchCondModel.php');
require_once('./model/IdentTSearchCondDtModel.php');

class IncidentListConditionSaveLogic extends CommonLogic {

    public function execute(IncidentListConditionSaveDto $IncidentListConditionSaveDto) {
        // 登録用の MultiExecSql　オブジェクトを作成 
        $MultiExecSql = new MultiExecSql();

        // 実例化model
        $IdentTSearchCondModel = new IdentTSearchCondModel();
        $IdentTSearchCondDtModel = new IdentTSearchCondDtModel();

        // 検索条件Array作成
        $condList = array();

        // IncidentListConditionSaveDtoから、パラメータを取得する
        // 検索条件名
        if($IncidentListConditionSaveDto->getCondNm() != null){
            $condNm = $IncidentListConditionSaveDto->getCondNm();
        }
        // 登録者ID
        if($IncidentListConditionSaveDto->getUpdUserId() != null){
            $userId = $IncidentListConditionSaveDto->getUpdUserId();
        }
        // 登録者名
        if($IncidentListConditionSaveDto->getUpdUserNm() != null){
            $userName = $IncidentListConditionSaveDto->getUpdUserNm();
        }
        // 登録者部署コード
        if($IncidentListConditionSaveDto->getUpdSectionCd() != null){
            $sectionCd = $IncidentListConditionSaveDto->getUpdSectionCd();
        }
        // 登録者部署名
        if($IncidentListConditionSaveDto->getUpdSectionNm() != null){
            $sectionName = $IncidentListConditionSaveDto->getUpdSectionNm();
        }
        // インシデント分類（障害）
        if($IncidentListConditionSaveDto->getIncidentTypeSyougai() != null){
            $condList['incidentTypeSyougai'] = $IncidentListConditionSaveDto->getIncidentTypeSyougai();
        }
        // インシデント分類（事故）
        if($IncidentListConditionSaveDto->getIncidentTypeJiko() != null){
            $condList['incidentTypeJiko'] = $IncidentListConditionSaveDto->getIncidentTypeJiko();
        }
        
        // インシデント分類（クレーム）
        if($IncidentListConditionSaveDto->getIncidentTypeClaim() != null){
            $condList['incidentTypeClaim'] = $IncidentListConditionSaveDto->getIncidentTypeClaim();
        }
        
        // インシデント分類（問合せ）
        if($IncidentListConditionSaveDto->getIncidentTypeToiawase() != null){
            $condList['incidentTypeToiawase'] = $IncidentListConditionSaveDto->getIncidentTypeToiawase();
        }
        // インシデント分類（情報）
        if($IncidentListConditionSaveDto->getIncidentTypeInfo() != null){
            $condList['incidentTypeInfo'] = $IncidentListConditionSaveDto->getIncidentTypeInfo();
        }
        // インシデント分類（その他）
        if($IncidentListConditionSaveDto->getIncidentTypeOther() != null){
            $condList['incidentTypeOther'] = $IncidentListConditionSaveDto->getIncidentTypeOther();
        }
        // ステータス（受入済）
        if($IncidentListConditionSaveDto->getIncidentStatusCall() != null){
            $condList['incidentStatusCall'] = $IncidentListConditionSaveDto->getIncidentStatusCall();
        }
        // ステータス（対応入力済）
        if($IncidentListConditionSaveDto->getIncidentStatusTaio() != null){
            $condList['incidentStatusTaio'] = $IncidentListConditionSaveDto->getIncidentStatusTaio();
        }
        // ステータス（処置入力済）
        if($IncidentListConditionSaveDto->getIncidentStatusAct() != null){
            $condList['incidentStatusAct'] = $IncidentListConditionSaveDto->getIncidentStatusAct();
        }
        // インシデント番号
        if($IncidentListConditionSaveDto->getIncidentNo() != null){
            $condList['incidentNo'] = $IncidentListConditionSaveDto->getIncidentNo();
        }
        // 受付内容
        if($IncidentListConditionSaveDto->getCallContent() != null){
            $condList['callContent'] = $IncidentListConditionSaveDto->getCallContent();
        }
        // 親インシデント番号
        if($IncidentListConditionSaveDto->getParentIncidentNo() != null){
            $condList['parentIncidentNo'] = $IncidentListConditionSaveDto->getParentIncidentNo();
        }
        // 発生日時（開始）
        if($IncidentListConditionSaveDto->getIncidentStartDateTimeFrom() != null){
            $condList['incidentStartDateTimeFrom'] = $IncidentListConditionSaveDto->getIncidentStartDateTimeFrom();
        }
        // 発生日時（終了）
        if($IncidentListConditionSaveDto->getIncidentStartDateTimeTo() != null){
            $condList['incidentStartDateTimeTo'] = $IncidentListConditionSaveDto->getIncidentStartDateTimeTo();
        }
        // 受付日（開始）
        if($IncidentListConditionSaveDto->getCallStartDateFrom() != null){
            $condList['callStartDateFrom'] = $IncidentListConditionSaveDto->getCallStartDateFrom();
        }
        // 受付日（終了）
        if($IncidentListConditionSaveDto->getCallStartDateTo() != null){
            $condList['callStartDateTo'] = $IncidentListConditionSaveDto->getCallStartDateTo();
        }
        // 業種区分（機械）
        if($IncidentListConditionSaveDto->getIndustryTypeMachinery() != null){
            $condList['industryTypeMachinery'] = $IncidentListConditionSaveDto->getIndustryTypeMachinery();
        }
        // 業種区分（電機（E））
        if($IncidentListConditionSaveDto->getIndustryTypeElectricalMachinery() != null){
            $condList['industryTypeElectricalMachinery'] = $IncidentListConditionSaveDto->getIndustryTypeElectricalMachinery();
        }
        // 業種区分（計装（I））
        if($IncidentListConditionSaveDto->getIndustryTypeInstrumentation() != null){
            $condList['industryTypeInstrumentation'] = $IncidentListConditionSaveDto->getIndustryTypeInstrumentation();
        }
        // 業種区分（情報（C））
        if($IncidentListConditionSaveDto->getIndustryTypeInfo() != null){
            $condList['industryTypeInfo'] = $IncidentListConditionSaveDto->getIndustryTypeInfo();
        }
        // 業種区分（環境）
        if($IncidentListConditionSaveDto->getIndustryTypeEnvironment() != null){
            $condList['industryTypeEnvironment'] = $IncidentListConditionSaveDto->getIndustryTypeEnvironment();
        }
        // 業種区分（WBC）
        if($IncidentListConditionSaveDto->getIndustryTypeWBC() != null){
            $condList['industryTypeWBC'] = $IncidentListConditionSaveDto->getIndustryTypeWBC();
        }
        // 業種区分（その他）
        if($IncidentListConditionSaveDto->getIndustryTypeOther() != null){
            $condList['industryTypeOther'] = $IncidentListConditionSaveDto->getIndustryTypeOther();
        }
        // 機場
        if($IncidentListConditionSaveDto->getKijoNm() != null){
            $condList['kijoNm'] = $IncidentListConditionSaveDto->getKijoNm();
        }
        // 事業主体
        if($IncidentListConditionSaveDto->getJigyosyutaiNm() != null){
            $condList['jigyosyutaiNm'] = $IncidentListConditionSaveDto->getJigyosyutaiNm();
        }
        // 設備
        if($IncidentListConditionSaveDto->getSetubiNm() != null){
            $condList['setubiNm'] = $IncidentListConditionSaveDto->getSetubiNm();
        }
        // 都道府県
        if($IncidentListConditionSaveDto->getPrefCd() != null){
            $condList['prefCd'] = $IncidentListConditionSaveDto->getPrefCd();
        }
        // 顧客
        if($IncidentListConditionSaveDto->getCustNm() != null){
            $condList['custNm'] = $IncidentListConditionSaveDto->getCustNm();
        }
        // 顧客分類（年間契約）
        if($IncidentListConditionSaveDto->getCustTypeNenkan() != null){
            $condList['custTypeNenkan'] = $IncidentListConditionSaveDto->getCustTypeNenkan();
        }
        // 顧客分類（点検契約）
        if($IncidentListConditionSaveDto->getCustTypeTenken() != null){
            $condList['custTypeTenken'] = $IncidentListConditionSaveDto->getCustTypeTenken();
        }
        // 顧客分類（契約なし）
        if($IncidentListConditionSaveDto->getCustTypeNasi() != null){
            $condList['custTypeNasi'] = $IncidentListConditionSaveDto->getCustTypeNasi();
        }
        // 顧客分類（瑕疵期間中）
        if($IncidentListConditionSaveDto->getCustTypeKasi() != null){
            $condList['custTypeKasi'] = $IncidentListConditionSaveDto->getCustTypeKasi();
        }
        // 顧客分類（その他）
        if($IncidentListConditionSaveDto->getCustTypeOther() != null){
            $condList['custTypeOther'] = $IncidentListConditionSaveDto->getCustTypeOther();
        }
        // 営業部門
        if($IncidentListConditionSaveDto->getSalesDeptNm() != null){
            $condList['salesDeptNm'] = $IncidentListConditionSaveDto->getSalesDeptNm();
        }
        // 営業担当者
        if($IncidentListConditionSaveDto->getSalesUserNm() != null){
            $condList['salesUserNm'] = $IncidentListConditionSaveDto->getSalesUserNm();
        }
        // 関係者
        if($IncidentListConditionSaveDto->getRelateUserNm() != null){
            $condList['relateUserNm'] = $IncidentListConditionSaveDto->getRelateUserNm();
        }
        
        // 検索条件ID(Sequence)で新規作成用検索条件IDを取得
        $condIdArray = $IdentTSearchCondModel->selectCondId();
        // 検索条件IDはセット
        $condId = $condIdArray[0]['NEXTVAL'];
        // IDENT_T_SEARCH_CONDの登録処理
        $insertCondResultFlg = $IdentTSearchCondModel->insertCond($condId,$condNm,$userId,$userName,$sectionCd,$sectionName,$MultiExecSql);
        // 登録処理成功判定フラグ FALSE
        if($insertCondResultFlg == SAVE_FALSE){
            // MultiExecSql　オブジェクトのrollback()を実行
            $MultiExecSql->rollback();
            // 戻る結果
            return SAVE_FALSE;
        }

        $condListKey = array();// 検索条件のKEYのArray作成
        $condListValue = array();// 検索条件のVALUEのArray作成
        $condListKey = array_keys($condList);// 検索条件のKEYのArrayをセット
        $condListValue = array_values($condList);// 検索条件のKEYのArrayをセット
        for($i = 0;$i <count($condListKey);$i++){
            // IDENT_T_SEARCH_COND_DTの登録処理
            $insertCondDtResultFlg = $IdentTSearchCondDtModel->insertCondDt($condId,$condListKey[$i],$condListValue[$i],$userId,$userName,$sectionCd,$sectionName,$MultiExecSql);

            // 登録処理成功判定フラグ FALSE
            if($insertCondDtResultFlg == SAVE_FALSE){
                // MultiExecSql　オブジェクトのrollback()を実行
                $MultiExecSql->rollback();
                // 戻る結果
                return SAVE_FALSE;
            }
        }

        // MultiExecSql　オブジェクトのcommit()を実行
        $MultiExecSql->commit();
        // 戻る結果
        return SAVE_TRUE;
    }

}

