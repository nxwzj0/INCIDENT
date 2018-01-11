<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：LinkRelationDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class LinkRelationDto
 *
 * @property Array $pjInfo
 * @property Array $mr2Info
 * @property Array $jikoInfo
 * @property Array $hiyoInfo
 */
class LinkRelationDto extends CommonDto{

    private $pjInfo;
    private $mr2Info;
    private $jikoInfo;
    private $hiyoInfo;

    /**
     * @return Array
     */    
    public function getPjInfo() {
        return $this->pjInfo;
    }

    /**
     * @return Array
     */

    public function getMr2Info() {
        return $this->mr2Info;
    }

    /**
     * @return Array
     */
    public function getJikoInfo() {
        return $this->jikoInfo;
    }

    /**
     * @return Array
     */
    public function getHiyoInfo() {
        return $this->hiyoInfo;
    }

    /**
     * @param Array $pjInfo
     */
    public function setPjInfo($pjInfo) {
        $this->pjInfo = $pjInfo;
    }

    /**
     * @param Array $mr2Info
     */
    public function setMr2Info($mr2Info) {
        $this->mr2Info = $mr2Info;
    }

    /**
     * @param Array $jikoInfo
     */
    public function setJikoInfo($jikoInfo) {
        $this->jikoInfo = $jikoInfo;
    }

    /**
     * @param Array $hiyoInfo
     */
    public function setHiyoInfo($hiyoInfo) {
        $this->hiyoInfo = $hiyoInfo;
    }

}
