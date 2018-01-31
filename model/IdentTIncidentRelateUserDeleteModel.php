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

    public function delete($MultiExecSql, $conditions) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                UPDATE
                    IDENT_T_INCIDENT_RELATE_USER 
                SET
                    DEL_FLG = '1'
                    ,UPD_DATE = SYSDATE
                    ,UPD_USER_ID = '{$conditions['loginUserId']}'
                    ,UPD_USER_NAME = '{$conditions['loginUserNm']}'
                    ,UPD_SECTION_CD = '{$conditions['loginSectionCd']}'
                    ,UPD_SECTION_NAME = '{$conditions['loginSectionNm']}'
                WHERE
                    RELATE_ID = '{$conditions['relateId']}'
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
