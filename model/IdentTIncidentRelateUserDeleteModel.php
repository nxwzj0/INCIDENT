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

    public function delete($MultiExecSql, $relateId) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                UPDATE
                    IDENT_T_INCIDENT_RELATE_USER 
                SET
                    DEL_FLG = '1'
                    ,UPD_DATE = SYSDATE
                WHERE
                    RELATE_ID = '$relateId'
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
