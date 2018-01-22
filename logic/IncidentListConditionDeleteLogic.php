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
require_once('./model/IdentTSearchCondModel.php');
// dto処理読み込み
require_once('./dto/IncidentListConditionDeleteDto.php');
require_once('./dto/IncidentListConditionDeleteResultDto.php');
require_once('./dto/ConditionDto.php');


class IncidentListConditionDeleteLogic extends CommonLogic {

    public function execute(IncidentListConditionDeleteDto $IncidentListConditionDeleteDto) {

        // 実例化model
        $IdentTSearchCondModel = new IdentTSearchCondModel();

        // 実例化dto
        $IncidentListConditionDeleteResultDto = new IncidentListConditionDeleteResultDto();

        try{
            // 検索条件名arrayを取得
            $condIdArray = $IdentTSearchCondModel->selectCond();
        }catch(Exception $e){
            // LOGIC結果　SQLエラー '1' をセット
            $IncidentListConditionDeleteResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(IncidentListConditionDeleteResultDto)
            return $IncidentListConditionDeleteResultDto;
        }

        foreach($condIdArray as $one){
            // 実例化dto
            $conditionDto = new conditionDto();
            $conditionDto->setCondId($one['COND_ID']);
            $conditionDto->setCondNm($one['COND_NM']);
            $conditionDto->setInsDate($one['INS_DATE']);
            // 検索条件名情報⇒$IncidentListConditionDeleteResultDtoのセット
            $IncidentListConditionDeleteResultDto->addConditionList($conditionDto);
        }

        // LOGIC結果　正常時 '0' をセット
        $IncidentListConditionDeleteResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // 戻りオブジェクト(IncidentListConditionDeleteResultDto)
        return $IncidentListConditionDeleteResultDto;
    }

}

