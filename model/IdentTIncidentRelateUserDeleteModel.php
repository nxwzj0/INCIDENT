<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentTIncidentRelateUserDeleteModel
//	作成日付・作成者：2018.01.05 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentTIncidentRelateUserDeleteModel extends CommonModel {

    public function delete($MultiExecSql, $incidentId, $deptCd, $userId) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                UPDATE
                    IDENT_T_INCIDENT_RELATE_USER T
                SET
                    T.DEL_FLG = '1'
                WHERE
                    T.INCIDENT_ID = '$incidentId'
                    AND T.RELATE_USER_SECTION_CD = '$deptCd'
                    AND T.RELATE_USER_ID = '$userId'
SQL_INCIDENT_INFO;

        try {
            $MultiExecSql->execute($SQL_INCIDENT_INFO, '');
        } catch (Exception $e) {
            print $e->getMessage();
            return SAVE_FALSE;
        }
        return SAVE_TRUE;
    }

}
