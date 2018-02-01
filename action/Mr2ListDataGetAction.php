<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：MR2情報取得(外部API)
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

class Mr2ListDataGetAction extends CommonAction {

    public function index() {

		$P = $GLOBALS[P]; // 共通パラメータ配列取得
		$callNo = $P['callNo'];
		$callback = $P['callback'];

		$mr2ResultStr = ""; // APIから取得したMR2情報
		$mr2ResultJSON = array(); // JSONをデコードした配列
		$rtnAry = array(); // 戻り値配列

		if( $callNo && $callback ){
			// 画面からパラメータを取得している場合
			// MR2 APIを呼び出す（KEY：受付番号）
			$apiUrl = $GLOBALS[COMMON_MR2API_URL];
			$url = $apiUrl."mr2HeadData/?callNo=" . $callNo;
			// API実行
			$mr2ResultStr = file_get_contents ( $url );
		}

        // 取得データ変換(JSON文字列⇒連想配列)
        $mr2ResultJSON = json_decode($mr2ResultStr, TRUE);

        if (is_array($mr2ResultJSON) && !is_null($mr2ResultJSON)) {
          // 変換成功
          $rtnAry = $this->createReturnArray($mr2ResultJSON);
        } else {
          // 変換失敗
          $rtnAry = array("result" => false);
        }

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($ary) {
        $resultAry = $ary[0];

        // APIデータ 取得チェック
        if (!$resultAry['result']) {
          // APIデータ 取得失敗
          $ary = array("result" => false);
        }

        return $ary;
    }
}
