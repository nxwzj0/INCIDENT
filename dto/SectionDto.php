<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：SectionDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class SectionDto
 *
 * @property String $sectionCd
 * @property String $sectionNm
 */
class SectionDto extends CommonDto{

    private $sectionCd;
    private $sectionNm;

    /**
     * @return String
     */
    public function getSectionCd() {
        return $this->sectionCd;
    }

    /**
     * @param String $sectionCd
     */
    public function setSectionCd($sectionCd) {
        $this->sectionCd = $sectionCd;
    }

    /**
     * @return String
     */
    public function getSectionNm() {
        return $this->sectionNm;
    }

    /**
     * @param String $sectionNm
     */
    public function setSectionNm($sectionNm) {
        $this->sectionNm = $sectionNm;
    }

}
