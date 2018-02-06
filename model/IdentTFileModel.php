<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentTFileModel
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentTFileModel extends CommonModel {

    public function findByKey($fileId) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
	            SELECT
	                FT.FILE_ID,
	                FT.INCIDENT_ID,
	                FT.FILE_NAME,
	                FT.FILE_PATH,
	                FT.FSVR_NAME,
	                TO_CHAR(FT.INS_DATE,'yyyy/mm/dd hh24:mi:ss') FILE_INS_DATE,
	                FT.INS_USER_ID FILE_INS_USER_ID,
	                FT.INS_USER_NAME FILE_INS_USER_NAME,
	                FT.INS_SECTION_CD FILE_INS_SECTION_CD,
	                FT.INS_SECTION_NAME FILE_INS_SECTION_NAME,
	                FT.UPD_USER_ID FILE_UPD_USER_ID,
	                FT.UPD_USER_NAME FILE_UPD_USER_NAME,
	                FT.UPD_SECTION_CD FILE_UPD_SECTION_CD,
	                FT.UPD_SECTION_NAME FILE_UPD_SECTION_NAME,
	                TO_CHAR(FT.UPD_DATE,'yyyy/mm/dd hh24:mi:ss') FILE_UPD_DATE,
	                FT.DEL_FLG
	            FROM
	                IDENT_T_FILE FT
	            WHERE
	                FT.FILE_ID = '$fileId'
	            AND 
	                FT.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function getByIncidentId($incidentId) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
	            SELECT
	                FT.FILE_ID,
	                FT.INCIDENT_ID,
	                FT.FILE_NAME,
	                FT.FILE_PATH,
	                FT.FSVR_NAME,
	                TO_CHAR(FT.INS_DATE,'yyyy/mm/dd hh24:mi:ss') FILE_INS_DATE,
	                FT.INS_USER_ID FILE_INS_USER_ID,
	                FT.INS_USER_NAME FILE_INS_USER_NAME,
	                FT.INS_SECTION_CD FILE_INS_SECTION_CD,
	                FT.INS_SECTION_NAME FILE_INS_SECTION_NAME,
	                FT.UPD_USER_ID FILE_UPD_USER_ID,
	                FT.UPD_USER_NAME FILE_UPD_USER_NAME,
	                FT.UPD_SECTION_CD FILE_UPD_SECTION_CD,
	                FT.UPD_SECTION_NAME FILE_UPD_SECTION_NAME,
	                TO_CHAR(FT.UPD_DATE,'yyyy/mm/dd hh24:mi:ss') FILE_UPD_DATE,
	                FT.DEL_FLG
	            FROM
	                IDENT_T_FILE FT
	            WHERE
	                FT.INCIDENT_ID = '$incidentId'
	            AND 
	                FT.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function insert($conditions, $MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                INSERT INTO 
                    IDENT_T_FILE 
                ( 
                    FILE_ID,
                    INCIDENT_ID,
                    FILE_NAME,
                    FILE_PATH,
                    FSVR_NAME,
                    DEL_FLG,
                    INS_USER_ID,
                    INS_USER_NAME,
                    INS_SECTION_CD,
                    INS_SECTION_NAME,
                    INS_DATE
                )
                 VALUES(
                    '{$conditions['fileId']}',
                    '{$conditions['incidentId']}',
                    '{$conditions['fileNm']}',
                    '{$conditions['filePath']}',
                    '{$conditions['fsvrNm']}',
                    '0',
                    '{$conditions['loginUserId']}',
                    '{$conditions['loginUserNm']}',
                    '{$conditions['loginSectionCd']}',
                    '{$conditions['loginSectionNm']}',
                    SYSDATE
                )
SQL_INCIDENT_INFO;
        try {
            $MultiExecSql->execute($SQL_INCIDENT_INFO, "");
        } catch (Exception $e) {
            print $e->getMessage();
            return SAVE_FALSE;
        }

        return SAVE_TRUE;
    }

    public function update($conditions, $MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                UPDATE
                    IDENT_T_FILE
                SET
SQL_INCIDENT_INFO;

        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INCIDENT_ID = '{$conditions['incidentId']}',";
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " FILE_NAME = '{$conditions['FileNm']}',";
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " FILE_PATH = '{$conditions['filePath']}',";
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " FSVR_NAME = '{$conditions['fsvrNm']}',";
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " UPD_USER_ID = '{$conditions['loginUserId']}',";
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " UPD_USER_NAME = '{$conditions['loginUserNm']}',";
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " UPD_SECTION_CD = '{$conditions['loginSectionCd']}',";
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " UPD_SECTION_NAME = '{$conditions['loginSectionNm']}',";
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " UPD_SECTION_NAME = SYSDATE, ";
        if ($conditions['delFlg'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " DEL_FLG = '{$conditions['delFlg']}' ";
        }
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " WHERE FILE_ID = {$conditions['fileId']}";
    }

    public function selcetInsertFileId() {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT
                    SEQ_INCIDENT_NO.NEXTVAL
                FROM
                    DUAL
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

}
