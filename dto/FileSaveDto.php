<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileSaveDto
//	作成日付・作成者：2018.01.29 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class FileSaveDto
 *
 * @property FileDto[] $fileList
 * @property UserDto $loginUser
 *
 */
class FileSaveDto extends CommonDto {

    private $fileList;
    private $loginUser;

    /**
     * @return FileDto[]
     */
    public function getFileList() {
        return $this->fileList;
    }

    /**
     * @param int $index
     * @return FileDto
     */
    public function getFile($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->fileList[$index];
        }
    }

    /**
     * @param FileDto $fileDto
     */
    public function addFileList(FileDto $fileDto) {
        $this->fileList[] = $fileDto;
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
