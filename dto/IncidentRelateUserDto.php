<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentRelateUserDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentRelateUserDto
 * 
 * @property String $relateId
 * @property String $incidentId
 * @property String $relateUserId
 * @property String $relateUserNm
 * @property String $relateUserSectionCd
 * @property String $relateUserSectionNm
 * @property String $kidokuDate
 */
class IncidentRelateUserDto extends CommonDto{

    private $relateId;
    private $incidentId;
    private $relateUserId;
    private $relateUserNm;
    private $relateUserSectionCd;
    private $relateUserSectionNm;
    private $kidokuDate;
    
    public function getKidokuDate() {
        return $this->kidokuDate;
    }

    public function setKidokuDate($kidokuDate) {
        $this->kidokuDate = $kidokuDate;
    }

        public function getRelateId() {
        return $this->relateId;
    }

    public function getIncidentId() {
        return $this->incidentId;
    }

    public function getRelateUserId() {
        return $this->relateUserId;
    }

    public function getRelateUserNm() {
        return $this->relateUserNm;
    }

    public function getRelateUserSectionCd() {
        return $this->relateUserSectionCd;
    }

    public function getRelateUserSectionNm() {
        return $this->relateUserSectionNm;
    }

    public function setRelateId($relateId) {
        $this->relateId = $relateId;
    }

    public function setIncidentId($incidentId) {
        $this->incidentId = $incidentId;
    }

    public function setRelateUserId($relateUserId) {
        $this->relateUserId = $relateUserId;
    }

    public function setRelateUserNm($relateUserNm) {
        $this->relateUserNm = $relateUserNm;
    }

    public function setRelateUserSectionCd($relateUserSectionCd) {
        $this->relateUserSectionCd = $relateUserSectionCd;
    }

    public function setRelateUserSectionNm($relateUserSectionNm) {
        $this->relateUserSectionNm = $relateUserSectionNm;
    }



}