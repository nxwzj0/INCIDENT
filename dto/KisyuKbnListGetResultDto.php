<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：KisyuKbnListGetResultDto
//	作成日付・作成者：2018.02.26 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class KisyuKbnListGetResultDto
 *
 * @property KbnDto[] $kisyuKbnList
 */
class KisyuKbnListGetResultDto extends CommonDto {

    private $kisyuKbnList;

    /**
     * @return KbnDto[]
     */
    public function getKisyuKbnList() {
        return $this->kisyuKbnList;
    }

    /**
     * @param int $index
     * @return KbnDto
     */
    public function getKisyuKbn($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->kisyuKbnList[$index];
        }
    }

    /**
     * @param KbnDto $kbnDto
     */
    public function addKisyuKbnList(KbnDto $kbnDto) {
        $this->kisyuKbnList[] = $kbnDto;
    }

}
