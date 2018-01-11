<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：テスト
//	処理名　　　　　：テスト用配列作成処理
//	作成日付・作成者：2017.10.03 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once("./model/CommonModel.php");

class TestTblModel extends CommonModel {

    public function findByKey($key) {
        $SQL_TEST_INFO = <<< SQL_TEST_INFO
                SELECT
                        TEST_ID ,
                        TEST_NO ,
                        UPD_USER_ID ,
                        UPD_DATE 
                FROM
                        TEST_TBL
                WHERE
                    TEST_ID = '$key'
SQL_TEST_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_TEST_INFO, $sqlResult);
        echo $sqlResult["1"];
        return $sqlResult;
    }

    public function insert(MultiExecSql $MultiExecSql, array $insertData) {
        $SQL_TEST_INFO2 = <<< SQL_TEST_INFO2
    		INSERT INTO TEST_TBL (
    			TEST_ID ,
    			TEST_NO ,
    			UPD_USER_ID ,
    			UPD_DATE 
    		)VALUES(
                        '{$insertData["testId"]}'
                        ,'{$insertData["testNo"]}'
                        ,'{$insertData["testUserId"]}'
    			,sysdate
    		)
SQL_TEST_INFO2;

        try {
            // SQL 実行
            $MultiExecSql->execute($SQL_TEST_INFO2);
            return true;
        } catch (Exception $e) {
            echo 'SQL実行時エラー: ', $e->getMessage(), "\n";
            header('HTTP', true, 500);
            return false;
        }
    }

}
