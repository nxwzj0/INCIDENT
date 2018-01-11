<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionDeleteTrueLogic
//	作成日付・作成者：2018.01.05 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once("./env.inc");
// 共通処理読み込み
require_once('./logic/CommonLogic.php');
// 共通処理読み込み
require_once('./common/CommonService.php');
// model処理読み込み
require_once('./model/IdentTListConditionDeleteRunModel.php');

class IncidentListConditionDeleteRunLogic extends CommonLogic {

    public function execute($condNm) {
        // 実例化model
        $IdentTListConditionDeleteRunModel = new IdentTListConditionDeleteRunModel();

        // 登録用の MultiExecSql　オブジェクトを作成
        $MultiExecSql = new MultiExecSql();

        // IDENT_T_SEARCH_CONDの削除処理
        $deleteCondResultFlg = $IdentTListConditionDeleteRunModel->deleteCond($condNm,$MultiExecSql);
        // IDENT_T_SEARCH_COND_DTの削除処理
        $deleteCondDtResultFlg = $IdentTListConditionDeleteRunModel->deleteCondDt($condNm,$MultiExecSql);

        // 登録処理成功判定フラグ FALSE
        if($deleteCondResultFlg == SAVE_FALSE || $deleteCondDtResultFlg == SAVE_FALSE){
            // MultiExecSql　オブジェクトのrollback()を実行
            $MultiExecSql->rollback();
            // 戻る結果
            return SAVE_FALSE;
        }

        // MultiExecSql　オブジェクトのcommit()を実行
        $MultiExecSql->commit();
        // 戻る結果
        return SAVE_TRUE;
    }

}

