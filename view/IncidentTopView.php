<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	画面名　　　　　：インシデントTOP画面
//	HTML_ID　　　　 ：IncidentTopView.php
//	作成日付・作成者：2017.10.05 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
?>

<!DOCTYPE html>
<html lang="ja">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>インシデント管理　TOP画面</title>

        <!-- jQuery -->
        <script src="./etc/jquery/jquery.min.js"></script>
        <!-- AngularJS -->
        <script src="./etc/angular-1.6.5/angular.min.js"></script>
        <script src="./etc/incident_top.js"></script>
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
        <div id="topApp" ng-cloak>
            <div ng-controller="TopController as main" class="container-fluid">
                <div class="toppage-margin"></div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="panel panel-danger">
                            <div class="panel-heading">
                                <h4 class="incident-title-status"><i class="fa fa-check"></i> 最新のインシデント</h4>
                            </div>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="table-header">インシデント番号</th>
                                        <th class="table-header">受付内容</th>
                                        <th class="table-header">機場</th>
                                        <th class="table-header">設備</th>
                                        <th class="table-header">都道府県</th>
                                        <th class="table-header">分類</th>
                                        <th class="table-header">ステータス</th>
                                        <th class="table-header">発生日時</th>
                                        <th class="table-header">受付日 <i class="fa fa-caret-down"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017091000</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">秋田市仁井田浄水場</td>
                                        <td class="char-list">XXポンプ</td>
                                        <td class="status-list">秋田県</td>
                                        <td class="status-list">障害</td>
                                        <td class="status-list">対応中</td>
                                        <td class="date-list">2017/09/20</td>
                                        <td class="date-list">2017/09/20</td>
                                    </tr>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017091020</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">万世橋浄水場</td>
                                        <td class="char-list">XYポンプ</td>
                                        <td class="status-list">東京都</td>
                                        <td class="status-list">問合せ</td>
                                        <td class="status-list">完了</td>
                                        <td class="date-list">2017/09/20</td>
                                        <td class="date-list">2017/09/20</td>
                                    </tr>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017091750</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">秋田浄水場</td>
                                        <td class="char-list">ポンプ</td>
                                        <td class="status-list">秋田県</td>
                                        <td class="status-list">障害</td>
                                        <td class="status-list">対応中</td>
                                        <td class="date-list">2017/09/19</td>
                                        <td class="date-list">2017/09/19</td>
                                    </tr>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017092050</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">愛知浄水場</td>
                                        <td class="char-list">ポンプ</td>
                                        <td class="status-list">愛知県</td>
                                        <td class="status-list">問合せ</td>
                                        <td class="status-list">対応</td>
                                        <td class="date-list">2017/09/18</td>
                                        <td class="date-list">2017/09/18</td>
                                    </tr>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017096020</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">神奈川浄水場</td>
                                        <td class="char-list">ポンプ</td>
                                        <td class="status-list">神奈川県</td>
                                        <td class="status-list">障害</td>
                                        <td class="status-list">対応中</td>
                                        <td class="date-list">2017/09/17</td>
                                        <td class="date-list">2017/09/17</td>
                                    </tr>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017093000</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">山梨浄水場</td>
                                        <td class="char-list">ポンプ</td>
                                        <td class="status-list">山梨県</td>
                                        <td class="status-list">障害</td>
                                        <td class="status-list">対応</td>
                                        <td class="date-list">2017/09/16</td>
                                        <td class="date-list">2017/09/16</td>
                                    </tr>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017091310</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">釧路浄水場</td>
                                        <td class="char-list">送水ポンプ</td>
                                        <td class="status-list">北海道</td>
                                        <td class="status-list">障害</td>
                                        <td class="status-list">対応中</td>
                                        <td class="date-list">2017/09/15</td>
                                        <td class="date-list">2017/09/15</td>
                                    </tr>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017097562</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">隅田川浄水場</td>
                                        <td class="char-list">流入伝電動弁</td>
                                        <td class="status-list">東京都</td>
                                        <td class="status-list">障害</td>
                                        <td class="status-list">対応</td>
                                        <td class="date-list">2017/09/10</td>
                                        <td class="date-list">2017/09/10</td>
                                    </tr>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017091234</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">北総浄水場</td>
                                        <td class="char-list">床排水ポンプ</td>
                                        <td class="status-list">千葉県</td>
                                        <td class="status-list">事故</td>
                                        <td class="status-list">対応中</td>
                                        <td class="date-list">2017/09/05</td>
                                        <td class="date-list">2017/09/05</td>
                                    </tr>
                                    <tr>
                                        <td class="code-list"><a href="./IncidentDetail.php"><u>2017092234</u></a></td>
                                        <td class="char-list">中央監視装置の障害。…</td>
                                        <td class="char-list">福井浄水場</td>
                                        <td class="char-list">送水ポンプ</td>
                                        <td class="status-list">福井県</td>
                                        <td class="status-list">クレーム</td>
                                        <td class="status-list">受付済</td>
                                        <td class="date-list">2017/09/01</td>
                                        <td class="date-list">2017/09/01</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

</html>
