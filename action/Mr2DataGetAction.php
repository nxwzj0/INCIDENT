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

class Mr2DataGetAction extends CommonAction {

    public function index() {

		$P = $GLOBALS[P]; // 共通パラメータ配列取得
		$mkbId = $P['mkbId'];
		$callback = $P['callback'];

		$mr2ResultStr = ""; // APIから取得したMR2情報
		$mr2ResultJSON = array(); // JSONをデコードした配列
		$rtnAry = array(); // 戻り値配列

		if( $mkbId && $callback ){
			// 画面からパラメータを取得している場合
			// MR2 APIを呼び出す（KEY：MKBID）
			$apiUrl = $GLOBALS[COMMON_MR2API_URL];
			$url = $apiUrl."mr2DetailData/?mkbId=" . $mkbId;
			// MR2情報取得APIを実行
			$mr2ResultStr = file_get_contents ( $url );
		}

        // MR2取得結果 判断
        $mr2ResultJSON = json_decode($mr2ResultStr, TRUE);
        if (is_array($mr2ResultJSON) && !is_null($mr2ResultJSON)) {
          $resultAry = $mr2ResultJSON[0];
          if ($resultAry['result']) {
            // 取得成功
            $rtnAry = $this->createReturnArray($mr2ResultJSON);
          } else {
            // PSC側でエラー
            // array_push($rtnAry, array("result" => false));
            $rtnAry[] = array("result" => false);
          }
        } else {
          // 取得失敗
          //array_push($rtnAry, array("result" => false));
          $rtnAry[] = array("result" => false);
        }

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    //public function createReturnArray() {
    public function createReturnArray($ary) {

        $loopAry = $ary;

        foreach($loopAry as $key => $valueAry){
          if ($key == 0) {
            continue;
          }
          // トリガー 直接入力の内容を連結
          $triggerDsp = $valueAry['trigger'] . "（" . $valueAry['triggerStr'] . "）";

          $valueAry['triggerDsp'] = $triggerDsp;

          $ary[$key] = $valueAry;

          //array_push($ary[$key], array("triggerDsp" => $valueAry['trigger'] . "（" . $valueAry['triggerStr'] . "）"));
          //$ary[$key] = array("triggerDsp", $valueAry['trigger'] . "（" . $valueAry['triggerStr'] . "）");
          //array_push($valueAry['triggerDsp'], $valueAry['trigger'] . "（" . $valueAry['triggerStr'] . "）");
        }

        // 戻り値配列の作成(MR2APIを実行できなかった)
        //array_push($mr2ResultAry, array("result" => false));

        return $ary;
    }
}
