<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionDeleteLogic
//	作成日付・作成者：2018.01.04 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once("./env.inc");
// 共通処理読み込み
require_once('./logic/CommonLogic.php');
// 共通処理読み込み
require_once('./common/CommonService.php');
// model処理読み込み
require_once('./model/IdentTListConditionDeleteModel.php');


class IncidentListConditionDeleteLogic extends CommonLogic {

    public function execute() {
        // 実例化model
        $IdentTListConditionDeleteModel = new IdentTListConditionDeleteModel();

        try{
            // 検索条件名arrayを取得
            $condIdArray = $IdentTListConditionDeleteModel->selectCond();
        }catch(Exception $e){
            return SAVE_FALSE;
        }

        // 戻りオブジェクト
        return $condIdArray;
    }

}

