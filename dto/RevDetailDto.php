<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：RevDetailDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class RevDetailDto
 *
 * @property String $revItem
 * @property String $revDetail
 */
class RevDetailDto extends CommonDto{

    private $revItem;
    private $revDetail;

    /**
     * @return String
     */
    public function getRevItem() {
        return $this->revItem;
    }

    /**
     * @param String $revItem
     */
    public function setRevItem($revItem) {
        $this->revItem = $revItem;
    }

    /**
     * @return String
     */
    public function getRevDetail() {
        return $this->revDetail;
    }

    /**
     * @param String $revDetail
     */
    public function setRevDetail($revDetail) {
        $this->revDetail = $revDetail;
    }

}
