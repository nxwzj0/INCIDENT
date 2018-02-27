<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileDeleteSaveDto
//	作成日付・作成者：2018.02.13 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class FileSaveDto
 *
 * @property String $fileId
 * @property UserDto $loginUser
 *
 */
class FileDeleteSaveDto extends CommonDto {

    private $fileId;
    private $loginUser;

    /**
     * @return String
     */
    public function getFileId() {
        return $this->fileId;
    }

    /**
     * @param String $fileId
     */
    public function setFileId($fileId) {
        $this->fileId = $fileId;
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
