<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentSaveLogic
//	作成日付・作成者：2017.11.10 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");

require_once('./logic/CommonLogic.php');
require_once('./logic/ChangeLogCreateLogic.php');
require_once('./logic/IncidentStatusLogic.php');

require_once('./model/IdentTIncidentModel.php');
require_once('./model/IdentTIncidentChangeLogModel.php');
require_once('./model/IdentTIncidentRelateUserModel.php');

require_once('./common/CommonService.php');

require_once('./inc/const.php');

require_once('./dto/IncidentSaveResultDto.php');
require_once('./dto/IncidentSaveDto.php');
require_once('./dto/UserDto.php');
require_once('./dto/SectionDto.php');

class IncidentSaveLogic extends CommonLogic {

    public function execute(IncidentSaveDto $IncidentSaveDto) {
        // IncidentSaveResultDtoを作成
        $IncidentSaveResultDto = new IncidentSaveResultDto();
        // 登録用の MultiExecSql　オブジェクトを作成 
        $MultiExecSql = new MultiExecSql();

        // 登録結果 登録処理成功判定フラグを作成 TRUE
        $insertResultFlg = SAVE_TRUE;
        // インシデントIdを取得する
        $incidentId = $IncidentSaveDto->getIncidentInfo()->getIncidentMainInfo()->getIncidentId();

        // 変更履歴モデル(IdentTIncidentChangeLogModel)を作成
        $IdentTIncidentChangeLogModel = new IdentTIncidentChangeLogModel();
        // 関係者モデル(IdentTIncidentRelateUserModel)を作成
        $IdentTIncidentRelateUserModel = new IdentTIncidentRelateUserModel();
        // インシデントモデル(IdentTIncidentModel)を作成
        $IdentTIncidentModel = new IdentTIncidentModel();
        if (isset($incidentId)) {
            // 既存インシデント情報を取得
            $incidentDataOld = $IdentTIncidentModel->findByKey($incidentId);
        }

        // IncidentSaveDtoのパラメータからNewインシデント情報のDtoを取得する
        $incidentDataDtoNew = $IncidentSaveDto->getIncidentInfo()->getIncidentMainInfo();
        // IncidentSaveDtoのパラメータからNewインシデント情報の配列を作成する
        $incidentDataArrayNew = array();
        // インシデント情報のDto⇒インシデント情報の配列に変換する
        $incidentDataArrayNew['incidentId'] = $incidentDataDtoNew->getIncidentId();
        $incidentDataArrayNew['incidentNo'] = $incidentDataDtoNew->getIncidentNo();
        // IncidentStatusLogicを作成
        $incidentStatusLogic = new IncidentStatusLogic();
        $incidentDataArrayNew['incidentStsCd'] = $incidentStatusLogic->createIncidentStsCd($incidentDataDtoNew->getCallContent(), $incidentDataDtoNew->getTaioContent(), $incidentDataDtoNew->getActContent());
        $incidentDataArrayNew['incidentTypeCd'] = $incidentDataDtoNew->getIncidentTypeCd();
        $incidentDataArrayNew['parentIncidentNo'] = $incidentDataDtoNew->getParentIncidentNo();
        $incidentDataArrayNew['incidentStartDateTime'] = $incidentDataDtoNew->getIncidentStartDateTime();
        $incidentDataArrayNew['industryTypeCd'] = $incidentDataDtoNew->getIndustryTypeCd();
        $incidentDataArrayNew['infoSource'] = $incidentDataDtoNew->getInfoSource();
        $incidentDataArrayNew['infoProvider'] = $incidentDataDtoNew->getInfoProvider();
        $incidentDataArrayNew['infoProviderTel'] = $incidentDataDtoNew->getInfoProviderTel();
        $incidentDataArrayNew['memo'] = $incidentDataDtoNew->getMemo();
        $incidentDataArrayNew['kijoId'] = $incidentDataDtoNew->getKijoId();
        $incidentDataArrayNew['kijoNm'] = $incidentDataDtoNew->getKijoNm();
        $incidentDataArrayNew['jigyosyutaiId'] = $incidentDataDtoNew->getJigyosyutaiId();
        $incidentDataArrayNew['jigyosyutaiNm'] = $incidentDataDtoNew->getJigyosyutaiNm();
        $incidentDataArrayNew['setubiId'] = $incidentDataDtoNew->getSetubiId();
        $incidentDataArrayNew['setubiNm'] = $incidentDataDtoNew->getSetubiNm();
        $incidentDataArrayNew['prefId'] = $incidentDataDtoNew->getPrefId();
        $incidentDataArrayNew['prefNm'] = $incidentDataDtoNew->getPrefNm();
        $incidentDataArrayNew['deliveryPjNo'] = $incidentDataDtoNew->getDeliveryPjNo();
        $incidentDataArrayNew['custId'] = $incidentDataDtoNew->getCustId();
        $incidentDataArrayNew['custNm'] = $incidentDataDtoNew->getCustNm();
        $incidentDataArrayNew['custTypeCd'] = $incidentDataDtoNew->getCustTypeCd();
        $incidentDataArrayNew['custTypeNm'] = $incidentDataDtoNew->getCustTypeNm();
        $incidentDataArrayNew['custDept'] = $incidentDataDtoNew->getCustDept();
        $incidentDataArrayNew['requester'] = $incidentDataDtoNew->getRequester();
        $incidentDataArrayNew['contactTel'] = $incidentDataDtoNew->getContactTel();
        $incidentDataArrayNew['contactFax'] = $incidentDataDtoNew->getContactFax();
        $incidentDataArrayNew['contactMail'] = $incidentDataDtoNew->getContactMail();
        if ($incidentDataDtoNew->getSalesDept() != null) {
            $incidentDataArrayNew['salesDeptCd'] = $incidentDataDtoNew->getSalesDept()->getSectionCd();
            $incidentDataArrayNew['salesDeptNm'] = $incidentDataDtoNew->getSalesDept()->getSectionNm();
        }
        if ($incidentDataDtoNew->getSalesUser() != null) {
            $incidentDataArrayNew['salesUserId'] = $incidentDataDtoNew->getSalesUser()->getUserId();
            $incidentDataArrayNew['salesUserNm'] = $incidentDataDtoNew->getSalesUser()->getUserNm();
        }
        if ($incidentDataDtoNew->getSkanDept()) {
            $incidentDataArrayNew['skanDeptCd'] = $incidentDataDtoNew->getSkanDept()->getSectionCd();
            $incidentDataArrayNew['skanDeptNm'] = $incidentDataDtoNew->getSkanDept()->getSectionNm();
        }
        if ($incidentDataDtoNew->getSkanUser()) {
            $incidentDataArrayNew['skanUserId'] = $incidentDataDtoNew->getSkanUser()->getUserId();
            $incidentDataArrayNew['skanUserNm'] = $incidentDataDtoNew->getSkanUser()->getUserNm();
        }
        $incidentDataArrayNew['callStartDate'] = $incidentDataDtoNew->getCallStartDate();
        $incidentDataArrayNew['callEndDate'] = $incidentDataDtoNew->getCallEndDate();
        if ($incidentDataDtoNew->getCallDept() != null) {
            $incidentDataArrayNew['callDeptCd'] = $incidentDataDtoNew->getCallDept()->getSectionCd();
            $incidentDataArrayNew['callDeptNm'] = $incidentDataDtoNew->getCallDept()->getSectionNm();
        }
        if ($incidentDataDtoNew->getCallUser()) {
            $incidentDataArrayNew['callUserId'] = $incidentDataDtoNew->getCallUser()->getUserId();
            $incidentDataArrayNew['callUserNm'] = $incidentDataDtoNew->getCallUser()->getUserNm();
        }
        $incidentDataArrayNew['callTel'] = $incidentDataDtoNew->getCallTel();
        $incidentDataArrayNew['callMail'] = $incidentDataDtoNew->getCallMail();
        $incidentDataArrayNew['callContent'] = $incidentDataDtoNew->getCallContent();
        $incidentDataArrayNew['taioStartDate'] = $incidentDataDtoNew->getTaioStartDate();
        $incidentDataArrayNew['taioEndDate'] = $incidentDataDtoNew->getTaioEndDate();
        if ($incidentDataDtoNew->getTaioDept() != null) {
            $incidentDataArrayNew['taioDeptCd'] = $incidentDataDtoNew->getTaioDept()->getSectionCd();
            $incidentDataArrayNew['taioDeptNm'] = $incidentDataDtoNew->getTaioDept()->getSectionNm();
        }
        if ($incidentDataDtoNew->getTaioUser() != null) {
            $incidentDataArrayNew['taioUserId'] = $incidentDataDtoNew->getTaioUser()->getUserId();
            $incidentDataArrayNew['taioUserNm'] = $incidentDataDtoNew->getTaioUser()->getUserNm();
        }
        $incidentDataArrayNew['taioTel'] = $incidentDataDtoNew->getTaioTel();
        $incidentDataArrayNew['taioMail'] = $incidentDataDtoNew->getTaioMail();
        $incidentDataArrayNew['taioContent'] = $incidentDataDtoNew->getTaioContent();
        $incidentDataArrayNew['actDate'] = $incidentDataDtoNew->getActDate();
        $incidentDataArrayNew['actType'] = $incidentDataDtoNew->getActTypeCd();
        $incidentDataArrayNew['actStartTime'] = $incidentDataDtoNew->getActStartTime();
        $incidentDataArrayNew['actEndTime'] = $incidentDataDtoNew->getActEndTime();
        if ($incidentDataDtoNew->getActDept() != null) {
            $incidentDataArrayNew['actDeptCd'] = $incidentDataDtoNew->getActDept()->getSectionCd();
            $incidentDataArrayNew['actDeptNm'] = $incidentDataDtoNew->getActDept()->getSectionNm();
        }
        if ($incidentDataDtoNew->getActUser() != null) {
            $incidentDataArrayNew['actUserId'] = $incidentDataDtoNew->getActUser()->getUserId();
            $incidentDataArrayNew['actUserNm'] = $incidentDataDtoNew->getActUser()->getUserNm();
        }
        $incidentDataArrayNew['actTel'] = $incidentDataDtoNew->getActTel();
        $incidentDataArrayNew['actMail'] = $incidentDataDtoNew->getActMail();
        $incidentDataArrayNew['actContent'] = $incidentDataDtoNew->getActContent();
        $incidentDataArrayNew['sotiKbnCd'] = $incidentDataDtoNew->getSotiKbnCd();
        $incidentDataArrayNew['sotiKbnNm'] = $incidentDataDtoNew->getSotiKbnNm();
        $incidentDataArrayNew['kisyuKbnCd'] = $incidentDataDtoNew->getKisyuKbnCd();
        $incidentDataArrayNew['kisyuKbnNm'] = $incidentDataDtoNew->getKisyuKbnNm();
        $incidentDataArrayNew['kisyuNm'] = $incidentDataDtoNew->getKisyuNm();
        $incidentDataArrayNew['productTrigger'] = $incidentDataDtoNew->getProductTrigger();
        $incidentDataArrayNew['productHindo'] = $incidentDataDtoNew->getProductHindo();
        $incidentDataArrayNew['productGensyo'] = $incidentDataDtoNew->getProductGensyo();
        $incidentDataArrayNew['productStatus'] = $incidentDataDtoNew->getProductStatus();
        $incidentDataArrayNew['insDate'] = $incidentDataDtoNew->getInsDate();
        $incidentDataArrayNew['insUserId'] = $incidentDataDtoNew->getInsUserId();
        $incidentDataArrayNew['insUserNm'] = $incidentDataDtoNew->getInsUserNm();
        $incidentDataArrayNew['insSectionCd'] = $incidentDataDtoNew->getInsSectionCd();
        $incidentDataArrayNew['insSectionNm'] = $incidentDataDtoNew->getInsSectionNm();
        if ($IncidentSaveDto->getLoginUser() != null) {
            $incidentDataArrayNew['loginUserId'] = $IncidentSaveDto->getLoginUser()->getUserId();
            $incidentDataArrayNew['loginUserNm'] = $IncidentSaveDto->getLoginUser()->getUserNm();
            $incidentDataArrayNew['loginSectionCd'] = $IncidentSaveDto->getLoginUser()->getSectionCd();
            $incidentDataArrayNew['loginSectionNm'] = $IncidentSaveDto->getLoginUser()->getSectionNm();
        }

        // 既存レコードがある（更新処理）
        if ($incidentDataOld != NULL) {
            // 変更履歴の順序の最大値を取得
            $maxSortNoArray = $IdentTIncidentChangeLogModel->getMaxSortNoByIncidentId($incidentId);
            $sortNo = $maxSortNoArray[0]['MAX_SORT_NO'];
            $sortNo = $sortNo + 1;
            // ChangeLogCreateLogicを作成
            $ChangeLogCreateLogic = new ChangeLogCreateLogic();
            // ChangeLogCreateLogicを実行 変更履歴配列($changeLogArray)を作成
            $changeLogArray = $ChangeLogCreateLogic->execute($incidentDataOld, $incidentDataArrayNew);
            // インシデント情報の更新処理
            $insertResultFlg = $IdentTIncidentModel->update($incidentDataArrayNew, $MultiExecSql);
        } else {
            // T_INCIDENT_SEQで新規作成用インシデントIdを取得
            $incidentIdArray = $IdentTIncidentModel->selcetInsertIncidentId();
            // インシデントIdはインシデント情報の配列にセット
            $incidentDataArrayNew['incidentId'] = $incidentIdArray[0]['NEXTVAL'];
            // インシデントIdはセット
            $incidentId = $incidentIdArray[0]['NEXTVAL'];

            // 新規作成用インシデントNoを採番
            $incidentNoArray = $IdentTIncidentModel->selcetInsertIncidentNo($incidentDataArrayNew, $MultiExecSql);
            if ($incidentNoArray && is_array($incidentNoArray) && count($incidentNoArray) > 0) {
                // インシデントIdはインシデント情報の配列にセット
                $incidentDataArrayNew['incidentNo'] = $incidentNoArray[0]['INCIDENT_NO'];
            } else {
                // 発番失敗
                // 登録結果FALSE($insertResultFlg)⇒IncidentSaveResultDtoのセット
                $IncidentSaveResultDto->setReturnRst(SAVE_FALSE);
                // インシデントID NULL ($incidentId)⇒IncidentSaveResultDtoのセット
                $IncidentSaveResultDto->setIncidentId(NULL);
                // MultiExecSql　オブジェクトのrollback()を実行
                $MultiExecSql->rollback();
                // 戻りオブジェクト(IncidentSaveResultDto)
                return $IncidentSaveResultDto;
            }

            // インシデント情報の登録処理
            $insertResultFlg = $IdentTIncidentModel->insert($incidentDataArrayNew, $MultiExecSql);

            // 変更履歴配列($changeLogArray)を作成
            $changeLogArray[0]['changeItem'] = SINKI_SAKUSEI;
            $sortNo = SORT_NO_FIRST;
        }

        // 登録処理成功判定フラグ FALSE
        if ($insertResultFlg == SAVE_FALSE) {
            // 登録結果FALSE($insertResultFlg)⇒IncidentSaveResultDtoのセット
            $IncidentSaveResultDto->setReturnRst(SAVE_FALSE);
            // インシデントID NULL ($incidentId)⇒IncidentSaveResultDtoのセット
            $IncidentSaveResultDto->setIncidentId(NULL);
            // MultiExecSql　オブジェクトのrollback()を実行
            $MultiExecSql->rollback();
            // 戻りオブジェクト(IncidentSaveResultDto)
            return $IncidentSaveResultDto;
        }

        // インシデント関係者Newのデータを取得
        $relateUserNew = $IncidentSaveDto->getIncidentInfo()->getIncidentMainInfo()->getRelateList();

        // 設置 インシデント関係者Newのデータ 有無のFlg 
        $RelateUserFlg = RELATE_USER_FLG_FALSE;
        foreach ($relateUserNew as $one) {
            if ($one != NULL) {
                $RelateUserFlg = RELATE_USER_FLG_TRUE;
                break;
            }
        }

        // インシデント関係者Newのデータ 有
        if ($RelateUserFlg == RELATE_USER_FLG_TRUE) {
            // インシデント関係者のデータArray($IncidentSaveDtoを取得)
            $relateUserArrayNew = array();
            foreach ($relateUserNew as $relateUser) {
                $relateUserArray = array();

                $relateUserArray['userId'] = $relateUser->getUserId();
                $relateUserArray['userNm'] = $relateUser->getUserNm();
                $relateUserArray['sectionCd'] = $relateUser->getSectionCd();
                $relateUserArray['sectionNm'] = $relateUser->getSectionNm();
                if ($relateUserArray['userId'] != null) {
                    $relateUserArrayNew[] = $relateUserArray;
                }
            }

            // 既存関係者情報を取得
            $RelateUserOld = $IdentTIncidentRelateUserModel->getByIncidentId($incidentId, null);

            // 既存インシデント関係者のデータArray
            $relateUserArrayOld = array();
            foreach ($RelateUserOld as $one) {
                $relateUserArray = array();

                $relateUserArray['relateId'] = $one['RELATE_ID'];
                $relateUserArray['userId'] = $one['RELATE_USER_ID'];
                $relateUserArray['userNm'] = $one['RELATE_USER_NM'];
                $relateUserArray['sectionCd'] = $one['RELATE_USER_SECTION_CD'];
                $relateUserArray['sectionNm'] = $one['RELATE_USER_SECTION_NM'];
                if ($relateUserArray['userId'] != null) {
                    $relateUserArrayOld[] = $relateUserArray;
                }
            }

            // 関係者情報の配列を作成する（更新用）
            $relateUserArrayUpdate = array();
            // 関係者情報の配列を作成する（登録用）
            $relateUserArrayInsert = array();

            // 関係者情報の配列設置用flg UPDATEの場合はTRUE 
            $relateUserUpdateFlg = RELATE_USER_FLG_FALSE;
            //　関係者情報の配列（更新用）　と　関係者情報の配列（登録用）　をセット値
            foreach ($relateUserArrayNew as $new) {
                $relateId = null;
                foreach ($relateUserArrayOld as $old) {
                    if ($new['userId'] == $old['userId']) {
                        $relateUserUpdateFlg = RELATE_USER_FLG_TRUE;
                        $relateId = $old['relateId'];
                    }
                }

                $new['relateId'] = $relateId;
                $new['loginUserId'] = $incidentDataArrayNew['loginUserId'];
                $new['loginUserNm'] = $incidentDataArrayNew['loginUserNm'];
                $new['loginSectionCd'] = $incidentDataArrayNew['loginSectionCd'];
                $new['loginSectionNm'] = $incidentDataArrayNew['loginSectionNm'];
                $new['delFlg'] = DEL_FLG_SURVIVAL;
                if ($relateUserUpdateFlg == true) {
                    $relateUserArrayUpdate[] = $new;
                } else {
                    $new['incidentId'] = $incidentDataArrayNew['incidentId'];
                    $relateUserArrayInsert[] = $new;
                }
                $relateUserUpdateFlg = RELATE_USER_FLG_FALSE;
            }

            // IdentTIncidentRelateUserModelのupdateを実施
            foreach ($relateUserArrayUpdate as $one) {
                if (isset($one)) {
                    // IdentTIncidentRelateUserModelのupdateを実施 関係者テーブル更新Flg
                    $RelateUserUpdateResultFlg = $IdentTIncidentRelateUserModel->update($one, $MultiExecSql);
                }
                // 関係者テーブル更新Flg 失敗の場合
                if ($RelateUserUpdateResultFlg == SAVE_FALSE) {
                    // 登録結果FALSE($insertResultFlg)⇒IncidentSaveResultDtoのセット
                    $IncidentSaveResultDto->setReturnRst(SAVE_FALSE);
                    // インシデントID NULL ($incidentId)⇒IncidentSaveResultDtoのセット
                    $IncidentSaveResultDto->setIncidentId(NULL);
                    // MultiExecSql　オブジェクトのrollback()を実行
                    $MultiExecSql->rollback();
                    // 戻りオブジェクト(IncidentSaveResultDto)
                    return $IncidentSaveResultDto;
                }
            }

            // IdentTIncidentRelateUserModelのinsertを実施
            foreach ($relateUserArrayInsert as $one) {
                if (isset($one)) {
                    $one['incidentId'] = $incidentDataArrayNew['incidentId'];
                    // IdentTIncidentRelateUserModelのinsertを実施 関係者テーブル登録Flg
                    $RelateUserInsertResultFlg = $IdentTIncidentRelateUserModel->insert($one, $MultiExecSql);
                }
                // 関係者テーブル登録Flg 失敗の場合
                if ($RelateUserInsertResultFlg == SAVE_FALSE) {
                    // 登録結果FALSE($insertResultFlg)⇒IncidentSaveResultDtoのセット
                    $IncidentSaveResultDto->setReturnRst(SAVE_FALSE);
                    // インシデントID NULL ($incidentId)⇒IncidentSaveResultDtoのセット
                    $IncidentSaveResultDto->setIncidentId(NULL);
                    // MultiExecSql　オブジェクトのrollback()を実行
                    $MultiExecSql->rollback();
                    // 戻りオブジェクト(IncidentSaveResultDto)
                    return $IncidentSaveResultDto;
                }
            }
        }

        // IdentTIncidentChangeLogModelのinsertを実施
        foreach ($changeLogArray as $one) {

            $one['incidentId'] = $incidentDataArrayNew['incidentId'];
            $one['loginUserId'] = $incidentDataArrayNew['loginUserId'];
            $one['loginUserNm'] = $incidentDataArrayNew['loginUserNm'];
            $one['sortNo'] = $sortNo;
            $one['loginSectionCd'] = $incidentDataArrayNew['loginSectionCd'];
            $one['loginSectionNm'] = $incidentDataArrayNew['loginSectionNm'];

            if (isset($one)) {
                $changeLogIndertFlg = $IdentTIncidentChangeLogModel->insert($one, $MultiExecSql);
            }
            // 変更履歴テーブル登録Flg 失敗の場合
            if ($changeLogIndertFlg == SAVE_FALSE) {
                // 登録結果FALSE($insertResultFlg)⇒IncidentSaveResultDtoのセット
                $IncidentSaveResultDto->setReturnRst(SAVE_FALSE);
                // インシデントID NULL ($incidentId)⇒IncidentSaveResultDtoのセット
                $IncidentSaveResultDto->setIncidentId(NULL);
                // MultiExecSql　オブジェクトのrollback()を実行
                $MultiExecSql->rollback();
                // 戻りオブジェクト(IncidentSaveResultDto)
                return $IncidentSaveResultDto;
            }
        }
        // MultiExecSql　オブジェクトのcommit()を実行
        $MultiExecSql->commit();
        // 登録結果($insertResultFlg)⇒IncidentSaveResultDtoのセット
        $IncidentSaveResultDto->setReturnRst($insertResultFlg);
        // インシデントID($incidentId)⇒IncidentSaveResultDtoのセット
        $IncidentSaveResultDto->setIncidentId($incidentId);

        // 戻りオブジェクト(IncidentSaveResultDto)
        return $IncidentSaveResultDto;
    }

}
