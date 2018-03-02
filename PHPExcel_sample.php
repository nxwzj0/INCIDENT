<?php require_once('ADFlib/global_reg_emu.inc.php'); ?>
<?php require_once("env.inc"); ?>
<?php
	// メモリ無制限
	ini_set("memory_limit", -1);
	
	// PHPExcel用ディレクトリ
	$COMMON_PHPEXCEL_PATH = "PHPExcel";

	require_once("{$COMMON_PHPEXCEL_PATH}/PHPExcel.php");
	require_once("{$COMMON_PHPEXCEL_PATH}/PHPExcel/IOFactory.php");
	require_once("{$COMMON_PHPEXCEL_PATH}/PHPExcel/RichText.php");
        require_once('./action/CommonAction.php');
        
        $common = new CommonAction();

	// テンプレート
	$templatePath =  "PHPExcel_sample.xlsx";
	// 出力ファイル名
	$filename = "test.xlsx";
	// タイトル
	$title = "INCIDENT List";

	// マルチブラウザ対応
	$ua = $_SERVER["HTTP_USER_AGENT"];
	// chrome
	if( preg_match("/chrome/i", $ua) ) {
		$filename = mb_convert_encoding($filename, "UTF-8", "CP51932");
	// firefox
	} else if( preg_match("/Firefox/", $ua) ) {
		$filename = mb_convert_encoding($filename, "UTF-8", "CP51932");
		$filename = rawurlencode($filename);
	// その他
	} else {
		$filename = mb_convert_encoding($filename, "sjis-win", "CP51932");
	}

	// Excel定義
	$XLS_INFO = array(
		"COL_COUNT"		=> 13,			// 列数
		"ROW_TEMPLATE"	=> 3,			// テンプレート行
		"ROW_START"		=> 4,			// 開始行
		"CELL_TITLE"	=> "A1",		// タイトルセル
		"COL_NAME"		=> array(		// 列に対応するクエリの問い合わせ別名
			"INCIDENT_NO",
			"CALL_CONTENT",
			"KIJO_NM",
			"SETUBI_NM",
			"PREF_NM",
			"IN_INCIDENT_START_DATETIME",
			"IN_CALL_START_DATE",
			"INCIDENT_TYPE",
			"INCIDENT_STS",
			"PJ_NO",
			"MKB_ID",
			"JIKO_ID",
			"HIYO_ID"
		)
	);
	
	// PHPExcel
	$excel = new PHPExcel();

	// テンプレート読込
	$reader = PHPExcel_IOFactory::createReader("Excel2007");
	$excel = $reader->load($templatePath);

	// １シート目のオブジェクト取得
	$excel->setActiveSheetIndex(0);
	$sheet = $excel->getActiveSheet();

	// タイトル設定
	$sheet->setCellValue($XLS_INFO["CELL_TITLE"], exCharset(strtoupper($title)));

	// 出力データ取得クエリ
	$sql =<<< sql
	SELECT DISTINCT
                    INCIDENT.INCIDENT_NO ,
                    INCIDENT.INCIDENT_STS ,
                    INCIDENT.INCIDENT_TYPE_CD ,
                    TO_CHAR(INCIDENT.INCIDENT_START_DATETIME,'yyyy/mm/dd hh24:mi:ss') IN_INCIDENT_START_DATETIME,
                    INCIDENT.KIJO_NM ,
                    INCIDENT.SETUBI_NM ,
                    INCIDENT.PREF_NM ,
                    TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') IN_CALL_START_DATE,
                    INCIDENT.CALL_CONTENT,
                    PJ.PJ_NO,
                    MR2.MKB_ID,
                    JIKO.JIKO_ID,
                    HIYO.HIYO_ID
                FROM
                    IDENT_T_INCIDENT INCIDENT
                LEFT OUTER JOIN
                    IDENT_T_INCIDENT_RELATE_USER RUSER ON INCIDENT.INCIDENT_ID = RUSER.INCIDENT_ID AND RUSER.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_PJ PJ ON INCIDENT.INCIDENT_ID = PJ.INCIDENT_ID AND PJ.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_MR2 MR2 ON INCIDENT.INCIDENT_ID = MR2.INCIDENT_ID AND MR2.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_JIKO JIKO ON INCIDENT.INCIDENT_ID = JIKO.INCIDENT_ID AND JIKO.DEL_FLG = '0'
                LEFT OUTER JOIN
                    IDENT_T_HIYO HIYO ON INCIDENT.INCIDENT_ID = HIYO.INCIDENT_ID AND HIYO.DEL_FLG = '0'
                WHERE
                    INCIDENT.DEL_FLG = '0' 
                ORDER BY TO_CHAR(INCIDENT.CALL_START_DATE,'yyyy/mm/dd hh24:mi:ss') DESC NULLS LAST
sql;

	// クエリ実行
	$dmy = "";
	$tpl = new ExecTemplate($dmy, $sql);
	$tpl->setCallback("CB_sub");
	$tpl->getResult();

	// コールバック
	$rowNumber = 0;
	function CB_sub(&$rec) {
		global $excel, $sheet, $XLS_INFO, $rowNumber;

		$activeRow = $XLS_INFO["ROW_START"] + $rowNumber;

		for( $idx = 0; $idx < $XLS_INFO["COL_COUNT"]; $idx++ ) {
			// セル
			$offsetCell = PHPExcel_Cell::stringFromColumnIndex($idx). (string)($activeRow);

			// 行コピー
			$style = $sheet->getStyleByColumnAndRow($idx, $XLS_INFO["ROW_TEMPLATE"]);
			$sheet->duplicateStyle($style, $offsetCell);

			// 値をセット
//			$sheet->setCellValue($offsetCell, exCharset($rec[$XLS_INFO["COL_NAME"][$idx]]));
			$sheet->setCellValue($offsetCell, $rec[$XLS_INFO["COL_NAME"][$idx]]);
		}

		$rowNumber++;
	}

	// テンプレート行削除
	$sheet->removeRow($XLS_INFO["ROW_TEMPLATE"]);

	// Excel出力
	$writer = PHPExcel_IOFactory::createWriter($excel, "Excel2007");

        header("Content-Type:application/force-download");
        header("Content-Type:application/octet-stream");
        header("Content-Type:application/download");
        header("Content-Transfer-Encoding:binary");
        header("Last-Modified:".gmdate("D,dMYH:i:s")."GMT");
        header("Cache-Control:must-revalidate,post-check=0,pre-check=0");
        header("Pragma:no-cache");
	header("Content-type: application/octet-stream");
	if( preg_match("/Firefox/", $ua) ) {
		header("Content-Disposition: attachment; filename*=utf-8'ja'$filename");
	} else {
		header("Content-Disposition: attachment; filename='$filename'");
	}
	//mb_http_output("pass");
	//set_time_limit(0);
//	$writer->save("php://output");

	// 文字コード変換
	function exCharset($str) {
		return mb_convert_encoding($str, "UTF-8", "CP51932");
	}
        
         function saveExcelToLocalFile($objWriter,$filename){  
            // make sure you have permission to write to directory  
            $filePath = 'FTP_TEMP/'.$filename;  
            $objWriter->save($filePath);  
            return $filePath;  
        } 
        
        $objWriter = new PHPExcel_Writer_Excel2007($excel); 
        $response = array();
        $response[] = array("result" => true,"url"=>saveExcelToLocalFile($objWriter,$filename));
        echo $common->returnAngularJSONP($response);
        exit;
?>
