<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileGetLogic
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");

require_once('./logic/CommonLogic.php');

require_once('./model/IdentTFileModel.php');

require_once('./common/CommonService.php');

require_once('./inc/const.php');

require_once('./dto/FileGetDto.php');
require_once('./dto/FileGetResultDto.php');
require_once('./dto/FileDto.php');
require_once('./dto/CommonDto.php');

class FileGetLogic extends CommonLogic {

    public function execute(FileGetDto $fileGetDto) {
        // 戻りオブジェクト(FileGetResultDto)を作成
        $fileGetResultDto = new FileGetResultDto();
        // FileDtoを作成
        $fileDto = new FileDto();

        // ファイルIDを取得する
        $fileId = $fileGetDto->getFileId();

        try {
            // ファイルテーブルモデルを作成
            $identTFileModel = new IdentTFileModel();

            // ファイル情報を取得
            $fileData = $identTFileModel->findByKey($fileId);
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $fileGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(FileGetResultDto)
            return $fileGetResultDto;
        }

        // 戻り値の設定
        // ファイル情報をFileDtoにセット
        if ($fileData[0]) {
            $fileDto->setFileId($fileData[0]['FILE_ID']);                // ファイルID(Sequence)
            $fileDto->setIncidentId($fileData[0]['INCIDENT_ID']);        // インシデントID
            $fileDto->setFileNm($fileData[0]['FILE_NAME']);              // ファイル名
            $fileDto->setFilePath($fileData[0]['FILE_PATH']);            // ファイルパス
            $fileDto->setFsvrNm($fileData[0]['FSVR_NAME']);              // 実ファイル名
            $fileDto->setInsUserId($fileData[0]['FILE_INS_USER_ID']);         // 新規登録者ID
            $fileDto->setInsUserNm($fileData[0]['FILE_INS_USER_NAME']);       // 新規登録者名
            $fileDto->setInsSectionCd($fileData[0]['FILE_INS_SECTION_CD']);   // 新規登録者部署CD
            $fileDto->setInsSectionNm($fileData[0]['FILE_INS_SECTION_NAME']); // 新規登録者部署名
            $fileDto->setInsDate($fileData[0]['FILE_INS_DATE']);              // 新規登録日
            $fileDto->setUpdUserId($fileData[0]['FILE_UPD_USER_ID']);         // 最終更新者ID
            $fileDto->setUpdUserNm($fileData[0]['FILE_UPD_USER_NAME']);       // 最終更新者名
            $fileDto->setUpdSectionCd($fileData[0]['FILE_UPD_SECTION_CD']);   // 最終更新者部署CD
            $fileDto->setUpdSectionNm($fileData[0]['FILE_UPD_SECTION_NAME']); // 最終更新者部署名
            $fileDto->setUpdDate($fileData[0]['FILE_UPD_DATE']);              // 最終更新日
        }

        // FileDtoをセット
        $fileGetResultDto->setFileData($fileDto);
        // LOGIC結果　正常時 '0' をセット
        $fileGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);

        // 戻りオブジェクト(FileGetResultDto)
        return $fileGetResultDto;
    }

}
