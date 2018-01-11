<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：Test　配列作成
//	作成日付・作成者：2017.10.06 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

/**
 * Class CreateArrayResultDto
 *
 * @property array $resultAry
 */
class CreateArrayResultDto {

    private $resultAry = array();

    /**
     * @return array
     */
    public function getResultAry() {
        return $this->resultAry;
    }

    /**
     * @param int $index
     */
    public function getResultAryItem($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->resultAry[$index];
        }
    }

    public function addResultAry($item) {
        $this->resultAry[] = $item;
    }

}
