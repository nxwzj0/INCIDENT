<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentTListConditionDeleteTrueModel
//	作成日付・作成者：2018.01.05 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentTListConditionDeleteRunModel extends CommonModel {

    public function deleteCond($condName,$MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                UPDATE
                    IDENT_T_SEARCH_COND
                SET
                    DEL_FLG = '1'
                WHERE
                    COND_NM = '$condName'
SQL_INCIDENT_INFO;

        try{
            $MultiExecSql->execute($SQL_INCIDENT_INFO, '');
        }catch (Exception $e){
            print $e->getMessage();
            return SAVE_FALSE;
        }
        return SAVE_TRUE;
    }

    public function deleteCondDt($condName,$MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                UPDATE
                    IDENT_T_SEARCH_COND_DT
                SET
                    DEL_FLG = '1'
                WHERE
                    COND_ID = (SELECT COND_ID FROM IDENT_T_SEARCH_COND WHERE COND_NM = '$condName')
SQL_INCIDENT_INFO;

        try{
            $MultiExecSql->execute($SQL_INCIDENT_INFO, '');
        }catch (Exception $e){
            print $e->getMessage();
            return SAVE_FALSE;
        }
        return SAVE_TRUE;
    }
}