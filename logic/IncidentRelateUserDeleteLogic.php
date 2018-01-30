<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentRelateUserDeleteLogic
//	作成日付・作成者：2018.01.05 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once("./env.inc");
// 共通処理読み込み
require_once('./logic/CommonLogic.php');
// model処理読み込み
require_once('./model/IdentTIncidentRelateUserDeleteModel.php');
// dto処理読み込み
require_once('./dto/IncidentRelateUserDto.php');
require_once('./dto/IncidentRelateUserDeleteResultDto.php');

class IncidentRelateUserDeleteLogic extends CommonLogic {

    public function execute(IncidentRelateUserDto $conditionDto) {
        // 実例化model
        $model = new IdentTIncidentRelateUserDeleteModel();

        // 実例化dto
        $resultDto = new IncidentRelateUserDeleteResultDto();

        // 登録用の MultiExecSql　オブジェクトを作成
        $MultiExecSql = new MultiExecSql();

        // 検索条件
        $relateId = $conditionDto->getRelateId();
        
        // IDENT_T_SEARCH_CONDの削除処理
        $deleteResultFlg = $model->delete($MultiExecSql, $relateId);

        // 削除処理成功判定フラグ FALSE
        if ($deleteResultFlg == SAVE_FALSE) {
            // MultiExecSql　オブジェクトのrollback()を実行
            $MultiExecSql->rollback();
            // LOGIC結果　SQLエラー '1' をセット
            $resultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // LOGIC結果メッセージ　'削除に失敗しました'
            $resultDto->setResultMsg(LOGIC_RESULT_DELETE_FAIL);
            // 戻りオブジェクト(IncidentListConditionDeleteRunResultDto)
            return $resultDto;
        }

        // MultiExecSql　オブジェクトのcommit()を実行
        $MultiExecSql->commit();
        // LOGIC結果　正常時 '0' をセット
        $resultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // LOGIC結果メッセージ　'削除完了'
        $resultDto->setResultMsg(LOGIC_RESULT_DELETE_SUCCESS);
        // 戻りオブジェクト(IncidentListConditionDeleteResultDto)
        return $resultDto;
    }

}
