<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IdentTIncidentModel
//	作成日付・作成者：2017.11.01 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class IdentTIncidentModel extends CommonModel {

    public function findByKey($incidentId) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT
                    INCIDENT.INCIDENT_ID IN_INCIDENT_ID,
                    INCIDENT.INCIDENT_NO IN_INCIDENT_NO,
                    INCIDENT.INCIDENT_STS IN_INCIDENT_STS,
                    INCIDENT.INCIDENT_TYPE_CD IN_INCIDENT_TYPE_CD,
                    INCIDENT.INDUSTRY_TYPE_CD IN_INDUSTRY_TYPE_CD,
                    INCIDENT.PARENT_INCIDENT_NO IN_PARENT_INCIDENT_NO,
                    TO_CHAR(INCIDENT.INCIDENT_START_DATETIME,'yyyy/mm/dd hh24:mi:ss') IN_INCIDENT_START_DATETIME,
                    INCIDENT.INFO_SOURCE IN_INFO_SOURCE,
                    INCIDENT.INFO_PROVIDER IN_INFO_PROVIDER,
                    INCIDENT.INFO_PROVIDER_TEL IN_INFO_PROVIDER_TEL,
                    INCIDENT.MEMO IN_MEMO,
                    INCIDENT.KIJO_ID IN_KIJO_ID,
                    INCIDENT.KIJO_NM IN_KIJO_NM,
                    INCIDENT.JIGYOSYUTAI_ID IN_JIGYOSYUTAI_ID,
                    INCIDENT.JIGYOSYUTAI_NM IN_JIGYOSYUTAI_NM,
                    INCIDENT.SETUBI_ID IN_SETUBI_ID,
                    INCIDENT.SETUBI_NM IN_SETUBI_NM,
                    INCIDENT.PREF_NM IN_PREF_NM,
                    INCIDENT.DELIVERY_PJ_NO IN_DELIVERY_PJ_NO,
                    INCIDENT.CUST_ID IN_CUST_ID,
                    INCIDENT.CUST_NM IN_CUST_NM,
                    INCIDENT.CUST_TYPE_CD IN_CUST_TYPE_CD,
                    INCIDENT.CUST_TYPE_NM IN_CUST_TYPE_NM,
                    INCIDENT.CUST_DEPT IN_CUST_DEPT,
                    INCIDENT.REQUESTER IN_REQUESTER,
                    INCIDENT.CONTACT_TEL IN_CONTACT_TEL,
                    INCIDENT.CONTACT_FAX IN_CONTACT_FAX,
                    INCIDENT.CONTACT_MAIL IN_CONTACT_MAIL,
                    INCIDENT.SALES_DEPT_CD IN_SALES_DEPT_CD,
                    INCIDENT.SALES_DEPT_NM IN_SALES_DEPT_NM,
                    INCIDENT.SALES_USER_ID IN_SALES_USER_ID,
                    INCIDENT.SALES_USER_NM IN_SALES_USER_NM,
                    INCIDENT.SKAN_DEPT_CD IN_SKAN_DEPT_CD,
                    INCIDENT.SKAN_DEPT_NM IN_SKAN_DEPT_NM,
                    INCIDENT.SKAN_USER_ID IN_SKAN_USER_ID,
                    INCIDENT.SKAN_USER_NM IN_SKAN_USER_NM,
                    TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') IN_CALL_START_DATE,
                    TO_CHAR(INCIDENT.CALL_END_DATE,'yyyy/mm/dd hh24:mi:ss') IN_CALL_END_DATE,
                    INCIDENT.CALL_DEPT_CD IN_CALL_DEPT_CD,
                    INCIDENT.CALL_DEPT_NM IN_CALL_DEPT_NM,
                    INCIDENT.CALL_USER_CD IN_CALL_USER_CD,
                    INCIDENT.CALL_USER_NM IN_CALL_USER_NM,
                    INCIDENT.CALL_TEL IN_CALL_TEL,
                    INCIDENT.CALL_MAIL IN_CALL_MAIL,
                    INCIDENT.CALL_CONTENT IN_CALL_CONTENT,
                    TO_CHAR(INCIDENT.TAIO_START_DATE,'yyyy/mm/dd hh24:mi:ss') IN_TAIO_START_DATE,
                    TO_CHAR(INCIDENT.TAIO_END_DATE,'yyyy/mm/dd hh24:mi:ss') IN_TAIO_END_DATE,
                    INCIDENT.TAIO_DEPT_CD IN_TAIO_DEPT_CD,
                    INCIDENT.TAIO_DEPT_NM IN_TAIO_DEPT_NM,
                    INCIDENT.TAIO_USER_ID IN_TAIO_USER_ID,
                    INCIDENT.TAIO_USER_NM IN_TAIO_USER_NM,
                    INCIDENT.TAIO_TEL IN_TAIO_TEL,
                    INCIDENT.TAIO_MAIL IN_TAIO_MAIL,
                    INCIDENT.TAIO_CONTENT IN_TAIO_CONTENT,
                    TO_CHAR(INCIDENT.ACT_DATE,'yyyy/mm/dd hh24:mi:ss') IN_ACT_DATE,
                    INCIDENT.ACT_TYPE_CD IN_ACT_TYPE_CD,
                    TO_CHAR(INCIDENT.ACT_START_TIME,'yyyy/mm/dd hh24:mi:ss') IN_ACT_START_TIME,
                    TO_CHAR(INCIDENT.ACT_END_TIME,'yyyy/mm/dd hh24:mi:ss') IN_ACT_END_TIME,
                    INCIDENT.ACT_DEPT_CD IN_ACT_DEPT_CD,
                    INCIDENT.ACT_DEPT_NM IN_ACT_DEPT_NM,
                    INCIDENT.ACT_USER_ID IN_ACT_USER_ID,
                    INCIDENT.ACT_USER_NM IN_ACT_USER_NM,
                    INCIDENT.ACT_TEL IN_ACT_TEL,
                    INCIDENT.ACT_MAIL IN_ACT_MAIL,
                    INCIDENT.ACT_CONTENT IN_ACT_CONTENT,
                    INCIDENT.SOTI_KBN_CD IN_SOTI_KBN_CD,
                    INCIDENT.SOTI_KBN_NM IN_SOTI_KBN_NM,
                    INCIDENT.KISYU_KBN_CD IN_KISYU_KBN_CD,
                    INCIDENT.KISYU_KBN_NM IN_KISYU_KBN_NM,
                    INCIDENT.KISYU_NM IN_KISYU_NM,
                    INCIDENT.PRODUCT_TRIGGER IN_PRODUCT_TRIGGER,
                    INCIDENT.PRODUCT_HINDO IN_PRODUCT_HINDO,
                    INCIDENT.PRODUCT_GENSYO IN_PRODUCT_GENSYO,
                    INCIDENT.PRODUCT_STATUS IN_PRODUCT_STATUS,
                    TO_CHAR(INCIDENT.INS_DATE,'yyyy/mm/dd hh24:mi:ss') IN_INS_DATE,
                    INCIDENT.INS_USER_ID IN_INS_USER_ID,
                    INCIDENT.INS_USER_NAME IN_INS_USER_NAME,
                    INCIDENT.INS_SECTION_CD IN_INS_SECTION_CD,
                    INCIDENT.INS_SECTION_NAME IN_INS_SECTION_NAME,
                    INCIDENT.UPD_USER_ID IN_UPD_USER_ID,
                    INCIDENT.UPD_USER_NAME IN_UPD_USER_NAME,
                    INCIDENT.UPD_SECTION_CD IN_UPD_SECTION_CD,
                    INCIDENT.UPD_SECTION_NAME IN_UPD_SECTION_NAME,
                    TO_CHAR(INCIDENT.UPD_DATE,'yyyy/mm/dd hh24:mi:ss') IN_UPD_DATE,
                    INCIDENT.DEL_FLG
                FROM
                    IDENT_T_INCIDENT INCIDENT
                WHERE
                    INCIDENT.INCIDENT_ID = '$incidentId'
                AND
                    INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function getIncident($conditions) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
            SELECT
                INCIDENT.INCIDENT_ID IN_INCIDENT_ID,
                INCIDENT.INCIDENT_NO IN_INCIDENT_NO,
                INCIDENT.INCIDENT_STS IN_INCIDENT_STS,
                INCIDENT.INCIDENT_TYPE_CD IN_INCIDENT_TYPE_CD,
                INCIDENT.PARENT_INCIDENT_NO IN_PARENT_INCIDENT_NO,
                TO_CHAR(INCIDENT.INCIDENT_START_DATETIME,'yyyy/mm/dd hh24:mi:ss') IN_INCIDENT_START_DATETIME,
                INCIDENT.INDUSTRY_TYPE_CD IN_INDUSTRY_TYPE_CD,
                INCIDENT.INFO_SOURCE IN_INFO_SOURCE,
                INCIDENT.INFO_PROVIDER IN_INFO_PROVIDER,
                INCIDENT.INFO_PROVIDER_TEL IN_INFO_PROVIDER_TEL,
                INCIDENT.MEMO IN_MEMO,
                INCIDENT.KIJO_ID IN_KIJO_ID,
                INCIDENT.KIJO_NM IN_KIJO_NM,
                INCIDENT.JIGYOSYUTAI_ID IN_JIGYOSYUTAI_ID,
                INCIDENT.JIGYOSYUTAI_NM IN_JIGYOSYUTAI_NM,
                INCIDENT.SETUBI_ID IN_SETUBI_ID,
                INCIDENT.SETUBI_NM IN_SETUBI_NM,
                INCIDENT.PREF_NM IN_PREF_NM,
                INCIDENT.DELIVERY_PJ_NO IN_DELIVERY_PJ_NO,
                INCIDENT.CUST_ID IN_CUST_ID,
                INCIDENT.CUST_NM IN_CUST_NM,
                INCIDENT.CUST_TYPE_CD IN_CUST_TYPE_CD,
                INCIDENT.CUST_TYPE_NM IN_CUST_TYPE_NM,
                INCIDENT.CUST_DEPT IN_CUST_DEPT,
                INCIDENT.REQUESTER IN_REQUESTER,
                INCIDENT.CONTACT_TEL IN_CONTACT_TEL,
                INCIDENT.CONTACT_FAX IN_CONTACT_FAX,
                INCIDENT.CONTACT_MAIL IN_CONTACT_MAIL,
                INCIDENT.SALES_DEPT_CD IN_SALES_DEPT_CD,
                INCIDENT.SALES_DEPT_NM IN_SALES_DEPT_NM,
                INCIDENT.SALES_USER_ID IN_SALES_USER_ID,
                INCIDENT.SALES_USER_NM IN_SALES_USER_NM,
                INCIDENT.SKAN_DEPT_CD IN_SKAN_DEPT_CD,
                INCIDENT.SKAN_DEPT_NM IN_SKAN_DEPT_NM,
                INCIDENT.SKAN_USER_ID IN_SKAN_USER_ID,
                INCIDENT.SKAN_USER_NM IN_SKAN_USER_NM,
                TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') IN_CALL_START_DATE,
                TO_CHAR(INCIDENT.CALL_END_DATE,'yyyy/mm/dd hh24:mi:ss') IN_CALL_END_DATE,
                INCIDENT.CALL_DEPT_CD IN_CALL_DEPT_CD,
                INCIDENT.CALL_DEPT_NM IN_CALL_DEPT_NM,
                INCIDENT.CALL_USER_CD IN_CALL_USER_CD,
                INCIDENT.CALL_USER_NM IN_CALL_USER_NM,
                INCIDENT.CALL_TEL IN_CALL_TEL,
                INCIDENT.CALL_MAIL IN_CALL_MAIL,
                INCIDENT.CALL_CONTENT IN_CALL_CONTENT,
                TO_CHAR(INCIDENT.TAIO_START_DATE,'yyyy/mm/dd hh24:mi:ss') IN_TAIO_START_DATE,
                TO_CHAR(INCIDENT.TAIO_END_DATE,'yyyy/mm/dd hh24:mi:ss') IN_TAIO_END_DATE,
                INCIDENT.TAIO_DEPT_CD IN_TAIO_DEPT_CD,
                INCIDENT.TAIO_DEPT_NM IN_TAIO_DEPT_NM,
                INCIDENT.TAIO_USER_ID IN_TAIO_USER_ID,
                INCIDENT.TAIO_USER_NM IN_TAIO_USER_NM,
                INCIDENT.TAIO_TEL IN_TAIO_TEL,
                INCIDENT.TAIO_MAIL IN_TAIO_MAIL,
                INCIDENT.TAIO_CONTENT IN_TAIO_CONTENT,
                TO_CHAR(INCIDENT.ACT_DATE,'yyyy/mm/dd hh24:mi:ss') IN_ACT_DATE,
                INCIDENT.ACT_TYPE_CD IN_ACT_TYPE_CD,
                TO_CHAR(INCIDENT.ACT_START_TIME,'yyyy/mm/dd hh24:mi:ss') IN_ACT_START_TIME,
                TO_CHAR(INCIDENT.ACT_END_TIME,'yyyy/mm/dd hh24:mi:ss') IN_ACT_END_TIME,
                INCIDENT.ACT_DEPT_CD IN_ACT_DEPT_CD,
                INCIDENT.ACT_DEPT_NM IN_ACT_DEPT_NM,
                INCIDENT.ACT_USER_ID IN_ACT_USER_ID,
                INCIDENT.ACT_USER_NM IN_ACT_USER_NM,
                INCIDENT.ACT_TEL IN_ACT_TEL,
                INCIDENT.ACT_MAIL IN_ACT_MAIL,
                INCIDENT.ACT_CONTENT IN_ACT_CONTENT,
                INCIDENT.SOTI_KBN_CD IN_SOTI_KBN_CD,
                INCIDENT.SOTI_KBN_NM IN_SOTI_KBN_NM,
                INCIDENT.KISYU_KBN_CD IN_KISYU_KBN_CD,
                INCIDENT.KISYU_KBN_NM IN_KISYU_KBN_NM,
                INCIDENT.KISYU_NM IN_KISYU_NM,
                INCIDENT.PRODUCT_TRIGGER IN_PRODUCT_TRIGGER,
                INCIDENT.PRODUCT_HINDO IN_PRODUCT_HINDO,
                INCIDENT.PRODUCT_GENSYO IN_PRODUCT_GENSYO,
                INCIDENT.PRODUCT_STATUS IN_PRODUCT_STATUS,
                TO_CHAR(INCIDENT.INS_DATE,'yyyy/mm/dd hh24:mi:ss') IN_INS_DATE,
                INCIDENT.INS_USER_ID IN_INS_USER_ID,
                INCIDENT.INS_USER_NAME IN_INS_USER_NAME,
                INCIDENT.INS_SECTION_CD IN_INS_SECTION_CD,
                INCIDENT.INS_SECTION_NAME IN_INS_SECTION_NAME,
                INCIDENT.UPD_USER_ID IN_UPD_USER_ID,
                INCIDENT.UPD_USER_NAME IN_UPD_USER_NAME,
                INCIDENT.UPD_SECTION_CD IN_UPD_SECTION_CD,
                INCIDENT.UPD_SECTION_NAME IN_UPD_SECTION_NAME,
                TO_CHAR(INCIDENT.UPD_DATE,'yyyy/mm/dd hh24:mi:ss') IN_UPD_DATE,
                INCIDENT.DEL_FLG
            FROM
                IDENT_T_INCIDENT INCIDENT
            WHERE
                INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        // 機場ID
        if ($conditions['kijoId'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.KIJO_ID = " . "'" . $conditions['kijoId'] . "'";
        }

        // 顧客名
        if ($conditions['custNm'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_NM = " . "'" . $conditions['custNm'] . "'";
        }

        // 除外するインシデントID
        if ($conditions['excludeIncidentId'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_ID != " . "'" . $conditions['excludeIncidentId'] . "'";
        }
        
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ORDER BY TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') DESC NULLS LAST ";

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function getRelateIncident($conditions) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
            SELECT
                INCIDENT.INCIDENT_ID IN_INCIDENT_ID,
                INCIDENT.INCIDENT_NO IN_INCIDENT_NO,
                INCIDENT.INCIDENT_TYPE_CD IN_INCIDENT_TYPE_CD_CD,
                TO_CHAR(INCIDENT.INCIDENT_START_DATETIME,'yyyy/mm/dd') IN_INCIDENT_START_DATETIME,
                INCIDENT.KIJO_NM IN_KIJO_NM,
                INCIDENT.CUST_NM IN_CUST_NM,
                INCIDENT.CALL_CONTENT IN_CALL_CONTENT
            FROM
                IDENT_T_INCIDENT INCIDENT
            WHERE
                INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        // 機場ID
        if ($conditions['kijoId'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.KIJO_ID = " . "'" . $conditions['kijoId'] . "'";
        }

        // 顧客名
        if ($conditions['custId'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_ID = " . "'" . $conditions['custId'] . "'";
        }

        // 除外するインシデントID
        if ($conditions['excludeIncidentId'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_ID != " . "'" . $conditions['excludeIncidentId'] . "'";
        }

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function getIncidentList($conditions) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT
                    INCIDENT.INCIDENT_ID IN_INCIDENT_ID,
                    INCIDENT.INCIDENT_NO IN_INCIDENT_NO,
                    INCIDENT.INCIDENT_STS IN_INCIDENT_STS,
                    INCIDENT.INCIDENT_TYPE_CD IN_INCIDENT_TYPE_CD,
                    INCIDENT.PARENT_INCIDENT_NO IN_PARENT_INCIDENT_NO,
                    TO_CHAR(INCIDENT.INCIDENT_START_DATETIME,'yyyy/mm/dd hh24:mi:ss') IN_INCIDENT_START_DATETIME,
                    INCIDENT.INDUSTRY_TYPE_CD IN_INDUSTRY_TYPE_CD,
                    INCIDENT.INFO_SOURCE IN_INFO_SOURCE,
                    INCIDENT.INFO_PROVIDER IN_INFO_PROVIDER,
                    INCIDENT.INFO_PROVIDER_TEL IN_INFO_PROVIDER_TEL,
                    INCIDENT.MEMO IN_MEMO,
                    INCIDENT.KIJO_ID IN_KIJO_ID,
                    INCIDENT.KIJO_NM IN_KIJO_NM,
                    INCIDENT.JIGYOSYUTAI_ID IN_JIGYOSYUTAI_ID,
                    INCIDENT.JIGYOSYUTAI_NM IN_JIGYOSYUTAI_NM,
                    INCIDENT.SETUBI_ID IN_SETUBI_ID,
                    INCIDENT.SETUBI_NM IN_SETUBI_NM,
                    INCIDENT.PREF_NM IN_PREF_NM,
                    INCIDENT.DELIVERY_PJ_NO IN_DELIVERY_PJ_NO,
                    INCIDENT.CUST_ID IN_CUST_ID,
                    INCIDENT.CUST_NM IN_CUST_NM,
                    INCIDENT.CUST_TYPE_CD IN_CUST_TYPE_CD,
                    INCIDENT.CUST_TYPE_NM IN_CUST_TYPE_NM,
                    INCIDENT.CUST_DEPT IN_CUST_DEPT,
                    INCIDENT.REQUESTER IN_REQUESTER,
                    INCIDENT.CONTACT_TEL IN_CONTACT_TEL,
                    INCIDENT.CONTACT_FAX IN_CONTACT_FAX,
                    INCIDENT.CONTACT_MAIL IN_CONTACT_MAIL,
                    INCIDENT.SALES_DEPT_CD IN_SALES_DEPT_CD,
                    INCIDENT.SALES_DEPT_NM IN_SALES_DEPT_NM,
                    INCIDENT.SALES_USER_ID IN_SALES_USER_ID,
                    INCIDENT.SALES_USER_NM IN_SALES_USER_NM,
                    INCIDENT.SKAN_DEPT_CD IN_SKAN_DEPT_CD,
                    INCIDENT.SKAN_DEPT_NM IN_SKAN_DEPT_NM,
                    INCIDENT.SKAN_USER_ID IN_SKAN_USER_ID,
                    INCIDENT.SKAN_USER_NM IN_SKAN_USER_NM,
                    TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') IN_CALL_START_DATE,
                    TO_CHAR(INCIDENT.CALL_END_DATE,'yyyy/mm/dd hh24:mi:ss') IN_CALL_END_DATE,
                    INCIDENT.CALL_DEPT_CD IN_CALL_DEPT_CD,
                    INCIDENT.CALL_DEPT_NM IN_CALL_DEPT_NM,
                    INCIDENT.CALL_USER_CD IN_CALL_USER_CD,
                    INCIDENT.CALL_USER_NM IN_CALL_USER_NM,
                    INCIDENT.CALL_TEL IN_CALL_TEL,
                    INCIDENT.CALL_MAIL IN_CALL_MAIL,
                    INCIDENT.CALL_CONTENT IN_CALL_CONTENT,
                    TO_CHAR(INCIDENT.TAIO_START_DATE,'yyyy/mm/dd hh24:mi:ss') IN_TAIO_START_DATE,
                    TO_CHAR(INCIDENT.TAIO_END_DATE,'yyyy/mm/dd hh24:mi:ss') IN_TAIO_END_DATE,
                    INCIDENT.TAIO_DEPT_CD IN_TAIO_DEPT_CD,
                    INCIDENT.TAIO_DEPT_NM IN_TAIO_DEPT_NM,
                    INCIDENT.TAIO_USER_ID IN_TAIO_USER_ID,
                    INCIDENT.TAIO_USER_NM IN_TAIO_USER_NM,
                    INCIDENT.TAIO_TEL IN_TAIO_TEL,
                    INCIDENT.TAIO_MAIL IN_TAIO_MAIL,
                    INCIDENT.TAIO_CONTENT IN_TAIO_CONTENT,
                    TO_CHAR(INCIDENT.ACT_DATE,'yyyy/mm/dd hh24:mi:ss') IN_ACT_DATE,
                    INCIDENT.ACT_TYPE_CD IN_ACT_TYPE_CD,
                    TO_CHAR(INCIDENT.ACT_START_TIME,'yyyy/mm/dd hh24:mi:ss') IN_ACT_START_TIME,
                    TO_CHAR(INCIDENT.ACT_END_TIME,'yyyy/mm/dd hh24:mi:ss') IN_ACT_END_TIME,
                    INCIDENT.ACT_DEPT_CD IN_ACT_DEPT_CD,
                    INCIDENT.ACT_DEPT_NM IN_ACT_DEPT_NM,
                    INCIDENT.ACT_USER_ID IN_ACT_USER_ID,
                    INCIDENT.ACT_USER_NM IN_ACT_USER_NM,
                    INCIDENT.ACT_TEL IN_ACT_TEL,
                    INCIDENT.ACT_MAIL IN_ACT_MAIL,
                    INCIDENT.ACT_CONTENT IN_ACT_CONTENT,
                    INCIDENT.SOTI_KBN_CD IN_SOTI_KBN_CD,
                    INCIDENT.SOTI_KBN_NM IN_SOTI_KBN_NM,
                    INCIDENT.KISYU_KBN_CD IN_KISYU_KBN_CD,
                    INCIDENT.KISYU_KBN_NM IN_KISYU_KBN_NM,
                    INCIDENT.KISYU_NM IN_KISYU_NM,
                    INCIDENT.PRODUCT_TRIGGER IN_PRODUCT_TRIGGER,
                    INCIDENT.PRODUCT_HINDO IN_PRODUCT_HINDO,
                    INCIDENT.PRODUCT_GENSYO IN_PRODUCT_GENSYO,
                    INCIDENT.PRODUCT_STATUS IN_PRODUCT_STATUS,
                    TO_CHAR(INCIDENT.INS_DATE,'yyyy/mm/dd hh24:mi:ss') IN_INS_DATE,
                    INCIDENT.INS_USER_ID IN_INS_USER_ID,
                    INCIDENT.INS_USER_NAME IN_INS_USER_NAME,
                    INCIDENT.INS_SECTION_CD IN_INS_SECTION_CD,
                    INCIDENT.INS_SECTION_NAME IN_INS_SECTION_NAME,
                    INCIDENT.UPD_USER_ID IN_UPD_USER_ID,
                    INCIDENT.UPD_USER_NAME IN_UPD_USER_NAME,
                    INCIDENT.UPD_SECTION_CD IN_UPD_SECTION_CD,
                    INCIDENT.UPD_SECTION_NAME IN_UPD_SECTION_NAME,
                    TO_CHAR(INCIDENT.UPD_DATE,'yyyy/mm/dd hh24:mi:ss') IN_UPD_DATE,
                    INCIDENT.DEL_FLG
                FROM
                    IDENT_T_INCIDENT INCIDENT
                WHERE
                    INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        //機場ID
        if ($conditions['kijoId'] != null & count($conditions['kijoId']) > 0) {
            $len = count($conditions['kijoId']);
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.KIJO_ID IN (";
            $kijoId = parent::getInConditionStrByArray($conditions['kijoId'], $len);
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . $kijoId . " ) ";
        }

        //顧客名
        if ($conditions['custNm'] != null & count($conditions['custNm']) > 0) {
            $len = count($conditions['custNm']);
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_NM IN (";
            $custNm = parent::getInConditionStrByArray($conditions['custNm'], $len);
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . $custNm . " ) ";
        }

        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ORDER BY TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') DESC NULLS LAST ";

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function insert($conditions, $MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                INSERT INTO
                    IDENT_T_INCIDENT
                (
                    INCIDENT_ID,
                    INCIDENT_NO,
                    INCIDENT_STS,
                    INCIDENT_TYPE_CD,
                    PARENT_INCIDENT_NO,
                    INCIDENT_START_DATETIME,
                    INDUSTRY_TYPE_CD,
                    INFO_SOURCE,
                    INFO_PROVIDER,
                    INFO_PROVIDER_TEL,
                    MEMO,
                    KIJO_ID,
                    KIJO_NM,
                    JIGYOSYUTAI_ID,
                    JIGYOSYUTAI_NM,
                    SETUBI_ID,
                    SETUBI_NM,
                    PREF_NM,
                    DELIVERY_PJ_NO,
                    CUST_ID,
                    CUST_NM,
                    CUST_TYPE_CD,
                    CUST_TYPE_NM,
                    CUST_DEPT,
                    REQUESTER,
                    CONTACT_TEL,
                    CONTACT_FAX,
                    CONTACT_MAIL,
                    SALES_DEPT_CD,
                    SALES_DEPT_NM,
                    SALES_USER_ID,
                    SALES_USER_NM,
                    SKAN_DEPT_CD,
                    SKAN_DEPT_NM,
                    SKAN_USER_ID,
                    SKAN_USER_NM,
                    CALL_START_DATE,
                    CALL_END_DATE,
                    CALL_DEPT_CD,
                    CALL_DEPT_NM,
                    CALL_USER_CD,
                    CALL_USER_NM,
                    CALL_TEL,
                    CALL_MAIL,
                    CALL_CONTENT,
                    TAIO_START_DATE,
                    TAIO_END_DATE,
                    TAIO_DEPT_CD,
                    TAIO_DEPT_NM,
                    TAIO_USER_ID,
                    TAIO_USER_NM,
                    TAIO_TEL,
                    TAIO_MAIL,
                    TAIO_CONTENT,
                    ACT_DATE,
                    ACT_TYPE_CD,
                    ACT_START_TIME,
                    ACT_END_TIME,
                    ACT_DEPT_CD,
                    ACT_DEPT_NM,
                    ACT_USER_ID,
                    ACT_USER_NM,
                    ACT_TEL,
                    ACT_MAIL,
                    ACT_CONTENT,
                    SOTI_KBN_CD,
                    SOTI_KBN_NM,
                    KISYU_KBN_CD,
                    KISYU_KBN_NM,
                    KISYU_NM,
                    PRODUCT_TRIGGER,
                    PRODUCT_HINDO,
                    PRODUCT_GENSYO,
                    PRODUCT_STATUS,
                    INS_DATE,
                    INS_USER_ID,
                    INS_USER_NAME,
                    INS_SECTION_CD,
                    INS_SECTION_NAME,
                    DEL_FLG
                )
                 VALUES(
                    '{$conditions['incidentId']}',
                    to_char(sysdate,'yyyymm') || 'I' || '{$conditions['incidentNo']}',
                    '{$conditions['incidentStsCd']}',
                    '{$conditions['incidentTypeCd']}',
                    '{$conditions['parentIncidentNo']}',
                    to_date('{$conditions['incidentStartDateTime']}','yyyy-mm-dd hh24:mi:ss'),
                    '{$conditions['industryTypeCd']}',
                    '{$conditions['infoSource']}',
                    '{$conditions['infoProvider']}',
                    '{$conditions['infoProviderTel']}',
                    '{$conditions['memo']}',
                    '{$conditions['kijoId']}',
                    '{$conditions['kijoNm']}',
                    '{$conditions['jigyosyutaiId']}',
                    '{$conditions['jigyosyutaiNm']}',
                    '{$conditions['setubiId']}',
                    '{$conditions['setubiNm']}',
                    '{$conditions['prefNm']}',
                    '{$conditions['deliveryPjNo']}',
                    '{$conditions['custId']}',
                    '{$conditions['custNm']}',
                    '{$conditions['custTypeCd']}',
                    '{$conditions['custTypeNm']}',
                    '{$conditions['custDept']}',
                    '{$conditions['requester']}',
                    '{$conditions['contactTel']}',
                    '{$conditions['contactFax']}',
                    '{$conditions['contactMail']}',
                    '{$conditions['salesDeptCd']}',
                    '{$conditions['salesDeptNm']}',
                    '{$conditions['salesUserId']}',
                    '{$conditions['salesUserNm']}',
                    '{$conditions['skanDeptCd']}',
                    '{$conditions['skanDeptNm']}',
                    '{$conditions['skanUserId']}',
                    '{$conditions['skanUserNm']}',
                    to_date('{$conditions['callStartDate']}','yyyy-mm-dd hh24:mi:ss'),
                    to_date('{$conditions['callEndDate']}','yyyy-mm-dd hh24:mi:ss'),
                    '{$conditions['callDeptCd']}',
                    '{$conditions['callDeptNm']}',
                    '{$conditions['callUserId']}',
                    '{$conditions['callUserNm']}',
                    '{$conditions['callTel']}',
                    '{$conditions['callMail']}',
                    '{$conditions['callContent']}',
                    to_date('{$conditions['taioStartDate']}','yyyy-mm-dd hh24:mi:ss'),
                    to_date('{$conditions['taioEndDate']}','yyyy-mm-dd hh24:mi:ss'),
                    '{$conditions['taioDeptCd']}',
                    '{$conditions['taioDeptNm']}',
                    '{$conditions['taioUserId']}',
                    '{$conditions['taioUserNm']}',
                    '{$conditions['taioTel']}',
                    '{$conditions['taioMail']}',
                    '{$conditions['taioContent']}',
                    to_date('{$conditions['actDate']}','yyyy-mm-dd hh24:mi:ss'),
                    '{$conditions['actType']}',
                    to_date('{$conditions['actStartTime']}','yyyy-mm-dd hh24:mi:ss'),
                    to_date('{$conditions['actEndTime']}','yyyy-mm-dd hh24:mi:ss'),
                    '{$conditions['actDeptCd']}',
                    '{$conditions['actDeptNm']}',
                    '{$conditions['actUserId']}',
                    '{$conditions['actUserNm']}',
                    '{$conditions['actTel']}',
                    '{$conditions['actMail']}',
                    '{$conditions['actContent']}',
                    '{$conditions['sotiKbnCd']}',
                    '{$conditions['sotiKbnNm']}',
                    '{$conditions['kisyuKbnCd']}',
                    '{$conditions['kisyuKbnNm']}',
                    '{$conditions['kisyuNm']}',
                    '{$conditions['productTrigger']}',
                    '{$conditions['productHindo']}',
                    '{$conditions['productGensyo']}',
                    '{$conditions['productStatus']}',
                    SYSDATE,
                    '{$conditions['loginUserId']}',
                    '{$conditions['loginUserNm']}',
                    '{$conditions['loginSectionCd']}',
                    '{$conditions['loginSectionNm']}',
                    '0'
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
                    IDENT_T_INCIDENT
                SET
SQL_INCIDENT_INFO;

        if ($conditions['incidentNo'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INCIDENT_NO = '{$conditions['incidentNo']}',";
        }
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INCIDENT_STS = '{$conditions['incidentStsCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INCIDENT_TYPE_CD = '{$conditions['incidentTypeCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " PARENT_INCIDENT_NO = '{$conditions['parentIncidentNo']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INCIDENT_START_DATETIME = to_date('{$conditions['incidentStartDateTime']}','yyyy-mm-dd hh24:mi:ss'),";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INDUSTRY_TYPE_CD = '{$conditions['industryTypeCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INFO_SOURCE = '{$conditions['infoSource']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INFO_PROVIDER = '{$conditions['infoProvider']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INFO_PROVIDER_TEL = '{$conditions['infoProviderTel']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " MEMO = '{$conditions['memo']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " KIJO_ID = '{$conditions['kijoId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " KIJO_NM = '{$conditions['kijoNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " JIGYOSYUTAI_ID = '{$conditions['jigyosyutaiId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " JIGYOSYUTAI_NM = '{$conditions['jigyosyutaiNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SETUBI_ID = '{$conditions['setubiId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SETUBI_NM = '{$conditions['setubiNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " PREF_NM = '{$conditions['prefNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " DELIVERY_PJ_NO = '{$conditions['deliveryPjNo']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CUST_ID = '{$conditions['custId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CUST_NM = '{$conditions['custNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CUST_TYPE_CD = '{$conditions['custTypeCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CUST_TYPE_NM = '{$conditions['custTypeNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CUST_DEPT = '{$conditions['custDept']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " REQUESTER = '{$conditions['requester']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CONTACT_TEL = '{$conditions['contactTel']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CONTACT_FAX = '{$conditions['contactFax']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CONTACT_MAIL = '{$conditions['contactMail']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SALES_DEPT_CD = '{$conditions['salesDeptCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SALES_DEPT_NM = '{$conditions['salesDeptNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SALES_USER_ID = '{$conditions['salesUserId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SALES_USER_NM = '{$conditions['salesUserNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SKAN_DEPT_CD = '{$conditions['skanDeptCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SKAN_DEPT_NM = '{$conditions['skanDeptNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SKAN_USER_ID = '{$conditions['skanUserId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SKAN_USER_NM = '{$conditions['skanUserNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CALL_START_DATE = to_date('{$conditions['callStartDate']}','yyyy-mm-dd hh24:mi:ss'),";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CALL_END_DATE = to_date('{$conditions['callEndDate']}','yyyy-mm-dd hh24:mi:ss'),";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CALL_DEPT_CD = '{$conditions['callDeptCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CALL_DEPT_NM = '{$conditions['callDeptNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CALL_USER_CD = '{$conditions['callUserId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CALL_USER_NM = '{$conditions['callUserNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CALL_TEL = '{$conditions['callTel']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CALL_MAIL = '{$conditions['callMail']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " CALL_CONTENT = '{$conditions['callContent']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " TAIO_START_DATE = to_date('{$conditions['taioStartDate']}','yyyy-mm-dd hh24:mi:ss'),";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " TAIO_END_DATE = to_date('{$conditions['taioEndDate']}','yyyy-mm-dd hh24:mi:ss'),";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " TAIO_DEPT_CD = '{$conditions['taioDeptCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " TAIO_DEPT_NM = '{$conditions['taioDeptNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " TAIO_USER_ID = '{$conditions['taioUserId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " TAIO_USER_NM = '{$conditions['taioUserNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " TAIO_TEL = '{$conditions['taioTel']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " TAIO_MAIL = '{$conditions['taioMail']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " TAIO_CONTENT = '{$conditions['taioContent']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_DATE = to_date('{$conditions['actDate']}','yyyy-mm-dd hh24:mi:ss'),";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_TYPE_CD = '{$conditions['actType']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_START_TIME = to_date('{$conditions['actStartTime']}','yyyy-mm-dd hh24:mi:ss'),";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_END_TIME = to_date('{$conditions['actEndTime']}','yyyy-mm-dd hh24:mi:ss'),";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_DEPT_CD = '{$conditions['actDeptCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_DEPT_NM = '{$conditions['actDeptNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_USER_ID = '{$conditions['actUserId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_USER_NM = '{$conditions['actUserNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_TEL = '{$conditions['actTel']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_MAIL = '{$conditions['actMail']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ACT_CONTENT = '{$conditions['actContent']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SOTI_KBN_CD = '{$conditions['sotiKbnCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " SOTI_KBN_NM = '{$conditions['sotiKbnNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " KISYU_KBN_CD = '{$conditions['kisyuKbnCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " KISYU_KBN_NM = '{$conditions['kisyuKbnNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " KISYU_NM = '{$conditions['kisyuNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " PRODUCT_TRIGGER = '{$conditions['productTrigger']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " PRODUCT_HINDO = '{$conditions['productHindo']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " PRODUCT_GENSYO = '{$conditions['productGensyo']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " PRODUCT_STATUS = '{$conditions['productStatus']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " UPD_USER_ID = '{$conditions['loginUserId']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " UPD_USER_NAME = '{$conditions['loginUserNm']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " UPD_SECTION_CD = '{$conditions['loginSectionCd']}',";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " UPD_SECTION_NAME = '{$conditions['loginSectionNm']}',";

        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . "UPD_DATE = SYSDATE, DEL_FLG = '0' WHERE INCIDENT_ID = {$conditions['incidentId']}";

        try {
            $MultiExecSql->execute($SQL_INCIDENT_INFO, '');
        } catch (Exception $e) {
            print $e->getMessage();
            return SAVE_FALSE;
        }
        return SAVE_TRUE;
    }

    public function selcetInsertIncidentId() {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT
                    T_INCIDENT_SEQ.NEXTVAL
                FROM
                    DUAL
SQL_INCIDENT_INFO;

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }
    
    // インシデント番号の下3桁を発番する
    public function selcetInsertIncidentNo($conditions, $MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT
                    Lpad(INCIDENT_NUMBERING.fetchNumbering('インシデント番号', to_char(sysdate,'yyyymm') || 'I', '{$conditions['loginUserId']}'), 3, '0') INCIDENT_NO
                FROM
                    DUAL
SQL_INCIDENT_INFO;

        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }
}
