<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentRelationDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentRelationDto
 *
 * @property String $relateType
 * @property String $relateIncidentId
 * @property String $relateIncidentNo
 * @property String $relateIncidentContent
 * @property String $relateIncidentType
 * @property String $relateIncidentStartDateTime
 * @property String $relateIncidentKijoNm
 * @property String $relateIncidentCustNm
 */
class IncidentRelationDto extends CommonDto{

    private $relateType;
    private $relateIncidentId;
    private $relateIncidentNo;
    private $relateIncidentContent;
    private $relateIncidentType;
    private $relateIncidentStartDateTime;
    private $relateIncidentKijoNm;
    private $relateIncidentCustNm;

    /**
     * @return String
     */
    public function getRelateType() {
        return $this->relateType;
    }

    /**
     * @return String
     */
    public function getRelateIncidentNo() {
        return $this->relateIncidentNo;
    }

    /**
     * @return String
     */
    public function getRelateIncidentId() {
        return $this->relateIncidentId;
    }

    /**
     * @param String $relateIncidentId
     */
    public function setRelateIncidentId($relateIncidentId) {
        $this->relateIncidentId = $relateIncidentId;
    }

    /**
     * @return String
     */
    public function getRelateIncidentContent() {
        return $this->relateIncidentContent;
    }

    /**
     * @param String $relateType
     */
    public function setRelateType($relateType) {
        $this->relateType = $relateType;
    }

    /**
     * @param String $relateIncidentNo
     */
    public function setRelateIncidentNo($relateIncidentNo) {
        $this->relateIncidentNo = $relateIncidentNo;
    }

    /**
     * @param String $relateIncidentContent
     */
    public function setRelateIncidentContent($relateIncidentContent) {
        $this->relateIncidentContent = $relateIncidentContent;
    }

    /**
     * @return String
     */
    public function getRelateIncidentType() {
        return $this->relateIncidentType;
    }

    /**
     * @param String $relateIncidentType
     */
    public function setRelateIncidentType($relateIncidentType) {
        $this->relateIncidentType = $relateIncidentType;
    }

    /**
     * @return String
     */
    public function getRelateIncidentStartDateTime() {
        return $this->relateIncidentStartDateTime;
    }

    /**
     * @param String $relateIncidentStartDateTime
     */
    public function setRelateIncidentStartDateTime($relateIncidentStartDateTime) {
        $this->relateIncidentStartDateTime = $relateIncidentStartDateTime;
    }

    /**
     * @return String
     */
    public function getRelateIncidentKijoNm() {
        return $this->relateIncidentKijoNm;
    }

    /**
     * @param String $relateIncidentKijoNm
     */
    public function setRelateIncidentKijoNm($relateIncidentKijoNm) {
        $this->relateIncidentKijoNm = $relateIncidentKijoNm;
    }

    /**
     * @return String
     */
    public function getRelateIncidentCustNm() {
        return $this->relateIncidentCustNm;
    }

    /**
     * @param String $relateIncidentCustNm
     */
    public function setRelateIncidentCustNm($relateIncidentCustNm) {
        $this->relateIncidentCustNm = $relateIncidentCustNm;
    }

}