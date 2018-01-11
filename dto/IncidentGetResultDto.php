<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentGetResultDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

/**
 * Class IncidentGetResultDto
 *
 * @property IncidentDto $incidentInfo
 */
class IncidentGetResultDto extends CommonDto{
    
    private $incidentInfo;

    /**
     * @return IncidentDto
     */
    public function getIncidentInfo() {
        return $this->incidentInfo;
    }

    /**
     * @param IncidentDto $incidentInfo
     */
    public function setIncidentInfo($incidentInfo) {
        $this->incidentInfo = $incidentInfo;
    }
    
}
