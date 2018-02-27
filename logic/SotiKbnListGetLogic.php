<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：SotiKbnListGetLogic
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once("./env.inc");
// 共通処理読み込み
require_once('./logic/CommonLogic.php');
// 共通処理読み込み
require_once('./common/CommonService.php');
// model処理読み込み
require_once('./model/IdentMSotiKbnModel.php');
// dto処理読み込み
require_once('./dto/SotiKbnListGetDto.php');
require_once('./dto/SotiKbnListGetResultDto.php');
require_once('./dto/KbnDto.php');

class SotiKbnListGetLogic extends CommonLogic {

    public function execute(SotiKbnListGetDto $sotiKbnListGetDto) {

        // 戻りオブジェクト(SotiKbnListGetResultDto)を作成
        $sotiKbnListGetResultDto = new SotiKbnListGetResultDto();

        // ファイルテーブルモデルを作成
        $identMSotiKbnModel = new IdentMSotiKbnModel();

        try {
            // ファイルリストを取得
            $sotiKbnListAry = $identMSotiKbnModel->getSotiKbnList();
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $sotiKbnListGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(SotiKbnListGetResultDto)
            return $sotiKbnListGetResultDto;
        }

        foreach ($sotiKbnListAry as $one) {
            // 区分情報をFileDtoにセット
            $kbnDto = new KbnDto();
            $kbnDto->setKbnCd($one['SOTI_KBN_CD']);
            $kbnDto->setKbnNm($one['SOTI_KBN_NM']);
            // 区分情報をセット
            $sotiKbnListGetResultDto->addSotiKbnList($kbnDto);
        }

        // LOGIC結果　正常時 '0' をセット
        $sotiKbnListGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // 戻りオブジェクト(SotiKbnListGetResultDto)
        return $sotiKbnListGetResultDto;
    }

}
