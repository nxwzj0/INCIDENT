<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：装置区分リスト情報取得(API)
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/SotiKbnListGetLogic.php');

// dto読み込み
require_once('./dto/SotiKbnListGetDto.php');
require_once('./dto/SotiKbnListGetResultDto.php');

class SotiKbnListGetAction extends CommonAction {

    public function index() {

        // 装置区分情報検索用パラメータ
        $sotiKbnListGetDto = new SotiKbnListGetDto();

        // 装置区分リスト情報を取得
        $sotiKbnListGetLogic = new SotiKbnListGetLogic();
        $eventResult = $sotiKbnListGetLogic->execute($sotiKbnListGetDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray(SotiKbnListGetResultDto $eventResult) {
        $sotiKbnListAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            $sotiKbnListAry[] = array("result" => true);

            if (is_array($eventResult->getSotiKbnList()) && count($eventResult->getSotiKbnList()) > 0) {
                foreach ($eventResult->getSotiKbnList() as $sotiKbn) {
                    $sotiKbnAry = array();

                    // 装置区分情報
                    $sotiKbnAry["sotiCd"] = $sotiKbn->getKbnCd();
                    $sotiKbnAry["sotiNm"] = $sotiKbn->getKbnNm();

                    // 1件分の情報をセット
                    $sotiKbnListAry[] = $sotiKbnAry;
                }
            }
        } else {
            $sotiKbnListAry[] = array("result" => false);
        }

        return $sotiKbnListAry;
    }

}
