<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionGetLogic
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
require_once('./model/IdentTSearchCondModel.php');
// dto処理読み込み
require_once('./dto/IncidentListConditionGetDto.php');
require_once('./dto/IncidentListConditionGetResultDto.php');
require_once('./dto/ConditionDto.php');

class IncidentListConditionGetLogic extends CommonLogic {

    public function execute(IncidentListConditionGetDto $incidentListConditionGetDto) {

        $conditions = array();
        
        $conditions['loginUserId'] = $incidentListConditionGetDto->getLoginUser()->getUserId();
        $conditions['loginUserNm'] = $incidentListConditionGetDto->getLoginUser()->getUserNm();
        $conditions['loginSectionCd'] = $incidentListConditionGetDto->getLoginUser()->getSectionCd();
        $conditions['loginSectionNm'] = $incidentListConditionGetDto->getLoginUser()->getSectionNm();

        // 実例化model
        $IdentTSearchCondModel = new IdentTSearchCondModel();

        // 実例化dto
        $incidentListConditionGetResultDto = new IncidentListConditionGetResultDto();

        try {
            // 検索条件名arrayを取得
            $condIdArray = $IdentTSearchCondModel->selectCond($conditions);
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $incidentListConditionGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(IncidentListConditionGetResultDto)
            return $incidentListConditionGetResultDto;
        }

        foreach ($condIdArray as $one) {
            // 実例化dto
            $conditionDto = new conditionDto();
            $conditionDto->setCondId($one['COND_ID']);
            $conditionDto->setCondNm($one['COND_NM']);
            $conditionDto->setInsDate($one['INS_DATE']);
            // 検索条件名情報⇒$incidentListConditionGetResultDtoのセット
            $incidentListConditionGetResultDto->addConditionList($conditionDto);
        }

        // LOGIC結果　正常時 '0' をセット
        $incidentListConditionGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // 戻りオブジェクト(IncidentListConditionGetResultDto)
        return $incidentListConditionGetResultDto;
    }

}
