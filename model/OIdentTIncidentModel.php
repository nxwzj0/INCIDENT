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
                    INCIDENT.DEL_FLG,
                    TO_CHAR(INCIDENT.UPD_DATE,'yyyy/mm/dd hh24:mi:ss') IN_UPD_DATE,
                    PJ.PJ_NO PJ_PJ_NO,
                    PJ.INCIDENT_ID PJ_INCIDENT_ID,
                    PJ.PJ_NM PJ_PJ_NM,
                    PJ.MAIN_KIJO_ID PJ_MAIN_KIJO_ID,
                    PJ.MAIN_KIJO_NM PJ_MAIN_KIJO_NM,
                    PJ.PJ_SKAN_USER_ID PJ_PJ_SKAN_USER_ID,
                    PJ.PJ_SKAN_USER_NM PJ_PJ_SKAN_USER_NM,
                    PJ.PM_ID PJ_PM_ID,
                    PJ.PM_NM PJ_PM_NM,
                    PJ.PREF_NM PJ_PREF_NM,
                    MR2.MKB_ID MR2_MKB_ID,
                    MR2.INCIDENT_ID MR2_INCIDENT_ID,
                    MR2.SUBJECT_NM MR2_SUBJECT_NM,
                    MR2.IRAIMOTO_TANTO_NM MR2_IRAIMOTO_TANTO_NM,
                    TO_CHAR(MR2.MAKE_DATE,'yyyy/mm/dd hh24:mi:ss') MR2_MAKE_DATE,
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
                    TO_CHAR(JIKO.HAKKO_DAY,'yyyy/mm/dd hh24:mi:ss') JIKO_HAKKO_DAY,
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
                    PJ.PREF_NM PJ_PREF_NM,
                    MR2.MKB_ID MR2_MKB_ID,
                    MR2.INCIDENT_ID MR2_INCIDENT_ID,
                    MR2.SUBJECT_NM MR2_SUBJECT_NM,
                    MR2.IRAIMOTO_TANTO_NM MR2_IRAIMOTO_TANTO_NM,
                    TO_CHAR(MR2.MAKE_DATE,'yyyy/mm/dd hh24:mi:ss') MR2_MAKE_DATE,
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
                    TO_CHAR(JIKO.HAKKO_DAY,'yyyy/mm/dd hh24:mi:ss') JIKO_HAKKO_DAY,
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
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.INCIDENT_NO",$conditions['incidentNo'],"%","%")." ";
        }
        if ($conditions['parentIncidentNo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.PARENT_INCIDENT_NO",$conditions['parentIncidentNo'],"%","%")." ";
        }
        if ($conditions['incidentStartDateTimeFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['incidentStartDateTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.INCIDENT_START_DATETIME ";
        }
        if ($conditions['incidentStartDateTimeTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_START_DATETIME <= " . " TO_DATE('" . $conditions['incidentStartDateTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['infoSource'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.INFO_SOURCE",$conditions['infoSource'],"%","%")." ";
        }
        if ($conditions['infoProvider'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.INFO_PROVIDER",$conditions['infoProvider'],"%","%")." ";
        }
        if ($conditions['infoProviderTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.INFO_PROVIDER_TEL",$conditions['infoProviderTel'],"%","%")." ";
        }
        if ($conditions['relateNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."RUSER.RELATE_USER_NM",$conditions['relateNm'],"%","%")." ";
        }
        if ($conditions['memo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.MEMO",$conditions['memo'],"%","%")." ";
        }
        if ($conditions['kijoNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.KIJO_NM",$conditions['kijoNm'],"%","%")." ";
        }
        if ($conditions['jigyosyutaiNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.JIGYOSYUTAI_NM",$conditions['jigyosyutaiNm'],"%","%")." ";
        }
        if ($conditions['setubiNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SETUBI_NM",$conditions['setubiNm'],"%","%")." ";
        }
        if ($conditions['prefNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.PREF_NM",$conditions['prefNm'],"%","%")." ";
        }
        if ($conditions['deliveryPjNo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.DELIVERY_PJ_No",$conditions['deliveryPjNo'],"%","%")." ";
        }
        if ($conditions['custNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CUST_NM",$conditions['custNm'],"%","%")." ";
        }
        if ($conditions['custTypeNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_TYPE_NM = " . "'" . $conditions['custTypeNm'] . "' ";
        }
        if ($conditions['custDept'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CUST_DEPT",$conditions['custDept'],"%","%")." ";
        }
        if ($conditions['requester'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.REQUESTER",$conditions['requester'],"%","%")." ";
        }
        if ($conditions['contactTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CONTACT_TEL",$conditions['contactTel'],"%","%")." ";
        }
        if ($conditions['contactFax'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CONTACT_FAX",$conditions['contactFax'],"%","%")." ";
        }
        if ($conditions['contactMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CONTACT_MAIL",$conditions['contactMail'],"%","%")." ";
        }
        if ($conditions['salesDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SALES_DEPT_NM",$conditions['salesDeptNm'],"%","%")." ";
        }
        if ($conditions['salesUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SALES_USER_NM",$conditions['salesUserNm'],"%","%")." ";
        }
        if ($conditions['skanDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SKAN_DEPT_NM",$conditions['skanDeptNm'],"%","%")." ";
        }
        if ($conditions['skanUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SKAN_USER_NM",$conditions['skanUserNm'],"%","%")." ";
        }
        if ($conditions['callStartDateFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_START_DATE >= TO_DATE( '" . $conditions['callStartDateFrom'] . "','yyyy-mm-dd hh24:mi:ss')";
        }
        if ($conditions['callStartDateTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_START_DATE <= " . " TO_DATE('" . $conditions['callStartDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['callDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_DEPT_NM",$conditions['callDeptNm'],"%","%")." ";
        }
        if ($conditions['callUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_USER_NM",$conditions['callUserNm'],"%","%")." ";
        }
        if ($conditions['callTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_TEL",$conditions['callTel'],"%","%")." ";
        }
        if ($conditions['callMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_MAIL",$conditions['callMail'],"%","%")." ";
        }
        if ($conditions['callContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_CONTENT",$conditions['callContent'],"%","%")." ";
        }
        if ($conditions['taioStartDateFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['taioStartDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.TAIO_START_DATE ";
        }
        if ($conditions['taioStartDateTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_START_DATE <= " . " TO_DATE('" . $conditions['taioStartDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['taioDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_DEPT_NM",$conditions['taioDeptNm'],"%","%")." ";
        }
        if ($conditions['taioUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_USER_NM",$conditions['taioUserNm'],"%","%")." ";
        }
        if ($conditions['taioTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_TEL",$conditions['taioTel'],"%","%")." ";
        }
        if ($conditions['taioMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_MAIL",$conditions['taioMail'],"%","%")." ";
        }
        if ($conditions['taioContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_CONTENT",$conditions['taioContent'],"%","%")." ";
        }
        if ($conditions['actDateFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_DATE ";
        }
        if ($conditions['actDateTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_DATE <= " . " TO_DATE('" . $conditions['actDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['actStartTimeFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actStartTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_START_TIME ";
        }
        if ($conditions['actStartTimeTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_START_TIME <= " . " TO_DATE('" . $conditions['actStartTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['actType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_TYPE_CD = " . "'" . $conditions['actType'] . "' ";
        }
        if ($conditions['actDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_DEPT_NM",$conditions['actDeptNm'],"%","%")." ";
        }
        if ($conditions['actUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_USER_NM",$conditions['actUserNm'],"%","%")." ";
        }
        if ($conditions['actTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_TEL",$conditions['actTel'],"%","%")." ";
        }
        if ($conditions['actMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_MAIL",$conditions['actMail'],"%","%")." ";
        }
        if ($conditions['actContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_CONTENT",$conditions['actContent'],"%","%")." ";
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
        
        if ($conditions['incidentType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_TYPE_CD IN(" . $conditions['incidentType'] . ")";
        }

        if ($conditions['incidentStatus'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_STS IN(" . $conditions['incidentStatus'] . ")";
        }
        
        if ($conditions['industryType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INDUSTRY_TYPE_CD IN(" . $conditions['industryType'] . ")";
        }
        
        if ($conditions['custType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_TYPE_CD IN(" . $conditions['custType'] . ")";
        }   
        
        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ORDER BY TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') DESC NULLS LAST ";
        
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
                    PJ.PREF_NM PJ_PREF_NM,
                    MR2.MKB_ID MR2_MKB_ID,
                    MR2.INCIDENT_ID MR2_INCIDENT_ID,
                    MR2.SUBJECT_NM MR2_SUBJECT_NM,
                    MR2.IRAIMOTO_TANTO_NM MR2_IRAIMOTO_TANTO_NM,
                    TO_CHAR(MR2.MAKE_DATE,'yyyy/mm/dd hh24:mi:ss') MR2_MAKE_DATE,
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
                    TO_CHAR(JIKO.HAKKO_DAY,'yyyy/mm/dd hh24:mi:ss') JIKO_HAKKO_DAY,
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
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR ".CMN_MakeLikeCond(" "."INCIDENT.PREF_NM",$conditions['keyword'],"%","%")." ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR ".CMN_MakeLikeCond(" "."INCIDENT.KIJO_NM",$conditions['keyword'],"%","%")." ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR ".CMN_MakeLikeCond(" "."INCIDENT.SETUBI_NM",$conditions['keyword'],"%","%")." ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR ".CMN_MakeLikeCond(" "."INCIDENT.CALL_CONTENT",$conditions['keyword'],"%","%")." ";
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

        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ORDER BY TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') DESC NULLS LAST ";

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
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.INCIDENT_NO",$conditions['incidentNo'],"%","%")." ";
        }
        if ($conditions['parentIncidentNo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.PARENT_INCIDENT_NO",$conditions['parentIncidentNo'],"%","%")." ";
        }
        if ($conditions['incidentStartDateTimeFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['incidentStartDateTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.INCIDENT_START_DATETIME ";
        }
        if ($conditions['incidentStartDateTimeTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_START_DATETIME <= " . " TO_DATE('" . $conditions['incidentStartDateTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['infoSource'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.INFO_SOURCE",$conditions['infoSource'],"%","%")." ";
        }
        if ($conditions['infoProvider'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.INFO_PROVIDER",$conditions['infoProvider'],"%","%")." ";
        }
        if ($conditions['infoProviderTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.INFO_PROVIDER_TEL",$conditions['infoProviderTel'],"%","%")." ";
        }
        if ($conditions['relateNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."RUSER.RELATE_USER_NM",$conditions['relateNm'],"%","%")." ";
        }
        if ($conditions['memo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.MEMO",$conditions['memo'],"%","%")." ";
        }
        if ($conditions['kijoNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.KIJO_NM",$conditions['kijoNm'],"%","%")." ";
        }
        if ($conditions['jigyosyutaiNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.JIGYOSYUTAI_NM",$conditions['jigyosyutaiNm'],"%","%")." ";
        }
        if ($conditions['setubiNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SETUBI_NM",$conditions['setubiNm'],"%","%")." ";
        }
        if ($conditions['prefNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.PREF_NM",$conditions['prefNm'],"%","%")." ";
        }
        if ($conditions['deliveryPjNo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.DELIVERY_PJ_NO",$conditions['deliveryPjNo'],"%","%")." ";
        }
        if ($conditions['custNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CUST_NM",$conditions['custNm'],"%","%")." ";
        }
        if ($conditions['custTypeNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_TYPE_NM = " . "'" . $conditions['custTypeNm'] . "' ";
        }
        if ($conditions['custDept'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CUST_DEPT",$conditions['custDept'],"%","%")." ";
        }
        if ($conditions['requester'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.REQUESTER",$conditions['requester'],"%","%")." ";
        }
        if ($conditions['contactTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CONTACT_TEL",$conditions['contactTel'],"%","%")." ";
        }
        if ($conditions['contactFax'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CONTACT_FAX",$conditions['contactFax'],"%","%")." ";
        }
        if ($conditions['contactMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CONTACT_MAIL",$conditions['contactMail'],"%","%")." ";
        }
        if ($conditions['salesDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SALES_DEPT_NM",$conditions['salesDeptNm'],"%","%")." ";
        }
        if ($conditions['salesUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SALES_USER_NM",$conditions['salesUserNm'],"%","%")." ";
        }
        if ($conditions['skanDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SKAN_DEPT_NM",$conditions['skanDeptNm'],"%","%")." ";
        }
        if ($conditions['skanUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.SKAN_USER_NM",$conditions['skanUserNm'],"%","%")." ";
        }
        if ($conditions['callStartDateFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_START_DATE >= TO_DATE( '" . $conditions['callStartDateFrom'] . "','yyyy-mm-dd hh24:mi:ss')";
        }
        if ($conditions['callStartDateTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CALL_START_DATE <= " . " TO_DATE('" . $conditions['callStartDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['callDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_DEPT_NM",$conditions['callDeptNm'],"%","%")." ";
        }
        if ($conditions['callUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_USER_NM",$conditions['callUserNm'],"%","%")." ";
        }
        if ($conditions['callTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_TEL",$conditions['callTel'],"%","%")." ";
        }
        if ($conditions['callMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_MAIL",$conditions['callMail'],"%","%")." ";
        }
        if ($conditions['callContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.CALL_CONTENT",$conditions['callContent'],"%","%")." ";
        }
        if ($conditions['taioStartDateFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['taioStartDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.TAIO_START_DATE ";
        }
        if ($conditions['taioStartDateTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.TAIO_START_DATE <= " . " TO_DATE('" . $conditions['taioStartDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['taioDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_DEPT_NM",$conditions['taioDeptNm'],"%","%")." ";
        }
        if ($conditions['taioUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_USER_NM",$conditions['taioUserNm'],"%","%")." ";
        }
        if ($conditions['taioTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_TEL",$conditions['taioTel'],"%","%")." ";
        }
        if ($conditions['taioMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_MAIL",$conditions['taioMail'],"%","%")." ";
        }
        if ($conditions['taioContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.TAIO_CONTENT",$conditions['taioContent'],"%","%")." ";
        }
        if ($conditions['actDateFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actDateFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_DATE ";
        }
        if ($conditions['actDateTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_DATE <= " . " TO_DATE('" . $conditions['actDateTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['actStartTimeFrom'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND TO_DATE('" . $conditions['actStartTimeFrom'] . "','yyyy-mm-dd hh24:mi:ss') <= INCIDENT.ACT_START_TIME ";
        }
        if ($conditions['actStartTimeTo'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_START_TIME <= " . " TO_DATE('" . $conditions['actStartTimeTo'] . "','yyyy-mm-dd hh24:mi:ss') ";
        }
        if ($conditions['actType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.ACT_TYPE_CD = " . "'" . $conditions['actType'] . "' ";
        }
        if ($conditions['actDeptNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_DEPT_NM",$conditions['actDeptNm'],"%","%")." ";
        }
        if ($conditions['actUserNm'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_USER_NM",$conditions['actUserNm'],"%","%")." ";
        }
        if ($conditions['actTel'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_TEL",$conditions['actTel'],"%","%")." ";
        }
        if ($conditions['actMail'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_MAIL",$conditions['actMail'],"%","%")." ";
        }
        if ($conditions['actContent'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND ".CMN_MakeLikeCond(" "."INCIDENT.ACT_CONTENT",$conditions['actContent'],"%","%")." ";
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
        
        if ($conditions['incidentType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_TYPE_CD IN(" . $conditions['incidentType'] . ")";
        }

        if ($conditions['incidentStatus'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INCIDENT_STS IN(" . $conditions['incidentStatus'] . ")";
        }
        
        if ($conditions['industryType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.INDUSTRY_TYPE_CD IN(" . $conditions['industryType'] . ")";
        }
        
        if ($conditions['custType'] != NULL) {
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " AND INCIDENT.CUST_TYPE_CD IN(" . $conditions['custType'] . ")";
        }   

        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ORDER BY TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') DESC NULLS LAST ";

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
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR ".CMN_MakeLikeCond(" "."INCIDENT.PREF_NM",$conditions['keyword'],"%","%")." ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR ".CMN_MakeLikeCond(" "."INCIDENT.KIJO_NM",$conditions['keyword'],"%","%")." ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR ".CMN_MakeLikeCond(" "."INCIDENT.SETUBI_NM",$conditions['keyword'],"%","%")." ";
            $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " OR ".CMN_MakeLikeCond(" "."INCIDENT.CALL_CONTENT",$conditions['keyword'],"%","%")." ";
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

        $SQL_INCIDENT_INFO = $SQL_INCIDENT_INFO . " ORDER BY TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') DESC NULLS LAST ";

        $MultiExecSql = new MultiExecSql();
        $sqlResult = array();
        $MultiExecSql->getResultData($SQL_INCIDENT_INFO, $sqlResult);
        return $sqlResult;
    }
    // 2018.01.17 Newtouch追加 end

}
