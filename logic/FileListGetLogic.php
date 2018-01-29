<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileListGetLogic
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once("./env.inc");
// 共通処理読み込み
require_once('./logic/CommonLogic.php');
// 共通処理読み込み
require_once('./common/CommonService.php');
// model処理読み込み
require_once('./model/IdentTFileModel.php');
// dto処理読み込み
require_once('./dto/FileListGetDto.php');
require_once('./dto/FileListGetResultDto.php');
require_once('./dto/FileDto.php');


class FileListGetLogic extends CommonLogic {

    public function execute(FileListGetDto $fileListGetDto) {

        // 戻りオブジェクト(FileGetResultDto)を作成
        $fileListGetResultDto = new FileListGetResultDto();

        // インシデントIDを取得する
        $incidentId = $fileListGetDto->getIncidentId();

        // ファイルテーブルモデルを作成
        $identTFileModel = new IdentTFileModel();

        try{
            // ファイルリストを取得
            $fileListAry = $identTFileModel->getByIncidentId();
        }catch(Exception $e){
            // LOGIC結果　SQLエラー '1' をセット
            $fileListGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(FileListGetResultDto)
            return $fileListGetResultDto;
        }

        foreach($fileListAry as $one){
            // ファイル情報をFileDtoにセット
            $fileDto = new FileDto();
            $fileDto->setFileId($one['FILE_ID']);                     // ファイルID(Sequence)
            $fileDto->setIncidentId($one['INCIDENT_ID']);             // インシデントID
            $fileDto->setFileNm($one['FILE_NAME']);                   // ファイル名
            $fileDto->setFilePath($one['FILE_PATH']);                 // ファイルパス
            $fileDto->setFsvrNm($one['FSVR_NAME']);                   // 実ファイル名
	        $fileDto->setInsUserId($one['FILE_INS_USER_ID']);         // 新規登録者ID
	        $fileDto->setInsUserNm($one['FILE_INS_USER_NAME']);       // 新規登録者名
	        $fileDto->setInsSectionCd($one['FILE_INS_SECTION_CD']);   // 新規登録者部署CD
	        $fileDto->setInsSectionNm($one['FILE_INS_SECTION_NAME']); // 新規登録者部署名
	        $fileDto->setInsDate($one['FILE_INS_DATE']);              // 新規登録日
	        $fileDto->setUpdUserId($one['FILE_UPD_USER_ID']);         // 最終更新者ID
	        $fileDto->setUpdUserNm($one['FILE_UPD_USER_NAME']);       // 最終更新者名
	        $fileDto->setUpdSectionCd($one['FILE_UPD_SECTION_CD']);   // 最終更新者部署CD
	        $fileDto->setUpdSectionNm($one['FILE_UPD_SECTION_NAME']); // 最終更新者部署名
	        $fileDto->setUpdDate($one['FILE_UPD_DATE']);              // 最終更新日
            // ファイル情報をセット
            $fileListGetResultDto->addFileList($fileDto);
        }

        // LOGIC結果　正常時 '0' をセット
        $fileListGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // 戻りオブジェクト(FileListGetResultDto)
        return $fileListGetResultDto;
    }

}
