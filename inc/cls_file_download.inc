<?php // autotool_migration Ver3 20130111195550 このファイルは自動化ツールにより編集されました ?>
<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php
//*****************************************************************************
//	システム名　　　：Bnavis
//	サブシステム名　：
//	処理名　　　　　：Bnavis共通処理
//	HTMLID　　　　　：cls_file_download.inc
//	作成日付・作成者：2005-03-17 ADF.kama
//	修正履歴　　　　：
//*****************************************************************************
?>
<?php
//添付ファイルがある場合は、ダウンロードする
//	$saved_filepath:ファイル保存先
//	$saved_filename:保存ファイル名
//	$download_filename:ダウンロードファイル名

if( mb_detect_encoding($download_filename) != "SJIS" ){
	$download_filename = mb_convert_encoding($download_filename,"SJIS");
}
$saved_filepathname = "$saved_filepath/$saved_filename";

set_error_handler("TestFunc");
//$fp = fopen($saved_filepathname,"rb");
header("Content-type: application/octet-stream\n\n");
header("Content-Disposition: attachment; filename=$download_filename");
//header("Content-Disposition: inline ; filename=$download_filename");
mb_http_output("pass");
//while( !feof($fp) ){
//	print fread($fp,1024);
//}
//fclose($fp);

//エラーハンドラ
function TestFunc($a,$b,$c,$d){
//	print "<html><body><center><b>ファイルがダウンロードできません。($a:$b:$c:$d)</b></center></body></html>";
	// 2018/02/27 add st  Angular用
	// エラーがあった場合、例外ページを開く
	header("Location: ".$GLOBALS["COMMON_HOME_URL"]."/".$GLOBALS["COMMON_VIEW_FOLDER"]."/#/errorHandler/500");
	// 2018/02/27 add end Angular用
	exit;
	return;
}

// ダウンロード
$REPLACE_PATTERN = "";
$REPLACE_WORD = "";

//FTP共通処理
// ftp統合版に対応 autotool_migration 20130111195550 
//require("cls_ftp_filesystem.inc");
require_once("ADFlib/cls_ftp_filesystem.inc.php");

$ftp = new BNV_ftp_filesystem();
$ftp->open($GLOBALS["FTP_SERVER"], $GLOBALS["FTP_USER_NAME"], $GLOBALS["FTP_USER_PASS"]);
$fp = $ftp->fopen($saved_filepathname,"rb");
if( strlen($REPLACE_PATTERN) ){
	for( $i=0; $i<strlen($REPLACE_PATTERN); $i++ ){
		if( !substr($REPLACE_WORD,$i,$i+1) ) $REPLACE_WORD .= " ";
	}
	$buf="";
	while( !$ftp->feof($fp) ){
		$buf .= $ftp->fread($fp,1024);
		$buf = preg_replace("/$REPLACE_PATTERN/",$REPLACE_WORD,$buf);
		print substr($buf,0,strlen($buf)-20);
		$buf = substr($buf,strlen($buf)-20);
	}
	print $buf;
}else{
	while( !$ftp->feof($fp) ){
		print $ftp->fread($fp,1024);
	}
}
$ftp->fclose($fp);
//modified at 2008/03/24 by jinsk end
?>
