<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListSearchConditionGetLogic
//	作成日付・作成者：2018.01.08 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
// 共通処理読み込み
require_once('./logic/CommonLogic.php');
// 共通処理読み込み
require_once('./common/CommonService.php');
// model処理読み込み
require_once('./model/IdentTSearchCondDtModel.php');
// dto読み込み
require_once('./dto/IncidentListGetDto.php');
require_once('./dto/IncidentListSearchConditionGetResultDto.php');
require_once('./dto/ConditionDtDto.php');

class IncidentListSearchConditionGetLogic extends CommonLogic {

    public function execute(IncidentListGetDto $IncidentListGetDto) {
        // 実例化model
        $IdentTSearchCondDtModel = new IdentTSearchCondDtModel();

        // 実例化dto
        $IncidentListSearchConditionGetResultDto = new IncidentListSearchConditionGetResultDto();

        // 検索条件Idを取得
        $condId = $IncidentListGetDto->getCondId();

        try{
            // 検索条件を取得
            $conditionResult = $IdentTSearchCondDtModel->selectCondition($condId);
        }catch(Exception $e){
            // LOGIC結果　SQLエラー '1' をセット
            $IncidentListSearchConditionGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト($IncidentListSearchConditionGetResultDto)
            return $IncidentListSearchConditionGetResultDto;
        }

        foreach($conditionResult as $one){
            // 実例化dto
            $conditionDtDto = new conditionDtDto();
            $conditionDtDto->setCondFld($one['COND_FLD']);
            $conditionDtDto->setCondVal($one['COND_VAL']);
            // 検索条件情報⇒$IncidentListSearchConditionGetResultDtoのセット
            $IncidentListSearchConditionGetResultDto->addConditionDtList($conditionDtDto);
        }

        // LOGIC結果　正常時 '0' をセット
        $IncidentListSearchConditionGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // 戻りオブジェクト($IncidentListSearchConditionGetResultDto)
        return $IncidentListSearchConditionGetResultDto;
    }

}

