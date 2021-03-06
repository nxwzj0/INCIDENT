<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	画面名　　　　　：インシデント閲覧画面
//	HTMLID　　　　 ：IncidentDetailView.php
//	作成日付・作成者：2017.10.05 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
?>

<!DOCTYPE html>
<html lang="ja">   
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>インシデント管理　閲覧画面</title>
        
        <script src="./etc/common.js"></script>
        <script>
            // PHPからjavascript用の$dataを受け取り、変数を作成する
            var data = JSON.parse('<?php if (isset($data)) echo $data; ?>');
            <?php
                if (isset($data)){
                    foreach (json_decode($data) as $key => $value){
                        // javascriptの変数宣言を実施
                        echo "var ".$key." = (data != null) ? data.".$key." : null;";
                    }
                }
            ?>
        </script>
        <!-- jQuery -->
        <script src="./etc/jquery/jquery.min.js"></script>
        <!-- AngularJS -->
        <script src="./etc/angular-1.6.5/angular.min.js"></script>
        <script src="./etc/incident_detail.js"></script>
        <!-- AngularJS(ヘッダー部) -->
        <script src="./etc/incident_header.js"></script>
        <!-- Bootstrap Core JavaScript -->
        <script src="./etc/bootstrap/js/bootstrap.min.js"></script>
        <!-- Metis Menu Plugin JavaScript -->
        <script src="./etc/metisMenu.min.js"></script>
        <!-- Custom Theme JavaScript -->
        <script src="./etc/sb-admin-2.min.js"></script>

        <!-- Bootstrap Core CSS -->
        <link href="./etc/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <!-- MetisMenu CSS -->
        <link href="./etc/metisMenu.min.css" rel="stylesheet" type="text/css">
        <!-- Custom CSS -->
        <link href="./etc/sb-admin-2.css" rel="stylesheet" type="text/css">
        <!-- Custom Fonts -->
        <link href="./etc/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <!-- 変更CSS -->
        <link href="./etc/incident.css" rel="stylesheet" type="text/css">
    </head>

    <body>
        <!-- ヘッダーの読み込み -->
        <?php require_once('./view/IncidentHeaderView.php'); ?>
        <!-- 二つ目のモジュール読込のため、ng-appを使わずにエレメントを指定し手動で起動する -->
        <div id="detailApp" ng-cloak>
            <div ng-controller="DetailController as main" class="container-fluid">
                <div class="text-right button-margin">
                    <!-- 仕様検討中のためコメント ->
                    <!--
                    <span>
                        <button type="button" class="btn btn-danger" ng-click="main.applyForCostPayment()">費用決済申請</button>
                    </span>
                    -->
                    <span>
                        <button type="button" class="btn btn-danger" ng-click="main.moveEdit()">編集</button>
                    </span>
                    <span>
                        <button type="button" class="btn btn-danger" ng-click="main.moveList()">一覧へ戻る</button>
                    </span>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                        <div class="panel panel-danger">
                            <div class="panel-heading clearfix">
                                <span class="h3 incident-title-status">{{main.incidentNo}}</span><span class="h4 incident-title-status">　{{main.incidentStatus}}　{{main.incidentType}}</span>
                                <div class="pull-right"><strong>登録日：{{main.entryDate}} {{main.entryUserName}}　最終更新日：{{main.lastUpdateDate}} {{main.lastUpdateUserName}}</strong></div>
                            </div>
                            <!-- /.panel-heading -->
                            <div class="panel-body context-margin">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>責任者：</strong></div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.RespName}}</div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>親インシデント番号：</strong></div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.parentIncidentNo}}</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>発生日時：</strong></div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.incidentStartDateTime}}</div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>情報提供元：</strong></div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">○○水道局</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>情報提供者：</strong></div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">水道　太郎</div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>情報提供TEL：</strong></div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">090-1234-5678</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>関係者：</strong></div>
                                    <div class="col-lg-9 col-md-9 col-sm-6 col-xs-6">
                                        <span ng-repeat="kankeishaName in main.kankeishaNames">
                                            {{kankeishaName}}<span ng-show="!$last">,</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>注記：</strong></div>
                                    <div class="col-lg-9 col-md-9 col-sm-6 col-xs-6">
                                        <!-- 改行コード反映の確認できるまでバインド保留 -->
                                        <!-- {{main.note}} -->
                                        2017/1/2に処置完了<br>
                                        今後の再発を防ぐ方法を検討
                                    </div>
                                </div>

                                <h5 class="context-header"><strong>設備情報及び顧客情報</strong></h5>
                                <div class="setubi-and-cust-info-border">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>機場：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.kijoName}}</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>事業主体：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.mainCust}}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>設備：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.setubiName}}</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>都道府県：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.pref}}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>納入プロジェクト：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">2016年度○○工事</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>顧客：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.custName}}</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>顧客分類：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.custType}}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>会社名・所属部署：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">○○市水道局</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>依頼者：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">依頼　太郎</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>連絡先(TEL)：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">018-000-1111</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>連絡先(FAX)：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">018-000-1111</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>連絡先(E-mail)：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">xxxxxxxxxx@abc.co.jp</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>営業部門：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.salesDept}}</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>営業担当者：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">{{main.salesRep}}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>主管部門：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">××部門</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>主管担当者：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">主管担当者</div>
                                    </div>

                                </div>

                                <h5 class="context-header"><strong>受付情報</strong></h5>
                                <div class="call-info-border">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>受付日：</strong></div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">{{main.callDate}}</div>
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><strong>開始：</strong>&nbsp;&nbsp;{{main.callStartTime}}&nbsp;&nbsp;&nbsp;&nbsp;<strong>終了：</strong>&nbsp;&nbsp;{{main.callEndTime}}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>受付部署：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">{{main.callDeptName}}</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>受付者：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">{{main.callRep}}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong><strong>TEL：</strong></strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">{{main.callTel}}</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>E-mail：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">{{main.callEmail}}</div>
                                    </div>
                                    <div class="info-detail-area">
                                        {{main.callContent}}
                                    </div>
                                </div>

                                <h5 class="context-header"><strong>対応情報</strong></h5>
                                <div class="taio-info-border">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>対応日：</strong></div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">2017/1/2</div>
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><strong>開始：</strong>&nbsp;&nbsp;10:00<strong>&nbsp;&nbsp;&nbsp;&nbsp;終了：</strong>&nbsp;&nbsp;10:30</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>対応部署：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">対応部門１</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>対応者：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">川本　健</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>TEL：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">018-000-1111</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>E-mail：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">kawamoto@adf.co.jp</div>
                                    </div>
                                    <div class="info-detail-area">
                                        22:29 MW)南関東サービスへサービスへメール送信。<br>
                                        22:31 同）〇〇殿より応答があり、対応を依頼<br>
                                        22:37 〇〇殿より、「本件につき、FE)新横浜GRと連絡とりたい、おそらく、担当者は××殿である」との取次依頼あり。<br>
                                        対応を依頼
                                    </div>
                                </div>

                                <h5 class="context-header"><strong>処置情報</strong></h5>
                                <div class="action-info-border">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>処置予定日：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">{{main.callTaioYoteiDate}}</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>処置区分：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">現地</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>処置開始日時：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">2017/1/2&nbsp;&nbsp;10:00</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>処置終了日時：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">2017/1/2&nbsp;&nbsp;10:30</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>処置部署：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">処置部門１</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>処置者：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">川本　健</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>TEL：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">018-000-1111</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>E-mail：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">kawamoto@adf.co.jp</div>
                                    </div>
                                    <div class="info-detail-area">
                                        22:29 MW)南関東サービスへサービスへメール送信。<br>
                                        22:31 同）〇〇殿より応答があり、対応を依頼<br>
                                        22:37 〇〇殿より、「本件につき、FE)新横浜GRと連絡とりたい、おそらく、担当者は××殿である」との取次依頼あり。<br>
                                        対応を依頼
                                    </div>
                                </div>

                                <h5 class="context-header"><strong>製品情報</strong></h5>
                                <div class="product-info-border">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>機種区分：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">機種区分１</div>
                                    </div>
                                    <h5 class="context-header"><strong>障害状況</strong></h5>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>トリガー：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">停電</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>頻度：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">不定期</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>現象：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">停止不能</div>
                                        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6"><strong>状態：</strong></div>
                                        <div class="col-lg-4 col-md-3 col-sm-6 col-xs-6">電源断</div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.panel-body -->
                        </div>
                        <!-- /.panel -->

                        <h4 class="panel-header text-primary"><strong>▼関連リンク</strong></h4>
                        <div class="panel panel-default">
                            <div class="panel-body context-margin">
                                <h5 class="context-header"><strong>プロジェクト情報　<span class="text-danger">※プロジェクト情報はＡＲＣＳから行なってください。（ＡＲＣＳ登録後の翌日反映）</span></strong></h5>
                                <div class="context-margin">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>プロジェクト番号：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><a><u>J000010</u></a></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>PJ主管部門：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">プロ主管</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>プロジェクト名：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>PM：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">川本　健</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>代表機場：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>都道府県：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">東京都</div>
                                    </div>
                                </div>
                                <h5 class="context-header"><strong>障害対応報告書(MR2)</strong></h5>
                                <div class="context-margin">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>件名：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><a><u>XXXXXXXXXXシーケンサ異常</u></a></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>作成日：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">2017/1/4</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>依頼元：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">依頼元</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>作業担当者：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">川本　健</div>
                                    </div>
                                </div>
                                <h5 class="context-header"><strong>労災・事故・クレーム連絡</strong></h5>
                                <div class="context-margin">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>状態：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">第1報 正式発行</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>区分：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">品質（ランクＡ）</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>概要：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><a><u>XXXXXXXXXXXXXXXXXXXXXX</u></a></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>顧客名：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">川本　健</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>機場名：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>発行日：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">2017/1/1</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>発行元：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>
                                    </div>
                                </div>
                                <h5 class="context-header"><strong>費用決済申請</strong></h5>
                                <div class="context-margin">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>ID番号：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><a><u>XXXXXXXXXX</u></a></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>ステータス：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">決裁</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>区分：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">クレーム対応</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>決裁番号：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">無償 第X号</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>件名：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">XXXXXXXXXXXXXXXXXXXXXX</div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><strong>概算金額：</strong></div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"><div class="pull-right">123,456</div></div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.panel-body -->
                        </div>
                        <!-- /.panel -->

                        <h4 class="panel-header text-primary"><strong>▼関連インシデント</strong></h4>
                        <div class="panel panel-default">
                            <div class="panel-body context-margin">
                                <h5 class="context-header"><strong>同一機場インシデント</strong></h5>
                                <div class="context-margin">
                                    <a><u>#12390 障害 2016/12/31 ○○○浄水場 ○○○市</u></a>
                                    <div class="context-margin">
                                        【一部停電】秋田市仁井田にて発生した停電により浄水場内におい…
                                    </div>
                                </div>
                                <h5 class="context-header"><strong>同一顧客インシデント</strong></h5>
                                <div class="context-margin">
                                    <a><u>#12312 問合せ 2016/12/31 ○○○センター ○○○企業局</u></a>
                                    <div class="context-margin">
                                        【問合せ】○○○センター○○○企業局より○○○についての問合…
                                    </div>
                                </div>
                            </div>
                            <!-- /.panel-body -->
                        </div>
                        <!-- /.panel -->

                        <h4 class="panel-header text-primary"><strong>▼変更履歴</strong></h4>
                        <div class="panel panel-default">
                            <div class="panel-body context-margin">
                                <h5 class="context-header"><strong>更新者：川本　健(2017/1/2)</strong></h5>
                                <ul>
                                    <li><strong>ステータス</strong> 対応中 から 完了 に変更</li>
                                    <li><strong>営業部門</strong> ○○部門 に設定</li>
                                    <li><strong>対応内容</strong> 更新</li>
                                </ul>
                                <h5 class="context-header"><strong>更新者：吉原　聡(2017/1/2)</strong></h5>
                                <ul>
                                    <li><strong>ステータス</strong> 対応中 に設定</li>
                                    <li><strong>対応内容</strong> 更新</li>
                                </ul>
                                <h5 class="context-header"><strong>更新者：川本　健(2017/1/1)</strong></h5>
                                <ul>
                                    <li><strong>ステータス</strong> 受付済 に設定</li>
                                    <li><strong>対応内容</strong> 更新</li>
                                </ul>
                            </div>
                            <!-- /.panel-body -->
                        </div>
                        <!-- /.panel -->
                    </div>
                </div>
                <!-- /.row -->
            </div>
        </div>
    </body>
</html>
