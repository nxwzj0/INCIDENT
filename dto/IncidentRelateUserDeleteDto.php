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
class IncidentRelateUserDeleteDto extends CommonDto{

    private $incidentId;
    private $relateUserSectionCd;
    private $relateUserId;

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
}