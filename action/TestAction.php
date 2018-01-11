<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：開発前テスト用 テストアクション
//	作成日付・作成者：2017.10.06 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

class TestAction extends CommonAction {

    public function index() {

        // 画面初期表示用パラメータ設定
        $resultArray = array();
        $id = "Yoshida";
        $date = date("Y/m/d");
        $resultArray["id"]= $id;
        $resultArray["date"]= $date;

//        // 戻り値用配列
//        $rtnAry = array();
//
//        /* パラメータ取得処理 */
//        $postdata = $this->getRequestJSONData();
//        if ($postdata != false) {
//            // パラメータを取得
//            $request = json_decode($postdata);
//        } else {
//            // パラメータの取得に失敗
//            array_push($rtnAry, array("result" => false));
//            echo json_encode($rtnAry);
//            exit;
//        }

        // 値を返す
        return $this->json_safe_encode($resultArray);
    }

}
