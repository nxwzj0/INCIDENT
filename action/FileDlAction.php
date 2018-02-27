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
        // 戻り値配列の作成(ファイル情報を取得できなかった)
//        $rtnAry = $this->createReturnArray();
//        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
//        echo $this->returnAngularJSONP($rtnAry);
    }

//    public function createReturnArray() {
    public function createReturnArray($eventResult) {
        $fileDlResultAry = array();

        // 戻り値配列の作成(ファイル情報を取得できなかった)
        $fileDlResultAry[] = array("result" => false);

        global $IDENT_ATTACH_FILE_PATH;
        $fileData = $eventResult->getFileData();
        $saved_filename = $fileData->getFileNm();
//        $saved_filepath = $IDENT_ATTACH_FILE_PATH . "/" . $fileData->getFilePath();
        $saved_filepath = $fileData->getFilePath();
        $download_filename = $fileData->getFsvrNm(); // 実ファイル名
        $saved_fullFilePath = $saved_filepath . "/" . $saved_filename;

        // ftpオブジェクト作成
        $ftp = new BNV_ftp_filesystem();
        $ftp->open($GLOBALS["FTP_SERVER"], $GLOBALS["FTP_USER_NAME"], $GLOBALS["FTP_USER_PASS"]);
        // 既存ファイルを確認
        if ($ftp->is_file($saved_fullFilePath) && $ftp->file_exists($saved_fullFilePath)) {
            $fileDlResultAry[] = array("result4" => $saved_fullFilePath);
        }

        $fileDlResultAry[] = array("result1" => $saved_filename);
        $fileDlResultAry[] = array("result2" => $saved_filepath);
        $fileDlResultAry[] = array("result3" => $download_filename);

        return $fileDlResultAry;
    }

    public function fileDownload(FileGetResultDto $eventResult) {

        global $IDENT_ATTACH_FILE_PATH;

        $fileData = $eventResult->getFileData();

        if ($fileData) {

//            // ftpオブジェクト作成
//            $ftp = new BNV_ftp_filesystem();
//            $ftp->open($GLOBALS["FTP_SERVER"], $GLOBALS["FTP_USER_NAME"], $GLOBALS["FTP_USER_PASS"]);

            $saved_filename = $fileData->getFileNm();
//            $saved_filepath = $IDENT_ATTACH_FILE_PATH . "/" . $fileData->getFilePath();
            $saved_filepath = $fileData->getFilePath();
            $download_filename = $fileData->getFsvrNm(); // 実ファイル名
//            $saved_fullFilePath = $saved_filepath . "/" . $saved_filename;
            
//            $fp = $ftp->fopen($saved_fullFilePath, "rb");
//            $REPLACE_PATTERN = "";
//            $REPLACE_WORD = "";
//            if (strlen($REPLACE_PATTERN)) {
//                for ($i = 0; $i < strlen($REPLACE_PATTERN); $i++) {
//                    if (!substr($REPLACE_WORD, $i, $i + 1))
//                        $REPLACE_WORD .= " ";
//                }
//                $buf = "";
//                while (!$ftp->feof($fp)) {
//                    $buf .= $ftp->fread($fp, 1024);
//                    $buf = preg_replace("/$REPLACE_PATTERN/", $REPLACE_WORD, $buf);
//                    print substr($buf, 0, strlen($buf) - 20);
//                    $buf = substr($buf, strlen($buf) - 20);
//                }
//                print $buf;
//            } else {
//                while (!$ftp->feof($fp)) {
//                    print $ftp->fread($fp, 1024);
//                }
//            }
//            $ftp->fclose($fp);
            require("./inc/cls_file_download.inc");
            exit;
        }
    }

}
