<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：Test　配列作成
//	作成日付・作成者：2017.10.06 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/UserDto.php');

/**
 * Class CreateArrayDto
 *
 * @property String $testId
 * @property UserDto[] $usrList
 */
class CreateArrayDto {

    private $testId;
    private $usrList = array();

    /**
     * @return String
     */
    public function getTestId() {
        return $this->testId;
    }

    /**
     * @param String $testId
     */
    public function setTestId($testId) {
        return $this->testId = $testId;
    }

    /**
     * @return UserDto[]
     */
    public function getUserList() {
        return $this->usrList;
    }

    /**
     * @param int $index
     * @return UserDto
     */
    public function getUser($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->usrList[$index];
        }
    }

    /**
     * @param UserDto $usr
     */
    public function addUserList(UserDto $usr) {
        $this->usrList[] = $usr;
    }

}
