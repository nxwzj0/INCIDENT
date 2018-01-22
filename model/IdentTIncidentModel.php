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
                    INCIDENT.INCIDENT_TYPE IN_INCIDENT_TYPE,
                    INCIDENT.PARENT_INCIDENT_NO IN_PARENT_INCIDENT_NO,
                    TO_CHAR(INCIDENT.INCIDENT_START_DATETIME,'yyyy-mm-dd hh24:mi:ss') IN_INCIDENT_START_DATETIME,
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
                    INCIDENT.PREF_ID IN_PREF_ID,
                    INCIDENT.PREF_NM IN_PREF_NM,
                    INCIDENT.DELIVERY_PJ_NO IN_DELIVERY_PJ_NO,
                    INCIDENT.DELIVERY_PJ_NM IN_DELIVERY_PJ_NM,
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
                    TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy-mm-dd hh24:mi:ss') IN_CALL_START_DATE,
                    TO_CHAR(INCIDENT.CALL_END_DATE,'yyyy-mm-dd hh24:mi:ss') IN_CALL_END_DATE,
                    INCIDENT.CALL_DEPT_CD IN_CALL_DEPT_CD,
                    INCIDENT.CALL_DEPT_NM IN_CALL_DEPT_NM,
                    INCIDENT.CALL_USER_CD IN_CALL_USER_CD,
                    INCIDENT.CALL_USER_NM IN_CALL_USER_NM,
                    INCIDENT.CALL_TEL IN_CALL_TEL,
                    INCIDENT.CALL_MAIL IN_CALL_MAIL,
                    INCIDENT.CALL_CONTENT IN_CALL_CONTENT,
                    TO_CHAR(INCIDENT.TAIO_START_DATE,'yyyy-mm-dd hh24:mi:ss') IN_TAIO_START_DATE,
                    TO_CHAR(INCIDENT.TAIO_END_DATE,'yyyy-mm-dd hh24:mi:ss') IN_TAIO_END_DATE,
                    INCIDENT.TAIO_DEPT_CD IN_TAIO_DEPT_CD,
                    INCIDENT.TAIO_DEPT_NM IN_TAIO_DEPT_NM,
                    INCIDENT.TAIO_USER_ID IN_TAIO_USER_ID,
                    INCIDENT.TAIO_USER_NM IN_TAIO_USER_NM,
                    INCIDENT.TAIO_TEL IN_TAIO_TEL,
                    INCIDENT.TAIO_MAIL IN_TAIO_MAIL,
                    INCIDENT.TAIO_CONTENT IN_TAIO_CONTENT,
                    TO_CHAR(INCIDENT.ACT_DATE,'yyyy-mm-dd hh24:mi:ss') IN_ACT_DATE,
                    INCIDENT.ACT_TYPE IN_ACT_TYPE,
                    TO_CHAR(INCIDENT.ACT_START_TIME,'yyyy-mm-dd hh24:mi:ss') IN_ACT_START_TIME,
                    TO_CHAR(INCIDENT.ACT_END_TIME,'yyyy-mm-dd hh24:mi:ss') IN_ACT_END_TIME,
                    INCIDENT.ACT_DEPT_CD IN_ACT_DEPT_CD,
                    INCIDENT.ACT_DEPT_NM IN_ACT_DEPT_NM,
                    INCIDENT.ACT_USER_ID IN_ACT_USER_ID,
                    INCIDENT.ACT_USER_NM IN_ACT_USER_NM,
                    INCIDENT.ACT_TEL IN_ACT_TEL,
                    INCIDENT.ACT_MAIL IN_ACT_MAIL,
                    INCIDENT.ACT_CONTENT IN_ACT_CONTENT,
                    INCIDENT.PRODUCT_TYPE IN_PRODUCT_TYPE,
                    INCIDENT.PRODUCT_TRIGGER IN_PRODUCT_TRIGGER,
                    INCIDENT.PRODUCT_HINDO IN_PRODUCT_HINDO,
                    INCIDENT.PRODUCT_GENSYO IN_PRODUCT_GENSYO,
                    INCIDENT.PRODUCT_STATUS IN_PRODUCT_STATUS,
                    TO_CHAR(INCIDENT.INS_DATE,'yyyy-mm-dd hh24:mi:ss') IN_INS_DATE,
                    INCIDENT.INS_USER_ID IN_INS_USER_ID,
                    INCIDENT.INS_USER_NAME IN_INS_USER_NAME,
                    INCIDENT.INS_SECTION_CD IN_INS_SECTION_CD,
                    INCIDENT.INS_SECTION_NAME IN_INS_SECTION_NAME,
                    INCIDENT.UPD_USER_ID IN_UPD_USER_ID,
                    INCIDENT.UPD_USER_NAME IN_UPD_USER_NAME,
                    INCIDENT.UPD_SECTION_CD IN_UPD_SECTION_CD,
                    INCIDENT.UPD_SECTION_NAME IN_UPD_SECTION_NAME,
                    TO_CHAR(INCIDENT.UPD_DATE,'yyyy-mm-dd hh24:mi:ss') IN_UPD_DATE,
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
                INCIDENT.INCIDENT_TYPE IN_INCIDENT_TYPE,
                INCIDENT.PARENT_INCIDENT_NO IN_PARENT_INCIDENT_NO,
                TO_CHAR(INCIDENT.INCIDENT_START_DATETIME,'yyyy-mm-dd hh24:mi:ss') IN_INCIDENT_START_DATETIME,
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
                INCIDENT.PREF_ID IN_PREF_ID,
                INCIDENT.PREF_NM IN_PREF_NM,
                INCIDENT.DELIVERY_PJ_NO IN_DELIVERY_PJ_NO,
                INCIDENT.DELIVERY_PJ_NM IN_DELIVERY_PJ_NM,
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
                TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy-mm-dd hh24:mi:ss') IN_CALL_START_DATE,
                TO_CHAR(INCIDENT.CALL_END_DATE,'yyyy-mm-dd hh24:mi:ss') IN_CALL_END_DATE,
                INCIDENT.CALL_DEPT_CD IN_CALL_DEPT_CD,
                INCIDENT.CALL_DEPT_NM IN_CALL_DEPT_NM,
                INCIDENT.CALL_USER_CD IN_CALL_USER_CD,
                INCIDENT.CALL_USER_NM IN_CALL_USER_NM,
                INCIDENT.CALL_TEL IN_CALL_TEL,
                INCIDENT.CALL_MAIL IN_CALL_MAIL,
                INCIDENT.CALL_CONTENT IN_CALL_CONTENT,
                TO_CHAR(INCIDENT.TAIO_START_DATE,'yyyy-mm-dd hh24:mi:ss') IN_TAIO_START_DATE,
                TO_CHAR(INCIDENT.TAIO_END_DATE,'yyyy-mm-dd hh24:mi:ss') IN_TAIO_END_DATE,
                INCIDENT.TAIO_DEPT_CD IN_TAIO_DEPT_CD,
                INCIDENT.TAIO_DEPT_NM IN_TAIO_DEPT_NM,
                INCIDENT.TAIO_USER_ID IN_TAIO_USER_ID,
                INCIDENT.TAIO_USER_NM IN_TAIO_USER_NM,
                INCIDENT.TAIO_TEL IN_TAIO_TEL,
                INCIDENT.TAIO_MAIL IN_TAIO_MAIL,
                INCIDENT.TAIO_CONTENT IN_TAIO_CONTENT,
                TO_CHAR(INCIDENT.ACT_DATE,'yyyy-mm-dd hh24:mi:ss') IN_ACT_DATE,
                INCIDENT.ACT_TYPE IN_ACT_TYPE,
                TO_CHAR(INCIDENT.ACT_START_TIME,'yyyy-mm-dd hh24:mi:ss') IN_ACT_START_TIME,
                TO_CHAR(INCIDENT.ACT_END_TIME,'yyyy-mm-dd hh24:mi:ss') IN_ACT_END_TIME,
                INCIDENT.ACT_DEPT_CD IN_ACT_DEPT_CD,
                INCIDENT.ACT_DEPT_NM IN_ACT_DEPT_NM,
                INCIDENT.ACT_USER_ID IN_ACT_USER_ID,
                INCIDENT.ACT_USER_NM IN_ACT_USER_NM,
                INCIDENT.ACT_TEL IN_ACT_TEL,
                INCIDENT.ACT_MAIL IN_ACT_MAIL,
                INCIDENT.ACT_CONTENT IN_ACT_CONTENT,
                INCIDENT.PRODUCT_TYPE IN_PRODUCT_TYPE,
                INCIDENT.PRODUCT_TRIGGER IN_PRODUCT_TRIGGER,
                INCIDENT.PRODUCT_HINDO IN_PRODUCT_HINDO,
                INCIDENT.PRODUCT_GENSYO IN_PRODUCT_GENSYO,
                INCIDENT.PRODUCT_STATUS IN_PRODUCT_STATUS,
                TO_CHAR(INCIDENT.INS_DATE,'yyyy-mm-dd hh24:mi:ss') IN_INS_DATE,
                INCIDENT.INS_USER_ID IN_INS_USER_ID,
                INCIDENT.INS_USER_NAME IN_INS_USER_NAME,
                INCIDENT.INS_SECTION_CD IN_INS_SECTION_CD,
                INCIDENT.INS_SECTION_NAME IN_INS_SECTION_NAME,
                INCIDENT.UPD_USER_ID IN_UPD_USER_ID,
                INCIDENT.UPD_USER_NAME IN_UPD_USER_NAME,
                INCIDENT.UPD_SECTION_CD IN_UPD_SECTION_CD,
                INCIDENT.UPD_SECTION_NAME IN_UPD_SECTION_NAME,
                TO_CHAR(INCIDENT.UPD_DATE,'yyyy-mm-dd hh24:mi:ss') IN_UPD_DATE,
                INCIDENT.DEL_FLG
            FROM
                IDENT_T_INCIDENT INCIDENT
            WHERE
                INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        // 機場ID
        if ($conditions['kijoId'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." AND INCIDENT.KIJO_ID = "."'".$conditions['kijoId']."'";
        }

        // 顧客名
        if ($conditions['custNm'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." AND INCIDENT.CUST_NM = "."'".$conditions['custNm']."'";
        }

        // 除外するインシデントID
        if ($conditions['excludeIncidentId'] != null) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." AND INCIDENT.INCIDENT_ID != "."'".$conditions['excludeIncidentId']."'";
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
                    INCIDENT.INCIDENT_TYPE IN_INCIDENT_TYPE,
                    INCIDENT.PARENT_INCIDENT_NO IN_PARENT_INCIDENT_NO,
                    TO_CHAR(INCIDENT.INCIDENT_START_DATETIME,'yyyy-mm-dd hh24:mi:ss') IN_INCIDENT_START_DATETIME,
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
                    INCIDENT.PREF_ID IN_PREF_ID,
                    INCIDENT.PREF_NM IN_PREF_NM,
                    INCIDENT.DELIVERY_PJ_NO IN_DELIVERY_PJ_NO,
                    INCIDENT.DELIVERY_PJ_NM IN_DELIVERY_PJ_NM,
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
                    TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy-mm-dd hh24:mi:ss') IN_CALL_START_DATE,
                    TO_CHAR(INCIDENT.CALL_END_DATE,'yyyy-mm-dd hh24:mi:ss') IN_CALL_END_DATE,
                    INCIDENT.CALL_DEPT_CD IN_CALL_DEPT_CD,
                    INCIDENT.CALL_DEPT_NM IN_CALL_DEPT_NM,
                    INCIDENT.CALL_USER_CD IN_CALL_USER_CD,
                    INCIDENT.CALL_USER_NM IN_CALL_USER_NM,
                    INCIDENT.CALL_TEL IN_CALL_TEL,
                    INCIDENT.CALL_MAIL IN_CALL_MAIL,
                    INCIDENT.CALL_CONTENT IN_CALL_CONTENT,
                    TO_CHAR(INCIDENT.TAIO_START_DATE,'yyyy-mm-dd hh24:mi:ss') IN_TAIO_START_DATE,
                    TO_CHAR(INCIDENT.TAIO_END_DATE,'yyyy-mm-dd hh24:mi:ss') IN_TAIO_END_DATE,
                    INCIDENT.TAIO_DEPT_CD IN_TAIO_DEPT_CD,
                    INCIDENT.TAIO_DEPT_NM IN_TAIO_DEPT_NM,
                    INCIDENT.TAIO_USER_ID IN_TAIO_USER_ID,
                    INCIDENT.TAIO_USER_NM IN_TAIO_USER_NM,
                    INCIDENT.TAIO_TEL IN_TAIO_TEL,
                    INCIDENT.TAIO_MAIL IN_TAIO_MAIL,
                    INCIDENT.TAIO_CONTENT IN_TAIO_CONTENT,
                    TO_CHAR(INCIDENT.ACT_DATE,'yyyy-mm-dd hh24:mi:ss') IN_ACT_DATE,
                    INCIDENT.ACT_TYPE IN_ACT_TYPE,
                    TO_CHAR(INCIDENT.ACT_START_TIME,'yyyy-mm-dd hh24:mi:ss') IN_ACT_START_TIME,
                    TO_CHAR(INCIDENT.ACT_END_TIME,'yyyy-mm-dd hh24:mi:ss') IN_ACT_END_TIME,
                    INCIDENT.ACT_DEPT_CD IN_ACT_DEPT_CD,
                    INCIDENT.ACT_DEPT_NM IN_ACT_DEPT_NM,
                    INCIDENT.ACT_USER_ID IN_ACT_USER_ID,
                    INCIDENT.ACT_USER_NM IN_ACT_USER_NM,
                    INCIDENT.ACT_TEL IN_ACT_TEL,
                    INCIDENT.ACT_MAIL IN_ACT_MAIL,
                    INCIDENT.ACT_CONTENT IN_ACT_CONTENT,
                    INCIDENT.PRODUCT_TYPE IN_PRODUCT_TYPE,
                    INCIDENT.PRODUCT_TRIGGER IN_PRODUCT_TRIGGER,
                    INCIDENT.PRODUCT_HINDO IN_PRODUCT_HINDO,
                    INCIDENT.PRODUCT_GENSYO IN_PRODUCT_GENSYO,
                    INCIDENT.PRODUCT_STATUS IN_PRODUCT_STATUS,
                    TO_CHAR(INCIDENT.INS_DATE,'yyyy-mm-dd hh24:mi:ss') IN_INS_DATE,
                    INCIDENT.INS_USER_ID IN_INS_USER_ID,
                    INCIDENT.INS_USER_NAME IN_INS_USER_NAME,
                    INCIDENT.INS_SECTION_CD IN_INS_SECTION_CD,
                    INCIDENT.INS_SECTION_NAME IN_INS_SECTION_NAME,
                    INCIDENT.UPD_USER_ID IN_UPD_USER_ID,
                    INCIDENT.UPD_USER_NAME IN_UPD_USER_NAME,
                    INCIDENT.UPD_SECTION_CD IN_UPD_SECTION_CD,
                    INCIDENT.UPD_SECTION_NAME IN_UPD_SECTION_NAME,
                    TO_CHAR(INCIDENT.UPD_DATE,'yyyy-mm-dd hh24:mi:ss') IN_UPD_DATE,
                    INCIDENT.DEL_FLG
                FROM
                    IDENT_T_INCIDENT INCIDENT
                WHERE
                    INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;

        //機場ID
        if($conditions['kijoId'] !=null & count($conditions['kijoId']) > 0){
            $len = count($conditions['kijoId']);
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.KIJO_ID IN (";
            $kijoId = parent::getInConditionStrByArray($conditions['kijoId'],$len);
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . $kijoId . " ) ";
        }

        //顧客名
        if($conditions['custNm'] !=null & count($conditions['custNm']) > 0){
            $len = count($conditions['custNm']);
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_NM IN (";
            $custNm = parent::getInConditionStrByArray($conditions['custNm'],$len);
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . $custNm . " ) ";
        }
        
        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function insert($conditions,$MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                INSERT INTO
                    IDENT_T_INCIDENT
                (
                    INCIDENT_ID,
                    INCIDENT_NO,
                    INCIDENT_STS,
                    INCIDENT_TYPE,
                    PARENT_INCIDENT_NO,
                    INCIDENT_START_DATETIME,
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
                    PREF_ID,
                    PREF_NM,
                    DELIVERY_PJ_NO,
                    DELIVERY_PJ_NM,
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
                    ACT_TYPE,
                    ACT_START_TIME,
                    ACT_END_TIME,
                    ACT_DEPT_CD,
                    ACT_DEPT_NM,
                    ACT_USER_ID,
                    ACT_USER_NM,
                    ACT_TEL,
                    ACT_MAIL,
                    ACT_CONTENT,
                    PRODUCT_TYPE,
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
                    '{$conditions['incidentId']}',
                    '{$conditions['incidentStsCd']}',
                    '{$conditions['incidentTypeCd']}',
                    '{$conditions['parentIncidentNo']}',
                    to_date('{$conditions['incidentStartDateTime']}','yyyy-mm-dd hh24:mi:ss'),
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
                    '{$conditions['prefId']}',
                    '{$conditions['prefNm']}',
                    '{$conditions['deliveryPjNo']}',
                    '{$conditions['deliveryPjNm']}',
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
                    '{$conditions['productType']}',
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

        try{
            $MultiExecSql->execute($SQL_INCIDENT_INFO,"");
        }catch (Exception $e){
            print $e->getMessage();
            return SAVE_FALSE;
        }

        return SAVE_TRUE;
    }
    
    public function update($conditions,$MultiExecSql) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                UPDATE
                    IDENT_T_INCIDENT
                SET
SQL_INCIDENT_INFO;

        if($conditions['incidentNo'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." INCIDENT_NO = '{$conditions['incidentNo']}',";
        }
        if($conditions['incidentStsCd'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." INCIDENT_STS = '{$conditions['incidentStsCd']}',";
        }
        if($conditions['incidentTypeCd'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." INCIDENT_TYPE = '{$conditions['incidentTypeCd']}',";
        }
        if($conditions['parentIncidentNo'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." PARENT_INCIDENT_NO = '{$conditions['parentIncidentNo']}',";
        }
        if($conditions['incidentStartDateTime'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." INCIDENT_START_DATETIME = to_date('{$conditions['incidentStartDateTime']}','yyyy-mm-dd hh24:mi:ss'),";
        }
        if($conditions['infoSource'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." INFO_SOURCE = '{$conditions['infoSource']}',";
        }
        if($conditions['infoProvider'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." INFO_PROVIDER = '{$conditions['infoProvider']}',";
        }
        if($conditions['infoProviderTel'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." INFO_PROVIDER_TEL = '{$conditions['infoProviderTel']}',";
        }
        if($conditions['memo'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." MEMO = '{$conditions['memo']}',";
        }
        if($conditions['kijoId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." KIJO_ID = '{$conditions['kijoId']}',";
        }
        if($conditions['kijoNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." KIJO_NM = '{$conditions['kijoNm']}',";
        }
        if($conditions['jigyosyutaiId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." JIGYOSYUTAI_ID = '{$conditions['jigyosyutaiId']}',";
        }
        if($conditions['jigyosyutaiNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." JIGYOSYUTAI_NM = '{$conditions['jigyosyutaiNm']}',";
        }
        if($conditions['setubiId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SETUBI_ID = '{$conditions['setubiId']}',";
        }
        if($conditions['setubiNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SETUBI_NM = '{$conditions['setubiNm']}',";
        }
        if($conditions['prefId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." PREF_ID = '{$conditions['prefId']}',";
        }
        if($conditions['prefNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." PREF_NM = '{$conditions['prefNm']}',";
        }
        if($conditions['deliveryPjNo'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." DELIVERY_PJ_NO = '{$conditions['deliveryPjNo']}',";
        }
        if($conditions['deliveryPjNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." DELIVERY_PJ_NM = '{$conditions['deliveryPjNm']}',";
        }
        if($conditions['custId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CUST_ID = '{$conditions['custId']}',";
        }
        if($conditions['custNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CUST_NM = '{$conditions['custNm']}',";
        }
        if($conditions['custTypeCd'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CUST_TYPE_CD = '{$conditions['custTypeCd']}',";
        }
        if($conditions['custTypeNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CUST_TYPE_NM = '{$conditions['custTypeNm']}',";
        }
        if($conditions['custDept'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CUST_DEPT = '{$conditions['custDept']}',";
        }
        if($conditions['requester'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." REQUESTER = '{$conditions['requester']}',";
        }
        if($conditions['contactTel'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CONTACT_TEL = '{$conditions['contactTel']}',";
        }
        if($conditions['contactFax'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CONTACT_FAX = '{$conditions['contactFax']}',";
        }
        if($conditions['contactMail'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CONTACT_MAIL = '{$conditions['contactMail']}',";
        }
        if($conditions['salesDeptCd'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SALES_DEPT_CD = '{$conditions['salesDeptCd']}',";
        }
        if($conditions['salesDeptNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SALES_DEPT_NM = '{$conditions['salesDeptNm']}',";
        }
        if($conditions['salesUserId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SALES_USER_ID = '{$conditions['salesUserId']}',";
        }
        if($conditions['salesUserNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SALES_USER_NM = '{$conditions['salesUserNm']}',";
        }
        if($conditions['skanDeptCd'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SKAN_DEPT_CD = '{$conditions['skanDeptCd']}',";
        }
        if($conditions['skanDeptNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SKAN_DEPT_NM = '{$conditions['skanDeptNm']}',";
        }
        if($conditions['skanUserId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SKAN_USER_ID = '{$conditions['skanUserId']}',";
        }
        if($conditions['skanUserNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." SKAN_USER_NM = '{$conditions['skanUserNm']}',";
        }
        if($conditions['callStartDate'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CALL_START_DATE = to_date('{$conditions['callStartDate']}','yyyy-mm-dd hh24:mi:ss'),";
        }
        if($conditions['callEndDate'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CALL_END_DATE = to_date('{$conditions['callEndDate']}','yyyy-mm-dd hh24:mi:ss'),";
        }
        if($conditions['callDeptCd'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CALL_DEPT_CD = '{$conditions['callDeptCd']}',";
        }
        if($conditions['callDeptNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CALL_DEPT_NM = '{$conditions['callDeptNm']}',";
        }
        if($conditions['callUserId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CALL_USER_CD = '{$conditions['callUserId']}',";
        }
        if($conditions['callUserNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CALL_USER_NM = '{$conditions['callUserNm']}',";
        }
        if($conditions['callTel'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CALL_TEL = '{$conditions['callTel']}',";
        }
        if($conditions['callMail'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CALL_MAIL = '{$conditions['callMail']}',";
        }
        if($conditions['callContent'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." CALL_CONTENT = '{$conditions['callContent']}',";
        }
        if($conditions['taioStartDate'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." TAIO_START_DATE = to_date('{$conditions['taioStartDate']}','yyyy-mm-dd hh24:mi:ss'),";
        }
        if($conditions['taioEndDate'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." TAIO_END_DATE = to_date('{$conditions['taioEndDate']}','yyyy-mm-dd hh24:mi:ss'),";
        }
        if($conditions['taioDeptCd'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." TAIO_DEPT_CD = '{$conditions['taioDeptCd']}',";
        }
        if($conditions['taioDeptNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." TAIO_DEPT_NM = '{$conditions['taioDeptNm']}',";
        }
        if($conditions['taioUserId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." TAIO_USER_ID = '{$conditions['taioUserId']}',";
        }
        if($conditions['taioUserNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." TAIO_USER_NM = '{$conditions['taioUserNm']}',";
        }
        if($conditions['taioTel'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." TAIO_TEL = '{$conditions['taioTel']}',";
        }
        if($conditions['taioMail'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." TAIO_MAIL = '{$conditions['taioMail']}',";
        }
        if($conditions['taioContent'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." TAIO_CONTENT = '{$conditions['taioContent']}',";
        }
        if($conditions['actDate'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_DATE = to_date('{$conditions['actDate']}','yyyy-mm-dd hh24:mi:ss'),";
        }
        if($conditions['actType'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_TYPE = '{$conditions['actType']}',";
        }
        if($conditions['actStartTime'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_START_TIME = to_date('{$conditions['actStartTime']}','yyyy-mm-dd hh24:mi:ss'),";
        }
        if($conditions['actEndTime'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_END_TIME = to_date('{$conditions['actEndTime']}','yyyy-mm-dd hh24:mi:ss'),";
        }
        if($conditions['actDeptCd'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_DEPT_CD = '{$conditions['actDeptCd']}',";
        }
        if($conditions['actDeptNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_DEPT_NM = '{$conditions['actDeptNm']}',";
        }
        if($conditions['actUserId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_USER_ID = '{$conditions['actUserId']}',";
        }
        if($conditions['actUserNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_USER_NM = '{$conditions['actUserNm']}',";
        }
        if($conditions['actTel'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_TEL = '{$conditions['actTel']}',";
        }
        if($conditions['actMail'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_MAIL = '{$conditions['actMail']}',";
        }
        if($conditions['actContent'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." ACT_CONTENT = '{$conditions['actContent']}',";
        }
        if($conditions['productType'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." PRODUCT_TYPE = '{$conditions['productType']}',";
        }
        if($conditions['productTrigger'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." PRODUCT_TRIGGER = '{$conditions['productTrigger']}',";
        }
        if($conditions['productHindo'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." PRODUCT_HINDO = '{$conditions['productHindo']}',";
        }
        if($conditions['productGensyo'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." PRODUCT_GENSYO = '{$conditions['productGensyo']}',";
        }
        if($conditions['productStatus'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." PRODUCT_STATUS = '{$conditions['productStatus']}',";
        }
        if($conditions['loginUserId'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." UPD_USER_ID = '{$conditions['loginUserId']}',";
        }
        if($conditions['loginUserNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." UPD_USER_NAME = '{$conditions['loginUserNm']}',";
        }
        if($conditions['loginSectionCd'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." UPD_SECTION_CD = '{$conditions['loginSectionCd']}',";
        }
        if($conditions['loginSectionNm'] != null){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO." UPD_SECTION_NAME = '{$conditions['loginSectionNm']}',";
        }
        
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO."UPD_DATE = SYSDATE, DEL_FLG = '0' WHERE INCIDENT_ID = {$conditions['incidentId']}";

        try{
            $MultiExecSql->execute($SQL_INCIDENT_INFO, '');
        }catch (Exception $e){
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
    
// ::: 2018.01.22 [#23] 入力補助モーダル　インシデント Add Start newtouch
    public function getIncidentListCommon($conditions) {
        $format = "yyyy/mm/dd hh24:mi:ss";

        $SQL_USER_INFO = <<< SQL_USER_INFO
                SELECT 
                    T1.INCIDENT_ID
                    ,T1.INCIDENT_NO
                    ,T1.CALL_CONTENT 
                    ,TO_CHAR(T1.CALL_START_DATE,'$format') AS CALL_DATE
                    ,T1.INCIDENT_TYPE
                    ,T1.INCIDENT_STS
                FROM
                    IDENT_T_INCIDENT T1 
                WHERE
                    NVL(DEL_FLG,'0') = '0' 
SQL_USER_INFO;

        // インシデント番号
        if ($conditions['incidentNo'] != NULL) {
            $SQL_USER_INFO = $SQL_USER_INFO . " AND T1.INCIDENT_NO LIKE " . "'%" . $conditions['incidentNo'] . "%' ";
        }

        // 受付内容
        if ($conditions['callContent'] != NULL) {
            $SQL_USER_INFO = $SQL_USER_INFO . " AND T1.CALL_CONTENT LIKE " . "'%" . $conditions['callContent'] . "%' ";
        }

        // 受付開始時刻
        if ($conditions['callStartDateFrom'] != NULL) {
            $SQL_USER_INFO = $SQL_USER_INFO . " AND T1.CALL_START_DATE >= to_date( '" . $conditions['callStartDateFrom'] . "'||' 00:00:00','$format')";
        }

        // 受付終了時刻
        if ($conditions['callStartDateTo'] != NULL) {
            $SQL_USER_INFO = $SQL_USER_INFO . " AND T1.CALL_START_DATE <= to_date('" . $conditions['callStartDateTo'] . "'||' 23:59:59','$format')";
        }

        // インシデント分類
        if ($conditions['incidentType'] != NULL) {
            $SQL_USER_INFO = $SQL_USER_INFO . " AND T1.INCIDENT_TYPE IN(" . $conditions['incidentType'] . ")";
        }

        // インシデントステータス
        if ($conditions['incidentStatus'] != NULL) {
            $SQL_USER_INFO = $SQL_USER_INFO . " AND T1.INCIDENT_STS IN(" . $conditions['incidentStatus'] . ")";
        }

        $sqlResult = array();
        $MultiExecSql = new MultiExecSql();
        $MultiExecSql->getResultData($SQL_USER_INFO, $sqlResult);
        return $sqlResult;
    }

    /**
     * Key-Valueデータ
     * @param type $name
     * @return string
     */
    public function findKeyValue($name) {
        $result = array();
        switch ($name) {
            case "INCIDENT_TYPE":
                $result = array("1,障害", "2,事故", "3,問合せ", "4,クレーム", "5,情報", "6,その他");
                break;
            case "INCIDENT_STS":
                $result = array("1,受付済", "2,対応入力済", "3,処置入力済");
                break;
            default :
                return null;
        }
        return $result;
    }

    /**
     * 戻り値の名前に応じて
     * @param unknown $name
     * @param unknown $key
     * @return Ambigous <>|NULL
     */
    function findValueByNameAndKey($name, $key) {
        $array = $this->findKeyValue($name);
        if ($array != null) {
            foreach ($array as $value) {
                $val = explode(",", $value);
                if ($val[0] == $key) {
                    return $val[1];
                }
            }
        }
        return null;
    }
// ::: 2018.01.22 [#23] 入力補助モーダル　インシデント Add End   newtouch

}
