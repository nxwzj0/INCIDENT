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

// model処理読み込み
require_once('./model/IdentTListConditionSaveModel.php');

// logic処理読み込み
require_once('./logic/IncidentListConditionSaveLogic.php');

class IncidentListConditionSaveAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        // 画面からパラメータ取得 
        $condNm = $P['condNm'];// 検索条件名
        $userId = $P['userId'];// 登録者ID
        $userName = $P['userName'];// 登録者名
        $sectionCd = $P['sectionCd'];// 登録者部署コード
        $sectionName = $P['sectionName'];// 登録者部署名
        $condList = array();
 
        // インシデント分類
        if($P['incidentTypeSyougai'] == true){// インシデント分類（障害）
            $condList['incidentTypeSyougai'] = $P['incidentTypeSyougai'];
        }
        if($P['incidentTypeJiko'] == true){// インシデント分類（事故）
            $condList['incidentTypeJiko'] = $P['incidentTypeJiko'];
        }
        if($P['incidentTypeClaim'] == true){// インシデント分類（クレーム）
            $condList['incidentTypeClaim'] = $P['incidentTypeClaim'];
        }
        if($P['incidentTypeToiawase'] == true){// インシデント分類（問合せ）
            $condList['incidentTypeToiawase'] = $P['incidentTypeToiawase'];
        }
        if($P['incidentTypeInfo'] == true){// インシデント分類（情報）
            $condList['incidentTypeInfo'] = $P['incidentTypeInfo'];
        }
        if($P['incidentTypeOther'] == true){// インシデント分類（その他）
            $condList['incidentTypeOther'] = $P['incidentTypeOther'];
        }
        // ステータス
        if($P['incidentStatusCall'] == true){// ステータス（受入済）
            $condList['incidentStatusCall'] = $P['incidentStatusCall'];
        }
        if($P['incidentStatusTaio'] == true){// ステータス（対応入力済）
            $condList['incidentStatusTaio'] = $P['incidentStatusTaio'];
        }
        if($P['incidentStatusAct'] == true){// ステータス（処置入力済）
            $condList['incidentStatusAct'] = $P['incidentStatusAct'];
        }
        // インシデント番号
        if($P['incidentNo']){
           $condList['incidentNo'] = $P['incidentNo'];
        }
        // 受付内容
        if($P['callContent']){
           $condList['callContent'] = $P['callContent'];
        }
        // 親インシデント番号
        if($P['parentIncidentNo']){
            $condList['parentIncidentNo'] = $P['parentIncidentNo'];
        }
        // 発生日時
        if($P['incidentStartDateTimeFrom']){// 発生日時（開始）
            $condList['incidentStartDateTimeFrom'] = $P['incidentStartDateTimeFrom'];
        }
        if($P['incidentStartDateTimeTo']){// 発生日時（終了）
            $condList['incidentStartDateTimeTo'] = $P['incidentStartDateTimeTo'];
        }
        // 受付日
        if($P['callStartDateFrom']){// 受付日（開始）
            $condList['callStartDateFrom'] = $P['callStartDateFrom'];
        }
        if($P['callStartDateTo']){// 受付日（終了）
            $condList['callStartDateTo'] = $P['callStartDateTo'];
        }
        // 業種区分
        if($P['industryTypeMachinery'] == true){// 業種区分（機械）
            $condList['industryTypeMachinery'] = $P['industryTypeMachinery'];
        }
        if($P['industryTypeElectricalMachinery'] == true){// 業種区分（電機（E））
            $condList['industryTypeElectricalMachinery'] = $P['industryTypeElectricalMachinery'];
        }
        if($P['industryTypeInstrumentation'] == true){// 業種区分（計装（I））
            $condList['industryTypeInstrumentation'] = $P['industryTypeInstrumentation'];
        }
        if($P['industryTypeInfo'] == true){// 業種区分（情報（C））
            $condList['industryTypeInfo'] = $P['industryTypeInfo'];
        }
        if($P['industryTypeEnvironment'] == true){// 業種区分（環境）
            $condList['industryTypeEnvironment'] = $P['industryTypeEnvironment'];
        }
        if($P['industryTypeWBC'] == true){// 業種区分（WBC）
            $condList['industryTypeWBC'] = $P['industryTypeWBC'];
        }
        if($P['industryTypeOther'] == true){// 業種区分（その他）
            $condList['industryTypeOther'] = $P['industryTypeOther'];
        }
        // 機場
        if($P['kijoNm']){
            $condList['kijoNm'] = $P['kijoNm'];
        }
        // 事業主体
        if($P['jigyosyutaiNm']){
            $condList['jigyosyutaiNm'] = $P['jigyosyutaiNm'];
        }
        // 設備
        if($P['setubiNm']){
            $condList['setubiNm'] = $P['setubiNm'];
        }
        // 都道府県
        if($P['prefCd']){
            $condList['prefCd'] = $P['prefCd'];
        }
        // 顧客
        if($P['custNm']){
            $condList['custNm'] = $P['custNm'];
        }
        // 顧客分類
        if($P['custTypeNenkan'] == true){// 顧客分類（年間契約）
            $condList['custTypeNenkan'] = $P['custTypeNenkan'];
        }
        if($P['custTypeTenken'] == true){// 顧客分類（点検契約）
            $condList['custTypeTenken'] = $P['custTypeTenken'];
        }
        if($P['custTypeNasi'] == true){// 顧客分類（契約なし）
            $condList['custTypeNasi'] = $P['custTypeNasi'];
        }
        if($P['custTypeKasi'] == true){// 顧客分類（瑕疵期間中）
            $condList['custTypeKasi'] = $P['custTypeKasi'];
        }
        if($P['custTypeOther'] == true){// 顧客分類（その他）
            $condList['custTypeOther'] = $P['custTypeOther'];
        }
        // 営業部門
        if($P['salesDeptNm']){
            $condList['salesDeptNm'] = $P['salesDeptNm'];
        }
        // 営業担当者
        if($P['salesUserNm']){
            $condList['salesUserNm'] = $P['salesUserNm'];
        }
        // 関係者
        if($P['relateUserNm']){
            $condList['relateUserNm'] = $P['relateUserNm'];
        }

        // 実例化model
        $IdentTListConditionSaveModel = new IdentTListConditionSaveModel();
        // 検索条件名の重複チェックFlg
        $CondNmExisFlg = $this->checkDataExistence($IdentTListConditionSaveModel->findCondNm($condNm));

        if(!$CondNmExisFlg){// 検索条件名重複しないの場合
            // 実例化Logic
            $IncidentListConditionSaveLogic = new IncidentListConditionSaveLogic();
            // 実行Logic
            $eventResult = $IncidentListConditionSaveLogic->execute($condNm,$userId,$userName,$sectionCd,$sectionName,$condList);
            // 戻り値配列の作成
            $rtnAry = $this->createReturnArray($eventResult,false);
        }else{// 検索条件名重複の場合
            // 戻り値配列の作成
            $rtnAry = $this->createReturnArray(SAVE_FALSE,SAVE_TRUE);
        }
            // 値を返す(Angular)
            echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($resultFlg,$exitFlg) {
        // 戻るArray作成
        $condSaveAry = array();
        // 戻るッセージ作成
        $strMsg = "";

        // メッセージ設定
        if ($exitFlg) {// 検索条件名存在
            $resultFlg = SAVE_FALSE;
            $strMsg = "検索条件名が重複しています";
        } else {// 検索条件名存在しない
            if ($resultFlg) {// 登録成功
                $resultFlg = SAVE_TRUE;
                $strMsg = "登録完了";
            } else {// 登録失敗
                $resultFlg = SAVE_FALSE;
                $strMsg = "登録に失敗しました";
            }
        }
        // 戻る値作成
        array_push($condSaveAry, array("resultFlg" => $resultFlg));
        array_push($condSaveAry, array("resultMsg" => $strMsg));
        return $condSaveAry;
    }

    // Arrayのnull判断
    public function checkDataExistence($ary) {
        if (isset($ary) && is_array($ary) && count($ary) > 0) {
            return SAVE_TRUE;
        } else {
            return SAVE_FALSE;
        }
    }

}
