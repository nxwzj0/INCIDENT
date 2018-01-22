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

// ::: 2018.01.22 [#23] 入力補助モーダル　インシデント Add Start newtouch
    /** インシデントID */
    private $incidentId;

    /** インシデント番号 */
    private $incidentNo;

    /** 受付内容 */
    private $callContent;

    /** 受付日 */
    private $callDate;

    /** インシデント分類 */
    private $incidentType;

    /** インシデント分類String */
    private $incidentTypeString;

    /** ステータス */
    private $incidentStatus;

    /** ステータスString */
    private $incidentStatusString;

    public function getIncidentNo() {
        return $this->incidentNo;
    }

    public function getCallContent() {
        return $this->callContent;
    }

    public function getCallDate() {
        return $this->callDate;
    }

    public function getCallDateTime() {
        return $this->callDateTime;
    }

    public function getIncidentType() {
        return $this->incidentType;
    }

    public function getIncidentTypeString() {
        return $this->incidentTypeString;
    }

    public function getIncidentStatus() {
        return $this->incidentStatus;
    }

    public function getIncidentStatusString() {
        return $this->incidentStatusString;
    }

    public function setIncidentNo($incidentNo) {
        $this->incidentNo = $incidentNo;
    }

    public function setCallContent($callContent) {
        $this->callContent = $callContent;
    }

    public function setCallDate($callDate) {
        $this->callDate = $callDate;
    }

    public function setCallDateTime($callDateTime) {
        $this->callDateTime = $callDateTime;
    }

    public function setIncidentType($incidentType) {
        $this->incidentType = $incidentType;
    }

    public function setIncidentTypeString($incidentTypeString) {
        $this->incidentTypeString = $incidentTypeString;
    }

    public function setIncidentStatus($incidentStatus) {
        $this->incidentStatus = $incidentStatus;
    }

    public function setIncidentStatusString($incidentStatusString) {
        $this->incidentStatusString = $incidentStatusString;
    }

    public function getIncidentId() {
        return $this->incidentId;
    }

    public function setIncidentId($incidentId) {
        $this->incidentId = $incidentId;
    }
// ::: 2018.01.22 [#23] 入力補助モーダル　インシデント Add End   newtouch

    
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