<?php

// Angularのコールバック関数名を格納しているインデックス
define('ANGULAR_CALLBACK_FUNCTION', 'callback');

// 関連インシデント　同一機場
define('RELATE_INCIDENT_TYPE_KIJO', '1');
// 関連インシデント　同一顧客名
define('RELATE_INCIDENT_TYPE_CUST', '2');

// 関連フラグ true : 関連有り、false : 関連無し
define('RELATE_FLG_ON', TRUE);
define('RELATE_FLG_OFF', FALSE);

// 変更履歴フラグ true : 変更履歴有り、false : 変更履歴無し
define('LOG_FLG_ON', TRUE);
define('LOG_FLG_OFF', FALSE);

// LOGIC結果　正常時 '0'
define('LOGIC_RESULT_SEIJOU', '0');
// LOGIC結果　SQLエラー '1'
define('LOGIC_RESULT_SQL_ERROR', '1');
// LOGIC結果　ファイルが見つからない '2'
define('LOGIC_RESULT_FILE_ERROR', '2');
// LOGICメッセージ　検索条件名が重複しています
define('LOGIC_RESULT_CONDNM_DUPLICATE', '検索条件名が重複しています');
// LOGICメッセージ　登録完了
define('LOGIC_RESULT_INSERT_SUCCESS', '登録完了');
// LOGICメッセージ　登録に失敗しました
define('LOGIC_RESULT_INSERT_FAIL', '登録に失敗しました');
// LOGICメッセージ　削除完了
define('LOGIC_RESULT_DELETE_SUCCESS', '削除完了');
// LOGICメッセージ　削除に失敗しました
define('LOGIC_RESULT_DELETE_FAIL', '削除に失敗しました');

// 登録と更新処理成功判定フラグ　true : 成功、false : 失敗
define('SAVE_TRUE', TRUE);
define('SAVE_FALSE', FALSE);

// インシデント関係者のデータ 有無のFlg　true : 有、false : 無し
define('RELATE_USER_FLG_TRUE', TRUE);
define('RELATE_USER_FLG_FALSE', FALSE);

// 日付フォーマット
define('Ymd', 'Y/m/d');
define('YYYYMMDD', 'YYYY/MM/DD');

// 検索条件Idなし
define('CONDITION_NONE', '0');

// 更新ログ　初期値
define('SORT_NO_FIRST', '0');

// 新規作成
define('SINKI_SAKUSEI', '新規作成');
// 更新
define('KOUSINN', '更新');
// インシデント番号
define('INCIDENT_NO', 'インシデント番号');
// インシデントステータス
define('INCIDENT_STS', 'インシデントステータス');
// インシデント分類
define('INCIDENT_TYPE', 'インシデント分類');
// 親インシデント番号
define('PARENT_INCIDENT_NO', '親インシデント番号');
// 発生日時
define('INCIDENT_START_DATETIME', '発生日時');
// 情報提供元
define('INFO_SOURCE', '情報提供元');
// 情報提供者名
define('INFO_PROVIDER', '情報提供者名');
// 情報提供TEL
define('INFO_PROVIDER_TEL', '情報提供TEL');
// 注記
define('MEMO', '注記');
// 機場ID
define('KIJO_ID', '機場');
// 事業主体ID
define('JIGYOSYUTAI_ID', '事業主体');
// 設備ID
define('SETUBI_ID', '設備');
// 都道府県名
define('PREF_NM', '都道府県名');
// 納入プロジェクト番号
define('DELIVERY_PJ_NO', '納入プロジェクト番号');
// 顧客ID
define('CUST_ID', '顧客');
// 顧客名
define('CUST_NM', '顧客');
// 顧客分類CD
define('CUST_TYPE_CD', '顧客分類');
// 顧客分類名
define('CUST_TYPE_NM', '顧客分類');
// 会社名・所属部署
define('CUST_DEPT', '会社名・所属部署');
// 依頼者名
define('REQUESTER', '依頼者名');
// 連絡先(TEL)
define('CONTACT_TEL', '連絡先(TEL)');
// 連絡先(FAX)
define('CONTACT_FAX', '連絡先(FAX)');
// 連絡先(E-mail)
define('CONTACT_MAIL', '連絡先(E-mail)');
// 営業部門コード
define('SALES_DEPT_CD', '営業部門コード');
// 営業部門名
define('SALES_DEPT_NM', '営業部門名');
// 営業担当者ID
define('SALES_USER_ID', '営業担当者');
// 営業担当者名
define('SALES_USER_NM', '営業担当者');
// 主管部門コード
define('SKAN_DEPT_CD', '主管部門');
// 主管部門名
define('SKAN_DEPT_NM', '主管部門');
// 主管担当者ID
define('SKAN_USER_ID', '主管担当者');
// 主管担当者名
define('SKAN_USER_NM', '主管担当者');
// 受付開始時刻
define('CALL_START_DATE', '受付開始時刻');
// 受付終了時刻
define('CALL_END_DATE', '受付終了時刻');
// 受付部署コード
define('CALL_DEPT_CD', '受付部署');
// 受付部署名
define('CALL_DEPT_NM', '受付部署');
// 受付者ID
define('CALL_USER_CD', '受付者');
// 受付者名
define('CALL_USER_NM', '受付者');
// 受付電話番号
define('CALL_TEL', '受付電話番号');
// 受付メール
define('CALL_MAIL', '受付メール');
// 受付内容
define('CALL_CONTENT', '受付内容');
// 対応開始時刻
define('TAIO_START_DATE', '対応開始時刻');
// 対応終了時刻
define('TAIO_END_DATE', '対応終了時刻');
// 対応部署コード
define('TAIO_DEPT_CD', '対応部署');
// 対応部署名
define('TAIO_DEPT_NM', '対応部署');
// 対応者ID
define('TAIO_USER_ID', '対応者');
// 対応者名
define('TAIO_USER_NM', '対応者');
// 対応電話番号
define('TAIO_TEL', '対応電話番号');
// 対応メール
define('TAIO_MAIL', '対応メール');
// 対応内容
define('TAIO_CONTENT', '対応内容');
// 処置予定日
define('ACT_DATE', '処置予定日');
// 処置区分
define('ACT_TYPE', '処置区分');
// 処置開始日時
define('ACT_START_TIME', '処置開始日時');
// 処置終了日時
define('ACT_END_TIME', '処置終了日時');
// 処置部署コード
define('ACT_DEPT_CD', '処置部署');
// 処置部署名
define('ACT_DEPT_NM', '処置部署');
// 処置者ID
define('ACT_USER_ID', '処置者');
// 処置者名
define('ACT_USER_NM', '処置者');
// 処置電話番号
define('ACT_TEL', '処置電話番号');
// 処置メール
define('ACT_MAIL', '処置メール');
// 処置内容
define('ACT_CONTENT', '処置内容');
// 装置区分
define('SOTI_KBN', '装置区分');
// 機種区分
define('KISYU_KBN', '機種区分');
// 機種名
define('KISYU_NM', '機種名');
// 障害状況トリガー
define('PRODUCT_TRIGGER', '障害状況トリガー');
// 障害状況頻度
define('PRODUCT_HINDO', '障害状況頻度');
// 障害状況現象
define('PRODUCT_GENSYO', '障害状況現象');
// 障害状況状態
define('PRODUCT_STATUS', '障害状況状態');

// 変更履歴に値を表示する項目
define('CHANGE_LOG_VALUE_DSP_ITEM',
serialize(array(
//    'KIJO_NM' => '機場名', // 機場名
//    'JIGYOSYUTAI_NM' => '事業主体名', // 事業主体名
//    'SETUBI_NM' => '設備名'  // 設備名
)));

// インシデントステータス名
define('INCIDENT_STS_NAME',
serialize(array(
    '1' => '受付済',
    '2' => '対応入力済',
    '3' => '処置入力済'
)));
// インシデントステータス 受付済
define('INCIDENT_STS_CALL', '1');
// インシデントステータス 対応入力済
define('INCIDENT_STS_TAIO', '2');
// インシデントステータス 処置入力済
define('INCIDENT_STS_ACT', '3');

// 業種区分
define('INDUSTRY_TYPE_NAME', serialize(array(
    '1'=>'機械'
    ,'2'=>'電機（E）'
    ,'3'=>'計装（I）'
    ,'4'=>'情報（C）'
    ,'5'=>'環境'
    ,'6'=>'WBC'
    ,'7'=>'その他'
)));

// インシデント分類名
define('INCIDENT_TYPE_NAME',
serialize(array(
    '1' => '障害',
    '2' => '事故',
    '3' => 'クレーム',
    '4' => '問合せ',
    '5' => '情報',
    '6' => 'その他'
)));

// 情報提供元名
define('INCIDENT_INFO_SOURCE',
serialize(array(
    '1' => '顧客',
    '2' => '特約店',
    '3' => '営業',
    '4' => '技術',
    '5' => 'その他'
)));

// 顧客分類名
define('CUST_TYPE_NAME',
serialize(array(
    '1' => '年間契約',
    '2' => '点検契約',
    '3' => '契約なし',
    '4' => '瑕疵期間中',
    '5' => 'その他'
)));

// 都道府県
define('PREF_NAME', serialize(array(
    '1'=>'北海道'
    ,'2' =>'青森県'
    ,'3' =>'岩手県'
    ,'4' =>'宮城県'
    ,'5' =>'秋田県'
    ,'6' =>'山形県'
    ,'7' =>'福島県'
    ,'8' =>'茨城県'
    ,'9' =>'栃木県'
    ,'10'=>'群馬県'
    ,'11'=>'埼玉県'
    ,'12'=>'千葉県'
    ,'13'=>'東京都'
    ,'14'=>'神奈川県'
    ,'15'=>'新潟県'
    ,'16'=>'富山県'
    ,'17'=>'石川県'
    ,'18'=>'福井県'
    ,'19'=>'山梨県'
    ,'20'=>'長野県'
    ,'21'=>'岐阜県'
    ,'22'=>'静岡県'
    ,'23'=>'愛知県'
    ,'24'=>'三重県'
    ,'25'=>'滋賀県'
    ,'26'=>'京都府'
    ,'27'=>'大阪府'
    ,'28'=>'兵庫県'
    ,'29'=>'奈良県'
    ,'30'=>'和歌山県'
    ,'31'=>'鳥取県'
    ,'32'=>'島根県'
    ,'33'=>'岡山県'
    ,'34'=>'広島県'
    ,'35'=>'山口県'
    ,'36'=>'徳島県'
    ,'37'=>'香川県'
    ,'38'=>'愛媛県'
    ,'39'=>'高知県'
    ,'40'=>'福岡県'
    ,'41'=>'佐賀県'
    ,'42'=>'長崎県'
    ,'43'=>'熊本県'
    ,'44'=>'大分県'
    ,'45'=>'宮崎県'
    ,'46'=>'鹿児島県'
    ,'47'=>'沖縄県'
)));

// 情報提供元名
define('ACT_TYPE_NAME',
serialize(array(
    '1' => '出動',
    '2' => '電話対応',
    '3' => 'その他'
)));

// 障害状況トリガー名
define('PRODUCT_TRIGGER_NAME',
serialize(array(
    '1' => '通常運用',
    '2' => '立上時',
    '3' => '立下時',
    '4' => '停電',
    '5' => '復電',
    '6' => '対象機器状変',
    '7' => '他設備機器状変',
    '8' => 'モード切替',
    '9' => '二重化切替',
    '10' => '雷害',
    '11' => '水害',
    '12' => '火災',
    '13' => 'VVVF運転時',
    '14' => 'その他'
)));

// 障害状況頻度名
define('PRODUCT_HINDO_NAME',
serialize(array(
    '1' => '常時',
    '2' => '不定期',
    '3' => '間欠的',
    '4' => 'その他'
)));

// 障害状況現象名
define('PRODUCT_GENSYO_NAME',
serialize(array(
    '1' => '運転不能',
    '2' => '停止不能',
    '3' => '動作異常',
    '4' => '操作不能',
    '5' => '監視不能',
    '6' => '入出力値',
    '7' => '異常異音・異臭',
    '8' => '過熱',
    '9' => '磨耗',
    '10' => '詰まり',
    '11' => '回転不良',
    '12' => '伝送・回線異常',
    '13' => '異常停止',
    '14' => '錆・腐食',
    '15' => 'その他'
)));

// 障害状況状態名
define('PRODUCT_STATUS_NAME',
serialize(array(
    '1' => 'システムダウン',
    '2' => '電源断',
    '3' => '機器・装置故障',
    '4' => '部品故障',
    '5' => '破損・焼損',
    '6' => 'その他'
)));

// ::: 2018.01.25 [#23] 入力補助モーダル　インシデント Add Start newtouch
// インシデント分類
define('INCIDENT_TYPE_VALUE', serialize(array(
    'incidentTypeSyougai'=>'1'
    ,'incidentTypeJiko'=>'2'
    ,'incidentTypeClaim'=>'3'
    ,'incidentTypeToiawase'=>'4'
    ,'incidentTypeInfo'=>'5'
    ,'incidentTypeOther'=>'6'
)));

// インシデントステータス
define('INCIDENT_STATUS_VALUE', serialize(array(
    'incidentStatusCall'=>'1'
    ,'incidentStatusTaio'=>'2'
    ,'incidentStatusAct'=>'3'
)));

// 業種区分
define('INDUSTRY_TYPE_VALUE', serialize(array(
    'industryTypeMachinery'=>'1'
    ,'industryTypeElectricalMachinery'=>'2'
    ,'industryTypeInstrumentation'=>'3'
    ,'industryTypeInfo'=>'4'
    ,'industryTypeEnvironment'=>'5'
    ,'industryTypeWBC'=>'6'
    ,'industryTypeOther'=>'7'
)));

// 顧客分類
define('CUST_TYPE_VALUE', serialize(array(
    'custTypeNenkan'=>'1'
    ,'custTypeTenken'=>'2'
    ,'custTypeNasi'=>'3'
    ,'custTypeKasi'=>'4'
    ,'custTypeOther'=>'5'
)));
// ::: 2018.01.25 [#23] 入力補助モーダル　インシデント Add End   newtouch
