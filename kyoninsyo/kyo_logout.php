<?php // autotool_migration Ver3 20130111195550 ���Υե�����ϼ�ư���ġ���ˤ���Խ�����ޤ��� ?>
<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php
//*****************************************************************************
//	�����ƥ�̾��������ǧ�ڥ����ƥඦ�̲�
//	����̾����������������ǧ�� �������ȸƽн���
//	HTMLID������������kyo_logout.php
//	�������ա������ԡ�2006-11-14 adf.kama
//	�������򡡡�������
//*****************************************************************************
function CMN_DispError($msg){
	print <<<HTML_ERR
<html><head><title>����ǧ�ڸƽФ����顼</title></head>
<body>
<center><br><span style="font-size:12pt;font-weight:bold;">{$msg}<br></span></center>
<br>
<center>
<form name="frmDel">
<input type="button" value="���" onclick="window.history.back()">
</form>
</center>
</body>
</html>
HTML_ERR;
}
//--------------------------------------------------------------------
//�����Х��ѿ����
//�����дĶ��̤����������󥯥롼��
if(!$CONFIG_FILE){
	$CONFIG_FILE = $SERVER_ADDR."_".$SERVER_PORT.".conf";
}
// $INC_REL_PATH��env.inc������Ѥ�
//require("$INC_REL_PATH/$CONFIG_FILE");
//�ǥ��쥯�ȥ��̤����������󥯥롼��
if( is_file($CONFIG_FILE) ){
	include($CONFIG_FILE);
}else{
	CMN_DispError("����ե�������ɹ��˼��Ԥ��ޤ�����");
	exit;
}
//--------------------------------------------------------------------

	// ���å������饻�å����ID����
	if( $COOKIE_SAVE_MODE == "1" ){
		setCookie("CAMS_LOGIN_ID","",time()-3600,$COOKIE_PATH);
	}
	//Cookie����
    setcookie("incident_user_id", "", time()-1800);

	// ����ǧ�ڥ�������URL��CONF�ե����������
	$logoutUrl = $KYONINSYO_LOGOUT_URL;

	/*********************************
	* ����ǧ�ڥ����������б�����������
	**********************************/
	// ��³�襵����URL����ե�����
	$fileUrl = "http://".$SERVER_ADDR."/camsUrl.txt";
	// �ե����륪���ץ�
	$fp = @fopen($fileUrl,"rb");

	if( $fp !== false ){
		// �������Ƥ���URL�����
		$retUrl = fread( $fp, 4096 );
		// ǧ�ڥ����å�����������
		fclose($fp);

		/** �ִ��оݤ�ʸ���� ***/
		$pattern = "w50h-bnvcrtf.metawater.co.jp";
		//$pattern = "10.190.39.16";

		if( trim($retUrl) !== "" ){
			// ������URL���ִ�����
// ereg_replace�б� autotool_migration 20130111195550 
//			$logoutUrl = ereg_replace($pattern, trim($retUrl), $logoutUrl);
			$logoutUrl = preg_replace("/".$pattern."/",  trim($retUrl), $logoutUrl);
		}
	}
	/*********************************
	* ����ǧ�ڥ����������б��������ޤ�
	**********************************/
	$sMnuHiddenTag = "";

	//sMnu�Խ�
	if( strlen($sMnu) ){
		$sMnuHiddenTag = "<input type=\"hidden\" name=\"sMnu\" value=\"".$sMnu."\">";
	}

	//*************************
	//����ǧ�ڥ������ȸƽ�
	//*************************
	print <<<HTML_STR
<html><head><title></title></head>
<body>
<!--
<form name="f1" method="post" action="{$KYONINSYO_LOGOUT_URL}">
-->
<form name="f1" method="post" action="{$logoutUrl}">
{$sMnuHiddenTag}
</form>
</body>
<script language="JavaScript">
window.document.f1.submit();
</script>
</html>
HTML_STR;
?>
