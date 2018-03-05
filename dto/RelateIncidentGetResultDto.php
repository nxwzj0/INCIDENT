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
 * @property IncidentRelationDto[] $relateIncidentKisyuKbnCdList
 * @property IncidentRelationDto[] $relateIncidentProductList
 */
class RelateIncidentGetResultDto extends CommonDto{
    
    private $relateIncidentKijiIdList = array();
    private $relateIncidentCustIdList = array();
    private $relateIncidentKisyuKbnCdList = array();
    private $relateIncidentProductList = array();

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

    /**
     * @return IncidentRelationDto[]
     */
    public function getRelateIncidentKisyuKbnCdList() {
        return $this->relateIncidentKisyuKbnCdList;
    }

    /**
     * @param int $index
     * @return IncidentRelationDto
     */
    public function getRelateIncidentKisyuKbnCd($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->relateIncidentKisyuKbnCdList[$index];
        }
    }

    /**
     * @param IncidentRelationDto $relateIncidentKisyuKbnCd
     */
    public function addRelateIncidentKisyuKbnCdList(IncidentRelationDto $relateIncidentKisyuKbnCd) {
        $this->relateIncidentKisyuKbnCdList[] = $relateIncidentKisyuKbnCd;
    }

    /**
     * @return IncidentRelationDto[]
     */
    public function getRelateIncidentProductList() {
        return $this->relateIncidentProductList;
    }

    /**
     * @param int $index
     * @return IncidentRelationDto
     */
    public function getRelateIncidentProduct($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->relateIncidentProductList[$index];
        }
    }

    /**
     * @param IncidentRelationDto $relateIncidentProduct
     */
    public function addRelateIncidentProductList(IncidentRelationDto $relateIncidentProduct) {
        $this->relateIncidentProductList[] = $relateIncidentProduct;
    }

}
