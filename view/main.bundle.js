webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n.container-fluid {\r\n    position: relative !important;\r\n    z-index: -100 !important;\r\n}\r\n\r\n.dropdown-backdrop {\r\n    position: relative !important;\r\n    z-index: 200 !important;\r\n}\r\n*/\r\n\r\n/* ドロップダウンメニューをテキストエリア内に収める(検索画面) */\r\n.search-dropdown {\r\n    /*height: 35px;*/\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n/* ドロップダウンメニューをテキストエリア内に収める(登録画面) */\r\n.edit-dropdown {\r\n    /*height: 35px;*/\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n    //*****************************************************************************\n    //\tシステム名　　　：インシデント管理システム\n    //\tサブシステム名　：\n    //\t画面名　　　　　：ベース画面\n    //\t作成日付・作成者：2017.12.07 ADF)S.Yoshida\n    //\t修正履歴　　　　：\n    //*****************************************************************************\n-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_component__ = __webpack_require__("../../../../../src/app/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__top_top_component__ = __webpack_require__("../../../../../src/app/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detail_detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mr2_mr2_component__ = __webpack_require__("../../../../../src/app/mr2/mr2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modal_common_modal_component__ = __webpack_require__("../../../../../src/app/modal/common.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_relateUserAdd_modal_component__ = __webpack_require__("../../../../../src/app/modal/relateUserAdd.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modal_incidentSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/incidentSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modal_kijoSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/kijoSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modal_userSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/userSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modal_sectionSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/sectionSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modal_conditionSave_modal_component__ = __webpack_require__("../../../../../src/app/modal/conditionSave.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modal_conditionDelete_modal_component__ = __webpack_require__("../../../../../src/app/modal/conditionDelete.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modal_projectSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/projectSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modal_customerSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/customerSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modal_equipmentSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/equipmentSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__windowRef_service__ = __webpack_require__("../../../../../src/app/windowRef.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipe_order_by_pipe__ = __webpack_require__("../../../../../src/app/pipe/order.by.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__top_top_component__["a" /* TopComponent */],
            __WEBPACK_IMPORTED_MODULE_10__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__mr2_mr2_component__["a" /* Mr2Component */],
            __WEBPACK_IMPORTED_MODULE_14__project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_15__modal_common_modal_component__["a" /* CommonModalComponent */],
            __WEBPACK_IMPORTED_MODULE_16__modal_relateUserAdd_modal_component__["a" /* RelateUserAddModalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__modal_incidentSearch_modal_component__["a" /* IncidentSearchModalComponent */],
            __WEBPACK_IMPORTED_MODULE_18__modal_kijoSearch_modal_component__["a" /* KijoSearchModalComponent */],
            __WEBPACK_IMPORTED_MODULE_19__modal_userSearch_modal_component__["a" /* UserSearchModalComponent */],
            __WEBPACK_IMPORTED_MODULE_20__modal_sectionSearch_modal_component__["a" /* SectionSearchModalComponent */],
            __WEBPACK_IMPORTED_MODULE_21__modal_conditionSave_modal_component__["a" /* ConditionSaveModalComponent */],
            __WEBPACK_IMPORTED_MODULE_22__modal_conditionDelete_modal_component__["a" /* ConditionDeleteModalComponent */],
            __WEBPACK_IMPORTED_MODULE_23__modal_projectSearch_modal_component__["a" /* ProjectSearchModalComponent */],
            __WEBPACK_IMPORTED_MODULE_24__modal_customerSearch_modal_component__["a" /* CustomerSearchModalComponent */],
            __WEBPACK_IMPORTED_MODULE_25__modal_equipmentSearch_modal_component__["a" /* EquipmentSearchModalComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pipe_order_by_pipe__["b" /* OrderByPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* MY_ROUTES */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["c" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["d" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["e" /* PopoverModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_26__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_27__windowRef_service__["a" /* WindowRefService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MY_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_component__ = __webpack_require__("../../../../../src/app/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_top_component__ = __webpack_require__("../../../../../src/app/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mr2_mr2_component__ = __webpack_require__("../../../../../src/app/mr2/mr2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");








var myRoutes = [
    { path: 'detail/:incidentId', component: __WEBPACK_IMPORTED_MODULE_4__detail_detail_component__["a" /* DetailComponent */], data: { category: 'detail' } },
    { path: 'edit/:incidentId', component: __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__["a" /* EditComponent */], data: { category: 'edit' } },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__["a" /* EditComponent */], data: { category: 'edit' } },
    { path: 'list/k/:keyword', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */], data: { category: 'list' } },
    { path: 'list/c/:condId', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */], data: { category: 'list' } },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */], data: { category: 'list' } },
    { path: 'top', component: __WEBPACK_IMPORTED_MODULE_2__top_top_component__["a" /* TopComponent */], data: { category: 'top' } },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_7__project_project_component__["a" /* ProjectComponent */], data: { category: 'project' } },
    { path: 'mr2/:mkbId', component: __WEBPACK_IMPORTED_MODULE_6__mr2_mr2_component__["a" /* Mr2Component */], data: { category: 'mr2' } },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__top_top_component__["a" /* TopComponent */], data: { category: 'top' } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__error_component__["a" /* ErrorComponent */] },
];
var MY_ROUTES = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(myRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* 小さいボタン　オリジナルクラス */\r\n.btn-sx-ori {\r\n    padding: 0px 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデント閲覧画面\n//\tHTMLID　　　　 ：IncidentDetailView.php\n//\t作成日付・作成者：2017.10.05 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<my-header></my-header>\n<relateUserAdd-modal #relateUser></relateUserAdd-modal>\n\n<div ng-cloak>\n  <div class=\"container-fluid\">\n    <div class=\"text-right transition-button\">\n      <span>\n        <button type=\"button\" class=\"btn btn-warning\">事故／クレーム連絡登録</button>\n      </span>\n      <span>\n        <button type=\"button\" class=\"btn btn-warning\">費用決済申請登録</button>\n      </span>\n      <span>\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/edit/{{incidentId}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          編集\n        </button>\n      </span>\n      <span>\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/list\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          一覧へ戻る\n        </button>\n      </span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n        <div class=\"panel panel-danger\">\n          <div class=\"panel-heading clearfix\">\n            <span class=\"h3 incident-title-status\">{{incidentNo}}</span>\n            <span class=\"h4 incident-title-status\">　{{incidentStatusNm}} {{incidentTypeNm}}</span>\n            <div class=\"pull-right\">\n              <strong>登録日：{{insDate}} {{insUserNm}}　最終更新日：{{updDate}} {{updUserNm}}</strong>\n            </div>\n          </div>\n          <!-- /.panel-heading -->\n          <div class=\"panel-body context-margin\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>親インシデント番号：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{parentIncidentNo}}</div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>発生日時：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{incidentStartDateTime}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>業種区分：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{industryTypeNm}}</div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>情報提供元：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{infoSourceNm}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>情報提供者：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{infoProvider}}</div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>情報提供TEL：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{infoProvidedTel}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>添付ファイル：</strong>\n              </div>\n              <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                {{incidentFileNm}}\n              </div>\n            </div>\n            <!-- <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>関係者：</strong>\n              </div>\n              <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                <span *ngFor=\"let relateUser of relateList; last as last;\">\n                  {{relateUser.name}}\n                  <span>{{ !last ? ',' : '' }}</span>\n                </span>\n              </div>\n            </div> -->\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>注記：</strong>\n              </div>\n              <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                <!-- TODO:改行コード反映 -->\n                {{memo}}\n              </div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>設備情報及び顧客情報</strong>\n            </h5>\n            <div class=\"setubi-and-cust-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機場：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{kijoNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>事業主体：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{jigyosyutaiNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>設備：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{setubiNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>都道府県：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{prefNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>納入プロジェクト：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{deliveryPjNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客分類：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custTypeNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>会社名・所属部署：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custDept}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>依頼者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{requester}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>連絡先(TEL)：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{contactTel}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>連絡先(FAX)：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{contactFax}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>連絡先(E-mail)：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{contactMail}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>営業部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{salesDeptNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>営業担当者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{salesUserNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>主管部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{skanDeptNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>主管担当者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{skanUserNm}}</div>\n              </div>\n\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>受付情報</strong>\n            </h5>\n            <div class=\"call-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付日：</strong>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{callDate}}</div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-6\">\n                  <!-- <strong>開始：</strong>&nbsp;&nbsp;{{callStartDate | date: 'shortTime'}}&nbsp;&nbsp;&nbsp;&nbsp; -->\n                  <strong>開始：</strong>&nbsp;&nbsp;10:00&nbsp;&nbsp;&nbsp;&nbsp;\n                  <!-- <strong>終了：</strong>&nbsp;&nbsp;{{callEndDate | date: 'shortTime'}}</div> -->\n                  <strong>終了：</strong>&nbsp;&nbsp;10:30</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付部署：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callDeptNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付者：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callUserNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>\n                    <strong>TEL：</strong>\n                  </strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callTel}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>E-mail：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callMail}}</div>\n              </div>\n              <div class=\"info-detail-area\">{{callContent}}</div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>対応情報</strong>\n            </h5>\n            <div class=\"taio-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>対応日：</strong>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{taioDate}}</div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-6\">\n                  <!-- <strong>開始：</strong>&nbsp;&nbsp;{{taioStartDate | date: 'shortTime'}} -->\n                  <strong>開始：</strong>&nbsp;&nbsp;10:00\n                  <!-- <strong>&nbsp;&nbsp;&nbsp;&nbsp;終了：</strong>&nbsp;&nbsp;{{taioEndDate | date: 'shortTime'}}</div> -->\n                  <strong>&nbsp;&nbsp;&nbsp;&nbsp;終了：</strong>&nbsp;&nbsp;10:30</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>対応部署：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioDeptNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>対応者：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioUserNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>TEL：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioTel}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>E-mail：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioMail}}</div>\n              </div>\n              <div class=\"info-detail-area\">{{taioContent}}</div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>処置情報</strong>\n            </h5>\n            <div class=\"action-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置予定日：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actDate}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置区分：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actTypeNm}} </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置開始日時：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actStartDateTime}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置終了日時：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actEndDateTime}} </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置部署：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actDeptNm}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置者：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actUserNm}} </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>TEL：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actTel}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>E-mail：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actMail}} </div>\n              </div>\n              <div class=\"info-detail-area\">{{actContent}} </div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>製品情報</strong>\n            </h5>\n            <div class=\"product-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機種区分：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTypeNm}}</div>\n              </div>\n              <h5 class=\"context-sub-header\">\n                <strong>障害状況</strong>\n              </h5>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　トリガー：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>頻度：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productHindoNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　現象：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productGensyoNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>状態：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productStatusNm}}</div>\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関係者</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>\n                <i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i> 変更を通知する／\n                <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i> 変更を通知しない\n              </strong>\n              <a class=\"relate-user-add-link\" (click)=\"relateUser.openModal()\">\n                <u>関係者を追加</u>\n              </a>\n            </h5>\n            <div class=\"context-margin\">\n              <div>サービスソリューション事業本部 ＣＥ事業部 東京サービス部 第一グループ</div>\n              <div>\n                <span class=\"context-margin relate-user-nm\"> 水道　一郎 （既読日：2017/12/18）</span>\n                <button type=\"button\" class=\"btn btn-sx-ori btn-danger btn-close\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </div>\n              <div>\n                <span class=\"context-margin relate-user-nm\"> 水道　二郎 　　　　　　　　　　　</span>\n                <button type=\"button\" class=\"btn btn-sx-ori btn-danger btn-close\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </div>\n              <div>品質保証統括室 　品質管理グループ</div>\n              <div>\n                <span class=\"context-margin relate-user-nm\"> 水道　花子 （既読日：2017/12/19）</span>\n                <button type=\"button\" class=\"btn btn-sx-ori btn-danger btn-close\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関連リンク</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>プロジェクト情報\n                <span class=\"text-danger\">※プロジェクト情報はＡＲＣＳから行なってください。（ＡＲＣＳ登録後の翌日反映）</span>\n              </strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>プロジェクト番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showPj()\">\n                    <u>J1000000</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>PJ主管部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">プロ主管</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>プロジェクト名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>PM：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>代表機場：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>都道府県：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">東京都</div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>障害対応報告書(MR2)</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>件名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showMr2()\">\n                    <u>XXXXXXXXXXシーケンサ異常</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>作成日：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/1/4</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>依頼元：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">依頼元</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>作業担当者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>労災・事故・クレーム連絡</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>状態：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">第1報 正式発行</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>区分：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">品質（ランクＡ）</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>概要：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showJiko()\">\n                    <u>XXXXXXXXXXXXXXXXXXXXXX</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機場名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>発行日：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/1/1</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>発行元：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>費用決済申請</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>ID番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showHiyo('dsp','dsp',416161,'','1282')\">\n                    <u>XXXXXXXXXX</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>ステータス：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">決裁</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>区分：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">クレーム対応</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>決裁番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">無償 第X号</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>件名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">XXXXXXXXXXXXXXXXXXXXXX</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>概算金額：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <div class=\"pull-right\">123,456</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関連インシデント</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>同一機場インシデント</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <a (click)=\"showRelateIncident()\">\n                <u>#12390 障害 2016/12/31 ○○○浄水場 ○○○市</u>\n              </a>\n              <div class=\"context-margin\">\n                Ａ系水処理設備の終沈（１、２号）の監視操作不能なので対応頂きたい。\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>同一顧客インシデント</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <a (click)=\"showRelateIncident()\">\n                <u>#12312 問合せ 2016/12/31 ○○○センター ○○○企業局</u>\n              </a>\n              <div class=\"context-margin\">\n                富士電機製変圧器のＰＣＢ含有問合せ。以下の型式の変圧器にＰＣＢが含まれているかを教えて下さい。\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼変更履歴</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>更新者：川本　健(2017/1/2)</strong>\n            </h5>\n            <ul>\n              <li>\n                <strong>ステータス</strong> 対応中 から 完了 に変更</li>\n              <li>\n                <strong>営業部門</strong> ○○部門 に設定</li>\n              <li>\n                <strong>対応内容</strong> 更新</li>\n            </ul>\n            <h5 class=\"context-header\">\n              <strong>更新者：吉原　聡(2017/1/2)</strong>\n            </h5>\n            <ul>\n              <li>\n                <strong>ステータス</strong> 対応中 に設定</li>\n              <li>\n                <strong>対応内容</strong> 更新</li>\n            </ul>\n            <h5 class=\"context-header\">\n              <strong>更新者：川本　健(2017/1/1)</strong>\n            </h5>\n            <ul>\n              <li>\n                <strong>ステータス</strong> 受付済 に設定</li>\n              <li>\n                <strong>対応内容</strong> 更新</li>\n            </ul>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_local__ = __webpack_require__("../../../../../src/environments/environment.local.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailComponent = (function () {
    function DetailComponent(route, jsonpService) {
        this.route = route;
        this.jsonpService = jsonpService;
        this.SUB_WIN = null;
        this.incidentNo = ""; // インシデント番号
        this.incidentStatusCd = ""; // インシデントステータスCD
        this.incidentStatusNm = ""; // インシデントステータス名
        this.incidentTypeCd = ""; // インシデント分類CD
        this.incidentTypeNm = ""; // インシデント分類名
        this.insDate = ""; // 登録日
        this.insUserNm = ""; // 登録者
        this.updDate = ""; // 更新日
        this.updUserNm = ""; // 更新者
        // １－２．メイン情報
        this.parentIncidentNo = ""; // 親インシデント番号
        this.incidentStartDateTime = ""; // 発生日時
        this.industryTypeNm = ""; // 業種区分名
        this.infoSourceCd = ""; // 情報提供元CD
        this.infoSourceNm = ""; // 情報提供元名
        this.infoProvider = ""; // 情報提供者
        this.infoProvidedTel = ""; //情報提供TEL  
        this.relateList = []; // 関係者
        this.memo = ""; //注記  
        this.kijoNm = ""; //機場名
        this.jigyosyutaiNm = ""; //事業主体名
        this.setubiNm = ""; //設備名
        this.prefNm = ""; //都道府県名
        this.custNm = ""; //顧客名
        this.custTypeNm = ""; //顧客分類名
        this.salesDeptCd = ""; //営業部門CD
        this.salesDeptNm = ""; //営業部門名
        this.salesUserId = ""; //営業担当者ID
        this.salesUserNm = ""; //営業担当者名
        this.deliveryPjNm = ""; //納入プロジェクト
        this.custDept = ""; //会社名・所属部署
        this.requester = ""; //依頼者
        this.contactTel = ""; //連絡先(TEL)
        this.contactFax = ""; //連絡先(FAX)
        this.contactMail = ""; //連絡先(E-mail)  
        this.skanDeptCd = ""; //主管部門CD
        this.skanDeptNm = ""; //主管部門名
        this.skanUserId = ""; //主管担当者ID
        this.skanUserNm = ""; //主管担当者名
        // １－３．受付情報
        this.callDate = ""; //受付日
        this.callStartDate = ""; //受付開始時刻
        this.callEndDate = ""; //受付終了時刻
        this.callDeptCd = ""; //受付部署CD
        this.callDeptNm = ""; //受付部署名
        this.callUserId = ""; //受付者ID
        this.callUserNm = ""; //受付者名
        this.callTel = ""; //受付電話番号
        this.callMail = ""; //受付メール
        this.callContent = ""; //受付内容
        // １－４．対応情報
        this.taioDate = ""; //対応日
        this.taioStartDate = ""; //対応開始時刻
        this.taioEndDate = ""; //対応終了時刻
        this.taioDeptCd = ""; //対応部署CD
        this.taioDeptNm = ""; //対応部署名
        this.taioUserId = ""; //対応者ID
        this.taioUserNm = ""; //対応者名  
        this.taioTel = ""; //対応電話番号
        this.taioMail = ""; //対応メール
        this.taioContent = ""; //対応内容
        // １－５．処置情報
        this.actDate = ""; //処置予定日
        this.actTypeNm = ""; //処置区分名
        this.actStartDateTime = ""; //処置開始日時
        this.actEndDateTime = ""; //処置終了日時
        this.actDeptCd = ""; //処置部署CD
        this.actDeptNm = ""; //処置部署名
        this.actUserId = ""; //処置者ID
        this.actUserNm = ""; //処置者名
        this.actTel = ""; //処置電話番号
        this.actMail = ""; //処置メール
        this.actContent = ""; //処置内容
        // １－６．製品情報
        this.productTypeCd = ""; //機種区分CD
        this.productTypeNm = ""; //機種区分名
        this.productTriggerCd = ""; //障害状況トリガーCD
        this.productTriggerNm = ""; //障害状況トリガー名
        this.productHindoCd = ""; //障害状況頻度CD
        this.productHindoNm = ""; //障害状況頻度名
        this.productGensyoCd = ""; //障害状況現象CD
        this.productGensyoNm = ""; //障害状況現象名
        this.productStatusCd = ""; //障害状況状態CD
        this.productStatusNm = ""; //障害状況状態名
        /**
         * 以下、削除予定の固定値
         *
         */
        // ２．関連リンク
        // ２ー１．プロジェクト情報
        this.PJNo = ""; // プロジェクト番号
        this.PJRespDept = ""; // PJ主管部門
        this.PJName = ""; // プロジェクト名
        this.PJManager = ""; // PM
        this.PJKijo = ""; // 代表機場
        this.PJPref = ""; // 都道府県
        // ２ー２．障害対応報告(MR2)
        this.MR2Title = ""; // 件名
        this.MR2MakeDate = ""; // 作成日
        this.MR2Iraimoto = ""; // 依頼元
        this.MR2WorkRep = ""; // 作業担当者
        // ２ー３．労災・事故・クレーム連絡
        this.rjcStatus = ""; // 状態
        this.rjcType = ""; // 区分
        this.rjcOverView = ""; // 概要
        this.rjcCustName = ""; // 顧客名
        this.rjcKijoName = ""; // 機場名
        this.rjcHakkoDate = ""; // 発行日
        this.rjcHakkomoto = ""; // 発行元
        // ２－４．費用決済申請
        this.hiyoHakkomoto = ""; // 発行元
        this.hiyoStatus = ""; // ステータス
        this.hiyoType = ""; // 区分
        this.hiyoNo = ""; // 決裁番号
        this.hiyoTitle = ""; // 件名
        this.hiyoAmount = ""; // 概算金額
        // ３．関連インシデント
        // ３－１．同一機場インシデント
        this.sameKijoIncidents = ""; // 配列で保持
        // ３－２．同一顧客インシデント
        this.sameCustIncidents = ""; // 配列で保持
        // ４．変更履歴
        this.chanegeRev = ""; // 配列で保持
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var prmIncientId = this.route.snapshot.paramMap.get('incidentId');
        if (prmIncientId) {
            ps.set('incidentId', prmIncientId);
        }
        // 画面表示パラメータの取得処理
        this.jsonpService.requestGet('IncidentDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(one);
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    //新しいウィンドウを開く(パターン1)
    // CMN_openNewWindow1(url,name,sizex,sizey,top,left){
    DetailComponent.prototype.CMN_openNewWindow1 = function (url, name, sizex, sizey) {
        var style = "toolbar=0,location=0,directories=0,status=yes,menubar=0,scrollbars=1,resizable=1," +
            "width=" + sizex + ",height=" + sizey;
        // if( top ){
        // 	style += ",top="+top;
        // }  
        // if( left ){
        // 	style += ",left="+left;
        // }
        var win = window.open(url, name, style);
        if (win) {
            win.focus();
            return win;
        }
    };
    // 関連MR2表示処理
    DetailComponent.prototype.showMr2 = function () {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        this.SUB_WIN = this.CMN_openNewWindow1("./#/mr2/0", "sub_mr2", 1000, 760);
    };
    // 関連プロジェクト表示処理
    DetailComponent.prototype.showPj = function () {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        this.SUB_WIN = this.CMN_openNewWindow1("./#/project", "sub_project", 1000, 760);
    };
    // 関連事故クレーム情報表示処理
    DetailComponent.prototype.showJiko = function () {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment_local__["a" /* environment */].jikoPath + "jiko171211.html"; // 環境に合わせたURLを作成する TODO:固定値
        this.SUB_WIN = this.CMN_openNewWindow1(url, "sub_jiko", 1200, 800);
    };
    // 関連費用決済申請表示処理 TODO:固定値表示
    DetailComponent.prototype.showHiyo = function (status, division, idno, bno, system_id, gougi_answer) {
        if (system_id == "") {
            system_id = "1282";
        }
        // var frm = window.document.fm1;
        var strurl;
        strurl = __WEBPACK_IMPORTED_MODULE_4__environments_environment_local__["a" /* environment */].hiyoPath + "wf_main_input.php";
        strurl += "?user_id=ADF";
        strurl += "&authority=9";
        //	strurl += "&system_id=1282";
        strurl += "&system_id=" + system_id;
        strurl += "&status=" + status;
        strurl += "&division=" + division;
        strurl += "&idno=" + idno;
        strurl += "&win_kbn=1";
        if (gougi_answer)
            strurl += "&gougi_answer_mode=Y";
        strurl += '&unit_flg=';
        strurl += '&main_system_id=';
        strurl += '&main_idno=';
        strurl += '&param1=';
        strurl += '&param2=';
        strurl += '&param3=';
        //	URLにBNOが含まれているかどうか？
        if (bno != "") {
            strurl = strurl.replace("BNO=&", "BNO=" + bno + "&");
        }
        this.SUB_WIN = this.CMN_openNewWindow1(strurl, "WF_EDIT", 1200, 800);
        return;
    };
    // 関連インシデント表示処理
    DetailComponent.prototype.showRelateIncident = function () {
    };
    // TODO:サブウインドウから値を取得する時に使うかも
    DetailComponent.prototype.onSelectOs = function (idx) {
        // let frm = window.document.frmList;
        var win = window.parent;
        console.log(win);
        // if (frm.ary_os_code.length) {
        // win.code = frm.ary_code[idx - 1].value;
        // win.oscode = frm.ary_os_code[idx - 1].value;
        // win.inqcode = frm.ary_inq_code[idx - 1].value;
        // win.osendcustomer = frm.ary_os_endcustomer[idx - 1].value;
        // win.ossoukatuhin = frm.ary_os_soukatuhin[idx - 1].value;
        // win.jcode = frm.ary_jcode[idx - 1].value;
        // win.seihinkeiretu = frm.ary_seihin_keiretu[idx - 1].value;
        // win.seihinkeiretu_cd = frm.ary_seihin_keiretu_cd[idx - 1].value;
        // win.oskeiyaku = frm.ary_os_keiyaku[idx - 1].value;
        // } else {
        // win.code = frm.ary_code.value;
        // win.oscode = frm.ary_os_code.value;
        // win.inqcode = frm.ary_inq_code.value;
        // win.osendcustomer = frm.ary_os_endcustomer.value;
        // win.ossoukatuhin = frm.ary_os_soukatuhin.value;
        // win.jcode = frm.ary_jcode.value;
        // win.seihinkeiretu = frm.ary_seihin_keiretu.value;
        // win.seihinkeiretu_cd = frm.ary_seihin_keiretu_cd.value;
        // win.oskeiyaku = frm.ary_os_keiyaku.value;
        // }
        // if (ExistsOpener(win)) {
        //   if (IsFunction(win.opener.onSubWinOK)) {
        //     win.opener.onSubWinOK(window.top); win.top.close();
        //   }
        // }
    };
    // 画面表示パラメータのセット処理
    DetailComponent.prototype.setDspParam = function (data) {
        this.incidentId = data.incidentId; // インシデントID
        this.incidentNo = data.incidentNo; // インシデント番号
        this.incidentStatusCd = data.incidentStatusCd; // インシデントステータスCD
        this.incidentStatusNm = data.incidentStatusNm; // インシデントステータス名
        this.incidentTypeCd = data.incidentTypeCd; // インシデント分類CD
        this.incidentTypeNm = data.incidentTypeNm; // インシデント分類名
        this.insDate = data.insDate; // 登録日
        this.insUserNm = data.insUserNm; // 登録者
        this.updDate = data.updDate; // 更新日
        this.updUserNm = data.updUserNm; // 更新者
        // １－２．メイン情報    
        this.parentIncidentNo = data.parentIncidentNo; // 親インシデント番号
        this.incidentStartDateTime = data.incidentStartDateTime; // 発生日時
        this.industryTypeNm = data.industryTypeNm; // 業種区分名
        this.infoSourceCd = data.infoSourceCd; // 情報提供元CD
        this.infoSourceNm = data.infoSourceNm; // 情報提供元名
        this.infoProvider = data.infoProvider; // 情報提供者
        this.infoProvidedTel = data.infoProvidedTel; //情報提供TEL
        this.relateList = data.relateList; //関係者
        this.memo = data.memo; //注記    
        this.kijoNm = data.kijoNm; //機場名
        this.jigyosyutaiNm = data.jigyosyutaiNm; //事業主体名
        this.setubiNm = data.setubiNm; //設備名
        this.prefNm = data.prefNm; //都道府県名
        this.custNm = data.custNm; //顧客名
        this.custTypeNm = data.custTypeNm; //顧客分類名
        this.salesDeptCd = data.salesDeptCd; //営業部門CD
        this.salesDeptNm = data.salesDeptNm; //営業部門名
        this.salesUserId = data.salesUserId; //営業担当者ID
        this.salesUserNm = data.salesUserNm; //営業担当者名
        this.deliveryPjNm = data.deliveryPjNm; //納入プロジェクト
        this.custDept = data.custDept; //会社名・所属部署
        this.requester = data.requester; //依頼者
        this.contactTel = data.contactTel; //連絡先(TEL)
        this.contactFax = data.contactFax; //連絡先(FAX)
        this.contactMail = data.contactMail; //連絡先(E-mail)
        this.skanDeptCd = data.skanDeptCd; //主管部門CD
        this.skanDeptNm = data.skanDeptNm; //主管部門名
        this.skanUserId = data.skanUserId; //主管担当者CD
        this.skanUserNm = data.skanUserNm; //主管担当者名
        // １－３．受付情報
        this.callDate = data.callDate; //受付日
        this.callStartDate = data.callStartDate; //受付開始時刻
        this.callEndDate = data.callEndDate; //受付終了時刻
        this.callDeptCd = data.callDeptCd; //受付部署CD
        this.callDeptNm = data.callDeptNm; //受付部署名
        this.callUserId = data.callUserId; //受付者ID
        this.callUserNm = data.callUserNm; //受付者名
        this.callTel = data.callTel; //受付電話番号
        this.callMail = data.callMail; //受付メール
        this.callContent = data.callContent; //受付内容
        // １－４．対応情報
        this.taioDate = data.taioDate; //対応日
        this.taioStartDate = data.taioStartDate; //対応開始時刻
        this.taioEndDate = data.taioEndDate; //対応終了時刻
        this.taioDeptCd = data.taioDeptCd; //対応部署CD
        this.taioDeptNm = data.taioDeptNm; //対応部署名
        this.taioUserId = data.taioUserId; //対応者ID
        this.taioUserNm = data.taioUserNm; //対応者名    
        this.taioTel = data.taioTel; //対応電話番号
        this.taioMail = data.taioMail; //対応メール
        this.taioContent = data.taioContent; //対応内容
        // １－５．処置情報
        this.actDate = data.actDate; //処置予定日
        this.actTypeNm = data.actTypeNm; //処置区分名
        this.actStartDateTime = data.actStartDateTime; //処置開始日時
        this.actEndDateTime = data.actEndDateTime; //処置終了日時
        this.actDeptCd = data.actDeptCd; //処置部署CD
        this.actDeptNm = data.actDeptNm; //処置部署名
        this.actUserId = data.actUserId; //処置者ID
        this.actUserNm = data.actUserNm; //処置者名
        this.actTel = data.actTel; //処置電話番号
        this.actMail = data.actMail; //処置メール
        this.actContent = data.actContent; //処置内容
        // １－６．製品情報
        this.productTypeCd = data.productTypeCd; //機種区分CD
        this.productTypeNm = data.productTypeNm; //機種区分名
        this.productTriggerCd = data.productTriggerCd; //障害状況トリガーCD
        this.productTriggerNm = data.productTriggerNm; //障害状況トリガー名
        this.productHindoCd = data.productHindoCd; //障害状況頻度CD
        this.productHindoNm = data.productHindoNm; //障害状況頻度名
        this.productGensyoCd = data.productGensyoCd; //障害状況現象CD
        this.productGensyoNm = data.productGensyoNm; //障害状況現象名
        this.productStatusCd = data.productStatusCd; //障害状況状態CD
        this.productStatusNm = data.productStatusNm; //障害状況状態名
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/detail/detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/detail/detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]) === "function" && _b || Object])
], DetailComponent);

var _a, _b;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* fileのinput要素を含む1行  */\r\n.file-row {\r\n    margin-top: 2px;\r\n    margin-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデント登録画面\n//\tHTML_ID　　　　 ：IncidentEditView.php\n//\t作成日付・作成者：2017.10.05 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<my-header></my-header>\n<common-modal #common (commonEnter)=\"onEntry($event, iFile.files)\"></common-modal>\n<incidentSearch-modal #incident (incidentSearchSelect)=\"onIncidentSearchSelected($event)\"></incidentSearch-modal>\n<kijoSearch-modal #kijo></kijoSearch-modal>\n<userSearch-modal #salesUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<userSearch-modal #skanUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<userSearch-modal #callUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<userSearch-modal #taioUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<userSearch-modal #actUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<sectionSearch-modal #salesSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<sectionSearch-modal #skanSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<sectionSearch-modal #callSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<sectionSearch-modal #taioSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<sectionSearch-modal #actSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<projectSearch-modal #project (projectSearchSelect)=\"onProjectSearchSelected($event)\"></projectSearch-modal>\n<customerSearch-modal #customer></customerSearch-modal>\n<equipmentSearch-modal #equipment></equipmentSearch-modal>\n\n<div id=\"editApp\">\n  <div ng-controller=\"EditController as main\" class=\"container-fluid\">\n    <!--\n                <button onclick=\"onHrefLink('./IncidentEdit.php')\">load</button>\n                <button ng-click=\"onHrefLink('./IncidentEdit.php')\">load angular</button>\n                <button ng-click=\"main.test()\">load angular</button>\n                -->\n    <div class=\"text-right transition-button\">\n      <span>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"common.openModal('確認','編集内容を登録します。宜しいですか？','OK','キャンセル')\">登録</button>\n      </span>\n      <span>\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/detail\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          閲覧へ戻る\n        </button>\n      </span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"panel panel-danger\">\n          <div class=\"panel-heading clearfix\">\n            <span class=\"h3 incident-title-status\">{{incidentNo}}</span>\n            <span class=\"h4 incident-title-status\">　{{incidentStatusNm}}</span>\n            <div class=\"pull-right\">\n              <strong>登録日：{{insDate}} {{insUserNm}}　最終更新日：{{updDate}} {{updUserNm}}</strong>\n            </div>\n          </div>\n          <!-- /.panel-heading -->\n          <div class=\"panel-body context-margin\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>インシデント分類：\n                      <span class=\"require\">＊</span>\n                    </strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <select name=\"sel_incidentType\" class=\"form-control edit-dropdown\" [(ngModel)]=\"incidentTypeCd\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of incidentTypeArray\" [value]='item.value'>\n                      {{item.label}}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>親インシデント番号：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <div class=\"input-group\">\n                    <input name=\"txt_parentIncidentNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"parentIncidentNo\">\n                    <input name=\"hid_parentIncidentId\" type=\"hidden\" [(ngModel)]=\"parentIncidentId\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-input-support\" (click)=\"incident.openModal()\">\n                        <i class=\"fa fa-search\"></i>\n                      </button>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>発生日時：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                  <div class=\"input-group\">\n                    <input name=\"txt_incidentStartDate\" type=\"text\" class=\"form-control\" #dpIncidentStartDate=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                      [(bsValue)]=\"incidentStartDate\" value=\"{{incidentStartDate | date:'yyyy/MM/dd'}}\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpIncidentStartDate.toggle()\">\n                        <i class=\"fa fa-calendar\"></i>\n                      </button>\n                    </span>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                  <div class=\"input-group\">\n                    <select name=\"sel_incidentStartTime\" class=\"search-dropdown\" [(ngModel)]=\"incidentStartTime\">\n                      <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                    </select>\n                    :\n                    <select name=\"sel_incidentStartMinite\" class=\"search-dropdown\" [(ngModel)]=\"incidentStartMinite\">\n                      <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>業種区分：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <select name=\"sel_industryTypeCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"industryTypeCd\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of industryTypeArray\" [value]='item.value'>\n                      {{item.label}}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>情報提供元：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <select name=\"sel_infoSourceCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"infoSourceCd\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of infoSourceArray\" [value]='item.value'>\n                      {{item.label}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>情報提供者：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <input name=\"txt_infoProvider\" type=\"text\" class=\"form-control\" [(ngModel)]=\"infoProvider\">\n                </div>\n                <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>情報提供TEL：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <input name=\"infoProvidedTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"infoProvidedTel\">\n                </div>\n              </div>\n              <div class=\"row file-row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>添付ファイル：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <input #iFile name=\"incidentFile\" type=\"file\" [(ngModel)]=\"incidentFile\">\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>関係者：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-input-support\">\n                        <i class=\"fa fa-user\"></i>\n                      </button>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-offset-2 col-md-offset-3 col-sm-offset-3 col-xs-offset-3 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  &nbsp;&nbsp;\n                  <a>\n                    <u>関係者を追加</u>\n                  </a>\n                </div>\n              </div> -->\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label for=\"InputTextarea\">\n                    <strong>注記：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-10 col-md-9 col-sm-9 col-xs-9\">\n                  <textarea name=\"memo\" class=\"form-control\" id=\"InputTextarea\" rows=\"3\" [(ngModel)]=\"memo\"></textarea>\n                </div>\n              </div>\n              <h5 class=\"context-header\">\n                <strong>設備情報及び顧客情報</strong>\n              </h5>\n              <div class=\"setubi-and-cust-info-border\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>機場：\n                        <span class=\"require\">＊</span>\n                      </strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-9 col-sm-9 col-xs-9\">\n                    <div class=\"input-group\">\n                      <input #txt_kijoNm=\"ngModel\" name=\"txt_kijoNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"kijoNm\" required>\n                      <input name=\"hid_kijoId\" type=\"hidden\" [(ngModel)]=\"kijoId\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"kijo.openModal()\">\n                          <i class=\"fa fa-industry\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <span class=\"text-danger\" *ngIf=\"txt_kijoNm.errors?.required&& txt_kijoNm.dirty\">\n                      機場は必須入力です。\n                    </span>\n                  </div>\n                </div>\n                <!-- <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>事業主体：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"jigyosyutaiNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"jigyosyutaiNm\">\n                      <input name=\"hid_jigyosyutaiId\" type=\"hidden\" [(ngModel)]=\"jigyosyutaiId\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div> -->\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>事業主体：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"jigyosyutaiNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"jigyosyutaiNm\" readonly>\n                    <input name=\"hid_jigyosyutaiId\" type=\"hidden\" [(ngModel)]=\"jigyosyutaiId\">\n                  </div>\n                  <div class=\"col-lg-7 col-md-6 col-sm-6 col-xs-6\">\n                    <button type=\"button\" (click)=\"jigyosyutaiClear()\" class=\"btn btn-xs btn-warning\">クリア</button>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>設備：\n                        <span class=\"require\">＊</span>\n                      </strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-9 col-sm-9 col-xs-9\">\n                    <div class=\"input-group\">\n                      <input name=\"setubiNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"setubiNm\">\n                      <input name=\"hid_setubiId\" type=\"hidden\" [(ngModel)]=\"setubiId\">\n                      <span class=\"input-group-btn\">\n                        <!-- <button type=\"button\" class=\"btn btn-input-support\"> -->\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"equipment.openModal()\">\n                          <i class=\"fa fa-cog\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>都道府県：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_prefId\" class=\"form-control edit-dropdown\" [(ngModel)]=\"prefId\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of prefArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>納入プロジェクト：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"deliveryPjNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"deliveryPjNm\">\n                      <input name=\"hid_deliveryPjId\" type=\"hidden\" [(ngModel)]=\"deliveryPjId\">\n                      <span class=\"input-group-btn\">\n                        <!-- <button type=\"button\" class=\"btn btn-input-support\"> -->\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"project.openModal()\">\n                          <i class=\"fa fa-wrench\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>顧客：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"custNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"custNm\">\n                      <input name=\"hid_cudtId\" type=\"hidden\" [(ngModel)]=\"custId\">\n                      <span class=\"input-group-btn\">\n                        <!-- <button type=\"button\" class=\"btn btn-input-support\"> -->\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"customer.openModal()\">\n                          <i class=\"fa fa-address-card-o\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>顧客分類：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_custTypeCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"custTypeCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of custTypeArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>会社名・所属部署：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"custDept\" type=\"text\" class=\"form-control\" [(ngModel)]=\"custDept\">\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>依頼者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"requester\" type=\"text\" class=\"form-control\" [(ngModel)]=\"requester\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>連絡先(TEL)：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"contactTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactTel\">\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>連絡先(FAX)：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"contactFax\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactFax\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>連絡先(E-mail)：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"contactMail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactMail\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>営業部門：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_salesDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"salesDeptNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"salesSection.openModal('salesSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <input name=\"hid_salesDeptCd\" type=\"hidden\" [(ngModel)]=\"salesDeptCd\">\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>営業担当者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_salesUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"salesUserNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"salesUser.openModal('salesUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <input name=\"hid_salesUserId\" type=\"hidden\" [(ngModel)]=\"salesUserId\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>主管部門：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_skanDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"skanDeptNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"skanSection.openModal('skanSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <input name=\"hid_skanDeptCd\" type=\"hidden\" [(ngModel)]=\"skanDeptCd\">\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>主管担当者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_skanUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"skanUserNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"skanUser.openModal('skanUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <input name=\"hid_skanUserId\" type=\"hidden\" [(ngModel)]=\"skanUserId\">\n                  </div>\n                </div>\n              </div>\n              <h5 class=\"context-header\">\n                <strong>受付情報</strong>\n              </h5>\n              <div class=\"call-info-border\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付日：\n                        <span class=\"require\">＊</span>\n                      </strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_callDate\" type=\"text\" class=\"form-control\" #dpCallDate=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                        [(bsValue)]=\"callDate\" value=\"{{callDate | date:'yyyy/MM/dd'}}\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallDate.toggle()\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付開始時刻：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_callStartTime\" class=\"search-dropdown\" [(ngModel)]=\"callStartTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_callStartMinite\" class=\"search-dropdown\" [(ngModel)]=\"callStartMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-offset-7 col-md-offset-7 col-sm-offset-6 col-xs-offset-6 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付終了時刻：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_callEndTime\" class=\"search-dropdown\" [(ngModel)]=\"callEndTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_callEndMinite\" class=\"search-dropdown\" [(ngModel)]=\"callEndMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付部署：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"callDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callDeptNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"callSection.openModal('callSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"callUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callUserNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"callUser.openModal('callUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>TEL：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"callTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callTel\">\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>E-mail：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"callMail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callMail\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label for=\"InputTextarea\">\n                      <strong>受付内容：\n                        <span class=\"require\">＊</span>\n                      </strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-10 col-sm-9 col-xs-9\">\n                    <textarea name=\"callContent\" class=\"form-control\" id=\"InputTextarea\" rows=\"4\" [(ngModel)]=\"callContent\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <h5 class=\"context-header\">\n                <strong>対応情報</strong>\n              </h5>\n              <div class=\"taio-info-border\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応日：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_taioDate\" type=\"text\" class=\"form-control\" #dpTaioDate=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                        [(bsValue)]=\"taioDate\" value=\"{{taioDate | date:'yyyy/MM/dd'}}\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpTaioDate.toggle();\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応開始時刻：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_taioStartTime\" class=\"search-dropdown\" [(ngModel)]=\"taioStartTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_taioStartMinite\" class=\"search-dropdown\" [(ngModel)]=\"taioStartMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-offset-7 col-md-offset-7 col-sm-offset-6 col-xs-offset-6 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応終了時刻：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_taioEndTime\" class=\"search-dropdown\" [(ngModel)]=\"taioEndTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_taioEndMinite\" class=\"search-dropdown\" [(ngModel)]=\"taioEndMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応部署：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"taioDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"taioDeptNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"taioSection.openModal('taioSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"taioUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"taioUserNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"taioUser.openModal('taioUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>TEL：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"taioTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"taioTel\">\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>E-mail：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"taioMail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"taioMail\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label for=\"InputTextarea\">\n                      <strong>対応内容：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-10 col-sm-9 col-xs-9\">\n                    <textarea name=\"taioContent\" class=\"form-control\" id=\"InputTextarea\" rows=\"4\" [(ngModel)]=\"taioContent\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <h5 class=\"context-header\">\n                <strong>処置情報</strong>\n              </h5>\n              <div class=\"action-info-border\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置予定日：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_actDate\" type=\"text\" class=\"form-control\" #dpActDate=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\" [(bsValue)]=\"actDate\"\n                        value=\"{{actDate | date:'yyyy/MM/dd'}}\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpActDate.toggle();\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置区分：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_actTypeCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"actTypeCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of actTypeArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置開始日時：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_actStartDate\" type=\"text\" class=\"form-control\" #dpActStartDate=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                        [(bsValue)]=\"actStartDate\" value=\"{{actStartDate | date:'yyyy/MM/dd'}}\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpActStartDate.toggle();\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_actStartTime\" class=\"search-dropdown\" [(ngModel)]=\"actStartTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_actStartMinite\" class=\"search-dropdown\" [(ngModel)]=\"actStartMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置終了日時：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_actEndDate\" type=\"text\" class=\"form-control\" #dpActEndDate=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                        [(bsValue)]=\"actEndDate\" value=\"{{actEndDate | date:'yyyy/MM/dd'}}\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpActEndDate.toggle();\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_actEndTime\" class=\"search-dropdown\" [(ngModel)]=\"actEndTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_actEndMinite\" class=\"search-dropdown\" [(ngModel)]=\"actEndMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置部署：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"actDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"actDeptNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"actSection.openModal('actSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"actUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"actUserNm\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"actUser.openModal('actUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>TEL：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"actTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"actTel\">\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>E-mail：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"actMail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"actMail\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label for=\"InputTextarea\">\n                      <strong>処置結果：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-10 col-sm-9 col-xs-9\">\n                    <textarea name=\"actContent\" class=\"form-control\" id=\"InputTextarea\" rows=\"4\" [(ngModel)]=\"actContent\"></textarea>\n                  </div>\n                </div>\n              </div>\n\n              <h5 class=\"context-header\">\n                <strong>製品情報</strong>\n              </h5>\n              <div class=\"product-info-border\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>機種区分：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-10 col-sm-9 col-xs-9\">\n                    <select name=\"sel_productTypeCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"productTypeCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of productTypeArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <h5 class=\"context-sub-header\">\n                  <strong>障害状況</strong>\n                </h5>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>　トリガー：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_productTriggerCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"productTriggerCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of productTriggerArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>頻度：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_productHindoCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"productHindoCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of productHindoArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>　現象：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_productGensyoCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"productGensyoCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of productGensyoArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>状態：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_productStatusCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"productStatusCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of productStatusArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n            </form>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関係者</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>\n                <i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i> 変更を通知する／\n                <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i> 変更を通知しない\n              </strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div>サービスソリューション事業本部 ＣＥ事業部 東京サービス部 第一グループ</div>\n              <div>\n                <span class=\"context-margin relate-user-nm\"> 水道　一郎 （既読日：2017/12/18）</span>\n              </div>\n              <div>\n                <span class=\"context-margin relate-user-nm\"> 水道　二郎 　　　　　　　　　　　</span>\n              </div>\n              <div>品質保証統括室 　品質管理グループ</div>\n              <div>\n                <span class=\"context-margin relate-user-nm\"> 水道　花子 （既読日：2017/12/19）</span>\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関連リンク</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>プロジェクト情報\n                <span class=\"text-danger\">※プロジェクト情報はＡＲＣＳから行なってください。（ＡＲＣＳ登録後の翌日反映）</span>\n              </strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>プロジェクト番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showPj()\">\n                    <u>J1000000</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>PJ主管部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">プロ主管</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>プロジェクト名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>PM：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>代表機場：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>都道府県：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">東京都</div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>障害対応報告書(MR2)</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>件名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showMr2()\">\n                    <u>XXXXXXXXXXシーケンサ異常</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>作成日：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/1/4</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>依頼元：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">依頼元</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>作業担当者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>労災・事故・クレーム連絡</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>状態：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">第1報 正式発行</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>区分：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">品質（ランクＡ）</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>概要：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showJiko()\">\n                    <u>XXXXXXXXXXXXXXXXXXXXXX</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機場名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>発行日：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/1/1</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>発行元：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>費用決済申請</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>ID番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showHiyo('dsp','dsp',416161,'','1282')\">\n                    <u>XXXXXXXXXX</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>ステータス：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">決裁</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>区分：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">クレーム対応</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>決裁番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">無償 第X号</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>件名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">XXXXXXXXXXXXXXXXXXXXXX</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>概算金額：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <div class=\"pull-right\">123,456</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関連インシデント</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>同一機場インシデント</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <a (click)=\"showRelateIncident()\">\n                <u>#12390 障害 2016/12/31 ○○○浄水場 ○○○市</u>\n              </a>\n              <div class=\"context-margin\">\n                Ａ系水処理設備の終沈（１、２号）の監視操作不能なので対応頂きたい。\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>同一顧客インシデント</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <a (click)=\"showRelateIncident()\">\n                <u>#12312 問い合わせ 2016/12/31 ○○○センター ○○○企業局</u>\n              </a>\n              <div class=\"context-margin\">\n                富士電機製変圧器のＰＣＢ含有問合せ。以下の型式の変圧器にＰＣＢが含まれているかを教えて下さい。\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_bs_moment__ = __webpack_require__("../../../../ngx-bootstrap/bs-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment_local__ = __webpack_require__("../../../../../src/environments/environment.local.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







Object(__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_bs_moment__["a" /* defineLocale */])('ja', __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_locale__["a" /* ja */]);


var EditComponent = (function () {
    function EditComponent(route, jsonpService, http) {
        this.route = route;
        this.jsonpService = jsonpService;
        this.http = http;
        this.SUB_WIN = null;
        this.minDate = new Date(2017, 5, 10);
        this.maxDate = new Date(2018, 9, 15);
        // date pikerの設定
        this.locale = 'ja';
        this.locales = Object(__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_bs_moment__["b" /* listLocales */])();
        // 時間配列
        this.timeList = [
            { val: 0, label: "00" }, { val: 1, label: "01" }, { val: 2, label: "02" }, { val: 3, label: "03" }, { val: 4, label: "04" }, { val: 5, label: "05" }, { val: 6, label: "06" }, { val: 7, label: "07" }, { val: 8, label: "08" }, { val: 9, label: "09" }, { val: 10, label: "10" },
            { val: 11, label: "11" }, { val: 12, label: "12" }, { val: 13, label: "13" }, { val: 14, label: "14" }, { val: 15, label: "15" }, { val: 16, label: "16" }, { val: 17, label: "17" }, { val: 18, label: "18" }, { val: 19, label: "19" }, { val: 20, label: "20" },
            { val: 21, label: "21" }, { val: 22, label: "22" }, { val: 23, label: "23" },
        ];
        // 分配列
        this.miniteList = [
            { val: 0, label: "00" }, { val: 1, label: "01" }, { val: 2, label: "02" }, { val: 3, label: "03" }, { val: 4, label: "04" }, { val: 5, label: "05" }, { val: 6, label: "06" }, { val: 7, label: "07" }, { val: 8, label: "08" }, { val: 9, label: "09" }, { val: 10, label: "10" },
            { val: 11, label: "11" }, { val: 12, label: "12" }, { val: 13, label: "13" }, { val: 14, label: "14" }, { val: 15, label: "15" }, { val: 16, label: "16" }, { val: 17, label: "17" }, { val: 18, label: "18" }, { val: 19, label: "19" }, { val: 20, label: "20" },
            { val: 21, label: "21" }, { val: 22, label: "22" }, { val: 23, label: "23" }, { val: 24, label: "24" }, { val: 25, label: "25" }, { val: 26, label: "26" }, { val: 27, label: "27" }, { val: 28, label: "28" }, { val: 29, label: "29" }, { val: 30, label: "30" },
            { val: 31, label: "31" }, { val: 32, label: "32" }, { val: 33, label: "33" }, { val: 34, label: "34" }, { val: 35, label: "35" }, { val: 36, label: "36" }, { val: 37, label: "37" }, { val: 38, label: "38" }, { val: 39, label: "39" }, { val: 40, label: "40" },
            { val: 41, label: "41" }, { val: 42, label: "42" }, { val: 43, label: "43" }, { val: 44, label: "44" }, { val: 45, label: "45" }, { val: 46, label: "46" }, { val: 47, label: "47" }, { val: 48, label: "48" }, { val: 49, label: "49" }, { val: 50, label: "50" },
            { val: 51, label: "51" }, { val: 52, label: "52" }, { val: 53, label: "53" }, { val: 54, label: "54" }, { val: 55, label: "55" }, { val: 56, label: "56" }, { val: 57, label: "57" }, { val: 58, label: "58" }, { val: 59, label: "59" },
        ];
        // 画面表示パラメータの初期化
        // １－１．ヘッダー
        this.incidentId = ""; // インシデントID
        this.incidentNo = ""; // インシデント番号
        this.incidentStatusCd = ""; // インシデントステータスCD
        this.incidentStatusNm = ""; // インシデントステータス名
        this.incidentTypeCd = ""; // インシデント分類CD
        this.insDate = ""; // 登録日
        this.insUserNm = ""; // 登録者
        this.updDate = ""; // 更新日
        this.updUserNm = ""; // 更新者
        // １－２．メイン情報
        this.parentIncidentId = ""; // 親インシデントID
        this.parentIncidentNo = ""; // 親インシデント番号
        this.industryTypeCd = ""; // 業種区分CD
        this.infoSourceCd = ""; // 情報提供元CD
        this.infoSourceNm = ""; // 情報提供元名
        this.infoProvider = ""; // 情報提供者
        this.infoProvidedTel = ""; //情報提供TEL  
        this.relateList = []; // 関係者
        this.memo = ""; //注記  
        this.kijoId = ""; //機場ID
        this.kijoNm = ""; //機場名
        this.jigyosyutaiId = ""; //事業主体ID
        this.jigyosyutaiNm = ""; //事業主体名
        this.setubiId = ""; //設備ID
        this.setubiNm = ""; //設備名
        this.prefId = ""; //都道府県ID
        this.prefNm = ""; //都道府県名
        this.custId = ""; //顧客ID 
        this.custNm = ""; //顧客名
        this.custTypeCd = ""; //顧客分類CD
        this.custTypeNm = ""; //顧客分類名
        this.salesDeptCd = ""; //営業部門CD
        this.salesDeptNm = ""; //営業部門名
        this.salesUserId = ""; //営業担当者ID
        this.salesUserNm = ""; //営業担当者名
        this.deliveryPjId = ""; //納入プロジェクトID
        this.deliveryPjNm = ""; //納入プロジェクト名
        this.custDept = ""; //会社名・所属部署
        this.requester = ""; //依頼者
        this.contactTel = ""; //連絡先(TEL)
        this.contactFax = ""; //連絡先(FAX)
        this.contactMail = ""; //連絡先(E-mail)  
        this.skanDeptCd = ""; //主管部門CD
        this.skanDeptNm = ""; //主管部門名
        this.skanUserId = ""; //主管担当者ID
        this.skanUserNm = ""; //主管担当者名
        this.callDeptCd = ""; //受付部署CD
        this.callDeptNm = ""; //受付部署名
        this.callUserId = ""; //受付者ID
        this.callUserNm = ""; //受付者名
        this.callTel = ""; //受付電話番号
        this.callMail = ""; //受付メール
        this.callContent = ""; //受付内容
        this.taioDeptCd = ""; //対応部署CD
        this.taioDeptNm = ""; //対応部署名
        this.taioUserId = ""; //対応者ID
        this.taioUserNm = ""; //対応者名  
        this.taioTel = ""; //対応電話番号
        this.taioMail = ""; //対応メール
        this.taioContent = ""; //対応内容
        this.actTypeCd = ""; //処置区分CD
        this.actDeptCd = ""; //処置部署CD
        this.actDeptNm = ""; //処置部署名
        this.actUserId = ""; //処置者ID
        this.actUserNm = ""; //処置者名
        this.actTel = ""; //処置電話番号
        this.actMail = ""; //処置メール
        this.actContent = ""; //処置内容
        // １－６．製品情報
        this.productTypeCd = ""; //機種区分CD
        this.productTypeNm = ""; //機種区分名
        this.productTriggerCd = ""; //障害状況トリガーCD
        this.productTriggerNm = ""; //障害状況トリガー名
        this.productHindoCd = ""; //障害状況頻度CD
        this.productHindoNm = ""; //障害状況頻度名
        this.productGensyoCd = ""; //障害状況現象CD
        this.productGensyoNm = ""; //障害状況現象名
        this.productStatusCd = ""; //障害状況状態CD
        this.productStatusNm = ""; //障害状況状態名
        // インシデント分類セレクト情報
        this.incidentTypeArray = [
            { label: '障害', value: 1 },
            { label: '事故', value: 2 },
            { label: '問合せ', value: 3 },
            { label: 'クレーム', value: 4 },
            { label: '情報', value: 5 },
            { label: 'その他', value: 6 }
        ];
        // 業種区分セレクト情報
        this.industryTypeArray = [
            { label: '機械', value: 1 },
            { label: '電機（E）', value: 2 },
            { label: '計装（I）', value: 3 },
            { label: '情報（C）', value: 4 },
            { label: '環境', value: 5 },
            { label: 'WBC', value: 6 },
            { label: 'その他', value: 7 }
        ];
        // 都道府県セレクト情報
        this.prefArray = [
            { label: '北海道', value: 1 },
            { label: '青森県', value: 2 },
            { label: '秋田県', value: 3 },
            { label: '岩手県', value: 4 }
        ];
        // 顧客分類セレクト情報
        this.custTypeArray = [
            { label: '年間契約', value: 1 },
            { label: '点検契約', value: 2 },
            { label: '契約なし', value: 3 },
            { label: '瑕疵期間中', value: 4 },
            { label: 'その他', value: 5 },
        ];
        // 情報提供元セレクト情報
        this.infoSourceArray = [
            { label: '顧客', value: 1 },
            { label: '特約店', value: 2 },
            { label: '営業', value: 3 },
            { label: '技術', value: 4 },
            { label: 'その他', value: 5 },
        ];
        // 機種区分セレクト情報
        this.productTypeArray = [
            { label: '機種区分１', value: 1 },
            { label: 'etc', value: 2 },
        ];
        // 障害状況トリガーセレクト情報
        this.productTriggerArray = [
            { label: '通常運用', value: 1 },
            { label: '立上時', value: 2 },
            { label: '立下時', value: 3 },
            { label: '停電', value: 4 },
            { label: '復電', value: 5 },
            { label: 'etc', value: 6 },
        ];
        // 障害状況頻度セレクト情報
        this.productHindoArray = [
            { label: '常時', value: 1 },
            { label: '不定期', value: 2 },
            { label: '間欠的', value: 3 },
            { label: 'その他', value: 4 },
            { label: 'etc', value: 5 },
        ];
        // 障害状況現象セレクト情報
        this.productGensyoArray = [
            { label: '運転不能', value: 1 },
            { label: '停止不能', value: 2 },
            { label: '動作異常', value: 3 },
            { label: '操作不能', value: 4 },
            { label: 'etc', value: 5 },
        ];
        // 障害状況状態セレクト情報
        this.productStatusArray = [
            { label: 'システムダウン', value: 1 },
            { label: '電源断', value: 2 },
            { label: '機器・装置故障', value: 2 },
            { label: '部品故障', value: 2 },
            { label: 'etc', value: 2 },
        ];
        // 処置区分セレクト情報
        this.actTypeArray = [
            { label: '出動', value: 1 },
            { label: '電話対応', value: 2 },
            { label: 'その他', value: 3 },
        ];
        this.bsConfig = Object.assign({}, { locale: this.locale });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var prmIncientId = this.route.snapshot.paramMap.get('incidentId');
        if (prmIncientId) {
            ps.set('incidentId', prmIncientId);
        }
        // 画面表示パラメータの取得処理
        this.jsonpService.requestGet('IncidentDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(one);
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 事業主体の初期化
    EditComponent.prototype.jigyosyutaiClear = function () {
        this.jigyosyutaiId = ""; //事業主体ID
        this.jigyosyutaiNm = ""; //事業主体名
    };
    //新しいウィンドウを開く(パターン1)
    // CMN_openNewWindow1(url,name,sizex,sizey,top,left){
    EditComponent.prototype.CMN_openNewWindow1 = function (url, name, sizex, sizey) {
        var style = "toolbar=0,location=0,directories=0,status=yes,menubar=0,scrollbars=1,resizable=1," +
            "width=" + sizex + ",height=" + sizey;
        // if( top ){
        // 	style += ",top="+top;
        // }  
        // if( left ){
        // 	style += ",left="+left;
        // }
        var win = window.open(url, name, style);
        if (win) {
            win.focus();
            return win;
        }
    };
    // 関連MR2表示処理
    EditComponent.prototype.showMr2 = function () {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        this.SUB_WIN = this.CMN_openNewWindow1("./#/mr2", "sub_mr2", 1000, 760);
    };
    // 関連プロジェクト表示処理
    EditComponent.prototype.showPj = function () {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        this.SUB_WIN = this.CMN_openNewWindow1("./#/project", "sub_project", 1000, 760);
    };
    // 関連事故クレーム情報表示処理
    EditComponent.prototype.showJiko = function () {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        var url = __WEBPACK_IMPORTED_MODULE_6__environments_environment_local__["a" /* environment */].jikoPath + "jiko171211.html"; // 環境に合わせたURLを作成する TODO:固定値
        this.SUB_WIN = this.CMN_openNewWindow1(url, "sub_jiko", 1200, 800);
    };
    // 関連費用決済申請表示処理 TODO:固定値表示
    EditComponent.prototype.showHiyo = function (status, division, idno, bno, system_id, gougi_answer) {
        if (system_id == "") {
            system_id = "1282";
        }
        // var frm = window.document.fm1;
        var strurl;
        strurl = __WEBPACK_IMPORTED_MODULE_6__environments_environment_local__["a" /* environment */].hiyoPath + "wf_main_input.php";
        strurl += "?user_id=ADF";
        strurl += "&authority=9";
        //	strurl += "&system_id=1282";
        strurl += "&system_id=" + system_id;
        strurl += "&status=" + status;
        strurl += "&division=" + division;
        strurl += "&idno=" + idno;
        strurl += "&win_kbn=1";
        if (gougi_answer)
            strurl += "&gougi_answer_mode=Y";
        strurl += '&unit_flg=';
        strurl += '&main_system_id=';
        strurl += '&main_idno=';
        strurl += '&param1=';
        strurl += '&param2=';
        strurl += '&param3=';
        //	URLにBNOが含まれているかどうか？
        if (bno != "") {
            strurl = strurl.replace("BNO=&", "BNO=" + bno + "&");
        }
        this.SUB_WIN = this.CMN_openNewWindow1(strurl, "WF_EDIT", 1200, 800);
        return;
    };
    // 関連インシデント表示処理
    EditComponent.prototype.showRelateIncident = function () {
    };
    // 親インシデント番号
    EditComponent.prototype.onIncidentSearchSelected = function ($event) {
        if ($event) {
            this.parentIncidentId = $event["incidentId"]; // 親インシデントID
            this.parentIncidentNo = $event["incidentNo"]; // 親インシデント番号
        }
    };
    // プロジェクト選択
    EditComponent.prototype.onProjectSearchSelected = function ($event) {
        if ($event) {
            this.deliveryPjId = $event["pjNo"]; //納入プロジェクトID
            this.deliveryPjNm = $event["consumerNm"]; //納入プロジェクト名
        }
    };
    //  ユーザ選択
    EditComponent.prototype.onSalesUserSelected = function ($event) {
        if ($event) {
            switch ($event["userSearchType"]) {
                case 'salesUser':
                    this.salesUserId = $event["userId"];
                    this.salesUserNm = $event["userNm"];
                    this.salesDeptCd = $event["sectionCd"];
                    this.salesDeptNm = $event["sectionNm"];
                    break;
                case 'skanUser':
                    this.skanUserId = $event["userId"];
                    this.skanUserNm = $event["userNm"];
                    this.skanDeptCd = $event["sectionCd"];
                    this.skanDeptNm = $event["sectionNm"];
                    break;
                case 'callUser':
                    this.callUserId = $event["userId"];
                    this.callUserNm = $event["userNm"];
                    this.callDeptCd = $event["sectionCd"];
                    this.callDeptNm = $event["sectionNm"];
                    break;
                case 'taioUser':
                    this.taioUserId = $event["userId"];
                    this.taioUserNm = $event["userNm"];
                    this.taioDeptCd = $event["sectionCd"];
                    this.taioDeptNm = $event["sectionNm"];
                    break;
                case 'actUser':
                    this.actUserId = $event["userId"];
                    this.actUserNm = $event["userNm"];
                    this.actDeptCd = $event["sectionCd"];
                    this.actDeptNm = $event["sectionNm"];
                    break;
            }
        }
    };
    // 部門検索
    EditComponent.prototype.onSalesSectionSelected = function ($event) {
        if ($event) {
            switch ($event["sectionSearchType"]) {
                case 'salesSection':
                    this.salesDeptCd = $event["postCd"];
                    this.salesDeptNm = $event["sectionNm"];
                    break;
                case 'skanSection':
                    this.skanDeptCd = $event["postCd"];
                    this.skanDeptNm = $event["sectionNm"];
                    break;
                case 'callSection':
                    this.callDeptCd = $event["postCd"];
                    this.callDeptNm = $event["sectionNm"];
                    break;
                case 'taioSection':
                    this.taioDeptCd = $event["postCd"];
                    this.taioDeptNm = $event["sectionNm"];
                    break;
                case 'actSection':
                    this.actDeptCd = $event["postCd"];
                    this.actDeptNm = $event["sectionNm"];
                    break;
            }
        }
    };
    // 画面表示パラメータのセット処理
    EditComponent.prototype.setDspParam = function (data) {
        // １－１．ヘッダー
        this.incidentNo = data.incidentNo; // インシデント番号
        this.incidentStatusCd = data.incidentStatusCd; // インシデントステータスCD
        this.incidentStatusNm = data.incidentStatusNm; // インシデントステータス名
        this.incidentTypeCd = data.incidentTypeCd; // インシデント分類CD
        this.insDate = data.insDate; // 登録日
        this.insUserNm = data.insUserNm; // 登録者
        this.updDate = data.updDate; // 更新日
        this.updUserNm = data.updUserNm; // 更新者
        // １－２．メイン情報    
        this.parentIncidentId = data.parentIncidentId; // 親インシデントID
        this.parentIncidentNo = data.parentIncidentNo; // 親インシデント番号
        this.incidentStartDate = this.getJsDate(data.incidentStartDateTime); // 発生日
        this.incidentStartTime = this.getHours(this.getJsDate(data.incidentStartDateTime)); // 発生時刻(時間)
        this.incidentStartMinite = this.getMinutes(this.getJsDate(data.incidentStartDateTime)); // 発生時刻(分)
        this.industryTypeCd = data.industryTypeCd; // 業種区分CD
        this.infoSourceCd = data.infoSourceCd; // 情報提供元CD
        this.infoSourceNm = data.infoSourceNm; // 情報提供元名
        this.infoProvider = data.infoProvider; // 情報提供者
        this.infoProvidedTel = data.infoProvidedTel; //情報提供TEL
        this.relateList = data.relateList; //関係者
        this.memo = data.memo; //注記    
        this.kijoId = data.kijoId; //機場ID
        this.kijoNm = data.kijoNm; //機場名
        this.jigyosyutaiId = data.jigyosyutaiId; //事業主体ID
        this.jigyosyutaiNm = data.jigyosyutaiNm; //事業主体名
        this.setubiId = data.setubiId; //設備ID
        this.setubiNm = data.setubiNm; //設備名
        this.prefId = data.prefId; //都道府県ID
        this.prefNm = data.prefNm; //都道府県名
        this.custId = data.custId; //顧客ID
        this.custNm = data.custNm; //顧客名
        this.custTypeCd = data.custTypeCd; //顧客分類CD
        this.custTypeNm = data.custTypeNm; //顧客分類名
        this.salesDeptCd = data.salesDeptCd; //営業部門CD
        this.salesDeptNm = data.salesDeptNm; //営業部門名
        this.salesUserId = data.salesUserId; //営業担当者ID
        this.salesUserNm = data.salesUserNm; //営業担当者名
        this.deliveryPjId = data.deliveryPjId; //納入プロジェクトID
        this.deliveryPjNm = data.deliveryPjNm; //納入プロジェクト名
        this.custDept = data.custDept; //会社名・所属部署
        this.requester = data.requester; //依頼者
        this.contactTel = data.contactTel; //連絡先(TEL)
        this.contactFax = data.contactFax; //連絡先(FAX)
        this.contactMail = data.contactMail; //連絡先(E-mail)
        this.skanDeptCd = data.skanDeptCd; //主管部門CD
        this.skanDeptNm = data.skanDeptNm; //主管部門名
        this.skanUserId = data.skanUserId; //主管担当者CD
        this.skanUserNm = data.skanUserNm; //主管担当者名
        // １－３．受付情報
        this.callDate = this.getJsDate(data.callStartDate); // 受付日
        this.callStartTime = this.getHours(this.getJsDate(data.callStartDate)); // 受付開始時刻(時間)
        this.callStartMinite = this.getMinutes(this.getJsDate(data.callStartDate)); // 受付開始時刻(分)
        this.callEndTime = this.getHours(this.getJsDate(data.callEndDate)); // 受付終了時刻(時間)
        this.callEndMinite = this.getMinutes(this.getJsDate(data.callEndDate)); // 受付終了時刻(分)
        this.callDeptCd = data.callDeptCd; //受付部署CD
        this.callDeptNm = data.callDeptNm; //受付部署名
        this.callUserId = data.callUserId; //受付者ID
        this.callUserNm = data.callUserNm; //受付者名
        this.callTel = data.callTel; //受付電話番号
        this.callMail = data.callMail; //受付メール
        this.callContent = data.callContent; //受付内容
        // １－４．対応情報
        this.taioDate = this.getJsDate(data.taioStartDate); // 対応日
        this.taioStartTime = this.getHours(this.getJsDate(data.taioStartDate)); // 対応開始時刻(時間)
        this.taioStartMinite = this.getMinutes(this.getJsDate(data.taioStartDate)); // 対応開始時刻(分)
        this.taioEndTime = this.getHours(this.getJsDate(data.taioEndDate)); // 対応終了時刻(時間)
        this.taioEndMinite = this.getMinutes(this.getJsDate(data.taioEndDate)); // 対応終了時刻(分)
        this.taioDeptCd = data.taioDeptCd; //対応部署CD
        this.taioDeptNm = data.taioDeptNm; //対応部署名
        this.taioUserId = data.taioUserId; //対応者ID
        this.taioUserNm = data.taioUserNm; //対応者名    
        this.taioTel = data.taioTel; //対応電話番号
        this.taioMail = data.taioMail; //対応メール
        this.taioContent = data.taioContent; //対応内容
        // １－５．処置情報
        this.actDate = this.getJsDate(data.actDate); // 処置予定日
        this.actTypeCd = data.actTypeCd; //処置区分CD
        this.actStartDate = this.getJsDate(data.actStartDateTime); // 処置開始日
        this.actStartTime = this.getHours(this.getJsDate(data.actStartDateTime)); // 処置開始時刻(時間)
        this.actStartMinite = this.getMinutes(this.getJsDate(data.actStartDateTime)); // 処置開始時刻(分)
        this.actEndDate = this.getJsDate(data.actEndDateTime); // 処置終了日
        this.actEndTime = this.getHours(this.getJsDate(data.actEndDateTime)); // 処置終了時刻(時間)
        this.actEndMinite = this.getMinutes(this.getJsDate(data.actEndDateTime)); // 処置終了時刻(分)
        this.actDeptCd = data.actDeptCd; //処置部署CD
        this.actDeptNm = data.actDeptNm; //処置部署名
        this.actUserId = data.actUserId; //処置者ID
        this.actUserNm = data.actUserNm; //処置者名
        this.actTel = data.actTel; //処置電話番号
        this.actMail = data.actMail; //処置メール
        this.actContent = data.actContent; //処置内容
        // １－６．製品情報
        this.productTypeCd = data.productTypeCd; //機種区分CD
        this.productTypeNm = data.productTypeNm; //機種区分名
        this.productTriggerCd = data.productTriggerCd; //障害状況トリガーCD
        this.productTriggerNm = data.productTriggerNm; //障害状況トリガー名
        this.productHindoCd = data.productHindoCd; //障害状況頻度CD
        this.productHindoNm = data.productHindoNm; //障害状況頻度名
        this.productGensyoCd = data.productGensyoCd; //障害状況現象CD
        this.productGensyoNm = data.productGensyoNm; //障害状況現象名
        this.productStatusCd = data.productStatusCd; //障害状況状態CD
        this.productStatusNm = data.productStatusNm; //障害状況状態名
    };
    // インシデント登録処理
    EditComponent.prototype.onEntry = function (event, files) {
        var _this = this;
        console.log('登録処理スタート');
        // TODO ファイルアップロード
        // console.log(files);
        // if(files){
        //   let file = files[0];
        //   let data = new FormData();
        //   data.append('incidentFile', file, file.name);
        //   console.log(data);
        //   this.http.post('http://172.20.108.34/INCIDENT/upload.php', data)
        //   .subscribe(
        //     data => console.log(data),
        //     error => console.log(error)
        //   );
        // }
        // // 画面表示パラメータの取得処理
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set('incidentId', this.incidentId);
        ps.set('incidentNo', this.incidentNo);
        ps.set('incidentStatusCd', this.incidentStatusCd);
        ps.set('incidentStatusNm', this.incidentStatusNm);
        ps.set('incidentTypeCd', this.incidentTypeCd);
        ps.set('insDate', this.insDate);
        ps.set('insUserNm', this.insUserNm);
        ps.set('updDate', this.updDate);
        ps.set('updUserNm', this.updUserNm);
        ps.set('parentIncidentId', this.parentIncidentId);
        ps.set('parentIncidentNo', this.parentIncidentNo);
        var incidentStartDateStr = this.getDateStringFromDateAndTime(this.incidentStartDate, this.incidentStartTime, this.incidentStartMinite);
        ps.set('incidentStartDate', incidentStartDateStr);
        ps.set('industryTypeCd', this.industryTypeCd);
        ps.set('infoSourceCd', this.infoSourceCd);
        ps.set('infoSourceNm', this.infoSourceNm);
        ps.set('infoProvider', this.infoProvider);
        ps.set('infoProvidedTel', this.infoProvidedTel);
        ps.set('memo', this.memo);
        ps.set('kijoId', this.kijoId);
        ps.set('kijoNm', this.kijoNm);
        ps.set('jigyosyutaiId', this.jigyosyutaiId);
        ps.set('jigyosyutaiNm', this.jigyosyutaiNm);
        ps.set('setubiId', this.setubiId);
        ps.set('setubiNm', this.setubiNm);
        ps.set('prefId', this.prefId);
        ps.set('prefNm', this.prefNm);
        ps.set('custId', this.custId);
        ps.set('custNm', this.custNm);
        ps.set('custTypeCd', this.custTypeCd);
        ps.set('custTypeNm', this.custTypeNm);
        ps.set('salesDeptCd', this.salesDeptCd);
        ps.set('salesDeptNm', this.salesDeptNm);
        ps.set('salesUserId', this.salesUserId);
        ps.set('salesUserNm', this.salesUserNm);
        ps.set('deliveryPjId', this.deliveryPjId);
        ps.set('deliveryPjNm', this.deliveryPjNm);
        ps.set('custDept', this.custDept);
        ps.set('requester', this.requester);
        ps.set('contactTel', this.contactTel);
        ps.set('contactFax', this.contactFax);
        ps.set('contactMail', this.contactMail);
        ps.set('skanDeptCd', this.skanDeptCd);
        ps.set('skanDeptNm', this.skanDeptNm);
        ps.set('skanUserId', this.skanUserId);
        ps.set('skanUserNm', this.skanUserNm);
        ps.set('jigyosyutaiNm', this.jigyosyutaiNm);
        ps.set('jigyosyutaiNm', this.jigyosyutaiNm);
        ps.set('jigyosyutaiNm', this.jigyosyutaiNm);
        var callStartDateStr = this.getDateStringFromDateAndTime(this.callDate, this.callStartTime, this.callStartMinite);
        ps.set('callStartDate', callStartDateStr);
        var callEndDateStr = this.getDateStringFromDateAndTime(this.callDate, this.callEndTime, this.callEndMinite);
        ps.set('callEndDate', callEndDateStr);
        ps.set('callDeptCd', this.callDeptCd);
        ps.set('callDeptNm', this.callDeptNm);
        ps.set('callUserId', this.callUserId);
        ps.set('callUserNm', this.callUserNm);
        ps.set('callTel', this.callTel);
        ps.set('callMail', this.callMail);
        ps.set('callContent', this.callContent);
        var taioStartDateStr = this.getDateStringFromDateAndTime(this.taioDate, this.taioStartTime, this.taioStartMinite);
        ps.set('taioStartDate', taioStartDateStr);
        var taioEndDateStr = this.getDateStringFromDateAndTime(this.taioDate, this.taioEndTime, this.taioEndMinite);
        ps.set('taioEndDate', taioEndDateStr);
        ps.set('taioDeptCd', this.taioDeptCd);
        ps.set('taioDeptNm', this.taioDeptNm);
        ps.set('taioUserId', this.taioUserId);
        ps.set('taioUserNm', this.taioUserNm);
        ps.set('taioTel', this.taioTel);
        ps.set('taioMail', this.taioMail);
        ps.set('taioContent', this.taioContent);
        var actDateStr = this.getDateStringFromDate(this.actDate);
        ps.set('actDate', actDateStr);
        ps.set('actTypeCd', this.actTypeCd);
        var actStartDateStr = this.getDateStringFromDateAndTime(this.actStartDate, this.actStartTime, this.actStartMinite);
        ps.set('actStartDate', actStartDateStr);
        var actEndDateStr = this.getDateStringFromDateAndTime(this.actEndDate, this.actEndTime, this.actEndMinite);
        ps.set('actEndDate', actEndDateStr);
        ps.set('actDeptCd', this.actDeptCd);
        ps.set('actDeptNm', this.actDeptNm);
        ps.set('actUserId', this.actUserId);
        ps.set('actUserNm', this.actUserNm);
        ps.set('actTel', this.actTel);
        ps.set('actMail', this.actMail);
        ps.set('actContent', this.actContent);
        ps.set('productTypeCd', this.productTypeCd);
        ps.set('productTypeNm', this.productTypeNm);
        ps.set('productTriggerCd', this.productTriggerCd);
        ps.set('productTriggerNm', this.productTriggerNm);
        ps.set('productHindoCd', this.productHindoCd);
        ps.set('productHindoNm', this.productHindoNm);
        ps.set('productGensyoCd', this.productGensyoCd);
        ps.set('productGensyoNm', this.productGensyoNm);
        ps.set('productStatusCd', this.productStatusCd);
        ps.set('productStatusNm', this.productStatusNm);
        // 登録処理通信処理
        this.jsonpService.requestGet('IncidentEntry.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log(data);
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(one);
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // サーバから取得した日付をJavascriptのDate型に変更する（失敗時は、nullを返す）
    EditComponent.prototype.getJsDate = function (date) {
        if (date && new Date(date)) {
            return new Date(date);
        }
        return null;
    };
    // 日付型を日付フォーマット文字列に変更
    EditComponent.prototype.getDateStringFromDate = function (date) {
        if (date && date.getFullYear()) {
            var y = date.getFullYear();
            var m = date.getMonth();
            m++;
            var d = date.getDate();
            return y + "-" + m + "-" + d + " 00:00:00";
        }
        else {
            // 日付型でない値の場合
            return null;
        }
    };
    // Date型から時間を返す
    EditComponent.prototype.getHours = function (date) {
        if (date && date.getFullYear()) {
            var hours = date.getHours();
            return hours;
        }
        else {
            // 日付型でない値の場合
            return null;
        }
    };
    // Date型から分を返す
    EditComponent.prototype.getMinutes = function (date) {
        if (date && date.getFullYear()) {
            var minutes = date.getMinutes();
            return minutes;
        }
        else {
            // 日付型でない値の場合
            return null;
        }
    };
    // 日付と時刻から日付フォーマット文字列を作成
    EditComponent.prototype.getDateStringFromDateAndTime = function (date, time, minite) {
        var timeStr = "00";
        var miniteStr = "00";
        if (date && date.getFullYear()) {
            var y = date.getFullYear();
            var m = date.getMonth();
            m++;
            var d = date.getDate();
            if (time) {
                timeStr = time;
            }
            if (minite) {
                miniteStr = minite;
            }
            return y + "-" + m + "-" + d + " " + timeStr + ":" + miniteStr + ":00";
        }
        else {
            // 日付型でない値の場合
            return null;
        }
    };
    return EditComponent;
}());
EditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__jsonp_service__["a" /* JsonpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object])
], EditComponent);

var _a, _b, _c;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        styles: ["div h2{ background-color:#f00; }"],
        template: "\n    <div class=\"component\">\n      <h2>\u30A8\u30E9\u30FC\uFF01</h2>\n      <p>\u30DA\u30FC\u30B8\u304C\u898B\u5F53\u305F\u308A\u307E\u305B\u3093\u3002</p>\n    </div>\n  "
    })
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* システムタイトル部 */\r\n.system-title {\r\n    font-weight: bold;\r\n}\r\n\r\n/* タイトル・ユーザ名表示 */\r\n.header-user-name {\r\n    margin-right:10px;\r\n}\r\n\r\n/* タイトル・メニュー選択時 */\r\n.nav .open>a, .nav .open>a:focus, .nav .open>a:hover a:focus, a:hover {\r\n    color: #23527c;\r\n}\r\n\r\n/* ヘッダー右寄せ部のレイアウト調整 */\r\n.navbar-right {\r\n    margin-right: 15px;\r\n}\r\n\r\n/* ヘッダーメニュー項目のレイアウト調整 */\r\n.navbar-nav>li>a {\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n/* ヘッダー1段目(背景赤系色) */\r\n/* colorの値・・・bootstrapに負けてる？ */\r\n.header-first {\r\n    background-color: firebrick;\r\n    color: #ffffff;\r\n}\r\n\r\n/* ヘッダー2段目(背景橙系色) */\r\n/* colorの値・・・bootstrapに負けてる？ */\r\n.header-second {\r\n    background-color: darkorange;\r\n    color: #ffffff;\r\n}\r\n\r\n/* ヘッダーのテキスト */\r\n.header-text {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    color: #ffffff;\r\n}\r\n\r\n/* paddingを上書き、ヘッダータイトルの位置を調整*/\r\n.navbar-brand {\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n\r\n/*ヘッダーのユーザー名*/\r\n.header-user-area-text {\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n/* ヘッダーの検索欄のレイアウト調整 */\r\n.header-search {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n/* ヘッダー部読み込み時のheight値 */\r\n.header-frame {\r\n/*    position: relative !important;\r\n    z-index: 100 !important;*/\r\n    height: 86px;\r\n}\r\n\r\n/* ヘッダー部 プルダウンをマウスオーバーで表示 */\r\n.dropdown:hover > .dropdown-menu{\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデントヘッダー画面\n//\t作成日付・作成者：2017.12.07 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<div id=\"entryLoad\" class=\"entryLoad\"></div>\n<div ng-app=\"headerApp\" ng-cloak>\n  <div ng-controller=\"HeaderController as header\">\n    <nav class=\"navbar navbar-static-top\">\n      <div class=\"container-fluid\">\n        <div class=\"row header-first\">\n          <div class=\"col-lg-6 col-md-6 col-sm-8 col-xs-8\">\n            <div class=\"navbar-header\">\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                    <span class=\"h3 header-text system-title\">インシデント管理</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-4 col-xs-4\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"navbar-text navbar-right header-user-area-text\">\n                  <span class=\"header-user-name\">川本　健</span>\n                  <u (click)=\"logout()\">ログアウト</u>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group navbar-right header-search\">\n                <input #keyword type=\"text\" class=\"form-control\" (keyup.enter)=\"onKeyWordEnter(keyword.value)\" placeholder=\"キーワードを入力\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row header-second\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <ul class=\"nav navbar-nav\">\n              <li id = \"dropListDown\" class=\"dropdown\" dropdown>\n                <a routerLink=\"/list\" (click)=\"reload()\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\"\n                class=\"header-text dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                 インシデント検索\n                 <span class=\"caret\"></span>\n                </a>\n                <ul id=\"condNmUl\" class=\"dropdown-menu\">\n                  <li *ngFor=\"let data of condList\">\n                    <a (click)=\"reload()\" routerLink=\"/list/c/{{data?.condId}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">{{data?.condNm}}</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a routerLink=\"/edit\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"header-text\" target=\"_top\">インシデント登録</a>\n              </li>\n              <li>\n                <a class=\"header-text\">管理</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(route, jsonpService) {
        this.route = route;
        this.jsonpService = jsonpService;
        this.condList = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.searchConditionName();
    };
    // 検索条件名の検索
    HeaderComponent.prototype.searchConditionName = function () {
        var _this = this;
        // パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        // 検索項目の検索
        this.jsonpService.requestGet('IncidentListConditionDelete.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log(data);
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    HeaderComponent.prototype.setDspParam = function (data) {
        this.condList = data;
    };
    // ヘッダーのキーワードを入力してエンターを押した
    HeaderComponent.prototype.onKeyWordEnter = function (value) {
        console.log("キーワード検索処理");
        console.log(value);
    };
    // ログアウト処理
    HeaderComponent.prototype.logout = function () {
        console.log("ログアウト処理");
    };
    // リロード
    HeaderComponent.prototype.reload = function () {
        window.location.reload();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/jsonp.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JsonpService = (function () {
    function JsonpService(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     *  サーバ通信共通処理
     *   pram: url アクションのurl
     *   return: Observable オブジェクト
     */
    JsonpService.prototype.requestGet = function (url, ps) {
        ps.set('callback', 'JSONP_CALLBACK'); // コールバック関数名は固定
        url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].envPath + url; // 環境に合わせたURLを作成する
        return this.jsonp.get(url, { params: ps })
            .map(function (response) {
            return response.json() || {};
        })
            .catch(function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
        });
    };
    /**
     *  サーバ通信共通処理
     *   pram: url アクションのurl
     *   return: Observable オブジェクト
     */
    JsonpService.prototype.commonRequestGet = function (url, ps) {
        ps.set('callback', 'JSONP_CALLBACK'); // コールバック関数名は固定
        url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].envCommonPath + url; // 環境に合わせたURLを作成する
        return this.jsonp.get(url, { params: ps })
            .map(function (response) {
            return response.json() || {};
        })
            .catch(function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
        });
    };
    /**
   *  PSCAPI サーバ通信処理
   *   pram: url アクションのurl
   *   return: Observable オブジェクト
   */
    JsonpService.prototype.pscApiRequestGet = function (url, ps) {
        ps.set('callback', 'JSONP_CALLBACK'); // コールバック関数名は固定
        url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mr2ApiPath + url; // 環境に合わせたURLを作成する
        return this.jsonp.get(url, { params: ps })
            .map(function (response) {
            return response.json() || {};
        })
            .catch(function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
        });
    };
    return JsonpService;
}());
JsonpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]) === "function" && _a || Object])
], JsonpService);

var _a;
//# sourceMappingURL=jsonp.service.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ×ボタン */\r\n.btn-close {\r\n    height: 22px;\r\n    width: 22px;\r\n    padding: 0px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n/* 検索項目：項目名 */\r\n.input-label {\r\n    height: 22px;\r\n    border-radius: 4px;\r\n    border: 1px solid wheat;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* チェックボックスのマージンを除き、ラベルの高さを合わせる */\r\n.checkbox {\r\n    margin: 0px;\r\n}\r\n\r\n/* 検索一覧画面テーブルのヘッダ */\r\n.table-header-list {\r\n    text-align: center;\r\n}\r\n\r\n/* 検索項目：チェックボックスのレイアウト調整 */\r\n.input-item {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* 検索項目の余計な余白を削る */\r\n.label-padding {\r\n    padding-right: 0px;\r\n}\r\n\r\n/* 検索一覧画面　ウインドウスクロール対応　固定表示の検索結果ヘッダー */\r\n#newTable {\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0px;\r\n}\r\n\r\n/* 検索一覧画面　日付input */\r\n.date-div {\r\n    width: 105px;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n/* 検索一覧画面　要素間の文字(～) */\r\n.inner-text {\r\n    font-size: 16px; \r\n    float:left;\r\n    margin: 0px 5px;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n\r\n/* 関連情報有無のヘッダー幅*/\r\n.relate-th {\r\n    width:44px;\r\n}\r\n\r\n/* 検索条件　表示 */\r\n.condition-show {\r\n    display: inline;    \r\n}\r\n\r\n/* 検索条件　非表示 */\r\n.condition-hide {\r\n    display: none;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデント一覧画面\n//\tHTML_ID　　　　：IncidentListView.php\n//\t作成日付・作成者：2017.10.05 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<my-header #header></my-header>\n<conditionSave-modal #conditionSaveModal (conDelButtonshowDelFlg)=\"setShowDelFlg($event)\" (changeCondition)=\"changeCondition($event)\"></conditionSave-modal>\n<conditionDelete-modal #conditionDeleteModal (conDelButtonshowDelFlg)=\"setShowDelFlg($event)\" (changeCondition)=\"changeCondition($event)\"></conditionDelete-modal>\n\n<div id=\"listApp\" ng-cloak>\n  <div ng-controller=\"ListController as main\" class=\"container-fluid\">\n    <!-- <div id=\"newTable\" class=\"row\" style=\"width:100%\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"panel\">\n          <table class=\"table table-striped\" id=\"dataTables-result\">\n            <thead>\n              <tr>\n                <th class=\"table-header-list\" style=\"width:15%\">インシデント番号\n                </th>\n                <th class=\"table-header-list\" style=\"width:15%\">受付内容\n                </th>\n                <th class=\"table-header-list\" style=\"width:15%\">機場\n                </th>\n                <th class=\"table-header-list\" style=\"width:15%\">設備\n                </th>\n                <th class=\"table-header-list\" style=\"width:7%\">都道府県\n                </th>\n                <th class=\"table-header-list\" style=\"width:7%\">分類\n                </th>\n                <th class=\"table-header-list\" style=\"width:8%\">ステータス\n                </th>\n                <th class=\"table-header-list\" style=\"width:9%\">発生日時\n                </th>\n                <th class=\"table-header-list\" style=\"width:9%\">受付日\n                  <i class=\"fa fa-caret-down\"></i>\n                </th>\n              </tr>\n            </thead>\n          </table>\n        </div>\n      </div>\n    </div> -->\n    <form>\n      <!-- 仕様検討中のためコメント -->\n      <!--\n                    <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                                    <button class=\"btn btn-danger btn-close\">&times;</button>\n                                </div>\n                                <div class=\"\"></div>\n                                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                                    キーワード\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                            <input type=\"text\" class=\"form-control\" value=\"\">\n                        </div>\n                    </div>\n                    -->\n\n    <div class=\"row\"  *ngIf=\"showKeywordFlg\">\n        <span>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                キーワード\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_keyword\" type=\"text\" (keyup.enter)=\"onKeyWordEnter()\" class=\"form-control\" [(ngModel)]=\"keyword\" placeholder=\"キーワードを入力\">\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"incidentNoShow\" [class.condition-hide]=\"!incidentNoShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"incidentNoShow = false;\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                インシデント番号\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_incidentNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"incidentNo\">\n          </div>\n        </span>\n        <span [class.condition-show]=\"callContentShow\" [class.condition-hide]=\"!callContentShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"callContentShow = false;\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                受付内容\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_callContent\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callContent\">\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"kijoNmShow\" [class.condition-hide]=\"!kijoNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"deleteCondition()\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                機場\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_kijoNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"kijoNm\">\n          </div>\n        </span>\n        <span [class.condition-show]=\"setubiNmShow\" [class.condition-hide]=\"!setubiNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"deleteCondition()\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                設備\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_setubiNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"setubiNm\">\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"prefCdShow\" [class.condition-hide]=\"!prefCdShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"deleteCondition()\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                都道府県\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <select name=\"sel_PrefCd\" class=\"form-control search-dropdown\" [(ngModel)]=\"prefCd\">\n              <option value=\"0\">検索項目を選択</option>\n              <option value=\"1\">北海道</option>\n              <option value=\"2\">青森県</option>\n              <option value=\"3\">岩手県</option>\n              <option value=\"4\">宮城県</option>\n              <option value=\"5\">秋田県</option>\n              <option value=\"6\">山形県</option>\n              <option value=\"7\">福島県</option>\n              <option value=\"8\">茨城県</option>\n              <option value=\"9\">栃木県</option>\n              <option value=\"10\">群馬県</option>\n              <option value=\"11\">埼玉県</option>\n              <option value=\"12\">千葉県</option>\n              <option value=\"13\">東京都</option>\n              <option value=\"14\">神奈川県</option>\n              <option value=\"15\">新潟県</option>\n              <option value=\"16\">富山県</option>\n              <option value=\"17\">石川県</option>\n              <option value=\"18\">福井県</option>\n              <option value=\"19\">山梨県</option>\n              <option value=\"20\">長野県</option>\n              <option value=\"21\">岐阜県</option>\n              <option value=\"22\">静岡県</option>\n              <option value=\"23\">愛知県</option>\n              <option value=\"24\">三重県</option>\n              <option value=\"25\">滋賀県</option>\n              <option value=\"26\">京都府</option>\n              <option value=\"27\">大阪府</option>\n              <option value=\"28\">兵庫県</option>\n              <option value=\"29\">奈良県</option>\n              <option value=\"30\">和歌山県</option>\n              <option value=\"31\">鳥取県</option>\n              <option value=\"32\">島根県</option>\n              <option value=\"33\">岡山県</option>\n              <option value=\"34\">広島県</option>\n              <option value=\"35\">山口県</option>\n              <option value=\"36\">徳島県</option>\n              <option value=\"37\">香川県</option>\n              <option value=\"38\">愛媛県</option>\n              <option value=\"39\">高知県</option>\n              <option value=\"40\">福岡県</option>\n              <option value=\"41\">佐賀県</option>\n              <option value=\"42\">長崎県</option>\n              <option value=\"43\">熊本県</option>\n              <option value=\"44\">大分県</option>\n              <option value=\"45\">宮崎県</option>\n              <option value=\"46\">鹿児島県</option>\n              <option value=\"47\">沖縄県</option>\n            </select>\n          </div>\n        </span>\n        <span [class.condition-show]=\"callDateShow\" [class.condition-hide]=\"!callDateShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"deleteCondition()\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                受付日\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <div class=\"date-div\">\n              <div class=\"input-group\">\n                <!-- <input type=\"text\" class=\"form-control\"> -->\n                <input name=\"txt_callStartDateFrom\" type=\"text\" class=\"form-control\" #dpCallStartDateFrom=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                  [(bsValue)]=\"callStartDateFrom\" value=\"{{callStartDateFrom | date:'yyyy/MM/dd'}}\">\n                <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallStartDateFrom.toggle()\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n            </div>\n            <span class=\"text-center inner-text\">～</span>\n            <div class=\"date-div\">\n              <div class=\"input-group\">\n                <!-- <input type=\"text\" class=\"form-control\"> -->\n                <input name=\"txt_callStartDateTo\" type=\"text\" class=\"form-control\" #dpCallStartDateTo=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                  [(bsValue)]=\"callStartDateTo\" value=\"{{callStartDateTo | date:'yyyy/MM/dd'}}\">\n                <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallStartDateTo.toggle()\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n            </div>\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"incidentTypeShow\" [class.condition-hide]=\"!incidentTypeShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"deleteCondition()\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                インシデント分類\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n            <div class=\"checkbox\">\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeSyougai\" value=\"\" [(ngModel)]=\"incidentTypeSyougai\"> 障害\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeJiko\" value=\"\" [(ngModel)]=\"incidentTypeJiko\"> 事故\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeClaim\" value=\"\" [(ngModel)]=\"incidentTypeClaim\"> クレーム\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeToiawase\" value=\"\" [(ngModel)]=\"incidentTypeToiawase\"> 問合せ\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeInfo\" value=\"\" [(ngModel)]=\"incidentTypeInfo\"> 情報\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeOther\" value=\"\" [(ngModel)]=\"incidentTypeOther\"> その他\n              </label>\n            </div>\n          </div>\n        </span>\n      </div>\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"incidentStsShow\" [class.condition-hide]=\"!incidentStsShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"deleteCondition()\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                ステータス\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n            <div class=\"checkbox\">\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentStatusCall\" value=\"\" [(ngModel)]=\"incidentStatusCall\"> 受付済\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentStatusTaio\" value=\"\" [(ngModel)]=\"incidentStatusTaio\"> 対応入力済\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentStatusAct\" value=\"\" [(ngModel)]=\"incidentStatusAct\"> 処置入力済\n              </label>\n            </div>\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"form-group\">\n                <select name=\"sel_Condition\" #condition class=\"form-control search-dropdown\" [(ngModel)]=\"selCondition\">\n                  <option value=\"0\">検索項目を選択</option>\n                  <option [class.condition-hide]=\"incidentNoShow\" value=\"incidentNoShow\">インシデント番号</option>\n                  <option [class.condition-hide]=\"callContentShow\" value=\"callContentShow\">受付内容</option>\n                  <option [class.condition-hide]=\"parentIncidentNoShow\" value=\"parentIncidentNoShow\">親インシデント番号</option>\n                  <option [class.condition-hide]=\"incidentStartDateTimeShow\" value=\"incidentStartDateTimeShow\">発生日時</option>\n                  <option [class.condition-hide]=\"callDateShow\" value=\"callDateShow\">受付日</option>\n                  <option [class.condition-hide]=\"industryTypeCdShow\" value=\"industryTypeCdShow\">業種区分</option>\n                  <option [class.condition-hide]=\"kijoNmShow\" value=\"kijoNmShow\">機場</option>\n                  <option [class.condition-hide]=\"jigyosyutaiNmShow\" value=\"jigyosyutaiNmShow\">事業主体</option>\n                  <option [class.condition-hide]=\"setubiNmShow\" value=\"setubiNmShow\">設備</option>\n                  <option [class.condition-hide]=\"prefCdShow\" value=\"prefCdShow\">都道府県</option>\n                  <option [class.condition-hide]=\"custNmShow\" value=\"custNmShow\">顧客</option>\n                  <option [class.condition-hide]=\"custTypeCdShow\" value=\"custTypeCdShow\">顧客分類</option>\n                  <option [class.condition-hide]=\"salesDeptNmShow\" value=\"salesDeptNmShow\">営業部門</option>\n                  <option [class.condition-hide]=\"salesUserNmShow\" value=\"salesUserNmShow\">営業担当者</option>\n                  <option [class.condition-hide]=\"relateUserNmShow\" value=\"relateUserNmShow\">関係者</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n          <button type=\"button\" (click)=\"addCondition();\" class=\"btn btn-xs btn-warning\">検索項目を追加</button>\n          <button type=\"button\" (click)=\"conditionSaveModal.openModal(getCondition());\" class=\"btn btn-xs btn-warning\">検索条件を保存</button>\n          <button type=\"button\" (click)=\"conditionDeleteModal.openModal();\" class=\"btn btn-xs btn-warning\" *ngIf=\"showDelFlg\">検索条件を削除</button>\n          <button type=\"button\" disabled=\"true\" class=\"btn btn-xs btn-warning\" *ngIf=\"!showDelFlg\">検索条件を削除</button>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 search-result-info\">\n              検索結果：　{{bigTotalItems}}件\n            </div>\n            <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 transition-button text-right\">\n              <button type=\"button\" (click)=\"excelOutput()\" class=\"btn btn-warning\">\n                <i class=\"fa fa-download\"></i> EXCEL出力</button>\n              <button type=\"button\" (click)=\"search()\" class=\"btn btn-danger\" *ngIf=\"!showKeywordFlg\">\n                <i class=\"fa fa-search\"></i> 検索</button>\n              <button type=\"button\" (click)=\"searchByKeyword()\" class=\"btn btn-danger\" *ngIf=\"showKeywordFlg\">\n                  <i class=\"fa fa-search\"></i> 検索</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n          <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\n            class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\n        </div>\n        <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4 text-right\">\n          <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged()\"> 件/頁\n        </div>\n      </div>\n\n    </form>\n    <div class=\"row\" id=\"search-list\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"panel\">\n          <table class=\"table table-striped list-table\">\n            <thead>\n              <tr>\n                <th class=\"table-header-list incident-no-th\" (click)='sort(\"incidentNo\")'>\n                  インシデント番号 \n                  <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['incidentNoAsc']\" [class.fa-caret-down]=\"orderByParamArray['incidentNoDesc']\"></i>\n                </th>\n                <th class=\"table-header-list\" width=\"25%\" (click)='sort(\"callContent\")'> 受付内容</th>\n                <th class=\"table-header-list\" (click)='sort(\"kijoNm\")'>機場</th>\n                <th class=\"table-header-list\" (click)='sort(\"setubiNm\")'>設備</th>\n                <th class=\"table-header-list\" (click)='sort(\"prefNm\")'>都道府県</th>\n                <th class=\"table-header-list\" (click)='sort(\"incidentStartDateTime\")'>発生日時</th>\n                <th class=\"table-header-list\" (click)='sort(\"callDate\")'>受付日\n                  <i class=\"fa fa-caret-down\"></i>\n                </th>\n                <th class=\"table-header-list\" (click)='sort(\"incidentTypeNm\")'>分類</th>\n                <th class=\"table-header-list\" (click)='sort(\"incidentStatusNm\")'>ステータス</th>\n                <th class=\"table-header-list relate-th\" popover=\"関連プロジェクト\" triggers=\"mouseenter:mouseleave\" (click)='sort(\"relatePj\")'>関連PJ</th>\n                <th class=\"table-header-list relate-th\" popover=\"事故クレーム連絡\" triggers=\"mouseenter:mouseleave\" (click)='sort(\"relateJiko\")'>事ク連絡</th>\n                <th class=\"table-header-list relate-th\" popover=\"現地出動（MR2）\" triggers=\"mouseenter:mouseleave\" (click)='sort(\"relateMr2\")'>現地出動</th>\n                <th class=\"table-header-list relate-th\" (click)='sort(\"relateHiyo\")'>費用決済</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of incidentList | orderBy:order | slice: start: end\">\n                <td class=\"code-list\">\n                  <a routerLink=\"/detail/{{data?.incidentId}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                    <u>{{data?.incidentNo}}</u>\n                  </a>\n                </td>\n                <td class=\"char-list\" popover={{data?.callContent}} triggers=\"mouseenter:mouseleave\">\n                  {{data?.callContent | slice: 0:40 }}\n                  <span *ngIf=\"data?.callContent?.length >= 40\">…</span>\n                </td>\n                <td class=\"char-list\">{{data?.kijoNm}}</td>\n                <td class=\"char-list\">{{data?.setubiNm}}</td>\n                <td class=\"status-list\">{{data?.prefNm}}</td>\n                <td class=\"date-list\">{{data?.incidentStartDateTime}}</td>\n                <td class=\"date-list\">{{data?.callDate}}</td>\n                <td class=\"status-list\">{{data?.incidentTypeNm}}</td>\n                <td class=\"status-list\">{{data?.incidentStatusNm}}</td>\n                <td class=\"status-list\">{{data?.relatePj}}</td>\n                <td class=\"status-list\">{{data?.relateJiko}}</td>\n                <td class=\"status-list\">{{data?.relateMr2}}</td>\n                <td class=\"status-list\">{{data?.relateHiyo}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n        <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\n          class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_bs_moment__ = __webpack_require__("../../../../ngx-bootstrap/bs-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipe_order_by_pipe__ = __webpack_require__("../../../../../src/app/pipe/order.by.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// datepikerの設定
Object(__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_bs_moment__["a" /* defineLocale */])('ja', __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_locale__["a" /* ja */]);


var ListComponent = (function () {
    function ListComponent(route, jsonpService) {
        this.route = route;
        this.jsonpService = jsonpService;
        this.selCondition = "0";
        this.showBackFlg = false;
        this.incidentTypeShow = false;
        this.incidentStsShow = false;
        this.incidentNoShow = false;
        this.callContentShow = false;
        this.parentIncidentNoShow = false;
        this.incidentStartDateTimeShow = false;
        this.callDateShow = false;
        this.industryTypeShow = false;
        this.kijoNmShow = false;
        this.jigyosyutaiNmShow = false;
        this.setubiNmShow = false;
        this.prefCdShow = false;
        this.custNmShow = false;
        this.custTypeShow = false;
        this.salesDeptNmShow = false;
        this.salesUserNmShow = false;
        this.relateUserNmShow = false;
        this.condList = [];
        this.condId = null;
        this.condNm = null;
        this.userId = null;
        this.userName = null;
        this.sectionCd = null;
        this.sectionName = null;
        this.incidentTypeSyougai = null;
        this.incidentTypeJiko = null;
        this.incidentTypeClaim = null;
        this.incidentTypeToiawase = null;
        this.incidentTypeInfo = null;
        this.incidentTypeOther = null;
        this.incidentStatusCall = null;
        this.incidentStatusTaio = null;
        this.incidentStatusAct = null;
        this.parentIncidentNo = null;
        this.incidentStartDateTimeFrom = null;
        this.incidentStartDateTimeTo = null;
        this.industryTypeMachinery = null;
        this.industryTypeElectricalMachinery = null;
        this.industryTypeInstrumentation = null;
        this.industryTypeInfo = null;
        this.industryTypeEnvironment = null;
        this.industryTypeWBC = null;
        this.industryTypeOther = null;
        this.jigyosyutaiNm = null;
        this.prefCd = '0';
        this.custNm = null;
        this.custTypeNenkan = null;
        this.custTypeTenken = null;
        this.custTypeNasi = null;
        this.custTypeKasi = null;
        this.custTypeOther = null;
        this.salesDeptNm = null;
        this.salesUserNm = null;
        this.relateUserNm = null;
        this.incidentList = [];
        this.incidentNo = null;
        this.callContent = null;
        this.kijoNm = null;
        this.setubiNm = null;
        this.prefNm = null;
        this.callStartDateFrom = null;
        this.callStartDateTo = null;
        this.keyword = null;
        this.showKeywordFlg = false;
        this.showDelFlg = true;
        this.condFld = null;
        this.conditionShowArray = [];
        // date pikerの設定
        this.locale = 'ja';
        this.locales = Object(__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_bs_moment__["b" /* listLocales */])();
        // 並び替え処理宣言
        this.order = new __WEBPACK_IMPORTED_MODULE_6__pipe_order_by_pipe__["a" /* OrderByParam */]();
        this.orderByParamArray = {
            'incidentNoAsc': false,
            'incidentNoDesc': false // インシデント番号のソートアイコン　降順
        };
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        this.bsConfig = Object.assign({}, { locale: this.locale });
    }
    ListComponent.prototype.ngOnInit = function () {
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        // ログイン情報設定
        this.userId = "userId";
        this.userName = "userName";
        this.sectionCd = "secCd";
        this.sectionName = "secName";
        // 検索条件のデフォルト設定
        this.setDefaultShow();
        var condId = this.route.snapshot.paramMap.get('condId');
        var keyword = this.route.snapshot.paramMap.get('keyword');
        if (keyword != null) {
            this.showKeywordFlg = true;
            this.keyword = this.transCodeToStr(keyword);
            this.searchByKeyword(keyword);
        }
        else if (condId != null) {
            this.searchCondition(condId);
        }
        else {
            this.searchCondition(0);
        }
    };
    // コードは16位から正常に変換する
    ListComponent.prototype.transCodeToStr = function (data) {
        if (data == '')
            return '';
        data = data.split('\\u');
        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += String.fromCharCode(parseInt(data[i], 16));
        }
        return str;
    };
    // 検索項目削除処理
    ListComponent.prototype.deleteCondition = function () {
    };
    // 検索項目追加処理
    ListComponent.prototype.addCondition = function () {
        var itemNm = this.selCondition;
        switch (itemNm) {
            case 'incidentNoShow':
                this.incidentNoShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'callContentShow':
                this.callContentShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'parentIncidentNoShow':
                this.parentIncidentNoShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'incidentStartDateTimeShow':
                this.incidentStartDateTimeShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'callDateShow':
                this.callDateShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'industryTypeShow':
                this.industryTypeShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'kijoNmShow':
                this.kijoNmShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'jigyosyutaiNmShow':
                this.jigyosyutaiNmShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'setubiNmShow':
                this.setubiNmShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'prefCdShow':
                this.prefCdShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'custNmShow':
                this.custNmShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'custTypeShow':
                this.custTypeShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'salesDeptNmShow':
                this.salesDeptNmShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'salesUserNmShow':
                this.salesUserNmShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'relateUserNmShow':
                this.relateUserNmShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            default:
                break;
        }
    };
    // 検索項目チェック
    ListComponent.prototype.inputCheck = function () {
        if (this.incidentNoShow && !this.lengthCheck("インシデント番号", this.incidentNo, 50)) {
            return false;
        }
        if (this.callContentShow && !this.lengthCheck("受付内容", this.callContent, 100)) {
            return false;
        }
        if (this.parentIncidentNoShow && !this.lengthCheck("親インシデント番号", this.parentIncidentNo, 50)) {
            return false;
        }
        if (this.incidentStartDateTimeShow && !this.lengthCheck("発生日時（開始）", this.incidentStartDateTimeFrom, 20)) {
            return false;
        }
        if (this.incidentStartDateTimeFrom != null) {
            if (this.incidentStartDateTimeShow && !this.dateFormatCheck("発生日時（開始）", this.incidentStartDateTimeFrom)) {
                return false;
            }
        }
        if (this.incidentStartDateTimeShow && !this.lengthCheck("発生日時（終了）", this.incidentStartDateTimeTo, 20)) {
            return false;
        }
        if (this.incidentStartDateTimeTo != null) {
            if (this.incidentStartDateTimeShow && !this.dateFormatCheck("発生日時（終了）", this.incidentStartDateTimeTo)) {
                return false;
            }
        }
        if (this.callDateShow && !this.lengthCheck("受付日（開始）", this.callStartDateFrom, 20)) {
            return false;
        }
        if (this.callStartDateFrom != null) {
            if (this.callDateShow && !this.dateFormatCheck("受付日（開始）", this.callStartDateFrom)) {
                return false;
            }
        }
        if (this.callDateShow && !this.lengthCheck("受付日（終了）", this.callStartDateTo, 20)) {
            return false;
        }
        if (this.callStartDateTo != null) {
            if (this.callDateShow && !this.dateFormatCheck("受付日（終了）", this.callStartDateTo)) {
                return false;
            }
        }
        if (this.kijoNmShow && !this.lengthCheck("機場", this.kijoNm, 50)) {
            return false;
        }
        if (this.jigyosyutaiNmShow && !this.lengthCheck("事業主体", this.jigyosyutaiNm, 50)) {
            return false;
        }
        if (this.setubiNmShow && !this.lengthCheck("設備", this.setubiNm, 50)) {
            return false;
        }
        if (this.custNmShow && !this.lengthCheck("顧客", this.custNm, 50)) {
            return false;
        }
        if (this.salesDeptNmShow && !this.lengthCheck("営業部門", this.salesDeptNm, 50)) {
            return false;
        }
        if (this.salesUserNmShow && !this.lengthCheck("営業担当者", this.salesUserNm, 50)) {
            return false;
        }
        if (this.relateUserNmShow && !this.lengthCheck("関係者", this.relateUserNm, 50)) {
            return false;
        }
        return true;
    };
    // 検索項目取得処理
    ListComponent.prototype.getCondition = function () {
        var conditionArray = new Array();
        if (this.inputCheck()) {
            conditionArray[0] = true;
            // インシデント分類
            conditionArray[1] = this.incidentTypeSyougai;
            conditionArray[2] = this.incidentTypeJiko;
            conditionArray[3] = this.incidentTypeClaim;
            conditionArray[4] = this.incidentTypeToiawase;
            conditionArray[5] = this.incidentTypeInfo;
            conditionArray[6] = this.incidentTypeOther;
            // ステータス
            conditionArray[7] = this.incidentStatusCall;
            conditionArray[8] = this.incidentStatusTaio;
            conditionArray[9] = this.incidentStatusAct;
            // インシデント番号
            conditionArray[10] = this.incidentNo;
            // 受付内容
            conditionArray[11] = this.callContent;
            // 親インシデント番号
            conditionArray[12] = this.parentIncidentNo;
            // 発生日時
            conditionArray[13] = this.getDateStringFromDate(this.incidentStartDateTimeFrom);
            conditionArray[14] = this.getDateStringFromDate(this.incidentStartDateTimeTo);
            // 受付日
            conditionArray[15] = this.getDateStringFromDate(this.callStartDateFrom);
            conditionArray[16] = this.getDateStringFromDate(this.callStartDateTo);
            // 業種区分
            conditionArray[17] = this.industryTypeMachinery;
            conditionArray[18] = this.industryTypeElectricalMachinery;
            conditionArray[19] = this.industryTypeInstrumentation;
            conditionArray[20] = this.industryTypeInfo;
            conditionArray[21] = this.industryTypeEnvironment;
            conditionArray[22] = this.industryTypeWBC;
            conditionArray[23] = this.industryTypeOther;
            // 機場
            conditionArray[24] = this.kijoNm;
            // 事業主体
            conditionArray[25] = this.jigyosyutaiNm;
            // 設備
            conditionArray[26] = this.setubiNm;
            // 都道府県
            conditionArray[27] = this.prefCd;
            // 顧客
            conditionArray[28] = this.custNm;
            // 顧客分類
            conditionArray[29] = this.custTypeNenkan;
            conditionArray[30] = this.custTypeTenken;
            conditionArray[31] = this.custTypeNasi;
            conditionArray[32] = this.custTypeKasi;
            conditionArray[33] = this.custTypeOther;
            // 営業部門
            conditionArray[34] = this.salesDeptNm;
            // 営業担当者
            conditionArray[35] = this.salesUserNm;
            // 関係者
            conditionArray[36] = this.relateUserNm;
            // userId
            conditionArray[37] = this.userId;
            // userName
            conditionArray[38] = this.userName;
            // sectionCd
            conditionArray[39] = this.sectionCd;
            // sectionName
            conditionArray[40] = this.sectionName;
        }
        else {
            conditionArray[0] = false;
        }
        return conditionArray;
    };
    // 登録している検索条件が変更された
    ListComponent.prototype.changeCondition = function () {
        // ヘッダーの検索条件名の表示を更新する
        this.header.searchConditionName();
    };
    // 最大文字数チェック
    ListComponent.prototype.lengthCheck = function (name, val, length) {
        if (val != null && val.length > length) {
            alert(name + "の最大文字数は" + length + "です。");
            return false;
        }
        else {
            return true;
        }
    };
    // 日付フォーマットチェック
    ListComponent.prototype.dateFormatCheck = function (name, date) {
        if (this.getDateStringFromDate(date) == null) {
            alert(name + "は日付型でない。");
            return false;
        }
        return true;
    };
    // 検索条件のデフォルト設定
    ListComponent.prototype.setDefaultShow = function () {
        //インシデント分類
        this.incidentTypeShow = true;
        // ステータス
        this.incidentStsShow = true;
        // インシデント番号
        this.incidentNoShow = true;
        // 受付内容
        this.callContentShow = true;
        // 親インシデント番号
        this.parentIncidentNoShow = false;
        // 発生日時
        this.incidentStartDateTimeShow = false;
        // 受付日
        this.callDateShow = true;
        // 業種区分
        this.industryTypeShow = false;
        // 機場
        this.kijoNmShow = true;
        // 事業主体
        this.jigyosyutaiNmShow = false;
        // 設備
        this.setubiNmShow = true;
        // 都道府県
        this.prefCdShow = true;
        // 顧客
        this.custNmShow = false;
        // 顧客分類
        this.custTypeShow = false;
        // 営業部門
        this.salesDeptNmShow = false;
        // 営業担当者
        this.salesUserNmShow = false;
        // 関係者
        this.relateUserNmShow = false;
    };
    // 検索項目保存処理
    ListComponent.prototype.conditionSave = function () {
    };
    // 検索結果Excel出力処理
    ListComponent.prototype.excelOutput = function () {
    };
    // 検索処理
    ListComponent.prototype.search = function () {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set("incidentNo", this.incidentNo);
        ps.set("callContent", this.callContent);
        ps.set("kijoNm", this.kijoNm);
        ps.set("setubiNm", this.setubiNm);
        ps.set("prefNm", this.prefNm);
        var callStartDateFromStr = this.getDateStringFromDate(this.callStartDateFrom);
        ps.set("callStartDateFrom", callStartDateFromStr);
        var callStartDateToStr = this.getDateStringFromDate(this.callStartDateTo);
        ps.set("callStartDateTo", callStartDateToStr);
        // 検索
        this.jsonpService.requestGet('IncidentListDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log(data);
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 検索処理
    ListComponent.prototype.searchCondition = function (condId) {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set("condId", condId);
        // 検索
        this.jsonpService.requestGet('IncidentListSearchConditionGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log(data);
            if (condId != '0') {
                _this.conditionShowArray = data[data.length - 1];
                for (var i = 0; i < _this.conditionShowArray.length; i++) {
                    var condFld = null;
                    var condVal = null;
                    condFld = _this.conditionShowArray[i]['condFld'];
                    condVal = _this.conditionShowArray[i]['condVal'];
                    _this.setConditionShowAndVal(condFld, condVal);
                }
            }
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1, -1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 設置表示条件と条件値
    ListComponent.prototype.setConditionShowAndVal = function (condFld, condVal) {
        switch (condFld) {
            case "incidentTypeSyougai":
                this.incidentTypeSyougai = true;
                break;
            case "incidentTypeJiko":
                this.incidentTypeJiko = true;
                break;
            case "incidentTypeClaim":
                this.incidentTypeClaim = true;
                break;
            case "incidentTypeToiawase":
                this.incidentTypeToiawase = true;
                break;
            case "incidentTypeInfo":
                this.incidentTypeInfo = true;
                break;
            case "incidentTypeOther":
                this.incidentTypeOther = true;
                break;
            case "incidentStatusCall":
                this.incidentStatusCall = true;
                break;
            case "incidentStatusTaio":
                this.incidentStatusTaio = true;
                break;
            case "incidentStatusAct":
                this.incidentStatusAct = true;
                break;
            case "incidentNo":
                this.incidentNo = condVal;
                break;
            case "callContent":
                this.callContent = condVal;
                break;
            case "parentIncidentNo":
                this.parentIncidentNo = condVal;
                break;
            case "incidentStartDateTimeFrom":
                this.incidentStartDateTimeFrom = condVal;
                break;
            case "incidentStartDateTimeTo":
                this.incidentStartDateTimeTo = condVal;
                break;
            case "callStartDateFrom":
                this.callStartDateFrom = condVal;
                break;
            case "callStartDateTo":
                this.callStartDateTo = condVal;
                break;
            case "industryTypeMachinery":
                this.industryTypeShow = true;
                this.industryTypeMachinery = true;
                break;
            case "industryTypeElectricalMachinery":
                this.industryTypeShow = true;
                this.industryTypeElectricalMachinery = condVal;
                break;
            case "industryTypeInstrumentation":
                this.industryTypeShow = true;
                this.industryTypeInstrumentation = condVal;
                break;
            case "industryTypeInfo":
                this.industryTypeShow = true;
                this.industryTypeInfo = condVal;
                break;
            case "industryTypeEnvironment":
                this.industryTypeShow = true;
                this.industryTypeEnvironment = condVal;
                break;
            case "industryTypeWBC":
                this.industryTypeShow = true;
                this.industryTypeWBC = condVal;
                break;
            case "industryTypeOther":
                this.industryTypeShow = true;
                this.industryTypeOther = condVal;
                break;
            case "kijoNm":
                this.kijoNm = condVal;
                break;
            case "jigyosyutaiNm":
                this.jigyosyutaiNm = condVal;
                break;
            case "setubiNm":
                this.setubiNm = condVal;
                break;
            case "prefCd":
                this.prefCd = condVal;
                break;
            case "custNm":
                this.custNm = condVal;
                break;
            case "custTypeNenkan":
                this.custTypeShow = true;
                this.custTypeNenkan = true;
                break;
            case "custTypeTenken":
                this.custTypeShow = true;
                this.custTypeTenken = true;
                break;
            case "custTypeNasi":
                this.custTypeShow = true;
                this.custTypeNasi = true;
                break;
            case "custTypeKasi":
                this.custTypeShow = true;
                this.custTypeKasi = true;
                break;
            case "custTypeOther":
                this.custTypeShow = true;
                this.custTypeOther = true;
                break;
            case "salesDeptNm":
                this.custNm = condVal;
                break;
            case "salesUserNm":
                this.custNm = condVal;
                break;
            case "relateUserNm":
                this.custNm = condVal;
                break;
            default:
                break;
        }
    };
    // 日付型を日付フォーマット文字列に変更
    ListComponent.prototype.getDateStringFromDate = function (date) {
        if (date && date.getFullYear()) {
            var y = date.getFullYear();
            var m = date.getMonth();
            m++;
            var d = date.getDate();
            // 2018.01.20 Newtouch更新 start
            // return  y + "-" + m + "-" + d + " 00:00:00";
            return y + "-" + m + "-" + d;
            // 2018.01.20 Newtouch更新 end
        }
        else {
            // 日付型でない値の場合
            return null;
        }
    };
    // 詳細画面表示処理
    ListComponent.prototype.showDetail = function () {
    };
    // 画面表示パラメータのセット処理
    ListComponent.prototype.setDspParam = function (data) {
        // ページングの設定
        this.bigTotalItems = data.length;
        this.incidentList = data;
    };
    // this.(window).scroll(function () {
    //   // スクロールイベント
    //   let this_scrollTop = this.(this).scrollTop();
    //   if (this.("#search-list").offset().top - this_scrollTop < 10) {
    //       this.("#newTable").show();
    //   } else {
    //       this.("#newTable").hide();
    //   }
    // });
    // 設置「検索条件を削除」Flg
    ListComponent.prototype.setShowDelFlg = function ($event) {
        if ($event) {
            this.showDelFlg = $event["showDelFlg"];
        }
    };
    // 並び替え処理(並び順指定)
    ListComponent.prototype.sort = function (column) {
        var columnAsc = column + 'Asc';
        var columnDesc = column + 'Desc';
        this.changeOrderBy(columnAsc, columnDesc);
        var orderBy = this.getOrderBy(columnAsc, columnDesc);
        this.order.set(column, orderBy); // ←ソートを行う
        // 切り替え処理
        for (var key in this.orderByParamArray) {
            if (key != columnAsc && key != columnDesc) {
                // 選択していない項目は全て初期化する
                this.orderByParamArray[key] = false;
            }
        }
    };
    // ソート順の取得
    ListComponent.prototype.getOrderBy = function (columnAsc, columnDesc) {
        if (this.orderByParamArray[columnAsc] && !this.orderByParamArray[columnDesc]) {
            return 'ASC';
        }
        else if (!this.orderByParamArray[columnAsc] && this.orderByParamArray[columnDesc]) {
            return 'DESC';
        }
        // 番兵
        this.orderByParamArray[columnAsc] = true;
        this.orderByParamArray[columnDesc] = false;
        return 'ASC';
    };
    // ソート順の変更
    ListComponent.prototype.changeOrderBy = function (columnAsc, columnDesc) {
        if (!this.orderByParamArray[columnAsc] && !this.orderByParamArray[columnDesc]) {
            // 初めて選択→昇順
            this.orderByParamArray[columnAsc] = true;
        }
        else if (this.orderByParamArray[columnAsc] && !this.orderByParamArray[columnDesc]) {
            // 昇順→降順
            this.orderByParamArray[columnAsc] = false;
            this.orderByParamArray[columnDesc] = true;
        }
        else if (!this.orderByParamArray[columnAsc] && this.orderByParamArray[columnDesc]) {
            // 降順→昇順
            this.orderByParamArray[columnAsc] = true;
            this.orderByParamArray[columnDesc] = false;
        }
        else {
            // 番兵
            this.orderByParamArray[columnAsc] = false;
            this.orderByParamArray[columnDesc] = false;
        }
    };
    // ページング処理
    ListComponent.prototype.pageChanged = function (event) {
        this.start = this.itemsPerPage * (this.currentPage - 1);
        var tmpStart = +this.start;
        var tmpItemsPerPage = +this.itemsPerPage;
        this.end = tmpStart + tmpItemsPerPage;
    };
    // キーワードを入力してエンターを押した
    ListComponent.prototype.onKeyWordEnter = function () {
        console.log("キーワード検索処理");
        this.searchByKeyword(this.keyword);
    };
    ListComponent.prototype.searchByKeyword = function (keyword) {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set("keyword", this.keyword);
        // 検索
        this.jsonpService.requestGet('IncidentListDataGetByKeyword.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log(data);
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    return ListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('header'),
    __metadata("design:type", Object)
], ListComponent.prototype, "header", void 0);
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__jsonp_service__["a" /* JsonpService */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/common.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：共通モーダル部品\n//\t作成日付・作成者：2018.01.16 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>{{headerStr}}</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 common-mes\">\n            {{mes}}\n          </div>\n        </div>\n\n        <div class=\"row\" [class.common-enter-btn-show]=\"enterBtnShow\" [class.common-enter-btn-hide]=\"!enterBtnShow\">\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"enter()\">\n              {{enterBtnStr}}\n            </button>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"template.hide()\">\n              {{closeBtnStr}}\n            </button>\n          </div>\n        </div>\n\n        <div class=\"row\" [class.common-enter-btn-show]=\"!enterBtnShow\" [class.common-enter-btn-hide]=\"enterBtnShow\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"template.hide()\">\n              {{closeBtnStr}}\n            </button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/common.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonModalComponent = (function () {
    function CommonModalComponent(modalService) {
        this.modalService = modalService;
        // 自作イベント(親コンポーネントのメソッド呼び出し)
        this.commonEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.enterBtnShow = false; // 処理ボタンの表示フラグ
    }
    // モーダル表示
    CommonModalComponent.prototype.openModal = function (headerStr, mes, enterBtnStr, closeBtnStr) {
        this.setHeaderStr(headerStr);
        this.setMes(mes);
        this.setEnterBtnStr(enterBtnStr);
        this.setCloseBtnStr(closeBtnStr);
        this.template.show();
    };
    // モーダルヘッダー文字列の初期化
    CommonModalComponent.prototype.setHeaderStr = function (headerStr) {
        this.headerStr = headerStr;
    };
    // 表示メッセージの初期化
    CommonModalComponent.prototype.setMes = function (mes) {
        this.mes = mes;
    };
    // 処理ボタンの表示文字列の初期化
    CommonModalComponent.prototype.setEnterBtnStr = function (btnStr) {
        this.enterBtnStr = btnStr;
        if (btnStr) {
            // 処理ボタンの表示文字列がある場合のみ処理ボタンを表示する
            this.enterBtnShow = true;
        }
        else {
            // 処理ボタン非表示
            this.enterBtnShow = false;
        }
    };
    // 閉じるボタンの表示文字列の初期化
    CommonModalComponent.prototype.setCloseBtnStr = function (btnStr) {
        this.closeBtnStr = btnStr;
    };
    // 処理ボタンを押した
    CommonModalComponent.prototype.enter = function () {
        // モーダルを閉じる
        this.template.hide();
        // 親コンポーネントの処理を実行する為に、イベントを発火
        this.commonEnter.emit({});
    };
    return CommonModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], CommonModalComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CommonModalComponent.prototype, "commonEnter", void 0);
CommonModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'common-modal',
        template: __webpack_require__("../../../../../src/app/modal/common.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object])
], CommonModalComponent);

var _a, _b;
//# sourceMappingURL=common.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/conditionDelete.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n//*****************************************************************************\r\n//\tシステム名　　　：インシデント管理システム\r\n//\tサブシステム名　：\r\n//\t画面名　　　　　：検索条件の削除画面\r\n//\t作成日付・作成者：2018.01.04 NEWTOUCH)newtouch\r\n//\t修正履歴　　　　：\r\n//*****************************************************************************\r\n-->\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header bg-danger\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>検索条件の削除</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n\r\n          <div class=\"row\" id=\"search-list\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"panel\">\r\n                <table class=\"table table-striped list-table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"table-header-list\" width=\"25%\">選択</th>\r\n                      <th class=\"table-header-list\">検索条件名</th>\r\n                      <th class=\"table-header-list\">登録日時</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of condList\">\r\n                      <td class=\"status-list\"><input #rdoSel type=\"radio\" name=\"rdoCondId\" value={{data?.condId}} [(ngModel)]=\"rdoCondId\"></td>\r\n                      <td class=\"char-list\">{{data?.condNm}}</td>\r\n                      <td class=\"status-list\">{{data?.insDate}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 save-button text-right\">\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"conditionDelete()\">削除</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/conditionDelete.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionDeleteModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConditionDeleteModalComponent = (function () {
    function ConditionDeleteModalComponent(route, jsonpService) {
        this.route = route;
        this.jsonpService = jsonpService;
        // listイベント(親コンポーネントのメソッド呼び出し)
        this.conDelButtonshowDelFlg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.changeCondition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.condList = [];
        this.rdoCondId = "";
        this.showDelFlg = false;
    }
    // モーダル表示
    ConditionDeleteModalComponent.prototype.openModal = function (condId) {
        var _this = this;
        // パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        // 検索項目の検索
        this.jsonpService.requestGet('IncidentListConditionDelete.php', ps)
            .subscribe(function (data) {
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    data = data.slice(1); // 配列1つ目は、サーバ処理成功フラグなので除外
                    // 通信成功時
                    console.log('成功。');
                    console.log(data);
                    if (data.length == 0) {
                        _this.showDelFlg = false;
                        _this.conDelButtonshowDelFlg.emit({ "showDelFlg": _this.showDelFlg });
                        _this.changeCondition.emit(""); // 検索条件が変更された
                        _this.template.hide();
                    }
                    else {
                        _this.template.show();
                        // 画面表示パラメータのセット処理
                        _this.setDspParam(data);
                        if (condId == null || condId == "") {
                            _this.rdoCondId = data[0].condId;
                        }
                        else {
                            _this.rdoCondId = condId;
                        }
                        _this.showDelFlg = true;
                        _this.conDelButtonshowDelFlg.emit({ "showDelFlg": _this.showDelFlg });
                        _this.changeCondition.emit(""); // 検索条件が変更された
                    }
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    ConditionDeleteModalComponent.prototype.setDspParam = function (data) {
        this.condList = data;
    };
    // 検索項目削除処理
    ConditionDeleteModalComponent.prototype.conditionDelete = function () {
        if (confirm("検索条件を削除します。よろしいですか？")) {
            this.conditionDeleteTrue();
        }
        else {
            window.close();
        }
    };
    // 検索項目削除処理True
    ConditionDeleteModalComponent.prototype.conditionDeleteTrue = function () {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set("condId", this.rdoCondId);
        // 検索項目削除
        this.jsonpService.requestGet('IncidentListConditionDeleteRun.php', ps)
            .subscribe(function (data) {
            if (data[0]['resultFlg'] == '0') {
                // 通信成功時
                console.log('成功。');
                alert(data[0]['resultMsg']);
                _this.openModal(null);
            }
            else {
                alert(data[0]['resultMsg']);
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            alert("削除に失敗しました");
            return false;
        });
    };
    return ConditionDeleteModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], ConditionDeleteModalComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ConditionDeleteModalComponent.prototype, "conDelButtonshowDelFlg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], ConditionDeleteModalComponent.prototype, "changeCondition", void 0);
ConditionDeleteModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'conditionDelete-modal',
        template: __webpack_require__("../../../../../src/app/modal/conditionDelete.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]) === "function" && _d || Object])
], ConditionDeleteModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=conditionDelete.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/conditionSave.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：条件保存モーダル部品\n//\t作成日付・作成者：2017.12.11 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>検索条件の保存</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              検索条件名を入力してください。\n              <input name=\"conditionNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"condNm\">\n              \n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 save-button text-right\">\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"conditionSave()\">保存</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/conditionSave.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionSaveModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConditionSaveModalComponent = (function () {
    function ConditionSaveModalComponent(route, jsonpService) {
        this.route = route;
        this.jsonpService = jsonpService;
        // listイベント(親コンポーネントのメソッド呼び出し)
        this.conDelButtonshowDelFlg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.changeCondition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.hidden_condition = null;
        this.condList = [];
        this.condNm = null;
        this.userId = null;
        this.incidentTypeCd = null;
        this.incidentStsCd = null;
        this.incidentNo = null;
        this.callContent = null;
        this.parentIncidentNo = null;
        this.incidentStartDateTime = null;
        this.callDate = null;
        this.industryTypeCd = null;
        this.kijoNm = null;
        this.jigyosyutaiNm = null;
        this.setubiNm = null;
        this.prefCd = null;
        this.custNm = null;
        this.custTypeCd = null;
        this.salesDeptNm = null;
        this.salesUserNm = null;
        this.relateUserNm = null;
    }
    // モーダル表示
    ConditionSaveModalComponent.prototype.openModal = function (condition) {
        if (condition[0]) {
            this.template.show();
            this.hidden_condition = condition;
        }
    };
    // 検索項目保存処理
    ConditionSaveModalComponent.prototype.conditionSave = function () {
        if (this.condNm == null || this.condNm == "") {
            alert("検索条件名は必須入力。");
            return false;
        }
        if (this.condNm.length > 50) {
            alert("検索条件名の最大文字数は50です。");
            return false;
        }
        if (confirm("検索条件を保存します。よろしいですか？")) {
            this.conditionSaveTrue();
        }
        else {
            window.close();
        }
    };
    // 検索項目保存処理True
    ConditionSaveModalComponent.prototype.conditionSaveTrue = function () {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set("condNm", this.condNm);
        // 検索条件設定
        // インシデント分類
        ps.set("incidentTypeSyougai", this.hidden_condition[1]);
        ps.set("incidentTypeJiko", this.hidden_condition[2]);
        ps.set("incidentTypeClaim", this.hidden_condition[3]);
        ps.set("incidentTypeToiawase", this.hidden_condition[4]);
        ps.set("incidentTypeInfo", this.hidden_condition[5]);
        ps.set("incidentTypeOther", this.hidden_condition[6]);
        // ステータス
        ps.set("incidentStatusCall", this.hidden_condition[7]);
        ps.set("incidentStatusTaio", this.hidden_condition[8]);
        ps.set("incidentStatusAct", this.hidden_condition[9]);
        // インシデント番号
        ps.set("incidentNo", this.hidden_condition[10]);
        // 受付内容
        ps.set("callContent", this.hidden_condition[11]);
        // 親インシデント番号
        ps.set("parentIncidentNo", this.hidden_condition[12]);
        // 発生日時（開始）
        ps.set("incidentStartDateTimeFrom", this.hidden_condition[13]);
        // 発生日時（終了）
        ps.set("incidentStartDateTimeTo", this.hidden_condition[14]);
        // 受付日（開始）
        ps.set("callStartDateFrom", this.hidden_condition[15]);
        // 受付日（終了）
        ps.set("callStartDateTo", this.hidden_condition[16]);
        // 業種区分
        ps.set("industryTypeMachinery", this.hidden_condition[17]);
        ps.set("industryTypeElectricalMachinery", this.hidden_condition[18]);
        ps.set("industryTypeInstrumentation", this.hidden_condition[19]);
        ps.set("industryTypeInfo", this.hidden_condition[20]);
        ps.set("industryTypeEnvironment", this.hidden_condition[21]);
        ps.set("industryTypeWBC", this.hidden_condition[22]);
        ps.set("industryTypeOther", this.hidden_condition[23]);
        // 機場
        ps.set("kijoNm", this.hidden_condition[24]);
        // 事業主体
        ps.set("jigyosyutaiNm", this.hidden_condition[25]);
        // 設備
        ps.set("setubiNm", this.hidden_condition[26]);
        // 都道府県
        if (this.hidden_condition[27] != 0) {
            ps.set("prefCd", this.hidden_condition[27]);
        }
        // 顧客
        ps.set("custNm", this.hidden_condition[28]);
        // 顧客分類
        ps.set("custTypeNenkan", this.hidden_condition[29]);
        ps.set("custTypeTenken", this.hidden_condition[30]);
        ps.set("custTypeNasi", this.hidden_condition[31]);
        ps.set("custTypeKasi", this.hidden_condition[32]);
        ps.set("custTypeOther", this.hidden_condition[33]);
        // 営業部門
        ps.set("salesDeptNm", this.hidden_condition[34]);
        // 営業担当者
        ps.set("salesUserNm", this.hidden_condition[35]);
        // 関係者
        ps.set("relateUserNm", this.hidden_condition[36]);
        // userId
        ps.set("userId", this.hidden_condition[37]);
        // userName
        ps.set("userName", this.hidden_condition[38]);
        // sectionCd
        ps.set("sectionCd", this.hidden_condition[39]);
        // sectionName
        ps.set("sectionName", this.hidden_condition[40]);
        // 検索項目保存
        this.jsonpService.requestGet('IncidentListConditionSave.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log('成功。');
            console.log(data);
            if (data[0]['resultFlg'] == '0') {
                alert(data[0]['resultMsg']);
                _this.conDelButtonshowDelFlg.emit({ "showDelFlg": true });
                _this.changeCondition.emit(""); // 検索条件が変更された
                _this.template.hide();
            }
            else {
                alert(data[0]['resultMsg']);
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            alert('登録に失敗しました');
            return false;
        });
    };
    // 日付型を日付フォーマット文字列に変更
    ConditionSaveModalComponent.prototype.getDateStringFromDate = function (date) {
        if (date && date.getFullYear()) {
            var y = date.getFullYear();
            var m = date.getMonth();
            m++;
            var d = date.getDate();
            return y + "-" + m + "-" + d + " 00:00:00";
        }
        else {
            // 日付型でない値の場合
            return null;
        }
    };
    return ConditionSaveModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], ConditionSaveModalComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ConditionSaveModalComponent.prototype, "conDelButtonshowDelFlg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], ConditionSaveModalComponent.prototype, "changeCondition", void 0);
ConditionSaveModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'conditionSave-modal',
        template: __webpack_require__("../../../../../src/app/modal/conditionSave.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]) === "function" && _d || Object])
], ConditionSaveModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=conditionSave.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/customerSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：機場モーダル部品\n//\t作成日付・作成者：2017.12.22 ADF)Takafumi.Sato\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>顧客の検索</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"clearCustomerSearch()\">\n                リセット\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                <i class=\"fa fa-search\"></i> 検索\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  顧客名\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchPjNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchCustomerNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  顧客コード\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchInqNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchCustomerCd\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\"> 件/頁\n            </div>\n          </div>\n\n          <div class=\"row\" id=\"search-list\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"panel\">\n                <table class=\"table table-striped list-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"table-header-list\"></th>\n                      <th class=\"table-header-list\">顧客名</th>\n                      <th class=\"table-header-list\">顧客コード</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of customerList\">\n                      <td class=\"code-list\">\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                          選択\n                        </button>\n                      </td>\n                      <td class=\"char-list\">{{data.customerNm}}</td>\n                      <td class=\"char-list\">{{data.customerCd}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/customerSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerSearchModalComponent = (function () {
    function CustomerSearchModalComponent(modalService) {
        this.modalService = modalService;
        // 検索条件
        this.searchCustomerNm = "";
        this.searchCustomerCd = "";
        // ページングの設定
        this.maxSize = 5;
        this.bigTotalItems = 100;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.itemsPerPage = 10;
        // TODO 一時表示用　固定インシデント情報 
        this.customerList = [
            {
                "customerNm": "1",
                "customerCd": "2"
            }
        ];
    }
    // ページング処理
    CustomerSearchModalComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    // モーダル表示
    CustomerSearchModalComponent.prototype.openModal = function () {
        this.template.show();
    };
    // 検索条件の初期化
    CustomerSearchModalComponent.prototype.clearCustomerSearch = function () {
        this.searchCustomerNm = "";
        this.searchCustomerCd = "";
    };
    return CustomerSearchModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], CustomerSearchModalComponent.prototype, "template", void 0);
CustomerSearchModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'customerSearch-modal',
        template: __webpack_require__("../../../../../src/app/modal/customerSearch.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object])
], CustomerSearchModalComponent);

var _a;
//# sourceMappingURL=customerSearch.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/equipmentSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：機場モーダル部品\n//\t作成日付・作成者：2017.12.22 ADF)Takafumi.Sato\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>設備の検索</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"clearEquipmentSearch()\">\n                リセット\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                <i class=\"fa fa-search\"></i> 検索\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  検索条件1\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchItem1\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchItem1\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  検索条件2\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchItem2\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchItem2\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  検索条件3\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchItem3\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchItem3\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  検索条件4\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchItem4\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchItem4\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  検索条件5\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchItem5\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchItem5\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\n              検索結果：　100件\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\"> 件/頁\n            </div>\n          </div>\n\n          <div class=\"row\" id=\"search-list\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"panel\">\n                <table class=\"table table-striped list-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"table-header-list\"></th>\n                      <th class=\"table-header-list\">項目1</th>\n                      <th class=\"table-header-list\">項目2</th>\n                      <th class=\"table-header-list\">項目3</th>\n                      <th class=\"table-header-list\">項目4</th>\n                      <th class=\"table-header-list\">項目5</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of equipmentList\">\n                      <td class=\"code-list\">\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                          選択\n                        </button>\n                      </td>\n                      <td class=\"char-list\">{{data.item1}}</td>\n                      <td class=\"char-list\">{{data.item2}}</td>\n                      <td class=\"char-list\">{{data.item3}}</td>\n                      <td class=\"char-list\">{{data.item4}}</td>\n                      <td class=\"char-list\">{{data.item5}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/equipmentSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentSearchModalComponent = (function () {
    function EquipmentSearchModalComponent(modalService) {
        this.modalService = modalService;
        // 検索条件
        this.searchItem1 = "";
        this.searchItem2 = "";
        this.searchItem3 = "";
        this.searchItem4 = "";
        this.searchItem5 = "";
        // ページングの設定
        this.maxSize = 5;
        this.bigTotalItems = 100;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.itemsPerPage = 10;
        // TODO 一時表示用　固定インシデント情報 
        this.equipmentList = [
            {
                "item1": "1",
                "item2": "2",
                "item3": "3",
                "item4": "4",
                "item5": "5"
            }
        ];
    }
    // ページング処理
    EquipmentSearchModalComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    // モーダル表示
    EquipmentSearchModalComponent.prototype.openModal = function () {
        this.template.show();
    };
    // 検索条件の初期化
    EquipmentSearchModalComponent.prototype.clearEquipmentSearch = function () {
        this.searchItem1 = "";
        this.searchItem2 = "";
        this.searchItem3 = "";
        this.searchItem4 = "";
        this.searchItem5 = "";
    };
    return EquipmentSearchModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], EquipmentSearchModalComponent.prototype, "template", void 0);
EquipmentSearchModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'equipmentSearch-modal',
        template: __webpack_require__("../../../../../src/app/modal/equipmentSearch.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object])
], EquipmentSearchModalComponent);

var _a;
//# sourceMappingURL=equipmentSearch.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/incidentSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n//*****************************************************************************\r\n//\tシステム名　　　：インシデント管理システム\r\n//\tサブシステム名　：\r\n//\t画面名　　　　　：インシデントモーダル部品\r\n//\t作成日付・作成者：2018-01-18 · newtouch\r\n//\t修正履歴　　　　：\r\n//*****************************************************************************\r\n-->\r\n\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header bg-danger\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>インシデントの検索</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\r\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"clearIncidentSearch()\">\r\n                リセット\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"search()\">\r\n                <i class=\"fa fa-search\"></i> 検索\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  インシデント番号\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchIncidentNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchIncidentNo\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  受付内容\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchCallContent\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchCallContent\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  受付日\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-7\">\r\n                <div class=\"date-div\">\r\n                  <div class=\"input-group\">\r\n                    <input name=\"txt_callStartDateFrom\" type=\"text\" class=\"form-control\" #dpCallStartDateFrom=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\r\n                      [(bsValue)]=\"searchCallStartDateFrom\" value=\"{{searchCallStartDateFrom | date:'yyyy/MM/dd'}}\">\r\n                    <span class=\"input-group-btn\">\r\n                      <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallStartDateFrom.toggle()\">\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <span class=\"text-center inner-text\">～</span>\r\n                <div class=\"date-div\">\r\n                  <div class=\"input-group\">\r\n                    <input name=\"txt_callStartDateTo\" type=\"text\" class=\"form-control\" #dpCallStartDateTo=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\r\n                      [(bsValue)]=\"searchCallStartDateTo\" value=\"{{searchCallStartDateTo | date:'yyyy/MM/dd'}}\">\r\n                    <span class=\"input-group-btn\">\r\n                      <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallStartDateTo.toggle()\">\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  インシデント分類\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-9 col-md-8 col-sm-8 col-xs-7\">\r\n              <div class=\"checkbox\">\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeSyougai\" type=\"checkbox\" value=\"1\" [(ngModel)]=\"searchIncidentTypeSyougai\"> 障害\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeJiko\" type=\"checkbox\" value=\"2\" [(ngModel)]=\"searchIncidentTypeJiko\"> 事故\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeClaim\"  type=\"checkbox\" value=\"3\" [(ngModel)]=\"searchIncidentTypeClaim\"> クレーム\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeToiawase\"  type=\"checkbox\" value=\"4\" [(ngModel)]=\"searchIncidentTypeToiawase\"> 問合せ\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeInfo\"  type=\"checkbox\" value=\"5\" [(ngModel)]=\"searchIncidentTypeInfo\"> 情報\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeOther\"  type=\"checkbox\" value=\"6\" [(ngModel)]=\"searchIncidentTypeOther\"> その他\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  ステータス\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-9 col-md-8 col-sm-8 col-xs-7\">\r\n              <div class=\"checkbox\">\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentStatusCall\" type=\"checkbox\" value=\"1\" [(ngModel)]=\"searchIncidentStatusCall\"> 受付済\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentStatusTaio\" type=\"checkbox\" value=\"2\" [(ngModel)]=\"searchIncidentStatusTaio\"> 対応入力済\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentStatusAct\" type=\"checkbox\" value=\"3\" [(ngModel)]=\"searchIncidentStatusAct\"> 処置入力済\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\r\n              検索結果：　{{bigTotalItems}}件\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n                <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\r\n                  class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n              </div>\r\n              <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\r\n                <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged()\"> 件/頁\r\n              </div>\r\n            </div>\r\n\r\n          <div class=\"row\" id=\"search-list\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"panel\">\r\n                <table class=\"table table-striped list-table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"table-header-list\"></th>\r\n                      <th class=\"table-header-list incident-no-th\">インシデント番号 </th>\r\n                      <th class=\"table-header-list\" width=\"25%\"> 受付内容</th>\r\n                      <th class=\"table-header-list\">\r\n                        受付日\r\n                        <i class=\"fa fa-caret-down\"></i>\r\n                      </th>\r\n                      <th class=\"table-header-list\"> 分類 </th>\r\n                      <th class=\"table-header-list\"> ステータス </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of incidentList | slice: start: end\">\r\n                      <td class=\"code-list\">\r\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"onSelect(data?.incidentId,data?.incidentNo)\">\r\n                          選択\r\n                        </button>\r\n                      </td>\r\n                      <td class=\"code-list\">{{data.incidentNo}}</td>\r\n                      <td class=\"char-list\">{{data?.callContent | slice: 0:20 }}\r\n                        <span *ngIf=\"data?.callContent.length >= 20\">…</span>\r\n                      </td>\r\n                      <td class=\"date-list\">{{data?.callDate | date:'yyyy/MM/dd'}}</td>\r\n                      <td class=\"status-list\">{{data.incidentTypeString}}</td>\r\n                      <td class=\"status-list\">{{data.incidentStatusString}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n                <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\r\n                  class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n              </div>\r\n            </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/incidentSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncidentSearchModalComponent = (function () {
    function IncidentSearchModalComponent(modalService, jsonpService, datePipe) {
        this.modalService = modalService;
        this.jsonpService = jsonpService;
        this.datePipe = datePipe;
        // インシデント検索イベント
        this.incidentSearchSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // 検索条件
        this.searchIncidentNo = "";
        this.searchCallContent = "";
        this.searchCallStartDateFrom = "";
        this.searchCallStartDateTo = "";
        this.searchIncidentType = "";
        this.searchIncidentTypeSyougai = "";
        this.searchIncidentTypeJiko = "";
        this.searchIncidentTypeClaim = "";
        this.searchIncidentTypeToiawase = "";
        this.searchIncidentTypeInfo = "";
        this.searchIncidentTypeOther = "";
        this.searchIncidentStatus = "";
        this.searchIncidentStatusCall = "";
        this.searchIncidentStatusTaio = "";
        this.searchIncidentStatusAct = "";
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        // インシデント情報検索結果リスト
        this.incidentList = [];
    }
    // ページング処理
    IncidentSearchModalComponent.prototype.pageChanged = function (event) {
        this.start = this.itemsPerPage * (this.currentPage - 1);
        var tmpStart = +this.start;
        var tmpItemsPerPage = +this.itemsPerPage;
        this.end = tmpStart + tmpItemsPerPage;
    };
    // モーダル表示
    IncidentSearchModalComponent.prototype.openModal = function () {
        this.clearIncidentSearch();
        this.template.show();
        this.search();
    };
    // 検索条件の初期化
    IncidentSearchModalComponent.prototype.clearIncidentSearch = function () {
        this.searchIncidentNo = "";
        this.searchCallContent = "";
        this.searchCallStartDateFrom = "";
        this.searchCallStartDateTo = "";
        this.searchIncidentType = "";
        this.searchIncidentTypeSyougai = "";
        this.searchIncidentTypeJiko = "";
        this.searchIncidentTypeClaim = "";
        this.searchIncidentTypeToiawase = "";
        this.searchIncidentTypeInfo = "";
        this.searchIncidentTypeOther = "";
        this.searchIncidentStatus = "";
        this.searchIncidentStatusCall = "";
        this.searchIncidentStatusTaio = "";
        this.searchIncidentStatusAct = "";
    };
    // 検索処理
    IncidentSearchModalComponent.prototype.search = function () {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        ps.set("incidentNo", this.searchIncidentNo);
        ps.set("callContent", this.searchCallContent);
        ps.set("callStartDateFrom", this.datePipe.transform(this.searchCallStartDateFrom, 'yyyy/MM/dd'));
        ps.set("callStartDateTo", this.datePipe.transform(this.searchCallStartDateTo, 'yyyy/MM/dd'));
        ps.set("incidentType", this.searchIncidentType);
        ps.set("incidentTypeSyougai", this.searchIncidentTypeSyougai);
        ps.set("incidentTypeJiko", this.searchIncidentTypeJiko);
        ps.set("incidentTypeClaim", this.searchIncidentTypeClaim);
        ps.set("incidentTypeToiawase", this.searchIncidentTypeToiawase);
        ps.set("incidentTypeInfo", this.searchIncidentTypeInfo);
        ps.set("incidentTypeOther", this.searchIncidentTypeOther);
        ps.set("incidentStatus", this.searchIncidentStatus);
        ps.set("incidentStatusCall", this.searchIncidentStatusCall);
        ps.set("incidentStatusTaio", this.searchIncidentStatusTaio);
        ps.set("incidentStatusAct", this.searchIncidentStatusAct);
        // 検索
        this.jsonpService.commonRequestGet('IncidentListDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.group("IncidentSearchModalComponent.search() success");
            console.log(data);
            console.groupEnd();
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.group("IncidentSearchModalComponent.search() fail");
            console.log('サーバとのアクセスに失敗しました。');
            console.log(error);
            console.groupEnd();
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    IncidentSearchModalComponent.prototype.setDspParam = function (data) {
        // ページングの設定
        this.bigTotalItems = data.length;
        // インシデント情報 リストをセット
        this.incidentList = data;
    };
    // 選択ボタンクリック
    IncidentSearchModalComponent.prototype.onSelect = function (incidentId, incidentNo) {
        // インシデント情報 
        this.incidentSearchSelect.emit({ "incidentId": incidentId, "incidentNo": incidentNo });
        // モーダルの非表示
        this.template.hide();
    };
    return IncidentSearchModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], IncidentSearchModalComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], IncidentSearchModalComponent.prototype, "incidentSearchSelect", void 0);
IncidentSearchModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'incidentSearch-modal',
        template: __webpack_require__("../../../../../src/app/modal/incidentSearch.modal.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]],
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]) === "function" && _d || Object])
], IncidentSearchModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=incidentSearch.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/kijoSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：機場モーダル部品\n//\t作成日付・作成者：2017.12.08 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>機場の検索</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\n              <!--<button type=\"button\" class=\"btn btn-danger btn-mini\">-->\n              <button type=\"button\" (click)=\"clearKijoSearch()\" class=\"btn btn-danger btn-mini\">\n                リセット\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                <i class=\"fa fa-search\"></i> 検索\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  都道府県\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <!--<input type=\"text\" class=\"form-control\">-->\n              <input name=\"searchPrefNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPrefNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  事業主体\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <!--<input type=\"text\" class=\"form-control\">-->\n              <input name=\"searchProjectNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchProjectNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  機場\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <!--<input type=\"text\" class=\"form-control\">-->\n              <input name=\"searchKijoNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchKijoNm\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\n              検索結果：　100件\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\"> 件/頁\n            </div>\n          </div>\n\n          <div class=\"row\" id=\"search-list\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"panel\">\n                <table class=\"table table-striped list-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"table-header-list\"></th>\n                      <th class=\"table-header-list\">都道府県</th>\n                      <th class=\"table-header-list\">事業主体</th>\n                      <th class=\"table-header-list\">機場</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of incidentList\">\n                      <td class=\"code-list\">\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                          選択\n                        </button>\n                      </td>\n                      <td class=\"char-list\">{{data.prefNm}}</td>\n                      <td class=\"char-list\"></td>\n                      <td class=\"char-list\">{{data.kijoNm}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/kijoSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KijoSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KijoSearchModalComponent = (function () {
    function KijoSearchModalComponent(modalService) {
        this.modalService = modalService;
        // 検索条件
        this.searchPrefNm = "";
        this.searchProjectNm = "";
        this.searchKijoNm = "";
        // ページングの設定
        this.maxSize = 5;
        this.bigTotalItems = 100;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.itemsPerPage = 10;
        // TODO 一時表示用　固定インシデント情報 
        this.incidentList = [
            {
                "incidentNo": "2017091000", "incidentStatus": "処置入力済", "incidentType": "障害", "incidentTypeValue": 1,
                "memo": "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。",
                "kijoNm": "秋田市仁井田浄水場", "setubiNm": "XXポンプ",
                "prefNm": "秋田県", "incidentStartDateTime": "2017/09/20", "callDate": "2017/09/20",
                "relatePj": "有", "relateJiko": "", "relateMr2": "有", "relateHiyo": "",
            },
            {
                "incidentNo": "2017091020", "incidentStatus": "処置入力済", "incidentType": "問合せ", "incidentTypeValue": 3,
                "memo": "中央監視装置の障害。",
                "kijoNm": "万世橋浄水場", "setubiNm": "XYポンプ",
                "prefNm": "東京都", "incidentStartDateTime": "2017/09/20", "callDate": "2017/09/20",
                "relatePj": "", "relateJiko": "有", "relateMr2": "有", "relateHiyo": "",
            },
            {
                "incidentNo": "2017091750", "incidentStatus": "対応入力済", "incidentType": "障害", "incidentTypeValue": 1,
                "memo": "中央監視装置の障害。",
                "kijoNm": "秋田浄水場", "setubiNm": "ポンプ",
                "prefNm": "秋田県", "incidentStartDateTime": "2017/09/19", "callDate": "2017/09/19",
                "relatePj": "", "relateJiko": "", "relateMr2": "", "relateHiyo": "有",
            },
            {
                "incidentNo": "2017092050", "incidentStatus": "処置入力済", "incidentType": "問合せ", "incidentTypeValue": 3,
                "memo": "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。",
                "kijoNm": "愛知浄水場", "setubiNm": "ポンプ",
                "prefNm": "愛知県", "incidentStartDateTime": "2017/09/18", "callDate": "2017/09/18",
                "relatePj": "有", "relateJiko": "有", "relateMr2": "", "relateHiyo": "",
            },
            {
                "incidentNo": "2017096020", "incidentStatus": "受付済", "incidentType": "障害", "incidentTypeValue": 1,
                "memo": "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。",
                "kijoNm": "神奈川浄水場", "setubiNm": "ポンプ",
                "prefNm": "神奈川県", "incidentStartDateTime": "2017/09/17", "callDate": "2017/09/17",
                "relatePj": "", "relateJiko": "", "relateMr2": "有", "relateHiyo": "",
            },
            {
                "incidentNo": "2017093000", "incidentStatus": "処置入力済", "incidentType": "障害", "incidentTypeValue": 1,
                "memo": "",
                "kijoNm": "山梨浄水場", "setubiNm": "ポンプ",
                "prefNm": "山梨県", "incidentStartDateTime": "2017/09/16", "callDate": "2017/09/16",
                "relatePj": "", "relateJiko": "", "relateMr2": "有", "relateHiyo": "",
            },
            {
                "incidentNo": "2017091310", "incidentStatus": "受付済", "incidentType": "障害", "incidentTypeValue": 1,
                "memo": "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。",
                "kijoNm": "釧路浄水場", "setubiNm": "送水ポンプ",
                "prefNm": "北海道", "incidentStartDateTime": "2017/09/15", "callDate": "2017/09/15",
                "relatePj": "有", "relateJiko": "有", "relateMr2": "有", "relateHiyo": "",
            },
            {
                "incidentNo": "2017097562", "incidentStatus": "処置入力済", "incidentType": "障害", "incidentTypeValue": 1,
                "memo": "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。",
                "kijoNm": "釧路浄水場", "setubiNm": "送水ポンプ",
                "prefNm": "東京都", "incidentStartDateTime": "2017/09/10", "callDate": "2017/09/10",
                "relatePj": "", "relateJiko": "", "relateMr2": "有", "relateHiyo": "",
            },
            {
                "incidentNo": "2017090534", "incidentStatus": "処置入力済", "incidentType": "事故", "incidentTypeValue": 2,
                "memo": "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。",
                "kijoNm": "北総浄水場", "setubiNm": "床排水ポンプ",
                "prefNm": "千葉県", "incidentStartDateTime": "2017/09/05", "callDate": "2017/09/05",
                "relatePj": "有", "relateJiko": "有", "relateMr2": "", "relateHiyo": "",
            },
            {
                "incidentNo": "2017092234", "incidentStatus": "受付済", "incidentType": "クレーム", "incidentTypeValue": 4,
                "memo": "中央監視装置の障害。西浄化センターにて、10時過ぎから中央監視装置全てからの操作・監視ができなくなった。なお、エラー表示、メッセージ等は出ていない。当方現場に向かっている最中なので詳細は分からない。監視装置(LCD)は4台である。連絡先は、事務所へ願いたい。特に担当者は指定しない。",
                "kijoNm": "福井浄水場", "setubiNm": "送水ポンプ",
                "prefNm": "福井県", "incidentStartDateTime": "2017/09/01", "callDate": "2017/09/01",
                "relatePj": "有", "relateJiko": "", "relateMr2": "有", "relateHiyo": "有",
            }
        ];
    }
    // ページング処理
    KijoSearchModalComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    // モーダル表示
    KijoSearchModalComponent.prototype.openModal = function () {
        this.template.show();
    };
    // 検索条件の初期化
    KijoSearchModalComponent.prototype.clearKijoSearch = function () {
        this.searchPrefNm = "";
        this.searchProjectNm = "";
        this.searchKijoNm = "";
    };
    return KijoSearchModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], KijoSearchModalComponent.prototype, "template", void 0);
KijoSearchModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'kijoSearch-modal',
        template: __webpack_require__("../../../../../src/app/modal/kijoSearch.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object])
], KijoSearchModalComponent);

var _a;
//# sourceMappingURL=kijoSearch.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ボタン */\r\n.btn-mini {\r\n    height: 24px;\r\n    /* width: 22px; */\r\n    padding: 0px 2px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n/* 保存ボタン */\r\n.save-button {\r\n    margin: 5px 0px;\r\n}\r\n\r\n/* モーダルタイトル幅の調整 */\r\n.modal-header{\r\n    padding: 10px;\r\n    border-radius: 6px 6px 0px 0px;\r\n}\r\n\r\n.modal-body {\r\n    background-color: #f8f8f8;\r\n    border-radius: 0px 0px 6px 6px;\r\n}\r\n\r\n/* 検索項目：項目名 */\r\n.input-label {\r\n    height: 22px;\r\n    border-radius: 4px;\r\n    border: 1px solid wheat;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* チェックボックスのマージンを除き、ラベルの高さを合わせる */\r\n.checkbox {\r\n    margin: 0px;\r\n}\r\n\r\n/* 検索一覧画面テーブルのヘッダ */\r\n.table-header-list {\r\n    text-align: center;\r\n}\r\n\r\n/* 検索項目：チェックボックスのレイアウト調整 */\r\n.input-item {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* 検索項目の余計な余白を削る */\r\n.label-padding {\r\n    padding-right: 0px;\r\n}\r\n\r\n/* 検索一覧画面　日付input */\r\n.date-div {\r\n    width: 105px;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n/* 検索一覧画面　要素間の文字(～) */\r\n.inner-text {\r\n    font-size: 16px; \r\n    float:left;\r\n    margin: 0px 5px;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n\r\n/* 共通モーダルのボタングループ */\r\n.common-btn-group {\r\n    text-align: center;\r\n}\r\n\r\n/* 共通モーダルのボタン */\r\n.common-btn {\r\n    text-align: center;\r\n    width: 100px;\r\n}\r\n\r\n/* 共通モーダルのメッセージ */\r\n.common-mes {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n}\r\n\r\n/* 共通モーダル 処理ボタン表示 */\r\n.common-enter-btn-show {\r\n    display: inline;    \r\n}\r\n\r\n/* 共通モーダル 処理ボタン非表示 */\r\n.common-enter-btn-hide {\r\n    display: none;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/projectSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：機場モーダル部品\n//\t作成日付・作成者：2017.12.22 ADF)Takafumi.Sato\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>プロジェクトの検索</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"clearProjectSearch()\">\n                リセット\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                <i class=\"fa fa-search\"></i> 検索\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  PJ番号\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchPjNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPjNo\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  INQ番号\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchInqNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInqNo\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  最終需要家\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchConsumerNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchConsumerNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  総括品\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchSummaryNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSummaryNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\n              検索結果：　100件\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\"> 件/頁\n            </div>\n          </div>\n\n          <div class=\"row\" id=\"search-list\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"panel\">\n                <table class=\"table table-striped list-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"table-header-list\"></th>\n                      <th class=\"table-header-list\">PJ番号</th>\n                      <th class=\"table-header-list\">INQ番号</th>\n                      <th class=\"table-header-list\">最終需要家</th>\n                      <th class=\"table-header-list\">総括品</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of projectList\">\n                      <td class=\"code-list\">\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                          選択\n                        </button>\n                      </td>\n                      <td class=\"char-list\">{{data.pjNo}}</td>\n                      <td class=\"char-list\">{{data.inqNo}}</td>\n                      <td class=\"char-list\">{{data.consumerNm}}</td>\n                      <td class=\"char-list\">{{data.summaryNm}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/projectSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectSearchModalComponent = (function () {
    function ProjectSearchModalComponent(modalService) {
        this.modalService = modalService;
        // 検索条件
        this.searchPjNo = "";
        this.searchInqNo = "";
        this.searchConsumerNm = "";
        this.searchSummaryNm = "";
        // ページングの設定
        this.maxSize = 5;
        this.bigTotalItems = 100;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.itemsPerPage = 10;
        // TODO 一時表示用　固定インシデント情報 
        this.projectList = [
            {
                "pjNo": "1",
                "inqNo": "2",
                "consumerNm": "3",
                "summaryNm": "4"
            }
        ];
    }
    // ページング処理
    ProjectSearchModalComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    // モーダル表示
    ProjectSearchModalComponent.prototype.openModal = function () {
        this.template.show();
    };
    // 検索条件の初期化
    ProjectSearchModalComponent.prototype.clearProjectSearch = function () {
        this.searchPjNo = "";
        this.searchInqNo = "";
        this.searchConsumerNm = "";
        this.searchSummaryNm = "";
    };
    return ProjectSearchModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], ProjectSearchModalComponent.prototype, "template", void 0);
ProjectSearchModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'projectSearch-modal',
        template: __webpack_require__("../../../../../src/app/modal/projectSearch.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object])
], ProjectSearchModalComponent);

var _a;
//# sourceMappingURL=projectSearch.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/relateUserAdd.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：関係者追加モーダル部品\n//\t作成日付・作成者：2017.12.08 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>関係者の追加</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\n              <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                リセット\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                <i class=\"fa fa-search\"></i> 検索\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  氏名(姓)\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  氏名(名)\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  部署名\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  職制コード\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\n              検索結果：　100件\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\"> 件/頁\n            </div>\n          </div>\n\n          <div class=\"row\" id=\"search-list\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"panel\">\n                <table class=\"table table-striped list-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"table-header-list\"></th>\n                      <th class=\"table-header-list\">氏名</th>\n                      <th class=\"table-header-list\">メールアドレス</th>\n                      <th class=\"table-header-list\">役職</th>\n                      <th class=\"table-header-list\">部署名</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of incidentList\">\n                      <td class=\"code-list\">\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                          追加\n                        </button>\n                      </td>\n                      <td class=\"char-list\">{{data.userNm}}</td>\n                      <td class=\"char-list\">{{data.mail}}</td>\n                      <td class=\"char-list\">{{data.post}}</td>\n                      <td class=\"char-list\">{{data.sectionNm}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/relateUserAdd.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelateUserAddModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelateUserAddModalComponent = (function () {
    function RelateUserAddModalComponent(modalService) {
        this.modalService = modalService;
        // ページングの設定
        this.maxSize = 5;
        this.bigTotalItems = 100;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.itemsPerPage = 10;
        // TODO 一時表示用　固定ユーザ情報 
        this.incidentList = [
            {
                "userNm": "担当者_1189", "mail": "kawamoto@adf.co.jp", "post": "部長", "sectionNm": "生産)東京工場",
            },
            {
                "userNm": "担当者_1043", "mail": "kawamoto@adf.co.jp", "post": "", "sectionNm": "生産)東工)盤装置部",
            },
            {
                "userNm": "担当者_5739", "mail": "kawamoto@adf.co.jp", "post": "", "sectionNm": "SIC）東京支店",
            },
            {
                "userNm": "担当者_0109", "mail": "kawamoto@adf.co.jp", "post": "副部長", "sectionNm": "富士電機XXXシステムズ（株）",
            },
            {
                "userNm": "担当者_0272", "mail": "kawamoto@adf.co.jp", "post": "", "sectionNm": "富士電機XXXシステムズ（株）",
            },
            {
                "userNm": "ＵＳ　０００１", "mail": "kawamoto@adf.co.jp", "post": "課長", "sectionNm": "ADF)第一システム部",
            },
            {
                "userNm": "ＵＳ　０００２", "mail": "kawamoto@adf.co.jp", "post": "", "sectionNm": "ADF)第一システム部",
            },
            {
                "userNm": "ＵＳ　０００３", "mail": "kawamoto@adf.co.jp", "post": "", "sectionNm": "ADF)第一システム部",
            },
            {
                "userNm": "ＵＳ　０００４", "mail": "kawamoto@adf.co.jp", "post": "", "sectionNm": "ADF)第一システム部",
            },
            {
                "userNm": "担当者_0111", "mail": "kawamoto@adf.co.jp", "post": "", "sectionNm": "ADF)第一システム部",
            },
        ];
    }
    // ページング処理
    RelateUserAddModalComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    // モーダル表示
    RelateUserAddModalComponent.prototype.openModal = function () {
        this.template.show();
    };
    return RelateUserAddModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], RelateUserAddModalComponent.prototype, "template", void 0);
RelateUserAddModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'relateUserAdd-modal',
        template: __webpack_require__("../../../../../src/app/modal/relateUserAdd.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object])
], RelateUserAddModalComponent);

var _a;
//# sourceMappingURL=relateUserAdd.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/sectionSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：部署モーダル部品\n//\t作成日付・作成者：2017.12.08 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>部門の検索</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\n              <!--<button type=\"button\" class=\"btn btn-danger btn-mini\">-->\n              <button type=\"button\" (click)=\"clearSectionSearch()\" class=\"btn btn-danger btn-mini\">\n                リセット\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                <i class=\"fa fa-search\"></i> 検索\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  職制コード\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <!--<input type=\"text\" class=\"form-control\">-->\n              <input name=\"searchPostCd\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPostCd\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  部署名\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <!--<input type=\"text\" class=\"form-control\">-->\n              <input name=\"searchSectionNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSectionNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  会社\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <!--<input type=\"text\" class=\"form-control\">-->\n              <input name=\"searchCompanyNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchCompanyNm\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\n              検索結果：　100件\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\"> 件/頁\n            </div>\n          </div>\n\n          <div class=\"row\" id=\"search-list\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"panel\">\n                <table class=\"table table-striped list-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"table-header-list\"></th>\n                      <th class=\"table-header-list\">職制コード</th>\n                      <th class=\"table-header-list\">部署名</th>\n                      <th class=\"table-header-list\">会社</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of incidentList\">\n                      <td class=\"code-list\">\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\">\n                          選択\n                        </button>\n                      </td>\n                      <td class=\"char-list\">{{data.postCd}}</td>\n                      <td class=\"char-list\">{{data.sectionNm}}</td>\n                      <td class=\"char-list\">{{data.companyNm}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/sectionSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionSearchModalComponent = (function () {
    function SectionSearchModalComponent(modalService) {
        this.modalService = modalService;
        //検索条件
        this.searchPostCd = "";
        this.searchSectionNm = "";
        this.searchCompanyNm = "";
        // ページングの設定
        this.maxSize = 5;
        this.bigTotalItems = 100;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.itemsPerPage = 10;
        // TODO 一時表示用　固定部門情報 
        this.incidentList = [
            {
                "postCd": "65000", "sectionNm": "機器）シス機器）神戸", "companyNm": "FES神戸",
            },
            {
                "postCd": "65100", "sectionNm": "機器）シス機器）神戸）配電盤設計", "companyNm": "FES神戸",
            },
            {
                "postCd": "KOUNO", "sectionNm": "河野設計室", "companyNm": "河野設計室",
            },
            {
                "postCd": "Q1000", "sectionNm": "生産)東京工場", "companyNm": "FES東工",
            },
            {
                "postCd": "Q1100", "sectionNm": "生産)東工)生産部", "companyNm": "FES東工",
            },
            {
                "postCd": "Q110C", "sectionNm": "生産)東工)生産部)資材課", "companyNm": "FES東工",
            },
            {
                "postCd": "Q110D", "sectionNm": "生産)東工)生産部)作業研究課", "companyNm": "FES東工",
            },
            {
                "postCd": "Q110F", "sectionNm": "生産)東工)生産部)技能ソリューC", "companyNm": "FES東工",
            },
            {
                "postCd": "R5005", "sectionNm": "関西）総務部)大阪", "companyNm": "富士電機システムズ（株）",
            },
            {
                "postCd": "R5006", "sectionNm": "関西）総務部)神戸", "companyNm": "富士電機システムズ（株）",
            },
        ];
    }
    // ページング処理
    SectionSearchModalComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    // モーダル表示
    SectionSearchModalComponent.prototype.openModal = function () {
        this.template.show();
    };
    // 検索条件の初期化
    SectionSearchModalComponent.prototype.clearSectionSearch = function () {
        this.searchPostCd = "";
        this.searchSectionNm = "";
        this.searchCompanyNm = "";
    };
    return SectionSearchModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], SectionSearchModalComponent.prototype, "template", void 0);
SectionSearchModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sectionSearch-modal',
        template: __webpack_require__("../../../../../src/app/modal/sectionSearch.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object])
], SectionSearchModalComponent);

var _a;
//# sourceMappingURL=sectionSearch.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/userSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n//*****************************************************************************\r\n//\tシステム名　　　：インシデント管理システム\r\n//\tサブシステム名　：\r\n//\t画面名　　　　　：ユーザモーダル部品\r\n//\t作成日付・作成者：2017.12.08 ADF)S.Yoshida\r\n//\t修正履歴　　　　：\r\n//*****************************************************************************\r\n-->\r\n\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header bg-danger\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>社員の検索</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\r\n              <!--<button type=\"button\" class=\"btn btn-danger btn-mini\">-->\r\n              <button type=\"button\" (click)=\"clearUserSearch()\" class=\"btn btn-danger btn-mini\">\r\n                リセット\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"search()\">\r\n                <i class=\"fa fa-search\"></i> 検索\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  氏名(姓)\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <!--<input type=\"text\" class=\"form-control\">-->\r\n              <input name=\"searchUserLastNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchUserLastNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  氏名(名)\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <!--<input type=\"text\" class=\"form-control\">-->\r\n              <input name=\"searchUserFirstNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchUserFirstNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  部署名\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <!--<input type=\"text\" class=\"form-control\">-->\r\n              <input name=\"searchSectionNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSectionNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  職制コード\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <!--<input type=\"text\" class=\"form-control\">-->\r\n              <input name=\"searchSectionCd\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSectionCd\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\r\n              検索結果：　{{bigTotalItems}}件\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\r\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\r\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged()\"> 件/頁\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" id=\"search-list\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"panel\">\r\n                <table class=\"table table-striped list-table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"table-header-list\"></th>\r\n                      <th class=\"table-header-list\">氏名</th>\r\n                      <th class=\"table-header-list\">メールアドレス</th>\r\n                      <th class=\"table-header-list\">役職</th>\r\n                      <th class=\"table-header-list\">部署名</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of userList | slice: start: end\">\r\n                      <td class=\"code-list\">\r\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"onSelect(data?.userId, data?.userNm, data?.sectionCd, data?.sectionNm)\">\r\n                          選択\r\n                        </button>\r\n                      </td>\r\n                      <td class=\"char-list\">{{data.userNm}}</td>\r\n                      <td class=\"char-list\">{{data.mail}}</td>\r\n                      <td class=\"char-list\">{{data.postNm}}</td>\r\n                      <td class=\"char-list\">{{data.sectionNm}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\r\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/userSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSearchModalComponent = (function () {
    function UserSearchModalComponent(modalService, jsonpService) {
        this.modalService = modalService;
        this.jsonpService = jsonpService;
        // 営業担当者イベント(親コンポーネントのメソッド呼び出し)
        this.salesUserSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // 検索条件
        this.searchUserLastNm = "";
        this.searchUserFirstNm = "";
        this.searchSectionNm = "";
        this.searchSectionCd = "";
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        // ユーザ検索結果リスト
        this.userList = [];
    }
    // ページング処理
    UserSearchModalComponent.prototype.pageChanged = function (event) {
        this.start = this.itemsPerPage * (this.currentPage - 1);
        var tmpStart = +this.start;
        var tmpItemsPerPage = +this.itemsPerPage;
        this.end = tmpStart + tmpItemsPerPage;
    };
    // モーダル表示
    UserSearchModalComponent.prototype.openModal = function (modalTypeFromParent) {
        if (modalTypeFromParent) {
            // 親コンポーネントからの値受け取り
            this.modalType = modalTypeFromParent;
        }
        this.clearUserSearch();
        this.template.show();
        this.search();
    };
    // 検索条件の初期化
    UserSearchModalComponent.prototype.clearUserSearch = function () {
        this.searchUserLastNm = "";
        this.searchUserFirstNm = "";
        this.searchSectionNm = "";
        this.searchSectionCd = "";
    };
    // 検索処理
    UserSearchModalComponent.prototype.search = function () {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        ps.set("userNmSei", this.searchUserLastNm);
        ps.set("userNmMei", this.searchUserFirstNm);
        ps.set("sectionNm", this.searchSectionNm);
        ps.set("sectionCd", this.searchSectionCd);
        // 検索
        this.jsonpService.commonRequestGet('UserListDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log(data);
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    UserSearchModalComponent.prototype.setDspParam = function (data) {
        // ページングの設定
        this.bigTotalItems = data.length;
        // ユーザリストをセット
        this.userList = data;
    };
    // 選択ボタンクリック
    UserSearchModalComponent.prototype.onSelect = function (userId, userNm, sectionCd, sectionNm) {
        // 営業担当者
        this.salesUserSelect.emit({
            "userSearchType": this.modalType,
            "userId": userId,
            "userNm": userNm,
            "sectionCd": sectionCd,
            "sectionNm": sectionNm
        });
        // モーダルの非表示
        this.template.hide();
    };
    return UserSearchModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('template'),
    __metadata("design:type", Object)
], UserSearchModalComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], UserSearchModalComponent.prototype, "salesUserSelect", void 0);
UserSearchModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'userSearch-modal',
        template: __webpack_require__("../../../../../src/app/modal/userSearch.modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]) === "function" && _c || Object])
], UserSearchModalComponent);

var _a, _b, _c;
//# sourceMappingURL=userSearch.modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/mr2/mr2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* トップ画面テーブルのヘッダ(オレンジ色) */\r\n.table-header {\r\n    text-align: center;\r\n    background-color: moccasin;\r\n}\r\n\r\n/* パネルのタイトルをインライン表示 */\r\n.top-panel-title {\r\n    display: inline;\r\n}\r\n\r\n/* テーブル　固定幅適用　文字列折り返し適用 */\r\n.list-table {\r\n    table-layout:fixed;\r\n    word-wrap: break-word;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n\r\n/* 関連情報有無のヘッダー幅*/\r\n.relate-th {\r\n    width:44px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mr2/mr2.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデントMr2画面\n//\t作成日付・作成者：2017.12.08 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div>\n    <div class=\"container-fluid\">\n        <div class=\"sub-win-content-start\"></div>\n        <div class=\"text-right transition-button\">\n            <span>\n                <button type=\"button\" class=\"btn\" (click)=\"nativeWindow.close();\">\n                    閉じる\n                </button>\n            </span>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading clearfix\">\n                        <span class=\"h3 incident-title-status\">障害対応報告書(MR2)</span>\n                        <div class=\"pull-right\">\n                            <!-- <strong>最終更新日：{{updDate}} {{updUserNm}}</strong> -->\n                            <strong>最終更新日：2017/11/28 21:22 adfユーザ</strong>\n                        </div>\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body context-margin\">\n                        <h5 class=\"context-header\">\n                            <strong>基本情報</strong>\n                        </h5>\n                        <div class=\"setubi-and-cust-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>受付番号：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{incidentNo}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">20171220I001</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>PJ番号：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{PjId}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">J1000000</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>顧客名：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">○○県○○市</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>機場：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{kijoNm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">秋田市仁井田浄水場</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>作成日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/12/20 10:00</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>受付日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{callDate}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/12/20 09:00</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>障害発生日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{StartDate}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/12/19 20:00</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>処理担当部署：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{SectionNm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">サービス）プロ運営</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>検査責任部署：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">サービス）プロ運営）事企</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>検査責任者：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{actSectionNm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">担当者　1054</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>御依頼元担当部署：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">御依頼元担当部署</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>御依頼元担当者：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{actSectionNm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">御依頼元担当者</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>作業担当者：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">作業担当者</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>発行部署：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{actSectionNm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">発行部署</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>MR2状況：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">作業中</div>\n                            </div>\n                        </div>\n                        <h5 class=\"context-header\">\n                            <strong>行動記録</strong>\n                        </h5>\n                        <div class=\"call-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>出発日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{callDate}}</div> -->\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">2017/12/22 02:02</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>到着日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{callDate}}</div> -->\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">2017/12/22 03:06</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>作業開始日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{callDate}}</div> -->\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">2017/12/23 09:00</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>作業終了日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{callDate}}</div> -->\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">2017/12/24 12:00</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>現地出発日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{callDate}}</div> -->\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">2017/12/24 13:00</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>帰着日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{callDate}}</div> -->\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">2017/12/24 14:30</div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼作業情報</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n\n                        <div class=\"row\">\n                            <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>件名：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioDeptNm}}</div> -->\n                            <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">木田水源配水場 2017年度対応</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>設備名：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioTel}}</div> -->\n                            <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">ＡＣ４００Ｖ変圧器盤</div>\n                        </div>\n                        <h5 class=\"context-sub-header\">\n                            <strong>不具合状況</strong>\n                        </h5>\n                        <div class=\"setubi-and-cust-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　トリガー：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-offset-1 col-md-offset-1 col-sm-offset-2 col-xs-offset-2 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\n                                    トリガー状況\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　頻度：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productHindoNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productHindoNm}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-offset-1 col-md-offset-1 col-sm-offset-2 col-xs-offset-2 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                    頻度状況\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　現象：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productGensyoNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productGensyoNm}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-offset-1 col-md-offset-1 col-sm-offset-2 col-xs-offset-2 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                    現象状況\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　状態：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productStatusNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productStatusNm}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-offset-1 col-md-offset-1 col-sm-offset-2 col-xs-offset-2 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                    状態状況\n                                </div>\n                            </div>\n                            <div class=\"info-detail-area\">不具合状況</div>\n                        </div>\n                        <h5 class=\"context-sub-header\">\n                            <strong>設備影響</strong>\n                        </h5>\n                        <div class=\"call-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　設備停止：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">全体</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　データ欠損：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productHindoNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">部分</div>\n                            </div>\n                            <div class=\"info-detail-area\">設備影響</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>調査内容：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioDeptNm}}</div> -->\n                            <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">調査内容</div>\n                        </div>\n                        <h5 class=\"context-sub-header\">\n                            <strong>原因</strong>\n                        </h5>\n                        <div class=\"taio-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　原因特定：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">推定</div>\n                            </div>\n                            <div class=\"info-detail-area\">原因</div>\n                        </div>\n                        <h5 class=\"context-sub-header\">\n                            <strong>処置</strong>\n                        </h5>\n                        <div class=\"action-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　処置方法：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">応急</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　顧客要望：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">有り（その他）</div>\n                            </div>\n                            <div class=\"info-detail-area\">処置</div>\n                        </div>\n                        <h5 class=\"context-header\">\n                            <strong>結果</strong>\n                        </h5>\n                        <div class=\"product-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>　復旧状況：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">部分</div>\n                            </div>\n                            <div class=\"info-detail-area\">結果</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象機器名称：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">対象機器名称</div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>盤名称・記号：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{actSectionNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">盤名称</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>物品処理：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">引取修理</div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>設置場所：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{actSectionNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">木田水源配水場のどこか</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>部品払出：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">顧客予備品</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>払出日：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/12/28</div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>返却日：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{actSectionNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/12/29</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>伝票番号：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{insDate}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">test-1-1-1</div>\n                        </div>\n                        <h5 class=\"context-header\">\n                            <strong>最終検査</strong>\n                        </h5>\n                        <div class=\"relate-user-info-border\">\n                            <div class=\"row\">\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">合</div>\n                            </div>\n                            <div class=\"info-detail-area\">結果</div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼お客様入力欄</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>今回の作業について：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">満足</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>お客様コメント：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">コメント</div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼社内向け入力欄</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象機種区分：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">対象機種区分</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>製作メーカ：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">製作メーカ</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>施工メーカ：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">施工メーカ</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>保守契約：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">有</div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>保守契約(種類)：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{kijoNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">有償</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>確認方法：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">面談</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>障害ランク：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">C.操業に影響 なし </div>\n                        </div>\n                        <h5 class=\"context-header\">\n                            <strong>原因分類</strong>\n                        </h5>\n                        <div class=\"setubi-and-cust-info-border\">\n                            <div class=\"row\">\n                                <!-- <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productStatusNm}}</div> -->\n                                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">ハード</div>\n                            </div>\n                            <div class=\"info-detail-area\">結果</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>社外公開：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">否</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>社内向け連絡事項・補足・備考欄：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">特にございません</div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼改善情報</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>改善情報：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">無し</div>\n                        </div>\n\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼対象CAN</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN1：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">can1</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN2：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">can2</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN3：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">can3</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN4：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">can4</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN5：</strong>\n                            </div>\n                            <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div> -->\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">can5</div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n            </div>\n        </div>\n        <!-- /.row -->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mr2/mr2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mr2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__windowRef_service__ = __webpack_require__("../../../../../src/app/windowRef.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Mr2Component = (function () {
    function Mr2Component(route, jsonpService, winRef) {
        this.route = route;
        this.jsonpService = jsonpService;
        this.winRef = winRef;
        this.mr2Data = [];
        this.nativeWindow = winRef.getNativeWindow();
    }
    Mr2Component.prototype.ngOnInit = function () {
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var mkbId = this.route.snapshot.paramMap.get('mkbId');
        if (mkbId) {
            ps.set('callNo', mkbId); // TODO API TEST用
            ps.set('mkbId', mkbId);
        }
        // 画面表示パラメータの取得処理
        this.jsonpService.pscApiRequestGet('mr2HeadData', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log("受付番号成功");
            console.log(data);
            // if (data[0]) {
            //   let list = data[0];
            //   if (list[0].result !== '' && list[0].result == true) {
            //     // 画面表示パラメータのセット処理
            //     this.setDspParam(list.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
            //   }
            // }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log("受付番号失敗");
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
        // 画面表示パラメータの取得処理
        this.jsonpService.pscApiRequestGet('mr2HeadData', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log("MKBID成功");
            console.log(data);
            // if (data[0]) {
            //   let list = data[0];
            //   if (list[0].result !== '' && list[0].result == true) {
            //     // 画面表示パラメータのセット処理
            //     this.setDspParam(list.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
            //   }
            // }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log("MKBID失敗");
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    Mr2Component.prototype.setDspParam = function (data) {
        this.mr2Data = data;
    };
    return Mr2Component;
}());
Mr2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-mr2',
        template: __webpack_require__("../../../../../src/app/mr2/mr2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mr2/mr2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__windowRef_service__["a" /* WindowRefService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__windowRef_service__["a" /* WindowRefService */]) === "function" && _c || Object])
], Mr2Component);

var _a, _b, _c;
//# sourceMappingURL=mr2.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/order.by.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByParam; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * orderby機能を提供する。
 *
 * sqlで例えると下記機能を提供する
 *  * order by param1 ASC(DESC)
 *  * order by param1 ASC(DESC) , param2 ASC(DESC)
 *
 * example
 * ```
 * // html
 * <ng-container *ngFor="let h of hoge | async | orderBy:order" >
 *   h.param1
 * </ng-container>
 *
 * // component.ts
 * order = new OrderByParam();
 * this.order.set('param1', 'ASC'); // order by param1 ASC
 * this.order.set('param1', 'ASC', 'param2', 'DESC'); // order by param1 ASC , param2 DESC
 * ```
 *
 * 比較する値がnull,undefinedの場合、無限大数とする。もし無限小数としたい場合、nullHandlingMin関数を呼ぶ
 * ```
 * this.order.nullHandlingMin();
 * ```
 * @export
 * @class OrderByPipe
 * @implements {PipeTransform}
 */
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, param) {
        // console.log(param);
        if (!value) {
            return value;
        }
        if (!param) {
            return value;
        }
        if (!param.sortColumn) {
            return value;
        }
        return value.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            var propertyOrderBy = 'ASC';
            _a = [a[param.sortColumn], b[param.sortColumn]], propertyA = _a[0], propertyB = _a[1];
            var valA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valB = isNaN(+propertyB) ? propertyB : +propertyB;
            valA = (valA) ? valA : param.nullHandling;
            valB = (valB) ? valB : param.nullHandling;
            propertyOrderBy = param.orderBy;
            // 同じ値だった場合かつ同一時のカラム指定が存在した場合
            if (valA === valB && param.reserveColumn) {
                _b = [a[param.reserveColumn], b[param.reserveColumn]], propertyA = _b[0], propertyB = _b[1];
                valA = isNaN(+propertyA) ? propertyA : +propertyA;
                valB = isNaN(+propertyB) ? propertyB : +propertyB;
                valA = (valA) ? valA : param.nullHandling;
                valB = (valB) ? valB : param.nullHandling;
                propertyOrderBy = param.reserveOrderBy;
            }
            return (valA > valB ? -1 : 1) * (propertyOrderBy === 'ASC' ? -1 : 1);
            var _a, _b;
        });
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'orderBy',
        pure: false // パラメータが変わった場合にソートを動作させるためにはfalseにしないといけない
    })
], OrderByPipe);

/**
 * ソートする規則を設定する.
 *
 * デフォルトではカラム値がnullもしくはundefineの場合はNumber.MAX_VALUEとして扱う
 * カラム値がnullもしくはundefineの取り扱いをNumber.MIN_VALUEとして扱う場合は{{nullHandlingMin()}}を呼ぶ
 * @export
 * @class OrderByParam
 */
var OrderByParam = (function () {
    /**
     * Creates an instance of OrderByParam.
     * @param {string} [sortColumn] ソート対象カラム名
     * @param {('ASC' | 'DESC')} [orderBy] ソート順(default:ASC(昇順))
     * @memberof OrderByParam
     */
    function OrderByParam(sortColumn, orderBy) {
        this.nullHandling = Number.MAX_VALUE;
        this.nullHandling = Number.MAX_VALUE;
        if (!sortColumn) {
            this.sortColumn = sortColumn;
        }
        if (!orderBy) {
            this.orderBy = 'ASC';
            this.reserveOrderBy = 'ASC';
        }
    }
    /**
     * ソートするカラム名、order順を設定する
     *
     * sortColumnをhoge1、reserveColumnをhoge2にした場合、<code>order by hoge1 ,hoge2</code>と同様になる。
     *
     * @param {string} sortColumn カラム名
     * @param {string} [orderBy] ASC or DESC
     * @param {string} [reserveColumn] カラム名。sortColumnの値が同一だった場合の第二ソートカラム名
     * @param {string} [reserveOrderBy] ASC or DESC
     * @memberof OrderByParam
     */
    OrderByParam.prototype.set = function (sortColumn, orderBy, reserveColumn, reserveOrderBy) {
        this.sortColumn = sortColumn;
        this.orderBy = this.getOrderBy(orderBy);
        if (reserveColumn) {
            this.reserveColumn = reserveColumn;
        }
        if (reserveOrderBy) {
            this.reserveOrderBy = this.getOrderBy(reserveOrderBy);
        }
    };
    /**
     * null,undefined値の取り扱いを{Number.MIN_VALUE}とする
     * @memberof OrderByParam
     */
    OrderByParam.prototype.nullHandlingMin = function () {
        this.nullHandling = Number.MIN_VALUE;
    };
    /**
     * null,undefined値の取り扱いを{Number.MAX_VALUE}とする
     * @memberof OrderByParam
     */
    OrderByParam.prototype.nullHandlingMax = function () {
        this.nullHandling = Number.MAX_VALUE;
    };
    OrderByParam.prototype._changeOrderBy = function () {
        if (this.orderBy === 'ASC') {
            this.orderBy = 'DESC';
        }
        else {
            this.orderBy = 'ASC';
        }
    };
    OrderByParam.prototype.getOrderBy = function (val) {
        if (val === 'ASC') {
            return 'ASC';
        }
        return 'DESC';
    };
    OrderByParam.prototype._setOrderBy = function (val) {
        this.orderBy = this.getOrderBy(val);
    };
    return OrderByParam;
}());

//# sourceMappingURL=order.by.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* トップ画面テーブルのヘッダ(オレンジ色) */\r\n.table-header {\r\n    text-align: center;\r\n    background-color: moccasin;\r\n}\r\n\r\n/* パネルのタイトルをインライン表示 */\r\n.top-panel-title {\r\n    display: inline;\r\n}\r\n\r\n/* テーブル　固定幅適用　文字列折り返し適用 */\r\n.list-table {\r\n    table-layout:fixed;\r\n    word-wrap: break-word;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n\r\n/* 関連情報有無のヘッダー幅*/\r\n.relate-th {\r\n    width:44px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデントプロジェクト画面\n//\t作成日付・作成者：2017.12.11 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div>\n    <div class=\"container-fluid\">\n        <div class=\"sub-win-content-start\"></div>\n        <div class=\"text-right transition-button\">\n            <span>\n                <button type=\"button\" class=\"btn\" (click)=\"nativeWindow.close();\">\n                    閉じる\n                </button>\n            </span>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading clearfix\">\n                        <span class=\"h3 incident-title-status\">プロジェクト情報</span>\n                        <div class=\"pull-right\">\n                            <!-- <strong>最終更新日：{{updDate}} {{updUserNm}}</strong> -->\n                            <strong>最終更新日：2017/11/28 21:22 adfユーザ</strong>\n                        </div>\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body context-margin\">\n                        <h5 class=\"context-header\">\n                            <strong>基本情報</strong>\n                        </h5>\n                        <div class=\"setubi-and-cust-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>プロジェクト番号：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{PjId}}</div> -->\n                                <div class=\"col-lg-6 col-md-6 col-sm-8 col-xs-6\">J1000000</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>プロジェクト名：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{PjNm}}</div> -->\n                                <div class=\"col-lg-6 col-md-6 col-sm-8 col-xs-6\">平成29年度　電気計装設備保守点検業務委託</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>契約先：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Nm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">契約先XXX</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>最終需要家：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Nm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">最終需要家XXX</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>代表機場：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Nm}}</div> -->\n                                <div class=\"col-lg-6 col-md-6 col-sm-8 col-xs-6\">山形県最上郡金山町/羽場配水池</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>都道府県：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Nm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">山形県</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>営業担当者：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Nm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">担当者　8618</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>注文主：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Nm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">モリネット</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>現場代理人：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Nm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\"></div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>現場担当者：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Nm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\"></div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>分野：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Nm}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">電機</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>瑕疵担保期間：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Date}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">24ヶ月</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>受注日：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Date}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">2017/04/01</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n                                    <strong>納期：</strong>\n                                </div>\n                                <!-- <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">{{Date}}</div> -->\n                                <div class=\"col-lg-3 col-md-3 col-sm-8 col-xs-6\">2018/03/31</div>\n                            </div>\n                            <div class=\"info-detail-area\">PJ概要コメント</div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n            </div>\n        </div>\n        <!-- /.row -->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__windowRef_service__ = __webpack_require__("../../../../../src/app/windowRef.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = (function () {
    function ProjectComponent(route, jsonpService, winRef) {
        this.route = route;
        this.jsonpService = jsonpService;
        this.winRef = winRef;
        this.projectData = [];
        this.nativeWindow = winRef.getNativeWindow();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        // // 画面表示パラメータの取得処理
        // this.jsonpService.requestGet('IncidentListDataGet.php', new URLSearchParams())
        // .subscribe(
        // data => {
        //   // 通信成功時
        //   if (data[0]) {
        //     let list = data[0];
        //     if (list[0].result !== '' && list[0].result == true) {
        //       // 画面表示パラメータのセット処理
        //       this.setDspParam(list.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
        //     }
        //   }
        // },
        // error => {
        //   // 通信失敗もしくは、コールバック関数内でエラー
        //   console.log(error);
        //   console.log('サーバとのアクセスに失敗しました。');
        //   return false;
        // }
        // );
    };
    // 画面表示パラメータのセット処理
    ProjectComponent.prototype.setDspParam = function (data) {
        this.projectData = data;
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-project',
        template: __webpack_require__("../../../../../src/app/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project/project.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__jsonp_service__["a" /* JsonpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__windowRef_service__["a" /* WindowRefService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__windowRef_service__["a" /* WindowRefService */]) === "function" && _c || Object])
], ProjectComponent);

var _a, _b, _c;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/top/top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* トップ画面テーブルのヘッダ(オレンジ色) */\r\n.table-header {\r\n    text-align: center;\r\n    background-color: moccasin;\r\n}\r\n\r\n/* パネルのタイトルをインライン表示 */\r\n.top-panel-title {\r\n    display: inline;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n\r\n/* 関連情報有無のヘッダー幅*/\r\n.relate-th {\r\n    width:44px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top/top.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデントTOP画面\n//\tHTML_ID　　　　 ：IncidentTopView.php\n//\t作成日付・作成者：2017.10.05 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<my-header></my-header>\n\n<div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n        <div class=\"row\">\n          <div class=\"\"></div>\n          <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n              キーワード\n          </label>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n        <input #keyword type=\"text\" class=\"form-control\" (keyup.enter)=\"onKeyWordEnter(keyword.value)\" placeholder=\"キーワードを入力\">\n      </div>\n      <div class=\"row\">\n        <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1\">\n          &nbsp;\n        </label>\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"panel panel-danger\">\n          <div class=\"panel-heading\">\n            <h4 class=\"top-panel-title\">\n              <i class=\"fa fa-check\"></i> 最新のインシデント\n            </h4>\n          </div>\n          <table class=\"table table-striped list-table\">\n            <thead>\n              <tr>\n                <th class=\"table-header incident-no-th\">インシデント番号</th>\n                <th class=\"table-header\" width=\"25%\">受付内容</th>\n                <th class=\"table-header\">機場</th>\n                <th class=\"table-header\">設備</th>\n                <th class=\"table-header\">都道府県</th>\n                <th class=\"table-header\">発生日時</th>\n                <th class=\"table-header\">受付日\n                  <i class=\"fa fa-caret-down\"></i>\n                </th>\n                <th class=\"table-header\">分類</th>\n                <th class=\"table-header\">ステータス</th>\n                <th class=\"table-header relate-th\" popover=\"関連プロジェクト\" triggers=\"mouseenter:mouseleave\">関連PJ</th>\n                <th class=\"table-header relate-th\" popover=\"事故クレーム連絡\" triggers=\"mouseenter:mouseleave\">事ク連絡</th>\n                <th class=\"table-header relate-th\" popover=\"現地出動（MR2）\" triggers=\"mouseenter:mouseleave\">現地出動</th>\n                <th class=\"table-header relate-th\">費用決済</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of incidentList\">\n                <td class=\"code-list\">\n                  <a routerLink=\"/detail/{{data?.incidentId}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                    <u>{{data?.incidentNo}}</u>\n                  </a>\n                </td>\n                <td class=\"char-list\" popover={{data?.callContent}} triggers=\"mouseenter:mouseleave\">\n                  {{data?.callContent | slice: 0:40 }}\n                  <span *ngIf=\"data?.callContent?.length >= 40\" >…</span>\n                </td>\n                <td class=\"char-list\">{{data?.kijoNm}}</td>\n                <td class=\"char-list\">{{data?.setubiNm}}</td>\n                <td class=\"status-list\">{{data?.prefNm}}</td>\n                <td class=\"date-list\">{{data?.incidentStartDateTime}}</td>\n                <td class=\"date-list\">{{data?.callDate}}</td>\n                <td class=\"status-list\">{{data?.incidentTypeNm}}</td>\n                <td class=\"status-list\">{{data?.incidentStatusNm}}</td>\n                <td class=\"status-list\">{{data?.relatePj}}</td>\n                <td class=\"status-list\">{{data?.relateJiko}}</td>\n                <td class=\"status-list\">{{data?.relateMr2}}</td>\n                <td class=\"status-list\">{{data?.relateHiyo}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/top/top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopComponent = (function () {
    function TopComponent(route, jsonpService) {
        this.route = route;
        this.jsonpService = jsonpService;
        this.incidentList = [];
    }
    TopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        // 画面表示パラメータの取得処理
        this.jsonpService.requestGet('IncidentListDataGet.php', new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]())
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 詳細画面表示処理
    TopComponent.prototype.showDetail = function () {
    };
    // 画面表示パラメータのセット処理
    TopComponent.prototype.setDspParam = function (data) {
        this.incidentList = data;
    };
    // キーワードを入力してエンターを押した
    TopComponent.prototype.onKeyWordEnter = function (value) {
        console.log("キーワード検索処理");
        console.log(value);
        value = this.encodeUnicode(value);
        window.location.href = 'http://localhost:4200/#/list/k/' + value;
    };
    // コードは16位に変換する
    TopComponent.prototype.encodeUnicode = function (str) {
        var res = [];
        for (var i = 0; i < str.length; i++) {
            res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
        }
        return res.join("\\u");
    };
    return TopComponent;
}());
TopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/top/top.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top/top.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]) === "function" && _b || Object])
], TopComponent);

var _a, _b;
//# sourceMappingURL=top.component.js.map

/***/ }),

/***/ "../../../../../src/app/windowRef.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowRefService = (function () {
    function WindowRefService() {
    }
    WindowRefService.prototype.getNativeWindow = function () {
        return window;
    };
    return WindowRefService;
}());
WindowRefService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WindowRefService);

//# sourceMappingURL=windowRef.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.local.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    envPath: 'http://172.20.108.34/INCIDENT/',
    envCommonPath: 'http://172.20.108.34/COMMONAPI/',
    jikoPath: 'http://172.20.108.34/JIKO/',
    hiyoPath: 'http://172.20.108.34/WORKFLOW/',
    mr2ApiPath: 'http://localhost:8080/wbc-psc-api/PSC/',
};
//# sourceMappingURL=environment.local.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    envPath: '../',
    envCommonPath: 'http://172.20.108.34/COMMONAPI/',
    jikoPath: 'http://172.20.108.34/JIKO/',
    hiyoPath: 'http://172.20.108.34/WORKFLOW/',
    mr2ApiPath: 'http://172.20.108.156:8080/wbc-psc-api/PSC/',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map