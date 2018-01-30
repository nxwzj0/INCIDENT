<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentRelateUserCheckLogic
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
require_once('./model/IdentTIncidentRelateUserCheckModel.php');
// dto処理読み込み
require_once('./dto/IncidentRelateUserCheckDto.php');
require_once('./dto/IncidentRelateUserCheckResultDto.php');

class IncidentRelateUserCheckLogic extends CommonLogic {

    public function execute(IncidentRelateUserCheckDto $conditionDto) {
        // 実例化model
        $model = new IdentTIncidentRelateUserCheckModel();

        // 実例化dto
        $resultDto = new IncidentRelateUserCheckResultDto();

        // 検索条件
        $incidentId = $conditionDto->getIncidentId();
        $deptCd = $conditionDto->getRelateUserSectionCd();
        $userId = $conditionDto->getRelateUserId();

        // インシデント関係者のデータ重複チェック
        $checkResultFlg = $model->check($incidentId, $deptCd, $userId);

        // 重複無し判定フラグ インシデント関係者のデータ 有無のFlg　true : 有、false : 無し
        if ($checkResultFlg != LOGIC_RESULT_SEIJOU) {
            // LOGIC結果　true
            $resultDto->setLogicResult(RELATE_USER_FLG_TRUE);
            // LOGIC結果メッセージ　'インシデント関係者のデータ 有'
            $resultDto->setResultMsg('インシデント関係者のデータ 有');
            // 戻りオブジェクト(IncidentListConditionDeleteRunResultDto)
            return $resultDto;
        }

        // LOGIC結果　false
        $resultDto->setLogicResult(RELATE_USER_FLG_FALSE);
        // LOGIC結果メッセージ　'インシデント関係者のデータ 無'
        $resultDto->setResultMsg('インシデント関係者のデータ 無');
        // 戻りオブジェクト(IncidentListConditionDeleteResultDto)
        return $resultDto;
    }

}
