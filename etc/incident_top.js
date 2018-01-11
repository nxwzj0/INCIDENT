angular.module('topApp', [])
        .controller('TopController', ['$http', function ($http) {
            var main = this;

            //main.incidentNo = "#12345";

        }]);
    
// jQueryが読み込まれていると仮定
// ng-appを複数起動する場合、1つ目以外は手動で起動しなければならない
angular.element(document).ready(function() {
    angular.bootstrap($('#topApp'), ['topApp']);
});