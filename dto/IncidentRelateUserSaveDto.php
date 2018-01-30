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
class IncidentRelateUserSaveDto extends CommonDto{

    private $incidentId;
    private $relateUserId;
    private $relateUserNm;
    private $relateUserSectionCd;
    private $relateUserSectionNm;
    private $kidokuDate;

    public function getIncidentId() {
        return $this->incidentId;
    }

    public function getRelateUserSectionCd() {
        return $this->relateUserSectionCd;
    }

    public function getRelateUserId() {
        return $this->relateUserId;
    }

    public function setIncidentId($incidentId) {
        $this->incidentId = $incidentId;
    }

    public function setRelateUserSectionCd($relateUserSectionCd) {
        $this->relateUserSectionCd = $relateUserSectionCd;
    }

    public function setRelateUserId($relateUserId) {
        $this->relateUserId = $relateUserId;
    }
    
    public function getRelateUserNm() {
        return $this->relateUserNm;
    }

    public function getRelateUserSectionNm() {
        return $this->relateUserSectionNm;
    }

    public function getKidokuDate() {
        return $this->kidokuDate;
    }

    public function setRelateUserNm($relateUserNm) {
        $this->relateUserNm = $relateUserNm;
    }

    public function setRelateUserSectionNm($relateUserSectionNm) {
        $this->relateUserSectionNm = $relateUserSectionNm;
    }

    public function setKidokuDate($kidokuDate) {
        $this->kidokuDate = $kidokuDate;
    }
}