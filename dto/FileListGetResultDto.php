<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileListGetResultDto
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class FileListGetResultDto
 *
 * @property FileDto[] $fileList
 */
class FileListGetResultDto extends CommonDto{
    private $fileList;

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

}