<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentMKisyuKbnModel
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentMKisyuKbnModel extends CommonModel {

    public function getKisyuKbnListBySotiKbnCd($sotiKbnCd) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
	            SELECT
	                KKB.KISYU_KBN_CD,
	                KKB.SOTI_KBN_CD,
	                KKB.KISYU_KBN_NM,
	                KKB.SORT
	            FROM
	                IDENT_M_KISYU_KBN KKB
	            WHERE
	                KKB.DEL_FLG = '0'
                      AND KKB.SOTI_KBN_CD = '$sotiKbnCd'
                    ORDER BY SORT ASC
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

}
