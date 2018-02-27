<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：機種区分リスト情報取得(API)
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/KisyuKbnListGetLogic.php');

// dto読み込み
require_once('./dto/KisyuKbnListGetDto.php');
require_once('./dto/KisyuKbnListGetResultDto.php');

class KisyuKbnListGetAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        // 画面からパラメータ取得
        $sotiKbnCd = $P['sotiKbnCd'];
        
        // 機種区分情報検索用パラメータ
        $kisyuKbnListGetDto = new KisyuKbnListGetDto();
        $kisyuKbnListGetDto->setSotiKbnCd($sotiKbnCd);

        // 機種区分リスト情報を取得
        $kisyuKbnListGetLogic = new KisyuKbnListGetLogic();
        $eventResult = $kisyuKbnListGetLogic->execute($kisyuKbnListGetDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray(KisyuKbnListGetResultDto $eventResult) {
        $kisyuKbnListAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            $kisyuKbnListAry[] = array("result" => true);

            if (is_array($eventResult->getKisyuKbnList()) && count($eventResult->getKisyuKbnList()) > 0) {
                foreach ($eventResult->getKisyuKbnList() as $kisyuKbn) {
                    $kisyuKbnAry = array();

                    // 機種区分情報
                    $kisyuKbnAry["kisyuCd"] = $kisyuKbn->getKbnCd();
                    $kisyuKbnAry["kisyuNm"] = $kisyuKbn->getKbnNm();

                    // 1件分の情報をセット
                    $kisyuKbnListAry[] = $kisyuKbnAry;
                }
            }
        } else {
            $kisyuKbnListAry[] = array("result" => false);
        }

        return $kisyuKbnListAry;
    }

}
