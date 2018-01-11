<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentGetDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentGetDto
 * @property String $incidentId
 * @property boolean $RelateFlg
 * @property boolean $logFlg
 */
class IncidentGetDto extends CommonDto{
    private $incidentId;
    private $RelateFlg;
    private $logFlg;
    
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
     * @return boolean
     * true : 関連有り、false : 関連無し    
     */
    function getRelateFlg() {
        return $this->RelateFlg;
    }

    /**
     * @param boolean $RelateFlg
     */
    function setRelateFlg($RelateFlg) {
        $this->RelateFlg = $RelateFlg;
    }

    /**
     * @return boolean
     * true : 変更履歴有り、false : 変更履歴無し
     */
    function getLogFlg() {
        return $this->logFlg;
    }

    /**
     * @param boolean $logFlg
     */
    function setLogFlg($logFlg) {
        $this->logFlg = $logFlg;
    }
}
