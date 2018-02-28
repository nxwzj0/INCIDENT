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

class FileDeleteAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        $fileId = $P['fileId'];
        $incidentId = $P['incidentId'];

        $rtnAry = array();

        if ($fileId && $incidentId) {
            /* ファイル削除情報のDB保存処理(論理削除のみ実施する物理削除はしない) */
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
            $fileDeleteResultAry[] = array("result" => true);
        } else {
            $fileDeleteResultAry[] = array("result" => false);
        }

        return $fileDeleteResultAry;
    }

}
