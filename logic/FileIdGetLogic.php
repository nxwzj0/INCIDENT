<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileIdGetLogic
//	作成日付・作成者：2018.01.29 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once("./env.inc");

require_once('./logic/CommonLogic.php');

require_once('./model/IdentTFileModel.php');

require_once('./common/CommonService.php');

require_once('./inc/const.php');

require_once('./dto/FileIdGetDto.php');
require_once('./dto/FileIdGetResultDto.php');

class FileIdGetLogic extends CommonLogic {

    public function execute(FileIdGetDto $fileIdGetDto) {
        // 戻りオブジェクト(FileIdGetResultDto)を作成
        $fileIdGetResultDto = new FileIdGetResultDto();

        try {
            // ファイルテーブルモデルを作成
            $identTFileModel = new IdentTFileModel();

            // ファイルIDを取得する
            $fileIdArray = $identTFileModel->selcetInsertFileId();
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $fileIdGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(IncidentGetResultDto)
            return $fileIdGetResultDto;
        }

        // 戻り値の設定
        // ファイル情報をFileDtoにセット
        if (isset($fileIdArray[0]['NEXTVAL'])) {
            $fileIdGetResultDto->setFileId($fileIdArray[0]['NEXTVAL']); // ファイルID(Sequence)
        } else {
            // LOGIC結果　SQLエラー '1' をセット
            $fileIdGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(IncidentGetResultDto)
            return $fileIdGetResultDto;
        }

        // LOGIC結果　正常時 '0' をセット
        $fileIdGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);

        // 戻りオブジェクト(FileIdGetResultDto)
        return $fileIdGetResultDto;
    }

}
