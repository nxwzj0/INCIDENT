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

class IncidentListSearchConditionGetLogic extends CommonLogic {

    public function execute(IncidentListGetDto $IncidentListGetDto) {
        // 実例化model
        $IdentTSearchCondDtModel = new IdentTSearchCondDtModel();

        // 検索条件Idを取得
        $condId = $IncidentListGetDto->getCondId();

        // 検索条件を取得
        $conditionResult = $IdentTSearchCondDtModel->selectCondition($condId);

        // 戻りオブジェクト
        return $conditionResult;
    }

}

