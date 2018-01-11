    <?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：RevDto
//	作成日付・作成者：2017.10.30 NEWTOUCH)newtouch
//	修正履歴　　　　：
//*****************************************************************************

require_once('./dto/CommonDto.php');

/**
 * Class RevDto
 *
 * @property integer $sortNo
 * @property String $updUserNm
 * @property String $updDate
 * @property RevDetailDto[] $revList
 */
class RevDto extends CommonDto{

    private $sortNo;
    private $updUserNm;
    private $updDate;
    private $revList = array();

    /**
     * @return integer
     */
    public function getSortNo() {
        return $this->sortNo;
    }

    /**
     * @return String
     */
    public function getUpdUserNm() {
        return $this->updUserNm;
    }

    /**
     * @return String
     */
    public function getUpdDate() {
        return $this->updDate;
    }

    /**
     * @param integer $sortNo
     */
    public function setSortNo($sortNo) {
        $this->sortNo = $sortNo;
    }

    /**
     * @param String $updUserNm
     */
    public function setUpdUserNm($updUserNm) {
        $this->updUserNm = $updUserNm;
    }

    /**
     * @param String $updDate
     */
    public function setUpdDate($updDate) {
        $this->updDate = $updDate;
    }

    /**
     * @return RevDetailDto[]
     */
    public function getRevList() {
        return $this->revList;
    }

    /**
     * @param int $index
     * @return RevDetailDto
     */
    public function getRev($index = null) {
        if (is_null($index)) {
            return null;
        } else {
            return $this->revList[$index];
        }
    }

    /**
     * @param RevDetailDto $rev
     */
    public function addRevList(RevDetailDto $rev) {
        $this->revList[] = $rev;
    }

}
