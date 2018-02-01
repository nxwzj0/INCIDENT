<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ファイルアップロード
//	作成日付・作成者：2018.01.29 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// dto読み込み
require_once('./dto/FileIdGetDto.php');
require_once('./dto/FileSaveDto.php');
require_once('./dto/FileDto.php');
require_once('./dto/UserDto.php');

// logic処理読み込み
require_once('./logic/FileIdGetLogic.php');
require_once('./logic/FileSaveLogic.php');

require_once("ADFlib/cls_ftp_filesystem.inc.php");

class FileUploadAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        $incidentId = $P['incidentId'];

        // ファイルID取得用パラメータ
        $fileIdGetDto = new FileIdGetDto();

        /* ファイルID取得処理 */
        $fileIdGetLogic = new FileIdGetLogic();
        $fileIdEventResult = $fileIdGetLogic->execute($fileIdGetDto);
        $rtnAry = array();
        if ($fileIdEventResult && $fileIdEventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            $fileId = $fileIdEventResult->getFileId();

            /* ファイルアップロード処理 */
            $rtn = $this->SaveUploadedFile('incidentFile', 0, $incidentId, $fileId);

            if (!$rtn["bool"]) {
                // アップロードに失敗
                $fileUpResultAry[] = array("result" => false);
                // 値を返す(Angular)
                echo $this->returnAngularJSONP($fileUpResultAry);
            }

            /* ファイルアップロード情報のDB保存処理 */
            // ファイル情報登録用パラメータ
            $fileSaveDto = new FileSaveDto();
            $file = new FileDto();
            $file->setFileId($fileId);
            $file->setIncidentId($incidentId);
            $file->setFileNm($rtn["fname"]);
            $file->setFilePath($rtn["path"]);
            $file->setFsvrNm($rtn["filename"]);

            $fileSaveDto->addFileList($file);

            // ログインユーザ
            $loginuserDto = new UserDto();
            $loginuserDto->setUserId('newUId');
            $loginuserDto->setUserNm('newUNm');
            $loginuserDto->setSectionCd('newSCd');
            $loginuserDto->setSectionNm('newSNm');
            $fileSaveDto->setLoginUser($loginuserDto);

            // ファイルアップロード情報登録
            $fileSaveLogic = new FileSaveLogic();
            $fileSaveEventResult = $fileSaveLogic->execute($fileSaveDto);

            // 戻り値配列の作成
            $rtnAry = $this->createReturnArray($fileSaveEventResult);
        } else {
            $fileUpResultAry = array();
            $fileUpResultAry[] = array("result" => true);
            $rtnAry = $fileUpResultAry;
        }

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($eventResult) {
        $fileUpResultAry = array();

        // 戻り値配列の作成
        if ($eventResult && $eventResult->getReturnRst() == SAVE_TRUE) {
            array_push($fileUpResultAry, array("result" => true));
        } else {
            array_push($fileUpResultAry, array("result" => false));
        }

        return $fileUpResultAry;
    }

    function SaveUploadedFile($post_name, $idx, $incidentId, $fileId) {

        global $IDENT_ATTACH_FILE_PATH;

        // ftpオブジェクト作成
        $ftp = new BNV_ftp_filesystem();
        $ftp->open($GLOBALS["FTP_SERVER"], $GLOBALS["FTP_USER_NAME"], $GLOBALS["FTP_USER_PASS"]);

        // 保存ファイル名作成
        if (is_array($_FILES[$post_name]["name"])) {
            $file_name = com_basename(com_stripslashes($_FILES[$post_name]["name"][$idx]));
        } else {
            $file_name = com_basename(com_stripslashes($_FILES[$post_name]["name"]));
        }
        $fname = $fileId . $this->getExtension($file_name);

        // ディレクトリを作成
        if (!$ftp->is_dir($IDENT_ATTACH_FILE_PATH . "/" . $incidentId))
            $ftp->mkdir($IDENT_ATTACH_FILE_PATH . "/" . $incidentId, 0755);
        $dir = $IDENT_ATTACH_FILE_PATH . "/" . $incidentId;

        // ファイルパスを作成
        $filepath = $dir . "/" . $fname;

        // 既存ファイルを削除
        if ($ftp->is_file($filepath) && $ftp->file_exists($filepath))
            $ftp->unlink($filepath);

        // ファイルのアップロード
        if (is_array($_FILES[$post_name]["name"])) {
            $rtn["bool"] = (!$ftp->move_uploaded_file($_FILES[$post_name]["tmp_name"][$idx], $filepath) ? FALSE : TRUE);
        } else {
            $rtn["bool"] = (!$ftp->move_uploaded_file($_FILES[$post_name]["tmp_name"], $filepath) ? FALSE : TRUE);
        }

        // 戻り値
        $rtn["path"] = $dir;
        $rtn["filename"] = $file_name;
        $rtn["fname"] = $fname;

        return $rtn;
    }

    function getExtension($data) {
        $retVal = "";
        if (strlen($data)) {
            $retVal = preg_replace('/^.*\./', '', $data);
            if ($retVal == $data) {
                $retVal = "";
            } else {
                $retVal = "." . $retVal;
            }
        }
        return $retVal;
    }

}
