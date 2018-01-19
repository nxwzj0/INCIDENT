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
 * @property String $condNm
 */
class IncidentListConditionDeleteRunDto extends CommonDto{

    private $condNm;

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

}

