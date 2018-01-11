<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：
//	画面名　　　　　：インシデント画面ヘッダー
//	HTMLID　　　　 ：IncidentHeaderView.php
//	作成日付・作成者：2017.10.05 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
?>
<div id="entryLoad" class="entryLoad"></div>
<div ng-app="headerApp" ng-cloak>
    <div ng-controller="HeaderController as header">
        <nav class="navbar navbar-static-top">
            <div class="container-fluid">
                <div class="row header-first">
                    <div class="col-lg-6 col-md-6 col-sm-8 col-xs-8">
                        <div class="navbar-header">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <!--
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarEexample">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    -->
                                    <a class="navbar-brand" href="./IncidentTop.php" target="_top"><span class="h3 header-text system-title">インシデント管理</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-4 col-xs-4">
                        <!-- <div class="collapse navbar-collapse" id="navbarEexample"> -->
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="navbar-text navbar-right header-user-area-text">川本　健　<u>ログアウト</u></div>
                            </div>
                        </div>
                        <div class="row">
                            <form class="navbar-form navbar-right header-search" role="search">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="キーワードを入力">
                                </div>
                            </form>
                        </div>
                        <!-- </div> -->
                    </div>
                </div>

                <div class="row header-second">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <!-- <div class="collapse navbar-collapse" id="navbarExample"> -->
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle header-text" data-toggle="dropdown">インシデント検索 <i class="fa fa-caret-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li><a href="./IncidentList.php">○○機場検索条件</a></li>
                                    <li><a href="./IncidentList.php">東京都対応中条件</a></li>
                                    <li><a href="./IncidentList.php">担当者：吉田</a></li>
                                    <li><a href="#">検索条件を削除する</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="./IncidentEdit.php" class="header-text" target="_top">インシデント登録</a>
                            </li>
                            <li>
                                <a href="#" class="header-text">管理</a>
                            </li>
                        </ul>
                        <!-- /.dropdown -->
                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>