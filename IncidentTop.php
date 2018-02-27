<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	処理名　　　　　：インシデントTOP
//	作成日付・作成者：2017.10.05 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
require_once('./env.inc');
// 共通処理読み込み
require_once('./common/CommonService.php');

// 共通処理
$common = new CommonService();

// 共通認証
//Cookieを削除 (本ページは認証経由のみなのでクリアしてからセットする)
setcookie("incident_user_id", "", time()-1800);

if($UID){
	//Cookie保存(有効期限は半日とする)
	setcookie("incident_user_id", $UID, time()+60*60*14);

	/* * ***************************************************************************
	  画面名：インシデント一覧画面
	  HTML_ID：IncidentTopView.php
	 * ************************************************************************** */
	require_once('./view/index.html');
}else{
	//UIDが無い = 認証されていないとみなす エラー
	header("Location: {$COMMON_HOME_URL}");
	exit;
}

?>
