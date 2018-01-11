<?php
//*****************************************************************************
//	システム名　　　：インシデント管理システム
//	サブシステム名　：テスト
//	画面名　　　　　：TODOリスト画面
//	HTMLID　　　　 ：todo.php
//	作成日付・作成者：2017.10.02 ADF)S.Yoshida
//	修正履歴　　　　：
//*****************************************************************************
?>
<!doctype html>
<html ng-app="todoApp">
    <head>
        <meta charset="UTF-8">
        <title>Sample</title>

        <!-- jQuery -->
        <script src="./etc/jquery/jquery.min.js"></script>
        <script src="etc/angular-1.6.5/angular.min.js"></script>
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
        <script src="etc/todo.js"></script>
        <link rel="stylesheet" href="etc/todo.css">
        <link rel="stylesheet" href="etc/incident.css">
    </head>
    <body>
        <div id="entryLoad" class="entryLoad"></div>
        <div class="container">
            <h2>Todo</h2>
            <div ng-controller="TodoListController as todoList">
                <div>{{todoList.date}}</div>
                <span>全{{todoList.todos.length}}件中残り{{todoList.remaining()}}件</span>
                [ <a href="" ng-click="todoList.archive()">完了したタスクを削除する</a> ]
                <ul class="list-unstyled">
                    <li ng-repeat="todo in todoList.todos">
                        <label>
                            <input type="checkbox" ng-model="todo.done">
                            <span class="done-{{todo.done}}">{{todo.text}}</span>
                        </label>
                    </li>
                </ul>
                <form ng-submit="todoList.addTodo()">
                    <input type="text" ng-model="todoList.todoText" size="30" placeholder="やることを入力">
                    <input class="btn btn-primary btn-sm" type="submit" value="追加">
                </form>

                <form ng-submit="todoList.angularSubmit()">
                    <input class="btn btn-primary btn-sm" type="submit" value="サーバに通信">
                </form>
                <span>{{todoList.ajaxSuccess}}</span>
            </div>
        </div>
    </body>
</html>