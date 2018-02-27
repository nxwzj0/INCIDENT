<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileDeleteSaveLogic
//	作成日付・作成者：2018.02.13 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");

require_once('./logic/CommonLogic.php');

require_once('./model/IdentTFileModel.php');

require_once('./common/CommonService.php');

require_once('./inc/const.php');

require_once('./dto/FileDeleteSaveDto.php');
require_once('./dto/FileDeleteSaveResultDto.php');

class FileDeleteSaveLogic extends CommonLogic {

    public function execute(FileDeleteSaveDto $fileDeleteSaveDto) {
        // FileDeleteSaveResultDtoを作成
        $fileDeleteSaveResultDto = new FileDeleteSaveResultDto();
        // 登録用の MultiExecSql　オブジェクトを作成 
        $MultiExecSql = new MultiExecSql();

        // 登録結果 登録処理成功判定フラグを作成 TRUE
        $updateResultFlg = SAVE_TRUE;

        $fileId = $fileDeleteSaveDto->getFileId();

        // インシデントモデル(IdentTFileModel)を作成
        $identTFileModel = new IdentTFileModel();

        try {
            // ファイル情報を取得
            $oldData = $identTFileModel->findByKey($fileId);
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $fileDeleteSaveResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(FileDeleteSaveResultDto)
            return $fileDeleteSaveResultDto;
        }

        // FileDeleteSaveDtoのパラメータから情報の配列を作成する
        $dataArray = array();
        // インシデント情報のDto⇒インシデント情報の配列に変換する
        $dataArray['fileId'] = $fileId;

        if ($fileDeleteSaveDto->getLoginUser() != null) {
            $dataArray['loginUserId'] = $fileDeleteSaveDto->getLoginUser()->getUserId();
            $dataArray['loginUserNm'] = $fileDeleteSaveDto->getLoginUser()->getUserNm();
            $dataArray['loginSectionCd'] = $fileDeleteSaveDto->getLoginUser()->getSectionCd();
            $dataArray['loginSectionNm'] = $fileDeleteSaveDto->getLoginUser()->getSectionNm();
        }

        // 既存レコードがある（更新処理）
        if ($oldData != NULL) {
            $dataArray['delFlg'] = '1';
            // ファイル情報の更新処理
            $saveResultFlg = $identTFileModel->update($dataArray, $MultiExecSql);
        }

        if (!$saveResultFlg) {
            $updateResultFlg = SAVE_FALSE;
        }

        // 登録処理成功判定フラグ FALSE
        if ($updateResultFlg == SAVE_FALSE) {
            // 登録結果FALSE($fileDeleteSaveResultDto)⇒FileDeleteSaveResultDtoのセット
            $fileDeleteSaveResultDto->setReturnRst(SAVE_FALSE);
            // MultiExecSql　オブジェクトのrollback()を実行
            $MultiExecSql->rollback();
            // 戻りオブジェクト(FileSaveResultDto)
            return $fileDeleteSaveResultDto;
        }

        // MultiExecSql　オブジェクトのcommit()を実行
        $MultiExecSql->commit();
        // 登録結果($fileSaveResultDto)⇒FileSaveResultDto
        $fileDeleteSaveResultDto->setReturnRst($updateResultFlg);

        // 戻りオブジェクト(FileSaveResultDto)
        return $fileDeleteSaveResultDto;
    }

}
