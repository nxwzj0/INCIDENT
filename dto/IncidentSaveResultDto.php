<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentSaveResultDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentSaveResultDto
 *
 * @property boolean $returnRst
 * @property String $incidentId
 */
class IncidentSaveResultDto extends CommonDto{

    private $returnRst;
    private $incidentId;

    /**
     * @return boolean
     */
    public function getReturnRst() {
        return $this->returnRst;
    }

    /**
     * @param boolean $returnRst
     */
    public function setReturnRst($returnRst) {
        $this->returnRst = $returnRst;
    }

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


}
