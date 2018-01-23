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
 * @property String $incidentId
 * @property String $incidentNo
 * @property String $callContent
 * @property String $callDate
 * @property String $incidentType
 * @property String $incidentTypeString
 * @property String $incidentStatus
 * @property String $incidentStatusString
 */

class IncidentDto extends CommonDto {

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

    /**
     * @return String
     */
    public function getIncidentId()
    {
        return $this->incidentId;
    }

    /**
     * @param String $incidentId
     * @return IncidentDto
     */
    public function setIncidentId($incidentId)
    {
        $this->incidentId = $incidentId;
        return $this;
    }

    /**
     * @return String
     */
    public function getIncidentNo() {
        return $this->incidentNo;
    }

    /**
     * @param String $incidentNo
     * @return IncidentDto
     */
    public function setIncidentNo($incidentNo) {
        $this->incidentNo = $incidentNo;
        return $this;
    }

    /**
     * @return String
     */
    public function getCallContent() {
        return $this->callContent;
    }

    /**
     * @param String $callContent
     * @return IncidentDto
     */
    public function setCallContent($callContent) {
        $this->callContent = $callContent;
        return $this;
    }

    /**
     * @return String
     */
    public function getCallDate() {
        return $this->callDate;
    }

    /**
     * @param String $callDate
     * @return IncidentDto
     */
    public function setCallDate($callDate) {
        $this->callDate = $callDate;
        return $this;
    }

    /**
     * @return String
     */
    public function getIncidentType() {
        return $this->incidentType;
    }

    /**
     * @param String $incidentType
     * @return IncidentDto
     */
    public function setIncidentType($incidentType) {
        $this->incidentType = $incidentType;
        return $this;
    }

    /**
     * @return String
     */
    public function getIncidentTypeString() {
        return $this->incidentTypeString;
    }

    /**
     * @param String $incidentTypeString
     * @return IncidentDto
     */
    public function setIncidentTypeString($incidentTypeString) {
        $this->incidentTypeString = $incidentTypeString;
        return $this;
    }

    /**
     * @return String
     */
    public function getIncidentStatus() {
        return $this->incidentStatus;
    }

    /**
     * @param String $incidentStatus
     * @return IncidentDto
     */
    public function setIncidentStatus($incidentStatus) {
        $this->incidentStatus = $incidentStatus;
        return $this;
    }

    /**
     * @return String
     */
    public function getIncidentStatusString() {
        return $this->incidentStatusString;
    }

    /**
     * @param String $incidentStatusString
     * @return IncidentDto
     */
    public function setIncidentStatusString($incidentStatusString) {
        $this->incidentStatusString = $incidentStatusString;
        return $this;
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
