<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：共通DB処理
//	作成日付・作成者：2017.10.06 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

class CommonModel {

    // IN句の条件文字列を作成する
    public function getInConditionStrByArray($condition,$len) {
        $count = 0;
        foreach($condition as $one) {
            if ($one != NULL) {
                $inConditionStr = $inConditionStr . "'" . $one . "'";
                if (++$count !== $len) {
                    $inConditionStr = $inConditionStr . " , ";
                }
            }
        }
        return $inConditionStr;
    }
}

