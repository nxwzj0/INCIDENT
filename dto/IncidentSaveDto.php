<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentSaveDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentSaveDto
 *
 * @property IncidentDto $incidentInfo
 * @property UserDto $loginUser
 */
class IncidentSaveDto extends CommonDto{

    private $incidentInfo;
    private $loginUser;

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

    /**
     * @return UserDto
     */
    public function getLoginUser() {
        return $this->loginUser;
    }

    /**
     * @param UserDto $loginUser
     */
    public function setLoginUser($loginUser) {
        $this->loginUser = $loginUser;
    }

}


