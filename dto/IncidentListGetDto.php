<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListGetDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentListGetDto
 * 
 * @property boolean $RelateFlg
 * @property String $keywordStr
 * @property boolean $logFlg
 * @property String $incidentId
 * @property String $incidentNo
 * @property String $parentIncidentNo
 * @property String $incidentStartDateTimeFrom
 * @property String $incidentStartDateTimeTo
 * @property String $infoSource
 * @property String $infoProvider
 * @property String $infoProviderTel
 * @property String $memo
 * @property String $kijoNm
 * @property String $jigyosyutaiNm
 * @property String $setubiNm
 * @property String $prefNm
 * @property String $deliveryPjNm
 * @property String $custNm
 * @property String $custTypeNm
 * @property String $custDept
 * @property String $requester
 * @property String $contactTel
 * @property String $contactFax
 * @property String $contactMail
 * @property String $relateNm
 * @property String $salesDeptNm
 * @property String $salesUserNm
 * @property String $skanDeptNm
 * @property String $skanUserNm
 * @property String $callStartDateFrom
 * @property String $callStartDateTo
 * @property String $callEndDateFrom
 * @property String $callEndDateTo
 * @property String $callDeptNm
 * @property String $callUserNm
 * @property String $callTel
 * @property String $callMail
 * @property String $callContent
 * @property String $taioStartDateFrom
 * @property String $taioStartDateTo
 * @property String $taioEndDateFrom
 * @property String $taioEndDateTo
 * @property String $taioDeptNm
 * @property String $taioUserNm
 * @property String $taioTel
 * @property String $taioMail
 * @property String $taioContent
 * @property String $actDateFrom
 * @property String $actDateTo
 * @property String $actType
 * @property String $actStartTimeFrom
 * @property String $actStartTimeTo
 * @property String $actEndTimeFrom
 * @property String $actEndTimeTo
 * @property String $actDeptNm
 * @property String $actUserNm
 * @property String $actTel
 * @property String $actMail
 * @property String $actContent
 * @property String $productType
 * @property String $productTrigger
 * @property String $productHindo
 * @property String $productGensyo
 * @property String $productStatus
 * @property String $incidentTypeSyougai
 * @property String $incidentTypeJiko
 * @property String $incidentTypeClaim
 * @property String $incidentTypeToiawase
 * @property String $incidentTypeInfo
 * @property String $incidentTypeOther
 * @property String $incidentStatusCall
 * @property String $incidentStatusTaio
 * @property String $incidentStatusAct
 * @property String $industryTypeMachinery
 * @property String $industryTypeElectricalMachinery
 * @property String $industryTypeInstrumentation
 * @property String $industryTypeInfo
 * @property String $industryTypeEnvironment
 * @property String $industryTypeWBC
 * @property String $industryTypeOther
 * @property String $prefCd
 * @property String $custTypeNenkan
 * @property String $custTypeTenken
 * @property String $custTypeNasi
 * @property String $custTypeKasi
 * @property String $custTypeOther
 * @property String $condId
 */
class IncidentListGetDto extends CommonDto{
    private $RelateFlg;
    private $keywordStr;
    private $logFlg;
    private $incidentId;
    private $incidentNo;
    private $parentIncidentNo;
    private $incidentStartDateTimeFrom;
    private $incidentStartDateTimeTo;
    private $infoSource;
    private $infoProvider;
    private $infoProviderTel;
    private $memo;
    private $kijoNm;
    private $jigyosyutaiNm;
    private $setubiNm;
    private $prefNm;
    private $deliveryPjNm;
    private $custNm;
    private $custTypeNm;
    private $custDept;
    private $requester;
    private $contactTel;
    private $contactFax;
    private $contactMail;
    private $relateNm;
    private $salesDeptNm;
    private $salesUserNm;
    private $skanDeptNm;
    private $skanUserNm;
    private $callStartDateFrom;
    private $callStartDateTo;
    private $callEndDateFrom;
    private $callEndDateTo;
    private $callDeptNm;
    private $callUserNm;
    private $callTel;
    private $callMail;
    private $callContent;
    private $taioStartDateFrom;
    private $taioStartDateTo;
    private $taioEndDateFrom;
    private $taioEndDateTo;
    private $taioDeptNm;
    private $taioUserNm;
    private $taioTel;
    private $taioMail;
    private $taioContent;
    private $actDateFrom;
    private $actDateTo;
    private $actType;
    private $actStartTimeFrom;
    private $actStartTimeTo;
    private $actEndTimeFrom;
    private $actEndTimeto;
    private $actDeptNm;
    private $actUserNm;
    private $actTel;
    private $actMail;
    private $actContent;
    private $productType;
    private $productTrigger;
    private $productHindo;
    private $productGensyo;
    private $productStatus;
    //2018.01.09 Newtouch追加 start
    private $incidentTypeSyougai;
    private $incidentTypeJiko;
    private $incidentTypeClaim;
    private $incidentTypeToiawase;
    private $incidentTypeInfo;
    private $incidentTypeOther;
    private $incidentStatusCall;
    private $incidentStatusTaio;
    private $incidentStatusAct;
    private $industryTypeMachinery;
    private $industryTypeElectricalMachinery;
    private $industryTypeInstrumentation;
    private $industryTypeInfo;
    private $industryTypeEnvironment;
    private $industryTypeWBC;
    private $industryTypeOther;
    private $prefCd;
    private $custTypeNenkan;
    private $custTypeTenken;
    private $custTypeNasi;
    private $custTypeKasi;
    private $custTypeOther;
    private $condId;
    //2018.01.09 Newtouch追加 end
// ::: 2018.01.22 [#23] 入力補助モーダル　インシデント Add Start newtouch
    private $incidentType;
    private $incidentStatus;

    public function getIncidentType() {
        return $this->incidentType;
    }

    public function getIncidentStatus() {
        return $this->incidentStatus;
    }

    public function setIncidentType($incidentType) {
        $this->incidentType = $incidentType;
    }

    public function setIncidentStatus($incidentStatus) {
        $this->incidentStatus = $incidentStatus;
    }
// ::: 2018.01.22 [#23] 入力補助モーダル　インシデント Add End   newtouch

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
     * @return String
     */
    public function getKeywordStr() {
        return $this->keywordStr;
    }

    /**
     * @param String $keywordStr
     */
    public function setKeywordStr($keywordStr) {
        $this->keywordStr = $keywordStr;
    }

    /**
     * @return boolean
     */
    public function getLogFlg() {
        return $this->logFlg;
    }

    /**
     * @param boolean $logFlg
     */
    public function setLogFlg($logFlg) {
        $this->logFlg = $logFlg;
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

    /**
     * @return String
     */
    function getIncidentNo() {
        return $this->incidentNo;
    }

    /**
     * @param String $incidentNo
     */
    function setIncidentNo($incidentNo) {
        $this->incidentNo = $incidentNo;
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
    public function getInfoSource() {
        return $this->infoSource;
    }

    /**
     * @param String $infoSource
     */
    public function setInfoSource($infoSource) {
        $this->infoSource = $infoSource;
    }

    /**
     * @return String
     */
    public function getInfoProvider() {
        return $this->infoProvider;
    }

    /**
     * @param String $infoProvider
     */
    public function setInfoProvider($infoProvider) {
        $this->infoProvider = $infoProvider;
    }

    /**
     * @return String
     */
    public function getInfoProviderTel() {
        return $this->infoProviderTel;
    }

    /**
     * @param String $infoProviderTel
     */
    public function setInfoProviderTel($infoProviderTel) {
        $this->infoProviderTel = $infoProviderTel;
    }

    /**
     * @return String
     */
    public function getMemo() {
        return $this->memo;
    }

    /**
     * @param String $memo
     */
    public function setMemo($memo) {
        $this->memo = $memo;
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
    public function getPrefNm() {
        return $this->prefNm;
    }

    /**
     * @param String $prefNm
     */
    public function setPrefNm($prefNm) {
        $this->prefNm = $prefNm;
    }

    /**
     * @return String
     */
    public function getDeliveryPjNm() {
        return $this->deliveryPjNm;
    }

    /**
     * @param String $deliveryPjNm
     */
    public function setDeliveryPjNm($deliveryPjNm) {
        $this->deliveryPjNm = $deliveryPjNm;
    }

    /**
     * @return String
     */
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
    public function getCustTypeNm() {
        return $this->custTypeNm;
    }

    /**
     * @param String $custTypeNm
     */
    public function setCustTypeNm($custTypeNm) {
        $this->custTypeNm = $custTypeNm;
    }

    /**
     * @return String
     */
    public function getCustDept() {
        return $this->custDept;
    }

    /**
     * @param String $custDept
     */
    public function setCustDept($custDept) {
        $this->custDept = $custDept;
    }

    /**
     * @return String
     */
    public function getRequester() {
        return $this->requester;
    }

    /**
     * @param String $requester
     */
    public function setRequester($requester) {
        $this->requester = $requester;
    }

    /**
     * @return String
     */
    public function getContactTel() {
        return $this->contactTel;
    }

    /**
     * @param String $contactTel
     */
    public function setContactTel($contactTel) {
        $this->contactTel = $contactTel;
    }

    /**
     * @return String
     */
    public function getContactFax() {
        return $this->contactFax;
    }

    /**
     * @param String $contactFax
     */
    public function setContactFax($contactFax) {
        $this->contactFax = $contactFax;
    }

    /**
     * @return String
     */
    public function getContactMail() {
        return $this->contactMail;
    }

    /**
     * @param String $contactMail
     */
    public function setContactMail($contactMail) {
        $this->contactMail = $contactMail;
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
    public function getCallEndDateFrom() {
        return $this->callEndDateFrom;
    }

    /**
     * @param String $callEndDateFrom
     */
    public function setCallEndDateFrom($callEndDateFrom) {
        $this->callEndDateFrom = $callEndDateFrom;
    }
    
    /**
     * @return String
     */
    public function getCallEndDateTo() {
        return $this->callEndDateTo;
    }

    /**
     * @param String $callEndDateTo
     */
    public function setCallEndDateTo($callEndDateTo) {
        $this->callEndDateTo = $callEndDateTo;
    }

    /**
     * @return String
     */
    public function getCallTel() {
        return $this->callTel;
    }

    /**
     * @param String $callTel
     */
    public function setCallTel($callTel) {
        $this->callTel = $callTel;
    }

    /**
     * @return String
     */
    public function getCallMail() {
        return $this->callMail;
    }

    /**
     * @param String $callMail
     */
    public function setCallMail($callMail) {
        $this->callMail = $callMail;
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
    public function getRelateNm() {
        return $this->relateNm;
    }

    /**
     * @param String $relateNm
     */
    public function setRelateNm($relateNm) {
        $this->relateNm = $relateNm;
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
    public function getSkanDeptNm() {
        return $this->skanDeptNm;
    }

    /**
     * @param String $skanDeptNm
     */
    public function setSkanDeptNm($skanDeptNm) {
        $this->skanDeptNm = $skanDeptNm;
    }

    /**
     * @return String
     */
    public function getSkanUserNm() {
        return $this->skanUserNm;
    }

    /**
     * @param String $skanUserNm
     */
    public function setSkanUserNm($skanUserNm) {
        $this->skanUserNm = $skanUserNm;
    }

    /**
     * @return String
     */
    public function getCallDeptNm() {
        return $this->callDeptNm;
    }

    /**
     * @param String $callDeptNm
     */
    public function setCallDeptNm($callDeptNm) {
        $this->callDeptNm = $callDeptNm;
    }

    /**
     * @return String
     */
    public function getCallUserNm() {
        return $this->callUserNm;
    }

    /**
     * @param String $callUserNm
     */
    public function setCallUserNm($callUserNm) {
        $this->callUserNm = $callUserNm;
    }

    /**
     * @return String
     */
    public function getTaioDeptNm() {
        return $this->taioDeptNm;
    }

    /**
     * @param String $taioDeptNm
     */
    public function setTaioDeptNm($taioDeptNm) {
        $this->taioDeptNm = $taioDeptNm;
    }

    /**
     * @return String
     */
    public function getTaioUserNm() {
        return $this->taioUserNm;
    }

    /**
     * @param String $taioUserNm
     */
    public function setTaioUserNm($taioUserNm) {
        $this->taioUserNm = $taioUserNm;
    }

    /**
     * @return String
     */
    public function getActDeptNm() {
        return $this->actDeptNm;
    }

    /**
     * @param String $actDeptNm
     */
    public function setActDeptNm($actDeptNm) {
        $this->actDeptNm = $actDeptNm;
    }

    /**
     * @return String
     */
    public function getActUserNm() {
        return $this->actUserNm;
    }

    /**
     * @param String $actUserNm
     */
    public function setActUserNm($actUserNm) {
        $this->actUserNm = $actUserNm;
    }

    /**
     * @return String
     */
    public function getTaioStartDateFrom() {
        return $this->taioStartDateFrom;
    }

    /**
     * @param $taioStartDateFrom
     */
    public function setTaioStartDateFrom($taioStartDateFrom) {
        $this->taioStartDateFrom = $taioStartDateFrom;
    }

    /**
     * @return String
     */
    public function getTaioStartDateTo() {
        return $this->taioStartDateTo;
    }

    /**
     * @param $taioStartDateTo
     */
    public function setTaioStartDateTo($taioStartDateTo) {
        $this->taioStartDateTo = $taioStartDateTo;
    }

    /**
     * @return String
     */
    public function getTaioEndDateFrom() {
        return $this->taioEndDateFrom;
    }

    /**
     * @param $taioEndDateFrom
     */
    public function setTaioEndDateFrom($taioEndDateFrom) {
        $this->taioEndDateFrom = $taioEndDateFrom;
    }

    /**
     * @return String
     */
    public function getTaioEndDateTo() {
        return $this->taioEndDateTo;
    }

    /**
     * @param $taioEndDateTo
     */
    public function setTaioEndDateTo($taioEndDateTo) {
        $this->taioEndDateTo = $taioEndDateTo;
    }

    /**
     * @return String
     */
    public function getTaioTel() {
        return $this->taioTel;
    }

    /**
     * @param $taioTel 
     */
    public function setTaioTel($taioTel) {
        $this->taioTel = $taioTel;
    }

    /**
     * @return String
     */
    public function getTaioMail() {
        return $this->taioMail;
    }

    /**
     * @param $taioMail 
     */
    public function setTaioMail($taioMail) {
        $this->taioMail = $taioMail;
    }

    /**
     * @return String
     */
    public function getTaioContent() {
        return $this->taioContent;
    }

    /**
     * @param $taioContent 
     */
    public function setTaioContent($taioContent) {
        $this->taioContent = $taioContent;
    }

    /**
     * @return String
     */
    public function getActDateFrom() {
        return $this->actDateFrom;
    }

    /**
     * @param $actDateFrom
     */
    public function setActDateFrom($actDateFrom) {
        $this->actDateFrom = $actDateFrom;
    }

    /**
     * @return String
     */
    public function getActDateTo() {
        return $this->actDateTo;
    }

    /**
     * @param $actDateTo
     */
    public function setActDateTo($actDateTo) {
        $this->actDateTo = $actDateTo;
    }

    /**
     * @return String
     */
    public function getActType() {
        return $this->actType;
    }

    /**
     * @param $actType 
     */
    public function setActType($actType) {
        $this->actType = $actType;
    }

    /**
     * @return String
     */
    public function getActStartTimeFrom() {
        return $this->actStartTimeFrom;
    }

    /**
     * @param $actStartTimeFrom
     */
    public function setActStartTimeFrom($actStartTimeFrom) {
        $this->actStartTimeFrom = $actStartTimeFrom;
    }

    /**
     * @return String
     */
    public function getActStartTimeTo() {
        return $this->actStartTimeTo;
    }

    /**
     * @param $actStartTimeTo
     */
    public function setActStartTimeTo($actStartTimeTo) {
        $this->actStartTimeTo = $actStartTimeTo;
    }

    /**
     * @return String
     */
    public function getActEndTimeFrom() {
        return $this->actEndTimeFrom;
    }

    /**
     * @param $actEndTimeFrom
     */
    public function setActEndTimeFrom($actEndTimeFrom) {
        $this->actEndTimeFrom = $actEndTimeFrom;
    }

    /**
     * @return String
     */
    public function getActEndTimeTo() {
        return $this->actEndTimeTo;
    }

    /**
     * @param $actEndTimeTo
     */
    public function setActEndTimeTo($actEndTimeTo) {
        $this->actEndTimeTo = $actEndTimeTo;
    }

    /**
     * @return String
     */
    public function getActTel() {
        return $this->actTel;
    }

    /**
     * @param $actTel 
     */
    public function setActTel($actTel) {
        $this->actTel = $actTel;
    }

    /**
     * @return String
     */
    public function getActMail() {
        return $this->actMail;
    }

    /**
     * @param $actMail 
     */
    public function setActMail($actMail) {
        $this->actMail = $actMail;
    }

    /**
     * @return String
     */
    public function getActContent() {
        return $this->actContent;
    }

    /**
     * @param $actContent 
     */
    public function setActContent($actContent) {
        $this->actContent = $actContent;
    }

    /**
     * @return String
     */
    public function getProductType() {
        return $this->productType;
    }

    /**
     * @param $productType 
     */
    public function setProductType($productType) {
        $this->productType = $productType;
    }

    /**
     * @return String
     */
    public function getProductTrigger() {
        return $this->productTrigger;
    }

    /**
     * @param $productTrigger 
     */
    public function setProductTrigger($productTrigger) {
        $this->productTrigger = $productTrigger;
    }

    /**
     * @return String
     */
    public function getProductHindo() {
        return $this->productHindo;
    }

    /**
     * @param $productHindo 
     */
    public function setProductHindo($productHindo) {
        $this->productHindo = $productHindo;
    }

    /**
     * @return String
     */
    public function getProductGensyo() {
        return $this->productGensyo;
    }

    /**
     * @param $productGensyo 
     */
    public function setProductGensyo($productGensyo) {
        $this->productGensyo = $productGensyo;
    }

    /**
     * @return String
     */
    public function getProductStatus() {
        return $this->productStatus;
    }

    /**
     * @param $productStatus 
     */
    public function setProductStatus($productStatus) {
        $this->productStatus = $productStatus;
    }

    /**
     * @return String
     */
    public function getIncidentTypeSyougai() {
        return $this->incidentTypeSyougai;
    }

    /**
     * @param $incidentTypeSyougai 
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
     * @param $incidentTypeJiko 
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
     * @param $incidentTypeClaim 
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
     * @param $incidentTypeToiawase 
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
     * @param $incidentTypeInfo 
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
     * @param $incidentTypeOther 
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
     * @param $incidentStatusCall 
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
     * @param $incidentStatusTaio 
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
     * @param $incidentStatusAct 
     */
    public function setIncidentStatusAct($incidentStatusAct) {
        $this->incidentStatusAct = $incidentStatusAct;
    }

    /**
     * @return String
     */
    public function getIndustryTypeMachinery() {
        return $this->industryTypeMachinery;
    }

    /**
     * @param $industryTypeMachinery 
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
     * @param $industryTypeElectricalMachinery 
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
     * @param $industryTypeInstrumentation 
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
     * @param $industryTypeInfo 
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
     * @param $industryTypeEnvironment 
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
     * @param $industryTypeWBC 
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
     * @param $industryTypeOther 
     */
    public function setIndustryTypeOther($industryTypeOther) {
        $this->industryTypeOther = $industryTypeOther;
    }

    /**
     * @return String
     */
    public function getPrefCd() {
        return $this->prefCd;
    }

    /**
     * @param $prefCd 
     */
    public function setPrefCd($prefCd) {
        $this->prefCd = $prefCd;
    }

    /**
     * @return String
     */
    public function getCustTypeNenkan() {
        return $this->custTypeNenkan;
    }

    /**
     * @param $custTypeNenkan 
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
     * @param $custTypeTenken 
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
     * @param $custTypeNasi 
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
     * @param $custTypeKasi 
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
     * @param $custTypeOther 
     */
    public function setCustTypeOther($custTypeOther) {
        $this->custTypeOther = $custTypeOther;
    }

    /**
     * @return String
     */
    public function getCondId() {
        return $this->condId;
    }

    /**
     * @param $condId 
     */
    public function setCondId($condId) {
        $this->condId = $condId;
    }


}