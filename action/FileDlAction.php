<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ファイルダウンロード
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/FileGetLogic.php');

// dto読み込み
require_once('./dto/FileGetDto.php');
require_once('./dto/FileGetResultDto.php');

class FileDlAction extends CommonAction {

    public function index() {

        try {

            $P = $GLOBALS[P]; // 共通パラメータ配列取得
            $fileId = $P['fileId'];

            // ファイル情報取得用パラメータ
            $fileGetDto = new FileGetDto();
            $fileGetDto->setFileId($fileId);

            /* ファイル情報取得処理 */
            $fileGetLogic = new FileGetLogic();
            $eventResult = $fileGetLogic->execute($fileGetDto);

            /* ファイルダウンロード処理 */
            $this->fileDownload($eventResult);
        } catch (Exception $e) {
            // エラーがあった場合、例外ページを開く
            header("Location: ".$GLOBALS["COMMON_HOME_URL"]."/".$GLOBALS["COMMON_VIEW_FOLDER"]."/#/errorHandler/500");
            exit;
        }
    }

    public function fileDownload(FileGetResultDto $eventResult) {

        global $IDENT_ATTACH_FILE_PATH;

        $fileData = $eventResult->getFileData();

        if ($fileData) {
            set_time_limit(6000);

            $saved_filename = $fileData->getFileNm();
            $saved_filepath = $IDENT_ATTACH_FILE_PATH . "/" . $fileData->getFilePath();
            $download_filename = $fileData->getFsvrNm(); // 実ファイル名

            require("./inc/cls_file_download.inc");
            exit;
        }
    }

}