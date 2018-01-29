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
	                TO_CHAR(FT.INS_DATE,'yyyy-mm-dd hh24:mi:ss') FILE_INS_DATE,
	                FT.INS_USER_ID FILE_INS_USER_ID,
	                FT.INS_USER_NAME FILE_INS_USER_NAME,
	                FT.INS_SECTION_CD FILE_INS_SECTION_CD,
	                FT.INS_SECTION_NAME FILE_INS_SECTION_NAME,
	                FT.UPD_USER_ID FILE_UPD_USER_ID,
	                FT.UPD_USER_NAME FILE_UPD_USER_NAME,
	                FT.UPD_SECTION_CD FILE_UPD_SECTION_CD,
	                FT.UPD_SECTION_NAME FILE_UPD_SECTION_NAME,
	                TO_CHAR(FT.UPD_DATE,'yyyy-mm-dd hh24:mi:ss') FILE_UPD_DATE,
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
	                TO_CHAR(FT.INS_DATE,'yyyy-mm-dd hh24:mi:ss') FILE_INS_DATE,
	                FT.INS_USER_ID FILE_INS_USER_ID,
	                FT.INS_USER_NAME FILE_INS_USER_NAME,
	                FT.INS_SECTION_CD FILE_INS_SECTION_CD,
	                FT.INS_SECTION_NAME FILE_INS_SECTION_NAME,
	                FT.UPD_USER_ID FILE_UPD_USER_ID,
	                FT.UPD_USER_NAME FILE_UPD_USER_NAME,
	                FT.UPD_SECTION_CD FILE_UPD_SECTION_CD,
	                FT.UPD_SECTION_NAME FILE_UPD_SECTION_NAME,
	                TO_CHAR(FT.UPD_DATE,'yyyy-mm-dd hh24:mi:ss') FILE_UPD_DATE,
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

}