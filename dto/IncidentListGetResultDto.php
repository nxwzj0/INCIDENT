<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListGetResultDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentListGetResultDto
 *
 * @property IncidentDto[] $incidentList
 * @property String $count
 */
class IncidentListGetResultDto extends CommonDto{
    private $incidentList;
    private $count;

    /**
     * @return IncidentListGetResultDto[]
     */
    public function getIncidentList() {
        return $this->incidentList;
    }

    /**
     * @param int $index
     * @return IncidentListGetResultDto
     */
    public function getIncident($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->incidentList[$index];
        }
    }

    /**
     * @param IncidentDto $incidentDto
     */
    public function addIncidentList(IncidentDto $incidentDto) {
        $this->incidentList[] = $incidentDto;
    }

    /**
     * @return String
     */
    public function getCount() {
        return $this->count;
    }

    /**
     * @param String $count
     */
    public function setCount($count) {
        $this->count = $count;
    }
}