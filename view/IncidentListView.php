<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	画面名　　　　　：インシデント一覧画面
//	HTML_ID　　　　：IncidentListView.php
//	作成日付・作成者：2017.10.05 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
?>

<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>インシデント管理　検索画面</title>

        <!-- jQuery -->
        <script src="./etc/jquery/jquery.min.js"></script>
        <!-- AngularJS -->
        <script src="./etc/angular-1.6.5/angular.min.js"></script>
        <script src="./etc/incident_list.js"></script>
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
        <div id="listApp" ng-cloak>
            <div ng-controller="ListController as main" class="container-fluid">
                <div id="newTable" class="row" style="width:100%">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="panel">
                            <table class="table table-striped" id="dataTables-result">
                                <thead>
                                    <tr>
                                        <th class="table-header-list" style="width:15%">インシデント番号 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:15%">受付内容 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:15%">機場 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:15%">設備 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:7%">都道府県 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:7%">分類 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:8%">ステータス <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:9%">発生日時 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:9%">受付日 <i class="fa fa-caret-down"></i></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
                <form>
                    <!-- 仕様検討中のためコメント -->
                    <!--
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding">
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <button class="btn btn-danger btn-close">&times;</button>
                                </div>
                                <div class=""></div>
                                <label class="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label">
                                    キーワード
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <input type="text" class="form-control" value="">
                        </div>
                    </div>
                    -->
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding">
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <button class="btn btn-danger btn-close">&times;</button>
                                </div>
                                <div class=""></div>
                                <label class="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label">
                                    インシデント番号
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding">
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <button class="btn btn-danger btn-close">&times;</button>
                                </div>
                                <div class=""></div>
                                <label class="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label">
                                    受付内容
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding">
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <button class="btn btn-danger btn-close">&times;</button>
                                </div>
                                <div class=""></div>
                                <label class="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label">
                                    機場
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding">
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <button class="btn btn-danger btn-close">&times;</button>
                                </div>
                                <div class=""></div>
                                <label class="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label">
                                    設備
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding">
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <button class="btn btn-danger btn-close">&times;</button>
                                </div>
                                <div class=""></div>
                                <label class="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label">
                                    都道府県
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding">
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <button class="btn btn-danger btn-close">&times;</button>
                                </div>
                                <div class=""></div>
                                <label class="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label">
                                    受付日
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div class="date-div">
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-input-support">
                                            <i class="fa fa-calendar"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <span class="text-center inner-text">～</span>
                            <div class="date-div">
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-input-support">
                                            <i class="fa fa-calendar"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding">
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <button class="btn btn-danger btn-close">&times;</button>
                                </div>
                                <div class=""></div>
                                <label class="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label">
                                    インシデント分類
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                            <div class="checkbox">
                                <label class="input-item">
                                    <input type="checkbox" value=""> 問合せ
                                </label>
                                <label class="input-item">
                                    <input type="checkbox" value=""> 情報
                                </label>
                                <label class="input-item">
                                    <input type="checkbox" value=""> クレーム
                                </label>
                                <label class="input-item">
                                    <input type="checkbox" value=""> 障害
                                </label>
                                <label class="input-item">
                                    <input type="checkbox" value=""> 事故
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding">
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <button class="btn btn-danger btn-close">&times;</button>
                                </div>
                                <div class=""></div>
                                <label class="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label">
                                    ステータス
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                            <div class="checkbox">
                                <label class="input-item">
                                    <input type="checkbox" value=""> 受付中
                                </label>
                                <label class="input-item">
                                    <input type="checkbox" value=""> 対応依頼
                                </label>
                                <label class="input-item">
                                    <input type="checkbox" value=""> 対応中
                                </label>
                                <label class="input-item">
                                    <input type="checkbox" value=""> 完了
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <select id="InputSelect" class="form-control search-dropdown">
                                            <option>検索項目を追加</option>
                                            <option>責任者</option>
                                            <option>親インシデント番号</option>
                                            <option>発生日時</option>
                                            <option>事業主体</option>
                                            <option>都道府県</option>
                                            <option>顧客</option>
                                            <option>顧客分類</option>
                                            <option>営業部門</option>
                                            <option>営業担当者</option>
                                            <option>関係者</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <button class="btn btn-xs btn-danger">検索条件を保存</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 search-result-info">
                                    検索結果：　50件
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 button-margin text-right">
                                    <button class="btn btn-warning"><i class="fa fa-download"></i> EXCEL出力</button>
                                    <button class="btn btn-danger"><i class="fa fa-search"></i> 検索</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="row" id="search-list">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="panel">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="table-header-list" style="width:15%">インシデント番号 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:15%">受付内容 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:15%">機場 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:15%">設備 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:7%">都道府県 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:7%">分類 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:8%">ステータス <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:9%">発生日時 <!-- <i class="fa fa-caret-down"></i> --></th>
                                        <th class="table-header-list" style="width:9%">受付日 <i class="fa fa-caret-down"></i></th>
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
