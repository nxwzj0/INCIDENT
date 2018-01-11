<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	画面名　　　　　：インシデント登録画面
//	HTML_ID　　　　 ：IncidentEditView.php
//	作成日付・作成者：2017.10.05 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
?>

<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>インシデント管理　登録画面</title>

        <script src="./etc/common.js"></script>
        <!-- jQuery -->
        <script src="./etc/jquery/jquery.min.js"></script>
        <!-- AngularJS -->
        <script src="./etc/angular-1.6.5/angular.min.js"></script>
        <script src="./etc/incident_edit.js"></script>
        <!-- AngularJS(ヘッダー部) -->
        <script src="./etc/incident_header.js"></script>
        <!-- UI Bootstrap JavaScript -->
        <script src="./etc/ui-bootstrap-tpls-2.5.0.min.js"></script>
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
        <div id="editApp" ng-cloak>
            <div ng-controller="EditController as main" class="container-fluid">
                <!--
                <button onclick="onHrefLink('./IncidentEdit.php')">load</button>
                <button ng-click="onHrefLink('./IncidentEdit.php')">load angular</button>
                <button ng-click="main.test()">load angular</button>
                -->
                <div class="text-right button-margin">
                    <span>
                        <button type="button" class="btn btn-danger" ng-click="main.Regist()">登録</button>
                    </span>
                    <span>
                        <button type="button" class="btn btn-danger" ng-click="main.moveList()">閲覧へ戻る</button>
                    </span>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="panel panel-danger">
                            <div class="panel-heading clearfix">
                                <span class="h3 incident-title-status">#12345</span>
                                <div class="pull-right"><strong>登録日：2017/1/1 ○○ 一郎　最終更新日：2017/1/2 ×× 二郎</strong></div>
                            </div>
                            <!-- /.panel-heading -->
                            <div class="panel-body context-margin">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <label><strong>ステータス：</strong></label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <select class="form-control edit-dropdown">
                                                <option>対応中</option>
                                                <option>受付済</option>
                                                <option>対応依頼</option>
                                                <option>完了</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <label><strong>インシデント分類：</strong></label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <select class="form-control edit-dropdown">
                                                <option>障害</option>
                                                <option>事故</option>
                                                <option>問合せ</option>
                                                <option>クレーム</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <label><strong>責任者：</strong></label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <div class="input-group">
                                                <input class="form-control" type="text" ng-model="main.respNameSelected" uib-typeahead="respName as respName.name for respName in main.userDatas | filterMultiple:$viewValue | limitTo:8"  typeahead-on-select="main.respNameChanged()" typeahead-editable="false">
                                                <span class="input-group-btn">
                                                    <button type="button" class="btn btn-input-support">
                                                        <i class="fa fa-user"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <label><strong>親インシデント番号：</strong></label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <div class="input-group">
                                                <input type="text" class="form-control">
                                                <span class="input-group-btn">
                                                    <button type="button" class="btn btn-input-support">
                                                        <i class="fa fa-search"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <label><strong>発生日時：</strong></label>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <div class="input-group">
                                                <input type="text" class="form-control">
                                                <span class="input-group-btn">
                                                    <button type="button" class="btn btn-input-support">
                                                        <i class="fa fa-calendar"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <div class="input-group">
                                                <input type="text" class="form-control">
                                                <span class="input-group-btn">
                                                    <button type="button" class="btn btn-input-support">
                                                        <i class="fa fa-clock-o"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-lg-offset-1 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <label><strong>情報提供元：</strong></label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <label><strong>情報提供者：</strong></label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <label><strong>情報提供TEL：</strong></label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <label><strong>関係者：</strong></label>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                            <div class="input-group">
                                                <input type="text" class="form-control">
                                                <span class="input-group-btn">
                                                    <button type="button" class="btn btn-input-support">
                                                        <i class="fa fa-user"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-offset-2 col-md-offset-3 col-sm-offset-3 col-xs-offset-3 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            &nbsp;&nbsp;<a><u>関係者を追加</u></a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <label for="InputTextarea"><strong>注記：</strong></label>
                                        </div>
                                        <div class="col-lg-10 col-md-9 col-sm-9 col-xs-9">
                                            <textarea class="form-control" id="InputTextarea" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <h5 class="context-header"><strong>設備情報及び顧客情報</strong></h5>
                                    <div class="setubi-and-cust-info-border">
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>機場：</strong></label>
                                            </div>
                                            <div class="col-lg-10 col-md-9 col-sm-9 col-xs-9">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-industry"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>事業主体：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-building"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>設備：</strong></label>
                                            </div>
                                            <div class="col-lg-10 col-md-9 col-sm-9 col-xs-9">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-cog"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>都道府県：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <select class="form-control edit-dropdown">
                                                    <option></option>
                                                    <option>北海道</option>
                                                    <option>青森県</option>
                                                    <option>：</option>
                                                    <option>沖縄県</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>納入プロジェクト：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>顧客：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>顧客分類：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <select class="form-control edit-dropdown">
                                                    <option></option>
                                                    <option>分類１</option>
                                                    <option>分類２</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>会社名・所属部署：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>依頼者：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>連絡先(TEL)：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>連絡先(FAX)：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>連絡先(E-mail)：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>営業部門：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>営業担当者：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-user"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>主管部門：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                                <label><strong>主管担当者：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-user"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="context-header"><strong>受付情報</strong></h5>
                                    <div class="call-info-border">
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>受付日：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-calendar"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>受付開始時刻：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-clock-o"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-offset-7 col-md-offset-7 col-sm-offset-6 col-xs-offset-6 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>受付終了時刻：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-clock-o"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>受付部署：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-building"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>受付者：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-user"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>TEL：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>E-mail：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label for="InputTextarea"><strong>受付内容：</strong></label>
                                            </div>
                                            <div class="col-lg-10 col-md-10 col-sm-9 col-xs-9">
                                                <textarea class="form-control" id="InputTextarea" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="context-header"><strong>対応情報</strong></h5>
                                    <div class="taio-info-border">
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>対応日：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-calendar"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>対応開始時刻：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-clock-o"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-offset-7 col-md-offset-7 col-sm-offset-6 col-xs-offset-6 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>対応終了時刻：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-clock-o"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>対応部署：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-building"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>対応者：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-user"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>TEL：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>E-mail：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label for="InputTextarea"><strong>対応内容：</strong></label>
                                            </div>
                                            <div class="col-lg-10 col-md-10 col-sm-9 col-xs-9">
                                                <textarea class="form-control" id="InputTextarea" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="context-header"><strong>処置情報</strong></h5>
                                    <div class="action-info-border">
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>処置予定日：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-calendar"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>処置区分：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                <label><strong>処置開始日時：</strong></label>
                                            </div>
                                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-calendar"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-clock-o"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                <label><strong>処置終了日時：</strong></label>
                                            </div>
                                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-calendar"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-clock-o"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>処置部署：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-building"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>処置者：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-input-support">
                                                            <i class="fa fa-user"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>TEL：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>E-mail：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label for="InputTextarea"><strong>処置結果：</strong></label>
                                            </div>
                                            <div class="col-lg-10 col-md-10 col-sm-9 col-xs-9">
                                                <textarea class="form-control" id="InputTextarea" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 class="context-header"><strong>製品情報</strong></h5>
                                    <div class="product-info-border">
                                        <div class="row">
                                            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>機種区分：</strong></label>
                                            </div>
                                            <div class="col-lg-10 col-md-10 col-sm-9 col-xs-9">
                                                <select class="form-control edit-dropdown">
                                                    <option></option>
                                                    <option>etc</option>
                                                </select>
                                            </div>
                                        </div>
                                        <h5 class="context-header"><strong>障害状況</strong></h5>
                                        <div class="row">
                                            <div class="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>トリガー：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <select class="form-control edit-dropdown">
                                                    <option></option>
                                                    <option>停電</option>
                                                    <option>etc</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>頻度：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <select class="form-control edit-dropdown">
                                                    <option></option>
                                                    <option>不定期</option>
                                                    <option>etc</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>現象：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <select class="form-control edit-dropdown">
                                                    <option></option>
                                                    <option>停止不能</option>
                                                    <option>etc</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                                                <label><strong>状態：</strong></label>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                <select class="form-control edit-dropdown">
                                                    <option></option>
                                                    <option>電源断</option>
                                                    <option>etc</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
                                    <a><u>#12312 問い合わせ 2016/12/31 ○○○センター ○○○企業局</u></a>
                                    <div class="context-margin">
                                        【問合せ】○○○センター○○○企業局より○○○についての問合…
                                    </div>
                                </div>
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
