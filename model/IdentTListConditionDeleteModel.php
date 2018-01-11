<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentTListConditionDeleteModel
//	作成日付・作成者：2018.01.04 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentTListConditionDeleteModel extends CommonModel {

    public function selectCond() {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT
                    COND_NM,
                    TO_CHAR(INS_DATE, 'yyyy/MM/dd HH24:MI') INS_DATE
                FROM
                    IDENT_T_SEARCH_COND
                WHERE
                    IDENT_T_SEARCH_COND.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

}