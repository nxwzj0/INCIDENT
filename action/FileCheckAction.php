<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ファイル存在チェック
//	作成日付・作成者：2018.02.27 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// dto読み込み
require_once('./dto/FileGetDto.php');
require_once('./dto/FileGetResultDto.php');

// logic処理読み込み
require_once('./logic/FileGetLogic.php');

require_once("ADFlib/cls_ftp_filesystem.inc.php");

class FileCheckAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        $fileId = $P['fileId'];

        // ファイル情報取得用パラメータ
        $fileGetDto = new FileGetDto();
        $fileGetDto->setFileId($fileId);

        /* ファイル情報取得処理 */
        $fileGetLogic = new FileGetLogic();
        $eventResult = $fileGetLogic->execute($fileGetDto);

        // 実ファイルの存在確認
        $rtn = $this->checkFile($eventResult);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($rtn);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($rtn) {
        $fileDeleteResultAry = array();

        // 戻り値配列の作成
        $fileDeleteResultAry[] = array("result" => $rtn);

        return $fileDeleteResultAry;
    }

    /**
     * 
     * @param FileGetResultDto $eventResult
     * @return boolean true:ファイル有り false:ファイル無し
     */
    function checkFile(FileGetResultDto $eventResult) {
        global $IDENT_ATTACH_FILE_PATH;

        $fileData = $eventResult->getFileData();

        if (!$fileData) {
            return false; // ファイルが存在しない
        }

        $saved_filename = $fileData->getFileNm();
        $saved_filepath = $IDENT_ATTACH_FILE_PATH . "/" . $fileData->getFilePath();
        $download_filename = $fileData->getFsvrNm(); // 実ファイル名

        $dir = $IDENT_ATTACH_FILE_PATH . "/" . $fileData->getIncidentId();

        // ftpオブジェクト作成
        $ftp = new BNV_ftp_filesystem();
        $ftp->open($GLOBALS["FTP_SERVER"], $GLOBALS["FTP_USER_NAME"], $GLOBALS["FTP_USER_PASS"]);
        // ファイルパスを作成
        $filepath = $dir . "/" . $saved_filename;

        // 既存ファイルの有無を確認
        if ($ftp->is_file($filepath) && $ftp->file_exists($filepath)) {
            return true; // ファイルが存在する
        } else {
            return false; // ファイルが存在しない
        }
    }

}
