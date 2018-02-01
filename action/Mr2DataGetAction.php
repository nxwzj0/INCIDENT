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
        if ($resultAry['result']) {

          // ループ用配列
          $loopAry = $ary;
          foreach($loopAry as $key => $valueAry){
            if ($key == 0) {
              continue;
            }
            // トリガー
            $valueAry['triggerDsp'] = $this->joinStr($valueAry['trigger'], $valueAry['triggerStr']);
            // 頻度
            $valueAry['hindoDsp'] = $this->joinStr($valueAry['hindo'], $valueAry['hindoStr']);
            // 現象
            $valueAry['gensyoDsp'] = $this->joinStr($valueAry['gensyo'], $valueAry['gensyoStr']);
            // 状態
            $valueAry['jyotaiDsp'] = $this->joinStr($valueAry['jyotai'], $valueAry['jyotaiStr']);
            // 顧客要望
            $valueAry['actSyotiYoboDsp'] = $this->joinStr($valueAry['actSyotiYobo'], $valueAry['actSyotiDetail']);
            // 原因分類
            $valueAry['geninSortDsp'] = $this->joinStr($valueAry['geninSortNm'], $valueAry['geninSortStr']);

            // 最終更新日
            $valueAry['updDateDsp'] = $this->checkUpdIns($valueAry['updDate'], $valueAry['insDate']);
            // 最終更新者
            $valueAry['updUserNmDsp'] = $this->checkUpdIns($valueAry['updUserNm'], $valueAry['insUserNm']);

            // 作成した文字列のセット
            $ary[$key] = $valueAry;
          }
        } else {
          // APIデータ 取得失敗
          $ary = array("result" => false);
        }

        return $ary;
    }

    public function joinStr($targetStr, $otherStr) {
      if (!isset($otherStr)) {
        return $targetStr;
      }
      if (strlen($otherStr) > 0) {
        $targetStr .= "（" . $otherStr . "）";
      }
      return $targetStr;
    }

    public function checkUpdIns($updStr, $insStr) {
      if (!isset($updStr)) {
        return $insStr;
      }
      if (strlen($updStr) > 0) {
        return $updStr;
      } else {
        return $insStr;
      }
    }
}
