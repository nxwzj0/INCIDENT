<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentRelateUserSaveDto
//	作成日付・作成者：2018.01.11 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentRelateUserSaveDto
 *
 * @property String $incidentId
 * @property String $relateUserId
 * @property String $relateUserNm
 * @property String $relateUserSectionCd
 * @property String $relateUserSectionNm
 * @property String $kidokuDate
 */
class IncidentRelateUserSaveDto extends CommonDto {

    private $incidentId;
    private $relateUserId;
    private $relateUserNm;
    private $relateUserSectionCd;
    private $relateUserSectionNm;
    private $kidokuDate;

    /**
     * @return String
     */
    public function getIncidentId() {
        return $this->incidentId;
    }

    /**
     * @param String $incidentId
     */
    public function setIncidentId($incidentId) {
        $this->incidentId = $incidentId;
    }

    /**
     * @return String
     */
    public function getRelateUserId() {
        return $this->relateUserId;
    }

    /**
     * @param String $relateUserId
     */
    public function setRelateUserId($relateUserId) {
        $this->relateUserId = $relateUserId;
    }

    /**
     * @return String
     */
    public function getRelateUserNm() {
        return $this->relateUserNm;
    }

    /**
     * @param String $relateUserNm
     */
    public function setRelateUserNm($relateUserNm) {
        $this->relateUserNm = $relateUserNm;
    }

    /**
     * @return String
     */
    public function getRelateUserSectionCd() {
        return $this->relateUserSectionCd;
    }

    /**
     * @param String $relateUserSectionCd
     */
    public function setRelateUserSectionCd($relateUserSectionCd) {
        $this->relateUserSectionCd = $relateUserSectionCd;
    }

    /**
     * @return String
     */
    public function getRelateUserSectionNm() {
        return $this->relateUserSectionNm;
    }

    /**
     * @param String $relateUserSectionNm
     */
    public function setRelateUserSectionNm($relateUserSectionNm) {
        $this->relateUserSectionNm = $relateUserSectionNm;
    }

    /**
     * @return String
     */
    public function getKidokuDate() {
        return $this->kidokuDate;
    }

    /**
     * @param String $kidokuDate
     */
    public function setKidokuDate($kidokuDate) {
        $this->kidokuDate = $kidokuDate;
    }

}
