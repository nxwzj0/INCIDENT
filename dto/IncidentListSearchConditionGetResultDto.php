<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListSearchConditionGetResultDto
//	作成日付・作成者：2018.01.19 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentListSearchConditionGetResultDto
 *
 * @property ConditionDtDto[] $conditionDtList
 */
class IncidentListSearchConditionGetResultDto extends CommonDto{
    private $conditionDtList;

    /**
     * @return IncidentListSearchConditionGetResultDto[]
     */
    public function getConditionDtList() {
        return $this->conditionDtList;
    }

    /**
     * @param int $index
     * @return IncidentListSearchConditionGetResultDto
     */
    public function getConditionDt($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->conditionDtList[$index];
        }
    }

    /**
     * @param ConditionDtDto $conditionDtDto
     */
    public function addConditionDtList(ConditionDtDto $conditionDtDto) {
        $this->conditionDtList[] = $conditionDtDto;
    }

}