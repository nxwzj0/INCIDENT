angular.module('editApp', ['ui.bootstrap'])
        .controller('EditController', ['$http', function ($http) {
            var main = this;

            main.respNameSelected = undefined;

            //main.incidentNo = "#12345";
            
            main.userDatas = [
                {id: "kawamoto", num:"101", name: "川本　健"},
                {id: "j-kondo", num:"102", name: "近藤　純平"},
                {id: "yoshiwara", num:"103", name: "吉原　聡"},
                {id: "shinichi.y", num:"104", name: "吉田　伸一"},
                {id: "yuukou.s", num:"105", name: "菅原　悠嵩"}
            ];
            
            main.Regist = function() {
                // 登録処理
            };
            
            main.moveList = function() {
                window.location.href = './IncidentDetail.php';
            };
            
            main.respNameChanged = function() {
                // 責任者サジェスト適用後の動作
            };
            
            /*
            main.test = function() {
              onHrefLink('./IncidentDetail.php');
            };
            */
        }]);

// editAppに、filterMultipleカスタムフィルターを追加する
// 検討課題:filterの配置場所(共通処理にできそう)、filter内で.name .numを指定したくない
angular.module('editApp')
        .filter('filterMultiple', [function() {
            // data:パイプの左側から渡されるオブジェクト
            // (第一引数はパイプの左側から渡されるオブジェクトとなる)
            // query:フィルターの条件
            return function (data, query) {
                if (query === undefined) return data;
                var results = [];
                angular.forEach(data, function(val) {
                    if ((val.name).indexOf(query) > -1 || (val.num).indexOf(query) > -1) {
                        results.push(val);
                    }
                });
                return results;
            };
}]);

// jQueryが読み込まれていると仮定
// ng-appを複数起動する場合、1つ目以外は手動で起動しなければならない
angular.element(document).ready(function() {
    angular.bootstrap($('#editApp'), ['editApp']);
});