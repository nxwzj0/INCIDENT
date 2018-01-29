<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileGetResultDto
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class FileGetResultDto
 *
 * @property FileDto $fileData
 */
class FileGetResultDto extends CommonDto{
    private $fileData;

    /**
     * @return FileDto
     */
    public function getFileData() {
        return $this->fileData;
    }

    /**
     * @param FileDto $fileData
     */
    public function setFileData(FileDto $fileData) {
        $this->fileData = $fileData;
    }

}