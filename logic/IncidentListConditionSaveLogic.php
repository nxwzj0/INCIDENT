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

class IncidentListConditionSaveLogic extends CommonLogic {

    public function execute($condNm,$userId,$userName,$sectionCd,$sectionName,$condList) {
        // 登録用の MultiExecSql　オブジェクトを作成 
        $MultiExecSql = new MultiExecSql();

        // 実例化model
        $IdentTListConditionSaveModel = new IdentTListConditionSaveModel();

        // 検索条件ID(Sequence)で新規作成用検索条件IDを取得
        $condIdArray = $IdentTListConditionSaveModel->selectCondId();
        // 検索条件IDはセット
        $condId = $condIdArray[0]['NEXTVAL'];
        // IDENT_T_SEARCH_CONDの登録処理
        $insertCondResultFlg = $IdentTListConditionSaveModel->insertCond($condId,$condNm,$userId,$userName,$sectionCd,$sectionName,$MultiExecSql);
        // 登録処理成功判定フラグ FALSE
        if($insertCondResultFlg == SAVE_FALSE){
            // MultiExecSql　オブジェクトのrollback()を実行
            $MultiExecSql->rollback();
            // 戻る結果
            return SAVE_FALSE;
        }

        $condListKey = array();// 検索条件名のKEYのArray作成
        $condListValue = array();// 検索条件名のVALUEのArray作成
        $condListKey = array_keys($condList);// 検索条件名のKEYのArrayをセット
        $condListValue = array_values($condList);// 検索条件名のKEYのArrayをセット
        for($i = 0;$i <count($condListKey);$i++){
            // IDENT_T_SEARCH_COND_DTの登録処理
            $insertCondDtResultFlg = $IdentTListConditionSaveModel->insertCondDt($condId,$condListKey[$i],$condListValue[$i],$userId,$userName,$sectionCd,$sectionName,$MultiExecSql);

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

