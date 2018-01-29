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
		
		if( $callNo && $callback ){
			// 画面からパラメータを取得している場合
			// MR2 APIを呼び出す（KEY：受付番号）
			$apiUrl = $GLOBALS[COMMON_MR2API_URL];
			$url = $apiUrl."mr2HeadData/?callNo=" . $callNo . "&callback=" . $callback;
			// MR2情報取得APIを実行
			header ( "Location: $url" );
			exit;
		}

        // 戻り値配列の作成(MR2APIを実行できなかった)
        $rtnAry = $this->createReturnArray();

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray() {
        $mr2ResultAry = array();

        // 戻り値配列の作成(MR2APIを実行できなかった)
        array_push($mr2ResultAry, array("result" => false));

        return $mr2ResultAry;
    }

}
