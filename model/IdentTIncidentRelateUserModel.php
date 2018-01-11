<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentTIncidentRelateUserModel
//	作成日付・作成者：2017.11.01 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentTIncidentRelateUserModel extends CommonModel {

    public function getByIncidentId($incidentId) {
        $SQL_RELATE_USER_INFO = <<< SQL_RELATE_USER_INFO
                SELECT
                    RELATE_ID,
                    INCIDENT_ID,
                    RELATE_USER_ID,
                    RELATE_USER_NM,
                    RELATE_USER_SECTION_CD,
                    RELATE_USER_SECTION_NM 
                FROM
                    IDENT_T_INCIDENT_RELATE_USER
                WHERE
                    DEL_FLG = '0'
                AND
                    INCIDENT_ID = '$incidentId'
SQL_RELATE_USER_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_RELATE_USER_INFO, $sqlResult);
        return $sqlResult;
    }

    public function getByIncidentIdList($conditions) {
        $SQL_RELATE_USER_INFO = <<< SQL_RELATE_USER_INFO
                SELECT
                    RELATE_ID,
                    INCIDENT_ID,
                    RELATE_USER_ID,
                    RELATE_USER_NM,
                    RELATE_USER_SECTION_CD,
                    RELATE_USER_SECTION_NM 
                FROM
                    IDENT_T_INCIDENT_RELATE_USER
                WHERE
                    DEL_FLG = '0'
SQL_RELATE_USER_INFO;

        //インシデントID
        if($conditions !=null & count($conditions) > 0){
            $len = count($conditions);
            $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO . " AND INCIDENT_ID IN (";
            $incidentId = parent::getInConditionStrByArray($conditions,$len);
            $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO . $incidentId . " ) ";
        }
        $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO." ORDER BY INCIDENT_ID";

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_RELATE_USER_INFO, $sqlResult);
        return $sqlResult;
    }

    public function update($conditions,$MultiExecSql) {
        $SQL_RELATE_USER_INFO = <<< SQL_RELATE_USER_INFO
                UPDATE
                    IDENT_T_INCIDENT_RELATE_USER
                SET
SQL_RELATE_USER_INFO;

        if($conditions['userNm'] != null){
            $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO." RELATE_USER_NM = '{$conditions['userNm']}',";
        }
        if($conditions['sectionCd'] != null){
            $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO." RELATE_USER_SECTION_CD = '{$conditions['sectionCd']}',";
        }
        if($conditions['sectionNm'] != null){
            $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO." RELATE_USER_SECTION_NM = '{$conditions['sectionNm']}',";
        }
        if($conditions['loginUserId'] != null){
            $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO." UPD_USER_ID = '{$conditions['loginUserId']}',";
        }
        if($conditions['loginUserNm'] != null){
            $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO." UPD_USER_NAME = '{$conditions['loginUserNm']}',";
        }
        if($conditions['loginSectionCd'] != null){
            $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO." UPD_SECTION_CD = '{$conditions['loginSectionCd']}',";
        }
        if($conditions['loginSectionNm'] != null){
            $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO." UPD_SECTION_NAME = '{$conditions['loginSectionNm']}',";
        }
        $SQL_RELATE_USER_INFO = $SQL_RELATE_USER_INFO." UPD_DATE = SYSDATE, DEL_FLG = '0' WHERE RELATE_USER_ID = '{$conditions['userId']}'";  

        try{
            $MultiExecSql->execute($SQL_RELATE_USER_INFO, '');
        }catch (Exception $e){
            print $e->getMessage();
            return SAVE_FALSE;
        }
        return SAVE_TRUE;
    }

    public function insert($conditions,$MultiExecSql) {
        $SQL_RELATE_USER_INFO = <<< SQL_RELATE_USER_INFO
                INSERT INTO
                    IDENT_T_INCIDENT_RELATE_USER
                (
                    RELATE_ID,
                    INCIDENT_ID,
                    RELATE_USER_ID,
                    RELATE_USER_NM,
                    RELATE_USER_SECTION_CD,
                    RELATE_USER_SECTION_NM,
                    DEL_FLG,
                    INS_USER_ID,
                    INS_USER_NAME,
                    INS_SECTION_CD,
                    INS_SECTION_NAME,
                    INS_DATE
                )
                VALUES(
                    T_INCIDENT_RELATE_USER_SEQ.NEXTVAL,
                    '{$conditions['incidentId']}',
                    '{$conditions['userId']}',
                    '{$conditions['userNm']}',
                    '{$conditions['sectionCd']}',
                    '{$conditions['sectionNm']}',
                    '0',
                    '{$conditions['loginUserId']}',
                    '{$conditions['loginUserNm']}',
                    '{$conditions['loginSectionCd']}',
                    '{$conditions['loginSectionNm']}',
                    SYSDATE
                )
SQL_RELATE_USER_INFO;

        try{
            $MultiExecSql->execute($SQL_RELATE_USER_INFO, '');
        }catch (Exception $e){
            print $e->getMessage();
            return SAVE_FALSE;
        }
        return SAVE_TRUE;
    }
}
