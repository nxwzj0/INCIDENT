<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：KbnDto
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class KbnDto
 *
 * @property String $kbnCd
 * @property String $kbnNm
 */
class KbnDto extends CommonDto {

    private $kbnCd;
    private $kbnNm;

    /**
     * @return String
     */
    public function getKbnCd() {
        return $this->kbnCd;
    }

    /**
     * @param String $kbnCd
     */
    public function setKbnCd($kbnCd) {
        $this->kbnCd = $kbnCd;
    }

    /**
     * @return String
     */
    public function getKbnNm() {
        return $this->kbnNm;
    }

    /**
     * @param String $kbnNm
     */
    public function setKbnNm($kbnNm) {
        $this->kbnNm = $kbnNm;
    }

}
