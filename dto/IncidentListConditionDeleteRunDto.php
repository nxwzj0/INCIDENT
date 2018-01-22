<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionDeleteRunDto
//	作成日付・作成者：2018.01.11 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentListConditionDeleteRunDto
 *
 * @property String $condId
 */
class IncidentListConditionDeleteRunDto extends CommonDto{

    private $condId;

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

}