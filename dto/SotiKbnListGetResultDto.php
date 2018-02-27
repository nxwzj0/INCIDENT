<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：SotiKbnListGetResultDto
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class SotiKbnListGetResultDto
 *
 * @property KbnDto[] $sotiKbnList
 */
class SotiKbnListGetResultDto extends CommonDto {

    private $sotiKbnList;

    /**
     * @return KbnDto[]
     */
    public function getSotiKbnList() {
        return $this->sotiKbnList;
    }

    /**
     * @param int $index
     * @return KbnDto
     */
    public function getSotiKbn($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->sotiKbnList[$index];
        }
    }

    /**
     * @param KbnDto $kbnDto
     */
    public function addSotiKbnList(KbnDto $kbnDto) {
        $this->sotiKbnList[] = $kbnDto;
    }

}
