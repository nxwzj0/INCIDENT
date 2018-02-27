<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：IncidentListConditionGetDto
//	作成日付・作成者：2018.01.19 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class IncidentListConditionGetDto
 *
 * @property UserDto $loginUser
 */
class IncidentListConditionGetDto extends CommonDto {

    private $loginUser;

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
