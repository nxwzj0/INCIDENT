<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentMainDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentMainDto
 *
 * @property UserDto[] $relateList
 * @property String $kijoId
 * @property String $jigyosyutaiId
 * @property String $setubiId
 * @property String $prefId
 * @property String $deliveryPjNo
 * @property String $custId
 * @property String $custTypeCd
 * @property SectionDto $salesDept
 * @property UserDto $salesUser
 * @property SectionDto $skanDept
 * @property UserDto $skanUser
 * @property SectionDto $callDept
 * @property UserDto $callUser
 * @property SectionDto $taioDept
 * @property UserDto $taioUser
 * @property SectionDto $actDept
 * @property UserDto $actUser
 * @property String $incidentId
 * @property String $incidentNo
 * @property String $incidentStsCd
 * @property String $incidentStsNm
 * @property String $incidentTypeCd
 * @property String $incidentTypeNm
 * @property String $parentIncidentNo
 * @property String $incidentStartDateTime
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
 * @property String $callDate
 * @property String $callStartDate
 * @property String $callEndDate
 * @property String $callTel
 * @property String $callMail
 * @property String $callContent
 * @property String $taioDate
 * @property String $taioStartDate
 * @property String $taioEndDate
 * @property String $taioTel
 * @property String $taioMail
 * @property String $taioContent
 * @property String $actDate
 * @property String $actType
 * @property String $actStartTime
 * @property String $actEndTime
 * @property String $actTel
 * @property String $actMail
 * @property String $actContent
 * @property String $productType
 * @property String $productTrigger
 * @property String $productHindo
 * @property String $productGensyo
 * @property String $productStatus
 */
class IncidentMainDto extends CommonDto{

    private $relateList = array();
    private $kijoId;
    private $jigyosyutaiId;
    private $setubiId;
    private $prefId;
    private $deliveryPjNo;
    private $custId;
    private $custTypeCd;
    private $salesDept;
    private $salesUser;
    private $skanDept;
    private $skanUser;
    private $callDept;
    private $callUser;
    private $taioDept;
    private $taioUser;
    private $actDept;
    private $actUser;
    private $incidentId;
    private $incidentNo;
    private $incidentStsCd;
    private $incidentStsNm;
    private $incidentTypeCd;
    private $incidentTypeNm;
    private $parentIncidentNo;
    private $incidentStartDateTime;
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
    private $callDate;
    private $callStartDate;
    private $callEndDate;
    private $callTel;
    private $callMail;
    private $callContent;
    private $taioDate;
    private $taioStartDate;
    private $taioEndDate;
    private $taioTel;
    private $taioMail;
    private $taioContent;
    private $actDate;
    private $actType;
    private $actStartTime;
    private $actEndTime;
    private $actTel;
    private $actMail;
    private $actContent;
    private $productType;
    private $productTrigger;
    private $productHindo;
    private $productGensyo;
    private $productStatus;
    /**
     * @return String
     */
    public function getKijoId() {
        return $this->kijoId;
    }

    /**
     * @return String
     */
    public function getJigyosyutaiId() {
        return $this->jigyosyutaiId;
    }

    /**
     * @return String
     */
    public function getSetubiId() {
        return $this->setubiId;
    }

    /**
     * @return String
     */
    public function getPrefId() {
        return $this->prefId;
    }

    /**
     * @return String
     */
    public function getDeliveryPjNo() {
        return $this->deliveryPjNo;
    }

    /**
     * @return String
     */
    public function getCustId() {
        return $this->custId;
    }

    /**
     * @return String
     */
    public function getCustTypeCd() {
        return $this->custTypeCd;
    }

    /**
     * @return SectionDto
     */
    public function getSalesDept() {
        return $this->salesDept;
    }

    /**
     * @return UserDto
     */
    public function getSalesUser() {
        return $this->salesUser;
    }

    /**
     * @return SectionDto
     */
    public function getSkanDept() {
        return $this->skanDept;
    }

    /**
     * @return UserDto
     */
    public function getSkanUser() {
        return $this->skanUser;
    }

    /**
     * @return SectionDto
     */
    public function getCallDept() {
        return $this->callDept;
    }

    /**
     * @return String
     */
    public function getCallUser() {
        return $this->callUser;
    }

    /**
     * @return SectionDto
     */
    public function getTaioDept() {
        return $this->taioDept;
    }

    /**
     * @return UserDto
     */
    public function getTaioUser() {
        return $this->taioUser;
    }

    /**
     * @return SectionDto
     */
    public function getActDept() {
        return $this->actDept;
    }

    /**
     * @return UserDto
     */
    public function getActUser() {
        return $this->actUser;
    }

    /**
     * @param String $kijoId
     */
    public function setKijoId($kijoId) {
        $this->kijoId = $kijoId;
    }

    /**
     * @param String $jigyosyutaiId
     */
    public function setJigyosyutaiId($jigyosyutaiId) {
        $this->jigyosyutaiId = $jigyosyutaiId;
    }

    /**
     * @param String $setubiId
     */
    public function setSetubiId($setubiId) {
        $this->setubiId = $setubiId;
    }

    /**
     * @param String $prefId
     */
    public function setPrefId($prefId) {
        $this->prefId = $prefId;
    }

    /**
     * @param String $deliveryPjNo
     */
    public function setDeliveryPjNo($deliveryPjNo) {
        $this->deliveryPjNo = $deliveryPjNo;
    }

    /**
     * @param String $custId
     */
    public function setCustId($custId) {
        $this->custId = $custId;
    }

    /**
     * @param String $custTypeCd
     */
    public function setCustTypeCd($custTypeCd) {
        $this->custTypeCd = $custTypeCd;
    }

    /**
     * @param SectionDto $salesDept
     */
    public function setSalesDept($salesDept) {
        $this->salesDept = $salesDept;
    }

    /**
     * @param UserDto $salesUser
     */
    public function setSalesUser($salesUser) {
        $this->salesUser = $salesUser;
    }

    /**
     * @param SectionDto $skanDept
     */
    public function setSkanDept($skanDept) {
        $this->skanDept = $skanDept;
    }

    /**
     * @param UserDto $skanUser
     */
    public function setSkanUser($skanUser) {
        $this->skanUser = $skanUser;
    }

    /**
     * @param SectionDto $callDept
     */
    public function setCallDept($callDept) {
        $this->callDept = $callDept;
    }

    /**
     * @param UserDto $callUser
     */
    public function setCallUser($callUser) {
        $this->callUser = $callUser;
    }

    /**
     * @param SectionDto $taioDept
     */
    public function setTaioDept($taioDept) {
        $this->taioDept = $taioDept;
    }

    /**
     * @param UserDto $taioUser
     */
    public function setTaioUser($taioUser) {
        $this->taioUser = $taioUser;
    }

    /**
     * @param SectionDto $actDept
     */
    public function setActDept($actDept) {
        $this->actDept = $actDept;
    }

    /**
     * @param UserDto $actUser
     */
    public function setActUser($actUser) {
        $this->actUser = $actUser;
    }
    
    /**
     * @return UserDto[]
     */
    public function getRelateList() {
        return $this->relateList;
    }

    /**
     * @param int $index
     * @return UserDto
     */
    public function getRelate($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->relateList[$index];
        }
    }

    /**
     * @param UserDto $relateList
     */
    public function addRelateList(UserDto $relateList) {
        $this->relateList[] = $relateList;
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
    public function getIncidentStsCd() {
        return $this->incidentStsCd;
    }

    /**
     * @param String $incidentStsCd
     */
    public function setIncidentStsCd($incidentStsCd) {
        $this->incidentStsCd = $incidentStsCd;
    }

    /**
     * @return String
     */
    public function getIncidentStsNm() {
        return $this->incidentStsNm;
    }

    /**
     * @param String $incidentStsNm
     */
    public function setIncidentStsNm($incidentStsNm) {
        $this->incidentStsNm = $incidentStsNm;
    }

    /**
     * @return String
     */
    public function getIncidentTypeCd() {
        return $this->incidentTypeCd;
    }

    /**
     * @param String $incidentTypeCd
     */
    public function setIncidentTypeCd($incidentTypeCd) {
        $this->incidentTypeCd = $incidentTypeCd;
    }

    /**
     * @return String
     */
    public function getIncidentTypeNm() {
        return $this->incidentTypeNm;
    }

    /**
     * @param String $incidentTypeNm
     */
    public function setIncidentTypeNm($incidentTypeNm) {
        $this->incidentTypeNm = $incidentTypeNm;
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
    public function getIncidentStartDateTime() {
        return $this->incidentStartDateTime;
    }

    /**
     * @param String $incidentStartDateTime
     */
    public function setIncidentStartDateTime($incidentStartDateTime) {
        $this->incidentStartDateTime = $incidentStartDateTime;
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
    public function getCallDate() {
        return $this->callDate;
    }

    /**
     * @param String $callDate
     */
    public function setCallDate($callDate) {
        $this->callDate = $callDate;
    }

    /**
     * @return String
     */
    public function getCallStartDate() {
        return $this->callStartDate;
    }

     /**
     * @param String $callStartDate
     */
    public function setCallStartDate($callStartDate) {
        $this->callStartDate = $callStartDate;
    }

    /**
     * @return String
     */
    public function getCallEndDate() {
        return $this->callEndDate;
    }

    /**
     * @param String $callEndDate
     */
    public function setCallEndDate($callEndDate) {
        $this->callEndDate = $callEndDate;
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
    public function getTaioDate() {
        return $this->taioDate;
    }

    /**
     * @param String $taioDate
     */
    public function setTaioDate($taioDate) {
        $this->taioDate = $taioDate;
    }

    /**
     * @return String
     */
    public function getTaioStartDate() {
        return $this->taioStartDate;
    }

    /**
     * @param String $taioStartDate
     */
    public function setTaioStartDate($taioStartDate) {
        $this->taioStartDate = $taioStartDate;
    }

    /**
     * @return String
     */
    public function getTaioEndDate() {
        return $this->taioEndDate;
    }

    /**
     * @param String $taioEndDate
     */
    public function setTaioEndDate($taioEndDate) {
        $this->taioEndDate = $taioEndDate;
    }

    /**
     * @return String
     */
    public function getTaioTel() {
        return $this->taioTel;
    }

    /**
     * @param String $taioTel
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
     * @param String $taioMail
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
     * @param String $taioContent
     */
    public function setTaioContent($taioContent) {
        $this->taioContent = $taioContent;
    }

    /**
     * @return String
     */
    public function getActDate() {
        return $this->actDate;
    }

    /**
     * @param String $actDate
     */
    public function setActDate($actDate) {
        $this->actDate = $actDate;
    }

    /**
     * @return String
     */
    public function getActType() {
        return $this->actType;
    }

    /**
     * @param String $actType
     */
    public function setActType($actType) {
        $this->actType = $actType;
    }

    /**
     * @return String
     */
    public function getActStartTime() {
        return $this->actStartTime;
    }

    /**
     * @param String $actStartTime
     */
    public function setActStartTime($actStartTime) {
        $this->actStartTime = $actStartTime;
    }

    /**
     * @return String
     */
    public function getActEndTime() {
        return $this->actEndTime;
    }

    /**
     * @param String $actEndTime
     */
    public function setActEndTime($actEndTime) {
        $this->actEndTime = $actEndTime;
    }

    /**
     * @return String
     */
    public function getActTel() {
        return $this->actTel;
    }

    /**
     * @param String $actTel
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
     * @param String $actMail
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
     * @param String $actContent
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
     * @param String $productType
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
     * @param String $productTrigger
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
     * @param String $productHindo
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
     * @param String $productGensyo
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
     * @param String $productStatus
     */
    public function setProductStatus($productStatus) {
        $this->productStatus = $productStatus;
    }
}
