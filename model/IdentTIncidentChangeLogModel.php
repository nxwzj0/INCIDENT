<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentTIncidentChangeLogModel
//	作成日付・作成者：2017.11.01 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");

require_once("./model/CommonModel.php");   

class IdentTIncidentChangeLogModel extends CommonModel{

    public function getByIncidentId($incidentId) {
        $SQL_CHANGE_LOG_INFO = <<< SQL_CHANGE_LOG_INFO
                SELECT
                        CHANGE_LOG_ID,
                        INCIDENT_ID,
                        SORT_NO,
                        CHANGE_USER_NM,
                        TO_CHAR(CHANGE_DATE,'yyyy/mm/dd hh24:mi:ss') CHANGE_DATE,
                        CHANGE_ITEM,
                        CHANGE_CONTENT
                FROM
                        IDENT_T_INCIDENT_CHANGE_LOG
                WHERE
                        INCIDENT_ID = '$incidentId'
                AND
                        DEL_FLG = '0'
                ORDER BY
                        SORT_NO DESC, CHANGE_DATE DESC
SQL_CHANGE_LOG_INFO;
        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_CHANGE_LOG_INFO, $sqlResult);
        return $sqlResult;
    }
    
    public function getByIncidentIdList($conditions) {
        $SQL_CHANGE_LOG_INFO = <<< SQL_CHANGE_LOG_INFO
                SELECT
                        CHANGE_LOG_ID,
                        INCIDENT_ID,
                        SORT_NO,
                        CHANGE_USER_NM,
                        TO_CHAR(CHANGE_DATE,'yyyy/mm/dd hh24:mi:ss') CHANGE_DATE,
                        CHANGE_ITEM,
                        CHANGE_CONTENT
                FROM
                        IDENT_T_INCIDENT_CHANGE_LOG
                WHERE
                        DEL_FLG = '0'
SQL_CHANGE_LOG_INFO;
        //インシデントID
        if($conditions !=null & count($conditions) > 0){
            $len = count($conditions);
            $SQL_CHANGE_LOG_INFO = $SQL_CHANGE_LOG_INFO . " AND INCIDENT_ID IN (";
            $incidentId = parent::getInConditionStrByArray($conditions,$len);
            $SQL_CHANGE_LOG_INFO = $SQL_CHANGE_LOG_INFO . $incidentId . " ) ";
        }
        $SQL_CHANGE_LOG_INFO = $SQL_CHANGE_LOG_INFO." ORDER BY SORT_NO DESC, CHANGE_DATE DESC";
        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_CHANGE_LOG_INFO, $sqlResult);
        return $sqlResult;
    }

    public function getMaxSortNoByIncidentId($incidentId) {
        $SQL_CHANGE_LOG_INFO = <<< SQL_CHANGE_LOG_INFO
                SELECT
                        MAX(SORT_NO) AS MAX_SORT_NO
                FROM
                        IDENT_T_INCIDENT_CHANGE_LOG
                WHERE
                        INCIDENT_ID = '$incidentId'
                AND
                        DEL_FLG = '0'
SQL_CHANGE_LOG_INFO;
        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_CHANGE_LOG_INFO, $sqlResult);
        return $sqlResult;
    }

    public function insert($conditions,$MultiExecSql) {
        $SQL_CHANGE_LOG_INFO = <<< SQL_CHANGE_LOG_INFO
                INSERT INTO
                    IDENT_T_INCIDENT_CHANGE_LOG
                (
                    CHANGE_LOG_ID,
                    INCIDENT_ID,
                    SORT_NO,
                    CHANGE_USER_NM,
                    CHANGE_DATE,
                    CHANGE_ITEM,
                    CHANGE_CONTENT,
                    DEL_FLG,
                    INS_USER_ID,
                    INS_USER_NAME,
                    INS_SECTION_CD,
                    INS_SECTION_NAME,
                    INS_DATE
                )VALUES(
                    T_INCIDENT_CHANGE_LOG_SEQ.NEXTVAL,
                    '{$conditions['incidentId']}',
                    '{$conditions['sortNo']}',
                    '{$conditions['loginUserNm']}',
                    SYSDATE,
                    '{$conditions['changeItem']}',
                    '{$conditions['changeContent']}',
                    '0',
                    '{$conditions['loginUserId']}',
                    '{$conditions['loginUserNm']}',
                    '{$conditions['loginSectionCd']}',
                    '{$conditions['loginSectionNm']}',
                    SYSDATE
                )
SQL_CHANGE_LOG_INFO;

        try{
            $MultiExecSql->execute($SQL_CHANGE_LOG_INFO,"");
        }catch (Exception $e){
            print $e->getMessage();
            return SAVE_FALSE;
        }

        return SAVE_TRUE;
    }

}