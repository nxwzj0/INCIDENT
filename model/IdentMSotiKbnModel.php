<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentMSotiKbnModel
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentMSotiKbnModel extends CommonModel {

    public function getSotiKbnList() {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
	            SELECT
	                SKB.SOTI_KBN_CD,
	                SKB.SOTI_KBN_NM,
	                SKB.SORT
	            FROM
	                IDENT_M_SOTI_KBN SKB
	            WHERE
	                SKB.DEL_FLG = '0'
                    ORDER BY SORT ASC
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

}
