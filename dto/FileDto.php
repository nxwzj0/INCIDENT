<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：FileDto
//	作成日付・作成者：2018.01.23 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class FileDto
 *
 * @property String $fileId
 * @property String $incidentId
 * @property String $fileNm
 * @property String $filePath
 * @property String $fsvrNm
 * @property String $fileSize
 */
class FileDto extends CommonDto{

    private $fileId;
    private $incidentId;
    private $fileNm;
    private $filePath;
    private $fsvrNm;
    private $fileSize;

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
     * @return String
     */
    public function getIncidentId() {
        return $this->incidentId;
    }

    /**
     * @param String $incidentId
     */
    public function setIncidentId($incidentId) {
        $this->incidentId = $incidentId;
    }

    /**
     * @return String
     */
    public function getFileNm() {
        return $this->fileNm;
    }

    /**
     * @param String $fileNm
     */
    public function setFileNm($fileNm) {
        $this->fileNm = $fileNm;
    }

    /**
     * @return String
     */
    public function getFilePath() {
        return $this->filePath;
    }

    /**
     * @param String $filePath
     */
    public function setFilePath($filePath) {
        $this->filePath = $filePath;
    }

    /**
     * @return String
     */
    public function getFsvrNm() {
        return $this->fsvrNm;
    }

    /**
     * @param String $fsvrNm
     */
    public function setFsvrNm($fsvrNm) {
        $this->fsvrNm = $fsvrNm;
    }

    /**
     * @return String
     */
    public function getFileSize() {
        return $this->fileSize;
    }

    /**
     * @param String $fileSize
     */
    public function setFileSize($fileSize) {
        $this->fileSize = $fileSize;
    }
}