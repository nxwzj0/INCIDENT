angular.module('todoApp', [])
        .controller('TodoListController', ['$http', function ($http) {
            var todoList = this;
            var todos = [
                {text: 'AngularJSを学ぶ', done: true},
                {text: 'AngularJSでアプリケーションをつくる', done: false}
            ];
            todoList.todos = todos;
            todoList.date = date;

            // やることを追加する
            this.addTodo = function () {
                var newTodo = this.todoText;
                if (newTodo) {
                    this.todos.push({text: newTodo, done: false});
                    this.todoText = null;
                }
            };

            // チェックしたタスクの数を数える
            todoList.remaining = function () {
                var count = 0;
                // angular.から始まるangularの関数がある
                angular.forEach(todos, function (todo) {
                    if (!todo.done) {
                        count++;
                    }
                });
                return count;
            };

            // 完了したタスクを削除する
            todoList.archive = function () {
                todos = [];
                angular.forEach(todoList.todos, function (todo) {
                    if (!todo.done) {
                        todos.push(todo);
                    }
                });
                todoList.todos = todos;
            };

            // サーバと通信をする
            this.angularSubmit = function () {
                entryLoad();
                $http({
                    url: "./receive.php",
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                    data: [
                        {"id": "1", "name": this.todoText},
                        {"id": "2", "name": "YS"},
                    ],
                })
                        .then(function onSuccess(response) {
                            // 通信成功時
                            console.dir(response);
                            todoList.ajaxSuccess = response.data;
                            exitLoad();
                        }, function onError(response) {
                            // 通信失敗時
                            console.dir(response);
                            exitLoad();
                            // エラーページ表示
                            var form = document.createElement('form');
                            form.action = 'error.php';
                            form.method = 'post';
                            document.body.appendChild(form);
                            form.submit();
                        });
            };
        }]);