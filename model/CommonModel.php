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

    // 2018.01.18 Newtouch追加 start
    // チェック日付フォーマット
    function valid_date($date){
        // 日付フォーマット
        if (preg_match ("/^([0-9]{4})([0-9]{2})([0-9]{2})$/", $date, $parts)){
            //チェック日付フォーマット,checkdateは月日年
            if(checkdate($parts[2],$parts[3],$parts[1])){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    // 2018.01.18 Newtouch追加 end

}

