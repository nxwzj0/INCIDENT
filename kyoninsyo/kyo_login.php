<?php // autotool_migration Ver3 20130111195550 ���Υե�����ϼ�ư���ġ���ˤ���Խ�����ޤ��� ?>
<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php
//*****************************************************************************
//	�����ƥ�̾��������ǧ�ڥ����ƥඦ�̲�
//	����̾����������������ǧ�� ������ƽС����ս���
//	HTMLID������������kyo_login.php
//	�������ա������ԡ�2006-11-14 adf.kama
//	�������򡡡�������2007-09-06 adf.kama ���ڥ⡼���ɲ��б�
//	������������������2007-11-19 adf.kama REFERER�����Τ���ʤ�����FFC�桼�����λ������
//*****************************************************************************
function CMN_DispError($title,$msg){
	global $SYSTEM_HTML_CHARSET;

	//������
	$err_str=$title.":".$msg;
	require_once("env.inc");
	$log = new Logging($GLOBALS["COMMON_DEBUG_LOG_PATH"]);
	$log->log_request_data(TRUE);
	$log->write($err_str,TRUE);
	//������

	print <<<HTML_ERR
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset={$SYSTEM_HTML_CHARSET}">
<title>{$title}</title>
</head>
<body>
<form name="fmerr">
<center><br>
<span style="font-size:12pt;font-weight:bold;">{$msg}<br></span>
<br>
<!--
<input type="button" value="���" onclick="window.history.go(-2)">
-->
</center>
</form>
</body>
</html>
HTML_ERR;
}

function CMN_GetCookie($name){
// HTTP_COOKIE_VARS�б� autotool_migration 20130111195550 
//	global $HTTP_COOKIE_VARS;
	global $_COOKIE;
// HTTP_COOKIE_VARS�б� autotool_migration 20130111195550 
//	return $HTTP_COOKIE_VARS[$name];
	return $_COOKIE[$name];
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
	CMN_DispError("����ǧ�ڸƽФ����顼","����ե�������ɹ��˼��Ԥ��ޤ�����");
	exit;
}

//if( $_SERVER["REQUEST_METHOD"] != "POST" ){
// HTTP_SERVER_VARS�б� autotool_migration 20130111195550 
//if( $HTTP_SERVER_VARS["REQUEST_METHOD"] != "POST" ){
if( $_SERVER["REQUEST_METHOD"] != "POST" ){
	CMN_DispError("����ǧ�ڸƽФ����顼","�����׵����դ��뤳�Ȥ��Ǥ��ޤ���");
	exit;
}
//2007-09-06 add ����ǧ�ڰʳ�����Υ������������
if( $syoriMode == "kyoninsyo_return" ){
	$ref_str = $_SERVER["HTTP_REFERER"];
// HTTP_SERVER_VARS�б� autotool_migration 20130111195550 
//	if( !$ref_str ) $ref_str = $HTTP_SERVER_VARS["HTTP_REFERER"];
	if( !$ref_str ) $ref_str = $_SERVER["HTTP_REFERER"];
	$pattern = $KYONINSYO_SERVER_REFERER;
	if( $ref_str ){
		if( !preg_match("/".$pattern."/",$ref_str) ){
			CMN_DispError("����ǧ�ڸƽФ����顼","����ǧ�ڥ����аʳ�������׵�ϼ��դ��뤳�Ȥ��Ǥ��ޤ���");
			exit;
		}
	}else{
		//2007.11.19 REFERER�����Τ���ʤ���硢��⡼�ȥ��ɥ쥹��10.xxx.xxx.xxx�ʳ��Ǥ���Х�����������
		$remote_str = $_SERVER["REMOTE_ADDR"];
// HTTP_SERVER_VARS�б� autotool_migration 20130111195550 
//		if( !$remote_str ) $remote_str = $HTTP_SERVER_VARS["REMOTE_ADDR"];
		if( !$remote_str ) $remote_str = $_SERVER["REMOTE_ADDR"];
		if( substr($remote_str,0,3)=="10." ){
			CMN_DispError("����ǧ�ڸƽФ����顼","�оݳ���⡼�ȥ��ɥ쥹�Τ����׵�ϼ��դ��뤳�Ȥ��Ǥ��ޤ���");
			exit;
		}
	}
}
//--------------------------------------------------------------------
//�����ƥ�����߾��֤�
if( $SYSTEM_OFFLINE_FLG[$kyoninsyo_request_key] && $SYSTEM_OFFLINE_MESSAGE_URL[$kyoninsyo_request_key] ){
	include($SYSTEM_OFFLINE_MESSAGE_URL[$kyoninsyo_request_key]);
	exit;
}else if( $SYSTEM_OFFLINE_FLG["kyoninsyo_return"] && $SYSTEM_OFFLINE_MESSAGE_URL["kyoninsyo_return"] ){
	include($SYSTEM_OFFLINE_MESSAGE_URL["kyoninsyo_return"]);
	exit;
}

//2007-09-06 add DB��Ͽ�ѥ��饹���󥯥롼��
require("env.inc");

//��������
if( $syoriMode != "kyoninsyo_return" ){

	//*************************
	//����ǧ�ڥ�����ƽ�
	//*************************
	//�������˸ƽФ��գң̤κ������������
	if( !strlen($kyoninsyo_request_key) || !$SYSTEM_ORIGINAL_URL[$kyoninsyo_request_key] ){
		CMN_DispError("����ǧ�ڸƽФ����顼","�������Ƥ����������뤿���׵����դ��뤳�Ȥ��Ǥ��ޤ���");
		exit;
	}
	$syoriMode = "kyoninsyo_return";
	$reqKey = $kyoninsyo_request_key;

	// ������URL�����
	$POST_ACTION_STR = $KYONINSYO_LOGIN_URL;

	/*********************************
	* ����ǧ�ڥ����������б�����������
	**********************************/
	// ��³�襵����URL����ե�����
	$fileUrl = "http://".$SERVER_ADDR."/camsUrl.txt";
	// �ե����륪���ץ�
	$tmp = set_error_handler("file_open_error_handler");
	$fp = @fopen($fileUrl,"rb");
	set_error_handler($tmp);
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
//			$POST_ACTION_STR = ereg_replace($pattern, trim($retUrl), $POST_ACTION_STR);
			$POST_ACTION_STR = preg_replace("/".$pattern."/",  trim($retUrl), $POST_ACTION_STR);
		}
	}
	/*********************************
	* ����ǧ�ڥ����������б��������ޤ�
	**********************************/

// HTTP_POST_VARS�б� autotool_migration 20130111195550 
//	foreach( $GLOBALS["HTTP_POST_VARS"] as $key => $val ){
	foreach( $_POST as $key => $val ){
		if( !is_array($val) ){
			$POST_ACTION_STR .= "&".$key."=".$val;
		}
	}
	$POST_ACTION_STR .= "&syoriMode=".$syoriMode;
	$POST_ACTION_STR .= "&reqKey=".$reqKey;

//	if( $COOKIE_SAVE_MODE == "1" ){
//		// �ե�����Cookie�ξ��ϥѥ�᡼����Cookie��������������å����ID�򥻥åȤ���
//		$sId = CMN_GetCookie("CAMS_LOGIN_ID");
//		if( $sId ){
//			$POST_ACTION_STR .= "&sId=".$sId;
//		}
//	}

	//�ƽФ�
	header("Location:$POST_ACTION_STR");
	exit;

}else{
	//����ǧ�ڤ���α�����
	//*************************
	//����ǧ�ڥ��������μ���
	//*************************

	if( strcmp($no_login,"1") != 0 ){
		// �����������ɽ���⡼�ɤξ���UID̵���ξ��⤢�뤿��
		//�ѥ�᥿:UID,UPASS���ϤäƤ���Ϥ�
		if( !strlen($UID) ){
			CMN_DispError("����ǧ�ڱ������顼","����ǧ�ڤ����Ԥ��ޤ�����");
			exit;
		}

		if( $LOGIN_ID == "" ){
			$LOGIN_ID = $LOGINID;
		}
		// �ѥ�᥿:LOGIN_ID
		if( !strlen($LOGIN_ID) ){
			CMN_DispError("����ǧ�ڱ������顼","����ǧ�ڤ����Ԥ��ޤ�����");
			exit;
		}
	}

	if( !$SYSTEM_ORIGINAL_URL[$reqKey] ){
		CMN_DispError("����ǧ�ڱ������顼","�գң̸ƽФ��˼��Ԥ��ޤ�����");
		exit;
	}else{
		$action_str = $SYSTEM_ORIGINAL_URL[$reqKey];
	}

	//2007-09-06 add ���ڥ⡼�ɥ�����ξ�硢������
	if( $reqKey=="kensyo_login" && strlen($MNGID) ){
		$ip_str = $_SERVER["REMOTE_ADDR"];
		if( !$ip_str ) $ip_str = $REMOTE_ADDR;
		$INS_SQL_LOGIN=<<<SQL1
insert into KYONINSYO_KENSYOLOGIN(��������,������ID,������ID,�����ƥ��ʬ,IP���ɥ쥹) values (sysdate,'$MNGID','$UID','$SYSCD','$ip_str')
SQL1;
		CMN_ExecSql($INS_SQL_LOGIN);
	}

	if( $COOKIE_SAVE_MODE == "1" ){
		// ���å������ѥ⡼��

		// ����COOKIE��¸�ͤ����
		$OLD_CAMS_LOGIN_ID = CMN_GetCookie("CAMS_LOGIN_ID");

		if( $LOGIN_ID != $OLD_CAMS_LOGIN_ID ) {
			// ����COOKIE�����ꤷ�����å����ID�ȥѥ�᡼�����Ϥ��줿������ID���ѹ�����Ƥ�����
			// COOKIE������ꤹ�롣
			if( strcmp($COOKIE_TIME,"") == 0 ){
				setCookie( "CAMS_LOGIN_ID", $LOGIN_ID, 0, $COOKIE_PATH );
			}else{
				setCookie( "CAMS_LOGIN_ID", $LOGIN_ID, time()+60*60*$COOKIE_TIME, $COOKIE_PATH );
			}
		}
	}

	//-------------------------------------------------------------------------
	//HTML�ե�������ϳ���
	//-------------------------------------------------------------------------
	print <<<HTML_STR
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset={$SYSTEM_HTML_CHARSET}">
<title></title>
</head>
<body>
<form name="f1" method="post" action="{$action_str}">

HTML_STR;

	//�ƽи����̤Υѥ�᥿����
	$auto_announce_param = "";
// HTTP_POST_VARS�б� autotool_migration 20130111195550 
//	foreach( $GLOBALS["HTTP_POST_VARS"] as $key => $val ){
	foreach( $_POST as $key => $val ){
		if( !is_array($val) ){
			// sMnu�ˤĤ��Ƥ�hidden�Ϻ������ʤ�(2008.1.10)
			if( $key!="syoriMode" && $key!="reqKey" && $key!="UID" && $key!="UPASS" && $key!="SYSCD" && $key!="value=" && $key!="sMnu" && $key!="LOGIN_ID" ){
				print <<<HTML_STR
<INPUT type="hidden" name="{$key}" value="{$val}">
HTML_STR;
				$auto_announce_param .= "&".$key."=".$val;
			}
		}
	}

	//�ɣ����إѥ�᥿���ϡ����Τ餻�ݥåץ��å׸ƽФ������å�����
	if( $SYSTEM_ANNOUNCE_POPUP_CHECK_URL[$reqKey] && $SYSTEM_ANNOUNCE_POPUP_FLG[$reqKey] ){
		if( $KYONINSYO_INCLUDE_MODE=="readfile" ){
			readfile($SYSTEM_ANNOUNCE_POPUP_CHECK_URL[$reqKey]."?UID=".$UID."&SYSTEM_ANNOUNCE_POPUP_FLG=".$SYSTEM_ANNOUNCE_POPUP_FLG[$reqKey]."&SYSTEM_ANNOUNCE_POPUP_ADD_MINUTES=".$SYSTEM_ANNOUNCE_POPUP_ADD_MINUTES.$auto_announce_param);
		}else{
			include($SYSTEM_ANNOUNCE_POPUP_CHECK_URL[$reqKey]."?UID=".$UID."&SYSTEM_ANNOUNCE_POPUP_FLG=".$SYSTEM_ANNOUNCE_POPUP_FLG[$reqKey]."&SYSTEM_ANNOUNCE_POPUP_ADD_MINUTES=".$SYSTEM_ANNOUNCE_POPUP_ADD_MINUTES.$auto_announce_param);
		}
	}else{
		print <<<HTML_STR
<INPUT type="hidden" name="UID" value="{$UID}">

HTML_STR;
	}

	print <<<HTML_STR
</form>
</body>
<script language="JavaScript">
window.document.f1.submit();
</script>
</html>
HTML_STR;
	//-------------------------------------------------------------------------
	//HTML�ե�������Ͻ�λ
	//-------------------------------------------------------------------------
}
?>
<?php
// ���顼�ϥ�ɥ�
function file_open_error_handler($errno, $errmsg, $filename, $linenum, $vars){
	return;
}
?>
