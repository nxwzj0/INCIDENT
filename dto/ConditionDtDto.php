<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ConditionDtDto
//	作成日付・作成者：2018.01.19 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class ConditionDto
 *
 * @property String $condFld
 * @property String $condVal
 */
class ConditionDtDto extends CommonDto{

    private $condFld;
    private $condVal;

    /**
     * @return String
     */
    public function getCondFld() {
        return $this->condFld;
    }

    /**
     * @param String $condFld
     */
    public function setCondFld($condFld) {
        $this->condFld = $condFld;
    }

    /**
     * @return String
     */
    public function getCondVal() {
        return $this->condVal;
    }

    /**
     * @param String $condVal
     */
    public function setCondVal($condVal) {
        $this->condVal = $condVal;
    }

}