<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：RelateIncidentGetResultDto
//	作成日付・作成者：2018.01.31 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class RelateIncidentGetResultDto
 *
 * @property IncidentRelationDto[] $relateIncidentKijiIdList
 * @property IncidentRelationDto[] $relateIncidentCustIdList
 */
class RelateIncidentGetResultDto extends CommonDto{
    
    private $relateIncidentKijiIdList = array();
    private $relateIncidentCustIdList = array();

    /**
     * @return IncidentRelationDto[]
     */
    public function getRelateIncidentKijiIdList() {
        return $this->relateIncidentKijiIdList;
    }

    /**
     * @param int $index
     * @return IncidentRelationDto
     */
    public function getRelateIncidentKijiId($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->relateIncidentKijiIdList[$index];
        }
    }

    /**
     * @param IncidentRelationDto $relateIncidentKijiId
     */
    public function addRelateIncidentKijiIdList(IncidentRelationDto $relateIncidentKijiId) {
        $this->relateIncidentKijiIdList[] = $relateIncidentKijiId;
    }

    /**
     * @return IncidentRelationDto[]
     */
    public function getRelateIncidentCustIdList() {
        return $this->relateIncidentCustIdList;
    }

    /**
     * @param int $index
     * @return IncidentRelationDto
     */
    public function getRelateIncidentCustId($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->relateIncidentCustIdList[$index];
        }
    }

    /**
     * @param IncidentRelationDto $relateIncidentCustId
     */
    public function addRelateIncidentCustIdList(IncidentRelationDto $relateIncidentCustId) {
        $this->relateIncidentCustIdList[] = $relateIncidentCustId;
    }

}
