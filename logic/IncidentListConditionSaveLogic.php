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
require_once('./dto/IncidentListConditionSaveResultDto.php');
// model処理読み込み
require_once('./model/IdentTSearchCondModel.php');
require_once('./model/IdentTSearchCondDtModel.php');

class IncidentListConditionSaveLogic extends CommonLogic {

    public function execute(IncidentListConditionSaveDto $incidentListConditionSaveDto) {

        // 実例化model
        $IdentTSearchCondModel = new IdentTSearchCondModel();
        $IdentTSearchCondDtModel = new IdentTSearchCondDtModel();

        // 実例化model
        $incidentListConditionSaveResultDto = new IncidentListConditionSaveResultDto();

        // 検索条件名の重複チェックFlg
        $CondNmExisFlg = $this->checkDataExistence($IdentTSearchCondModel->findCondNm($incidentListConditionSaveDto->getCondNm()));

        if($CondNmExisFlg){// 検索条件名重複の場合
            // LOGIC結果　検索条件名が重複の場合 '1' をセット
            $incidentListConditionSaveResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // LOGIC結果メッセージ　'検索条件名が重複しています'
            $incidentListConditionSaveResultDto->setResultMsg(LOGIC_RESULT_CONDNM_DUPLICATE);
            // 戻りオブジェクト($incidentListConditionSaveResultDto)
            return $incidentListConditionSaveResultDto;
        }

        // 登録用の MultiExecSql　オブジェクトを作成 
        $MultiExecSql = new MultiExecSql();

        // 検索条件Array作成
        $condList = array();

        // IncidentListConditionSaveDtoから、パラメータを取得する
        // 検索条件名
        if($incidentListConditionSaveDto->getCondNm() != null){
            $condNm = $incidentListConditionSaveDto->getCondNm();
        }
        // 登録者ID
        if($incidentListConditionSaveDto->getUpdUserId() != null){
            $userId = $incidentListConditionSaveDto->getUpdUserId();
        }
        // 登録者名
        if($incidentListConditionSaveDto->getUpdUserNm() != null){
            $userName = $incidentListConditionSaveDto->getUpdUserNm();
        }
        // 登録者部署コード
        if($incidentListConditionSaveDto->getUpdSectionCd() != null){
            $sectionCd = $incidentListConditionSaveDto->getUpdSectionCd();
        }
        // 登録者部署名
        if($incidentListConditionSaveDto->getUpdSectionNm() != null){
            $sectionName = $incidentListConditionSaveDto->getUpdSectionNm();
        }
        // インシデント分類（障害）
        if($incidentListConditionSaveDto->getIncidentTypeSyougai() != null){
            $condList['incidentTypeSyougai'] = $incidentListConditionSaveDto->getIncidentTypeSyougai();
        }
        // インシデント分類（事故）
        if($incidentListConditionSaveDto->getIncidentTypeJiko() != null){
            $condList['incidentTypeJiko'] = $incidentListConditionSaveDto->getIncidentTypeJiko();
        }
        
        // インシデント分類（クレーム）
        if($incidentListConditionSaveDto->getIncidentTypeClaim() != null){
            $condList['incidentTypeClaim'] = $incidentListConditionSaveDto->getIncidentTypeClaim();
        }
        
        // インシデント分類（問合せ）
        if($incidentListConditionSaveDto->getIncidentTypeToiawase() != null){
            $condList['incidentTypeToiawase'] = $incidentListConditionSaveDto->getIncidentTypeToiawase();
        }
        // インシデント分類（情報）
        if($incidentListConditionSaveDto->getIncidentTypeInfo() != null){
            $condList['incidentTypeInfo'] = $incidentListConditionSaveDto->getIncidentTypeInfo();
        }
        // インシデント分類（その他）
        if($incidentListConditionSaveDto->getIncidentTypeOther() != null){
            $condList['incidentTypeOther'] = $incidentListConditionSaveDto->getIncidentTypeOther();
        }
        // ステータス（受入済）
        if($incidentListConditionSaveDto->getIncidentStatusCall() != null){
            $condList['incidentStatusCall'] = $incidentListConditionSaveDto->getIncidentStatusCall();
        }
        // ステータス（対応入力済）
        if($incidentListConditionSaveDto->getIncidentStatusTaio() != null){
            $condList['incidentStatusTaio'] = $incidentListConditionSaveDto->getIncidentStatusTaio();
        }
        // ステータス（処置入力済）
        if($incidentListConditionSaveDto->getIncidentStatusAct() != null){
            $condList['incidentStatusAct'] = $incidentListConditionSaveDto->getIncidentStatusAct();
        }
        // インシデント番号
        if($incidentListConditionSaveDto->getIncidentNo() != null){
            $condList['incidentNo'] = $incidentListConditionSaveDto->getIncidentNo();
        }
        // 受付内容
        if($incidentListConditionSaveDto->getCallContent() != null){
            $condList['callContent'] = $incidentListConditionSaveDto->getCallContent();
        }
        // 親インシデント番号
        if($incidentListConditionSaveDto->getParentIncidentNo() != null){
            $condList['parentIncidentNo'] = $incidentListConditionSaveDto->getParentIncidentNo();
        }
        // 発生日時（開始）
        if($incidentListConditionSaveDto->getIncidentStartDateTimeFrom() != null){
            $condList['incidentStartDateTimeFrom'] = $incidentListConditionSaveDto->getIncidentStartDateTimeFrom();
        }
        // 発生日時（終了）
        if($incidentListConditionSaveDto->getIncidentStartDateTimeTo() != null){
            $condList['incidentStartDateTimeTo'] = $incidentListConditionSaveDto->getIncidentStartDateTimeTo();
        }
        // 受付日（開始）
        if($incidentListConditionSaveDto->getCallStartDateFrom() != null){
            $condList['callStartDateFrom'] = $incidentListConditionSaveDto->getCallStartDateFrom();
        }
        // 受付日（終了）
        if($incidentListConditionSaveDto->getCallStartDateTo() != null){
            $condList['callStartDateTo'] = $incidentListConditionSaveDto->getCallStartDateTo();
        }
        // 業種区分（機械）
        if($incidentListConditionSaveDto->getIndustryTypeMachinery() != null){
            $condList['industryTypeMachinery'] = $incidentListConditionSaveDto->getIndustryTypeMachinery();
        }
        // 業種区分（電機（E））
        if($incidentListConditionSaveDto->getIndustryTypeElectricalMachinery() != null){
            $condList['industryTypeElectricalMachinery'] = $incidentListConditionSaveDto->getIndustryTypeElectricalMachinery();
        }
        // 業種区分（計装（I））
        if($incidentListConditionSaveDto->getIndustryTypeInstrumentation() != null){
            $condList['industryTypeInstrumentation'] = $incidentListConditionSaveDto->getIndustryTypeInstrumentation();
        }
        // 業種区分（情報（C））
        if($incidentListConditionSaveDto->getIndustryTypeInfo() != null){
            $condList['industryTypeInfo'] = $incidentListConditionSaveDto->getIndustryTypeInfo();
        }
        // 業種区分（環境）
        if($incidentListConditionSaveDto->getIndustryTypeEnvironment() != null){
            $condList['industryTypeEnvironment'] = $incidentListConditionSaveDto->getIndustryTypeEnvironment();
        }
        // 業種区分（WBC）
        if($incidentListConditionSaveDto->getIndustryTypeWBC() != null){
            $condList['industryTypeWBC'] = $incidentListConditionSaveDto->getIndustryTypeWBC();
        }
        // 業種区分（その他）
        if($incidentListConditionSaveDto->getIndustryTypeOther() != null){
            $condList['industryTypeOther'] = $incidentListConditionSaveDto->getIndustryTypeOther();
        }
        // 機場
        if($incidentListConditionSaveDto->getKijoNm() != null){
            $condList['kijoNm'] = $incidentListConditionSaveDto->getKijoNm();
        }
        // 事業主体
        if($incidentListConditionSaveDto->getJigyosyutaiNm() != null){
            $condList['jigyosyutaiNm'] = $incidentListConditionSaveDto->getJigyosyutaiNm();
        }
        // 設備
        if($incidentListConditionSaveDto->getSetubiNm() != null){
            $condList['setubiNm'] = $incidentListConditionSaveDto->getSetubiNm();
        }
        // 都道府県
        if($incidentListConditionSaveDto->getPrefNm() != null){
            $condList['prefNm'] = $incidentListConditionSaveDto->getPrefNm();
        }
        // 顧客
        if($incidentListConditionSaveDto->getCustNm() != null){
            $condList['custNm'] = $incidentListConditionSaveDto->getCustNm();
        }
        // 顧客分類（年間契約）
        if($incidentListConditionSaveDto->getCustTypeNenkan() != null){
            $condList['custTypeNenkan'] = $incidentListConditionSaveDto->getCustTypeNenkan();
        }
        // 顧客分類（点検契約）
        if($incidentListConditionSaveDto->getCustTypeTenken() != null){
            $condList['custTypeTenken'] = $incidentListConditionSaveDto->getCustTypeTenken();
        }
        // 顧客分類（契約なし）
        if($incidentListConditionSaveDto->getCustTypeNasi() != null){
            $condList['custTypeNasi'] = $incidentListConditionSaveDto->getCustTypeNasi();
        }
        // 顧客分類（瑕疵期間中）
        if($incidentListConditionSaveDto->getCustTypeKasi() != null){
            $condList['custTypeKasi'] = $incidentListConditionSaveDto->getCustTypeKasi();
        }
        // 顧客分類（その他）
        if($incidentListConditionSaveDto->getCustTypeOther() != null){
            $condList['custTypeOther'] = $incidentListConditionSaveDto->getCustTypeOther();
        }
        // 営業部門
        if($incidentListConditionSaveDto->getSalesDeptNm() != null){
            $condList['salesDeptNm'] = $incidentListConditionSaveDto->getSalesDeptNm();
        }
        // 営業担当者
        if($incidentListConditionSaveDto->getSalesUserNm() != null){
            $condList['salesUserNm'] = $incidentListConditionSaveDto->getSalesUserNm();
        }
        // 関係者
        if($incidentListConditionSaveDto->getRelateUserNm() != null){
            $condList['relateUserNm'] = $incidentListConditionSaveDto->getRelateUserNm();
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
            // LOGIC結果　SQLエラー '1' をセット
            $incidentListConditionSaveResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // LOGIC結果メッセージ　'登録に失敗しました'
            $incidentListConditionSaveResultDto->setResultMsg(LOGIC_RESULT_INSERT_FAIL);
            // 戻りオブジェクト($incidentListConditionSaveResultDto)
            return $incidentListConditionSaveResultDto;
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
                // LOGIC結果　SQLエラー '1' をセット
                $incidentListConditionSaveResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
                // LOGIC結果メッセージ　'登録に失敗しました'
                $incidentListConditionSaveResultDto->setResultMsg(LOGIC_RESULT_INSERT_FAIL);
                // 戻りオブジェクト($incidentListConditionSaveResultDto)
                return $incidentListConditionSaveResultDto;
            }
        }

        // MultiExecSql　オブジェクトのcommit()を実行
        $MultiExecSql->commit();
        // LOGIC結果　正常時 '0' をセット
        $incidentListConditionSaveResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // LOGIC結果メッセージ　'登録完了'
        $incidentListConditionSaveResultDto->setResultMsg(LOGIC_RESULT_INSERT_SUCCESS);
        // 戻りオブジェクト($incidentListConditionSaveResultDto)
        return $incidentListConditionSaveResultDto;
    }

}

