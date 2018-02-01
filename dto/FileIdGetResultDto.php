<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileIdGetResultDto
//	作成日付・作成者：2018.01.29 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class FileIdGetResultDto
 *
 * @property String $fileId
 */
class FileIdGetResultDto extends CommonDto{

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