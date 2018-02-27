<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionGetResultDto
//	作成日付・作成者：2018.01.19 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentListConditionGetResultDto
 *
 * @property ConditionDto[] $conditionList
 */
class IncidentListConditionGetResultDto extends CommonDto{
    private $conditionList;

    /**
     * @return ConditionDto[]
     */
    public function getConditionList() {
        return $this->conditionList;
    }

    /**
     * @param int $index
     * @return ConditionDto
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