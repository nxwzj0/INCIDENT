<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：ユーザDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/SectionDto.php');

/**
 * Class UserDto
 *
 * @property String $userId
 * @property String $userNm
 */
class UserDto extends SectionDto{

    private $userId;
    private $userNm;

    /**
     * @return String
     */
    public function getUserId() {
        return $this->userId;
    }

    /**
     * @param String $userId
     */
    public function setUserId($userId) {
        $this->userId = $userId;
    }

    /**
     * @return String
     */
    public function getUserNm() {
        return $this->userNm;
    }

    /**
     * @param String $userNm
     */
    public function setUserNm($userNm) {
        $this->userNm = $userNm;
    }

}
