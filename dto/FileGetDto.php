<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileGetDto
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class FileGetDto
 *
 * @property String $fileId
 */
class FileGetDto extends CommonDto{

    private $fileId;
    
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

}