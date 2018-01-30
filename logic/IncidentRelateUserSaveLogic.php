<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentRelateUserSaveLogic
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
require_once('./model/IdentTIncidentRelateUserModel.php');
// dto処理読み込み
require_once('./dto/IncidentRelateUserSaveDto.php');
require_once('./dto/IncidentRelateUserSaveResultDto.php');

class IncidentRelateUserSaveLogic extends CommonLogic {

    public function execute(IncidentRelateUserSaveDto $conditionDto) {
        // 実例化model
        $model = new IdentTIncidentRelateUserModel();

        // 実例化dto
        $resultDto = new IncidentRelateUserSaveResultDto();

        // 登録用の MultiExecSql　オブジェクトを作成
        $MultiExecSql = new MultiExecSql();

        // IncidentRelateUserSaveDto、パラメータを取得する、$conditionsを作成
        $conditions = array();
        $conditions['incidentId'] = $conditionDto->getIncidentId();
        $conditions['userId'] = $conditionDto->getRelateUserId();
        $conditions['userNm'] = $conditionDto->getRelateUserNm();
        $conditions['sectionCd'] = $conditionDto->getRelateUserSectionCd();
        $conditions['sectionNm'] = $conditionDto->getRelateUserSectionNm();
        $conditions['loginUserId'] = $conditionDto->getInsUserId();
        $conditions['loginUserNm'] = $conditionDto->getInsUserNm();
        $conditions['loginSectionCd'] = $conditionDto->getInsSectionCd();
        $conditions['loginSectionNm'] = $conditionDto->getInsSectionNm();

        // IDENT_T_SEARCH_CONDの削除処理
        $resultFlg = $model->insert($conditions,$MultiExecSql);

        // 削除処理成功判定フラグ FALSE
        if ($resultFlg == SAVE_FALSE) {
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
