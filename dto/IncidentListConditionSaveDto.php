<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionSaveDto
//	作成日付・作成者：2018.01.11 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentListConditionSaveDto
 *
 * @property String $condNm
 * @property String $incidentTypeSyougai
 * @property String $incidentTypeJiko
 * @property String $incidentTypeClaim
 * @property String $incidentTypeToiawase
 * @property String $incidentTypeInfo
 * @property String $incidentTypeOther
 * @property String $incidentStatusCall
 * @property String $incidentStatusTaio
 * @property String $incidentStatusAct
 * @property String $incidentNo
 * @property String $callContent
 * @property String $parentIncidentNo
 * @property String $incidentStartDateTimeFrom
 * @property String $incidentStartDateTimeTo
 * @property String $callStartDateFrom
 * @property String $callStartDateTo
 * @property String $industryTypeMachinery
 * @property String $industryTypeElectricalMachinery
 * @property String $industryTypeInstrumentation
 * @property String $industryTypeInfo
 * @property String $industryTypeEnvironment
 * @property String $industryTypeWBC
 * @property String $industryTypeOther
 * @property String $kijoNm
 * @property String $jigyosyutaiNm
 * @property String $setubiNm
 * @property String $prefCd
 * @property String $custNm
 * @property String $custTypeNenkan
 * @property String $custTypeTenken
 * @property String $custTypeNasi
 * @property String $custTypeKasi
 * @property String $custTypeOther
 * @property String $salesDeptNm
 * @property String $salesUserNm
 * @property String $relateUserNm
 */
class IncidentListConditionSaveDto extends CommonDto{

    private $condNm;
    private $incidentTypeSyougai;
    private $incidentTypeJiko;
    private $incidentTypeClaim;
    private $incidentTypeToiawase;
    private $incidentTypeInfo;
    private $incidentTypeOther;
    private $incidentStatusCall;
    private $incidentStatusTaio;
    private $incidentStatusAct;
    private $incidentNo;
    private $callContent;
    private $parentIncidentNo;
    private $incidentStartDateTimeFrom;
    private $incidentStartDateTimeTo;
    private $callStartDateFrom;
    private $callStartDateTo;
    private $industryTypeMachinery;
    private $industryTypeElectricalMachinery;
    private $industryTypeInstrumentation;
    private $industryTypeInfo;
    private $industryTypeEnvironment;
    private $industryTypeWBC;
    private $industryTypeOther;
    private $kijoNm;
    private $jigyosyutaiNm;
    private $setubiNm;
    private $prefCd;
    private $custNm;
    private $custTypeNenkan;
    private $custTypeTenken;
    private $custTypeNasi;
    private $custTypeKasi;
    private $custTypeOther;
    private $salesDeptNm;
    private $salesUserNm;
    private $relateUserNm;

    /**
     * @return String
     */
    public function getCondNm() {
        return $this->condNm;
    }

    /**
     * @param String $condNm
     */
    public function setCondNm($condNm) {
        $this->condNm = $condNm;
    }

    /**
     * @return String
     */
    public function getIncidentTypeSyougai() {
        return $this->incidentTypeSyougai;
    }

    /**
     * @param String $incidentTypeSyougai
     */
    public function setIncidentTypeSyougai($incidentTypeSyougai) {
        $this->incidentTypeSyougai = $incidentTypeSyougai;
    }

    /**
     * @return String
     */
    public function getIncidentTypeJiko() {
        return $this->incidentTypeJiko;
    }

    /**
     * @param String $incidentTypeJiko
     */
    public function setIncidentTypeJiko($incidentTypeJiko) {
        $this->incidentTypeJiko = $incidentTypeJiko;
    }

    /**
     * @return String
     */
    public function getIncidentTypeClaim() {
        return $this->incidentTypeClaim;
    }

    /**
     * @param String $incidentTypeClaim
     */
    public function setIncidentTypeClaim($incidentTypeClaim) {
        $this->incidentTypeClaim = $incidentTypeClaim;
    }

    /**
     * @return String
     */
    public function getIncidentTypeToiawase() {
        return $this->incidentTypeToiawase;
    }

    /**
     * @param String $incidentTypeToiawase
     */
    public function setIncidentTypeToiawase($incidentTypeToiawase) {
        $this->incidentTypeToiawase = $incidentTypeToiawase;
    }

    /**
     * @return String
     */
    public function getIncidentTypeInfo() {
        return $this->incidentTypeInfo;
    }

    /**
     * @param String $incidentTypeInfo
     */
    public function setIncidentTypeInfo($incidentTypeInfo) {
        $this->incidentTypeInfo = $incidentTypeInfo;
    }

    /**
     * @return String
     */
    public function getIncidentTypeOther() {
        return $this->incidentTypeOther;
    }

    /**
     * @param String $incidentTypeOther
     */
    public function setIncidentTypeOther($incidentTypeOther) {
        $this->incidentTypeOther = $incidentTypeOther;
    }

    /**
     * @return String
     */
    public function getIncidentStatusCall() {
        return $this->incidentStatusCall;
    }

    /**
     * @param String $incidentStatusCall
     */
    public function setIncidentStatusCall($incidentStatusCall) {
        $this->incidentStatusCall = $incidentStatusCall;
    }

    /**
     * @return String
     */
    public function getIncidentStatusTaio() {
        return $this->incidentStatusTaio;
    }

    /**
     * @param String $incidentStatusTaio
     */
    public function setIncidentStatusTaio($incidentStatusTaio) {
        $this->incidentStatusTaio = $incidentStatusTaio;
    }

    /**
     * @return String
     */
    public function getIncidentStatusAct() {
        return $this->incidentStatusAct;
    }

    /**
     * @param String $incidentStatusAct
     */
    public function setIncidentStatusAct($incidentStatusAct) {
        $this->incidentStatusAct = $incidentStatusAct;
    }

    /**
     * @return String
     */
    public function getIncidentNo() {
        return $this->incidentNo;
    }

    /**
     * @param String $incidentNo
     */
    public function setIncidentNo($incidentNo) {
        $this->incidentNo = $incidentNo;
    }

    /**
     * @return String
     */
    public function getCallContent() {
        return $this->callContent;
    }

    /**
     * @param String $callContent
     */
    public function setCallContent($callContent) {
        $this->callContent = $callContent;
    }

    /**
     * @return String
     */
    public function getParentIncidentNo() {
        return $this->parentIncidentNo;
    }

    /**
     * @param String $parentIncidentNo
     */
    public function setParentIncidentNo($parentIncidentNo) {
        $this->parentIncidentNo = $parentIncidentNo;
    }

    /**
     * @return String
     */
    public function getIncidentStartDateTimeFrom() {
        return $this->incidentStartDateTimeFrom;
    }

    /**
     * @param String $incidentStartDateTimeFrom
     */
    public function setIncidentStartDateTimeFrom($incidentStartDateTimeFrom) {
        $this->incidentStartDateTimeFrom = $incidentStartDateTimeFrom;
    }

    /**
     * @return String
     */
    public function getIncidentStartDateTimeTo() {
        return $this->incidentStartDateTimeTo;
    }

    /**
     * @param String $incidentStartDateTimeTo
     */
    public function setIncidentStartDateTimeTo($incidentStartDateTimeTo) {
        $this->incidentStartDateTimeTo = $incidentStartDateTimeTo;
    }

    /**
     * @return String
     */
    public function getCallStartDateFrom() {
        return $this->callStartDateFrom;
    }

    /**
     * @param String $callStartDateFrom
     */
    public function setCallStartDateFrom($callStartDateFrom) {
        $this->callStartDateFrom = $callStartDateFrom;
    }

    /**
     * @return String
     */
    public function getCallStartDateTo() {
        return $this->callStartDateTo;
    }

    /**
     * @param String $callStartDateTo
     */
    public function setCallStartDateTo($callStartDateTo) {
        $this->callStartDateTo = $callStartDateTo;
    }

    /**
     * @return String
     */
    public function getIndustryTypeMachinery() {
        return $this->industryTypeMachinery;
    }

    /**
     * @param String $industryTypeMachinery
     */
    public function setIndustryTypeMachinery($industryTypeMachinery) {
        $this->industryTypeMachinery = $industryTypeMachinery;
    }

    /**
     * @return String
     */
    public function getIndustryTypeElectricalMachinery() {
        return $this->industryTypeElectricalMachinery;
    }

    /**
     * @param String $industryTypeElectricalMachinery
     */
    public function setIndustryTypeElectricalMachinery($industryTypeElectricalMachinery) {
        $this->industryTypeElectricalMachinery = $industryTypeElectricalMachinery;
    }

    /**
     * @return String
     */
    public function getIndustryTypeInstrumentation() {
        return $this->industryTypeInstrumentation;
    }

    /**
     * @param String $industryTypeInstrumentation
     */
    public function setIndustryTypeInstrumentation($industryTypeInstrumentation) {
        $this->industryTypeInstrumentation = $industryTypeInstrumentation;
    }

    /**
     * @return String
     */
    public function getIndustryTypeInfo() {
        return $this->industryTypeInfo;
    }

    /**
     * @param String $industryTypeInfo
     */
    public function setIndustryTypeInfo($industryTypeInfo) {
        $this->industryTypeInfo = $industryTypeInfo;
    }

    /**
     * @return String
     */
    public function getIndustryTypeEnvironment() {
        return $this->industryTypeEnvironment;
    }

    /**
     * @param String $industryTypeEnvironment
     */
    public function setIndustryTypeEnvironment($industryTypeEnvironment) {
        $this->industryTypeEnvironment = $industryTypeEnvironment;
    }

    /**
     * @return String
     */
    public function getIndustryTypeWBC() {
        return $this->industryTypeWBC;
    }

    /**
     * @param String $industryTypeWBC
     */
    public function setIndustryTypeWBC($industryTypeWBC) {
        $this->industryTypeWBC = $industryTypeWBC;
    }

    /**
     * @return String
     */
    public function getIndustryTypeOther() {
        return $this->industryTypeOther;
    }

    /**
     * @param String $industryTypeOther
     */
    public function setIndustryTypeOther($industryTypeOther) {
        $this->industryTypeOther = $industryTypeOther;
    }

    /**
     * @return String
     */
    public function getKijoNm() {
        return $this->kijoNm;
    }

    /**
     * @param String $kijoNm
     */
    public function setKijoNm($kijoNm) {
        $this->kijoNm = $kijoNm;
    }

    /**
     * @return String
     */
    public function getJigyosyutaiNm() {
        return $this->jigyosyutaiNm;
    }

    /**
     * @param String $jigyosyutaiNm
     */
    public function setJigyosyutaiNm($jigyosyutaiNm) {
        $this->jigyosyutaiNm = $jigyosyutaiNm;
    }

    /**
     * @return String
     */
    public function getSetubiNm() {
        return $this->setubiNm;
    }

    /**
     * @param String $setubiNm
     */
    public function setSetubiNm($setubiNm) {
        $this->setubiNm = $setubiNm;
    }

    /**
     * @return String
     */
    public function getPrefCd() {
        return $this->prefCd;
    }

    /**
     * @param String $prefCd
     */
    public function setPrefCd($prefCd) {
        $this->prefCd = $prefCd;
    }

    public function getCustNm() {
        return $this->custNm;
    }

    /**
     * @param String $custNm
     */
    public function setCustNm($custNm) {
        $this->custNm = $custNm;
    }

    /**
     * @return String
     */
    public function getCustTypeNenkan() {
        return $this->custTypeNenkan;
    }

    /**
     * @param String $custTypeNenkan
     */
    public function setCustTypeNenkan($custTypeNenkan) {
        $this->custTypeNenkan = $custTypeNenkan;
    }

    /**
     * @return String
     */
    public function getCustTypeTenken() {
        return $this->custTypeTenken;
    }

    /**
     * @param String $custTypeTenken
     */
    public function setCustTypeTenken($custTypeTenken) {
        $this->custTypeTenken = $custTypeTenken;
    }

    /**
     * @return String
     */
    public function getCustTypeNasi() {
        return $this->custTypeNasi;
    }

    /**
     * @param String $custTypeNasi
     */
    public function setCustTypeNasi($custTypeNasi) {
        $this->custTypeNasi = $custTypeNasi;
    }

    /**
     * @return String
     */
    public function getCustTypeKasi() {
        return $this->custTypeKasi;
    }

    /**
     * @param String $custTypeKasi
     */
    public function setCustTypeKasi($custTypeKasi) {
        $this->custTypeKasi = $custTypeKasi;
    }

    /**
     * @return String
     */
    public function getCustTypeOther() {
        return $this->custTypeOther;
    }

    /**
     * @param String $custTypeOther
     */
    public function setCustTypeOther($custTypeOther) {
        $this->custTypeOther = $custTypeOther;
    }

    /**
     * @return String
     */
    public function getSalesDeptNm() {
        return $this->salesDeptNm;
    }

    /**
     * @param String $salesDeptNm
     */
    public function setSalesDeptNm($salesDeptNm) {
        $this->salesDeptNm = $salesDeptNm;
    }

    /**
     * @return String
     */
    public function getSalesUserNm() {
        return $this->salesUserNm;
    }

    /**
     * @param String $salesUserNm
     */
    public function setSalesUserNm($salesUserNm) {
        $this->salesUserNm = $salesUserNm;
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

}