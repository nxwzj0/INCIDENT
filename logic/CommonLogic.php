<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：共通ロジック処理
//	作成日付・作成者：2017.10.05 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************


class CommonLogic {

    public function execute() {
        // パラメータの取得
        // DB読み取り
        // SQL実行
    }

    // 2018.01.18 Newtouch追加 start
    // 配列のnull判断
    public function checkDataExistence($ary) {
        if (isset($ary) && is_array($ary) && count($ary) > 0) {
            return SAVE_TRUE;
        } else {
            return null;
        }
    }
    // 2018.01.18 Newtouch追加 start

}
