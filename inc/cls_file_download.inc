<?php // autotool_migration Ver3 20130111195550 ���Υե�����ϼ�ư���ġ���ˤ���Խ�����ޤ��� ?>
<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php
//*****************************************************************************
//	�����ƥ�̾��������Bnavis
//	���֥����ƥ�̾����
//	����̾������������Bnavis���̽���
//	HTMLID������������cls_file_download.inc
//	�������ա������ԡ�2005-03-17 ADF.kama
//	�������򡡡�������
//*****************************************************************************
?>
<?php
//ź�եե����뤬������ϡ�����������ɤ���
//	$saved_filepath:�ե�������¸��
//	$saved_filename:��¸�ե�����̾
//	$download_filename:����������ɥե�����̾

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

//���顼�ϥ�ɥ�
function TestFunc($a,$b,$c,$d){
	print "<html><body><center><b>�ե����뤬����������ɤǤ��ޤ���($a:$b:$c:$d)</b></center></body></html>";
	exit;
	return;
}

// �����������
$REPLACE_PATTERN = "";
$REPLACE_WORD = "";

//FTP���̽���
// ftp�����Ǥ��б� autotool_migration 20130111195550 
//require("cls_ftp_filesystem.inc");
require_once("ADFlib/cls_ftp_filesystem.inc.php");

$ftp = new BNV_ftp_filesystem();
$ftp->open($FTP_SERVER,$FTP_USER_NAME,$FTP_USER_PASS);
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