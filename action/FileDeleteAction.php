<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ファイル削除
//	作成日付・作成者：2018.02.13 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// dto読み込み
require_once('./dto/FileDeleteSaveDto.php');
require_once('./dto/FileDeleteSaveResultDto.php');
require_once('./dto/UserDto.php');

// logic処理読み込み
require_once('./logic/FileDeleteSaveLogic.php');

require_once("ADFlib/cls_ftp_filesystem.inc.php");

class FileDeleteAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        $fileId = $P['fileId'];
        $incidentId = $P['incidentId'];

        $rtnAry = array();

        if ($fileId && $incidentId) {
//            /* ファイル削除処理 */
//            $rtn = $this->deleteFile('incidentFile', 0, $incidentId, $fileId);
//
//            if (!$rtn["bool"]) {
//                // 削除に失敗
//                $fileDeleteResultAry[] = array("result" => false);
//                // 値を返す(Angular)
//                echo $this->returnAngularJSONP($fileDeleteResultAry);
//            } else {
                /* ファイル削除情報のDB保存処理 */
                // ファイル削除情報登録用パラメータ
                $fileDeleteSaveDto = new FileDeleteSaveDto();

                $fileDeleteSaveDto->setFileId($fileId);

                // ログインユーザ
                $loginUserDto = new UserDto();
                $loginUserDto->setUserId($P['userId']);
                $loginUserDto->setUserNm($P['userNm']);
                $loginUserDto->setSectionCd($P['sectionCd']);
                $loginUserDto->setSectionNm($P['sectionNm']);
                $fileDeleteSaveDto->setLoginUser($loginUserDto);

                // ファイル削除情報登録
                $fileDeleteSaveLogic = new FileDeleteSaveLogic();
                $fileDeleteEventResult = $fileDeleteSaveLogic->execute($fileDeleteSaveDto);

                // 戻り値配列の作成
                $rtnAry = $this->createReturnArray($fileDeleteEventResult);
//            }
        } else {
            $fileDeleteResultAry = array();
            $fileDeleteResultAry[] = array("result" => true);
            $rtnAry = $fileDeleteResultAry;
        }

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($eventResult) {
        $fileDeleteResultAry = array();

        // 戻り値配列の作成
        if ($eventResult && $eventResult->getReturnRst() == SAVE_TRUE) {
            array_push($fileDeleteResultAry, array("result" => true));
        } else {
            array_push($fileDeleteResultAry, array("result" => false));
        }

        return $fileDeleteResultAry;
    }

//    function deleteFile($post_name, $idx, $incidentId, $fileId) {
//
//        global $IDENT_ATTACH_FILE_PATH;
//
//        // ftpオブジェクト作成
//        $ftp = new BNV_ftp_filesystem();
//        $ftp->open($GLOBALS["FTP_SERVER"], $GLOBALS["FTP_USER_NAME"], $GLOBALS["FTP_USER_PASS"]);
//
//        // 保存ファイル名作成
//        if (is_array($_FILES[$post_name]["name"])) {
//            $file_name = com_basename(com_stripslashes($_FILES[$post_name]["name"][$idx]));
//        } else {
//            $file_name = com_basename(com_stripslashes($_FILES[$post_name]["name"]));
//        }
//        $fname = $fileId . $this->getExtension($file_name);
//
//        // ディレクトリを作成
//        if (!$ftp->is_dir($IDENT_ATTACH_FILE_PATH . "/" . $incidentId))
//            $ftp->mkdir($IDENT_ATTACH_FILE_PATH . "/" . $incidentId, 0755);
//        $dir = $IDENT_ATTACH_FILE_PATH . "/" . $incidentId;
//
//        // ファイルパスを作成
//        $filepath = $dir . "/" . $fname;
//
//        // 既存ファイルを削除
//        if ($ftp->is_file($filepath) && $ftp->file_exists($filepath))
//            $ftp->unlink($filepath);
//
//        // 戻り値
//        $rtn["path"] = $dir;
//        $rtn["filename"] = $file_name;
//        $rtn["fname"] = $fname;
//
//        return $rtn;
//    }
//
//    function getExtension($data) {
//        $retVal = "";
//        if (strlen($data)) {
//            $retVal = preg_replace('/^.*\./', '', $data);
//            if ($retVal == $data) {
//                $retVal = "";
//            } else {
//                $retVal = "." . $retVal;
//            }
//        }
//        return $retVal;
//    }

}
