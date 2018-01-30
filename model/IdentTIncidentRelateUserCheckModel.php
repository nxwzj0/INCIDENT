<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentTIncidentRelateUserCheckModel
//	作成日付・作成者：2018.01.05 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentTIncidentRelateUserCheckModel extends CommonModel {

    public function check($incidentId, $deptCd, $userId) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT
                      NVL(COUNT(1),0) RESULT
                FROM
                    IDENT_T_INCIDENT_RELATE_USER
                WHERE
                    DEL_FLG = '0'
                    AND INCIDENT_ID = '$incidentId'
                    AND RELATE_USER_SECTION_CD = '$deptCd'
                    AND RELATE_USER_ID = '$userId'
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult[0]["RESULT"];
    }

}
