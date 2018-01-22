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
require_once('./dto/IncidentListConditionDeleteRunResultDto.php');

class IncidentListConditionDeleteRunLogic extends CommonLogic {

    public function execute(IncidentListConditionDeleteRunDto $IncidentListConditionDeleteRunDto) {
        // 実例化model
        $IdentTSearchCondModel = new IdentTSearchCondModel();
        $IdentTSearchCondDtModel = new IdentTSearchCondDtModel();

        // 実例化dto
        $IncidentListConditionDeleteRunResultDto = new IncidentListConditionDeleteRunResultDto();

        // 登録用の MultiExecSql　オブジェクトを作成
        $MultiExecSql = new MultiExecSql();

        // 検索条件Id
        $condId = $IncidentListConditionDeleteRunDto->getCondId();

        // IDENT_T_SEARCH_COND_DTの削除処理
        $deleteCondDtResultFlg = $IdentTSearchCondDtModel->deleteCondDt($condId,$MultiExecSql);
        // IDENT_T_SEARCH_CONDの削除処理
        $deleteCondResultFlg = $IdentTSearchCondModel->deleteCond($condId,$MultiExecSql);

        // 削除処理成功判定フラグ FALSE
        if($deleteCondResultFlg == SAVE_FALSE || $deleteCondDtResultFlg == SAVE_FALSE){
            // MultiExecSql　オブジェクトのrollback()を実行
            $MultiExecSql->rollback();
            // LOGIC結果　SQLエラー '1' をセット
            $IncidentListConditionDeleteRunResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // LOGIC結果メッセージ　'削除に失敗しました'
            $IncidentListConditionDeleteRunResultDto->setResultMsg(LOGIC_RESULT_DELETE_FAIL);
            // 戻りオブジェクト(IncidentListConditionDeleteRunResultDto)
            return $IncidentListConditionDeleteRunResultDto;
        }

        // MultiExecSql　オブジェクトのcommit()を実行
        $MultiExecSql->commit();
        // LOGIC結果　正常時 '0' をセット
        $IncidentListConditionDeleteRunResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // LOGIC結果メッセージ　'削除完了'
        $IncidentListConditionDeleteRunResultDto->setResultMsg(LOGIC_RESULT_DELETE_SUCCESS);
        // 戻りオブジェクト(IncidentListConditionDeleteResultDto)
        return $IncidentListConditionDeleteRunResultDto;
    }

}

