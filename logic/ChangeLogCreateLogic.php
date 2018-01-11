<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ChangeLogCreateLogic
//	作成日付・作成者：2017.11.10 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");

require_once('./logic/CommonLogic.php');

//require_once('./model/OIdentTIncidentModel.php');
//require_once('./model/IdentTIncidentModel.php');
//require_once('./model/IdentTIncidentChangeLogModel.php');
//require_once('./model/IdentTIncidentRelateUserModel.php');

require_once('./common/CommonService.php');

class ChangeLogCreateLogic extends CommonLogic {

    public function execute($conditions,$incidentDataArrayNew) {
        // 二次元配列は一次元配列に変更する
        $conditions = $conditions[0];
        // CommonServiceを作成
        $CommonService = new CommonService();
        // 変更履歴情報の配列を作成する
        $changeLogArray = array();
        if($incidentDataArrayNew['kijoNm']!= null && $incidentDataArrayNew['kijoNm'] != $conditions['IN_KIJO_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = $conditions['IN_KIJO_NM']."　から　".$incidentDataArrayNew['kijoNm']."　に変更";
            $changeLog['changeItem'] =  $CommonService->getConstArrayString(unserialize(CHANGE_LOG_VALUE_DSP_ITEM),KIJO_NM);
            $changeLogArray['IN_KIJO_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['jigyosyutaiNm']!= null && $incidentDataArrayNew['jigyosyutaiNm'] != $conditions['IN_JIGYOSYUTAI_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = $conditions['IN_JIGYOSYUTAI_NM']."　から　".$incidentDataArrayNew['jigyosyutaiNm']."　に変更";
            $changeLog['changeItem'] =  $CommonService->getConstArrayString(unserialize(CHANGE_LOG_VALUE_DSP_ITEM),JIGYOSYUTAI_NM);
            $changeLogArray['IN_JIGYOSYUTAI_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['setubiNm']!= null && $incidentDataArrayNew['setubiNm'] != $conditions['IN_SETUBI_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = $conditions['IN_SETUBI_NM']."　から　".$incidentDataArrayNew['setubiNm']."　に変更";
            $changeLog['changeItem'] =  $CommonService->getConstArrayString(unserialize(CHANGE_LOG_VALUE_DSP_ITEM),SETUBI_NM);
            $changeLogArray['IN_SETUBI_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['incidentNo']!= null && $incidentDataArrayNew['incidentNo'] != $conditions['IN_INCIDENT_NO']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  INCIDENT_NO;
            $changeLogArray['IN_INCIDENT_NO'] = $changeLog;
        }
        if($incidentDataArrayNew['incidentStsCd']!= null && $incidentDataArrayNew['incidentStsCd'] != $conditions['IN_INCIDENT_STS']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  INCIDENT_STS;
            $changeLogArray['IN_INCIDENT_STS'] = $changeLog;
        }
        if($incidentDataArrayNew['incidentTypeCd']!= null && $incidentDataArrayNew['incidentTypeCd'] != $conditions['IN_INCIDENT_TYPE']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  INCIDENT_TYPE;
            $changeLogArray['IN_INCIDENT_TYPE'] = $changeLog;
        }
        if($incidentDataArrayNew['parentIncidentNo']!= null && $incidentDataArrayNew['parentIncidentNo'] != $conditions['IN_PARENT_INCIDENT_NO']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  PARENT_INCIDENT_NO;
            $changeLogArray['IN_PARENT_INCIDENT_NO'] = $changeLog;
        }
        if($incidentDataArrayNew['incidentStartDateTime']!= null){
            $incidentStartDateTime = $incidentDataArrayNew['incidentStartDateTime'];
            $incidentStartDateTime = str_replace("/","-",$incidentStartDateTime);    
            if($incidentStartDateTime != $conditions['IN_INCIDENT_START_DATETIME']){
                $changeLog = array();
                $changeLog['changeContent'] = KOUSINN;
                $changeLog['changeItem'] =  INCIDENT_START_DATETIME;
                $changeLogArray['IN_INCIDENT_START_DATETIME'] = $changeLog;
            }
        }
        if($incidentDataArrayNew['infoSource']!= null && $incidentDataArrayNew['infoSource'] != $conditions['IN_INFO_SOURCE']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  INFO_SOURCE;
            $changeLogArray['IN_INFO_SOURCE'] = $changeLog;
        }
        if($incidentDataArrayNew['infoProvider']!= null && $incidentDataArrayNew['infoProvider'] != $conditions['IN_INFO_PROVIDER']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  INFO_PROVIDER;
            $changeLogArray['IN_INFO_PROVIDER'] = $changeLog;
        }
        if($incidentDataArrayNew['infoProviderTel']!= null && $incidentDataArrayNew['infoProviderTel'] != $conditions['IN_INFO_PROVIDER_TEL']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  INFO_PROVIDER_TEL;
            $changeLogArray['IN_INFO_PROVIDER_TEL'] = $changeLog;
        }
        if($incidentDataArrayNew['memo']!= null && $incidentDataArrayNew['memo'] != $conditions['IN_MEMO']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  MEMO;
            $changeLogArray['IN_MEMO'] = $changeLog;
        }
        if($incidentDataArrayNew['kijoId']!= null && $incidentDataArrayNew['kijoId'] != $conditions['IN_KIJO_ID']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  KIJO_ID;
            $changeLogArray['IN_KIJO_ID'] = $changeLog;
        }
        if($incidentDataArrayNew['jigyosyutaiId']!= null && $incidentDataArrayNew['jigyosyutaiId'] != $conditions['IN_JIGYOSYUTAI_ID']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  JIGYOSYUTAI_ID;
            $changeLogArray['IN_JIGYOSYUTAI_ID'] = $changeLog;
        }
        if($incidentDataArrayNew['setubiId']!= null && $incidentDataArrayNew['setubiId'] != $conditions['IN_SETUBI_ID']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  SETUBI_ID;
            $changeLogArray['IN_SETUBI_ID'] = $changeLog;
        }
        if($incidentDataArrayNew['prefId']!= null && $incidentDataArrayNew['prefId'] != $conditions['IN_PREF_ID']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  PREF_ID;
            $changeLogArray['IN_PREF_ID'] = $changeLog;
        }
        if($incidentDataArrayNew['prefNm']!= null && $incidentDataArrayNew['prefNm'] != $conditions['IN_PREF_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  PREF_NM;
            $changeLogArray['IN_PREF_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['deliveryPjNo']!= null && $incidentDataArrayNew['deliveryPjNo'] != $conditions['IN_DELIVERY_PJ_NO']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  DELIVERY_PJ_NO;
            $changeLogArray['IN_DELIVERY_PJ_NO'] = $changeLog;
        }
        if($incidentDataArrayNew['deliveryPjNm']!= null && $incidentDataArrayNew['deliveryPjNm'] != $conditions['IN_DELIVERY_PJ_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  DELIVERY_PJ_NM;
            $changeLogArray['IN_DELIVERY_PJ_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['custId']!= null && $incidentDataArrayNew['custId'] != $conditions['IN_CUST_ID']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CUST_ID;
            $changeLogArray['IN_CUST_ID'] = $changeLog;
        }
        if($incidentDataArrayNew['custNm']!= null && $incidentDataArrayNew['custNm'] != $conditions['IN_CUST_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CUST_NM;
            $changeLogArray['IN_CUST_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['custTypeCd']!= null && $incidentDataArrayNew['custTypeCd'] != $conditions['IN_CUST_TYPE_CD']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CUST_TYPE_CD;
            $changeLogArray['IN_CUST_TYPE_CD'] = $changeLog;
        }
        if($incidentDataArrayNew['custTypeNm']!= null && $incidentDataArrayNew['custTypeNm'] != $conditions['IN_CUST_TYPE_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CUST_TYPE_NM;
            $changeLogArray['IN_CUST_TYPE_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['custDept']!= null && $incidentDataArrayNew['custDept'] != $conditions['IN_CUST_DEPT']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CUST_DEPT;
            $changeLogArray['IN_CUST_DEPT'] = $changeLog;
        }
        if($incidentDataArrayNew['requester']!= null && $incidentDataArrayNew['requester'] != $conditions['IN_REQUESTER']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  REQUESTER;
            $changeLogArray['IN_REQUESTER'] = $changeLog;
        }
        if($incidentDataArrayNew['contactTel']!= null && $incidentDataArrayNew['contactTel'] != $conditions['IN_CONTACT_TEL']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CONTACT_TEL;
            $changeLogArray['IN_CONTACT_TEL'] = $changeLog;
        }
        if($incidentDataArrayNew['contactFax']!= null && $incidentDataArrayNew['contactFax'] != $conditions['IN_CONTACT_FAX']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CONTACT_FAX;
            $changeLogArray['IN_CONTACT_FAX'] = $changeLog;
        }
        if($incidentDataArrayNew['contactMail']!= null && $incidentDataArrayNew['contactMail'] != $conditions['IN_CONTACT_MAIL']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CONTACT_MAIL;
            $changeLogArray['IN_CONTACT_MAIL'] = $changeLog;
        }
        if($incidentDataArrayNew['salesDeptCd']!= null && $incidentDataArrayNew['salesDeptCd'] != $conditions['IN_SALES_DEPT_CD']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  SALES_DEPT_CD;
            $changeLogArray['IN_SALES_DEPT_CD'] = $changeLog;
        }
        if($incidentDataArrayNew['salesDeptNm']!= null && $incidentDataArrayNew['salesDeptNm'] != $conditions['IN_SALES_DEPT_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  SALES_DEPT_NM;
            $changeLogArray['IN_SALES_DEPT_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['salesUserId']!= null && $incidentDataArrayNew['salesUserId'] != $conditions['IN_SALES_USER_ID']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  SALES_USER_ID;
            $changeLogArray['IN_SALES_USER_ID'] = $changeLog;
        }
        if($incidentDataArrayNew['salesUserNm']!= null && $incidentDataArrayNew['salesUserNm'] != $conditions['IN_SALES_USER_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  SALES_USER_NM;
            $changeLogArray['IN_SALES_USER_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['skanDeptCd']!= null && $incidentDataArrayNew['skanDeptCd'] != $conditions['IN_SKAN_DEPT_CD']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  SKAN_DEPT_CD;
            $changeLogArray['IN_SKAN_DEPT_CD'] = $changeLog;
        }
        if($incidentDataArrayNew['skanDeptNm']!= null && $incidentDataArrayNew['skanDeptNm'] != $conditions['IN_SKAN_DEPT_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  SKAN_DEPT_NM;
            $changeLogArray['IN_SKAN_DEPT_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['skanUserId']!= null && $incidentDataArrayNew['skanUserId'] != $conditions['IN_SKAN_USER_ID']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  SKAN_USER_ID;
            $changeLogArray['IN_SKAN_USER_ID'] = $changeLog;
        }
        if($incidentDataArrayNew['skanUserNm']!= null && $incidentDataArrayNew['skanUserNm'] != $conditions['IN_SKAN_USER_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  SKAN_USER_NM;
            $changeLogArray['IN_SKAN_USER_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['callStartDate']!= null){
            $callStartDate = $incidentDataArrayNew['callStartDate'];
            $callStartDate = str_replace("/","-",$callStartDate);
            if($callStartDate != $conditions['IN_CALL_START_DATE']){
                $changeLog = array();
                $changeLog['changeContent'] = KOUSINN;
                $changeLog['changeItem'] =  CALL_START_DATE;
                $changeLogArray['IN_CALL_START_DATE'] = $changeLog;
            }
        }
        if($incidentDataArrayNew['callEndDate']!= null){
            $callEndDate = $incidentDataArrayNew['callEndDate'];
            $callEndDate = str_replace("/","-",$callEndDate);
            if($callEndDate != $conditions['IN_CALL_END_DATE']){
                $changeLog = array();
                $changeLog['changeContent'] = KOUSINN;
                $changeLog['changeItem'] =  CALL_END_DATE;
                $changeLogArray['IN_CALL_END_DATE'] = $changeLog;
            }
        }
        if($incidentDataArrayNew['callDeptCd']!= null && $incidentDataArrayNew['callDeptCd'] != $conditions['IN_CALL_DEPT_CD']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CALL_DEPT_CD;
            $changeLogArray['IN_CALL_DEPT_CD'] = $changeLog;
        }
        if($incidentDataArrayNew['callDeptNm']!= null && $incidentDataArrayNew['callDeptNm'] != $conditions['IN_CALL_DEPT_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CALL_DEPT_NM;
            $changeLogArray['IN_CALL_DEPT_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['callUserId']!= null && $incidentDataArrayNew['callUserId'] != $conditions['IN_CALL_USER_CD']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CALL_USER_CD;
            $changeLogArray['IN_CALL_USER_CD'] = $changeLog;
        }
        if($incidentDataArrayNew['callUserNm']!= null && $incidentDataArrayNew['callUserNm'] != $conditions['IN_CALL_USER_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CALL_USER_NM;
            $changeLogArray['IN_CALL_USER_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['callTel']!= null && $incidentDataArrayNew['callTel'] != $conditions['IN_CALL_TEL']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CALL_TEL;
            $changeLogArray['IN_CALL_TEL'] = $changeLog;
        }
        if($incidentDataArrayNew['callMail']!= null && $incidentDataArrayNew['callMail'] != $conditions['IN_CALL_MAIL']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CALL_MAIL;
            $changeLogArray['IN_CALL_MAIL'] = $changeLog;
        }
        if($incidentDataArrayNew['callContent']!= null && $incidentDataArrayNew['callContent'] != $conditions['IN_CALL_CONTENT']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  CALL_CONTENT;
            $changeLogArray['IN_CALL_CONTENT'] = $changeLog;
        }
        if($incidentDataArrayNew['taioStartDate']!= null){
            $taioStartDate = $incidentDataArrayNew['taioStartDate'];
            $taioStartDate = str_replace("/","-",$taioStartDate);
            if($taioStartDate != $conditions['IN_TAIO_START_DATE']){
                $changeLog = array();
                $changeLog['changeContent'] = KOUSINN;
                $changeLog['changeItem'] =  TAIO_START_DATE;
                $changeLogArray['IN_TAIO_START_DATE'] = $changeLog;
            }
        }
        if($incidentDataArrayNew['taioEndDate']!= null){
            $taioEndDate = $incidentDataArrayNew['taioEndDate'];
            $taioEndDate = str_replace("/","-",$taioEndDate);
            if($taioEndDate != $conditions['IN_TAIO_END_DATE']){
                $changeLog = array();
                $changeLog['changeContent'] = KOUSINN;
                $changeLog['changeItem'] =  TAIO_END_DATE;
                $changeLogArray['IN_TAIO_END_DATE'] = $changeLog;
            }
        }
        if($incidentDataArrayNew['taioDeptCd']!= null && $incidentDataArrayNew['taioDeptCd'] != $conditions['IN_TAIO_DEPT_CD']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  TAIO_DEPT_CD;
            $changeLogArray['IN_TAIO_DEPT_CD'] = $changeLog;
        }
        if($incidentDataArrayNew['taioDeptNm']!= null && $incidentDataArrayNew['taioDeptNm'] != $conditions['IN_TAIO_DEPT_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  TAIO_DEPT_NM;
            $changeLogArray['IN_TAIO_DEPT_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['taioUserId']!= null && $incidentDataArrayNew['taioUserId'] != $conditions['IN_TAIO_USER_ID']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  TAIO_USER_ID;
            $changeLogArray['IN_TAIO_USER_ID'] = $changeLog;
        }
        if($incidentDataArrayNew['taioUserNm']!= null && $incidentDataArrayNew['taioUserNm'] != $conditions['IN_TAIO_USER_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  TAIO_USER_NM;
            $changeLogArray['IN_TAIO_USER_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['taioTel']!= null && $incidentDataArrayNew['taioTel'] != $conditions['IN_TAIO_TEL']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  TAIO_TEL;
            $changeLogArray['IN_TAIO_TEL'] = $changeLog;
        }
        if($incidentDataArrayNew['taioMail']!= null && $incidentDataArrayNew['taioMail'] != $conditions['IN_TAIO_MAIL']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  TAIO_MAIL;
            $changeLogArray['IN_TAIO_MAIL'] = $changeLog;
        }
        if($incidentDataArrayNew['taioContent']!= null && $incidentDataArrayNew['taioContent'] != $conditions['IN_TAIO_CONTENT']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  TAIO_CONTENT;
            $changeLogArray['IN_TAIO_CONTENT'] = $changeLog;
        }
        if($incidentDataArrayNew['actDate']!= null){
            $actDate = $incidentDataArrayNew['actDate'];
            $actDate = str_replace("/","-",$actDate);
            if($actDate != $conditions['IN_ACT_DATE']){
                $changeLog = array();
                $changeLog['changeContent'] = KOUSINN;
                $changeLog['changeItem'] =  ACT_DATE;
                $changeLogArray['IN_ACT_DATE'] = $changeLog;
            }
        }
        if($incidentDataArrayNew['actType']!= null && $incidentDataArrayNew['actType'] != $conditions['IN_ACT_TYPE']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  ACT_TYPE;
            $changeLogArray['IN_ACT_TYPE'] = $changeLog;
        }
        if($incidentDataArrayNew['actStartTime']!= null){
            $actStartTime = $incidentDataArrayNew['actStartTime'];
            $actStartTime = str_replace("/","-",$actStartTime);
            if($actStartTime != $conditions['IN_ACT_START_TIME']){
                $changeLog = array();
                $changeLog['changeContent'] = KOUSINN;
                $changeLog['changeItem'] =  ACT_START_TIME;
                $changeLogArray['IN_ACT_START_TIME'] = $changeLog;
            }
        }
        if($incidentDataArrayNew['actEndTime']!= null){
            $actEndTime = $incidentDataArrayNew['actEndTime'];
            $actEndTime = str_replace("/","-",$actEndTime);
            if($actEndTime != $conditions['IN_ACT_END_TIME']){
                $changeLog = array();
                $changeLog['changeContent'] = KOUSINN;
                $changeLog['changeItem'] =  ACT_END_TIME;
                $changeLogArray['IN_ACT_END_TIME'] = $changeLog;
            }
        }
        if($incidentDataArrayNew['actDeptCd']!= null && $incidentDataArrayNew['actDeptCd'] != $conditions['IN_ACT_DEPT_CD']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  ACT_DEPT_CD;
            $changeLogArray['IN_ACT_DEPT_CD'] = $changeLog;
        }
        if($incidentDataArrayNew['actDeptNm']!= null && $incidentDataArrayNew['actDeptNm'] != $conditions['IN_ACT_DEPT_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  ACT_DEPT_NM;
            $changeLogArray['IN_ACT_DEPT_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['actUserId']!= null && $incidentDataArrayNew['actUserId'] != $conditions['IN_ACT_USER_ID']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  ACT_USER_ID;
            $changeLogArray['IN_ACT_USER_ID'] = $changeLog;
        }
        if($incidentDataArrayNew['actUserNm']!= null && $incidentDataArrayNew['actUserNm'] != $conditions['IN_ACT_USER_NM']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  ACT_USER_NM;
            $changeLogArray['IN_ACT_USER_NM'] = $changeLog;
        }
        if($incidentDataArrayNew['actTel']!= null && $incidentDataArrayNew['actTel'] != $conditions['IN_ACT_TEL']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  ACT_TEL;
            $changeLogArray['IN_ACT_TEL'] = $changeLog;
        }
        if($incidentDataArrayNew['actMail']!= null && $incidentDataArrayNew['actMail'] != $conditions['IN_ACT_MAIL']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  ACT_MAIL;
            $changeLogArray['IN_ACT_MAIL'] = $changeLog;
        }
        if($incidentDataArrayNew['actContent']!= null && $incidentDataArrayNew['actContent'] != $conditions['IN_ACT_CONTENT']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  ACT_CONTENT;
            $changeLogArray['IN_ACT_CONTENT'] = $changeLog;
        }
        if($incidentDataArrayNew['productType']!= null && $incidentDataArrayNew['productType'] != $conditions['IN_PRODUCT_TYPE']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  PRODUCT_TYPE;
            $changeLogArray['IN_PRODUCT_TYPE'] = $changeLog;
        }
        if($incidentDataArrayNew['productTrigger']!= null && $incidentDataArrayNew['productTrigger'] != $conditions['IN_PRODUCT_TRIGGER']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  PRODUCT_TRIGGER;
            $changeLogArray['IN_PRODUCT_TRIGGER'] = $changeLog;
        }
        if($incidentDataArrayNew['productHindo']!= null && $incidentDataArrayNew['productHindo'] != $conditions['IN_PRODUCT_HINDO']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  PRODUCT_HINDO;
            $changeLogArray['IN_PRODUCT_HINDO'] = $changeLog;
        }
        if($incidentDataArrayNew['productGensyo']!= null && $incidentDataArrayNew['productGensyo'] != $conditions['IN_PRODUCT_GENSYO']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  PRODUCT_GENSYO;
            $changeLogArray['IN_PRODUCT_GENSYO'] = $changeLog;
        }
        if($incidentDataArrayNew['productStatus']!= null && $incidentDataArrayNew['productStatus'] != $conditions['IN_PRODUCT_STATUS']){
            $changeLog = array();
            $changeLog['changeContent'] = KOUSINN;
            $changeLog['changeItem'] =  PRODUCT_STATUS;
            $changeLogArray['IN_PRODUCT_STATUS'] = $changeLog;
        }

        return $changeLogArray;
    }
    
}

