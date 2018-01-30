<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデント関係者を追加
//	作成日付・作成者：2018.01.05 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/IncidentRelateUserSaveLogic.php');

// dto処理読み込み
require_once('./dto/IncidentRelateUserSaveDto.php');

class IncidentRelateUserSaveAction extends CommonAction {

    public function index() {

        // 実例化Dto
        $condtionDto = new IncidentRelateUserSaveDto();
        // 共通パラメータ配列取得
        $P = $GLOBALS[P];
        // 画面からパラメータ取得
        $condtionDto->setIncidentId($P['incidentId']);
        $condtionDto->setRelateUserId($P['relateUserId']);
        $condtionDto->setRelateUserNm($P['relateUserNm']);
        $condtionDto->setRelateUserSectionCd($P['relateUserSectionCd']);
        $condtionDto->setRelateUserSectionNm($P['relateUserSectionNm']);

        // 実例化Logic
        $logic = new IncidentRelateUserSaveLogic();
        // 実行Logic
        $eventResult = $logic->execute($condtionDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray(CommonDto $eventResult) {

        // 戻り値の作成
        $resultListAry = array();
        $resultAty = array();
        $resultAty['resultFlg'] = $eventResult->getLogicResult();
        $resultAty['resultMsg'] = $eventResult->getResultMsg();
        array_push($resultListAry, $resultAty);

        return $resultListAry;
    }

}
