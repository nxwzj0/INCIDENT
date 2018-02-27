<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileDeleteSaveResultDto
//	作成日付・作成者：2018.02.13 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class FileDeleteSaveResultDto
 *
 * @property boolean $returnRst
 */
class FileDeleteSaveResultDto extends CommonDto{

    private $returnRst;

    /**
     * @return boolean
     */
    public function getReturnRst() {
        return $this->returnRst;
    }

    /**
     * @param boolean $returnRst
     */
    public function setReturnRst($returnRst) {
        $this->returnRst = $returnRst;
    }

}
