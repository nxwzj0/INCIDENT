<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：テスト
//	処理名　　　　　：テスト用配列作成処理
//	作成日付・作成者：2017.10.03 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once('./logic/CommonLogic.php');
require_once('./model/TestTblModel.php');

require_once('./dto/CreateArrayDto.php');
require_once('./dto/CreateArrayResultDto.php');
require_once('./dto/UserDto.php');

class CreateArrayLogic extends CommonLogic {

    public function execute(CreateArrayDto $CreateArrayDto) {
        // 戻りオブジェクト(ResultDto)を作成
        $CreateArrayResultDto = new CreateArrayResultDto();

        foreach ($CreateArrayDto->getUserList() as $user) {
            $res = array();
            $res['id'] = $user->getUserId();
            $res['name'] = $user->getUserNm();
            $CreateArrayResultDto->addResultAry($res);
        }

        // テスト情報の取得
        $TestTblModel = new TestTblModel();
        $entiry = $TestTblModel->findByKey("1");

        // 戻り値の設定
        if (isset($entiry)) {
            $CreateArrayResultDto->addResultAry($entiry);
        }

//        // insertかupdateをする場合に事前に宣言する
//        $MultiExecSql = new MultiExecSql();
//
//        // insert処理
//       if ($TestTblModel->insert($MultiExecSql, array("testId" => "7", "testNo" => "7", "testUserId" => "YStest"))) {
//            // insertかupdateに成功した場合
//            $MultiExecSql->commit();
//        } else {
//            // insertかupdateに失敗した場合
//            $MultiExecSql->rollback();
//        }

        return $CreateArrayResultDto;
    }

}
