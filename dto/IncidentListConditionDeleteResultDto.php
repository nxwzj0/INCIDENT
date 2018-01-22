<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionDeleteResultDto
//	作成日付・作成者：2018.01.19 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentListConditionDeleteResultDto
 *
 * @property ConditionDto[] $conditionList
 */
class IncidentListConditionDeleteResultDto extends CommonDto{
    private $conditionList;

    /**
     * @return IncidentListConditionDeleteResultDto[]
     */
    public function getConditionList() {
        return $this->conditionList;
    }

    /**
     * @param int $index
     * @return IncidentListConditionDeleteResultDto
     */
    public function getCondition($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->conditionList[$index];
        }
    }

    /**
     * @param ConditionDto $conditionDto
     */
    public function addConditionList(ConditionDto $conditionDto) {
        $this->conditionList[] = $conditionDto;
    }

}