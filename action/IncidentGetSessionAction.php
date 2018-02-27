<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：共通認証
//	処理名　　　　　：cookieの取得
//	作成日付・作成者：2018.02.01 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

class IncidentGetSessionAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得

        $loginUserId;
        // cookieの取得
        if ($_COOKIE["incident_user_id"]) {
            $loginUserId = "" . $_COOKIE['incident_user_id'];
        }

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($loginUserId);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($loginUserId) {
        $resultAry = array();

        if ($loginUserId) {
            // 戻り値配列の作成
            $resultAry[] = array("result" => true);
            $resultAry[] = array("loginUserId" => $loginUserId);
        } else {
            // 戻り値配列の作成
            $resultAry[] = array("result" => false);
        }

        return $resultAry;
    }

}
