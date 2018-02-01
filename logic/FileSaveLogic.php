<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileSaveLogic
//	作成日付・作成者：2018.01.29 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");

require_once('./logic/CommonLogic.php');

require_once('./model/IdentTFileModel.php');

require_once('./common/CommonService.php');

require_once('./inc/const.php');

require_once('./dto/FileSaveDto.php');
require_once('./dto/FileSaveResultDto.php');
require_once('./dto/FileDto.php');

class FileSaveLogic extends CommonLogic {

    public function execute(FileSaveDto $fileSaveDto) {
        // IncidentSaveResultDtoを作成
        $fileSaveResultDto = new FileSaveResultDto();
        // 登録用の MultiExecSql　オブジェクトを作成 
        $MultiExecSql = new MultiExecSql();

        // 登録結果 登録処理成功判定フラグを作成 TRUE
        $insertResultFlg = SAVE_TRUE;
        // ファイルリストを取得する
        $fileList = $fileSaveDto->getFileList();

        // インシデントモデル(IdentTFileModel)を作成
        $identTFileModel = new IdentTFileModel();

        foreach ($fileList as $fileData) {

            if ($fileData->getFileId()) {
                // 既存インシデント情報を取得
                $oldData = $identTFileModel->findByKey($fileData->getFileId());
            }

            // IncidentSaveDtoのパラメータからNewインシデント情報の配列を作成する
            $newDataArray = array();
            // インシデント情報のDto⇒インシデント情報の配列に変換する
            $newDataArray['fileId'] = $fileData->getFileId();
            $newDataArray['incidentId'] = $fileData->getIncidentId();
            $newDataArray['fileNm'] = $fileData->getFileNm();
            $newDataArray['filePath'] = $fileData->getFilePath();
            $newDataArray['fsvrNm'] = $fileData->getFsvrNm(); // 実ファイル名

            if ($fileSaveDto->getLoginUser() != null) {
                $newDataArray['loginUserId'] = $fileSaveDto->getLoginUser()->getUserId();
                $newDataArray['loginUserNm'] = $fileSaveDto->getLoginUser()->getUserNm();
                $newDataArray['loginSectionCd'] = $fileSaveDto->getLoginUser()->getSectionCd();
                $newDataArray['loginSectionNm'] = $fileSaveDto->getLoginUser()->getSectionNm();
            }

            // 既存レコードがある（更新処理）
            if ($oldData != NULL) {
                // ファイル情報の更新処理
                $saveResultFlg = $identTFileModel->update($newDataArray, $MultiExecSql);
            } else {
                // インシデント情報の新規登録処理
                $saveResultFlg = $identTFileModel->insert($newDataArray, $MultiExecSql);
            }

            if (!$saveResultFlg) {
                $insertResultFlg = SAVE_FALSE;
            }
        }

        // 登録処理成功判定フラグ FALSE
        if ($insertResultFlg == SAVE_FALSE) {
            // 登録結果FALSE($fileSaveResultDto)⇒FileSaveResultDtoのセット
            $fileSaveResultDto->setReturnRst(SAVE_FALSE);
            // MultiExecSql　オブジェクトのrollback()を実行
            $MultiExecSql->rollback();
            // 戻りオブジェクト(FileSaveResultDto)
            return $fileSaveResultDto;
        }

        // MultiExecSql　オブジェクトのcommit()を実行
        $MultiExecSql->commit();
        // 登録結果($fileSaveResultDto)⇒FileSaveResultDto
        $fileSaveResultDto->setReturnRst($insertResultFlg);

        // 戻りオブジェクト(FileSaveResultDto)
        return $fileSaveResultDto;
    }

}
