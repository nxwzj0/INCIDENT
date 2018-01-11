<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentTListConditionSaveModel
//	作成日付・作成者：2018.01.03 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentTListConditionSaveModel extends CommonModel {

    public function findCondNm($condNm) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT
                    COND_NM
                FROM
                    IDENT_T_SEARCH_COND
                WHERE
                    COND_NM = '$condNm'
                AND
                    IDENT_T_SEARCH_COND.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function selectCondId() {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT
                    T_INCIDENT_SEARCH_COND_SEQ.NEXTVAL
                FROM
                    DUAL
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function insertCond($condId,$condNm,$userId,$userName,$sectionCd,$sectionName,$MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                INSERT INTO
                    IDENT_T_SEARCH_COND
                (
                    COND_ID,
                    COND_NM,
                    USER_ID,
                    DEL_FLG,
                    INS_USER_ID,
                    INS_USER_NAME,
                    INS_SECTION_CD,
                    INS_SECTION_NAME,
                    INS_DATE
                )
                VALUES(
                    '$condId',
                    '$condNm',
                    '$userId',
                    '0',
                    '$userId',
                    '$userName',
                    '$sectionCd',
                    '$sectionName',
                    SYSDATE
                )
SQL_INCIDENT_INFO;

        try{
            $MultiExecSql->execute($SQL_INCIDENT_INFO, '');
        }catch (Exception $e){
            print $e->getMessage();
            return SAVE_FALSE;
        }
        return SAVE_TRUE;
    }

    public function insertCondDt($condId,$condListKey,$condListValue,$userId,$userName,$sectionCd,$sectionName,$MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                INSERT INTO
                    IDENT_T_SEARCH_COND_DT
                (
                    COND_DT_ID,
                    COND_ID,
                    COND_FLD,
                    COND_VAL,
                    DEL_FLG,
                    INS_USER_ID,
                    INS_USER_NAME,
                    INS_SECTION_CD,
                    INS_SECTION_NAME,
                    INS_DATE
                )
                VALUES(
                    T_INCIDENT_SEARCH_COND_DT_SEQ.NEXTVAL,
                    '$condId',
                    '$condListKey',
                    '$condListValue',
                    '0',
                    '$userId',
                    '$userName',
                    '$sectionCd',
                    '$sectionName',
                    SYSDATE
                )
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