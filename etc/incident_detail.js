angular.module('detailApp', [])
        .controller('DetailController', ['$http', function ($http) {
            var main = this;
    
            // インシデント情報の取得を行う
            // 取得成功の場合、値のセットも行う
            getIncidentData();

            // １．メインパネル
            // １－１．ヘッダー
            main.incidentNo = "#12345";
            /*
             * setIncidentData()でバインディングを行うためコメント
             * TODO:残りの項目についてもsetIncidentData()でバインディングを行う
             */
            //main.incidentStatus = "対応中";
            //main.incidentType = "障害";

            main.entryDate = "2017/1/1";
            main.entryUserName = "川本　健";
            main.lastUpdateDate = "2017/1/2";
            main.lastUpdateUserName = "川本　健";
            
            // １－２．メイン情報
            main.RespName = "責任者";
            main.parentIncidentNo = "親インシデント番号";
            main.incidentStartDateTime = "2017/1/1";
            main.kijoName = "秋田市仁井田浄水場"; // 機場
            main.mainCust = "秋田市水道局"; // 事業主体
            main.setubiName = "ポンプ設備"; // 設備
            main.pref = "秋田県"; // 都道府県
            main.custName = "○○県○○市"; // 顧客
            main.custType = "年間契約"; // 顧客分類
            main.salesDept = "○○部門"; // 営業部門
            main.salesRep = "営業担当者"; // 営業担当者
            // ng-repeatを用いる場合は連想配列にする
            main.kankeishaNames = {kankeisha1:"川本　健", kankeisha2:"吉原　聡", kankeisha3:"近藤　純平", kankeisha4:"吉田　伸一"}; // 関係者
            /*
             * Angular：改行コード反映されない(<br>タグも同様)
             * (CSSにwhite-space: pre-wrap;を記述する？　邪道っぽい)
             * TODO:改行タグの反映方法を調査
             */
            // main.note = "2017/2/1に処置完了\n今後の再発を防ぐ方法を検討"; // 注記
            
            // １－３．受付情報
            main.callDate = "2017/1/1"; // 受付日
            main.callStartTime = "10:00"; // 開始
            main.callEndTime = "10:30"; // 終了
            main.callTaioYoteiDate = "2017/1/2"; // 対応予定日
            main.callDeptName = "受付部門１"; // 受付部署
            main.callRep = "川本　健"; // 受付者
            main.callTel = "018-000-1111"; // TEL
            main.callEmail = "kawamoto@adf.co.jp"; // E-mail
            main.callContent = "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。"; // 受付内容
            
            // １－４．対応情報
            main.taioDate = ""; // 対応日
            main.taioStartTime = ""; // 開始
            main.taioEndTime = ""; // 終了
            main.taioHouhou = ""; // 対応手段
            main.taioDeptName = ""; // 対応部署
            main.taioRep = ""; // 対応者
            main.taioTel = ""; // TEL
            main.taioEmail = ""; // E-mail
            main.taioContent = ""; // 対応内容
            
            // １－５．処置情報
            main.actionDate = ""; // 処置日
            main.actionStartTime = ""; // 開始
            main.actionEndTime = ""; // 終了
            main.actionDeptName = ""; // 処置部署
            main.actionRep = ""; // 処置者
            main.actionTel = ""; // TEL
            main.actionEmail = ""; // E-mail
            main.actionContent = ""; // 処置内容
            
            // １－６．製品情報
            main.productType = ""; // 機種区分
            main.productTrigger = ""; // トリガー
            main.productHindo = ""; // 頻度
            main.productGensyo = ""; // 現象
            main.productStatus = ""; // 状態
            
            // ２．関連リンク
            // ２ー１．プロジェクト情報
            main.PJNo = ""; // プロジェクト番号
            main.PJRespDept = ""; // PJ主管部門
            main.PJName = ""; // プロジェクト名
            main.PJManager = ""; // PM
            main.PJKijo = ""; // 代表機場
            main.PJPref = ""; // 都道府県
            
            // ２ー２．障害対応報告(MR2)
            main.MR2Title = ""; // 件名
            main.MR2MakeDate = ""; // 作成日
            main.MR2Iraimoto = ""; // 依頼元
            main.MR2WorkRep = ""; // 作業担当者

            // ２ー３．労災・事故・クレーム連絡
            main.rjcStatus = ""; // 状態
            main.rjcType = ""; // 区分
            main.rjcOverView = ""; // 概要
            main.rjcCustName = ""; // 顧客名
            main.rjcKijoName = ""; // 機場名
            main.rjcHakkoDate = ""; // 発行日
            main.rjcHakkomoto = ""; // 発行元

            // ２－４．費用決済申請
            main.hiyoHakkomoto = ""; // 発行元
            main.hiyoStatus = ""; // ステータス
            main.hiyoType = ""; // 区分
            main.hiyoNo = ""; // 決裁番号
            main.hiyoTitle = ""; // 件名
            main.hiyoAmount = ""; // 概算金額
            
            // ３．関連インシデント
            // ３－１．同一機場インシデント
            main.sameKijoIncidents = ""; // 配列で保持

            // ３－２．同一顧客インシデント
            main.sameCustIncidents = ""; // 配列で保持

            // ４．変更履歴
            main.chanegeRev = ""; // 配列で保持
            
            // ファンクション
            main.applyForCostPayment = function() {
                //alert("費用決済申請処理");
            };
            
            main.moveList = function() {
                window.location.href = './IncidentList.php';
            };
            
            main.moveEdit = function() {
                window.location.href = './IncidentEdit.php';
            };
            
             function getIncidentData() {
                entryLoad();
                $http({
                    url: "./IncidentDataGet.php",
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                    data: {"userId": data.userId, "incidentId": data.incidentId}
                })
                        .then(function onSuccess(response) {
                            // 通信成功時
                            console.dir(response);
                            // 画面にインシデント情報をセットする
                            setIncidentData(response.data);
                            exitLoad();
                        }, function onError(response) {
                            // 通信失敗時
                            console.dir(response);
                            exitLoad();
                        });
            };

             function setIncidentData(data) {
                // 画面にインシデント情報をセットする
                /*
                 * TODO:残りの要素についてもこのfunction内でバインドを行う
                 */
                main.incidentStatus = data[1][0].incidentStatus;
                main.incidentType = data[1][1].incidentType;
            };
        }]);

// jQueryが読み込まれていると仮定
// ng-appを複数起動する場合、1つ目以外は手動で起動しなければならない
angular.element(document).ready(function() {
    angular.bootstrap($('#detailApp'), ['detailApp']);
});