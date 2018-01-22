<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ConditionDto
//	作成日付・作成者：2018.01.19 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class ConditionDto
 *
 * @property String $condNm
 * @property String $condId
 * @property String $insDate
 */
class ConditionDto extends CommonDto{

    private $condNm;
    private $condId;
    private $insDate;

    /**
     * @return String
     */
    public function getCondNm() {
        return $this->condNm;
    }

    /**
     * @param String $condNm
     */
    public function setCondNm($condNm) {
        $this->condNm = $condNm;
    }

    /**
     * @return String
     */
    public function getCondId() {
        return $this->condId;
    }

    /**
     * @param String $condId
     */
    public function setCondId($condId) {
        $this->condId = $condId;
    }

    /**
     * @return String
     */
    public function getInsDate() {
        return $this->insDate;
    }

    /**
     * @param String $insDate
     */
    public function setInsDate($insDate) {
        $this->insDate = $insDate;
    }

}