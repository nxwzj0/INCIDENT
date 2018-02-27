<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：KisyuKbnListGetLogic
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
require_once('./model/IdentMKisyuKbnModel.php');
// dto処理読み込み
require_once('./dto/KisyuKbnListGetDto.php');
require_once('./dto/KisyuKbnListGetResultDto.php');
require_once('./dto/KbnDto.php');

class KisyuKbnListGetLogic extends CommonLogic {

    public function execute(KisyuKbnListGetDto $kisyuKbnListGetDto) {

        // 戻りオブジェクト(KisyuKbnListGetResultDto)を作成
        $kisyuKbnListGetResultDto = new KisyuKbnListGetResultDto();

        // インシデントIDを取得する
        $sotiKbnCd = $kisyuKbnListGetDto->getSotiKbnCd();
        
        // 機種区分テーブルモデルを作成
        $identMKisyuKbnModel = new IdentMKisyuKbnModel();

        try {
            // ファイルリストを取得
            $kisyuKbnListAry = $identMKisyuKbnModel->getKisyuKbnListBySotiKbnCd($sotiKbnCd);
        } catch (Exception $e) {
            // LOGIC結果　SQLエラー '1' をセット
            $kisyuKbnListGetResultDto->setLogicResult(LOGIC_RESULT_SQL_ERROR);
            // 戻りオブジェクト(KisyuKbnListGetResultDto)
            return $kisyuKbnListGetResultDto;
        }

        foreach ($kisyuKbnListAry as $one) {
            // 区分情報をFileDtoにセット
            $kbnDto = new KbnDto();
            $kbnDto->setKbnCd($one['KISYU_KBN_CD']);
            $kbnDto->setKbnNm($one['KISYU_KBN_NM']);
            // 区分情報をセット
            $kisyuKbnListGetResultDto->addKisyuKbnList($kbnDto);
        }

        // LOGIC結果　正常時 '0' をセット
        $kisyuKbnListGetResultDto->setLogicResult(LOGIC_RESULT_SEIJOU);
        // 戻りオブジェクト(KisyuKbnListGetResultDto)
        return $kisyuKbnListGetResultDto;
    }

}
