<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentGetLogic
//	作成日付・作成者：2017.11.07 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");
require_once('./logic/CommonLogic.php');
require_once('./dto/LinkRelationDto.php');
require_once('./dto/IncidentMainDto.php');

class DtoCreateLogic extends CommonLogic{

    public function createLinkRelationDto($incidentData) {
        
        // プロジェクト情報を作成
        $pjInfo = array();
        // MR2情報を作成
        $mr2Info = array();
        // 事故クレーム情報を作成
        $jikoInfo = array();
        // 費用決裁申請情報を作成
        $hiyoInfo = array();

        // プロジェクト情報をセット値
        $pjInfo['PJ_PJ_NO'] = $incidentData['PJ_PJ_NO'];
        $pjInfo['PJ_INCIDENT_ID'] = $incidentData['PJ_INCIDENT_ID'];
        $pjInfo['PJ_PJ_NM'] = $incidentData['PJ_PJ_NM'];
        $pjInfo['PJ_MAIN_KIJO_ID'] = $incidentData['PJ_MAIN_KIJO_ID'];
        $pjInfo['PJ_MAIN_KIJO_NM'] = $incidentData['PJ_MAIN_KIJO_NM'];
        $pjInfo['PJ_PJ_SKAN_USER_ID'] = $incidentData['PJ_PJ_SKAN_USER_ID'];
        $pjInfo['PJ_PJ_SKAN_USER_NM'] = $incidentData['PJ_PJ_SKAN_USER_NM'];
        $pjInfo['PJ_PM_ID'] = $incidentData['PJ_PM_ID'];
        $pjInfo['PJ_PM_NM'] = $incidentData['PJ_PM_NM'];
        $pjInfo['PJ_PREF_NM'] = $incidentData['PJ_PREF_NM'];

        // MR2情報をセット値
        $mr2Info['MR2_MKB_ID'] = $incidentData['MR2_MKB_ID'];
        $mr2Info['MR2_INCIDENT_ID'] = $incidentData['MR2_INCIDENT_ID'];
        $mr2Info['MR2_SUBJECT_NM'] = $incidentData['MR2_SUBJECT_NM'];
        $mr2Info['MR2_IRAIMOTO_TANTO_NM'] = $incidentData['MR2_IRAIMOTO_TANTO_NM'];
        $mr2Info['MR2_MAKE_DATE'] = $incidentData['MR2_MAKE_DATE'];
        $mr2Info['MR2_WORK_TANTO_ID'] = $incidentData['MR2_WORK_TANTO_ID'];
        $mr2Info['MR2_WORK_TANTO_NM'] = $incidentData['MR2_WORK_TANTO_NM'];

        // 事故クレーム情報をセット値
        $jikoInfo['JIKO_JIKO_ID'] = $incidentData['JIKO_JIKO_ID'];
        $jikoInfo['JIKO_INCIDENT_ID'] = $incidentData['JIKO_INCIDENT_ID'];
        $jikoInfo['JIKO_INCIDENT_ID'] = $incidentData['JIKO_INCIDENT_ID'];
        $jikoInfo['JIKO_LAST_REPORT_FLG'] = $incidentData['JIKO_LAST_REPORT_FLG'];
        $jikoInfo['JIKO_GAIYO'] = $incidentData['JIKO_GAIYO'];
        $jikoInfo['JIKO_KIJO_ID'] = $incidentData['JIKO_KIJO_ID'];
        $jikoInfo['JIKO_KIJO_NM'] = $incidentData['JIKO_KIJO_NM'];
        $jikoInfo['JIKO_JIKO_TYPE_CD'] = $incidentData['JIKO_JIKO_TYPE_CD'];
        $jikoInfo['JIKO_JIKO_TYPE_NM'] = $incidentData['JIKO_JIKO_TYPE_NM'];
        $jikoInfo['JIKO_CUST_ID'] = $incidentData['JIKO_CUST_ID'];
        $jikoInfo['JIKO_CUST_NM'] = $incidentData['JIKO_CUST_NM'];
        $jikoInfo['JIKO_HAKKO_DAY'] = $incidentData['JIKO_HAKKO_DAY'];
        $jikoInfo['JIKO_HAKKOMOTO_SEC_CD'] = $incidentData['JIKO_HAKKOMOTO_SEC_CD'];
        $jikoInfo['JIKO_HAKKOMOTO_SEC_NM'] = $incidentData['JIKO_HAKKOMOTO_SEC_NM'];

        // 費用決裁申請情報をセット値
        $hiyoInfo['HIYO_HIYO_ID'] = $incidentData['HIYO_HIYO_ID'];
        $hiyoInfo['HIYO_INCIDENT_ID'] = $incidentData['HIYO_INCIDENT_ID'];
        $hiyoInfo['HIYO_KUBUN_NM'] = $incidentData['HIYO_KUBUN_NM'];
        $hiyoInfo['HIYO_SUBJECT_NM'] = $incidentData['HIYO_SUBJECT_NM'];
        $hiyoInfo['HIYO_STS_NM'] = $incidentData['HIYO_STS_NM'];
        $hiyoInfo['HIYO_KESSAI_NO'] = $incidentData['HIYO_KESSAI_NO'];
        $hiyoInfo['HIYO_GAISAN_AMOUNT'] = $incidentData['HIYO_GAISAN_AMOUNT'];

        // 関連リンク情報(LinkRelationDto)を作成
        $LinkRelationDto = new LinkRelationDto();
        if (isset($pjInfo['PJ_INCIDENT_ID']) && $pjInfo['PJ_INCIDENT_ID'] != '') {
            $LinkRelationDto->setPjInfo($pjInfo); // 関連リンク情報にプロジェクト情報をセット
        }
        if (isset($mr2Info['MR2_INCIDENT_ID']) && $mr2Info['MR2_INCIDENT_ID'] != '') {
            $LinkRelationDto->setMr2Info($mr2Info); // MR2情報にプロジェクト情報をセット
        }
        if (isset($jikoInfo['JIKO_INCIDENT_ID']) && $jikoInfo['JIKO_INCIDENT_ID'] != '') {
            $LinkRelationDto->setJikoInfo($jikoInfo); // 事故クレーム情報にプロジェクト情報をセット
        }
        if (isset($hiyoInfo['HIYO_INCIDENT_ID']) && $hiyoInfo['HIYO_INCIDENT_ID'] != '') {
            $LinkRelationDto->setHiyoInfo($hiyoInfo); // 費用決裁申請情報にプロジェクト情報をセット
        }

        return $LinkRelationDto;
    }

    public function createIncidentMainDto($incidentData) {
        // インシデントメイン情報(IncidentMainDto)を作成
        $IncidentMainDto = new IncidentMainDto();
        
        $IncidentMainDto->setIncidentId($incidentData['IN_INCIDENT_ID']);//インシデントID
        $IncidentMainDto->setIncidentNo($incidentData['IN_INCIDENT_NO']);//インシデント番号
        $IncidentMainDto->setIncidentStsCd($incidentData['IN_INCIDENT_STS']);//インシデントステータスコード
        // CommonServiceを作成
        $CommonService = new CommonService();
        $incidentStsNm = $CommonService->getConstArrayString(unserialize(INCIDENT_STS),$IncidentMainDto->getIncidentStsCd());// インシデントステータス名を取得
        $IncidentMainDto->setIncidentStsNm($incidentStsNm);// インシデントステータス名
        $IncidentMainDto->setIncidentTypeCd($incidentData['IN_INCIDENT_TYPE_CD']);//インシデント分類コード
        $incidentTypeNm = $CommonService->getConstArrayString(unserialize(INCIDENT_TYPE),$IncidentMainDto->getIncidentTypeCd());// インシデント分類名を取得
        $IncidentMainDto->setIncidentTypeNm($incidentTypeNm);// インシデント分類名
        $IncidentMainDto->setParentIncidentNo($incidentData['IN_PARENT_INCIDENT_NO']);//親インシデント番号
        $IncidentMainDto->setIncidentStartDateTime($incidentData['IN_INCIDENT_START_DATETIME']);//発生日時
        $IncidentMainDto->setIndustryTypeCd($incidentData['IN_INDUSTRY_TYPE_CD']);//業種区分
        $IncidentMainDto->setInfoSource($incidentData['IN_INFO_SOURCE']);//情報提供元
        $IncidentMainDto->setInfoProvider($incidentData['IN_INFO_PROVIDER']);//情報提供者名
        $IncidentMainDto->setInfoProviderTel($incidentData['IN_INFO_PROVIDER_TEL']);//情報提供TEL
        $IncidentMainDto->setMemo($incidentData['IN_MEMO']);//注記
        $IncidentMainDto->setKijoId($incidentData['IN_KIJO_ID']);//機場ID
        $IncidentMainDto->setKijoNm($incidentData['IN_KIJO_NM']);//機場名
        $IncidentMainDto->setJigyosyutaiId($incidentData['IN_JIGYOSYUTAI_ID']);//事業主体ID
        $IncidentMainDto->setJigyosyutaiNm($incidentData['IN_JIGYOSYUTAI_NM']);//事業主体名
        $IncidentMainDto->setSetubiId($incidentData['IN_SETUBI_ID']);//設備ID
        $IncidentMainDto->setSetubiNm($incidentData['IN_SETUBI_NM']);//設備名
        $IncidentMainDto->setPrefNm($incidentData['IN_PREF_NM']);//都道府県名
        $IncidentMainDto->setDeliveryPjNo($incidentData['IN_DELIVERY_PJ_NO']);//納入プロジェクト番号
        $IncidentMainDto->setCustId($incidentData['IN_CUST_ID']);//顧客ID
        $IncidentMainDto->setCustNm($incidentData['IN_CUST_NM']);//顧客名
        $IncidentMainDto->setCustTypeCd($incidentData['IN_CUST_TYPE_CD']);//顧客分類CD
        $IncidentMainDto->setCustTypeNm($incidentData['IN_CUST_TYPE_NM']);//顧客分類名
        $IncidentMainDto->setCustDept($incidentData['IN_CUST_DEPT']);//会社名・所属部署
        $IncidentMainDto->setRequester($incidentData['IN_REQUESTER']);//依頼者名
        $IncidentMainDto->setContactTel($incidentData['IN_CONTACT_TEL']);//連絡先(TEL)
        $IncidentMainDto->setContactFax($incidentData['IN_CONTACT_FAX']);//連絡先(FAX)
        $IncidentMainDto->setContactMail($incidentData['IN_CONTACT_MAIL']);//連絡先(E-mail)
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($incidentData['IN_SALES_DEPT_CD']);
        $SectionDto->setSectionNm($incidentData['IN_SALES_DEPT_NM']);
        $IncidentMainDto->setSalesDept($SectionDto);//営業部門
        $UserDto = new UserDto();
        $UserDto->setUserId($incidentData['IN_SALES_USER_ID']);
        $UserDto->setUserNm($incidentData['IN_SALES_USER_NM']);
        $IncidentMainDto->setSalesUser($UserDto);//営業担当者
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($incidentData['IN_SKAN_DEPT_CD']);
        $SectionDto->setSectionNm($incidentData['IN_SKAN_DEPT_NM']);
        $IncidentMainDto->setSkanDept($SectionDto);//主管部門
        $UserDto = new UserDto();
        $UserDto->setUserId($incidentData['IN_SKAN_USER_ID']);
        $UserDto->setUserNm($incidentData['IN_SKAN_USER_NM']);
        $IncidentMainDto->setSkanUser($UserDto);//主管担当者
        $IncidentMainDto->setCallDate($incidentData['IN_CALL_START_DATE']);//受付日
        $IncidentMainDto->setCallStartDate($incidentData['IN_CALL_START_DATE']);//受付開始時刻
        $IncidentMainDto->setCallEndDate($incidentData['IN_CALL_END_DATE']);//受付終了時刻
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($incidentData['IN_CALL_DEPT_CD']);
        $SectionDto->setSectionNm($incidentData['IN_CALL_DEPT_NM']);
        $IncidentMainDto->setCallDept($SectionDto);//受付部署
        $UserDto = new UserDto();
        $UserDto->setUserId($incidentData['IN_CALL_USER_CD']);
        $UserDto->setUserNm($incidentData['IN_CALL_USER_NM']);
        $IncidentMainDto->setCallUser($UserDto);//受付者
        $IncidentMainDto->setCallTel($incidentData['IN_CALL_TEL']);//受付電話番号
        $IncidentMainDto->setCallMail($incidentData['IN_CALL_MAIL']);//受付メール
        $IncidentMainDto->setCallContent($incidentData['IN_CALL_CONTENT']);//受付内容
        $IncidentMainDto->setTaioDate($incidentData['IN_TAIO_START_DATE']);//対応日
        $IncidentMainDto->setTaioStartDate($incidentData['IN_TAIO_START_DATE']);//対応開始時刻
        $IncidentMainDto->setTaioEndDate($incidentData['IN_TAIO_END_DATE']);//対応終了時刻
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($incidentData['IN_TAIO_DEPT_CD']);
        $SectionDto->setSectionNm($incidentData['IN_TAIO_DEPT_NM']);
        $IncidentMainDto->setTaioDept($SectionDto);//対応部署
        $UserDto = new UserDto();
        $UserDto->setUserId($incidentData['IN_TAIO_USER_ID']);
        $UserDto->setUserNm($incidentData['IN_TAIO_USER_NM']);
        $IncidentMainDto->setTaioUser($UserDto);//対応者
        $IncidentMainDto->setTaioTel($incidentData['IN_TAIO_TEL']);//対応電話番号
        $IncidentMainDto->setTaioMail($incidentData['IN_TAIO_MAIL']);//対応メール
        $IncidentMainDto->setTaioContent($incidentData['IN_TAIO_CONTENT']);//対応内容
        $IncidentMainDto->setActDate($incidentData['IN_ACT_DATE']);//処置予定日
        $IncidentMainDto->setActTypeCd($incidentData['IN_ACT_TYPE_CD']);//処置区分CD
        $actTypeNm = $CommonService->getConstArrayString(unserialize(ACT_TYPE_NAME),$incidentData['IN_ACT_TYPE_CD']);// 処置区分名を取得
        $IncidentMainDto->setActTypeNm($actTypeNm);//処置区分名
        $IncidentMainDto->setActStartTime($incidentData['IN_ACT_START_TIME']);//処置開始日時
        $IncidentMainDto->setActEndTime($incidentData['IN_ACT_END_TIME']);//処置終了日時
        $SectionDto = new SectionDto();
        $SectionDto->setSectionCd($incidentData['IN_ACT_DEPT_CD']);
        $SectionDto->setSectionNm($incidentData['IN_ACT_DEPT_NM']);
        $IncidentMainDto->setActDept($SectionDto);//処置部署
        $UserDto = new UserDto();
        $UserDto->setUserId($incidentData['IN_ACT_USER_ID']);
        $UserDto->setUserNm($incidentData['IN_ACT_USER_NM']);
        $IncidentMainDto->setActUser($UserDto);//処置者
        $IncidentMainDto->setActTel($incidentData['IN_ACT_TEL']);//処置電話番号
        $IncidentMainDto->setActMail($incidentData['IN_ACT_MAIL']);//処置メール
        $IncidentMainDto->setActContent($incidentData['IN_ACT_CONTENT']);//処置内容 
        $IncidentMainDto->setSotiKbnCd($incidentData['IN_SOTI_KBN_CD']);//装置区分CD
        $IncidentMainDto->setSotiKbnNm($incidentData['IN_SOTI_KBN_NM']);//装置区分名
        $IncidentMainDto->setKisyuKbnCd($incidentData['IN_KISYU_KBN_CD']);//機種区分CD
        $IncidentMainDto->setKisyuKbnNm($incidentData['IN_KISYU_KBN_NM']);//機種区分名
        $IncidentMainDto->setKisyuNm($incidentData['IN_KISYU_NM']);//機種名
        $IncidentMainDto->setProductTrigger($incidentData['IN_PRODUCT_TRIGGER']);//障害状況トリガー
        $IncidentMainDto->setProductHindo($incidentData['IN_PRODUCT_HINDO']);//障害状況頻度
        $IncidentMainDto->setProductGensyo($incidentData['IN_PRODUCT_GENSYO']);//障害状況現象
        $IncidentMainDto->setProductStatus($incidentData['IN_PRODUCT_STATUS']);//障害状況状態
        $IncidentMainDto->setInsDate($incidentData['IN_INS_DATE']);//新規登録日
        $IncidentMainDto->setInsUserId($incidentData['IN_INS_USER_ID']);//新規登録者ID
        $IncidentMainDto->setInsUserNm($incidentData['IN_INS_USER_NAME']);//新規登録者名
        $IncidentMainDto->setInsSectionCd($incidentData['IN_INS_SECTION_CD']);//新規登録者部署CD
        $IncidentMainDto->setInsSectionNm($incidentData['IN_INS_SECTION_NAME']);//新規登録者部署名
        $IncidentMainDto->setUpdDate($incidentData['IN_UPD_DATE']);//最終更新日
        $IncidentMainDto->setUpdUserId($incidentData['IN_UPD_USER_ID']);//最終更新者ID
        $IncidentMainDto->setUpdUserNm($incidentData['IN_UPD_USER_NAME']);//最終更新者名
        $IncidentMainDto->setUpdSectionCd($incidentData['IN_UPD_SECTION_CD']);//最終更新者部署CD
        $IncidentMainDto->setUpdSectionNm($incidentData['IN_UPD_SECTION_NAME']);//最終更新者部署名
        
        return $IncidentMainDto;
    }
}
