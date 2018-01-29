<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ステータスロジック処理
//	作成日付・作成者：2018.01.25 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
require_once('./inc/const.php');

require_once('./logic/CommonLogic.php');

class IncidentStatusLogic extends CommonLogic {

    public function execute(){
        
    }

    // インシデントステータスコードを取得する
    /*
     * 受付済：処置情報未入力、対応情報未入力、受付情報入力済
     * 対応入力済：処置情報未入力、対応情報入力済
     * 処置入力済：処置情報入力済
     */
    public function createIncidentStsCd($callContent, $taioContent, $actContent) {
        if (strlen($actContent)) {
            // 処置入力済
            return INCIDENT_STS_ACT;
        } else if (strlen($taioContent)) {
            // 対応入力済
            return INCIDENT_STS_TAIO;
        } else if (strlen($callContent)) {
            // 受付済
            return INCIDENT_STS_CALL;
        } else {
            // 例外
            return INCIDENT_STS_CALL;
        }
    }

}
