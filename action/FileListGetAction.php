<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ファイルリスト情報取得(API)
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/FileListGetLogic.php');

// dto読み込み
require_once('./dto/FileListGetDto.php');

class FileListGetAction extends CommonAction {

    public function index() {

        $P = $GLOBALS[P]; // 共通パラメータ配列取得
        // 画面からパラメータ取得
        $incidentId = $P['incidentId'];

        // インシデント情報検索用パラメータ
        $fileListGetDto = new FileListGetDto();
        $fileListGetDto->setIncidentId($incidentId);

        // ファイルリスト情報を取得
        $fileListGetLogic = new FileListGetLogic();
        $eventResult = $fileListGetLogic->execute($fileListGetDto);

        // 戻り値配列の作成
        $rtnAry = $this->createReturnArray($eventResult);

        // 値を返す(Angular)
        echo $this->returnAngularJSONP($rtnAry);
    }

    public function createReturnArray($eventResult) {
        $fileListAry = array();

        // 戻り値の作成
        if ($eventResult && $eventResult->getLogicResult() == LOGIC_RESULT_SEIJOU) {
            array_push($fileListAry, array("result" => true));

            if ($eventResult->getFileList() && is_array($eventResult->getFileList()) && count($eventResult->getFileList()) > 0) {
                foreach ($eventResult->getFileList() as $fileData) {
                    $fileAry = array();

                    // ファイル情報
                    $fileAry["fileId"] = $fileData->getFileId();
                    $fileAry["incidentId"] = $fileData->getIncidentId();
                    $fileAry["fileNm"] = $fileData->getFileNm();
                    $fileAry["filePath"] = $fileData->getFilePath();
                    $fileAry["fsvrNm"] = $fileData->getFsvrNm();
                    $fileAry["insUserId"] = $fileData->setInsUserId();
                    $fileAry["insUserNm"] = $fileData->setInsUserNm();
                    $fileAry["insSectionCd"] = $fileData->setInsSectionCd();
                    $fileAry["insSectionNm"] = $fileData->setInsSectionNm();
                    $fileAry["insDate"] = $fileData->setInsDate();
                    $fileAry["updUserId"] = $fileData->setUpdUserId();
                    $fileAry["updUserNm"] = $fileData->setUpdUserNm();
                    $fileAry["updSectionCd"] = $fileData->setUpdSectionCd();
                    $fileAry["updSectionNm"] = $fileData->setUpdSectionNm();
                    $fileAry["updDate"] = $fileData->setUpdDate();

                    // 1件分の情報をセット
                    array_push($fileListAry, $fileAry);
                }
            }
        } else {
            array_push($fileListAry, array("result" => false));
        }

        return $fileListAry;
    }

}
