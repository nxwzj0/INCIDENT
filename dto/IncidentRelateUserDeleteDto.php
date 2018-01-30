<?php

//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentRelateUserDeleteDto
//	作成日付・作成者：2018.01.11 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentRelateUserDeleteDto
 *
 * @property String $incidentId
 * @property String $relateUserSectionCd
 * @property String $relateUserId
 */
class IncidentRelateUserDeleteDto extends CommonDto {

    private $incidentId;
    private $relateUserSectionCd;
    private $relateUserId;

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
    public function getRelateUserId() {
        return $this->relateUserId;
    }

    /**
     * @param String $relateUserId
     */
    public function setRelateUserId($relateUserId) {
        $this->relateUserId = $relateUserId;
    }

}
