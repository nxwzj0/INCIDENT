<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：OIdentTIncidentModel
//	作成日付・作成者：2017.11.01 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once("./env.inc");

require_once("./model/CommonModel.php");

class OIdentTIncidentModel extends CommonModel {

    public function findIncidentWithRel($incidentId){
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
                    INCIDENT.DEL_FLG,
                    TO_CHAR(INCIDENT.UPD_DATE,'yyyy-mm-dd hh24:mi:ss') IN_UPD_DATE,
                    PJ.PJ_NO PJ_PJ_NO,
                    PJ.INCIDENT_ID PJ_INCIDENT_ID,
                    PJ.PJ_NM PJ_PJ_NM,
                    PJ.MAIN_KIJO_ID PJ_MAIN_KIJO_ID,
                    PJ.MAIN_KIJO_NM PJ_MAIN_KIJO_NM,
                    PJ.PJ_SKAN_USER_ID PJ_PJ_SKAN_USER_ID,
                    PJ.PJ_SKAN_USER_NM PJ_PJ_SKAN_USER_NM,
                    PJ.PM_ID PJ_PM_ID,
                    PJ.PM_NM PJ_PM_NM,
                    PJ.PREF_ID PJ_PREF_ID,
                    PJ.PREF_NM PJ_PREF_NM,
                    MR2.MKB_ID MR2_MKB_ID,
                    MR2.INCIDENT_ID MR2_INCIDENT_ID,
                    MR2.SUBJECT_NM MR2_SUBJECT_NM,
                    MR2.IRAIMOTO_TANTO_NM MR2_IRAIMOTO_TANTO_NM,
                    TO_CHAR(MR2.MAKE_DATE,'yyyy-mm-dd hh24:mi:ss') MR2_MAKE_DATE,
                    MR2.WORK_TANTO_ID MR2_WORK_TANTO_ID,
                    MR2.WORK_TANTO_NM MR2_WORK_TANTO_NM,
                    JIKO.JIKO_ID JIKO_JIKO_ID,
                    JIKO.INCIDENT_ID JIKO_INCIDENT_ID,
                    JIKO.INCIDENT_ID JIKO_INCIDENT_ID,
                    JIKO.LAST_REPORT_FLG JIKO_LAST_REPORT_FLG,
                    JIKO.GAIYO JIKO_GAIYO,
                    JIKO.KIJO_ID JIKO_KIJO_ID,
                    JIKO.KIJO_NM JIKO_KIJO_NM,
                    JIKO.JIKO_TYPE_CD JIKO_JIKO_TYPE_CD,
                    JIKO.JIKO_TYPE_NM JIKO_JIKO_TYPE_NM,
                    JIKO.CUST_ID JIKO_CUST_ID,
                    JIKO.CUST_NM JIKO_CUST_NM,
                    TO_CHAR(JIKO.HAKKO_DAY,'yyyy-mm-dd hh24:mi:ss') JIKO_HAKKO_DAY,
                    JIKO.HAKKOMOTO_SEC_CD JIKO_HAKKOMOTO_SEC_CD,
                    JIKO.HAKKOMOTO_SEC_NM JIKO_HAKKOMOTO_SEC_NM,
                    HIYO.HIYO_ID HIYO_HIYO_ID,
                    HIYO.INCIDENT_ID HIYO_INCIDENT_ID,
                    HIYO.KUBUN_NM HIYO_KUBUN_NM,
                    HIYO.SUBJECT_NM HIYO_SUBJECT_NM,
                    HIYO.STS_NM HIYO_STS_NM,
                    HIYO.KESSAI_NO HIYO_KESSAI_NO,
                    HIYO.GAISAN_AMOUNT HIYO_GAISAN_AMOUNT
                FROM
                    IDENT_T_INCIDENT INCIDENT
                LEFT OUTER JOIN
                    IDENT_T_PJ PJ ON INCIDENT.INCIDENT_ID = PJ.INCIDENT_ID AND PJ.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_MR2 MR2 ON INCIDENT.INCIDENT_ID = MR2.INCIDENT_ID AND MR2.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_JIKO JIKO ON INCIDENT.INCIDENT_ID = JIKO.INCIDENT_ID AND JIKO.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_HIYO HIYO ON INCIDENT.INCIDENT_ID = HIYO.INCIDENT_ID AND HIYO.DEL_FLG = '0'
                WHERE
                    INCIDENT.DEL_FLG = '0'
                AND
                    INCIDENT.INCIDENT_ID = '$incidentId'
SQL_INCIDENT_INFO;
        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    public function getIncidentWithRel($conditions){
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT DISTINCT
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
                    INCIDENT.DEL_FLG,
                    PJ.PJ_NO PJ_PJ_NO,
                    PJ.INCIDENT_ID PJ_INCIDENT_ID,
                    PJ.PJ_NM PJ_PJ_NM,
                    PJ.MAIN_KIJO_ID PJ_MAIN_KIJO_ID,
                    PJ.MAIN_KIJO_NM PJ_MAIN_KIJO_NM,
                    PJ.PJ_SKAN_USER_ID PJ_PJ_SKAN_USER_ID,
                    PJ.PJ_SKAN_USER_NM PJ_PJ_SKAN_USER_NM,
                    PJ.PM_ID PJ_PM_ID,
                    PJ.PM_NM PJ_PM_NM,
                    PJ.PREF_ID PJ_PREF_ID,
                    PJ.PREF_NM PJ_PREF_NM,
                    MR2.MKB_ID MR2_MKB_ID,
                    MR2.INCIDENT_ID MR2_INCIDENT_ID,
                    MR2.SUBJECT_NM MR2_SUBJECT_NM,
                    MR2.IRAIMOTO_TANTO_NM MR2_IRAIMOTO_TANTO_NM,
                    TO_CHAR(MR2.MAKE_DATE,'yyyy-mm-dd hh24:mi:ss') MR2_MAKE_DATE,
                    MR2.WORK_TANTO_ID MR2_WORK_TANTO_ID,
                    MR2.WORK_TANTO_NM MR2_WORK_TANTO_NM,
                    JIKO.JIKO_ID JIKO_JIKO_ID,
                    JIKO.INCIDENT_ID JIKO_INCIDENT_ID,
                    JIKO.INCIDENT_ID JIKO_INCIDENT_ID,
                    JIKO.LAST_REPORT_FLG JIKO_LAST_REPORT_FLG,
                    JIKO.GAIYO JIKO_GAIYO,
                    JIKO.KIJO_ID JIKO_KIJO_ID,
                    JIKO.KIJO_NM JIKO_KIJO_NM,
                    JIKO.JIKO_TYPE_CD JIKO_JIKO_TYPE_CD,
                    JIKO.JIKO_TYPE_NM JIKO_JIKO_TYPE_NM,
                    JIKO.CUST_ID JIKO_CUST_ID,
                    JIKO.CUST_NM JIKO_CUST_NM,
                    TO_CHAR(JIKO.HAKKO_DAY,'yyyy-mm-dd hh24:mi:ss') JIKO_HAKKO_DAY,
                    JIKO.HAKKOMOTO_SEC_CD JIKO_HAKKOMOTO_SEC_CD,
                    JIKO.HAKKOMOTO_SEC_NM JIKO_HAKKOMOTO_SEC_NM,
                    HIYO.HIYO_ID HIYO_HIYO_ID,
                    HIYO.INCIDENT_ID HIYO_INCIDENT_ID,
                    HIYO.KUBUN_NM HIYO_KUBUN_NM,
                    HIYO.SUBJECT_NM HIYO_SUBJECT_NM,
                    HIYO.STS_NM HIYO_STS_NM,
                    HIYO.KESSAI_NO HIYO_KESSAI_NO,
                    HIYO.GAISAN_AMOUNT HIYO_GAISAN_AMOUNT
                FROM
                    IDENT_T_INCIDENT INCIDENT
                LEFT OUTER JOIN
                    IDENT_T_INCIDENT_RELATE_USER RUSER ON INCIDENT.INCIDENT_ID = RUSER.INCIDENT_ID AND RUSER.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_PJ PJ ON INCIDENT.INCIDENT_ID = PJ.INCIDENT_ID AND PJ.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_MR2 MR2 ON INCIDENT.INCIDENT_ID = MR2.INCIDENT_ID AND MR2.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_JIKO JIKO ON INCIDENT.INCIDENT_ID = JIKO.INCIDENT_ID AND JIKO.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_HIYO HIYO ON INCIDENT.INCIDENT_ID = HIYO.INCIDENT_ID AND HIYO.DEL_FLG = '0'
                WHERE
                    INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;
        if ($conditions['incidentId'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_ID = " . "'" . $conditions['incidentId'] . "' ";
        }
        if ($conditions['incidentNo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_NO LIKE " . "'%" . $conditions['incidentNo'] . "%' ";
        }
        if ($conditions['parentIncidentNo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PARENT_INCIDENT_NO LIKE " . "'%" . $conditions['parentIncidentNo'] . "%' ";
        }
        if ($conditions['incidentStartDateTimeFrom'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['incidentStartDateTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.INCIDENT_START_DATETIME ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['incidentStartDateTimeFrom'] . "'||' 00:00:00','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.INCIDENT_START_DATETIME ";
            // 2018.01.20 Newtouch更新 end
        }
        if ($conditions['incidentStartDateTimeTo'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_START_DATETIME <= " . " TO_DATE('" . $conditions['incidentStartDateTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_START_DATETIME <= " . " TO_DATE('" . $conditions['incidentStartDateTimeTo'] . "'||' 23:59:59','yyyy-mm-dd hh24:mi:ss') ";
            // 2018.01.20 Newtouch更新 end
        }
        if ($conditions['infoSource'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INFO_SOURCE LIKE " . "'%" . $conditions['infoSource'] . "%' ";
        }
        if ($conditions['infoProvider'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INFO_PROVIDER LIKE " . "'%" . $conditions['infoProvider'] . "%' ";
        }
        if ($conditions['infoProviderTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INFO_PROVIDER_TEL LIKE " . "'%" . $conditions['infoProviderTel'] . "%' ";
        }
        if ($conditions['relateNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND RUSER.RELATE_USER_NM LIKE " . "'%" . $conditions['relateNm'] . "%' ";
        }
        if ($conditions['memo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.MEMO LIKE " . "'%" . $conditions['memo'] . "%' ";
        }
        if ($conditions['kijoNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.KIJO_NM LIKE " . "'%" . $conditions['kijoNm'] . "%' ";
        }
        if ($conditions['jigyosyutaiNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.JIGYOSYUTAI_NM LIKE " . "'%" . $conditions['jigyosyutaiNm'] . "%' ";
        }
        if ($conditions['setubiNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SETUBI_NM LIKE " . "'%" . $conditions['setubiNm'] . "%' ";
        }
        if ($conditions['prefNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PREF_NM LIKE " . "'%" . $conditions['prefNm'] . "%' ";
        }
        if ($conditions['deliveryPjNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.DELIVERY_PJ_NM LIKE " . "'%" . $conditions['deliveryPjNm'] . "%' ";
        }
        if ($conditions['custNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_NM LIKE " . "'%" . $conditions['custNm'] . "%' ";
        }
        if ($conditions['custTypeNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_TYPE_NM = " . "'" . $conditions['custTypeNm'] . "' ";
        }
        if ($conditions['custDept'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_DEPT LIKE " . "'%" . $conditions['custDept'] . "%' ";
        }
        if ($conditions['requester'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.REQUESTER LIKE " . "'%" . $conditions['requester'] . "%' ";
        }
        if ($conditions['contactTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CONTACT_TEL LIKE " . "'%" . $conditions['contactTel'] . "%' ";
        }
        if ($conditions['contactFax'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CONTACT_FAX LIKE " . "'%" . $conditions['contactFax'] . "%' ";
        }
        if ($conditions['contactMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CONTACT_MAIL LIKE " . "'%" . $conditions['contactMail'] . "%' ";
        }
        if ($conditions['salesDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SALES_DEPT_NM LIKE " . "'%" . $conditions['salesDeptNm'] . "%' ";
        }
        if ($conditions['salesUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SALES_USER_NM LIKE " . "'%" . $conditions['salesUserNm'] . "%' ";
        }
        if ($conditions['skanDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SKAN_DEPT_NM LIKE " . "'%" . $conditions['skanDeptNm'] . "%' ";
        }
        if ($conditions['skanUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SKAN_USER_NM LIKE " . "'%" . $conditions['skanUserNm'] . "%' ";
        }
        if ($conditions['callStartDateFrom'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['callStartDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.CALL_START_DATE ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['callStartDateFrom'] . "'||' 00:00:00','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.CALL_START_DATE ";
            // 2018.01.20 Newtouch更新 end
        }
        if ($conditions['callStartDateTo'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_START_DATE <= " . " TO_DATE('" . $conditions['callStartDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_START_DATE <= " . " TO_DATE('" . $conditions['callStartDateTo'] . "'||' 23:59:59','yyyy-mm-dd hh24:mi:ss') ";
            // 2018.01.20 Newtouch更新 end
        }
        // 2018.01.20 Newtouch削除 start
//        if ($conditions['callEndDateFrom'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['callEndDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.CALL_END_DATE ";
//        }
//        if ($conditions['callEndDateTo'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_END_DATE <= " . " TO_DATE('" . $conditions['callEndDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
//        }
        // 2018.01.20 Newtouch削除 end
        if ($conditions['callDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_DEPT_NM LIKE " . "'%" . $conditions['callDeptNm'] . "%' ";
        }
        if ($conditions['callUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_USER_NM LIKE " . "'%" . $conditions['callUserNm'] . "%' ";
        }
        if ($conditions['callTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_TEL LIKE " . "'%" . $conditions['callTel'] . "%' ";
        }
        if ($conditions['callMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_MAIL LIKE " . "'%" . $conditions['callMail'] . "%' ";
        }
        if ($conditions['callContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_CONTENT LIKE " . "'%" . $conditions['callContent'] . "%' ";
        }
        if ($conditions['taioStartDateFrom'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['taioStartDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.TAIO_START_DATE ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['taioStartDateFrom'] . "'||' 00:00:00','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.TAIO_START_DATE ";
            // 2018.01.20 Newtouch更新 end
        }
        if ($conditions['taioStartDateTo'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_START_DATE <= " . " TO_DATE('" . $conditions['taioStartDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_START_DATE <= " . " TO_DATE('" . $conditions['taioStartDateTo'] . "'||' 23:59:59','yyyy-mm-dd hh24:mi:ss') ";
            // 2018.01.20 Newtouch更新 end
        }
        // 2018.01.20 Newtouch削除 start
//        if ($conditions['taioEndDateFrom'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['taioEndDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.TAIO_END_DATE ";
//        }
//        if ($conditions['taioEndDateTo'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_END_DATE <= " . " TO_DATE('" . $conditions['taioEndDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
//        }
        // 2018.01.20 Newtouch削除 end
        if ($conditions['taioDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_DEPT_NM LIKE " . "'%" . $conditions['taioDeptNm'] . "%' ";
        }
        if ($conditions['taioUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_USER_NM LIKE " . "'%" . $conditions['taioUserNm'] . "%' ";
        }
        if ($conditions['taioTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_TEL LIKE " . "'%" . $conditions['taioTel'] . "%' ";
        }
        if ($conditions['taioMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_MAIL LIKE " . "'%" . $conditions['taioMail'] . "%' ";
        }
        if ($conditions['taioContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_CONTENT LIKE " . "'%" . $conditions['taioContent'] . "%' ";
        }
        if ($conditions['actDateFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_DATE ";
        }
        if ($conditions['actDateTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_DATE <= " . " TO_DATE('" . $conditions['actDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['actStartTimeFrom'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actStartTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_START_TIME ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actStartTimeFrom'] . "'||' 00:00:00','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_START_TIME ";
            // 2018.01.20 Newtouch更新 end
        }
        if ($conditions['actStartTimeTo'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_START_TIME <= " . " TO_DATE('" . $conditions['actStartTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_START_TIME <= " . " TO_DATE('" . $conditions['actStartTimeTo'] . "'||' 23:59:59','yyyy-mm-dd hh24:mi:ss') ";
            // 2018.01.20 Newtouch更新 end
        }
        // 2018.01.20 Newtouch削除 start
//        if ($conditions['actEndTimeFrom'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actEndTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_END_TIME ";
//        }
//        if ($conditions['actEndTimeTo'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_END_TIME <= " . " TO_DATE('" . $conditions['actEndTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
//        }
        // 2018.01.20 Newtouch削除 end
        if ($conditions['actType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_TYPE = " . "'" . $conditions['actType'] . "' ";
        }
        if ($conditions['actDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_DEPT_NM LIKE " . "'%" . $conditions['actDeptNm'] . "%' ";
        }
        if ($conditions['actUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_USER_NM LIKE " . "'%" . $conditions['actUserNm'] . "%' ";
        }
        if ($conditions['actTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_TEL LIKE " . "'%" . $conditions['actTel'] . "%' ";
        }
        if ($conditions['actMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_MAIL LIKE " . "'%" . $conditions['actMail'] . "%' ";
        }
        if ($conditions['actContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_CONTENT LIKE " . "'%" . $conditions['actContent'] . "%' ";
        }
        if ($conditions['productType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_TYPE = " . "'" . $conditions['productType'] . "' ";
        }
        if ($conditions['productTrigger'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_TRIGGER = " . "'" . $conditions['productTrigger'] . "' ";
        }
        if ($conditions['productHindo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_HINDO = " . "'" . $conditions['productHindo'] . "' ";
        }
        if ($conditions['productGensyo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_GENSYO = " . "'" . $conditions['productGensyo'] . "' ";
        }
        if ($conditions['productStatus'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_STATUS = " . "'" . $conditions['productStatus'] . "' ";
        }
        // 2018.01.09 Newtouch追加 start
        if($conditions['incidentTypeSyougai'] != NULL || $conditions['incidentTypeJiko'] != NULL
            || $conditions['incidentTypeClaim'] != NULL || $conditions['incidentTypeToiawase'] != NULL
            || $conditions['incidentTypeInfo'] != NULL || $conditions['incidentTypeOther'] != NULL){

            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_TYPE IN (";
            if($conditions['incidentTypeSyougai'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '1', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeJiko'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '2', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeClaim'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '4', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeToiawase'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '3', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeInfo'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '5', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeOther'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '6') ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '') ";
            }
        }
        if($conditions['incidentStatusCall'] != NULL || $conditions['incidentStatusTaio'] != NULL || $conditions['incidentStatusAct'] != NULL){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_STS IN (";
            if($conditions['incidentStatusCall'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '1', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentStatusTaio'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '2', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentStatusAct'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '3') ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '') ";
            }
        }
        if($conditions['industryTypeMachinery'] != NULL || $conditions['industryTypeElectricalMachinery'] != NULL
            || $conditions['industryTypeInstrumentation'] || $conditions['industryTypeInfo']
            || $conditions['industryTypeEnvironment'] || $conditions['industryTypeWBC']
            || $conditions['industryTypeOther']){

            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INDUSTRY_TYPE IN (";
            if($conditions['industryTypeMachinery'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '1', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeElectricalMachinery'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '2', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeInstrumentation'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '3', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeInfo'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '4', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeEnvironment'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '5', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeWBC'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '6', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeOther'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '7') ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '') ";
            }
        }
        if($conditions['prefCd'] != NULL && $conditions['prefCd'] != "0"){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.PREF_ID = '" . $conditions['prefCd'] ."' ";
        }
        if($conditions['custTypeNenkan'] != NULL || $conditions['custTypeTenken'] != NULL
            || $conditions['custTypeNasi'] != NULL || $conditions['custTypeKasi'] != NULL
            || $conditions['custTypeOther'] != NULL){

            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_TYPE_CD IN (";
            if($conditions['custTypeNenkan'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '1', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['custTypeTenken'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '2', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['custTypeNasi'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '3', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['custTypeKasi'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '4', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['custTypeOther'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '5') ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '') ";
            }
        }
        // 2018.01.09 Newtouch追加 end
        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    // 2018.01.17 Newtouch追加 start
    public function getIncidentWithRelByKeyword($conditions){
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT DISTINCT
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
                    INCIDENT.DEL_FLG,
                    PJ.PJ_NO PJ_PJ_NO,
                    PJ.INCIDENT_ID PJ_INCIDENT_ID,
                    PJ.PJ_NM PJ_PJ_NM,
                    PJ.MAIN_KIJO_ID PJ_MAIN_KIJO_ID,
                    PJ.MAIN_KIJO_NM PJ_MAIN_KIJO_NM,
                    PJ.PJ_SKAN_USER_ID PJ_PJ_SKAN_USER_ID,
                    PJ.PJ_SKAN_USER_NM PJ_PJ_SKAN_USER_NM,
                    PJ.PM_ID PJ_PM_ID,
                    PJ.PM_NM PJ_PM_NM,
                    PJ.PREF_ID PJ_PREF_ID,
                    PJ.PREF_NM PJ_PREF_NM,
                    MR2.MKB_ID MR2_MKB_ID,
                    MR2.INCIDENT_ID MR2_INCIDENT_ID,
                    MR2.SUBJECT_NM MR2_SUBJECT_NM,
                    MR2.IRAIMOTO_TANTO_NM MR2_IRAIMOTO_TANTO_NM,
                    TO_CHAR(MR2.MAKE_DATE,'yyyy-mm-dd hh24:mi:ss') MR2_MAKE_DATE,
                    MR2.WORK_TANTO_ID MR2_WORK_TANTO_ID,
                    MR2.WORK_TANTO_NM MR2_WORK_TANTO_NM,
                    JIKO.JIKO_ID JIKO_JIKO_ID,
                    JIKO.INCIDENT_ID JIKO_INCIDENT_ID,
                    JIKO.INCIDENT_ID JIKO_INCIDENT_ID,
                    JIKO.LAST_REPORT_FLG JIKO_LAST_REPORT_FLG,
                    JIKO.GAIYO JIKO_GAIYO,
                    JIKO.KIJO_ID JIKO_KIJO_ID,
                    JIKO.KIJO_NM JIKO_KIJO_NM,
                    JIKO.JIKO_TYPE_CD JIKO_JIKO_TYPE_CD,
                    JIKO.JIKO_TYPE_NM JIKO_JIKO_TYPE_NM,
                    JIKO.CUST_ID JIKO_CUST_ID,
                    JIKO.CUST_NM JIKO_CUST_NM,
                    TO_CHAR(JIKO.HAKKO_DAY,'yyyy-mm-dd hh24:mi:ss') JIKO_HAKKO_DAY,
                    JIKO.HAKKOMOTO_SEC_CD JIKO_HAKKOMOTO_SEC_CD,
                    JIKO.HAKKOMOTO_SEC_NM JIKO_HAKKOMOTO_SEC_NM,
                    HIYO.HIYO_ID HIYO_HIYO_ID,
                    HIYO.INCIDENT_ID HIYO_INCIDENT_ID,
                    HIYO.KUBUN_NM HIYO_KUBUN_NM,
                    HIYO.SUBJECT_NM HIYO_SUBJECT_NM,
                    HIYO.STS_NM HIYO_STS_NM,
                    HIYO.KESSAI_NO HIYO_KESSAI_NO,
                    HIYO.GAISAN_AMOUNT HIYO_GAISAN_AMOUNT
                FROM
                    IDENT_T_INCIDENT INCIDENT
                LEFT OUTER JOIN
                    IDENT_T_INCIDENT_RELATE_USER RUSER ON INCIDENT.INCIDENT_ID = RUSER.INCIDENT_ID AND RUSER.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_PJ PJ ON INCIDENT.INCIDENT_ID = PJ.INCIDENT_ID AND PJ.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_MR2 MR2 ON INCIDENT.INCIDENT_ID = MR2.INCIDENT_ID AND MR2.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_JIKO JIKO ON INCIDENT.INCIDENT_ID = JIKO.INCIDENT_ID AND JIKO.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_HIYO HIYO ON INCIDENT.INCIDENT_ID = HIYO.INCIDENT_ID AND HIYO.DEL_FLG = '0'
                WHERE
                    INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;
        if ($conditions['keyword'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO ."AND (";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " INCIDENT.INCIDENT_NO = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.PREF_NM LIKE " . "'%" . $conditions['keyword'] . "%' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.KIJO_NM LIKE " . "'%" . $conditions['keyword'] . "%' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.SETUBI_NM LIKE " . "'%" . $conditions['keyword'] . "%' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.CALL_CONTENT LIKE " . "'%" . $conditions['keyword'] . "%' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.INFO_PROVIDER_TEL = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.CONTACT_TEL = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.CALL_TEL = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.TAIO_TEL = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.ACT_TEL = " . "'" . $conditions['keyword'] . "' ";
            if(parent::valid_date(str_replace("-", "", $conditions['keyword'])) == SAVE_TRUE
                || parent::valid_date(str_replace("/", "", $conditions['keyword'])) == SAVE_TRUE
                || parent::valid_date(str_replace(".", "", $conditions['keyword'])) == SAVE_TRUE){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR TO_CHAR(INCIDENT.CALL_START_DATE,'" . YYYYMMDD . "') = " . "'" . date(Ymd,strtotime($conditions['keyword'])) . "' ";
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR TO_CHAR(INCIDENT.CALL_END_DATE,'" . YYYYMMDD . "') = " . "'" . date(Ymd,strtotime($conditions['keyword'])) . "' ";
            }
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO .")";
        }

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }
    // 2018.01.17 Newtouch追加 end

    public function getIncident($conditions) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT DISTINCT
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
                LEFT OUTER JOIN
                    IDENT_T_INCIDENT_RELATE_USER RUSER 
                ON 
                    INCIDENT.INCIDENT_ID = RUSER.INCIDENT_ID AND RUSER.DEL_FLG = '0'
                WHERE
                    INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;
        if ($conditions['incidentId'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_ID = " . "'" . $conditions['incidentId'] . "' ";
        }
        if ($conditions['incidentNo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_NO LIKE " . "'%" . $conditions['incidentNo'] . "%' ";
        }
        if ($conditions['parentIncidentNo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PARENT_INCIDENT_NO LIKE " . "'%" . $conditions['parentIncidentNo'] . "%' ";
        }
        if ($conditions['incidentStartDateTimeFrom'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['incidentStartDateTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.INCIDENT_START_DATETIME ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['incidentStartDateTimeFrom'] . "'||' 00:00:00','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.INCIDENT_START_DATETIME ";
            // 2018.01.20 Newtouch更新 end
        }
        if ($conditions['incidentStartDateTimeTo'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_START_DATETIME <= " . " TO_DATE('" . $conditions['incidentStartDateTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_START_DATETIME <= " . " TO_DATE('" . $conditions['incidentStartDateTimeTo'] . "'||' 23:59:59','yyyy-mm-dd hh24:mi:ss') ";
            // 2018.01.20 Newtouch更新 end
        }
        if ($conditions['infoSource'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INFO_SOURCE LIKE " . "'%" . $conditions['infoSource'] . "%' ";
        }
        if ($conditions['infoProvider'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INFO_PROVIDER LIKE " . "'%" . $conditions['infoProvider'] . "%' ";
        }
        if ($conditions['infoProviderTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INFO_PROVIDER_TEL LIKE " . "'%" . $conditions['infoProviderTel'] . "%' ";
        }
        if ($conditions['relateNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND RUSER.RELATE_USER_NM LIKE " . "'%" . $conditions['relateNm'] . "%' ";
        }
        if ($conditions['memo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.MEMO LIKE " . "'%" . $conditions['memo'] . "%' ";
        }
        if ($conditions['kijoNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.KIJO_NM LIKE " . "'%" . $conditions['kijoNm'] . "%' ";
        }
        if ($conditions['jigyosyutaiNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.JIGYOSYUTAI_NM LIKE " . "'%" . $conditions['jigyosyutaiNm'] . "%' ";
        }
        if ($conditions['setubiNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SETUBI_NM LIKE " . "'%" . $conditions['setubiNm'] . "%' ";
        }
        if ($conditions['prefNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PREF_NM LIKE " . "'%" . $conditions['prefNm'] . "%' ";
        }
        if ($conditions['deliveryPjNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.DELIVERY_PJ_NM LIKE " . "'%" . $conditions['deliveryPjNm'] . "%' ";
        }
        if ($conditions['custNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_NM LIKE " . "'%" . $conditions['custNm'] . "%' ";
        }
        if ($conditions['custTypeNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_TYPE_NM = " . "'" . $conditions['custTypeNm'] . "' ";
        }
        if ($conditions['custDept'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_DEPT LIKE " . "'%" . $conditions['custDept'] . "%' ";
        }
        if ($conditions['requester'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.REQUESTER LIKE " . "'%" . $conditions['requester'] . "%' ";
        }
        if ($conditions['contactTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CONTACT_TEL LIKE " . "'%" . $conditions['contactTel'] . "%' ";
        }
        if ($conditions['contactFax'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CONTACT_FAX LIKE " . "'%" . $conditions['contactFax'] . "%' ";
        }
        if ($conditions['contactMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CONTACT_MAIL LIKE " . "'%" . $conditions['contactMail'] . "%' ";
        }
        if ($conditions['salesDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SALES_DEPT_NM LIKE " . "'%" . $conditions['salesDeptNm'] . "%' ";
        }
        if ($conditions['salesUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SALES_USER_NM LIKE " . "'%" . $conditions['salesUserNm'] . "%' ";
        }
        if ($conditions['skanDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SKAN_DEPT_NM LIKE " . "'%" . $conditions['skanDeptNm'] . "%' ";
        }
        if ($conditions['skanUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.SKAN_USER_NM LIKE " . "'%" . $conditions['skanUserNm'] . "%' ";
        }
        if ($conditions['callStartDateFrom'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['callStartDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.CALL_START_DATE ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['callStartDateFrom'] . "'||' 00:00:00','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.CALL_START_DATE ";
            // 2018.01.20 Newtouch更新 end
        }
        if ($conditions['callStartDateTo'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_START_DATE <= " . " TO_DATE('" . $conditions['callStartDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_START_DATE <= " . " TO_DATE('" . $conditions['callStartDateTo'] . "'||' 23:59:59','yyyy-mm-dd hh24:mi:ss') ";
            // 2018.01.20 Newtouch更新 end
        }
        // 2018.01.20 Newtouch削除 start
//        if ($conditions['callEndDateFrom'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['callEndDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.CALL_END_DATE ";
//        }
//        if ($conditions['callEndDateTo'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_END_DATE <= " . " TO_DATE('" . $conditions['callEndDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
//        }
        // 2018.01.20 Newtouch削除 end
        if ($conditions['callDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_DEPT_NM LIKE " . "'%" . $conditions['callDeptNm'] . "%' ";
        }
        if ($conditions['callUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_USER_NM LIKE " . "'%" . $conditions['callUserNm'] . "%' ";
        }
        if ($conditions['callTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_TEL LIKE " . "'%" . $conditions['callTel'] . "%' ";
        }
        if ($conditions['callMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_MAIL LIKE " . "'%" . $conditions['callMail'] . "%' ";
        }
        if ($conditions['callContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_CONTENT LIKE " . "'%" . $conditions['callContent'] . "%' ";
        }
        if ($conditions['taioStartDateFrom'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['taioStartDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.TAIO_START_DATE ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['taioStartDateFrom'] . "'||' 00:00:00','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.TAIO_START_DATE ";
            // 2018.01.20 Newtouch更新 start
        }
        if ($conditions['taioStartDateTo'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_START_DATE <= " . " TO_DATE('" . $conditions['taioStartDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_START_DATE <= " . " TO_DATE('" . $conditions['taioStartDateTo'] . "'||' 23:59:59','yyyy-mm-dd hh24:mi:ss') ";
            // 2018.01.20 Newtouch更新 start
        }
        // 2018.01.20 Newtouch削除 start
//        if ($conditions['taioEndDateFrom'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['taioEndDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.TAIO_END_DATE ";
//        }
//        if ($conditions['taioEndDateTo'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_END_DATE <= " . " TO_DATE('" . $conditions['taioEndDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
//        }
        // 2018.01.20 Newtouch削除 end
        if ($conditions['taioDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_DEPT_NM LIKE " . "'%" . $conditions['taioDeptNm'] . "%' ";
        }
        if ($conditions['taioUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_USER_NM LIKE " . "'%" . $conditions['taioUserNm'] . "%' ";
        }
        if ($conditions['taioTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_TEL LIKE " . "'%" . $conditions['taioTel'] . "%' ";
        }
        if ($conditions['taioMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_MAIL LIKE " . "'%" . $conditions['taioMail'] . "%' ";
        }
        if ($conditions['taioContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_CONTENT LIKE " . "'%" . $conditions['taioContent'] . "%' ";
        }
        if ($conditions['actDateFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_DATE ";
        }
        if ($conditions['actDateTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_DATE <= " . " TO_DATE('" . $conditions['actDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['actStartTimeFrom'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actStartTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_START_TIME ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actStartTimeFrom'] . "'||' 00:00:00','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_START_TIME ";
            // 2018.01.20 Newtouch更新 end
        }
        if ($conditions['actStartTimeTo'] != NULL) {
            // 2018.01.20 Newtouch更新 start
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_START_TIME <= " . " TO_DATE('" . $conditions['actStartTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_START_TIME <= " . " TO_DATE('" . $conditions['actStartTimeTo'] . "'||' 23:59:59','yyyy-mm-dd hh24:mi:ss') ";
            // 2018.01.20 Newtouch更新 end
        }
        // 2018.01.20 Newtouch削除 start
//        if ($conditions['actEndTimeFrom'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actEndTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_END_TIME ";
//        }
//        if ($conditions['actEndTimeTo'] != NULL) {
//            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_END_TIME <= " . " TO_DATE('" . $conditions['actEndTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
//        }
        // 2018.01.20 Newtouch削除 end
        if ($conditions['actType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_TYPE = " . "'" . $conditions['actType'] . "' ";
        }
        if ($conditions['actDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_DEPT_NM LIKE " . "'%" . $conditions['actDeptNm'] . "%' ";
        }
        if ($conditions['actUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_USER_NM LIKE " . "'%" . $conditions['actUserNm'] . "%' ";
        }
        if ($conditions['actTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_TEL LIKE " . "'%" . $conditions['actTel'] . "%' ";
        }
        if ($conditions['actMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_MAIL LIKE " . "'%" . $conditions['actMail'] . "%' ";
        }
        if ($conditions['actContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_CONTENT LIKE " . "'%" . $conditions['actContent'] . "%' ";
        }
        if ($conditions['productType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_TYPE = " . "'" . $conditions['productType'] . "' ";
        }
        if ($conditions['productTrigger'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_TRIGGER = " . "'" . $conditions['productTrigger'] . "' ";
        }
        if ($conditions['productHindo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_HINDO = " . "'" . $conditions['productHindo'] . "' ";
        }
        if ($conditions['productGensyo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_GENSYO = " . "'" . $conditions['productGensyo'] . "' ";
        }
        if ($conditions['productStatus'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.PRODUCT_STATUS = " . "'" . $conditions['productStatus'] . "' ";
        }
        // 2018.01.09 Newtouch追加 start
        if($conditions['incidentTypeSyougai'] != NULL || $conditions['incidentTypeJiko'] != NULL
            || $conditions['incidentTypeClaim'] != NULL || $conditions['incidentTypeToiawase'] != NULL
            || $conditions['incidentTypeInfo'] != NULL || $conditions['incidentTypeOther'] != NULL){

            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_TYPE IN (";
            if($conditions['incidentTypeSyougai'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '1', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeJiko'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '2', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeClaim'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '4', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeToiawase'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '3', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeInfo'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '5', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentTypeOther'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '6') ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '') ";
            }
        }
        if($conditions['incidentStatusCall'] != NULL || $conditions['incidentStatusTaio'] != NULL || $conditions['incidentStatusAct'] != NULL){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_STS IN (";
            if($conditions['incidentStatusCall'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '1', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentStatusTaio'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '2', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['incidentStatusAct'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '3') ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '') ";
            }
        }
        if($conditions['industryTypeMachinery'] != NULL || $conditions['industryTypeElectricalMachinery'] != NULL
            || $conditions['industryTypeInstrumentation'] || $conditions['industryTypeInfo']
            || $conditions['industryTypeEnvironment'] || $conditions['industryTypeWBC']
            || $conditions['industryTypeOther']){

            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INDUSTRY_TYPE IN (";
            if($conditions['industryTypeMachinery'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '1', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeElectricalMachinery'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '2', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeInstrumentation'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '3', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeInfo'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '4', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeEnvironment'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '5', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeWBC'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '6', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['industryTypeOther'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '7') ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '') ";
            }
        }
        if($conditions['prefCd'] != NULL && $conditions['prefCd'] != "0"){
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.PREF_ID = '" . $conditions['prefCd'] ."' ";
        }
        if($conditions['custTypeNenkan'] != NULL || $conditions['custTypeTenken'] != NULL
            || $conditions['custTypeNasi'] != NULL || $conditions['custTypeKasi'] != NULL
            || $conditions['custTypeOther'] != NULL){

            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_TYPE_CD IN (";
            if($conditions['custTypeNenkan'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '1', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['custTypeTenken'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '2', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['custTypeNasi'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '3', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['custTypeKasi'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '4', ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '', ";
            }
            if($conditions['custTypeOther'] != NULL){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '5') ";
            }else{
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " '') ";
            }
        }
        // 2018.01.09 Newtouch追加 end

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }

    // 2018.01.17 Newtouch追加 start
    public function getIncidentByKeyword($conditions) {
        $SQL_INCIDENT_INFO = <<< SQL_INCIDENT_INFO
                SELECT DISTINCT
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
                LEFT OUTER JOIN
                    IDENT_T_INCIDENT_RELATE_USER RUSER 
                ON 
                    INCIDENT.INCIDENT_ID = RUSER.INCIDENT_ID AND RUSER.DEL_FLG = '0'
                WHERE
                    INCIDENT.DEL_FLG = '0'
SQL_INCIDENT_INFO;
        if ($conditions['keyword'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO ."AND (";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.INCIDENT_NO = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.PREF_NM LIKE " . "'%" . $conditions['keyword'] . "%' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.KIJO_NM LIKE " . "'%" . $conditions['keyword'] . "%' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.SETUBI_NM LIKE " . "'%" . $conditions['keyword'] . "%' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.CALL_CONTENT LIKE " . "'%" . $conditions['keyword'] . "%' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.INFO_PROVIDER_TEL = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.CONTACT_TEL = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.CALL_TEL = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.TAIO_TEL = " . "'" . $conditions['keyword'] . "' ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR INCIDENT.ACT_TEL = " . "'" . $conditions['keyword'] . "' ";
            if(parent::valid_date(str_replace("-", "", $conditions['keyword'])) == SAVE_TRUE
                || parent::valid_date(str_replace("/", "", $conditions['keyword'])) == SAVE_TRUE
                || parent::valid_date(str_replace(".", "", $conditions['keyword'])) == SAVE_TRUE){
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR TO_CHAR(INCIDENT.CALL_START_DATE,'" . YYYYMMDD . "') = " . "'" . date(Ymd,strtotime($conditions['keyword'])) . "' ";
                $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR TO_CHAR(INCIDENT.CALL_END_DATE,'" . YYYYMMDD . "') = " . "'" . date(Ymd,strtotime($conditions['keyword'])) . "' ";
            }
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO .")";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO .")";
        }

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }
    // 2018.01.17 Newtouch追加 end

}
