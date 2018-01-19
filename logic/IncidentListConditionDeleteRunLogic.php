<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionDeleteRunLogic
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
require_once('./model/IdentTSearchCondModel.php');
require_once('./model/IdentTSearchCondDtModel.php');
// dto処理読み込み
require_once('./dto/IncidentListConditionDeleteRunDto.php');

class IncidentListConditionDeleteRunLogic extends CommonLogic {

    public function execute(IncidentListConditionDeleteRunDto $IncidentListConditionDeleteRunDto) {
        // 実例化model
        $IdentTSearchCondModel = new IdentTSearchCondModel();
        $IdentTSearchCondDtModel = new IdentTSearchCondDtModel();

        // 登録用の MultiExecSql　オブジェクトを作成
        $MultiExecSql = new MultiExecSql();

        // 検索条件名
        $condNm = $IncidentListConditionDeleteRunDto->getCondNm();

        // IDENT_T_SEARCH_COND_DTの削除処理
        $deleteCondDtResultFlg = $IdentTSearchCondDtModel->deleteCondDt($condNm,$MultiExecSql);
        // IDENT_T_SEARCH_CONDの削除処理
        $deleteCondResultFlg = $IdentTSearchCondModel->deleteCond($condNm,$MultiExecSql);

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

