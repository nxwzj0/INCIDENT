<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントリスト検索項目保存
//	作成日付・作成者：2018.01.03 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/IncidentListConditionSaveLogic.php');

// dto処理読み込み
require_once('./dto/IncidentListConditionSaveDto.php');

class IncidentListConditionSaveAction extends CommonAction {

    public function index() {

        // 実例化Dto
        $IncidentListConditionSaveDto = new IncidentListConditionSaveDto();
        // 共通パラメータ配列取得
        $P = $GLOBALS[P];
        // 画面からパラメータ取得
        // 検索条件名
        $IncidentListConditionSaveDto->setCondNm($P['condNm']);
        // 登録者ID
        $IncidentListConditionSaveDto->setUpdUserId($P['userId']);
        // 登録者名
        $IncidentListConditionSaveDto->setUpdUserNm($P['userName']);
        // 登録者部署コード
        $IncidentListConditionSaveDto->setUpdSectionCd($P['sectionCd']);
        // 登録者部署名
        $IncidentListConditionSaveDto->setUpdSectionNm($P['sectionName']);
        // インシデント分類（障害）
        $IncidentListConditionSaveDto->setIncidentTypeSyougai($P['incidentTypeSyougai']);
        // インシデント分類（事故）
        $IncidentListConditionSaveDto->setIncidentTypeJiko($P['incidentTypeJiko']);
        // インシデント分類（クレーム）
        $IncidentListConditionSaveDto->setIncidentTypeClaim($P['incidentTypeClaim']);
        // インシデント分類（問合せ）
        $IncidentListConditionSaveDto->setIncidentTypeToiawase($P['incidentTypeToiawase']);
        // インシデント分類（情報）
        $IncidentListConditionSaveDto->setIncidentTypeInfo($P['incidentTypeInfo']);
        // インシデント分類（その他）
        $IncidentListConditionSaveDto->setIncidentTypeOther($P['incidentTypeOther']);
        // ステータス（受入済）
        $IncidentListConditionSaveDto->setIncidentStatusCall($P['incidentStatusCall']);
        // ステータス（対応入力済）
        $IncidentListConditionSaveDto->setIncidentStatusTaio($P['incidentStatusTaio']);
        // ステータス（処置入力済）
        $IncidentListConditionSaveDto->setIncidentStatusAct($P['incidentStatusAct']);
        // インシデント番号
        $IncidentListConditionSaveDto->setIncidentNo($P['incidentNo']);
        // 受付内容
        $IncidentListConditionSaveDto->setCallContent($P['callContent']);
        // 親インシデント番号
        $IncidentListConditionSaveDto->setParentIncidentNo($P['parentIncidentNo']);
        // 発生日時（開始)
        $IncidentListConditionSaveDto->setIncidentStartDateTimeFrom($P['incidentStartDateTimeFrom']);
        // 発生日時（終了）
        $IncidentListConditionSaveDto->setIncidentStartDateTimeTo($P['incidentStartDateTimeTo']);
        // 受付日（開始）
        $IncidentListConditionSaveDto->setCallStartDateFrom($P['callStartDateFrom']);
        // 受付日（終了）
        $IncidentListConditionSaveDto->setCallStartDateTo($P['callStartDateTo']);
        // 業種区分（機械）
        $IncidentListConditionSaveDto->setIndustryTypeMachinery($P['industryTypeMachinery']);
        // 業種区分（電機（E））
        $IncidentListConditionSaveDto->setIndustryTypeElectricalMachinery($P['industryTypeElectricalMachinery']);
        // 業種区分（計装（I））
        $IncidentListConditionSaveDto->setIndustryTypeInstrumentation($P['industryTypeInstrumentation']);
        // 業種区分（情報（C））
        $IncidentListConditionSaveDto->setIndustryTypeInfo($P['industryTypeInfo']);
        // 業種区分（環境）
        $IncidentListConditionSaveDto->setIndustryTypeEnvironment($P['industryTypeEnvironment']);
        // 業種区分（WBC）
        $IncidentListConditionSaveDto->setIndustryTypeWBC($P['industryTypeWBC']);
        // 業種区分（その他）
        $IncidentListConditionSaveDto->setIndustryTypeOther($P['industryTypeOther']);
        // 機場
        $IncidentListConditionSaveDto->setKijoNm($P['kijoNm']);
        // 事業主体
        $IncidentListConditionSaveDto->setJigyosyutaiNm($P['jigyosyutaiNm']);
        // 設備
        $IncidentListConditionSaveDto->setSetubiNm($P['setubiNm']);
        // 都道府県
        $IncidentListConditionSaveDto->setPrefNm($P['prefNm']);
        // 顧客
        $IncidentListConditionSaveDto->setCustNm($P['custNm']);
        // 顧客分類（年間契約）
        $IncidentListConditionSaveDto->setCustTypeNenkan($P['custTypeNenkan']);
        // 顧客分類（点検契約）
        $IncidentListConditionSaveDto->setCustTypeTenken($P['custTypeTenken']);
        // 顧客分類（契約なし）
        $IncidentListConditionSaveDto->setCustTypeNasi($P['custTypeNasi']);
        // 顧客分類（瑕疵期間中）
        $IncidentListConditionSaveDto->setCustTypeKasi($P['custTypeKasi']);
        // 顧客分類（その他）
        $IncidentListConditionSaveDto->setCustTypeOther($P['custTypeOther']);
        // 営業部門
        $IncidentListConditionSaveDto->setSalesDeptNm($P['salesDeptNm']);
        // 営業担当者
        $IncidentListConditionSaveDto->setSalesUserNm($P['salesUserNm']);
        // 関係者
        $IncidentListConditionSaveDto->setRelateUserNm($P['relateUserNm']);

        // 実例化Logic
        $IncidentListConditionSaveLogic = new IncidentListConditionSaveLogic();
        // 実行Logic
        $eventResult = $IncidentListConditionSaveLogic->execute($IncidentListConditionSaveDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);

    }

    public function createReturnArray($eventResult) {

        // 戻り値の作成
        $resultListAry = array();
        $resultAty = array();
        $resultAty['resultFlg'] = $eventResult->getLogicResult();
        $resultAty['resultMsg'] = $eventResult->getResultMsg();
        array_push($resultListAry, $resultAty);

        return $resultListAry;

    }

}
