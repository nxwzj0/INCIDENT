angular.module('listApp', [])
        .controller('ListController', ['$http', function ($http) {

                //this.incidentNo = "#12345";

            }]);

// jQueryが読み込まれていると仮定
// ng-appを複数起動する場合、1つ目以外は手動で起動しなければならない
angular.element(document).ready(function () {
    angular.bootstrap($('#listApp'), ['listApp']);
});

$(function () {
    $("#newTable").hide();

    $(window).scroll(function () {
        // スクロールイベント
        var this_scrollTop = $(this).scrollTop();

        if ($("#search-list").offset().top - this_scrollTop < 10) {
            $("#newTable").show();
        } else {
            $("#newTable").hide();
        }
    });
});