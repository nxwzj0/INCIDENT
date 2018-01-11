<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：開発前テスト用 テストアクション
//	作成日付・作成者：2017.10.06 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
// 共通処理読み込み
require_once('./action/CommonAction.php');

// logic処理読み込み
require_once('./logic/CreateArrayLogic.php');

// dto読み込み
require_once('./dto/CreateArrayDto.php');
require_once('./dto/CreateArrayResultDto.php');
require_once('./dto/UserDto.php');

class ReceiveAction extends CommonAction {

    public function index() {

        // 戻り値用配列
        $rtnAry = array();

        /* パラメータ取得処理 */
        $postdata = $this->getRequestJSONData();
        if ($postdata != false) {
            // パラメータを取得
            $request = json_decode($postdata);
        } else {
            // パラメータの取得に失敗
            array_push($rtnAry, array("result" => false));
            echo json_encode($rtnAry);
            exit;
        }

        /* Dto作成処理 */
        $CreateArrayDto = new CreateArrayDto();
        foreach ($request as $user) {
            // ユーザオブジェクトを作成
            $userDto = new UserDto();
            $userDto->setUserId($user->id);
            $userDto->setUserNm($user->name);

            $CreateArrayDto->addUserList($userDto);
        }

        /* ロジック処理 */
        // @property CreateArrayResultDto $eventResult
        $CreateArrayLogic = new CreateArrayLogic();
        $eventResult = $CreateArrayLogic->execute($CreateArrayDto);

        /* 戻り値作成処理 */
        if (isset($eventResult)) {
            // ロジック処理に成功
            array_push($rtnAry, array("result" => true));
            foreach ($eventResult->getResultAry() as $result) {
                array_push($rtnAry, $result);
            }
        } else {
            // ロジック処理に失敗
            array_push($rtnAry, array("result" => false));
            echo json_encode($rtnAry);
            exit;
        }

        // 値を返す
        //echo json_encode($rtnAry);
        header('Content-Type: application/x-www-form-urlencoded; charset=UTF-8;');
        print $this->json_xencode($rtnAry);
    }

}
