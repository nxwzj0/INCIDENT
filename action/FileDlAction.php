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
        // TODO

        // 戻り値配列の作成(ファイル情報を取得できなかった)
        $rtnAry = $this->createReturnArray();

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray() {
        $fileDlResultAry = array();

        // 戻り値配列の作成(ファイル情報を取得できなかった)
        array_push($fileDlResultAry, array("result" => false));

        return $fileDlResultAry;
    }

}
