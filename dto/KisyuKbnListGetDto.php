<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：KisyuKbnListGetDto
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class KisyuKbnListGetDto
 *
 * @property String $sotiKbnCd
 */
class KisyuKbnListGetDto extends CommonDto {

    private $sotiKbnCd;

    /**
     * @return String
     */
    public function getSotiKbnCd() {
        return $this->sotiKbnCd;
    }

    /**
     * @param String $sotiKbnCd
     */
    public function setSotiKbnCd($sotiKbnCd) {
        $this->sotiKbnCd = $sotiKbnCd;
    }

}
