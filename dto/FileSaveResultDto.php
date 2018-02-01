<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileSaveResultDto
//	作成日付・作成者：2018.01.29 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class FileSaveResultDto
 *
 * @property boolean $returnRst
 */
class FileSaveResultDto extends CommonDto{

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
