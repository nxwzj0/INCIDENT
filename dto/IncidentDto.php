<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentDto
 *
 * @property IncidentMainDto $incidentMainInfo
 * @property LinkRelationDto $relateLink
 * @property IncidentRelationDto[] $relateIncidentList
 * @property RevDto[] $logList
 */
class IncidentDto extends CommonDto{

    private $incidentMainInfo;
    private $relateLink;
    private $relateIncidentList = array();
    private $logList = array();

    /**
     * @return IncidentMainDto
     */
    public function getIncidentMainInfo() {
        return $this->incidentMainInfo;
    }

    /**
     * @param IncidentMainDto $incidentMainInfo
     */
    public function setIncidentMainInfo($incidentMainInfo) {
        return $this->incidentMainInfo = $incidentMainInfo;
    }

    /**
     * @return LinkRelationDto
     */
    public function getRelateLink() {
        return $this->relateLink;
    }

    /**
     * @param LinkRelationDto $relateLink
     */
    public function setRelateLink($relateLink) {
        return $this->relateLink = $relateLink;
    }

    /**
     * @return IncidentRelationDto[]
     */
    public function getRelateIncidentList() {
        return $this->relateIncidentList;
    }

    /**
     * @param int $index
     * @return IncidentRelationDto
     */
    public function getRelateIncident($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->relateIncidentList[$index];
        }
    }

    /**
     * @param IncidentRelationDto $relateIncident
     */
    public function addRelateIncidentList(IncidentRelationDto $relateIncident) {
        $this->relateIncidentList[] = $relateIncident;
    }

    /**
     * @return RevDto[]
     */
    public function getLogList() {
        return $this->logList;
    }

    /**
     * @param int $index
     * @return RevDto
     */
    public function getLog($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->logList[$index];
        }
    }

    /**
     * @param RevDto $log
     */
    public function addLogList(RevDto $log) {
        $this->logList[] = $log;
    }

}