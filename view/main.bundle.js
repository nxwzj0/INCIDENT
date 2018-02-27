webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n.container-fluid {\r\n    position: relative !important;\r\n    z-index: -100 !important;\r\n}\r\n\r\n.dropdown-backdrop {\r\n    position: relative !important;\r\n    z-index: 200 !important;\r\n}\r\n*/\r\n\r\n/* ドロップダウンメニューをテキストエリア内に収める(検索画面) */\r\n\r\n.search-dropdown {\r\n    /*height: 35px;*/\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n/* ドロップダウンメニューをテキストエリア内に収める(登録画面) */\r\n\r\n.edit-dropdown {\r\n    /*height: 35px;*/\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(jsonpService, loginService) {
        this.jsonpService = jsonpService;
        this.loginService = loginService;
        this.title = 'app';
        // 共通認証
        this.ninsyo();
    }
    /**
   *  共通認証　ユーザ情報取得処理（失敗したら、ログイン失敗）
   *   return: ユーザ情報
   */
    AppComponent.prototype.ninsyo = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].location === 'server') {
            this.jsonpService.requestGet('IncidentGetSession.php', new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]())
                .subscribe(function (data) {
                // 通信成功時
                if (data && data[0] && data[0].result !== '' && data[0].result == true) {
                    // 認証成功
                    _this.loginService.logIn(data.slice(1));
                }
                else {
                    // 認証に失敗
                    console.log('共通認証に失敗しました。');
                    // 認証画面に遷移する
                    _this.loginService.goLogIn();
                }
            }, function (error) {
                // 通信失敗もしくは、コールバック関数内でエラー
                console.log(error);
                // 認証に失敗
                console.log('共通認証に失敗しました。');
                // 認証画面に遷移する
                _this.loginService.goLogIn();
            });
        }
        else if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].location === 'local') {
            // ローカルの場合は、仮ユーザ
            var userAry = [
                {
                    'loginUserId': 'ADF',
                }
            ];
            this.loginService.logIn(userAry);
        }
        else {
            // 認証に失敗
            console.log('共通認証に失敗しました。');
            // 認証画面に遷移する
            this.loginService.goLogIn();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_component__ = __webpack_require__("../../../../../src/app/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__top_top_component__ = __webpack_require__("../../../../../src/app/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detail_detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__subDetail_subDetail_component__ = __webpack_require__("../../../../../src/app/subDetail/subDetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mr2_mr2_component__ = __webpack_require__("../../../../../src/app/mr2/mr2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_common_component__ = __webpack_require__("../../../../../src/app/common/common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__file_file_component__ = __webpack_require__("../../../../../src/app/file/file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modal_btn_modal_component__ = __webpack_require__("../../../../../src/app/modal/btn.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modal_common_modal_component__ = __webpack_require__("../../../../../src/app/modal/common.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modal_relateUserAdd_modal_component__ = __webpack_require__("../../../../../src/app/modal/relateUserAdd.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modal_incidentSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/incidentSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modal_userSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/userSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modal_sectionSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/sectionSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modal_conditionSave_modal_component__ = __webpack_require__("../../../../../src/app/modal/conditionSave.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modal_conditionDelete_modal_component__ = __webpack_require__("../../../../../src/app/modal/conditionDelete.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__modal_projectSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/projectSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modal_customerSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/customerSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__modal_setubiSearch_modal_component__ = __webpack_require__("../../../../../src/app/modal/setubiSearch.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__loading_loading_component__ = __webpack_require__("../../../../../src/app/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__windowRef_service__ = __webpack_require__("../../../../../src/app/windowRef.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipe_order_by_pipe__ = __webpack_require__("../../../../../src/app/pipe/order.by.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipe_datex_pipe__ = __webpack_require__("../../../../../src/app/pipe/datex.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__top_top_component__["a" /* TopComponent */],
                __WEBPACK_IMPORTED_MODULE_10__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__detail_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__subDetail_subDetail_component__["a" /* SubDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__mr2_mr2_component__["a" /* Mr2Component */],
                __WEBPACK_IMPORTED_MODULE_15__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_18__modal_btn_modal_component__["a" /* BtnModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__modal_common_modal_component__["a" /* CommonModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__modal_relateUserAdd_modal_component__["a" /* RelateUserAddModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__modal_incidentSearch_modal_component__["a" /* IncidentSearchModalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__modal_userSearch_modal_component__["a" /* UserSearchModalComponent */],
                __WEBPACK_IMPORTED_MODULE_23__modal_sectionSearch_modal_component__["a" /* SectionSearchModalComponent */],
                __WEBPACK_IMPORTED_MODULE_24__modal_conditionSave_modal_component__["a" /* ConditionSaveModalComponent */],
                __WEBPACK_IMPORTED_MODULE_25__modal_conditionDelete_modal_component__["a" /* ConditionDeleteModalComponent */],
                __WEBPACK_IMPORTED_MODULE_26__modal_projectSearch_modal_component__["a" /* ProjectSearchModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__modal_customerSearch_modal_component__["a" /* CustomerSearchModalComponent */],
                __WEBPACK_IMPORTED_MODULE_28__modal_setubiSearch_modal_component__["a" /* SetubiSearchModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__common_common_component__["a" /* CommonComponent */],
                __WEBPACK_IMPORTED_MODULE_17__file_file_component__["a" /* FileComponent */],
                __WEBPACK_IMPORTED_MODULE_29__loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pipe_order_by_pipe__["b" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_35__pipe_datex_pipe__["a" /* DatexPipe */]
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
            providers: [__WEBPACK_IMPORTED_MODULE_30__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_31__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_33__windowRef_service__["a" /* WindowRefService */], __WEBPACK_IMPORTED_MODULE_32__post_service__["a" /* PostService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MY_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_component__ = __webpack_require__("../../../../../src/app/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_top_component__ = __webpack_require__("../../../../../src/app/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subDetail_subDetail_component__ = __webpack_require__("../../../../../src/app/subDetail/subDetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mr2_mr2_component__ = __webpack_require__("../../../../../src/app/mr2/mr2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_common_component__ = __webpack_require__("../../../../../src/app/common/common.component.ts");










var myRoutes = [
    { path: 'common/:msg/:nextUrl', component: __WEBPACK_IMPORTED_MODULE_9__common_common_component__["a" /* CommonComponent */], data: { category: 'common' } },
    { path: 'detail/:incidentId', component: __WEBPACK_IMPORTED_MODULE_4__detail_detail_component__["a" /* DetailComponent */], data: { category: 'detail' } },
    { path: 'subDetail/:incidentId', component: __WEBPACK_IMPORTED_MODULE_5__subDetail_subDetail_component__["a" /* SubDetailComponent */], data: { category: 'subDetail' } },
    { path: 'edit/:incidentId', component: __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */], data: { category: 'edit' } },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */], data: { category: 'edit' } },
    { path: 'list/k/:keyword', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */], data: { category: 'list/k' } },
    { path: 'list/c/:condId', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */], data: { category: 'list/c' } },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */], data: { category: 'list' } },
    { path: 'top', component: __WEBPACK_IMPORTED_MODULE_2__top_top_component__["a" /* TopComponent */], data: { category: 'top' } },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_8__project_project_component__["a" /* ProjectComponent */], data: { category: 'project' } },
    { path: 'mr2/:mkbId', component: __WEBPACK_IMPORTED_MODULE_7__mr2_mr2_component__["a" /* Mr2Component */], data: { category: 'mr2' } },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__top_top_component__["a" /* TopComponent */], data: { category: 'top' } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__error_component__["a" /* ErrorComponent */] },
];
var MY_ROUTES = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(myRoutes, { useHash: true });


/***/ }),

/***/ "../../../../../src/app/common/common.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/common.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：共通画面\n//\t作成日付・作成者：2018.01.25 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<my-header></my-header>\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 h2\">\n    {{msg}}\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 h2\">\n    <button type=\"button\" class=\"btn btn-danger\" routerLink=\"{{nextUrl}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\"\n      *ngIf=\"btnShowFlg\">\n      次へ\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/common.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonComponent = /** @class */ (function () {
    function CommonComponent(route) {
        this.route = route;
        this.btnShowFlg = false;
    }
    CommonComponent.prototype.ngOnInit = function () {
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        this.msg = this.route.snapshot.paramMap.get('msg');
        this.nextUrl = this.route.snapshot.paramMap.get('nextUrl');
        if (this.nextUrl) {
            this.btnShowFlg = true;
        }
    };
    CommonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/common/common.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/common.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CommonComponent);
    return CommonComponent;
}());



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

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデント閲覧画面\n//\t作成日付・作成者：2017.10.05 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<loading [loading]=\"isLoading\"></loading>\n<my-header></my-header>\n<relateUserAdd-modal #relateUser (relateUserSelect)=\"onRelateUserSelected($event)\"></relateUserAdd-modal>\n<common-modal #relateUserCommon (commonEnter)=\"relateUserDelete()\"></common-modal>\n<btn-modal #btnModal (commonEnter1)=\"newHiyo('ins','','','','1281')\" (commonEnter2)=\"newHiyo('ins','','','','1282')\"></btn-modal>\n\n<div ng-cloak>\n  <div class=\"container-fluid\">\n    <div class=\"text-right transition-button\">\n      <span>\n        <button type=\"button\" class=\"btn btn-warning\">事故／クレーム連絡登録</button>\n      </span>\n      <span>\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"btnModal.openModal('確認', '費用決済申請の申請区分を選択してください。', '障害対応費用決済申請', 'クレーム対応費用決済申請', '閉じる')\">費用決裁申請登録</button>\n      </span>\n      <span>\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/edit/{{incidentId}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          編集\n        </button>\n      </span>\n      <span>\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/list\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          一覧へ戻る\n        </button>\n      </span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n        <div class=\"panel panel-danger\">\n          <div class=\"panel-heading clearfix\">\n            <span class=\"h3 incident-title-status\">{{incidentNo}}</span>\n            <span class=\"h4 incident-title-status\">　{{incidentStatusNm}} {{incidentTypeNm}}</span>\n            <div class=\"pull-right\">\n              <strong>登録日：{{insDate | datex:'YYYY/MM/DD HH:mm'}} {{insUserNm}}　最終更新日：{{updDate | datex:'YYYY/MM/DD HH:mm'}} {{updUserNm}}</strong>\n            </div>\n          </div>\n          <!-- /.panel-heading -->\n          <div class=\"panel-body context-margin\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>親インシデント番号：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{parentIncidentNo}}</div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>発生日時：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{incidentStartDateTime | datex:'YYYY/MM/DD HH:mm'}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>業種区分：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{industryTypeNm}}</div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>情報提供元：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{infoSourceNm}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>情報提供者：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{infoProvider}}</div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>情報提供TEL：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{infoProvidedTel}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>添付ファイル：</strong>\n              </div>\n              <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                <!-- {{incidentFileNm}} -->\n              </div>\n            </div>\n            <!-- <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>関係者：</strong>\n              </div>\n              <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                <span *ngFor=\"let relateUser of relateList; last as last;\">\n                  {{relateUser.name}}\n                  <span>{{ !last ? ',' : '' }}</span>\n                </span>\n              </div>\n            </div> -->\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>注記：</strong>\n              </div>\n              <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                <!-- TODO:改行コード反映 -->\n                {{memo}}\n              </div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>設備情報及び顧客情報</strong>\n            </h5>\n            <div class=\"setubi-and-cust-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機場：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{kijoNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>事業主体：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{jigyosyutaiNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>設備：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{setubiNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>都道府県：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{prefNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>納入プロジェクト：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{deliveryPjNo}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客分類：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custTypeNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>会社名・所属部署：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custDept}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>依頼者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{requester}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>連絡先(TEL)：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{contactTel}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>連絡先(FAX)：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{contactFax}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>連絡先(E-mail)：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{contactMail}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>営業部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{salesDeptNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>営業担当者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{salesUserNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>主管部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{skanDeptNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>主管担当者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{skanUserNm}}</div>\n              </div>\n\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>受付情報</strong>\n            </h5>\n            <div class=\"call-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付日：</strong>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{callDate | datex:'YYYY/MM/DD'}}</div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-6\">\n                  <strong>開始：</strong>&nbsp;&nbsp;{{callStartDate | datex:'HH:mm'}}&nbsp;&nbsp;&nbsp;&nbsp;\n                  <strong>終了：</strong>&nbsp;&nbsp;{{callEndDate | datex:'HH:mm'}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付部署：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callDeptNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付者：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callUserNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>\n                    <strong>TEL：</strong>\n                  </strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callTel}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>E-mail：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callMail}}</div>\n              </div>\n              <div class=\"info-detail-area\">{{callContent}}</div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>対応情報</strong>\n            </h5>\n            <div class=\"taio-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>対応日：</strong>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{taioDate | datex:'YYYY/MM/DD'}}</div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-6\">\n                  <strong>開始：</strong>&nbsp;&nbsp;{{taioStartDate | datex: 'HH:mm'}}\n                  <strong>&nbsp;&nbsp;&nbsp;&nbsp;終了：</strong>&nbsp;&nbsp;{{taioEndDate | datex: 'HH:mm'}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>対応部署：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioDeptNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>対応者：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioUserNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>TEL：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioTel}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>E-mail：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioMail}}</div>\n              </div>\n              <div class=\"info-detail-area\">{{taioContent}}</div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>処置情報</strong>\n            </h5>\n            <div class=\"action-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置予定日：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actDate | datex:'YYYY/MM/DD'}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置区分：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actTypeNm}} </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置開始日時：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actStartDateTime | datex:'YYYY/MM/DD HH:mm'}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置終了日時：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actEndDateTime | datex:'YYYY/MM/DD HH:mm'}} </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置部署：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actDeptNm}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置者：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actUserNm}} </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>TEL：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actTel}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>E-mail：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actMail}} </div>\n              </div>\n              <div class=\"info-detail-area\">{{actContent}} </div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>製品情報</strong>\n            </h5>\n            <div class=\"product-info-border\">\n              <h5 class=\"context-sub-header\">\n                <strong>対象機種区分</strong>\n              </h5>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　装置分類：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">\n                  {{sotiKbnNm}}\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機種区分：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">\n                  {{kisyuKbnNm}}\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　機種名：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">\n                  {{kisyuNm}}\n                </div>\n              </div>\n              <h5 class=\"context-sub-header\">\n                <strong>障害状況</strong>\n              </h5>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　トリガー：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>頻度：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productHindoNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　現象：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productGensyoNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>状態：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productStatusNm}}</div>\n              </div>\n\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <!-- ::: 2018.01.29 [#33] インシデント関係者の表示・追加・削除 Add Start newtouch -->\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関係者</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>\n                <i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i> 変更を通知する／\n                <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i> 変更を通知しない\n              </strong>\n              <button class=\"\" (click)=\"relateUserAdd()\" style=\"height:28px;\">\n                関係者を追加\n                <i class=\"fa fa-user\"></i>\n              </button>\n            </h5>\n            <div class=\"context-margin\">\n              <ul *ngFor=\"let dept of relateUserList;let deptIdx = index;\" style=\"list-style:none;padding-left: 0px;\">\n                <div>{{dept.relateUserSectionNm}}</div>\n                <li *ngFor=\"let user of dept.relateUsers;let userIdx = index;\">\n                  <div style=\"width:235px;display: inline-block;\">\n                    <span class=\"context-margin relate-user-nm\">\n                      {{user.relateUserNm}}\n                      <span *ngIf=\"user.kidokuDate != ''\">（既読日：{{user.kidokuDate}}）</span>\n                    </span>\n                  </div>\n                  <button type=\"button\" class=\"btn btn-sx-ori btn-danger btn-close\" (click)=\"setDeleteInfo(user?.relateId);relateUserCommon.openModal('確認','関係者を削除します。宜しいですか？','OK','キャンセル')\">\n                    <i class=\"fa fa-trash\"></i>\n                  </button>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n        <!-- ::: 2018.01.29 [#33] インシデント関係者の表示・追加・削除 Add End   newtouch -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関連リンク</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>プロジェクト情報\n                <span class=\"text-danger\">※プロジェクト情報はＡＲＣＳから行なってください。（ＡＲＣＳ登録後の翌日反映）</span>\n              </strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>プロジェクト番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showPj()\">\n                    <u>J1000000</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>PJ主管部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">プロ主管</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>プロジェクト名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>PM：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>代表機場：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>都道府県：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">東京都</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>注文主：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>工期：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\"></div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>障害対応報告書(MR2)</strong>\n            </h5>\n            <div *ngFor=\"let data of MR2List\" class=\"context-margin\">\n              <a (click)=\"showMr2(data?.mkbid)\">\n                <u *ngIf=\"data?.subjectNm.length > 0\">{{data?.subjectNm}}</u>\n                <u *ngIf=\"data?.subjectNm.length == 0\">（件名なし）</u>\n              </a>\n              <div class=\"context-margin\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                    <strong>作成日：</strong>\n                  </div>\n                  <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{data?.makeDate | datex:'YYYY/MM/DD'}}</div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                    <strong>依頼元：</strong>\n                  </div>\n                  <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{data?.requestUserNm}}</div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                    <strong>作業担当者：</strong>\n                  </div>\n                  <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{data?.workUserNm}}</div>\n                </div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>労災・事故・クレーム連絡</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付No:</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showJiko()\">\n                    <u>17122602</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>状態：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">第1報 正式発行</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>区分：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">品質（ランクＡ）</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>概要：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  XXXXXXXXXXXXXXXXXXXXXX\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機場名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>発行日：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/1/1</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>発行元：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>費用決裁申請</strong>\n            </h5>\n            <div *ngFor=\"let data of hiyoList\" class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>ID番号：</strong>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                  <a (click)=\"showHiyo('dsp','dsp',data?.idNo,'', data?.division)\">\n                    <u>{{data?.idNo}}</u>\n                  </a>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>ステータス：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{data?.status}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>区分：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{data?.division}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>件名：</strong>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{data?.subject}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>決裁番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{data?.approvalNo}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>概算金額（千円）：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <div class=\"numbers-list\">{{data?.amount | number}}</div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <br>\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関連インシデント</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>同一機場インシデント</strong>\n            </h5>\n            <div class=\"context-margin\" *ngFor=\"let jikoIdList of relateIncidentKijoIdList\">\n              <a (click)=\"showRelateIncident(jikoIdList?.relateIncidentId)\">\n                <u>#{{jikoIdList?.relateIncidentNo}} {{jikoIdList?.relateIncidentType}} {{jikoIdList?.relateIncidentStartDateTime}}\n                  {{jikoIdList?.relateIncidentKijoNm}} {{jikoIdList?.relateIncidentCustNm}}</u>\n              </a>\n              <div class=\"context-margin\" title=\"{{jikoIdList?.relateIncidentContent}}\">\n                {{jikoIdList?.relateIncidentContent | slice: 0:100 }}\n                <span *ngIf=\"jikoIdList?.relateIncidentContent?.length >= 100\">…</span>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>同一顧客インシデント</strong>\n            </h5>\n            <div class=\"context-margin\" *ngFor=\"let custIdList of relateIncidentCustIdList\">\n              <a (click)=\"showRelateIncident(custIdList?.relateIncidentId)\">\n                <u>#{{custIdList?.relateIncidentNo}} {{custIdList?.relateIncidentType}} {{custIdList?.relateIncidentStartDateTime}}\n                  {{custIdList?.relateIncidentKijoNm}} {{custIdList?.relateIncidentCustNm}}</u>\n              </a>\n              <div class=\"context-margin\" title=\"{{custIdList?.relateIncidentContent}}\">\n                {{custIdList?.relateIncidentContent | slice: 0:100 }}\n                <span *ngIf=\"custIdList?.relateIncidentContent?.length >= 100\">…</span>\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼変更履歴</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <div *ngFor=\"let data of chanegeRev\">\n              <h5 class=\"context-header\">\n                <strong>更新者：{{data?.updUserNm}}({{data?.updDate | datex:'YYYY/MM/DD HH:mm'}})</strong>\n              </h5>\n              <ul>\n                <li *ngFor=\"let changeData of data.DetailList\">\n                  <strong>{{changeData?.key}}</strong>&emsp;{{changeData?.value}}\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__ = __webpack_require__("../../../../../src/environments/environment.local.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, jsonpService, loginService) {
        var _this = this;
        this.route = route;
        this.jsonpService = jsonpService;
        this.loginService = loginService;
        this.isLoading = true;
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
        this.deliveryPjNo = ""; //納入プロジェクト
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
        this.sotiKbnCd = ""; // 装置分類CD
        this.sotiKbnNm = ""; // 装置分類名
        this.kisyuKbnCd = ""; // 機種区分CD
        this.kisyuKbnNm = ""; // 機種区分名
        this.kisyuNm = ""; // 機種名  
        this.productTriggerCd = ""; //障害状況トリガーCD
        this.productTriggerNm = ""; //障害状況トリガー名
        this.productHindoCd = ""; //障害状況頻度CD
        this.productHindoNm = ""; //障害状況頻度名
        this.productGensyoCd = ""; //障害状況現象CD
        this.productGensyoNm = ""; //障害状況現象名
        this.productStatusCd = ""; //障害状況状態CD
        this.productStatusNm = ""; //障害状況状態名
        // 関連インシデント
        this.relateIncidentKijoIdList = []; //同一機場インシデント
        this.relateIncidentCustIdList = []; //同一顧客インシデント
        // ２ー２．障害対応報告(MR2)
        this.MR2List = ""; // MR2リスト
        // ２－４. 費用決裁申請
        // 費用リスト
        this.hiyoList = "";
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
        // インシデント情報 
        this.relateUserList = [];
        /* ログイン情報の取得 */
        this.subscription = loginService.loginUserNm$.subscribe(function (user) { _this.userNm = user; });
        this.subscription = loginService.loginUserId$.subscribe(function (user) { _this.userId = user; });
        this.subscription = loginService.loginUserSectionCd$.subscribe(function (user) { _this.userSectionCd = user; });
        this.subscription = loginService.loginUserSectionNm$.subscribe(function (user) { _this.userSectionNm = user; });
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var prmIncientId = this.route.snapshot.paramMap.get('incidentId');
        if (prmIncientId) {
            this.pageIncidentId = prmIncientId;
            ps.set('incidentId', prmIncientId);
        }
        // ::: 2018.02.01 [#34] 関係者の既読処理 Add Start newtouch
        ps.set('userId', this.userId);
        ps.set('userName', this.userNm);
        ps.set('sectionCd', this.userSectionCd);
        ps.set('sectionName', this.userSectionNm);
        // ::: 2018.02.01 [#34] 関係者の既読処理 Add End   newtouch
        // 画面表示パラメータの取得処理
        this.isLoading = true;
        this.jsonpService.requestGet('IncidentDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1, -1)[0]);
                    // 変更履歴パラメータのセット処理
                    _this.setChangeRev(data.slice(2)[0]);
                    // 関連リンク 障害対応報告書(MR2) 取得
                    _this.findMr2List(_this.incidentNo);
                    // 関連リンク 費用決裁申請　取得
                    _this.findHiyoList(_this.incidentId);
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
        // 画面表示パラメータ(関連インシデント)の取得処理
        this.jsonpService.requestGet('RelateIncidentGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                var relateIncidentKijoId = data['relateIncidentKijiIdAry'];
                var relateIncidentCustId = data['relateIncidentCustIdAry'];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParamRelateIncident(relateIncidentKijoId, relateIncidentCustId);
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        // 親サービスDIの影響 メモリリーク防止
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    //MR2情報を取得する
    DetailComponent.prototype.findMr2List = function (incidentNo) {
        var _this = this;
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        if (incidentNo) {
            ps.set('callNo', incidentNo);
        }
        // 画面表示パラメータの取得処理
        this.isLoading = true;
        this.jsonpService.requestGet('mr2ListDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log("受付番号成功");
            console.log(data);
            if (data[0]) {
                if (data[0].result !== '' && data[0].result == true) {
                    // 画面表示パラメータのセット処理
                    var mr2Data = data.slice(1);
                    _this.setMr2DspParam(mr2Data); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    //費用情報を取得する
    DetailComponent.prototype.findHiyoList = function (incidentId) {
        var _this = this;
        console.log("費用情報成功");
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        if (incidentId) {
            ps.set('incidentId', incidentId);
        }
        // 画面表示パラメータの取得処理
        this.isLoading = true;
        this.jsonpService.commonRequestGet('HiyoKessaiListDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log("ID番号成功");
            console.log(data);
            if (data[0]) {
                if (data[0].result !== '' && data[0].result == true) {
                    // 画面表示パラメータのセット処理
                    var hiyoData = data.slice(1);
                    _this.setHiyoDspParam(hiyoData); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
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
    DetailComponent.prototype.showMr2 = function (mkbid) {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        this.SUB_WIN = this.CMN_openNewWindow1("./#/mr2/" + mkbid, "sub_mr2", 1000, 760);
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
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__["a" /* environment */].jikoPath + "jiko171211.html"; // 環境に合わせたURLを作成する TODO:固定値
        this.SUB_WIN = this.CMN_openNewWindow1(url, "sub_jiko", 1200, 800);
    };
    // 費用決済申請 新規登録画面表示処理
    DetailComponent.prototype.newHiyo = function (status, division, idno, bno, sysId) {
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__["a" /* environment */].hiyoPath + "wf_main_input.php?"; // 環境に合わせたURLを作成する
        url += "&user_id=" + this.userId; //従業員コード
        url += "&com_id=" + this.userSectionCd; //職制コード
        url += "&authority=0";
        url += "&logintype=1";
        url += "&base_id=";
        url += "&system_id=" + sysId;
        url += "&status=ins";
        url += "&win_kbn=1";
        url += "&ident_id=" + this.incidentId;
        this.SUB_WIN = this.CMN_openNewWindow1(url, "WF_EDIT", 1200, 800);
        return;
    };
    // 関連費用決済申請表示処理 TODO:固定値表示
    DetailComponent.prototype.showHiyo = function (status, division, idno, bno, system_mode) {
        if (system_mode == "障害対応") {
            this.system_id = "1281";
        }
        else if (system_mode == "クレーム対応") {
            this.system_id = "1282";
        }
        // var frm = window.document.fm1;
        var strurl;
        strurl = __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__["a" /* environment */].hiyoPath + "wf_main_input.php";
        strurl += "?user_id=ADF";
        strurl += "&authority=9";
        //	strurl += "&system_id=1282";
        strurl += "&system_id=" + this.system_id;
        strurl += "&status=" + status;
        strurl += "&division=" + division;
        strurl += "&idno=" + idno;
        strurl += "&win_kbn=1";
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
    DetailComponent.prototype.showRelateIncident = function (relateIncidentId) {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        this.SUB_WIN = this.CMN_openNewWindow1("./#/subDetail/" + relateIncidentId, "sub_detail", 1000, 760);
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
        this.deliveryPjNo = data.deliveryPjNo; //納入プロジェクト
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
        this.sotiKbnCd = data.sotiKbnCd; //装置分類CD
        this.sotiKbnNm = data.sotiKbnNm; //装置分類名
        this.kisyuKbnCd = data.kisyuKbnCd; //機種区分CD
        this.kisyuKbnNm = data.kisyuKbnNm; //機種区分名
        this.kisyuNm = data.kisyuNm; //機種名
        this.productTriggerCd = data.productTriggerCd; //障害状況トリガーCD
        this.productTriggerNm = data.productTriggerNm; //障害状況トリガー名
        this.productHindoCd = data.productHindoCd; //障害状況頻度CD
        this.productHindoNm = data.productHindoNm; //障害状況頻度名
        this.productGensyoCd = data.productGensyoCd; //障害状況現象CD
        this.productGensyoNm = data.productGensyoNm; //障害状況現象名
        this.productStatusCd = data.productStatusCd; //障害状況状態CD
        this.productStatusNm = data.productStatusNm; //障害状況状態名
        // ::: 2018.01.26 [#33] インシデント関係者の表示・追加・削除 Add Start newtouch
        this.initRelateUserList(data.relateUserList);
        // ::: 2018.01.26 [#33] インシデント関係者の表示・追加・削除 Add End   newtouch
    };
    // 画面表示パラメータ(関連インシデント)のセット処理
    DetailComponent.prototype.setDspParamRelateIncident = function (relateIncidentKijoId, relateIncidentCustId) {
        this.relateIncidentKijoIdList = relateIncidentKijoId;
        this.relateIncidentCustIdList = relateIncidentCustId;
    };
    // 画面表示パラメータのセット処理
    DetailComponent.prototype.setMr2DspParam = function (data) {
        this.MR2List = data;
    };
    // 画面表示パラメータのセット処理
    DetailComponent.prototype.setHiyoDspParam = function (data) {
        this.hiyoList = data;
    };
    // 変更履歴パラメータのセット処理
    DetailComponent.prototype.setChangeRev = function (data) {
        this.chanegeRev = data;
    };
    // それが空であるかどうかを判断する
    DetailComponent.prototype.isEmpty = function (str) {
        return str == null || str == undefined || str == "" ? true : false;
    };
    // インシデント関係者 
    DetailComponent.prototype.initRelateUserList = function (relateUserArray) {
        this.relateUserList = [];
        var length = relateUserArray.length;
        if (relateUserArray.length > 0) {
            for (var i = 0; i < length; i++) {
                var sectionObj = {};
                var section = relateUserArray[i];
                if (!this.isEmpty(section.relateUserSectionCd)) {
                    if (this.isDeptExist(section.relateUserSectionCd, section.relateUserSectionNm) != -1) {
                        continue;
                    }
                    sectionObj["relateUserSectionCd"] = section.relateUserSectionCd;
                    sectionObj["relateUserSectionNm"] = section.relateUserSectionNm;
                    var userList = [];
                    for (var j = 0; j < length; j++) {
                        var userObj = {};
                        var user = relateUserArray[j];
                        if (!this.isEmpty(user.relateUserId)) {
                            if (user.relateUserSectionCd == section.relateUserSectionCd && user.relateUserSectionNm == section.relateUserSectionNm) {
                                userObj["relateId"] = user.relateId;
                                userObj["relateUserId"] = user.relateUserId;
                                userObj["relateUserNm"] = user.relateUserNm;
                                userObj["kidokuDate"] = user.kidokuDate;
                                userList.push(userObj);
                            }
                        }
                    }
                    sectionObj["relateUsers"] = userList;
                    this.relateUserList.push(sectionObj);
                }
            }
        }
    };
    // インシデント関係者 
    DetailComponent.prototype.findRelateUser = function () {
        var _this = this;
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set('incidentId', this.pageIncidentId);
        // 画面表示パラメータの取得処理
        this.jsonpService.requestGet('IncidentDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.initRelateUserList(data.slice(1, -1)[0].relateUserList);
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 部門が既に存在するかどうかを判断する
    DetailComponent.prototype.isDeptExist = function (targetCd, targetNm) {
        var index = -1;
        for (var i = 0; i < this.relateUserList.length; i++) {
            var tmpCd = this.relateUserList[i].relateUserSectionCd.toString();
            var tmpNm = this.relateUserList[i].relateUserSectionNm.toString();
            if (tmpCd == targetCd.toString() && tmpNm == targetNm.toString()) {
                index = i;
            }
        }
        return index;
    };
    DetailComponent.prototype.setDeleteInfo = function (relateId) {
        this.delRelateId = relateId;
    };
    // インシデント関係者の削除
    DetailComponent.prototype.relateUserDelete = function () {
        var _this = this;
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set('relateId', this.delRelateId);
        // ログイン情報設定
        ps.set('userId', this.userId);
        ps.set('userName', this.userNm);
        ps.set('sectionCd', this.userSectionCd);
        ps.set('sectionName', this.userSectionNm);
        // 検索
        this.jsonpService.requestGet('IncidentRelateUserDelete.php', ps)
            .subscribe(function (data) {
            if (data[0]['resultFlg'] == '0') {
                // 通信成功時 
                _this.findRelateUser();
            }
            else {
                alert(data[0]['resultMsg']);
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // ================= フロントデスク削除処理 =================
    // ================= 関係者を追加=================
    // 関係者を追加button
    DetailComponent.prototype.relateUserAdd = function () {
        this.relateUser.openModal(this.pageIncidentId);
    };
    // インシデント関係者の追加
    DetailComponent.prototype.onRelateUserSelected = function ($event) {
        var _this = this;
        if ($event) {
            var salesUserId = $event["userId"];
            var salesUserNm = $event["userNm"];
            var salesDeptCd = $event["sectionCd"];
            var salesDeptNm = $event["sectionNm"];
            var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
            ps.set('incidentId', this.pageIncidentId);
            ps.set('relateUserId', salesUserId);
            ps.set('relateUserNm', salesUserNm);
            ps.set('relateUserSectionCd', salesDeptCd);
            ps.set('relateUserSectionNm', salesDeptNm);
            // ログイン情報設定
            ps.set('userId', this.userId);
            ps.set('userName', this.userNm);
            ps.set('sectionCd', this.userSectionCd);
            ps.set('sectionName', this.userSectionNm);
            // 検索
            this.jsonpService.requestGet('IncidentRelateUserSave.php', ps)
                .subscribe(function (data) {
                if (data[0]['resultFlg'] == '0') {
                    // 通信成功時
                    _this.findRelateUser();
                }
                else {
                    alert(data[0]['resultMsg']);
                }
            }, function (error) {
                // 通信失敗もしくは、コールバック関数内でエラー
                console.log(error);
                console.log('サーバとのアクセスに失敗しました。');
                return false;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('common'),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "common", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('relateUser'),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "relateUser", void 0);
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/detail/detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], DetailComponent);
    return DetailComponent;
}());



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

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデント登録画面\n//\tHTML_ID　　　　 ：IncidentEditView.php\n//\t作成日付・作成者：2017.10.05 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<loading [loading]=\"isLoading\"></loading>\n<my-header (headerEdit)=\"reloadEdit($event)\"></my-header>\n<common-modal #common (commonEnter)=\"onEntry($event, iFile.files)\"></common-modal>\n<common-modal #errorModal></common-modal>\n<incidentSearch-modal #incident (incidentSearchSelect)=\"onIncidentSearchSelected($event)\"></incidentSearch-modal>\n<userSearch-modal #salesUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<userSearch-modal #skanUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<userSearch-modal #callUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<userSearch-modal #taioUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<userSearch-modal #actUser (salesUserSelect)=\"onSalesUserSelected($event)\"></userSearch-modal>\n<sectionSearch-modal #salesSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<sectionSearch-modal #skanSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<sectionSearch-modal #callSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<sectionSearch-modal #taioSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<sectionSearch-modal #actSection (salesSectionSelect)=\"onSalesSectionSelected($event)\"></sectionSearch-modal>\n<projectSearch-modal #project (projectSearchSelect)=\"onProjectSearchSelected($event)\"></projectSearch-modal>\n<!-- ::: 2018.02.05 [#35] 入力補助モーダル　取引先 Add Start newtouch -->\n<customerSearch-modal #customer (customerSearchSelect)=\"onCustomerSearchSelected($event)\"></customerSearch-modal>\n<!-- ::: 2018.02.05 [#35] 入力補助モーダル　取引先 Add End   newtouch -->\n<setubiSearch-modal #setubi (setubiSelect)=\"onSetubiSelected($event)\"></setubiSearch-modal>\n\n<div id=\"editApp\">\n  <div ng-controller=\"EditController as main\" class=\"container-fluid\">\n    <div class=\"text-right transition-button\">\n      <span>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"common.openModal('確認','編集内容を登録します。宜しいですか？','OK','キャンセル')\" type=\"submit\"\n          value=\"登録\">登録</button>\n        <!-- <button type=\"button\" (click)=\"reset('all')\" class=\"btn\"> リセット</button> -->\n      </span>\n      <span>\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/detail/{{incidentId}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\"\n          *ngIf=\"incidentId\">\n          閲覧へ戻る\n        </button>\n      </span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"panel panel-danger\">\n          <div class=\"panel-heading clearfix\">\n            <span class=\"h3 incident-title-status\">{{incidentNo}}</span>\n            <span class=\"h4 incident-title-status\">　{{incidentStatusNm}}</span>\n            <div class=\"pull-right\">\n              <strong>登録日：{{insDate | datex:'YYYY/MM/DD HH:mm'}} {{insUserNm}}　最終更新日：{{updDate | datex:'YYYY/MM/DD HH:mm'}} {{updUserNm}}</strong>\n            </div>\n          </div>\n          <!-- /.panel-heading -->\n          <div class=\"panel-body context-margin\">\n            <form #myForm=\"ngForm\" novalidate>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>インシデント分類：\n                      <span class=\"require\">＊</span>\n                    </strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <select #sel_incidentType=\"ngModel\" name=\"sel_incidentType\" class=\"form-control edit-dropdown\" [(ngModel)]=\"incidentTypeCd\"\n                    required>\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of incidentTypeArray\" [value]='item.value'>\n                      {{item.label}}\n                    </option>\n                  </select>\n                  <span class=\"text-danger\" *ngIf=\"(sel_incidentType.errors?.required && sel_incidentType.dirty) || sel_incidentType_require_error\">\n                    インシデント分類は必須入力です。\n                  </span>\n                </div>\n                <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>親インシデント番号：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <div class=\"input-group\">\n                    <input name=\"txt_parentIncidentNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"parentIncidentNo\" readonly>\n                    <input name=\"hid_parentIncidentId\" type=\"hidden\" [(ngModel)]=\"parentIncidentId\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-input-support\" (click)=\"incident.openModal()\">\n                        <i class=\"fa fa-search\"></i>\n                      </button>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>発生日時：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                  <div class=\"input-group\">\n                    <input id=\"txt_incidentStartDate\" name=\"txt_incidentStartDate\" type=\"text\" class=\"form-control\" #dpIncidentStartDate=\"bsDatepicker\"\n                      bsDatepicker [bsConfig]=\"bsConfig\" [(bsValue)]=\"incidentStartDate\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpIncidentStartDate.toggle()\">\n                        <i class=\"fa fa-calendar\"></i>\n                      </button>\n                    </span>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                  <div class=\"input-group\">\n                    <select name=\"sel_incidentStartTime\" class=\"search-dropdown\" [(ngModel)]=\"incidentStartTime\">\n                      <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                    </select>\n                    :\n                    <select name=\"sel_incidentStartMinite\" class=\"search-dropdown\" [(ngModel)]=\"incidentStartMinite\">\n                      <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                    </select>\n                  </div>\n                </div>\n                <span class=\"text-danger\" *ngIf=\"checkDateShowincidentStartDate\">\n                  発生日時に、日付を入力してください。\n                </span>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>業種区分：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <select name=\"sel_industryTypeCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"industryTypeCd\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of industryTypeArray\" [value]='item.value'>\n                      {{item.label}}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>情報提供元：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <select name=\"sel_infoSourceCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"infoSourceCd\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of infoSourceArray\" [value]='item.value'>\n                      {{item.label}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>情報提供者：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <input #txt_infoProvider=\"ngModel\" name=\"txt_infoProvider\" type=\"text\" class=\"form-control\" [(ngModel)]=\"infoProvider\" maxlength=\"250\">\n                  <!-- <input #txt_infoProvider=\"ngModel\" name=\"txt_infoProvider\" type=\"text\" class=\"form-control\" [(ngModel)]=\"infoProvider\" maxlength=\"32\"> -->\n                  <span class=\"text-danger\" *ngIf=\"txt_infoProvider.errors?.maxlength && txt_infoProvider.dirty\">\n                    情報提供者は、250文字まで入力可能です。\n                    <!-- 情報提供者は、32文字まで入力可能です。 -->\n                  </span>\n                </div>\n                <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>情報提供TEL：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <input #txt_infoProviderTel=\"ngModel\" name=\"infoProvidedTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"infoProvidedTel\"\n                    maxlength=\"15\">\n                  <!-- <input #txt_infoProviderTel=\"ngModel\" name=\"infoProvidedTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"infoProvidedTel\" maxlength=\"24\"> -->\n                  <span class=\"text-danger\" *ngIf=\"txt_infoProviderTel.errors?.maxlength && txt_infoProviderTel.dirty\">\n                    情報提供TELは、15文字まで入力可能です。\n                    <!-- 情報提供TELは、24文字まで入力可能です。 -->\n                  </span>\n                </div>\n              </div>\n              <div class=\"row file-row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label>\n                    <strong>添付ファイル：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                  <input #iFile name=\"incidentFile\" type=\"file\" [(ngModel)]=\"incidentFile\" multiple=\"multiple\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                </div>\n                <div class=\"col-lg-10 col-md-9 col-sm-9 col-xs-9\">\n                  <file-component #fileList></file-component>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                  <label for=\"InputTextarea\">\n                    <strong>注記：</strong>\n                  </label>\n                </div>\n                <div class=\"col-lg-10 col-md-9 col-sm-9 col-xs-9\">\n                  <textarea #txt_memo=\"ngModel\" name=\"memo\" class=\"form-control\" id=\"InputTextarea\" rows=\"3\" [(ngModel)]=\"memo\" maxlength=\"2000\"></textarea>\n                  <span class=\"text-danger\" *ngIf=\"txt_memo.errors?.maxlength && txt_memo.dirty\">\n                    注記は、2000文字まで入力可能です。\n                  </span>\n                </div>\n              </div>\n              <h5 class=\"context-header\">\n                <strong>設備情報及び顧客情報</strong>\n              </h5>\n              <div class=\"setubi-and-cust-info-border\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>機場：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-9 col-sm-9 col-xs-9\">\n                    <input #txt_kijoNm=\"ngModel\" name=\"txt_kijoNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"kijoNm\" readonly>\n                    <input name=\"hid_kijoId\" type=\"hidden\" [(ngModel)]=\"kijoId\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>事業主体：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input name=\"jigyosyutaiNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"jigyosyutaiNm\" readonly>\n                    <input name=\"hid_jigyosyutaiId\" type=\"hidden\" [(ngModel)]=\"jigyosyutaiId\">\n                  </div>\n                  <div class=\"col-lg-7 col-md-6 col-sm-6 col-xs-6\">\n                    <button type=\"button\" (click)=\"jigyosyutaiClear()\" class=\"btn btn-xs btn-warning\">クリア</button>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>設備：\n                        <span class=\"require\">＊</span>\n                      </strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-9 col-sm-9 col-xs-9\">\n                    <div class=\"input-group\">\n                      <input #txt_setubiNm=\"ngModel\" name=\"setubiNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"setubiNm\" required readonly>\n                      <input name=\"hid_setubiId\" type=\"hidden\" [(ngModel)]=\"setubiId\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"setubi.openModal()\">\n                          <i class=\"fa fa-cog\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <span class=\"text-danger\" *ngIf=\"(txt_setubiNm.errors?.required && txt_setubiNm.dirty) || txt_setubiNm_require_error\">\n                      設備は必須入力です。\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>都道府県：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_prefNm\" class=\"form-control edit-dropdown\" [(ngModel)]=\"prefNm\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of prefArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>納入プロジェクト：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_deliveryPjNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"deliveryPjNo\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"project.openModal()\">\n                          <i class=\"fa fa-wrench\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>顧客：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"custNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"custNm\" readonly>\n                      <input name=\"hid_cudtId\" type=\"hidden\" [(ngModel)]=\"custId\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"customer.openModal()\">\n                          <i class=\"fa fa-address-card-o\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>顧客分類：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_custTypeCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"custTypeCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of custTypeArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>会社名・所属部署：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_custDept=\"ngModel\" name=\"custDept\" type=\"text\" class=\"form-control\" [(ngModel)]=\"custDept\" maxlength=\"100\">\n                    <!-- <input #txt_custDept=\"ngModel\" name=\"custDept\" type=\"text\" class=\"form-control\" [(ngModel)]=\"custDept\" maxlength=\"80\"> -->\n                    <span class=\"text-danger\" *ngIf=\"txt_custDept.errors?.maxlength && txt_custDept.dirty\">\n                      会社名・所属部署は、100文字まで入力可能です。\n                      <!-- 会社名・所属部署は、80文字まで入力可能です。 -->\n                    </span>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>依頼者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_requester=\"ngModel\" name=\"requester\" type=\"text\" class=\"form-control\" [(ngModel)]=\"requester\" maxlength=\"250\">\n                    <!-- <input #txt_requester=\"ngModel\" name=\"requester\" type=\"text\" class=\"form-control\" [(ngModel)]=\"requester\" maxlength=\"20\"> -->\n                    <span class=\"text-danger\" *ngIf=\"txt_requester.errors?.maxlength && txt_requester.dirty\">\n                      依頼者は、250文字まで入力可能です。\n                      <!-- 依頼者は、20文字まで入力可能です。 -->\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>連絡先(TEL)：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_contactTel=\"ngModel\" name=\"contactTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactTel\" maxlength=\"15\">\n                    <!-- <input #txt_contactTel=\"ngModel\" name=\"contactTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactTel\" maxlength=\"24\"> -->\n                    <span class=\"text-danger\" *ngIf=\"txt_contactTel.errors?.maxlength && txt_contactTel.dirty\">\n                      連絡先(TEL)は、15文字まで入力可能です。\n                      <!-- 連絡先(TEL)は、24文字まで入力可能です。 -->\n                    </span>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>連絡先(FAX)：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_contactFax=\"ngModel\" name=\"contactFax\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactFax\" maxlength=\"15\">\n                    <!-- <input #txt_contactFax=\"ngModel\" name=\"contactFax\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactFax\" maxlength=\"14\"> -->\n                    <span class=\"text-danger\" *ngIf=\"txt_contactFax.errors?.maxlength && txt_contactFax.dirty\">\n                      連絡先(FAX)は、15文字まで入力可能です。\n                      <!-- 連絡先(FAX)は、14文字まで入力可能です。 -->\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>連絡先(E-mail)：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_contactMail=\"ngModel\" name=\"contactMail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactMail\" maxlength=\"50\">\n                    <!-- <input #txt_contactMail=\"ngModel\" name=\"contactMail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactMail\" maxlength=\"64\"> -->\n                    <span class=\"text-danger\" *ngIf=\"txt_contactFax.errors?.maxlength && txt_contactFax.dirty\">\n                      連絡先(E-mail)は、50文字まで入力可能です。\n                      <!-- 連絡先(E-mail)は、64文字まで入力可能です。 -->\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>営業部門：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_salesDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"salesDeptNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"salesSection.openModal('salesSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <input name=\"hid_salesDeptCd\" type=\"hidden\" [(ngModel)]=\"salesDeptCd\">\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>営業担当者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_salesUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"salesUserNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"salesUser.openModal('salesUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <input name=\"hid_salesUserId\" type=\"hidden\" [(ngModel)]=\"salesUserId\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>主管部門：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_skanDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"skanDeptNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"skanSection.openModal('skanSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <input name=\"hid_skanDeptCd\" type=\"hidden\" [(ngModel)]=\"skanDeptCd\">\n                  </div>\n                  <div class=\"col-lg-offset-2 col-lg-2 col-md-3 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>主管担当者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"txt_skanUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"skanUserNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"skanUser.openModal('skanUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <input name=\"hid_skanUserId\" type=\"hidden\" [(ngModel)]=\"skanUserId\">\n                  </div>\n                </div>\n              </div>\n              <h5 class=\"context-header\">\n                <strong>受付情報</strong>\n              </h5>\n              <div class=\"call-info-border\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付日：\n                        <span class=\"require\">＊</span>\n                      </strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input id=\"txt_callDate\" name=\"txt_callDate\" type=\"text\" class=\"form-control\" #dpCallDate=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                        [(bsValue)]=\"callDate\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallDate.toggle()\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <span class=\"text-danger\" *ngIf=\"checkDateShowCallDate\">\n                      受付日に、日付を入力してください。\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"checkRequireShowCallDate\">\n                      受付日は必須入力です。\n                    </span>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付開始時刻：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_callStartTime\" class=\"search-dropdown\" [(ngModel)]=\"callStartTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_callStartMinite\" class=\"search-dropdown\" [(ngModel)]=\"callStartMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-offset-7 col-md-offset-7 col-sm-offset-6 col-xs-offset-6 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付終了時刻：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_callEndTime\" class=\"search-dropdown\" [(ngModel)]=\"callEndTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_callEndMinite\" class=\"search-dropdown\" [(ngModel)]=\"callEndMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付部署：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"callDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callDeptNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"callSection.openModal('callSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>受付者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"callUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callUserNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"callUser.openModal('callUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>TEL：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_callTel=\"ngModel\" name=\"callTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callTel\" maxlength=\"15\">\n                    <!-- <input #txt_callTel=\"ngModel\" name=\"callTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callTel\" maxlength=\"14\"> -->\n                    <span class=\"text-danger\" *ngIf=\"txt_callTel.errors?.maxlength && txt_callTel.dirty\">\n                      受付情報のTELは、15文字まで入力可能です。\n                      <!-- 受付情報のTELは、14文字まで入力可能です。 -->\n                    </span>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>E-mail：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_callMail=\"ngModel\" name=\"callMail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callMail\" maxlength=\"50\">\n                    <span class=\"text-danger\" *ngIf=\"txt_callMail.errors?.maxlength && txt_callMail.dirty\">\n                      受付情報のE-mailは、50文字まで入力可能です。\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label for=\"InputTextarea\">\n                      <strong>受付内容：\n                        <span class=\"require\">＊</span>\n                      </strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-10 col-sm-9 col-xs-9\">\n                    <textarea #txt_callContent=\"ngModel\" name=\"callContent\" class=\"form-control\" id=\"InputTextarea\" rows=\"4\" [(ngModel)]=\"callContent\"\n                      required maxlength=\"2000\"></textarea>\n                    <span class=\"text-danger\" *ngIf=\"(txt_callContent.errors?.required && txt_callContent.dirty) || txt_callContent_require_error\">\n                      受付内容は必須入力です。\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"txt_callContent.errors?.maxlength && txt_callContent.dirty\">\n                      受付内容は、2000文字まで入力可能です。\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <h5 class=\"context-header\">\n                <strong>対応情報</strong>\n              </h5>\n              <div class=\"taio-info-border\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応日：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input id=\"txt_taioDate\" name=\"txt_taioDate\" type=\"text\" class=\"form-control\" #dpTaioDate=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                        [(bsValue)]=\"taioDate\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpTaioDate.toggle();\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応開始時刻：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 \">\n                    <div class=\"input-group\">\n                      <select name=\"sel_taioStartTime\" class=\"search-dropdown\" [(ngModel)]=\"taioStartTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_taioStartMinite\" class=\"search-dropdown\" [(ngModel)]=\"taioStartMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\"></div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <span class=\"text-danger\" *ngIf=\"checkDateShowTaioDate\">\n                      対応日に、日付を入力してください。\n                    </span>\n                  </div>\n                  <div class=\"col-lg-offset-7 col-md-offset-7 col-sm-offset-6 col-xs-offset-6 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応終了時刻：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_taioEndTime\" class=\"search-dropdown\" [(ngModel)]=\"taioEndTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_taioEndMinite\" class=\"search-dropdown\" [(ngModel)]=\"taioEndMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応部署：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"taioDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"taioDeptNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"taioSection.openModal('taioSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>対応者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"taioUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"taioUserNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"taioUser.openModal('taioUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>TEL：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_taioTel=\"ngModel\" name=\"taioTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"taioTel\" maxlength=\"15\">\n                    <!-- <input #txt_taioTel=\"ngModel\" name=\"taioTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"taioTel\" maxlength=\"14\"> -->\n                    <span class=\"text-danger\" *ngIf=\"txt_taioTel.errors?.maxlength && txt_taioTel.dirty\">\n                      対応情報のTELは、15文字まで入力可能です。\n                      <!-- 対応情報のTELは、14文字まで入力可能です。 -->\n                    </span>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>E-mail：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_taioMail=\"ngModel\" name=\"taioMail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"taioMail\" maxlength=\"50\">\n                    <span class=\"text-danger\" *ngIf=\"txt_taioMail.errors?.maxlength && txt_taioMail.dirty\">\n                      対応情報のE-mailは、50文字まで入力可能です。\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label for=\"InputTextarea\">\n                      <strong>対応内容：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-10 col-sm-9 col-xs-9\">\n                    <textarea #txt_taioContent=\"ngModel\" name=\"taioContent\" class=\"form-control\" id=\"InputTextarea\" rows=\"4\" [(ngModel)]=\"taioContent\"\n                      maxlength=\"2000\"></textarea>\n                    <span class=\"text-danger\" *ngIf=\"txt_taioContent.errors?.maxlength && txt_taioContent.dirty\">\n                      対応内容は、2000文字まで入力可能です。\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <h5 class=\"context-header\">\n                <strong>処置情報</strong>\n              </h5>\n              <div class=\"action-info-border\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置予定日：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input id=\"txt_actDate\" name=\"txt_actDate\" type=\"text\" class=\"form-control\" #dpActDate=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                        [(bsValue)]=\"actDate\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpActDate.toggle();\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <span class=\"text-danger\" *ngIf=\"checkDateShowActDate\">\n                      処置予定日に、日付を入力してください。\n                    </span>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置区分：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_actTypeCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"actTypeCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of actTypeArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置開始日時：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input id=\"txt_actStartDate\" name=\"txt_actStartDate\" type=\"text\" class=\"form-control\" #dpActStartDate=\"bsDatepicker\" bsDatepicker\n                        [bsConfig]=\"bsConfig\" [(bsValue)]=\"actStartDate\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpActStartDate.toggle();\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <span class=\"text-danger\" *ngIf=\"checkDateShowActStartDate\">\n                      処置開始日時に、日付を入力してください。\n                    </span>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_actStartTime\" class=\"search-dropdown\" [(ngModel)]=\"actStartTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_actStartMinite\" class=\"search-dropdown\" [(ngModel)]=\"actStartMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置終了日時：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input id=\"txt_actEndDate\" name=\"txt_actEndDate\" type=\"text\" class=\"form-control\" #dpActEndDate=\"bsDatepicker\" bsDatepicker\n                        [bsConfig]=\"bsConfig\" [(bsValue)]=\"actEndDate\">\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpActEndDate.toggle();\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </span>\n                    </div>\n                    <span class=\"text-danger\" *ngIf=\"checkDateShowActEndDate\">\n                      処置終了日時に、日付を入力してください。\n                    </span>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-3\">\n                    <div class=\"input-group\">\n                      <select name=\"sel_actEndTime\" class=\"search-dropdown\" [(ngModel)]=\"actEndTime\">\n                        <option *ngFor=\"let data of timeList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                      :\n                      <select name=\"sel_actEndMinite\" class=\"search-dropdown\" [(ngModel)]=\"actEndMinite\">\n                        <option *ngFor=\"let data of miniteList\" [value]=\"data.val\">{{data.label}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置部署：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"actDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"actDeptNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"actSection.openModal('actSection')\">\n                          <i class=\"fa fa-building\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>処置者：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"input-group\">\n                      <input name=\"actUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"actUserNm\" readonly>\n                      <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-input-support\" (click)=\"actUser.openModal('actUser')\">\n                          <i class=\"fa fa-user\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>TEL：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_actTel=\"ngModel\" name=\"actTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"actTel\" maxlength=\"15\">\n                    <!-- <input #txt_actTel=\"ngModel\" name=\"actTel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"actTel\" maxlength=\"14\"> -->\n                    <span class=\"text-danger\" *ngIf=\"txt_actTel.errors?.maxlength && txt_actTel.dirty\">\n                      処置情報のTELは、15文字まで入力可能です。\n                      <!-- 処置情報のTELは、14文字まで入力可能です。 -->\n                    </span>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>E-mail：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_actMail=\"ngModel\" name=\"actMail\" type=\"text\" class=\"form-control\" [(ngModel)]=\"actMail\" maxlength=\"50\">\n                    <span class=\"text-danger\" *ngIf=\"txt_actMail.errors?.maxlength && txt_actMail.dirty\">\n                      処置情報のE-mailは、50文字まで入力可能です。\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label for=\"InputTextarea\">\n                      <strong>処置結果：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-10 col-md-10 col-sm-9 col-xs-9\">\n                    <textarea #txt_actContent=\"ngModel\" name=\"actContent\" class=\"form-control\" id=\"InputTextarea\" rows=\"4\" [(ngModel)]=\"actContent\"\n                      maxlength=\"2000\"></textarea>\n                    <span class=\"text-danger\" *ngIf=\"txt_actContent.errors?.maxlength && txt_actContent.dirty\">\n                      処置結果は、2000文字まで入力可能です。\n                    </span>\n                  </div>\n                </div>\n              </div>\n\n              <h5 class=\"context-header\">\n                <strong>製品情報</strong>\n              </h5>\n              <div class=\"product-info-border\">\n                <h5 class=\"context-sub-header\">\n                  <strong>対象機種区分</strong>\n                </h5>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>　装置分類：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_sotiKbnCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"sotiKbnCd\" (change)=\"findKisyuList()\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of sotiList\" [value]='item.sotiCd'>\n                        {{item.sotiNm}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>機種区分：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_kisyuKbnCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"kisyuKbnCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of kisyuList\" [value]='item.kisyuCd'>\n                        {{item.kisyuNm}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>　機種名：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <input #txt_kisyuNm=\"ngModel\" name=\"kisyuNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"kisyuNm\">\n                  </div>\n                </div>\n                <h5 class=\"context-sub-header\">\n                  <strong>障害状況</strong>\n                </h5>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>　トリガー：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_productTriggerCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"productTriggerCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of productTriggerArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>頻度：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_productHindoCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"productHindoCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of productHindoArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>　現象：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_productGensyoCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"productGensyoCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of productGensyoArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n                    <label>\n                      <strong>状態：</strong>\n                    </label>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n                    <select name=\"sel_productStatusCd\" class=\"form-control edit-dropdown\" [(ngModel)]=\"productStatusCd\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let item of productStatusArray\" [value]='item.value'>\n                        {{item.label}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n            </form>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関係者</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>\n                <i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i> 変更を通知する／\n                <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i> 変更を通知しない\n              </strong>\n            </h5>\n            <div class=\"context-margin\">\n              <!-- ::: 2018.01.30 [#33] インシデント関係者の表示・追加・削除 Add Start newtouch -->\n              <ul *ngFor=\"let dept of relateUserList;let deptIdx = index;\" style=\"list-style:none;padding-left: 0px;\">\n                <div>{{dept.relateUserSectionNm}}</div>\n                <li *ngFor=\"let user of dept.relateUsers;let userIdx = index;\">\n                  <div style=\"width:235px;display: inline-block;\">\n                    <span class=\"context-margin relate-user-nm\">\n                      {{user.relateUserNm}}\n                      <span *ngIf=\"user.kidokuDate != ''\">（既読日：{{user.kidokuDate}}）</span>\n                    </span>\n                  </div>\n                </li>\n              </ul>\n              <!-- ::: 2018.01.30 [#33] インシデント関係者の表示・追加・削除 Add End   newtouch -->\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_chronos__ = __webpack_require__("../../../../ngx-bootstrap/chronos/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
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







// datepikerの設定
Object(__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_chronos__["a" /* defineLocale */])('ja', __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_locale__["a" /* jaLocale */]);
var EditComponent = /** @class */ (function () {
    function EditComponent(route, jsonpService, postService, router, loginService, _localeService) {
        var _this = this;
        this.route = route;
        this.jsonpService = jsonpService;
        this.postService = postService;
        this.router = router;
        this.loginService = loginService;
        this._localeService = _localeService;
        this.isLoading = true;
        /* 画面表示パラメータの初期化 */
        // １－１．ヘッダー
        this.incidentId = ""; // インシデントID
        this.incidentNo = ""; // インシデント番号
        this.incidentStatusCd = ""; // インシデントステータスCD
        this.incidentStatusNm = ""; // インシデントステータス名
        this.incidentTypeCd = ""; // インシデント分類CD
        this.insDate = null; // 登録日
        this.insUserNm = ""; // 登録者
        this.updDate = null; // 更新日
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
        this.prefNm = ""; //都道府県名
        this.custId = ""; //顧客ID 
        this.custNm = ""; //顧客名
        this.custTypeCd = ""; //顧客分類CD
        this.custTypeNm = ""; //顧客分類名
        this.salesDeptCd = ""; //営業部門CD
        this.salesDeptNm = ""; //営業部門名
        this.salesUserId = ""; //営業担当者ID
        this.salesUserNm = ""; //営業担当者名
        this.deliveryPjNo = ""; //納入プロジェクトNO
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
        this.sotiKbnCd = ""; // 装置分類CD
        this.sotiKbnNm = ""; // 装置分類名
        this.kisyuKbnCd = ""; // 機種区分CD
        this.kisyuKbnNm = ""; // 機種区分名
        this.kisyuNm = ""; // 機種名  
        this.productTriggerCd = ""; //障害状況トリガーCD
        this.productTriggerNm = ""; //障害状況トリガー名
        this.productHindoCd = ""; //障害状況頻度CD
        this.productHindoNm = ""; //障害状況頻度名
        this.productGensyoCd = ""; //障害状況現象CD
        this.productGensyoNm = ""; //障害状況現象名
        this.productStatusCd = ""; //障害状況状態CD
        this.productStatusNm = ""; //障害状況状態名
        this.sotiList = [];
        this.kisyuList = [];
        /* インシデント関係者処理 */
        // インシデント関係者情報 
        this.relateUserList = [];
        this.sel_incidentType_require_error = false; // インシデント分類必須チェック
        this.txt_setubiNm_require_error = false; // 設備名必須チェック
        this.txt_callContent_require_error = false; // 受付内容必須チェック
        // インシデント分類セレクト情報
        this.incidentTypeArray = [
            { label: '障害', value: 1 },
            { label: '事故', value: 2 },
            { label: 'クレーム', value: 3 },
            { label: '問合せ', value: 4 },
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
            { label: '北海道', value: '北海道' },
            { label: '青森県', value: '青森県' },
            { label: '岩手県', value: '岩手県' },
            { label: '宮城県', value: '宮城県' },
            { label: '秋田県', value: '秋田県' },
            { label: '山形県', value: '山形県' },
            { label: '福島県', value: '福島県' },
            { label: '茨城県', value: '茨城県' },
            { label: '栃木県', value: '栃木県' },
            { label: '群馬県', value: '群馬県' },
            { label: '埼玉県', value: '埼玉県' },
            { label: '千葉県', value: '千葉県' },
            { label: '東京都', value: '東京都' },
            { label: '神奈川県', value: '神奈川県' },
            { label: '新潟県', value: '新潟県' },
            { label: '富山県', value: '富山県' },
            { label: '石川県', value: '石川県' },
            { label: '福井県', value: '福井県' },
            { label: '山梨県', value: '山梨県' },
            { label: '長野県', value: '長野県' },
            { label: '岐阜県', value: '岐阜県' },
            { label: '静岡県', value: '静岡県' },
            { label: '愛知県', value: '愛知県' },
            { label: '三重県', value: '三重県' },
            { label: '滋賀県', value: '滋賀県' },
            { label: '京都府', value: '京都府' },
            { label: '大阪府', value: '大阪府' },
            { label: '兵庫県', value: '兵庫県' },
            { label: '奈良県', value: '奈良県' },
            { label: '和歌山県', value: '和歌山県' },
            { label: '鳥取県', value: '鳥取県' },
            { label: '島根県', value: '島根県' },
            { label: '岡山県', value: '岡山県' },
            { label: '広島県', value: '広島県' },
            { label: '山口県', value: '山口県' },
            { label: '徳島県', value: '徳島県' },
            { label: '香川県', value: '香川県' },
            { label: '愛媛県', value: '愛媛県' },
            { label: '高知県', value: '高知県' },
            { label: '福岡県', value: '福岡県' },
            { label: '佐賀県', value: '佐賀県' },
            { label: '長崎県', value: '長崎県' },
            { label: '熊本県', value: '熊本県' },
            { label: '大分県', value: '大分県' },
            { label: '宮崎県', value: '宮崎県' },
            { label: '鹿児島県', value: '鹿児島県' },
            { label: '沖縄県', value: '沖縄県' },
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
        this.locale = 'ja';
        this.locales = Object(__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_chronos__["b" /* listLocales */])();
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
        this.checkDateShowincidentStartDate = false; //発生日時(日付型チェック)
        this.checkDateShowCallDate = false; //受付日(日付型チェック)
        this.checkRequireShowCallDate = false; //受付日(nullチェック)
        this.checkDateShowTaioDate = false; //対応日(日付型チェック)
        this.checkDateShowActDate = false; //処置予定日(日付型チェック)
        this.checkDateShowActStartDate = false; //処置開始日時（日付）(日付型チェック)
        this.checkDateShowActEndDate = false; //処置終了日時（日付）(日付型チェック)
        /* ログイン情報の取得 */
        this.subscription = loginService.loginUserNm$.subscribe(function (user) { _this.userNm = user; });
        this.subscription = loginService.loginUserId$.subscribe(function (user) { _this.userId = user; });
        this.subscription = loginService.loginUserSectionCd$.subscribe(function (user) { _this.userSectionCd = user; });
        this.subscription = loginService.loginUserSectionNm$.subscribe(function (user) { _this.userSectionNm = user; });
        // datepikerの設定
        this.bsConfig = Object.assign({}, { dateInputFormat: 'YYYY/MM/DD' });
        this._localeService.use(this.locale);
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var prmIncientId = this.route.snapshot.paramMap.get('incidentId');
        this.incidentId = prmIncientId;
        if (prmIncientId) {
            ps.set('incidentId', prmIncientId);
        }
        // 画面表示パラメータの取得処理
        this.isLoading = true;
        this.jsonpService.requestGet('IncidentDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1, -1)[0]);
                    // 装置区分リストを表示
                    _this.findSotiList();
                    // 機種区分リストを表示
                    _this.findKisyuList();
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
        // ファイルリストを表示
        this.fileList.openFileList(this.incidentId);
        // 初期化エラーメッセージを表示しない
        this.checkShowInit();
    };
    EditComponent.prototype.ngOnDestroy = function () {
        // 親サービスDIの影響 メモリリーク防止
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    /* 初期化処理 */
    // 初期化エラーメッセージを表示しない
    EditComponent.prototype.checkShowInit = function () {
        this.checkDateShowincidentStartDate = false; //発生日時(日付型チェック)
        this.checkDateShowCallDate = false; //受付日(日付型チェック)
        this.checkRequireShowCallDate = false; //受付日(nullチェック)
        this.checkDateShowTaioDate = false; //対応日(日付型チェック)
        this.checkDateShowActDate = false; //処置予定日(日付型チェック)
        this.checkDateShowActStartDate = false; //処置開始日時（日付）(日付型チェック)
        this.checkDateShowActEndDate = false; //処置終了日時（日付）(日付型チェック)
    };
    // 初期化設定()
    EditComponent.prototype.reset = function (keyword) {
        switch (keyword) {
            case "all":
                // 初期化エラーメッセージを表示しない
                this.checkShowInit();
                break;
            default:
                break;
        }
    };
    // 画面リロード対応
    EditComponent.prototype.reloadEdit = function ($event) {
        this.checkShowInit(); // 初期化エラーメッセージを表示しない
        this.sel_incidentType.reset(); // インシデント分類CD
        this.txt_setubiNm.reset(); // 設備
        this.txt_callContent.reset(); // 受付内容
    };
    // 事業主体の初期化
    EditComponent.prototype.jigyosyutaiClear = function () {
        this.jigyosyutaiId = ""; //事業主体ID
        this.jigyosyutaiNm = ""; //事業主体名
    };
    /* モーダルイベント処理 */
    // 顧客（取引先）
    EditComponent.prototype.onCustomerSearchSelected = function ($event) {
        if ($event) {
            this.custId = $event["customerCd"]; // 顧客ID 
            this.custNm = $event["customerNm"]; // 顧客名
        }
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
            this.deliveryPjNo = $event["pjNo"]; //納入プロジェクトNo
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
    // 設備選択
    EditComponent.prototype.onSetubiSelected = function ($event) {
        if ($event) {
            this.setubiId = $event["setubiId"]; // 設備ID
            this.setubiNm = $event["setubiNm"]; // 設備名
            this.kijoId = $event["kijoId"]; // 機場ID
            this.kijoNm = $event["kijoNm"]; // 機場名ID
            this.jigyosyutaiId = $event["jigyosyutaiId"]; // 事業主体ID
            this.jigyosyutaiNm = $event["jigyosyutaiNm"]; // 事業主体名
            this.prefNm = $event["prefNm"]; // 都道府県
        }
    };
    /* 画面表示パラメータのセット処理 */
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
        this.prefNm = data.prefNm; //都道府県名
        this.custId = data.custId; //顧客ID
        this.custNm = data.custNm; //顧客名
        this.custTypeCd = data.custTypeCd; //顧客分類CD
        this.custTypeNm = data.custTypeNm; //顧客分類名
        this.salesDeptCd = data.salesDeptCd; //営業部門CD
        this.salesDeptNm = data.salesDeptNm; //営業部門名
        this.salesUserId = data.salesUserId; //営業担当者ID
        this.salesUserNm = data.salesUserNm; //営業担当者名
        this.deliveryPjNo = data.deliveryPjNo; //納入プロジェクトNO
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
        this.sotiKbnCd = data.sotiKbnCd; //装置分類CD
        this.sotiKbnNm = data.sotiKbnNm; //装置分類名
        this.kisyuKbnCd = data.kisyuKbnCd; //機種区分CD
        this.kisyuKbnNm = data.kisyuKbnNm; //機種区分名
        this.kisyuNm = data.kisyuNm; //機種名
        this.productTriggerCd = data.productTriggerCd; //障害状況トリガーCD
        this.productTriggerNm = data.productTriggerNm; //障害状況トリガー名
        this.productHindoCd = data.productHindoCd; //障害状況頻度CD
        this.productHindoNm = data.productHindoNm; //障害状況頻度名
        this.productGensyoCd = data.productGensyoCd; //障害状況現象CD
        this.productGensyoNm = data.productGensyoNm; //障害状況現象名
        this.productStatusCd = data.productStatusCd; //障害状況状態CD
        this.productStatusNm = data.productStatusNm; //障害状況状態名
        this.initRelateUserList(data.relateUserList);
    };
    // 装置区分
    EditComponent.prototype.findSotiList = function () {
        var _this = this;
        // 画面表示パラメータの取得処理
        this.jsonpService.requestGet('SotiKbnListGet.php', new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]())
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.sotiList = data.slice(1);
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 機種区分
    EditComponent.prototype.findKisyuList = function () {
        var _this = this;
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set('sotiKbnCd', this.sotiKbnCd);
        // 画面表示パラメータの取得処理
        this.jsonpService.requestGet('KisyuKbnListGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.kisyuList = data.slice(1);
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // それが空であるかどうかを判断する
    EditComponent.prototype.isEmpty = function (str) {
        return str == null || str == undefined || str == "" ? true : false;
    };
    // インシデント関係者 
    EditComponent.prototype.initRelateUserList = function (relateUserArray) {
        this.relateUserList = [];
        var length = relateUserArray.length;
        if (relateUserArray.length > 0) {
            for (var i = 0; i < length; i++) {
                var sectionObj = {};
                var section = relateUserArray[i];
                if (!this.isEmpty(section.relateUserSectionCd)) {
                    if (this.isDeptExist(section.relateUserSectionCd, section.relateUserSectionNm) != -1) {
                        continue;
                    }
                    sectionObj["relateUserSectionCd"] = section.relateUserSectionCd;
                    sectionObj["relateUserSectionNm"] = section.relateUserSectionNm;
                    var userList = [];
                    for (var j = 0; j < length; j++) {
                        var userObj = {};
                        var user = relateUserArray[j];
                        if (!this.isEmpty(user.relateUserId)) {
                            if (user.relateUserSectionCd == section.relateUserSectionCd && user.relateUserSectionNm == section.relateUserSectionNm) {
                                userObj["relateId"] = user.relateId;
                                userObj["relateUserId"] = user.relateUserId;
                                userObj["relateUserNm"] = user.relateUserNm;
                                userObj["kidokuDate"] = user.kidokuDate;
                                userList.push(userObj);
                            }
                        }
                    }
                    sectionObj["relateUsers"] = userList;
                    this.relateUserList.push(sectionObj);
                }
            }
        }
    };
    // 部門が既に存在するかどうかを判断する
    EditComponent.prototype.isDeptExist = function (targetCd, targetNm) {
        var index = -1;
        for (var i = 0; i < this.relateUserList.length; i++) {
            var tmpCd = this.relateUserList[i].relateUserSectionCd.toString();
            var tmpNm = this.relateUserList[i].relateUserSectionNm.toString();
            if (tmpCd == targetCd.toString() && tmpNm == targetNm.toString()) {
                index = i;
            }
        }
        return index;
    };
    /* インシデント登録処理 */
    EditComponent.prototype.onEntry = function (event, files) {
        var _this = this;
        if (this.checkDate() && !this.myForm.invalid) {
            console.log('登録処理スタート');
            // インシデント登録処理
            var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
            // ログイン情報設定
            ps.set('userId', this.userId);
            ps.set('userName', this.userNm);
            ps.set('sectionCd', this.userSectionCd);
            ps.set('sectionName', this.userSectionNm);
            // インシデント情報
            ps.set('incidentId', this.incidentId);
            ps.set('incidentNo', this.incidentNo);
            ps.set('incidentStatusCd', this.incidentStatusCd);
            ps.set('incidentStatusNm', this.incidentStatusNm);
            ps.set('incidentTypeCd', this.incidentTypeCd);
            ps.set('insUserNm', this.insUserNm);
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
            ps.set('prefNm', this.prefNm);
            ps.set('custId', this.custId);
            ps.set('custNm', this.custNm);
            ps.set('custTypeCd', this.custTypeCd);
            ps.set('custTypeNm', this.custTypeNm);
            ps.set('salesDeptCd', this.salesDeptCd);
            ps.set('salesDeptNm', this.salesDeptNm);
            ps.set('salesUserId', this.salesUserId);
            ps.set('salesUserNm', this.salesUserNm);
            ps.set('deliveryPjNo', this.deliveryPjNo);
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
            ps.set('sotiKbnCd', this.sotiKbnCd);
            var sotiKbnNm = "";
            var tmpSotiKbnCd = this.sotiKbnCd;
            this.sotiList.forEach(function (sotiKbn) {
                if (sotiKbn.sotiCd == tmpSotiKbnCd) {
                    sotiKbnNm = sotiKbn.sotiNm;
                }
            });
            ps.set('sotiKbnNm', sotiKbnNm);
            ps.set('kisyuKbnCd', this.kisyuKbnCd);
            var kisyuKbnNm = "";
            var tmpKisyuKbnCd = this.kisyuKbnCd;
            this.kisyuList.forEach(function (kisyuKbn) {
                if (kisyuKbn.kisyuCd == tmpKisyuKbnCd) {
                    kisyuKbnNm = kisyuKbn.kisyuNm;
                }
            });
            ps.set('kisyuKbnNm', kisyuKbnNm);
            ps.set('kisyuNm', this.kisyuNm);
            ps.set('productTriggerCd', this.productTriggerCd);
            ps.set('productTriggerNm', this.productTriggerNm);
            ps.set('productHindoCd', this.productHindoCd);
            ps.set('productHindoNm', this.productHindoNm);
            ps.set('productGensyoCd', this.productGensyoCd);
            ps.set('productGensyoNm', this.productGensyoNm);
            ps.set('productStatusCd', this.productStatusCd);
            ps.set('productStatusNm', this.productStatusNm);
            // 登録処理通信処理
            this.isLoading = true;
            this.jsonpService.requestGet('IncidentSave.php', ps)
                .subscribe(function (data) {
                // 通信成功時
                if (data[0]) {
                    var one = data[0];
                    if (one.result !== '' && one.result == true) {
                        if (!_this.incidentId) {
                            // 新規登録の場合は、取得したIDを使う
                            _this.incidentId = data.slice(1)[0].incidentId;
                        }
                        // ファイルアップロード
                        if (files) {
                            var data_1 = new FormData();
                            for (var i = 0; i < files.length; i++) {
                                var file = files[i];
                                if (file) {
                                    data_1.append('incidentFile' + i, file, file.name);
                                }
                            }
                            data_1.append('fileCount', files.length);
                            data_1.append('incidentId', _this.incidentId);
                            var result = _this.postService.requestPost('FileUpload.php', data_1);
                        }
                        // 画面遷移
                        _this.router.navigate(['/common', 'インシデント情報を登録しました', '/detail/' + _this.incidentId]);
                    }
                }
                _this.isLoading = false;
            }, function (error) {
                // 通信失敗もしくは、コールバック関数内でエラー
                console.log('サーバとのアクセスに失敗しました。');
                _this.isLoading = false;
                return false;
            });
        }
        else {
            this.sel_incidentType_require_error = this.sel_incidentType.hasError('required');
            this.txt_setubiNm_require_error = this.txt_setubiNm.hasError('required');
            this.txt_callContent_require_error = this.txt_callContent.hasError('required');
            // 入力値にエラーが有る
            this.errorModal.openModal('警告', '入力エラーがあります。', '', '閉じる');
        }
    };
    // 日付型値の日付型あるいはnullのチェック
    EditComponent.prototype.checkDate = function () {
        // 初期化エラーメッセージを表示しない
        this.checkShowInit();
        var result = true; // 返り値
        // 発生日時
        var incidentStartDateValue = document.getElementById('txt_incidentStartDate').value;
        var incidentStartDateStr = this.getDateStringFromDate(this.incidentStartDate);
        if (incidentStartDateStr == null && incidentStartDateValue != "") {
            this.checkDateShowincidentStartDate = true;
            result = false;
        }
        // 受付日
        var callDateValue = document.getElementById('txt_callDate').value;
        var callDateStr = this.getDateStringFromDate(this.callDate);
        if (callDateStr == null) {
            if (callDateValue != "") {
                this.checkDateShowCallDate = true;
            }
            else if (callDateValue == "") {
                this.checkRequireShowCallDate = true;
            }
            result = false;
        }
        // 対応日
        var taioDateValue = document.getElementById('txt_taioDate').value;
        var taioDateStr = this.getDateStringFromDate(this.taioDate);
        if (taioDateStr == null && taioDateValue != "") {
            this.checkDateShowTaioDate = true;
            result = false;
        }
        // 処置予定日
        var actDateValue = document.getElementById('txt_actDate').value;
        var actDateStr = this.getDateStringFromDate(this.actDate);
        if (actDateStr == null && actDateValue != "") {
            this.checkDateShowActDate = true;
            result = false;
        }
        // 処置開始日時（日付）
        var actStartDateValue = document.getElementById('txt_actStartDate').value;
        var actStartDateStr = this.getDateStringFromDate(this.actStartDate);
        if (actStartDateStr == null && actStartDateValue != "") {
            this.checkDateShowActStartDate = true;
            result = false;
        }
        // 処置終了日時（日付）
        var actEndDateValue = document.getElementById('txt_actEndDate').value;
        var actEndDateStr = this.getDateStringFromDate(this.actEndDate);
        if (actEndDateStr == null && actEndDateValue != "") {
            this.checkDateShowActEndDate = true;
            result = false;
        }
        return result;
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
            if (y) {
                var yStr = ('00' + y).slice(-4);
            }
            if (m) {
                var mStr = ('00' + m).slice(-2);
            }
            if (d) {
                var dStr = ('00' + d).slice(-2);
            }
            if (yStr && mStr && dStr) {
                return yStr + "/" + mStr + "/" + dStr + " 00:00:00";
            }
            else {
                // 日付型でない値の場合
                return null;
            }
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
            if (y) {
                var yStr = ('00' + y).slice(-4);
            }
            if (m) {
                var mStr = ('00' + m).slice(-2);
            }
            if (d) {
                var dStr = ('00' + d).slice(-2);
            }
            if (time) {
                timeStr = ('00' + time).slice(-2);
            }
            if (minite) {
                miniteStr = ('00' + minite).slice(-2);
            }
            if (yStr && mStr && dStr && timeStr && miniteStr) {
                return yStr + "/" + mStr + "/" + dStr + " " + timeStr + ":" + miniteStr + ":00";
            }
            else {
                // 日付型でない値の場合
                return null;
            }
        }
        else {
            // 日付型でない値の場合
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('sel_incidentType'),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "sel_incidentType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('txt_setubiNm'),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "txt_setubiNm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('txt_callContent'),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "txt_callContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('myForm'),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "myForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('errorModal'),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "errorModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('fileList'),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "fileList", void 0);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_7__post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_8__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            styles: ["div h2{ background-color:#f00; }"],
            template: "\n    <div class=\"component\">\n      <h2>\u30A8\u30E9\u30FC\uFF01</h2>\n      <p>\u30DA\u30FC\u30B8\u304C\u898B\u5F53\u305F\u308A\u307E\u305B\u3093\u3002</p>\n    </div>\n  "
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/file/file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* 小さいボタン　オリジナルクラス */\r\n.btn-sx-ori {\r\n    padding: 0px 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file/file.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：ファイル画面\n//\t作成日付・作成者：2018.02.24 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<common-modal #fileCommon (commonEnter)=\"fileDelete()\"></common-modal>\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div *ngFor=\"let data of fileList\">\n      <div>\n        <a (click)=\"fileDownload(data?.fileId)\">\n          <u>{{data?.fileNm}}</u>\n        </a>\n        <button type=\"button\" class=\"btn btn-sx-ori btn-danger btn-close\" (click)=\"setDeleteFileId(data?.fileId);fileCommon.openModal('確認','ファイルを削除します。宜しいですか？','OK','キャンセル')\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/file/file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileComponent = /** @class */ (function () {
    function FileComponent(route, jsonpService, loginService, postService) {
        var _this = this;
        this.route = route;
        this.jsonpService = jsonpService;
        this.loginService = loginService;
        this.postService = postService;
        this.incidentId = "";
        this.fileList = [];
        /* ログイン情報の取得 */
        this.subscription = loginService.loginUserNm$.subscribe(function (user) { _this.userNm = user; });
        this.subscription = loginService.loginUserId$.subscribe(function (user) { _this.userId = user; });
        this.subscription = loginService.loginUserSectionCd$.subscribe(function (user) { _this.userSectionCd = user; });
        this.subscription = loginService.loginUserSectionNm$.subscribe(function (user) { _this.userSectionNm = user; });
    }
    FileComponent.prototype.ngOnInit = function () { };
    FileComponent.prototype.openFileList = function (incidentId) {
        this.incidentId = incidentId;
        this.findFileList();
    };
    FileComponent.prototype.findFileList = function () {
        var _this = this;
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        if (this.incidentId) {
            ps.set('incidentId', this.incidentId);
        }
        this.jsonpService.requestGet('FileListGet.php', ps)
            .subscribe(function (data) {
            console.log(data);
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1));
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    /* 画面表示パラメータのセット処理 */
    FileComponent.prototype.setDspParam = function (data) {
        this.fileList = data;
    };
    FileComponent.prototype.setDeleteFileId = function (fileId) {
        this.delFileId = fileId;
    };
    FileComponent.prototype.fileDownload = function (fileId) {
        var data = new FormData();
        data.append('fileId', fileId);
        var result = this.postService.requestPost('FileDl.php', data);
        // let ps = new URLSearchParams();
        // ps.set('fileId', fileId);
        // // 検索
        // this.jsonpService.requestGet('FileDl.php', ps)
        //   .subscribe(
        //   data => {
        //     console.log(data);
        //     // if (data[0]['result'] == true) {
        //     //   // 通信成功時 
        //     //   this.findFileList();
        //     // }
        //   },
        //   error => {
        //     // 通信失敗もしくは、コールバック関数内でエラー
        //     console.log(error);
        //     // console.log('サーバとのアクセスに失敗しました。');
        //     // return false;
        //   }
        //   );
    };
    FileComponent.prototype.fileDelete = function () {
        var _this = this;
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set('fileId', this.delFileId);
        ps.set('incidentId', this.incidentId);
        // ログイン情報設定
        ps.set('userId', this.userId);
        ps.set('userName', this.userNm);
        ps.set('sectionCd', this.userSectionCd);
        ps.set('sectionName', this.userSectionNm);
        // 検索
        this.jsonpService.requestGet('FileDelete.php', ps)
            .subscribe(function (data) {
            if (data[0]['result'] == true) {
                // 通信成功時 
                _this.findFileList();
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    FileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'file-component',
            template: __webpack_require__("../../../../../src/app/file/file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/file/file.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__post_service__["a" /* PostService */]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* システムタイトル部 */\r\n.system-title {\r\n    font-weight: bold;\r\n}\r\n/* タイトル・ユーザ名表示 */\r\n.header-user-name {\r\n    margin-right:10px;\r\n}\r\n/* タイトル・メニュー選択時 */\r\n.nav .open>a, .nav .open>a:focus, .nav .open>a:hover a:focus, a:hover {\r\n    color: #23527c;\r\n}\r\n/* ヘッダー右寄せ部のレイアウト調整 */\r\n.navbar-right {\r\n    margin-right: 15px;\r\n}\r\n/* ヘッダーメニュー項目のレイアウト調整 */\r\n.navbar-nav>li>a {\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n/* ヘッダー1段目(背景赤系色) */\r\n/* colorの値・・・bootstrapに負けてる？ */\r\n.header-first {\r\n    background-color: firebrick;\r\n    color: #ffffff;\r\n}\r\n/* ヘッダー2段目(背景橙系色) */\r\n/* colorの値・・・bootstrapに負けてる？ */\r\n.header-second {\r\n    background-color: darkorange;\r\n    color: #ffffff;\r\n}\r\n/* ヘッダーのテキスト */\r\n.header-text {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    color: #ffffff;\r\n}\r\n/* paddingを上書き、ヘッダータイトルの位置を調整*/\r\n.navbar-brand {\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n/*ヘッダーのユーザー名*/\r\n.header-user-area-text {\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    color: #ffffff;\r\n}\r\n/* ヘッダーの検索欄のレイアウト調整 */\r\n.header-search {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n/* ヘッダー部読み込み時のheight値 */\r\n.header-frame {\r\n/*    position: relative !important;\r\n    z-index: 100 !important;*/\r\n    height: 86px;\r\n}\r\n/* ヘッダー部 プルダウンをマウスオーバーで表示 */\r\n.dropdown:hover > .dropdown-menu{\r\n    display: block;\r\n}\r\n/* ログアウト */\r\n.logout {\r\n    color: white;\r\n}\r\n.logout:hover {\r\n    color: #23527c;\r\n    background-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデントヘッダー画面\n//\t作成日付・作成者：2017.12.07 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<div id=\"entryLoad\" class=\"entryLoad\"></div>\n<div ng-app=\"headerApp\" ng-cloak>\n  <div ng-controller=\"HeaderController as header\">\n    <nav class=\"navbar navbar-static-top\">\n      <div class=\"container-fluid\">\n        <div class=\"row header-first\">\n          <div class=\"col-lg-6 col-md-6 col-sm-8 col-xs-8\">\n            <div class=\"navbar-header\">\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                    <span class=\"h3 header-text system-title\">インシデント管理</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-4 col-xs-4\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"navbar-text navbar-right header-user-area-text\">\n                  <span class=\"header-user-name\">{{userSectionNm}}&nbsp;&nbsp;{{userNm}}</span>\n                  <a class=\"logout\" (click)=\"logOffFrm.submit()\">ログアウト</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group navbar-right header-search\">\n                <input #keyword type=\"text\" class=\"form-control\" (keyup.enter)=\"onKeyWordEnter(keyword.value)\" placeholder=\"キーワードを入力\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row header-second\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <ul class=\"nav navbar-nav\">\n              <li id = \"dropListDown\" class=\"dropdown\" dropdown>\n                <a routerLink=\"/list\" (click)=\"reload()\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\"\n                class=\"header-text dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                 インシデント検索\n                 <span class=\"caret\"></span>\n                </a>\n                <ul id=\"condNmUl\" class=\"dropdown-menu\">\n                  <li *ngFor=\"let data of condList\">\n                    <a (click)=\"reloadCondId(data?.condId)\" routerLink=\"/list/c/{{data?.condId}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">{{data?.condNm}}</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a routerLink=\"/edit\" (click)=\"reload()\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"header-text\" target=\"_top\">インシデント登録</a>\n              </li>\n              <li>\n                <a class=\"header-text\">管理</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n  </div>\n</div>\n\n<form #logOffFrm name=\"frmLogoff\" method=\"post\" target=\"_top\" action=\"{{logOutUrl}}\"></form>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, jsonpService, router, loginService) {
        var _this = this;
        this.route = route;
        this.jsonpService = jsonpService;
        this.router = router;
        this.loginService = loginService;
        // ヘッダーイベント(親コンポーネントのメソッド呼び出し)
        this.headerSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.headerEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.condList = [];
        /* ログイン情報の取得 */
        this.subscription = loginService.loginUserNm$.subscribe(function (user) { _this.userNm = user; });
        this.subscription = loginService.loginUserId$.subscribe(function (user) { _this.userId = user; });
        this.subscription = loginService.loginUserSectionCd$.subscribe(function (user) { _this.userSectionCd = user; });
        this.subscription = loginService.loginUserSectionNm$.subscribe(function (user) { _this.userSectionNm = user; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (obj) { return _this.category = obj['category']; });
        this.logOutUrl = this.loginService.getLogOutUrl();
        this.jsonpService.requestGet('IncidentGetSession.php', new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]())
            .subscribe(function (data) {
            // 通信成功時
            if (data && data[0] && data[0].result !== '' && data[0].result == true) {
                // ユーザIDを確実に取得してから初期表示を実施する
                _this.userId = data.slice(1)[0]['loginUserId'];
                _this.searchConditionName();
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
        });
    };
    // 検索条件名の検索
    HeaderComponent.prototype.searchConditionName = function () {
        var _this = this;
        // パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        // ログイン情報設定
        ps.set('userId', this.userId);
        ps.set('userName', this.userNm);
        ps.set('sectionCd', this.userSectionCd);
        ps.set('sectionName', this.userSectionNm);
        // 検索項目の検索
        this.jsonpService.requestGet('IncidentListConditionGet.php', ps)
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
    // 画面表示パラメータのセット処理
    HeaderComponent.prototype.setDspParam = function (data) {
        this.condList = data;
    };
    // リロード(検索)
    HeaderComponent.prototype.reload = function () {
        if (this.category == 'list') {
            // // 検索画面の場合 listComponentの処理を実行
            this.headerSearch.emit({});
        }
        if (this.category == 'edit') {
            // // 検索画面の場合 listComponentの処理を実行
            this.headerEdit.emit({});
        }
    };
    // リロード(条件検索)
    HeaderComponent.prototype.reloadCondId = function (condId) {
        if (this.category == 'list/c') {
            // // 検索画面の場合 listComponentの処理を実行
            this.headerSearch.emit({ 'condId': condId });
        }
    };
    // ヘッダーのキーワードを入力してエンターを押した
    HeaderComponent.prototype.onKeyWordEnter = function (value) {
        // URLに表示できる値に変換 
        value = this.encodeUnicode(value);
        if (this.category == 'list/k') {
            // 検索画面の場合 listComponentの処理を実行
            this.headerSearch.emit({ 'keyword': value });
        }
        else {
            this.router.navigate(['/list/k/' + value]);
        }
    };
    // コードは16位に変換する
    HeaderComponent.prototype.encodeUnicode = function (str) {
        var res = [];
        for (var i = 0; i < str.length; i++) {
            res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
        }
        return res.join("\\u");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], HeaderComponent.prototype, "headerSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], HeaderComponent.prototype, "headerEdit", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/jsonp.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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







var JsonpService = /** @class */ (function () {
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
    JsonpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]])
    ], JsonpService);
    return JsonpService;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ×ボタン */\r\n.btn-close {\r\n    height: 22px;\r\n    width: 22px;\r\n    padding: 0px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n/* 検索項目：項目名 */\r\n.input-label {\r\n    height: 22px;\r\n    border-radius: 4px;\r\n    border: 1px solid wheat;\r\n    margin-bottom: 10px;\r\n}\r\n/* チェックボックスのマージンを除き、ラベルの高さを合わせる */\r\n.checkbox {\r\n    margin: 0px;\r\n}\r\n/* 検索一覧画面テーブルのヘッダ */\r\n.table-header-list {\r\n    text-align: center;\r\n}\r\n/* 検索項目：チェックボックスのレイアウト調整 */\r\n.input-item {\r\n    margin-right: 10px;\r\n}\r\n/* 検索項目の余計な余白を削る */\r\n.label-padding {\r\n    padding-right: 0px;\r\n}\r\n/* 検索一覧画面　ウインドウスクロール対応　固定表示の検索結果ヘッダー */\r\n#newTable {\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0px;\r\n}\r\n/* 検索一覧画面　日付input */\r\n.date-div {\r\n    width: 105px;\r\n    float: left;\r\n    position: relative;\r\n}\r\n/* 検索一覧画面　要素間の文字(～) */\r\n.inner-text {\r\n    font-size: 16px; \r\n    float:left;\r\n    margin: 0px 5px;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n/* 関連情報有無のヘッダー幅*/\r\n.relate-th {\r\n    width:44px;\r\n}\r\n/* 検索条件　表示 */\r\n.condition-show {\r\n    display: inline;    \r\n}\r\n/* 検索条件　非表示 */\r\n.condition-hide {\r\n    display: none;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデント一覧画面\n//\t作成日付・作成者：2017.10.05 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<loading [loading]=\"isLoading\"></loading>\n<my-header #header (headerSearch)=\"reloadSearch($event)\"></my-header>\n<conditionSave-modal #conditionSaveModal (conDelButtonshowDelFlg)=\"setShowDelFlg($event)\" (changeCondition)=\"changeCondition($event)\"></conditionSave-modal>\n<conditionDelete-modal #conditionDeleteModal (conDelButtonshowDelFlg)=\"setShowDelFlg($event)\" (changeCondition)=\"changeCondition($event)\"></conditionDelete-modal>\n\n<div id=\"listApp\" ng-cloak>\n  <div ng-controller=\"ListController as main\" class=\"container-fluid\">\n    <!-- <div id=\"newTable\" class=\"row\" style=\"width:100%\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"panel\">\n          <table class=\"table table-striped\" id=\"dataTables-result\">\n            <thead>\n              <tr>\n                <th class=\"table-header-list\" style=\"width:15%\">インシデント番号\n                </th>\n                <th class=\"table-header-list\" style=\"width:15%\">受付内容\n                </th>\n                <th class=\"table-header-list\" style=\"width:15%\">機場\n                </th>\n                <th class=\"table-header-list\" style=\"width:15%\">設備\n                </th>\n                <th class=\"table-header-list\" style=\"width:7%\">都道府県\n                </th>\n                <th class=\"table-header-list\" style=\"width:7%\">分類\n                </th>\n                <th class=\"table-header-list\" style=\"width:8%\">ステータス\n                </th>\n                <th class=\"table-header-list\" style=\"width:9%\">発生日時\n                </th>\n                <th class=\"table-header-list\" style=\"width:9%\">受付日\n                  <i class=\"fa fa-caret-down\"></i>\n                </th>\n              </tr>\n            </thead>\n          </table>\n        </div>\n      </div>\n    </div> -->\n    <form>\n      <div class=\"row\" *ngIf=\"showKeywordFlg\">\n        <span>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                キーワード\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_keyword\" type=\"text\" (keyup.enter)=\"onKeyWordEnter()\" class=\"form-control\" [(ngModel)]=\"keyword\" placeholder=\"キーワードを入力\">\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"incidentNoShow\" [class.condition-hide]=\"!incidentNoShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('incidentNo');searchClear('incidentNo');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                インシデント番号\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_incidentNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"incidentNo\">\n          </div>\n        </span>\n        <span [class.condition-show]=\"callContentShow\" [class.condition-hide]=\"!callContentShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('callContent');searchClear('callContent');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                受付内容\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_callContent\" type=\"text\" class=\"form-control\" [(ngModel)]=\"callContent\">\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"kijoNmShow\" [class.condition-hide]=\"!kijoNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('kijoNm');searchClear('kijoNm');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                機場\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_kijoNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"kijoNm\">\n          </div>\n        </span>\n        <span [class.condition-show]=\"setubiNmShow\" [class.condition-hide]=\"!setubiNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('setubiNm');searchClear('setubiNm');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                設備\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_setubiNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"setubiNm\">\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"prefNmShow\" [class.condition-hide]=\"!prefNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('prefNm');searchClear('prefNm');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                都道府県\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <select name=\"sel_PrefNm\" class=\"form-control search-dropdown\" [(ngModel)]=\"prefNm\">\n              <option value=\"\"></option>\n              <option value=\"北海道\">北海道</option>\n              <option value=\"青森県\">青森県</option>\n              <option value=\"岩手県\">岩手県</option>\n              <option value=\"宮城県\">宮城県</option>\n              <option value=\"秋田県\">秋田県</option>\n              <option value=\"山形県\">山形県</option>\n              <option value=\"福島県\">福島県</option>\n              <option value=\"茨城県\">茨城県</option>\n              <option value=\"栃木県\">栃木県</option>\n              <option value=\"群馬県\">群馬県</option>\n              <option value=\"埼玉県\">埼玉県</option>\n              <option value=\"千葉県\">千葉県</option>\n              <option value=\"東京都\">東京都</option>\n              <option value=\"神奈川県\">神奈川県</option>\n              <option value=\"新潟県\">新潟県</option>\n              <option value=\"富山県\">富山県</option>\n              <option value=\"石川県\">石川県</option>\n              <option value=\"福井県\">福井県</option>\n              <option value=\"山梨県\">山梨県</option>\n              <option value=\"長野県\">長野県</option>\n              <option value=\"岐阜県\">岐阜県</option>\n              <option value=\"静岡県\">静岡県</option>\n              <option value=\"愛知県\">愛知県</option>\n              <option value=\"三重県\">三重県</option>\n              <option value=\"滋賀県\">滋賀県</option>\n              <option value=\"京都府\">京都府</option>\n              <option value=\"大阪府\">大阪府</option>\n              <option value=\"兵庫県\">兵庫県</option>\n              <option value=\"奈良県\">奈良県</option>\n              <option value=\"和歌山県\">和歌山県</option>\n              <option value=\"鳥取県\">鳥取県</option>\n              <option value=\"島根県\">島根県</option>\n              <option value=\"岡山県\">岡山県</option>\n              <option value=\"広島県\">広島県</option>\n              <option value=\"山口県\">山口県</option>\n              <option value=\"徳島県\">徳島県</option>\n              <option value=\"香川県\">香川県</option>\n              <option value=\"愛媛県\">愛媛県</option>\n              <option value=\"高知県\">高知県</option>\n              <option value=\"福岡県\">福岡県</option>\n              <option value=\"佐賀県\">佐賀県</option>\n              <option value=\"長崎県\">長崎県</option>\n              <option value=\"熊本県\">熊本県</option>\n              <option value=\"大分県\">大分県</option>\n              <option value=\"宮崎県\">宮崎県</option>\n              <option value=\"鹿児島県\">鹿児島県</option>\n              <option value=\"沖縄県\">沖縄県</option>\n            </select>\n          </div>\n        </span>\n        <span [class.condition-show]=\"callDateShow\" [class.condition-hide]=\"!callDateShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('callDate');searchClear('callDate');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                受付日\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <div class=\"date-div\">\n              <div class=\"input-group\">\n                <input id=\"txt_callStartDateFrom\" name=\"txt_callStartDateFrom\" type=\"text\" class=\"form-control\" #dpCallStartDateFrom=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                  [(bsValue)]=\"callStartDateFrom\">\n                <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallStartDateFrom.toggle()\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n              <span class=\"text-danger\" *ngIf=\"checkDateShowCallStartDateFrom\">\n                受付日に、日付を入力してください。\n              </span>\n            </div>\n            <span class=\"text-center inner-text\">～</span>\n            <div class=\"date-div\">\n              <div class=\"input-group\">\n                <input id=\"txt_callStartDateTo\" name=\"txt_callStartDateTo\" type=\"text\" class=\"form-control\" #dpCallStartDateTo=\"bsDatepicker\" bsDatepicker [bsConfig]=\"bsConfig\"\n                  [(bsValue)]=\"callStartDateTo\">\n                <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallStartDateTo.toggle()\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n              <span class=\"text-danger\" *ngIf=\"checkDateShowCallStartDateTo\">\n                受付日に、日付を入力してください。\n              </span>\n            </div>\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"incidentTypeShow\" [class.condition-hide]=\"!incidentTypeShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('incidentType');searchClear('incidentType');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                インシデント分類\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n            <div class=\"checkbox\">\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeSyougai\" value=\"\" [(ngModel)]=\"incidentTypeSyougai\"> 障害\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeJiko\" value=\"\" [(ngModel)]=\"incidentTypeJiko\"> 事故\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeClaim\" value=\"\" [(ngModel)]=\"incidentTypeClaim\"> クレーム\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeToiawase\" value=\"\" [(ngModel)]=\"incidentTypeToiawase\"> 問合せ\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeInfo\" value=\"\" [(ngModel)]=\"incidentTypeInfo\"> 情報\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentTypeOther\" value=\"\" [(ngModel)]=\"incidentTypeOther\"> その他\n              </label>\n            </div>\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"incidentStsShow\" [class.condition-hide]=\"!incidentStsShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('incidentSts');searchClear('incidentSts');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                ステータス\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n            <div class=\"checkbox\">\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentStatusCall\" value=\"\" [(ngModel)]=\"incidentStatusCall\"> 受付済\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentStatusTaio\" value=\"\" [(ngModel)]=\"incidentStatusTaio\"> 対応入力済\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"incidentStatusAct\" value=\"\" [(ngModel)]=\"incidentStatusAct\"> 処置入力済\n              </label>\n            </div>\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"industryTypeShow\" [class.condition-hide]=\"!industryTypeShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('industryType');searchClear('industryType');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                業種区分\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n            <div class=\"checkbox\">\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"industryTypeMachinery\" value=\"\" [(ngModel)]=\"industryTypeMachinery\"> 機械\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"industryTypeElectricalMachinery\" value=\"\" [(ngModel)]=\"industryTypeElectricalMachinery\"> 電機（E）\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"industryTypeInstrumentation\" value=\"\" [(ngModel)]=\"industryTypeInstrumentation\"> 計装（I）\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"industryTypeInfo\" value=\"\" [(ngModel)]=\"industryTypeInfo\"> 情報（C）\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"industryTypeEnvironment\" value=\"\" [(ngModel)]=\"industryTypeEnvironment\"> 環境\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"industryTypeWBC\" value=\"\" [(ngModel)]=\"industryTypeWBC\"> WBC\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"industryTypeOther\" value=\"\" [(ngModel)]=\"industryTypeOther\"> その他\n              </label>\n            </div>\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"custTypeShow\" [class.condition-hide]=\"!custTypeShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('custType');searchClear('custType');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                顧客分類\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n            <div class=\"checkbox\">\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"custTypeNenkan\" value=\"\" [(ngModel)]=\"custTypeNenkan\"> 年間契約\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"custTypeTenken\" value=\"\" [(ngModel)]=\"custTypeTenken\"> 点検契約\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"custTypeNasi\" value=\"\" [(ngModel)]=\"custTypeNasi\"> 契約なし\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"custTypeKasi\" value=\"\" [(ngModel)]=\"custTypeKasi\"> 瑕疵期間中\n              </label>\n              <label class=\"input-item\">\n                <input type=\"checkbox\" name=\"custTypeOther\" value=\"\" [(ngModel)]=\"custTypeOther\"> その他\n              </label>\n            </div>\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"parentIncidentNoShow\" [class.condition-hide]=\"!parentIncidentNoShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('parentIncidentNo');searchClear('parentIncidentNo');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                親インシデント番号\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_parentIncidentNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"parentIncidentNo\">\n          </div>\n        </span>\n        <span [class.condition-show]=\"incidentStartDateTimeShow\" [class.condition-hide]=\"!incidentStartDateTimeShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('incidentStartDateTime');searchClear('incidentStartDateTime');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                発生日時\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <div class=\"date-div\">\n              <div class=\"input-group\">\n                <input id=\"txt_incidentStartDateTimeFrom\" name=\"txt_incidentStartDateTimeFrom\" type=\"text\" class=\"form-control\" #dpIncidentStartDateTimeFrom=\"bsDatepicker\"\n                  bsDatepicker [bsConfig]=\"bsConfig\" [(bsValue)]=\"incidentStartDateTimeFrom\">\n                <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpIncidentStartDateTimeFrom.toggle()\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n              <span class=\"text-danger\" *ngIf=\"checkDateShowIncidentStartDateFrom\">\n                発生日時に、日付を入力してください。\n              </span>\n            </div>\n            <span class=\"text-center inner-text\">～</span>\n            <div class=\"date-div\">\n              <div class=\"input-group\">\n                <input id=\"txt_incidentStartDateTimeTo\" name=\"txt_incidentStartDateTimeTo\" type=\"text\" class=\"form-control\" #dpIncidentStartDateTimeTo=\"bsDatepicker\" bsDatepicker\n                  [bsConfig]=\"bsConfig\" [(bsValue)]=\"incidentStartDateTimeTo\">\n                <span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpIncidentStartDateTimeTo.toggle()\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n              <span class=\"text-danger\" *ngIf=\"checkDateShowIncidentStartDateTo\">\n                発生日時に、日付を入力してください。\n              </span>\n            </div>\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"salesDeptNmShow\" [class.condition-hide]=\"!salesDeptNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('salesDeptNm');searchClear('salesDeptNm');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                営業部門\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_salesDeptNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"salesDeptNm\">\n          </div>\n        </span>\n        <span [class.condition-show]=\"salesUserNmShow\" [class.condition-hide]=\"!salesUserNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('salesUserNm');searchClear('salesUserNm');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                営業担当者\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_salesUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"salesUserNm\">\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"jigyosyutaiNmShow\" [class.condition-hide]=\"!jigyosyutaiNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('jigyosyutaiNm');searchClear('jigyosyutaiNm');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                事業主体\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_jigyosyutaiNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"jigyosyutaiNm\">\n          </div>\n        </span>\n        <span [class.condition-show]=\"custNmShow\" [class.condition-hide]=\"!custNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('custNm');searchClear('custNm');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                顧客\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_custNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"custNm\">\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <span [class.condition-show]=\"relateUserNmShow\" [class.condition-hide]=\"!relateUserNmShow\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 label-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <button type=\"button\" (click)=\"searchHide('relateUserNm');searchClear('relateUserNm');\" class=\"btn btn-danger btn-close\">&times;</button>\n              </div>\n              <div class=\"\"></div>\n              <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                関係者\n              </label>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <input name=\"txt_relateUserNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"relateUserNm\">\n          </div>\n        </span>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!showKeywordFlg\">\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"form-group\">\n                <select name=\"sel_Condition\" #condition class=\"form-control search-dropdown\" [(ngModel)]=\"selCondition\">\n                  <option value=\"0\">検索項目を選択</option>\n                  <!-- <option [class.condition-hide]=\"incidentNoShow\" value=\"incidentNoShow\">インシデント番号</option> -->\n                  <option *ngIf=\"!incidentNoShow\" value=\"incidentNoShow\">インシデント番号</option>\n                  <option *ngIf=\"!callContentShow\" value=\"callContentShow\">受付内容</option>\n                  <option *ngIf=\"!parentIncidentNoShow\" value=\"parentIncidentNoShow\">親インシデント番号</option>\n                  <option *ngIf=\"!incidentStartDateTimeShow\" value=\"incidentStartDateTimeShow\">発生日時</option>\n                  <option *ngIf=\"!callDateShow\" value=\"callDateShow\">受付日</option>\n                  <option *ngIf=\"!industryTypeShow\" value=\"industryTypeShow\">業種区分</option>\n                  <option *ngIf=\"!kijoNmShow\" value=\"kijoNmShow\">機場</option>\n                  <option *ngIf=\"!jigyosyutaiNmShow\" value=\"jigyosyutaiNmShow\">事業主体</option>\n                  <option *ngIf=\"!setubiNmShow\" value=\"setubiNmShow\">設備</option>\n                  <option *ngIf=\"!prefNmShow\" value=\"prefNmShow\">都道府県</option>\n                  <option *ngIf=\"!custNmShow\" value=\"custNmShow\">顧客</option>\n                  <option *ngIf=\"!custTypeShow\" value=\"custTypeShow\">顧客分類</option>\n                  <option *ngIf=\"!salesDeptNmShow\" value=\"salesDeptNmShow\">営業部門</option>\n                  <option *ngIf=\"!salesUserNmShow\" value=\"salesUserNmShow\">営業担当者</option>\n                  <option *ngIf=\"!relateUserNmShow\" value=\"relateUserNmShow\">関係者</option>\n                  <option *ngIf=\"!incidentTypeShow\" value=\"incidentTypeShow\">インシデント分類</option>\n                  <option *ngIf=\"!incidentStsShow\" value=\"incidentStsShow\">ステータス</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n          <button type=\"button\" (click)=\"addCondition();\" class=\"btn btn-xs btn-warning\">検索項目を追加</button>\n          <button type=\"button\" (click)=\"conditionSaveModal.openModal(getCondition());\" class=\"btn btn-xs btn-warning\">検索条件を保存</button>\n          <button type=\"button\" (click)=\"conditionDeleteModal.openModal();\" class=\"btn btn-xs btn-warning\" *ngIf=\"showDelFlg\">検索条件を削除</button>\n          <button type=\"button\" disabled=\"true\" class=\"btn btn-xs btn-warning\" *ngIf=\"!showDelFlg\">検索条件を削除</button>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 search-result-info\">\n              検索結果：　{{bigTotalItems}}件\n            </div>\n            <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 transition-button text-right\">\n              <button type=\"button\" (click)=\"excelOutput()\" class=\"btn btn-warning\">\n                <i class=\"fa fa-download\"></i> EXCEL出力</button>\n              <button type=\"button\" (click)=\"searchClear('all')\" class=\"btn btn-danger\"> リセット</button>\n              <button type=\"button\" (click)=\"search()\" class=\"btn btn-danger\" *ngIf=\"!showKeywordFlg\">\n                <i class=\"fa fa-search\"></i> 検索</button>\n              <button type=\"button\" (click)=\"searchByKeyword()\" class=\"btn btn-danger\" *ngIf=\"showKeywordFlg\">\n                <i class=\"fa fa-search\"></i> 検索</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n          <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n            [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\n        </div>\n        <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4 text-right\">\n          <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged(null)\"> 件/頁\n        </div>\n      </div>\n\n    </form>\n    <div class=\"row\" id=\"search-list\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"panel\">\n          <table class=\"table table-striped list-table\">\n            <thead>\n              <tr>\n                <th class=\"table-header-list incident-no-th\" (click)='sort(\"incidentNo\")'>\n                  インシデント番号\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['incidentNoAsc']\" [class.fa-caret-down]=\"orderByParamArray['incidentNoDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list\" width=\"25%\" (click)='sort(\"callContent\")'> 受付内容\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['callContentAsc']\" [class.fa-caret-down]=\"orderByParamArray['callContentDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list\" (click)='sort(\"kijoNm\")'>機場\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['kijoNmAsc']\" [class.fa-caret-down]=\"orderByParamArray['kijoNmDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list\" (click)='sort(\"setubiNm\")'>設備\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['setubiNmAsc']\" [class.fa-caret-down]=\"orderByParamArray['setubiNmDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list\" (click)='sort(\"prefNm\")'>都道府県\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['prefNmAsc']\" [class.fa-caret-down]=\"orderByParamArray['prefNmDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list\" (click)='sort(\"incidentStartDateTime\")'>発生日時\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['incidentStartDateTimeAsc']\" [class.fa-caret-down]=\"orderByParamArray['incidentStartDateTimeDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list\" (click)='sort(\"callDate\")'>受付日<i class=\"fa fa-caret-down\"></i>\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['callDateAsc']\" [class.fa-caret-down]=\"orderByParamArray['callDateDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list\" (click)='sort(\"incidentTypeNm\")'>分類\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['incidentTypeNmAsc']\" [class.fa-caret-down]=\"orderByParamArray['incidentTypeNmDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list\" (click)='sort(\"incidentStatusNm\")'>ステータス\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['incidentStatusNmAsc']\" [class.fa-caret-down]=\"orderByParamArray['incidentStatusNmDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list relate-th\" popover=\"関連プロジェクト\" triggers=\"mouseenter:mouseleave\" (click)='sort(\"relatePj\")'>関連PJ\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['relatePjAsc']\" [class.fa-caret-down]=\"orderByParamArray['relatePjDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list relate-th\" popover=\"事故クレーム連絡\" triggers=\"mouseenter:mouseleave\" (click)='sort(\"relateJiko\")'>事ク連絡\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['relateJikoAsc']\" [class.fa-caret-down]=\"orderByParamArray['relateJikoDesc']\"></i> -->\n                </th>\n                <th class=\"table-header-list relate-th\" popover=\"現地出動（MR2）\" triggers=\"mouseenter:mouseleave\" (click)='sort(\"relateMr2\")'>現地出動\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['relateMr2Asc']\" [class.fa-caret-down]=\"orderByParamArray['relateMr2Desc']\"></i> -->\n                </th>\n                <th class=\"table-header-list relate-th\" (click)='sort(\"relateHiyo\")'>費用決済\n                  <!-- <i class=\"fa\" [class.fa-caret-up]=\"orderByParamArray['relateHiyoAsc']\" [class.fa-caret-down]=\"orderByParamArray['relateHiyoDesc']\"></i> -->\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <!-- <tr *ngFor=\"let data of incidentList | orderBy:order | slice: start: end\"> -->\n              <tr *ngFor=\"let data of incidentList | slice: start: end\">\n                <td class=\"code-list\">\n                  <a routerLink=\"/detail/{{data?.incidentId}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                    <u>{{data?.incidentNo}}</u>\n                  </a>\n                </td>\n                <td class=\"char-list\" title={{data?.callContent}}>\n                  {{data?.callContent | slice: 0:40 }}\n                  <span *ngIf=\"data?.callContent?.length >= 40\">…</span>\n                </td>\n                <td class=\"char-list\">{{data?.kijoNm}}</td>\n                <td class=\"char-list\">{{data?.setubiNm}}</td>\n                <td class=\"status-list\">{{data?.prefNm}}</td>\n                <td class=\"date-list\">{{data?.incidentStartDateTime| datex:'YYYY/MM/DD HH:mm'}}</td>\n                <td class=\"date-list\">{{data?.callDate| datex:'YYYY/MM/DD HH:mm'}}</td>\n                <td class=\"status-list\">{{data?.incidentTypeNm}}</td>\n                <td class=\"status-list\">{{data?.incidentStatusNm}}</td>\n                <td class=\"status-list\">{{data?.relatePj}}</td>\n                <td class=\"status-list\">{{data?.relateJiko}}</td>\n                <td class=\"status-list\">{{data?.relateMr2}}</td>\n                <td class=\"status-list\">{{data?.relateHiyo}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n        <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n          [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_chronos__ = __webpack_require__("../../../../ngx-bootstrap/chronos/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipe_order_by_pipe__ = __webpack_require__("../../../../../src/app/pipe/order.by.pipe.ts");
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







// datepikerの設定
Object(__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_chronos__["a" /* defineLocale */])('ja', __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_locale__["a" /* jaLocale */]);
var ListComponent = /** @class */ (function () {
    function ListComponent(route, jsonpService, loginService, _localeService) {
        var _this = this;
        this.route = route;
        this.jsonpService = jsonpService;
        this.loginService = loginService;
        this._localeService = _localeService;
        this.isLoading = true;
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
        this.prefNmShow = false;
        this.custNmShow = false;
        this.custTypeShow = false;
        this.salesDeptNmShow = false;
        this.salesUserNmShow = false;
        this.relateUserNmShow = false;
        this.condList = [];
        this.condId = null;
        this.condNm = null;
        // userId = null;
        // userName = null;
        // sectionCd = null;
        // sectionName = null;
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
        this.custNm = null;
        this.custTypeNenkan = null;
        this.custTypeTenken = null;
        this.custTypeNasi = null;
        this.custTypeKasi = null;
        this.custTypeOther = null;
        this.salesDeptNm = null;
        this.salesUserNm = null;
        this.relateUserNm = null;
        this.checkDateShowCallStartDateFrom = false; //受付日（FROM）(日付型チェック)
        this.checkDateShowCallStartDateTo = false; //受付日（TO）(日付型チェック)
        this.checkDateShowIncidentStartDateFrom = false; //発生日時（FROM）(日付型チェック)
        this.checkDateShowIncidentStartDateTo = false; //発生日時（TO）(日付型チェック)
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
        this.locale = 'ja';
        this.locales = Object(__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_chronos__["b" /* listLocales */])();
        // 並び替え処理宣言
        this.order = new __WEBPACK_IMPORTED_MODULE_8__pipe_order_by_pipe__["a" /* OrderByParam */]();
        this.orderByParamArray = {
            'incidentNoAsc': false,
            'incidentNoDesc': false,
            'callContentAsc': false,
            'callContentDesc': false,
            'kijoNmAsc': false,
            'kijoNmDesc': false,
            'setubiNmAsc': false,
            'setubiNmDesc': false,
            'prefNmAsc': false,
            'prefNmDesc': false,
            'incidentStartDateTimeAsc': false,
            'incidentStartDateTimeDesc': false,
            'callDateAsc': false,
            'callDateDesc': false,
            'incidentTypeNmAsc': false,
            'incidentTypeNmDesc': false,
            'incidentStatusNmAsc': false,
            'incidentStatusNmDesc': false,
            'relatePjAsc': false,
            'relatePjDesc': false,
            'relateJikoAsc': false,
            'relateJikoDesc': false,
            'relateMr2Asc': false,
            'relateMr2Desc': false,
            'relateHiyoAsc': false,
            'relateHiyoDesc': false // 費用決済のソートアイコン　降順
        };
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        /* ログイン情報の取得 */
        this.subscription = loginService.loginUserNm$.subscribe(function (user) { _this.userNm = user; });
        this.subscription = loginService.loginUserId$.subscribe(function (user) { _this.userId = user; });
        this.subscription = loginService.loginUserSectionCd$.subscribe(function (user) { _this.userSectionCd = user; });
        this.subscription = loginService.loginUserSectionNm$.subscribe(function (user) { _this.userSectionNm = user; });
        // datepikerの設定
        this.bsConfig = Object.assign({}, { dateInputFormat: 'YYYY/MM/DD' });
        this._localeService.use(this.locale);
    }
    ListComponent.prototype.ngOnInit = function () {
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
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
        // this.defaultSort("callDate");
    };
    ListComponent.prototype.ngOnDestroy = function () {
        // 親サービスDIの影響 メモリリーク防止
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    // 画面再表示処理
    ListComponent.prototype.reloadSearch = function ($event) {
        if ($event) {
            this.searchClear('all');
            // 検索条件のデフォルト設定
            var condId = $event["condId"];
            var keyword = $event["keyword"];
            this.setDefaultShow();
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
            case 'prefNmShow':
                this.prefNmShow = true;
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
            case 'incidentTypeShow':
                this.incidentTypeShow = true;
                // 検索項目プルダウンを初期化
                this.selCondition = "0";
                break;
            case 'incidentStsShow':
                this.incidentStsShow = true;
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
        // 日付項目の確認
        if (!this.checkDate()) {
            return false;
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
            conditionArray[27] = this.prefNm;
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
            conditionArray[38] = this.userNm;
            // sectionCd
            conditionArray[39] = this.userSectionCd;
            // sectionName
            conditionArray[40] = this.userSectionNm;
        }
        else {
            conditionArray[0] = false;
        }
        return conditionArray;
    };
    // 登録している検索条件が変更された
    ListComponent.prototype.changeCondition = function ($event) {
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
        // インシデント分類
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
        this.prefNmShow = true;
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
    // 検索結果Excel出力処理
    ListComponent.prototype.excelOutput = function () {
    };
    // 日付型値の日付型チェック
    ListComponent.prototype.checkDate = function () {
        // 初期化エラーメッセージを表示しない
        this.checkShowInit();
        var result = true; // 返り値
        // 受付日（FROM）
        var callStartDateFromValue = document.getElementById('txt_callStartDateFrom').value;
        var callStartDateFromStr = this.getDateStringFromDate(this.callStartDateFrom);
        if (callStartDateFromStr == null && callStartDateFromValue != "") {
            this.checkDateShowCallStartDateFrom = true;
            result = false;
        }
        // 受付日（TO）
        var callStartDateToValue = document.getElementById('txt_callStartDateTo').value;
        var callStartDateToStr = this.getDateStringFromDate(this.callStartDateTo);
        if (callStartDateToStr == null && callStartDateToValue != "") {
            this.checkDateShowCallStartDateTo = true;
            result = false;
        }
        // 発生日時（FROM）
        var incidentStartDateFromValue = document.getElementById('txt_incidentStartDateTimeFrom').value;
        var incidentStartDateTimeFromStr = this.getDateStringFromDate(this.incidentStartDateTimeFrom);
        if (incidentStartDateTimeFromStr == null && incidentStartDateFromValue != "") {
            this.checkDateShowIncidentStartDateFrom = true;
            result = false;
        }
        // 発生日時（TO）
        var incidentStartDateToValue = document.getElementById('txt_incidentStartDateTimeTo').value;
        var incidentStartDateTimeToStr = this.getDateStringFromDate(this.incidentStartDateTimeTo);
        if (incidentStartDateTimeToStr == null && incidentStartDateToValue != "") {
            this.checkDateShowIncidentStartDateTo = true;
            result = false;
        }
        return result;
    };
    // 初期化エラーメッセージを表示しない
    ListComponent.prototype.checkShowInit = function () {
        this.checkDateShowCallStartDateFrom = false; //受付日（FROM）(日付型チェック)
        this.checkDateShowCallStartDateTo = false; //受付日（TO）(日付型チェック)
        this.checkDateShowIncidentStartDateFrom = false; //発生日時（FROM）(日付型チェック)
        this.checkDateShowIncidentStartDateTo = false; //発生日時（TO）(日付型チェック)
    };
    // 検索処理
    ListComponent.prototype.search = function () {
        var _this = this;
        if (this.checkDate()) {
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
            var incidentStartDateTimeFromStr = this.getDateStringFromDate(this.incidentStartDateTimeFrom);
            ps.set("incidentStartDateTimeFrom", incidentStartDateTimeFromStr);
            var incidentStartDateTimeToStr = this.getDateStringFromDate(this.incidentStartDateTimeTo);
            ps.set("incidentStartDateTimeTo", incidentStartDateTimeToStr);
            ps.set("incidentTypeSyougai", this.incidentTypeSyougai);
            ps.set("incidentTypeJiko", this.incidentTypeJiko);
            ps.set("incidentTypeClaim", this.incidentTypeClaim);
            ps.set("incidentTypeToiawase", this.incidentTypeToiawase);
            ps.set("incidentTypeInfo", this.incidentTypeInfo);
            ps.set("incidentTypeOther", this.incidentTypeOther);
            ps.set("incidentStatusCall", this.incidentStatusCall);
            ps.set("incidentStatusTaio", this.incidentStatusTaio);
            ps.set("incidentStatusAct", this.incidentStatusAct);
            ps.set("parentIncidentNo", this.parentIncidentNo);
            ps.set("industryTypeMachinery", this.industryTypeMachinery);
            ps.set("industryTypeElectricalMachinery", this.industryTypeElectricalMachinery);
            ps.set("industryTypeInstrumentation", this.industryTypeInstrumentation);
            ps.set("industryTypeInfo", this.industryTypeInfo);
            ps.set("industryTypeEnvironment", this.industryTypeEnvironment);
            ps.set("industryTypeWBC", this.industryTypeWBC);
            ps.set("industryTypeOther", this.industryTypeOther);
            ps.set("jigyosyutaiNm", this.jigyosyutaiNm);
            ps.set("custNm", this.custNm);
            ps.set("custTypeNenkan", this.custTypeNenkan);
            ps.set("custTypeTenken", this.custTypeTenken);
            ps.set("custTypeNasi", this.custTypeNasi);
            ps.set("custTypeKasi", this.custTypeKasi);
            ps.set("custTypeOther", this.custTypeOther);
            ps.set("salesDeptNm", this.salesDeptNm);
            ps.set("salesUserNm", this.salesUserNm);
            ps.set("relateUserNm", this.relateUserNm);
            // 検索
            this.isLoading = true;
            this.jsonpService.requestGet('IncidentListDataGet.php', ps)
                .subscribe(function (data) {
                // 通信成功時
                if (data[0]) {
                    var list = data[0];
                    if (list.result !== '' && list.result == true) {
                        // 画面表示パラメータのセット処理
                        _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                    }
                }
                _this.currentPage = 1;
                _this.pageChanged(null);
                _this.isLoading = false;
            }, function (error) {
                // 通信失敗もしくは、コールバック関数内でエラー
                console.log(error);
                console.log('サーバとのアクセスに失敗しました。');
                _this.isLoading = false;
                return false;
            });
        }
    };
    // 検索処理
    ListComponent.prototype.searchCondition = function (condId) {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set("condId", condId);
        // 検索
        this.isLoading = true;
        this.jsonpService.requestGet('IncidentListSearchConditionGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
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
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    // 設置表示条件と条件値
    ListComponent.prototype.setConditionShowAndVal = function (condFld, condVal) {
        switch (condFld) {
            case "incidentTypeSyougai":// インシデント分類（障害）
                this.incidentTypeSyougai = true;
                break;
            case "incidentTypeJiko":// インシデント分類（事故）
                this.incidentTypeJiko = true;
                break;
            case "incidentTypeClaim":// インシデント分類（クレーム）
                this.incidentTypeClaim = true;
                break;
            case "incidentTypeToiawase":// インシデント分類（問合せ）
                this.incidentTypeToiawase = true;
                break;
            case "incidentTypeInfo":// インシデント分類（情報）
                this.incidentTypeInfo = true;
                break;
            case "incidentTypeOther":// インシデント分類（その他）
                this.incidentTypeOther = true;
                break;
            case "incidentStatusCall":// ステータス（受入済）
                this.incidentStatusCall = true;
                break;
            case "incidentStatusTaio":// ステータス（対応入力済）
                this.incidentStatusTaio = true;
                break;
            case "incidentStatusAct":// ステータス（処置入力済）
                this.incidentStatusAct = true;
                break;
            case "incidentNo":// インシデント番号
                this.incidentNo = condVal;
                break;
            case "callContent":// 受付内容
                this.callContent = condVal;
                break;
            case "parentIncidentNo":// 親インシデント番号
                this.parentIncidentNo = condVal;
                this.parentIncidentNoShow = true;
                break;
            case "incidentStartDateTimeFrom":// 発生日時（開始）
                this.incidentStartDateTimeFrom = this.getJsDate(condVal);
                this.incidentStartDateTimeShow = true;
                break;
            case "incidentStartDateTimeTo":// 発生日時（終了）
                this.incidentStartDateTimeTo = this.getJsDate(condVal);
                this.incidentStartDateTimeShow = true;
                break;
            case "callStartDateFrom":// 受付日（開始）
                this.callStartDateFrom = this.getJsDate(condVal);
                break;
            case "callStartDateTo":// 受付日（終了）
                this.callStartDateTo = this.getJsDate(condVal);
                break;
            case "industryTypeMachinery":// 業種区分（機械）
                this.industryTypeShow = true;
                this.industryTypeMachinery = true;
                break;
            case "industryTypeElectricalMachinery":// 業種区分（電機（E））
                this.industryTypeShow = true;
                this.industryTypeElectricalMachinery = condVal;
                break;
            case "industryTypeInstrumentation":// 業種区分（計装（I））
                this.industryTypeShow = true;
                this.industryTypeInstrumentation = condVal;
                break;
            case "industryTypeInfo":// 業種区分（情報（C））
                this.industryTypeShow = true;
                this.industryTypeInfo = condVal;
                break;
            case "industryTypeEnvironment":// 業種区分（環境）
                this.industryTypeShow = true;
                this.industryTypeEnvironment = condVal;
                break;
            case "industryTypeWBC":// 業種区分（WBC）
                this.industryTypeShow = true;
                this.industryTypeWBC = condVal;
                break;
            case "industryTypeOther":// 業種区分（その他）
                this.industryTypeShow = true;
                this.industryTypeOther = condVal;
                break;
            case "kijoNm":// 機場
                this.kijoNm = condVal;
                break;
            case "jigyosyutaiNm":// 事業主体
                this.jigyosyutaiNm = condVal;
                this.jigyosyutaiNmShow = true;
                break;
            case "setubiNm":// 設備
                this.setubiNm = condVal;
                break;
            case "prefNm":// 都道府県
                this.prefNm = condVal;
                break;
            case "custNm":// 顧客
                this.custNm = condVal;
                this.custNmShow = true;
                break;
            case "custTypeNenkan":// 顧客分類（年間契約）
                this.custTypeShow = true;
                this.custTypeNenkan = true;
                break;
            case "custTypeTenken":// 顧客分類（点検契約）
                this.custTypeShow = true;
                this.custTypeTenken = true;
                break;
            case "custTypeNasi":// 顧客分類（契約なし）
                this.custTypeShow = true;
                this.custTypeNasi = true;
                break;
            case "custTypeKasi":// 顧客分類（瑕疵期間中）
                this.custTypeShow = true;
                this.custTypeKasi = true;
                break;
            case "custTypeOther":// 顧客分類（その他）
                this.custTypeShow = true;
                this.custTypeOther = true;
                break;
            case "salesDeptNm":// 営業部門
                this.salesDeptNm = condVal;
                this.salesDeptNmShow = true;
                break;
            case "salesUserNm":// 営業担当者
                this.salesUserNm = condVal;
                this.salesUserNmShow = true;
                break;
            case "relateUserNm":// 関係者
                this.relateUserNm = condVal;
                this.relateUserNmShow = true;
                break;
            default:
                break;
        }
    };
    // サーバから取得した日付をJavascriptのDate型に変更する（失敗時は、nullを返す）
    ListComponent.prototype.getJsDate = function (date) {
        if (date && new Date(date)) {
            return new Date(date);
        }
        return null;
    };
    // 日付型を日付フォーマット文字列に変更
    ListComponent.prototype.getDateStringFromDate = function (date) {
        if (date && date.getFullYear()) {
            var y = date.getFullYear();
            var m = date.getMonth();
            m++;
            var d = date.getDate();
            if (y) {
                var yStr = ('00' + y).slice(-4);
            }
            if (m) {
                var mStr = ('00' + m).slice(-2);
            }
            if (d) {
                var dStr = ('00' + d).slice(-2);
            }
            if (yStr && mStr && dStr) {
                return yStr + "/" + mStr + "/" + dStr + " 00:00:00";
            }
            else {
                // 日付型でない値の場合
                return null;
            }
        }
        else {
            // 日付型でない値の場合
            return null;
        }
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
    // 並び替え処理(デフォルトの並び順指定)
    ListComponent.prototype.defaultSort = function (column) {
        var columnAsc = column + 'Asc';
        var columnDesc = column + 'Desc';
        this.changeOrderBy(columnDesc, columnAsc);
        var orderBy = 'Desc';
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
        this.isLoading = true;
        this.jsonpService.requestGet('IncidentListDataGetByKeyword.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    // 検索条件非表示
    ListComponent.prototype.searchHide = function (keyword) {
        switch (keyword) {
            case "incidentNo":// インシデント番号
                this.incidentNoShow = false;
                break;
            case "callContent":// 受付内容
                this.callContentShow = false;
                break;
            case "kijoNm":// 機場
                this.kijoNmShow = false;
                break;
            case "setubiNm":// 設備
                this.setubiNmShow = false;
                break;
            case "prefNm":// 都道府県
                this.prefNmShow = false;
                break;
            case "callDate":// 受付日
                this.callDateShow = false;
                break;
            case "incidentType":// インシデント分類
                this.incidentTypeShow = false;
                break;
            case "incidentSts":// ステータス
                this.incidentStsShow = false;
                break;
            case "industryType":// 業種区分
                this.industryTypeShow = false;
                break;
            case "custType":// 顧客分類
                this.custTypeShow = false;
                break;
            case "parentIncidentNo":// 親インシデント番号
                this.parentIncidentNoShow = false;
                break;
            case "incidentStartDateTime":// 発生日時
                this.incidentStartDateTimeShow = false;
                break;
            case "salesDeptNm":// 営業部門
                this.salesDeptNmShow = false;
                break;
            case "salesUserNm":// 営業担当者
                this.salesUserNmShow = false;
                break;
            case "jigyosyutaiNm":// 事業主体
                this.jigyosyutaiNmShow = false;
                break;
            case "custNm":// 顧客
                this.custNmShow = false;
                break;
            case "relateUserNm":// 関係者
                this.relateUserNmShow = false;
                break;
            default:
                break;
        }
    };
    // 検索条件クリア
    ListComponent.prototype.searchClear = function (keyword) {
        switch (keyword) {
            case "all"://　全クリア
                this.checkShowInit(); // 初期化エラーメッセージを表示しない
                this.keyword = "";
                this.incidentNo = "";
                this.callContent = "";
                this.parentIncidentNo = "";
                this.kijoNm = "";
                this.jigyosyutaiNm = "";
                this.setubiNm = "";
                this.custNm = "";
                this.salesDeptNm = "";
                this.salesUserNm = "";
                this.relateUserNm = "";
                this.incidentStartDateTimeFrom = "";
                this.incidentStartDateTimeTo = "";
                this.callStartDateFrom = "";
                this.callStartDateTo = "";
                this.prefNm = null;
                this.incidentTypeSyougai = null;
                this.incidentTypeJiko = null;
                this.incidentTypeClaim = null;
                this.incidentTypeToiawase = null;
                this.incidentTypeInfo = null;
                this.incidentTypeOther = null;
                this.incidentStatusCall = null;
                this.incidentStatusTaio = null;
                this.incidentStatusAct = null;
                this.industryTypeMachinery = null;
                this.industryTypeElectricalMachinery = null;
                this.industryTypeInstrumentation = null;
                this.industryTypeInfo = null;
                this.industryTypeEnvironment = null;
                this.industryTypeWBC = null;
                this.industryTypeOther = null;
                this.custTypeNenkan = null;
                this.custTypeTenken = null;
                this.custTypeNasi = null;
                this.custTypeKasi = null;
                this.custTypeOther = null;
                break;
            case "keyword":// キーワード
                this.keyword = "";
                break;
            case "incidentNo":// インシデント番号
                this.incidentNo = "";
                break;
            case "callContent":// 受付内容
                this.callContent = "";
                break;
            case "kijoNm":// 機場
                this.kijoNm = "";
                break;
            case "setubiNm":// 設備
                this.setubiNm = "";
                break;
            case "prefNm":// 都道府県
                this.prefNm = null;
                break;
            case "callDate":// 受付日
                this.checkDateShowCallStartDateFrom = false; //受付日（FROM）(日付型チェックエラーメッセージ表示Flg)
                this.checkDateShowCallStartDateTo = false; //受付日（TO）(日付型チェックエラーメッセージ表示Flg)
                this.callStartDateFrom = "";
                this.callStartDateTo = "";
                break;
            case "incidentType":// インシデント分類
                this.incidentTypeSyougai = null;
                this.incidentTypeJiko = null;
                this.incidentTypeClaim = null;
                this.incidentTypeToiawase = null;
                this.incidentTypeInfo = null;
                this.incidentTypeOther = null;
                break;
            case "incidentSts":// ステータス
                this.incidentStatusCall = null;
                this.incidentStatusTaio = null;
                this.incidentStatusAct = null;
                break;
            case "industryType":// 業種区分
                this.industryTypeMachinery = null;
                this.industryTypeElectricalMachinery = null;
                this.industryTypeInstrumentation = null;
                this.industryTypeInfo = null;
                this.industryTypeEnvironment = null;
                this.industryTypeWBC = null;
                this.industryTypeOther = null;
                break;
            case "custType":// 顧客分類
                this.custTypeNenkan = null;
                this.custTypeTenken = null;
                this.custTypeNasi = null;
                this.custTypeKasi = null;
                this.custTypeOther = null;
                break;
            case "parentIncidentNo":// 親インシデント番号
                this.parentIncidentNo = "";
                break;
            case "incidentStartDateTime":// 発生日時
                this.checkDateShowIncidentStartDateFrom = false; //発生日時（FROM）(日付型チェックエラーメッセージ表示Flg)
                this.checkDateShowIncidentStartDateTo = false; //発生日時（TO）(日付型チェックエラーメッセージ表示Flg)
                this.incidentStartDateTimeFrom = "";
                this.incidentStartDateTimeTo = "";
                break;
            case "salesDeptNm":// 営業部門
                this.salesDeptNm = "";
                break;
            case "salesUserNm":// 営業担当者
                this.salesUserNm = "";
                break;
            case "jigyosyutaiNm":// 事業主体
                this.jigyosyutaiNm = "";
                break;
            case "custNm":// 顧客
                this.custNm = "";
                break;
            case "relateUserNm":// 関係者
                this.relateUserNm = "";
                break;
            default:
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('header'),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "header", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_7__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loading/loading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n    position: fixed;\r\n    left: 0px;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    z-index: 99999999;\r\n}\r\n.overlay .message {\r\n    text-align: center;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    width: 200px;\r\n    height: 40px;\r\n    background: rgba(220, 220, 230, 0.8);\r\n    border-radius: 10px;\r\n    -webkit-border-radius: 10px;\r\n    -moz-border-radius: 10px;\r\n    padding-top: 10px;\r\n}\r\n.overlay .message .rotate {\r\n    position: absolute;\r\n    left: 40px;\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: #1aa;\r\n    -webkit-animation: spin 1.5s linear infinite;\r\n    animation: spin 1.5s linear infinite;\r\n}\r\n@-webkit-keyframes spin {\r\n    0% {-webkit-transform: rotate(0deg);}\r\n    100% {-webkit-transform: rotate(360deg);}\r\n}\r\n@keyframes spin {\r\n    0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\r\n    100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\n  <div class=\"message\">\n      <div class=\"rotate\"></div>\n      loading...\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "loading", void 0);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'loading',
            template: __webpack_require__("../../../../../src/app/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loading/loading.component.css")]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(jsonpService) {
        this.jsonpService = jsonpService;
        this.loginUserIdSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.loginUserId$ = this.loginUserIdSource.asObservable();
        this.loginUserNmSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.loginUserNm$ = this.loginUserNmSource.asObservable();
        this.loginUserSectionCdSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.loginUserSectionCd$ = this.loginUserSectionCdSource.asObservable();
        this.loginUserSectionNmSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.loginUserSectionNm$ = this.loginUserSectionNmSource.asObservable();
    }
    // ログイン
    LoginService.prototype.logIn = function (user) {
        var _this = this;
        if (user && user[0]['loginUserId']) {
            this.loginUserIdSource.next(user[0]['loginUserId']); // ログインユーザIDを格納
            // ログインユーザ情報を取得
            var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
            ps.set('userId', user[0]['loginUserId']);
            this.jsonpService.commonRequestGet('UserDataGet.php', ps)
                .subscribe(function (data) {
                // 通信成功時
                if (data && data[0] && data[0].result !== '' && data[0].result == true) {
                    // 認証成功
                    var userData = data.slice(1)[0];
                    _this.loginUserNmSource.next(userData['userNm']); // ログインユーザ名を格納
                    _this.loginUserSectionCdSource.next(userData['sectionCd']); // ログインユーザ部署CDを格納
                    _this.loginUserSectionNmSource.next(userData['sectionNm']); // ログインユーザ部署名を格納
                }
                else {
                    // 認証に失敗
                    console.log('ユーザ情報の取得に失敗しました。');
                    // 認証画面に遷移する
                    _this.goLogIn();
                }
            }, function (error) {
                // 通信失敗もしくは、コールバック関数内でエラー
                console.log(error);
                // 認証に失敗
                console.log('ユーザ情報の取得に失敗しました。');
                // 認証画面に遷移する
                _this.goLogIn();
            });
        }
        else {
            // 認証に失敗
            console.log('ユーザ情報の取得に失敗しました。');
            // 認証画面に移行
            this.goLogIn();
        }
    };
    // 認証画面に移行
    LoginService.prototype.goLogIn = function () {
        window.location.replace(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].envPath);
    };
    // ログアウト
    LoginService.prototype.getLogOutUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].envPath + "kyoninsyo/kyo_logout.php";
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/modal/btn.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：ボタンモーダル\n//\t作成日付・作成者：2018.02.13 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-ms\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>{{headerStr}}</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 common-mes\">\n            {{mes}}\n          </div>\n        </div>\n\n        <div class=\"row\" [class.common-enter-btn-show]=\"enterBtn1Show || enterBtn2Show\" [class.common-enter-btn-hide]=\"!enterBtn1Show && !enterBtn2Show\">\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"enter1()\">\n              {{enterBtn1Str}}\n            </button>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"enter2()\">\n              {{enterBtn2Str}}\n            </button>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"close()\">\n              {{closeBtnStr}}\n            </button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/btn.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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


var BtnModalComponent = /** @class */ (function () {
    function BtnModalComponent(modalService) {
        this.modalService = modalService;
        // 自作イベント(親コンポーネントのメソッド呼び出し)
        this.commonEnter1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.commonEnter2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.commonClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.enterBtn1Show = false; // 処理ボタンの表示フラグ
        this.enterBtn2Show = false; // 処理ボタンの表示フラグ
    }
    // モーダル表示
    BtnModalComponent.prototype.openModal = function (headerStr, mes, enterBtn1Str, enterBtn2Str, closeBtnStr) {
        this.setHeaderStr(headerStr);
        this.setMes(mes);
        this.setEnterBtn1Str(enterBtn1Str);
        this.setEnterBtn2Str(enterBtn2Str);
        this.setCloseBtnStr(closeBtnStr);
        this.template.show();
    };
    // モーダルヘッダー文字列の初期化
    BtnModalComponent.prototype.setHeaderStr = function (headerStr) {
        this.headerStr = headerStr;
    };
    // 表示メッセージの初期化
    BtnModalComponent.prototype.setMes = function (mes) {
        this.mes = mes;
    };
    // 処理ボタンの表示文字列の初期化
    BtnModalComponent.prototype.setEnterBtn1Str = function (btnStr) {
        this.enterBtn1Str = btnStr;
        if (btnStr) {
            // 処理ボタンの表示文字列がある場合のみ処理ボタンを表示する
            this.enterBtn1Show = true;
        }
        else {
            // 処理ボタン非表示
            this.enterBtn1Show = false;
        }
    };
    // 処理ボタンの表示文字列の初期化
    BtnModalComponent.prototype.setEnterBtn2Str = function (btnStr) {
        this.enterBtn2Str = btnStr;
        if (btnStr) {
            // 処理ボタンの表示文字列がある場合のみ処理ボタンを表示する
            this.enterBtn2Show = true;
        }
        else {
            // 処理ボタン非表示
            this.enterBtn2Show = false;
        }
    };
    // 閉じるボタンの表示文字列の初期化
    BtnModalComponent.prototype.setCloseBtnStr = function (btnStr) {
        this.closeBtnStr = btnStr;
    };
    // 処理ボタン1を押した
    BtnModalComponent.prototype.enter1 = function () {
        // モーダルを閉じる
        this.template.hide();
        // 親コンポーネントの処理を実行する為に、イベントを発火
        this.commonEnter1.emit({});
    };
    // 処理ボタン2を押した
    BtnModalComponent.prototype.enter2 = function () {
        // モーダルを閉じる
        this.template.hide();
        // 親コンポーネントの処理を実行する為に、イベントを発火
        this.commonEnter2.emit({});
    };
    // 閉じるボタンを押した
    BtnModalComponent.prototype.close = function () {
        // モーダルを閉じる
        this.template.hide();
        // 親コンポーネントの処理を実行する為に、イベントを発火
        this.commonClose.emit({});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], BtnModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], BtnModalComponent.prototype, "commonEnter1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], BtnModalComponent.prototype, "commonEnter2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], BtnModalComponent.prototype, "commonClose", void 0);
    BtnModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'btn-modal',
            template: __webpack_require__("../../../../../src/app/modal/btn.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], BtnModalComponent);
    return BtnModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/common.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：共通モーダル部品\n//\t作成日付・作成者：2018.01.16 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>{{headerStr}}</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 common-mes\">\n            {{mes}}\n          </div>\n        </div>\n\n        <div class=\"row\" [class.common-enter-btn-show]=\"enterBtnShow\" [class.common-enter-btn-hide]=\"!enterBtnShow\">\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"enter()\">\n              {{enterBtnStr}}\n            </button>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"close()\">\n              {{closeBtnStr}}\n            </button>\n          </div>\n        </div>\n\n        <div class=\"row\" [class.common-enter-btn-show]=\"!enterBtnShow\" [class.common-enter-btn-hide]=\"enterBtnShow\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"close()\">\n              {{closeBtnStr}}\n            </button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/common.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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


var CommonModalComponent = /** @class */ (function () {
    function CommonModalComponent(modalService) {
        this.modalService = modalService;
        // 自作イベント(親コンポーネントのメソッド呼び出し)
        this.commonEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.commonClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
    // 閉じるボタンを押した
    CommonModalComponent.prototype.close = function () {
        // モーダルを閉じる
        this.template.hide();
        // 親コンポーネントの処理を実行する為に、イベントを発火
        this.commonClose.emit({});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], CommonModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CommonModalComponent.prototype, "commonEnter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CommonModalComponent.prototype, "commonClose", void 0);
    CommonModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'common-modal',
            template: __webpack_require__("../../../../../src/app/modal/common.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], CommonModalComponent);
    return CommonModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/conditionDelete.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n//*****************************************************************************\r\n//\tシステム名　　　：インシデント管理システム\r\n//\tサブシステム名　：\r\n//\t画面名　　　　　：検索条件の削除画面\r\n//\t作成日付・作成者：2018.01.04 NEWTOUCH)newtouch\r\n//\t修正履歴　　　　：\r\n//*****************************************************************************\r\n-->\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header bg-danger\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>検索条件の削除</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n\r\n          <div class=\"row\" id=\"search-list\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"panel\">\r\n                <table class=\"table table-striped list-table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"table-header-list\" width=\"25%\">選択</th>\r\n                      <th class=\"table-header-list\">検索条件名</th>\r\n                      <th class=\"table-header-list\">登録日時</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of condList\">\r\n                      <td class=\"status-list\"><input #rdoSel type=\"radio\" name=\"rdoCondId\" value={{data?.condId}} [(ngModel)]=\"rdoCondId\"></td>\r\n                      <td class=\"char-list\">{{data?.condNm}}</td>\r\n                      <td class=\"status-list\">{{data?.insDate}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 save-button text-right\">\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"conditionDelete()\">削除</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<common-modal #common (commonEnter)=\"conditionDeleteTrue()\" (commonClose)=\"conditionDeleteFalse()\"></common-modal>\r\n<common-modal #alertCommon></common-modal>"

/***/ }),

/***/ "../../../../../src/app/modal/conditionDelete.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionDeleteModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConditionDeleteModalComponent = /** @class */ (function () {
    function ConditionDeleteModalComponent(route, jsonpService, loginService) {
        var _this = this;
        this.route = route;
        this.jsonpService = jsonpService;
        this.loginService = loginService;
        // listイベント(親コンポーネントのメソッド呼び出し)
        this.conDelButtonshowDelFlg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.changeCondition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.condList = [];
        this.rdoCondId = "";
        this.showDelFlg = false;
        /* ログイン情報の取得 */
        this.subscription = loginService.loginUserNm$.subscribe(function (user) { _this.userNm = user; });
        this.subscription = loginService.loginUserId$.subscribe(function (user) { _this.userId = user; });
        this.subscription = loginService.loginUserSectionCd$.subscribe(function (user) { _this.userSectionCd = user; });
        this.subscription = loginService.loginUserSectionNm$.subscribe(function (user) { _this.userSectionNm = user; });
    }
    // モーダル表示
    ConditionDeleteModalComponent.prototype.openModal = function (condId) {
        var _this = this;
        // パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        // ログイン情報設定
        ps.set('userId', this.userId);
        ps.set('userName', this.userNm);
        ps.set('sectionCd', this.userSectionCd);
        ps.set('sectionName', this.userSectionNm);
        // 検索項目の検索
        this.jsonpService.requestGet('IncidentListConditionGet.php', ps)
            .subscribe(function (data) {
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    data = data.slice(1); // 配列1つ目は、サーバ処理成功フラグなので除外
                    // 通信成功時
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
        this.common.openModal('確認', '検索条件を削除します。宜しいですか？', 'OK', 'キャンセル');
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
                _this.common.openModal('削除完了', data[0]['resultMsg'], '', '閉じる');
                _this.openModal(null);
            }
            else {
                _this.common.openModal('', data[0]['resultMsg'], '', '閉じる');
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log('サーバとのアクセスに失敗しました。');
            _this.common.openModal('', '削除に失敗しました', '', '閉じる');
            return false;
        });
    };
    // 検索項目削除処理False
    ConditionDeleteModalComponent.prototype.conditionDeleteFalse = function () {
        this.template.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], ConditionDeleteModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('common'),
        __metadata("design:type", Object)
    ], ConditionDeleteModalComponent.prototype, "common", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('alertCommon'),
        __metadata("design:type", Object)
    ], ConditionDeleteModalComponent.prototype, "alertCommon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ConditionDeleteModalComponent.prototype, "conDelButtonshowDelFlg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ConditionDeleteModalComponent.prototype, "changeCondition", void 0);
    ConditionDeleteModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'conditionDelete-modal',
            template: __webpack_require__("../../../../../src/app/modal/conditionDelete.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], ConditionDeleteModalComponent);
    return ConditionDeleteModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/conditionSave.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：条件保存モーダル部品\n//\t作成日付・作成者：2017.12.11 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>検索条件の保存</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              検索条件名を入力してください。\n              <input name=\"conditionNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"condNm\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 save-button text-right\">\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"conditionSave()\">保存</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<common-modal #common (commonEnter)=\"conditionSaveTrue()\" (commonClose)=\"conditionSaveFalse()\"></common-modal>\n<common-modal #alertCommon></common-modal>"

/***/ }),

/***/ "../../../../../src/app/modal/conditionSave.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionSaveModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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




var ConditionSaveModalComponent = /** @class */ (function () {
    function ConditionSaveModalComponent(route, jsonpService) {
        this.route = route;
        this.jsonpService = jsonpService;
        // listイベント(親コンポーネントのメソッド呼び出し)
        this.conDelButtonshowDelFlg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.changeCondition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this.condNm = null;
        if (condition[0]) {
            this.template.show();
            this.hidden_condition = condition;
        }
    };
    // 検索項目保存処理
    ConditionSaveModalComponent.prototype.conditionSave = function () {
        if (this.condNm == null || this.condNm == "") {
            this.alertCommon.openModal('警告', '検索条件名は必須入力です。', '', '閉じる');
            return false;
        }
        if (this.condNm.length > 50) {
            this.alertCommon.openModal('警告', '検索条件名は最大50文字です。', '', '閉じる');
            return false;
        }
        this.common.openModal('確認', '検索条件を保存します。宜しいですか？', 'OK', 'キャンセル');
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
        if (this.hidden_condition[27]) {
            ps.set("prefNm", this.hidden_condition[27]);
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
            if (data[0]['resultFlg'] == '0') {
                _this.common.openModal('登録完了', data[0]['resultMsg'], '', '閉じる');
                _this.conDelButtonshowDelFlg.emit({ "showDelFlg": true });
                _this.changeCondition.emit(""); // 検索条件が変更された
                _this.template.hide();
            }
            else {
                _this.common.openModal('', data[0]['resultMsg'], '', '閉じる');
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.common.openModal('', '登録に失敗しました', '', '閉じる');
            return false;
        });
    };
    // 検索項目保存処理False
    ConditionSaveModalComponent.prototype.conditionSaveFalse = function () {
        this.template.close();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], ConditionSaveModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('common'),
        __metadata("design:type", Object)
    ], ConditionSaveModalComponent.prototype, "common", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('alertCommon'),
        __metadata("design:type", Object)
    ], ConditionSaveModalComponent.prototype, "alertCommon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ConditionSaveModalComponent.prototype, "conDelButtonshowDelFlg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ConditionSaveModalComponent.prototype, "changeCondition", void 0);
    ConditionSaveModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'conditionSave-modal',
            template: __webpack_require__("../../../../../src/app/modal/conditionSave.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]])
    ], ConditionSaveModalComponent);
    return ConditionSaveModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/customerSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：顧客（取引先）検索\n//\t作成日付・作成者：2017.12.22 ADF)Takafumi.Sato\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<loading [loading]=\"isLoading\"></loading>\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>顧客の検索</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\n              <button type=\"button\" (click)=\"clearCustomerSearch()\" class=\"btn btn-danger btn-mini\">\n                リセット\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"search()\">\n                <i class=\"fa fa-search\"></i> 検索\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  顧客コード\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchCustomerCd\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchCustomerCd\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  顧客名 事業所名\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchCustomerNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchCustomerNm\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  所在地\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchAddress\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchAddress\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\n              検索結果：　{{bigTotalItems}}件\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\n            </div>\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged(null)\"> 件/頁\n            </div>\n          </div>\n\n          <div class=\"row\" id=\"search-list\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"panel\">\n                <table class=\"table table-striped list-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"table-header-list\"></th>\n                      <th class=\"table-header-list\">顧客コード</th>\n                      <th class=\"table-header-list\">顧客名 事業所名</th>\n                      <th class=\"table-header-list\">所在地</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of customerList | slice: start: end\">\n                      <td class=\"code-list\">\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"onSelect(data?.customerCd, data?.customerNm, data?.address)\">\n                          選択\n                        </button>\n                      </td>\n                      <td class=\"char-list\">{{data.customerCd}}</td>\n                      <td class=\"char-list\">{{data.customerNm}}</td>\n                      <td class=\"char-list\">{{data.address}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/customerSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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




var CustomerSearchModalComponent = /** @class */ (function () {
    function CustomerSearchModalComponent(modalService, jsonpService) {
        this.modalService = modalService;
        this.jsonpService = jsonpService;
        // 顧客（取引先）イベント
        this.customerSearchSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isLoading = false;
        // 検索条件
        this.searchCustomerCd = "";
        this.searchCustomerNm = "";
        this.searchAddress = "";
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        // 顧客（取引先）検索結果リスト
        this.customerList = [];
    }
    // ページング処理
    CustomerSearchModalComponent.prototype.pageChanged = function (event) {
        this.start = this.itemsPerPage * (this.currentPage - 1);
        var tmpStart = +this.start;
        var tmpItemsPerPage = +this.itemsPerPage;
        this.end = tmpStart + tmpItemsPerPage;
    };
    // モーダル表示
    CustomerSearchModalComponent.prototype.openModal = function () {
        this.clearCustomerSearch();
        this.template.show();
        this.search();
    };
    // 検索条件の初期化
    CustomerSearchModalComponent.prototype.clearCustomerSearch = function () {
        this.searchCustomerCd = "";
        this.searchCustomerNm = "";
        this.searchAddress = "";
    };
    // 検索処理
    CustomerSearchModalComponent.prototype.search = function () {
        var _this = this;
        this.isLoading = true;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        ps.set("customerCd", this.searchCustomerCd);
        ps.set("customerNm", this.searchCustomerNm);
        ps.set("address", this.searchAddress);
        // 検索
        this.jsonpService.commonRequestGet('CustomerListDataGet.php', ps)
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
            _this.currentPage = 1;
            _this.pageChanged(null);
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    CustomerSearchModalComponent.prototype.setDspParam = function (data) {
        // ページングの設定
        this.bigTotalItems = data.length;
        // 顧客（取引先）リストをセット
        this.customerList = data;
    };
    // 選択ボタンクリック
    CustomerSearchModalComponent.prototype.onSelect = function (customerCd, customerNm, address) {
        // 顧客（取引先）
        this.customerSearchSelect.emit({
            "customerCd": customerCd,
            "customerNm": customerNm,
            "address": address
        });
        // モーダルの非表示
        this.template.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], CustomerSearchModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CustomerSearchModalComponent.prototype, "customerSearchSelect", void 0);
    CustomerSearchModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'customerSearch-modal',
            template: __webpack_require__("../../../../../src/app/modal/customerSearch.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]])
    ], CustomerSearchModalComponent);
    return CustomerSearchModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/incidentSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n//*****************************************************************************\r\n//\tシステム名　　　：インシデント管理システム\r\n//\tサブシステム名　：\r\n//\t画面名　　　　　：インシデントモーダル部品\r\n//\t作成日付・作成者：2018-01-18 · newtouch\r\n//\t修正履歴　　　　：\r\n//*****************************************************************************\r\n-->\r\n<loading [loading]=\"isLoading\"></loading>\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header bg-danger\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>インシデントの検索</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\r\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"clearIncidentSearch()\">\r\n                リセット\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"search()\">\r\n                <i class=\"fa fa-search\"></i> 検索\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  インシデント番号\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchIncidentNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchIncidentNo\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  受付内容\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchCallContent\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchCallContent\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  機場\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"txt_kijoNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"kijoNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  都道府県\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <select name=\"sel_PrefNm\" class=\"form-control search-dropdown\" [(ngModel)]=\"prefNm\">\r\n                <option value=\"\"></option>\r\n                <option value=\"北海道\">北海道</option>\r\n                <option value=\"青森県\">青森県</option>\r\n                <option value=\"岩手県\">岩手県</option>\r\n                <option value=\"宮城県\">宮城県</option>\r\n                <option value=\"秋田県\">秋田県</option>\r\n                <option value=\"山形県\">山形県</option>\r\n                <option value=\"福島県\">福島県</option>\r\n                <option value=\"茨城県\">茨城県</option>\r\n                <option value=\"栃木県\">栃木県</option>\r\n                <option value=\"群馬県\">群馬県</option>\r\n                <option value=\"埼玉県\">埼玉県</option>\r\n                <option value=\"千葉県\">千葉県</option>\r\n                <option value=\"東京都\">東京都</option>\r\n                <option value=\"神奈川県\">神奈川県</option>\r\n                <option value=\"新潟県\">新潟県</option>\r\n                <option value=\"富山県\">富山県</option>\r\n                <option value=\"石川県\">石川県</option>\r\n                <option value=\"福井県\">福井県</option>\r\n                <option value=\"山梨県\">山梨県</option>\r\n                <option value=\"長野県\">長野県</option>\r\n                <option value=\"岐阜県\">岐阜県</option>\r\n                <option value=\"静岡県\">静岡県</option>\r\n                <option value=\"愛知県\">愛知県</option>\r\n                <option value=\"三重県\">三重県</option>\r\n                <option value=\"滋賀県\">滋賀県</option>\r\n                <option value=\"京都府\">京都府</option>\r\n                <option value=\"大阪府\">大阪府</option>\r\n                <option value=\"兵庫県\">兵庫県</option>\r\n                <option value=\"奈良県\">奈良県</option>\r\n                <option value=\"和歌山県\">和歌山県</option>\r\n                <option value=\"鳥取県\">鳥取県</option>\r\n                <option value=\"島根県\">島根県</option>\r\n                <option value=\"岡山県\">岡山県</option>\r\n                <option value=\"広島県\">広島県</option>\r\n                <option value=\"山口県\">山口県</option>\r\n                <option value=\"徳島県\">徳島県</option>\r\n                <option value=\"香川県\">香川県</option>\r\n                <option value=\"愛媛県\">愛媛県</option>\r\n                <option value=\"高知県\">高知県</option>\r\n                <option value=\"福岡県\">福岡県</option>\r\n                <option value=\"佐賀県\">佐賀県</option>\r\n                <option value=\"長崎県\">長崎県</option>\r\n                <option value=\"熊本県\">熊本県</option>\r\n                <option value=\"大分県\">大分県</option>\r\n                <option value=\"宮崎県\">宮崎県</option>\r\n                <option value=\"鹿児島県\">鹿児島県</option>\r\n                <option value=\"沖縄県\">沖縄県</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  受付日\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-7\">\r\n              <div class=\"date-div\">\r\n                <div class=\"input-group\">\r\n                  <input id=\"txt_callStartDateFrom\" name=\"txt_callStartDateFrom\" type=\"text\" class=\"form-control\" #dpCallStartDateFrom=\"bsDatepicker\"\r\n                    bsDatepicker [bsConfig]=\"bsConfig\" [(bsValue)]=\"searchCallStartDateFrom\">\r\n                  <span class=\"input-group-btn\">\r\n                    <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallStartDateFrom.toggle()\">\r\n                      <i class=\"fa fa-calendar\"></i>\r\n                    </button>\r\n                  </span>\r\n                </div>\r\n                <span class=\"text-danger\" *ngIf=\"checkDateShowCallStartDateFrom\">\r\n                  受付日に、日付を入力してください。\r\n                </span>\r\n              </div>\r\n              <span class=\"text-center inner-text\">～</span>\r\n              <div class=\"date-div\">\r\n                <div class=\"input-group\">\r\n                  <input id=\"txt_callStartDateTo\" name=\"txt_callStartDateTo\" type=\"text\" class=\"form-control\" #dpCallStartDateTo=\"bsDatepicker\"\r\n                    bsDatepicker [bsConfig]=\"bsConfig\" [(bsValue)]=\"searchCallStartDateTo\">\r\n                  <span class=\"input-group-btn\">\r\n                    <button type=\"button\" class=\"btn btn-input-support\" (click)=\"dpCallStartDateTo.toggle()\">\r\n                      <i class=\"fa fa-calendar\"></i>\r\n                    </button>\r\n                  </span>\r\n                </div>\r\n                <span class=\"text-danger\" *ngIf=\"checkDateShowCallStartDateTo\">\r\n                  受付日に、日付を入力してください。\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  インシデント分類\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-9 col-md-8 col-sm-8 col-xs-7\">\r\n              <div class=\"checkbox\">\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeSyougai\" type=\"checkbox\" value=\"1\" [(ngModel)]=\"searchIncidentTypeSyougai\"> 障害\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeJiko\" type=\"checkbox\" value=\"2\" [(ngModel)]=\"searchIncidentTypeJiko\"> 事故\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeClaim\" type=\"checkbox\" value=\"3\" [(ngModel)]=\"searchIncidentTypeClaim\"> クレーム\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeToiawase\" type=\"checkbox\" value=\"4\" [(ngModel)]=\"searchIncidentTypeToiawase\"> 問合せ\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeInfo\" type=\"checkbox\" value=\"5\" [(ngModel)]=\"searchIncidentTypeInfo\"> 情報\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentTypeOther\" type=\"checkbox\" value=\"6\" [(ngModel)]=\"searchIncidentTypeOther\"> その他\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  ステータス\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-9 col-md-8 col-sm-8 col-xs-7\">\r\n              <div class=\"checkbox\">\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentStatusCall\" type=\"checkbox\" value=\"1\" [(ngModel)]=\"searchIncidentStatusCall\"> 受付済\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentStatusTaio\" type=\"checkbox\" value=\"2\" [(ngModel)]=\"searchIncidentStatusTaio\"> 対応入力済\r\n                </label>\r\n                <label class=\"input-item\">\r\n                  <input name=\"searchIncidentStatusAct\" type=\"checkbox\" value=\"3\" [(ngModel)]=\"searchIncidentStatusAct\"> 処置入力済\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\r\n              検索結果：　{{bigTotalItems}}件\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\r\n                [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\r\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged(null)\"> 件/頁\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" id=\"search-list\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"panel\">\r\n                <table class=\"table table-striped list-table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"table-header-list\"></th>\r\n                      <th class=\"table-header-list incident-no-th\">インシデント番号 </th>\r\n                      <th class=\"table-header-list\" width=\"25%\"> 受付内容</th>\r\n                      <th class=\"table-header-list\">\r\n                        受付日\r\n                        <i class=\"fa fa-caret-down\"></i>\r\n                      </th>\r\n                      <th class=\"table-header-list\"> 分類 </th>\r\n                      <th class=\"table-header-list\"> ステータス </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of incidentList | slice: start: end\">\r\n                      <td class=\"code-list\">\r\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"onSelect(data?.incidentId,data?.incidentNo)\">\r\n                          選択\r\n                        </button>\r\n                      </td>\r\n                      <td class=\"code-list\">{{data.incidentNo}}</td>\r\n                      <td class=\"char-list\" title=\"{{data?.callContent}}\">\r\n                        {{data?.callContent | slice: 0:20 }}\r\n                        <span *ngIf=\"data?.callContent.length >= 20\">…</span>\r\n                      </td>\r\n                      <td class=\"date-list\">{{data?.callDate | datex:'YYYY/MM/DD'}}</td>\r\n                      <td class=\"status-list\">{{data.incidentTypeNm}}</td>\r\n                      <td class=\"status-list\">{{data.incidentStatusNm}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\r\n                [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/incidentSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_chronos__ = __webpack_require__("../../../../ngx-bootstrap/chronos/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
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





// datepikerの設定
Object(__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_chronos__["a" /* defineLocale */])('ja', __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_locale__["a" /* jaLocale */]);
var IncidentSearchModalComponent = /** @class */ (function () {
    function IncidentSearchModalComponent(modalService, jsonpService, _localeService) {
        this.modalService = modalService;
        this.jsonpService = jsonpService;
        this._localeService = _localeService;
        // インシデント検索イベント
        this.incidentSearchSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isLoading = false;
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
        this.kijoNm = "";
        this.prefNm = null;
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        this.checkDateShowCallStartDateFrom = false; //受付日（FROM）(日付型チェック)
        this.checkDateShowCallStartDateTo = false; //受付日（TO）(日付型チェック)
        // インシデント情報検索結果リスト
        this.incidentList = [];
        this.locale = 'ja';
        this.locales = Object(__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_chronos__["b" /* listLocales */])();
        // datepikerの設定
        this.bsConfig = Object.assign({}, { dateInputFormat: 'YYYY/MM/DD' });
        this._localeService.use(this.locale);
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
        this.checkShowInit(); // 初期化エラーメッセージ
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
        this.kijoNm = "";
        this.prefNm = null;
    };
    // 初期化エラーメッセージ
    IncidentSearchModalComponent.prototype.checkShowInit = function () {
        this.checkDateShowCallStartDateFrom = false; //受付日（FROM）(日付型チェック)
        this.checkDateShowCallStartDateTo = false; //受付日（TO）(日付型チェック)
    };
    // 検索処理
    IncidentSearchModalComponent.prototype.search = function () {
        var _this = this;
        if (this.checkDate()) {
            // 検索パラメータの作成
            var ps = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            ps.set("incidentNo", this.searchIncidentNo);
            ps.set("callContent", this.searchCallContent);
            var searchCallStartDateFromStr = this.getDateStringFromDate(this.searchCallStartDateFrom);
            ps.set("callStartDateFrom", searchCallStartDateFromStr);
            var searchCallStartDateToStr = this.getDateStringFromDate(this.searchCallStartDateTo);
            ps.set("callStartDateTo", searchCallStartDateToStr);
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
            ps.set("incidentStatusAct", this.searchIncidentStatusAct);
            ps.set("incidentStatusAct", this.searchIncidentStatusAct);
            ps.set("kijoNm", this.kijoNm);
            ps.set("prefNm", this.prefNm);
            // 検索
            this.isLoading = true;
            this.jsonpService.requestGet('IncidentListDataGet.php', ps)
                .subscribe(function (data) {
                // 通信成功時
                if (data[0]) {
                    var list = data[0];
                    if (list.result !== '' && list.result == true) {
                        // 画面表示パラメータのセット処理
                        _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                    }
                }
                _this.currentPage = 1;
                _this.pageChanged(null);
                _this.isLoading = false;
            }, function (error) {
                // 通信失敗もしくは、コールバック関数内でエラー
                console.log('サーバとのアクセスに失敗しました。');
                _this.isLoading = false;
                return false;
            });
        }
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
    // 日付型を日付フォーマット文字列に変更
    IncidentSearchModalComponent.prototype.getDateStringFromDate = function (date) {
        if (date && date.getFullYear()) {
            var y = date.getFullYear();
            var m = date.getMonth();
            m++;
            var d = date.getDate();
            if (y) {
                var yStr = ('00' + y).slice(-4);
            }
            if (m) {
                var mStr = ('00' + m).slice(-2);
            }
            if (d) {
                var dStr = ('00' + d).slice(-2);
            }
            if (yStr && mStr && dStr) {
                return yStr + "/" + mStr + "/" + dStr + " 00:00:00";
            }
            else {
                // 日付型でない値の場合
                return null;
            }
        }
        else {
            // 日付型でない値の場合
            return null;
        }
    };
    // 日付型値の日付型チェック
    IncidentSearchModalComponent.prototype.checkDate = function () {
        this.checkShowInit();
        var result = true; // 返り値
        // 受付日（FROM）
        var callStartDateFromValue = document.getElementById('txt_callStartDateFrom').value;
        var searchCallStartDateFromStr = this.getDateStringFromDate(this.searchCallStartDateFrom);
        if (searchCallStartDateFromStr == null && callStartDateFromValue != "") {
            this.checkDateShowCallStartDateFrom = true;
            result = false;
        }
        // 受付日（TO）
        var callStartDateToValue = document.getElementById('txt_callStartDateTo').value;
        var searchCallStartDateToStr = this.getDateStringFromDate(this.searchCallStartDateTo);
        if (searchCallStartDateToStr == null && callStartDateToValue != "") {
            this.checkDateShowCallStartDateTo = true;
            result = false;
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], IncidentSearchModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], IncidentSearchModalComponent.prototype, "incidentSearchSelect", void 0);
    IncidentSearchModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'incidentSearch-modal',
            template: __webpack_require__("../../../../../src/app/modal/incidentSearch.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__["b" /* BsLocaleService */]])
    ], IncidentSearchModalComponent);
    return IncidentSearchModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ボタン */\r\n.btn-mini {\r\n    height: 24px;\r\n    /* width: 22px; */\r\n    padding: 0px 2px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n/* 保存ボタン */\r\n.save-button {\r\n    margin: 5px 0px;\r\n}\r\n/* モーダルタイトル幅の調整 */\r\n.modal-header{\r\n    padding: 10px;\r\n    border-radius: 6px 6px 0px 0px;\r\n}\r\n.modal-body {\r\n    background-color: #f8f8f8;\r\n    border-radius: 0px 0px 6px 6px;\r\n}\r\n/* 検索項目：項目名 */\r\n.input-label {\r\n    height: 22px;\r\n    border-radius: 4px;\r\n    border: 1px solid wheat;\r\n    margin-bottom: 10px;\r\n}\r\n/* チェックボックスのマージンを除き、ラベルの高さを合わせる */\r\n.checkbox {\r\n    margin: 0px;\r\n}\r\n/* 検索一覧画面テーブルのヘッダ */\r\n.table-header-list {\r\n    text-align: center;\r\n}\r\n/* 検索項目：チェックボックスのレイアウト調整 */\r\n.input-item {\r\n    margin-right: 10px;\r\n}\r\n/* 検索項目の余計な余白を削る */\r\n.label-padding {\r\n    padding-right: 0px;\r\n}\r\n/* 検索一覧画面　日付input */\r\n.date-div {\r\n    width: 105px;\r\n    float: left;\r\n    position: relative;\r\n}\r\n/* 検索一覧画面　要素間の文字(～) */\r\n.inner-text {\r\n    font-size: 16px; \r\n    float:left;\r\n    margin: 0px 5px;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n/* 共通モーダルのボタングループ */\r\n.common-btn-group {\r\n    text-align: center;\r\n}\r\n/* 共通モーダルのボタン */\r\n.common-btn {\r\n    text-align: center;\r\n    width: 100px;\r\n}\r\n/* 共通モーダルのメッセージ */\r\n.common-mes {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n}\r\n/* 共通モーダル 処理ボタン表示 */\r\n.common-enter-btn-show {\r\n    display: inline;    \r\n}\r\n/* 共通モーダル 処理ボタン非表示 */\r\n.common-enter-btn-hide {\r\n    display: none;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/projectSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n//*****************************************************************************\r\n//\tシステム名　　　：インシデント管理システム\r\n//\tサブシステム名　：\r\n//\t画面名　　　　　：機場モーダル部品\r\n//\t作成日付・作成者：2017.12.22 ADF)Takafumi.Sato\r\n//\t修正履歴　　　　：\r\n//*****************************************************************************\r\n-->\r\n<loading [loading]=\"isLoading\"></loading>\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header bg-danger\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>プロジェクトの検索</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\r\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"clearProjectSearch()\">\r\n                リセット\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"search()\">\r\n                <i class=\"fa fa-search\"></i> 検索\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  PJ番号\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchPjNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPjNo\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  INQ番号\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchInqNo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInqNo\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  最終需要家\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchConsumerNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchConsumerNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  総括品\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchSummaryNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSummaryNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\r\n              検索結果：　{{bigTotalItems}}件\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\r\n                [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\r\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged(null)\"> 件/頁\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" id=\"search-list\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"panel\">\r\n                <table class=\"table table-striped list-table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"table-header-list\"></th>\r\n                      <th class=\"table-header-list\">PJ番号</th>\r\n                      <th class=\"table-header-list\">INQ番号</th>\r\n                      <th class=\"table-header-list\">最終需要家</th>\r\n                      <th class=\"table-header-list\">総括品</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of projList\">\r\n                      <td class=\"code-list\">\r\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"onSelect(data?.pjId, data?.pjNo,data?.summaryNm)\">\r\n                          選択\r\n                        </button>\r\n                      </td>\r\n                      <td class=\"char-list\">{{data.pjNo}}</td>\r\n                      <td class=\"char-list\">{{data.inqNo}}</td>\r\n                      <td class=\"char-list\">{{data.consumerNm}}</td>\r\n                      <td class=\"char-list\">{{data.summaryNm}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\r\n                [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/projectSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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




var ProjectSearchModalComponent = /** @class */ (function () {
    function ProjectSearchModalComponent(modalService, jsonpService) {
        this.modalService = modalService;
        this.jsonpService = jsonpService;
        // プロジェクトイベント(親コンポーネントのメソッド呼び出し)
        this.projectSearchSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isLoading = false;
        // 検索条件
        this.searchPjNo = "";
        this.searchInqNo = "";
        this.searchConsumerNm = "";
        this.searchSummaryNm = "";
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        // プロジェクト検索結果リスト
        this.projList = [];
    }
    // ページング処理
    ProjectSearchModalComponent.prototype.pageChanged = function (event) {
        if (!(this.itemsPerPage > 0)) {
            this.itemsPerPage = 10;
        }
        this.start = this.itemsPerPage * (this.currentPage - 1);
        var tmpStart = +this.start;
        var tmpItemsPerPage = +this.itemsPerPage;
        this.end = tmpStart + tmpItemsPerPage;
        this.search();
    };
    // モーダル表示
    ProjectSearchModalComponent.prototype.openModal = function () {
        this.clearProjectSearch();
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0;
        this.start = 0;
        this.end = 10;
        this.search();
        this.template.show();
    };
    // 検索条件の初期化
    ProjectSearchModalComponent.prototype.clearProjectSearch = function () {
        this.searchPjNo = "";
        this.searchInqNo = "";
        this.searchConsumerNm = "";
        this.searchSummaryNm = "";
    };
    // 検索処理
    ProjectSearchModalComponent.prototype.search = function () {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        ps.set("pjNo", this.searchPjNo);
        ps.set("inqNo", this.searchInqNo);
        ps.set("consumerNm", this.searchConsumerNm);
        ps.set("summaryNm", this.searchSummaryNm);
        ps.set("pagingStart", (this.start + 1).toString());
        ps.set("pagingEnd", this.itemsPerPage.toString());
        // 検索
        this.isLoading = true;
        this.jsonpService.commonRequestGet('ProjectListDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.bigTotalItems = list.count; // ページング(総数)
                    _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.error(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    ProjectSearchModalComponent.prototype.setDspParam = function (data) {
        // プロジェクトリストをセット
        this.projList = data;
    };
    // 選択ボタンクリック
    ProjectSearchModalComponent.prototype.onSelect = function (pjId, pjNo, summaryNm) {
        // プロジェクト
        this.projectSearchSelect.emit({ "pjId": pjId, "pjNo": pjNo, "summaryNm": summaryNm });
        // モーダルの非表示
        this.template.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], ProjectSearchModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ProjectSearchModalComponent.prototype, "projectSearchSelect", void 0);
    ProjectSearchModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'projectSearch-modal',
            template: __webpack_require__("../../../../../src/app/modal/projectSearch.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]])
    ], ProjectSearchModalComponent);
    return ProjectSearchModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/relateUserAdd.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：関係者追加モーダル部品\n//\t作成日付・作成者：2017.12.08 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<loading [loading]=\"isLoading\"></loading>\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>関係者の追加</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\n              <button type=\"button\"  class=\"btn btn-danger btn-mini\" (click)=\"clearUserSearch()\">\n                リセット\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"search()\">\n                <i class=\"fa fa-search\"></i> 検索\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  氏名(姓)\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchUserLastNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchUserLastNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  氏名(名)\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchUserFirstNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchUserFirstNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  部署名\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchSectionNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSectionNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  職制コード\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchSectionCd\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSectionCd\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\n              検索結果：　{{bigTotalItems}}件\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\n            </div>\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged(null)\"> 件/頁\n            </div>\n          </div>\n\n          <div class=\"row\" id=\"search-list\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"panel\">\n                <table class=\"table table-striped list-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"table-header-list\"></th>\n                      <th class=\"table-header-list\">氏名</th>\n                      <th class=\"table-header-list\">メールアドレス</th>\n                      <th class=\"table-header-list\">役職</th>\n                      <th class=\"table-header-list\">部署名</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of userList | slice: start: end\">\n                      <td class=\"code-list\">\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"onSelect(data?.userId, data?.userNm, data?.sectionCd, data?.sectionNm)\">\n                          追加\n                        </button>\n                      </td>\n                      <td class=\"char-list\">{{data.userNm}}</td>\n                      <td class=\"char-list\">{{data.mail}}</td>\n                      <td class=\"char-list\">{{data.postNm}}</td>\n                      <td class=\"char-list\">{{data.sectionNm}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #second=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>{{headerStr}}</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"second.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 common-mes\">\n            {{mes}}\n          </div>\n        </div>\n\n        <div class=\"row\" [class.common-enter-btn-show]=\"enterBtnShow\" [class.common-enter-btn-hide]=\"!enterBtnShow\">\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"enter()\">\n              {{enterBtnStr}}\n            </button>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"second.hide()\">\n              {{closeBtnStr}}\n            </button>\n          </div>\n        </div>\n\n        <div class=\"row\" [class.common-enter-btn-show]=\"!enterBtnShow\" [class.common-enter-btn-hide]=\"enterBtnShow\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button common-btn-group\">\n            <button type=\"button\" class=\"btn btn-danger common-btn\" (click)=\"second.hide()\">\n              {{closeBtnStr}}\n            </button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/relateUserAdd.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelateUserAddModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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




var RelateUserAddModalComponent = /** @class */ (function () {
    function RelateUserAddModalComponent(modalService, jsonpService) {
        this.modalService = modalService;
        this.jsonpService = jsonpService;
        // ユーザイベント(親コンポーネントのメソッド呼び出し)
        this.relateUserSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isLoading = false;
        // 検索条件
        this.searchUserLastNm = "";
        this.searchUserFirstNm = "";
        this.searchSectionNm = "";
        this.searchSectionCd = "";
        this.incidentId = "";
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        // ユーザ検索結果リスト
        this.userList = [];
        this.enterBtnShow = false; // 処理ボタンの表示フラグ
    }
    // ページング処理
    RelateUserAddModalComponent.prototype.pageChanged = function (event) {
        this.start = this.itemsPerPage * (this.currentPage - 1);
        var tmpStart = +this.start;
        var tmpItemsPerPage = +this.itemsPerPage;
        this.end = tmpStart + tmpItemsPerPage;
    };
    // モーダル表示
    RelateUserAddModalComponent.prototype.openModal = function (pageIncidentId) {
        this.incidentId = pageIncidentId;
        this.clearUserSearch();
        this.template.show();
        this.search();
    };
    // 検索条件の初期化
    RelateUserAddModalComponent.prototype.clearUserSearch = function () {
        this.searchUserLastNm = "";
        this.searchUserFirstNm = "";
        this.searchSectionNm = "";
        this.searchSectionCd = "";
    };
    // 検索処理
    RelateUserAddModalComponent.prototype.search = function () {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        ps.set("userNmSei", this.searchUserLastNm);
        ps.set("userNmMei", this.searchUserFirstNm);
        ps.set("sectionNm", this.searchSectionNm);
        ps.set("sectionCd", this.searchSectionCd);
        // 検索
        this.isLoading = true;
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
            _this.currentPage = 1;
            _this.pageChanged(null);
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    RelateUserAddModalComponent.prototype.setDspParam = function (data) {
        // ページングの設定
        this.bigTotalItems = data.length;
        // ユーザリストをセット
        this.userList = data;
    };
    // 追加確認モーダルのボタン 押すと、関係者が追加される
    RelateUserAddModalComponent.prototype.relateUserAdd = function () {
        // 営業担当者
        this.relateUserSelect.emit({
            "userId": this.addUserId,
            "userNm": this.addUserNm,
            "sectionCd": this.addSectionCd,
            "sectionNm": this.addSectionNm
        });
        // モーダルの非表示
        this.template.hide();
    };
    // 追加ボタンを押したら、重複チェックを実施する
    RelateUserAddModalComponent.prototype.onSelect = function (userId, userNm, sectionCd, sectionNm) {
        var _this = this;
        this.addUserId = userId;
        this.addUserNm = userNm;
        this.addSectionCd = sectionCd;
        this.addSectionNm = sectionNm;
        var ps = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        ps.set('incidentId', this.incidentId);
        ps.set('relateUserSectionCd', sectionCd);
        ps.set('relateUserId', userId);
        // 検索
        this.isLoading = true;
        this.jsonpService.requestGet('IncidentRelateUserCheck.php', ps)
            .subscribe(function (data) {
            console.log(data);
            // インシデント関係者のデータ重複チェック true : 有、false : 無し
            if (data[0]['resultFlg'] == true || data[0]['resultFlg'] == 'true') {
                // 重複結果、重複有り
                _this.openModalSecond('警告', '選んだユーザは既に登録されています。', '', '閉じる');
            }
            else {
                // 重複結果、重複無し
                _this.openModalSecond('確認', '関係者を追加します。宜しいですか？', 'OK', 'キャンセル');
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
        return false;
    };
    // モーダル表示
    RelateUserAddModalComponent.prototype.openModalSecond = function (headerStr, mes, enterBtnStr, closeBtnStr) {
        this.setHeaderStr(headerStr);
        this.setMes(mes);
        this.setEnterBtnStr(enterBtnStr);
        this.setCloseBtnStr(closeBtnStr);
        this.second.show();
    };
    // モーダルヘッダー文字列の初期化
    RelateUserAddModalComponent.prototype.setHeaderStr = function (headerStr) {
        this.headerStr = headerStr;
    };
    // 表示メッセージの初期化
    RelateUserAddModalComponent.prototype.setMes = function (mes) {
        this.mes = mes;
    };
    // 処理ボタンの表示文字列の初期化
    RelateUserAddModalComponent.prototype.setEnterBtnStr = function (btnStr) {
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
    RelateUserAddModalComponent.prototype.setCloseBtnStr = function (btnStr) {
        this.closeBtnStr = btnStr;
    };
    // 処理ボタンを押した
    RelateUserAddModalComponent.prototype.enter = function () {
        // モーダルを閉じる
        this.second.hide();
        // 親コンポーネントの処理を実行する為に、イベントを発火
        this.relateUserAdd();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], RelateUserAddModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('second'),
        __metadata("design:type", Object)
    ], RelateUserAddModalComponent.prototype, "second", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], RelateUserAddModalComponent.prototype, "relateUserSelect", void 0);
    RelateUserAddModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'relateUserAdd-modal',
            template: __webpack_require__("../../../../../src/app/modal/relateUserAdd.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]])
    ], RelateUserAddModalComponent);
    return RelateUserAddModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/sectionSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n//*****************************************************************************\r\n//\tシステム名　　　：インシデント管理システム\r\n//\tサブシステム名　：\r\n//\t画面名　　　　　：部署モーダル部品\r\n//\t作成日付・作成者：2017.12.08 ADF)S.Yoshida\r\n//\t修正履歴　　　　：\r\n//*****************************************************************************\r\n-->\r\n<loading [loading]=\"isLoading\"></loading>\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header bg-danger\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>部門の検索</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\r\n              <button type=\"button\" (click)=\"clearSectionSearch()\" class=\"btn btn-danger btn-mini\">\r\n                リセット\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"search()\">\r\n                <i class=\"fa fa-search\"></i> 検索\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  部門コード\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchPostCd\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPostCd\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  部門名\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchSectionNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSectionNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  会社\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchCompanyNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchCompanyNm\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\r\n              検索結果：　{{bigTotalItems}}件\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\r\n                [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\r\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged(null)\"> 件/頁\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" id=\"search-list\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"panel\">\r\n                <table class=\"table table-striped list-table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"table-header-list\"></th>\r\n                      <th class=\"table-header-list\">部門コード</th>\r\n                      <th class=\"table-header-list\">部門名</th>\r\n                      <th class=\"table-header-list\">会社</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of sectionList | slice: start: end\">\r\n                      <td class=\"code-list\">\r\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"onSelect(data?.postCd, data?.sectionNm)\">\r\n                          選択\r\n                        </button>\r\n                      </td>\r\n                      <td class=\"char-list\">{{data.postCd}}</td>\r\n                      <td class=\"char-list\">{{data.sectionNm}}</td>\r\n                      <td class=\"char-list\">{{data.companyNm}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\r\n                [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/sectionSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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




var SectionSearchModalComponent = /** @class */ (function () {
    function SectionSearchModalComponent(modalService, jsonpService) {
        this.modalService = modalService;
        this.jsonpService = jsonpService;
        // 部門情報イベント(親コンポーネントのメソッド呼び出し)
        this.salesSectionSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isLoading = false;
        //検索条件
        this.searchPostCd = "";
        this.searchSectionNm = "";
        this.searchCompanyNm = "";
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        // 部門情報 検索結果リスト
        this.sectionList = [];
    }
    // ページング処理
    SectionSearchModalComponent.prototype.pageChanged = function (event) {
        this.start = this.itemsPerPage * (this.currentPage - 1);
        var tmpStart = +this.start;
        var tmpItemsPerPage = +this.itemsPerPage;
        this.end = tmpStart + tmpItemsPerPage;
    };
    // モーダル表示
    SectionSearchModalComponent.prototype.openModal = function (modalTypeFromParent) {
        if (modalTypeFromParent) {
            // 親コンポーネントからの値受け取り
            this.modalType = modalTypeFromParent;
        }
        this.clearSectionSearch();
        this.template.show();
        this.search();
    };
    // 検索条件の初期化
    SectionSearchModalComponent.prototype.clearSectionSearch = function () {
        this.searchPostCd = "";
        this.searchSectionNm = "";
        this.searchCompanyNm = "";
    };
    // 検索処理
    SectionSearchModalComponent.prototype.search = function () {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        ps.set("postCd", this.searchPostCd);
        ps.set("sectionNm", this.searchSectionNm);
        ps.set("companyNm", this.searchCompanyNm);
        // 検索
        this.isLoading = true;
        this.jsonpService.commonRequestGet('SectionListDataGet.php', ps)
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
            _this.currentPage = 1;
            _this.pageChanged(null);
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.error(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    SectionSearchModalComponent.prototype.setDspParam = function (data) {
        // ページングの設定
        this.bigTotalItems = data.length;
        // 部門情報 リストをセット
        this.sectionList = data;
    };
    // 選択ボタンクリック
    SectionSearchModalComponent.prototype.onSelect = function (postCd, sectionNm) {
        // 部門情報
        this.salesSectionSelect.emit({ "sectionSearchType": this.modalType, "postCd": postCd, "sectionNm": sectionNm });
        // モーダルの非表示
        this.template.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], SectionSearchModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SectionSearchModalComponent.prototype, "salesSectionSelect", void 0);
    SectionSearchModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sectionSearch-modal',
            template: __webpack_require__("../../../../../src/app/modal/sectionSearch.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]])
    ], SectionSearchModalComponent);
    return SectionSearchModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/setubiSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：設備モーダル部品\n//\t作成日付・作成者：2017.12.22 ADF)Takafumi.Sato\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<loading [loading]=\"isLoading\"></loading>\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>設備の検索</strong>\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\n              <span>\n                <button type=\"button\" class=\"btn btn-warning btn-mini\" (click)=\"openNewKijo()\">機場の新規追加</button>\n              </span>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"clearSetubiSearch()\">\n                リセット\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"search()\">\n                <i class=\"fa fa-search\"></i> 検索\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  都道府県／機場名\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchItem1\" type=\"text\" class=\"form-control\" [(ngModel)]=\"kijoNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\n              <div class=\"row\">\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\n                  設備名\n                </label>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\n              <input name=\"searchItem2\" type=\"text\" class=\"form-control\" [(ngModel)]=\"setubiNm\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\n              検索結果：　{{bigTotalItems}}件\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\n            </div>\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (change)=\"pageChanged(null)\"> 件/頁\n            </div>\n          </div>\n\n          <div class=\"row\" id=\"search-list\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"panel\">\n                <table class=\"table table-striped list-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"table-header-list\"></th>\n                      <th class=\"table-header-list\">設備ID</th>\n                      <th class=\"table-header-list\">都道府県／機場名</th>\n                      <th class=\"table-header-list\">設備名</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let data of setubiList\">\n                      <td class=\"code-list\">\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\"\n                         (click)=\"onSelect(data?.setubiId, data?.setubiNm, data?.kijoId, data?.kijoNm, data?.jigyosyutaiId, data?.jigyosyutaiNm, data?.prefNm)\">\n                          選択\n                        </button>\n                      </td>\n                      <td class=\"code-list\">\n                        {{data.setubiId}}\n                        <div>\n                          <a (click)=\"openNewSetubi(data.kijoId)\">設備の追加</a>\n                        </div>\n                      </td>\n                      <td class=\"char-list\">{{data.kijoNm}}</td>\n                      <td class=\"char-list\">{{data.setubiNm}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\"\n                [itemsPerPage]=\"itemsPerPage\" class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/setubiSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetubiSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__ = __webpack_require__("../../../../../src/environments/environment.local.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SetubiSearchModalComponent = /** @class */ (function () {
    function SetubiSearchModalComponent(modalService, jsonpService, loginService) {
        var _this = this;
        this.modalService = modalService;
        this.jsonpService = jsonpService;
        this.loginService = loginService;
        // 設備・機場・事業主体情報を転記
        this.setubiSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isLoading = false;
        // 検索条件
        this.kijoNm = "";
        this.setubiNm = "";
        // ページングの設定
        this.maxSize = 5; // ページングの表示ページ数
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0; // 現在表示しているページ
        this.start = 0; // データ表示開始位置
        this.end = 10; // データ表示終了位置
        // 設備リスト 
        this.setubiList = [];
        this.SUB_WIN = null;
        /* ログイン情報の取得 */
        this.subscription = loginService.loginUserNm$.subscribe(function (user) { _this.userNm = user; });
        this.subscription = loginService.loginUserId$.subscribe(function (user) { _this.userId = user; });
        this.subscription = loginService.loginUserSectionCd$.subscribe(function (user) { _this.userSectionCd = user; });
        this.subscription = loginService.loginUserSectionNm$.subscribe(function (user) { _this.userSectionNm = user; });
    }
    // ページング処理
    SetubiSearchModalComponent.prototype.pageChanged = function (event) {
        if (!(this.itemsPerPage > 0)) {
            this.itemsPerPage = 10;
        }
        this.start = this.itemsPerPage * (this.currentPage - 1);
        var tmpStart = +this.start;
        var tmpItemsPerPage = +this.itemsPerPage;
        this.end = tmpStart + tmpItemsPerPage;
        this.search();
    };
    // モーダル表示
    SetubiSearchModalComponent.prototype.openModal = function () {
        this.clearSetubiSearch();
        this.bigTotalItems = 0; // 総数
        this.itemsPerPage = 10; // 1ページに表示する件数
        this.currentPage = 0;
        this.start = 0;
        this.end = 10;
        this.search();
        this.template.show();
    };
    // 検索条件の初期化
    SetubiSearchModalComponent.prototype.clearSetubiSearch = function () {
        this.kijoNm = "";
        this.setubiNm = "";
    };
    // 検索処理
    SetubiSearchModalComponent.prototype.search = function () {
        var _this = this;
        // 検索パラメータの作成
        var ps = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        ps.set("kijoNm", this.kijoNm);
        ps.set("setubiNm", this.setubiNm);
        ps.set("pagingStart", (this.start + 1).toString());
        ps.set("pagingEnd", this.itemsPerPage.toString());
        // 検索
        this.isLoading = true;
        this.jsonpService.commonRequestGet('SetubiListDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var list = data[0];
                if (list.result !== '' && list.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.bigTotalItems = list.count; // ページング(総数)
                    _this.setDspParam(data.slice(1)); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    SetubiSearchModalComponent.prototype.setDspParam = function (data) {
        // 設備リストをセット
        this.setubiList = data;
    };
    // 選択ボタンクリック
    SetubiSearchModalComponent.prototype.onSelect = function (setubiId, setubiNm, kijoId, kijoNm, jigyosyutaiId, jigyosyutaiNm, prefNm) {
        // 営業担当者
        this.setubiSelect.emit({
            "setubiId": setubiId,
            "setubiNm": setubiNm,
            "kijoId": kijoId,
            "kijoNm": kijoNm,
            "jigyosyutaiId": jigyosyutaiId,
            "jigyosyutaiNm": jigyosyutaiNm,
            "prefNm": prefNm
        });
        // モーダルの非表示
        this.template.hide();
    };
    // CRM24の新規顧客（機場）登録画面を開く
    SetubiSearchModalComponent.prototype.openNewKijo = function () {
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__["a" /* environment */].crmPath + "cust_input2.php?"; // 環境に合わせたURLを作成する
        url += "&user_id=" + this.userId; //従業員コード
        this.SUB_WIN = this.CMN_openNewWindow1(url, "NEW_KIJO", 800, 300);
        this.template.hide();
        return;
    };
    // CRM24の新規設備登録画面を開く
    SetubiSearchModalComponent.prototype.openNewSetubi = function (kijoId) {
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__["a" /* environment */].crmPath + "stb_input2.php?"; // 環境に合わせたURLを作成する
        url += "&user_id=" + this.userId; //従業員コード
        url += "&usercode=" + kijoId; //機場コード
        this.SUB_WIN = this.CMN_openNewWindow1(url, "NEW_KIJO", 800, 300);
        this.template.hide();
        return;
    };
    //新しいウィンドウを開く(パターン1)
    SetubiSearchModalComponent.prototype.CMN_openNewWindow1 = function (url, name, sizex, sizey) {
        var style = "toolbar=0,location=0,directories=0,status=yes,menubar=0,scrollbars=1,resizable=1," +
            "width=" + sizex + ",height=" + sizey;
        var win = window.open(url, name, style);
        if (win) {
            win.focus();
            return win;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], SetubiSearchModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SetubiSearchModalComponent.prototype, "setubiSelect", void 0);
    SetubiSearchModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'setubiSearch-modal',
            template: __webpack_require__("../../../../../src/app/modal/setubiSearch.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], SetubiSearchModalComponent);
    return SetubiSearchModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/userSearch.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n//*****************************************************************************\r\n//\tシステム名　　　：インシデント管理システム\r\n//\tサブシステム名　：\r\n//\t画面名　　　　　：ユーザモーダル部品\r\n//\t作成日付・作成者：2017.12.08 ADF)S.Yoshida\r\n//\t修正履歴　　　　：\r\n//*****************************************************************************\r\n-->\r\n<loading [loading]=\"isLoading\"></loading>\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header bg-danger\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>社員の検索</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"template.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 transition-button text-right\">\r\n              <button type=\"button\" (click)=\"clearUserSearch()\" class=\"btn btn-danger btn-mini\">\r\n                リセット\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"search()\">\r\n                <i class=\"fa fa-search\"></i> 検索\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  氏名(姓)\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchUserLastNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchUserLastNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  氏名(名)\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchUserFirstNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchUserFirstNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  部門名\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchSectionNm\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSectionNm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-5 label-padding\">\r\n              <div class=\"row\">\r\n                <label class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 bg-warning text-center input-label\">\r\n                  部門コード\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-4 col-sm-6 col-xs-5\">\r\n              <input name=\"searchSectionCd\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchSectionCd\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 search-result-info\">\r\n              検索結果：　{{bigTotalItems}}件\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging1\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\r\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n            <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-lg-2 col-md-2 col-sm-3 col-xs-4\">\r\n              <input name=\"itemperPage\" [(ngModel)]=\"itemsPerPage\" type=\"text\" class=\"itemsPerPage\" (input)=\"pageChanged(null)\"> 件/頁\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" id=\"search-list\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"panel\">\r\n                <table class=\"table table-striped list-table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"table-header-list\"></th>\r\n                      <th class=\"table-header-list\">氏名</th>\r\n                      <th class=\"table-header-list\">メールアドレス</th>\r\n                      <th class=\"table-header-list\">役職</th>\r\n                      <th class=\"table-header-list\">部門名</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of userList | slice: start: end\">\r\n                      <td class=\"code-list\">\r\n                        <button type=\"button\" class=\"btn btn-danger btn-mini\" (click)=\"onSelect(data?.userId, data?.userNm, data?.sectionCd, data?.sectionNm)\">\r\n                          選択\r\n                        </button>\r\n                      </td>\r\n                      <td class=\"char-list\">{{data.userNm}}</td>\r\n                      <td class=\"char-list\">{{data.mail}}</td>\r\n                      <td class=\"char-list\">{{data.postNm}}</td>\r\n                      <td class=\"char-list\">{{data.sectionNm}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-8\">\r\n              <pagination name=\"paging2\" [boundaryLinks]=\"true\" [totalItems]=\"bigTotalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [itemsPerPage]=\"itemsPerPage\"\r\n                class=\"pagination-sm\" [rotate]=\"false\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (click)=\"pageChanged($event)\"></pagination>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/userSearch.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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




var UserSearchModalComponent = /** @class */ (function () {
    function UserSearchModalComponent(modalService, jsonpService) {
        this.modalService = modalService;
        this.jsonpService = jsonpService;
        // 営業担当者イベント(親コンポーネントのメソッド呼び出し)
        this.salesUserSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isLoading = false;
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
        this.search();
        this.template.show();
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
        this.isLoading = true;
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
            _this.currentPage = 1;
            _this.pageChanged(null);
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('template'),
        __metadata("design:type", Object)
    ], UserSearchModalComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], UserSearchModalComponent.prototype, "salesUserSelect", void 0);
    UserSearchModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'userSearch-modal',
            template: __webpack_require__("../../../../../src/app/modal/userSearch.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */]])
    ], UserSearchModalComponent);
    return UserSearchModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mr2/mr2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* トップ画面テーブルのヘッダ(オレンジ色) */\r\n.table-header {\r\n    text-align: center;\r\n    background-color: moccasin;\r\n}\r\n/* パネルのタイトルをインライン表示 */\r\n.top-panel-title {\r\n    display: inline;\r\n}\r\n/* テーブル　固定幅適用　文字列折り返し適用 */\r\n.list-table {\r\n    table-layout:fixed;\r\n    word-wrap: break-word;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n/* 関連情報有無のヘッダー幅*/\r\n.relate-th {\r\n    width:44px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mr2/mr2.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデントMr2画面\n//\t作成日付・作成者：2017.12.08 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<loading [loading]=\"isLoading\"></loading>\n<div>\n    <div class=\"container-fluid\">\n        <div class=\"sub-win-content-start\"></div>\n        <div class=\"text-right transition-button\">\n            <span>\n                <button type=\"button\" class=\"btn\" (click)=\"nativeWindow.close();\">\n                    閉じる\n                </button>\n            </span>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading clearfix\">\n                        <span class=\"h3 incident-title-status\">障害対応報告書(MR2)</span>\n                        <div class=\"pull-right\">\n                            <strong>最終更新日：{{updDateDsp | datex:'YYYY/MM/DD HH:mm'}} {{updUserNmDsp}}</strong>\n                        </div>\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body context-margin\">\n                        <h5 class=\"context-header\">\n                            <strong>基本情報</strong>\n                        </h5>\n                        <div class=\"setubi-and-cust-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>受付番号：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{incidentNo}}</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>出動回数：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{actionCnt}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>PJ番号：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{PjId}}</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>顧客名：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>機場：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{kijoNm}}</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>作成日：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{makeDate | datex:'YYYY/MM/DD HH:mm'}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>受付日：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{callDate | datex:'YYYY/MM/DDHH:mm'}}</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>障害発生日：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{startDate | datex:'YYYY/MM/DD HH:mm'}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>処理担当部署：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{actSectionNm}}</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>検査責任部署：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{checkSectionNm}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>検査責任者：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{checkUserNm}}</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>御依頼元担当部署：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{requestSectionNm}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>御依頼元担当者：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{requestUserNm}}</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>作業担当者：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{workUserNm}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>発行部署：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{issSectionNm}}</div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>MR2状況：</strong>\n                                </div>\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{mr2StsNm}}</div>\n                            </div>\n                        </div>\n                        <h5 class=\"context-header\">\n                            <strong>行動記録</strong>\n                        </h5>\n                        <div class=\"call-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>出発日：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{goDate | datex:'YYYY/MM/DD HH:mm'}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>到着日：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{arrivalDate | datex:'YYYY/MM/DD HH:mm'}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>作業開始日：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{workStartDate | datex:'YYYY/MM/DD HH:mm'}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>作業終了日：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{workEndDate | datex:'YYYY/MM/DD HH:mm'}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>現地出発日：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{retuenDate | datex:'YYYY/MM/DD HH:mm'}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>帰着日：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{arrivalBackDate | datex:'YYYY/MM/DD HH:mm'}}</div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼作業情報</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>件名：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{subjectNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>設備名：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{setubiNm}}</div>\n                        </div>\n                        <h5 class=\"context-sub-header\">\n                            <strong>不具合状況</strong>\n                        </h5>\n                        <div class=\"setubi-and-cust-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>トリガー：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{triggerDsp}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>頻度：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{hindoDsp}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>現象：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{gensyoDsp}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>状態：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{jyotaiDsp}}</div>\n                            </div>\n                            <div class=\"info-detail-area\">\n                                {{defectComment}}\n                            </div>\n                        </div>\n                        <h5 class=\"context-sub-header\">\n                            <strong>設備影響</strong>\n                        </h5>\n                        <div class=\"call-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>設備停止：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{setubiStop}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>データ欠損：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{dataDefect}}</div>\n                            </div>\n                            <div class=\"info-detail-area\">\n                                {{setubiComment}}\n                            </div>\n                        </div>\n                        <h5 class=\"context-sub-header\">\n                            <strong>調査内容</strong>\n                        </h5>\n                        <div class=\"taio-info-border\">\n                            <div class=\"info-detail-area\">\n                                {{researchComment}}\n                            </div>\n                        </div>\n                        <h5 class=\"context-sub-header\">\n                            <strong>原因</strong>\n                        </h5>\n                        <div class=\"action-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>原因特定：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{genin}}</div>\n                            </div>\n                            <div class=\"info-detail-area\">\n                                {{geninComment}}\n                            </div>\n                        </div>\n                        <h5 class=\"context-sub-header\">\n                            <strong>処置</strong>\n                        </h5>\n                        <div class=\"product-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>処置方法：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{actSyotiNm}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>顧客要望：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{actSyotiYoboDsp}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>対策期限：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{actionTaisakuDt | date:'yyyy/MM/dd'}}</div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>コメント：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{actionSonotaComm}}</div>\n                            </div>\n\n                            <div class=\"info-detail-area\">\n                                {{actComment}}\n                            </div>\n                        </div>\n                        <h5 class=\"context-header\">\n                            <strong>結果</strong>\n                        </h5>\n                        <div class=\"relate-user-info-border\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                    <strong>復旧状況：</strong>\n                                </div>\n                                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{kekka}}</div>\n                            </div>\n                            <div class=\"info-detail-area\">\n                                {{kekkaComment}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象機器名称：</strong>\n                            </div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{taisyoKikiNm}}</div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>盤名称・記号：</strong>\n                            </div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{banMeiKigou}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>物品処理：</strong>\n                            </div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{goodsSyoriNm}}</div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>設置場所：</strong>\n                            </div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{setPlaceNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>部品払出：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{goodsPayNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>払出日：</strong>\n                            </div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{payDate | date:'yyyy/MM/dd'}}</div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>返却日：</strong>\n                            </div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{repayDate | date:'yyyy/MM/dd'}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>伝票番号：</strong>\n                            </div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{slipNo}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>最終検査：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{finalCheckPassNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>最終検査内容：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{finalCheckDetNm}}</div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼お客様入力欄</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>今回の作業について：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{thisTimeWorkNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>お客様コメント：</strong>\n                            </div>\n                            <div *ngIf=\"custComment.length > 0\" class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6 info-detail-area\">{{custComment}}</div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼社内向け入力欄</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象機種区分：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{supSotiSortNm}} {{supKisyuKbnNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>製作メーカ：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{seisakuMaker}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>施工メーカ：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{sekouMaker}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>保守契約：</strong>\n                            </div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{hosyuKeiyakuUmuNm}}</div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>保守契約(種類)：</strong>\n                            </div>\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{hosyuKeiyakuNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>確認方法：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{kakuninMethNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>障害ランク：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{failureRankNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>原因分類：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{geninSortDsp}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>社外公開：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{koukaiNm}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>社内向け連絡事項・補足・備考欄：</strong>\n                            </div>\n                            <div *ngIf=\"syanaiMessage.length > 0\" class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6 info-detail-area\">{{syanaiMessage}}</div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼改善情報</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>改善情報：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{kaizen}}</div>\n                        </div>\n\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n\n                <h4 class=\"panel-header text-primary\">\n                    <strong>▼対象CAN</strong>\n                </h4>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body context-margin\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN1：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{targetCan1}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN2：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{targetCan2}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN3：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{targetCan3}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN4：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{targetCan4}}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                                <strong>対象CAN5：</strong>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{targetCan5}}</div>\n                        </div>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n                <!-- /.panel -->\n\n            </div>\n        </div>\n        <!-- /.row -->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mr2/mr2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mr2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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





var Mr2Component = /** @class */ (function () {
    function Mr2Component(route, jsonpService, winRef) {
        this.route = route;
        this.jsonpService = jsonpService;
        this.winRef = winRef;
        this.isLoading = true;
        this.mr2Data = [];
        // 画面表示パラメータの初期化
        // 基本情報
        this.updDateDsp = ""; // 最終更新日
        this.updUserNmDsp = ""; // 最終更新ユーザー
        this.incidentNo = ""; // 受付番号
        this.actionCnt = ""; // 出動回数
        this.PjId = ""; // PJ番号
        this.custNm = ""; // 顧客名
        this.kijoNm = ""; // 機場
        this.makeDate = ""; // 作成日
        this.callDate = ""; // 受付日
        this.startDate = ""; // 障害発生日
        this.actSectionNm = ""; // 処理担当部署
        this.checkSectionNm = ""; // 検査責任部署
        this.checkUserNm = ""; // 検査責任者
        this.requestSectionNm = ""; // 御依頼元担当部署
        this.requestUserNm = ""; // 御依頼元担当者
        this.workUserNm = ""; // 作業担当者
        this.issSectionNm = ""; // 発行部署
        this.mr2StsNm = ""; // MR2状況
        // 行動記録
        this.goDate = ""; // 出発日
        this.arrivalDate = ""; // 到着日
        this.workStartDate = ""; // 作業開始日
        this.workEndDate = ""; // 作業終了日
        this.retuenDate = ""; // 現地出発日
        this.arrivalBackDate = ""; // 帰着日
        // 作業情報
        this.subjectNm = ""; // 件名
        this.setubiNm = ""; // 設備名
        this.triggerDsp = ""; // トリガー
        this.hindoDsp = ""; // 頻度
        this.gensyoDsp = ""; // 現象
        this.jyotaiDsp = ""; // 状態
        this.defectComment = ""; // 不具合状況
        this.setubiStop = ""; // 設備停止
        this.dataDefect = ""; // データ欠損
        this.setubiComment = ""; // 設備影響
        this.researchComment = ""; // 調査内容
        this.genin = ""; // 原因特定
        this.geninComment = ""; // 原因
        this.actSyotiNm = ""; // 処置方法
        this.actSyotiYoboDsp = ""; // 顧客要望
        this.actionTaisakuDt = ""; // 対策期限
        this.actionSonotaComm = ""; // その他コメント
        this.actComment = ""; // 処置
        this.kekka = ""; // 復旧状況
        this.kekkaComment = ""; // 結果
        this.taisyoKikiNm = ""; // 対象機器名称
        this.banMeiKigou = ""; // 盤名称・記号
        this.goodsSyoriNm = ""; // 物品処理
        this.setPlaceNm = ""; // 設置場所
        this.goodsPayNm = ""; // 部品払出
        this.payDate = ""; // 払出日
        this.repayDate = ""; // 返却日
        this.slipNo = ""; // 伝票番号
        this.finalCheckPassNm = ""; // 最終検査
        this.finalCheckDetNm = ""; // 最終検査内容
        // お客様入力欄
        this.thisTimeWorkNm = ""; // 今回の作業について
        this.custComment = ""; // お客様コメント
        // 社内向け入力欄
        this.supSotiSortNm = ""; // 対象機種区分
        this.supKisyuKbnNm = ""; // 対象機種区分
        this.seisakuMaker = ""; // 製作メーカ
        this.sekouMaker = ""; // 施工メーカ
        this.hosyuKeiyakuUmuNm = ""; // 保守契約
        this.hosyuKeiyakuNm = ""; // 保守契約(種類)
        this.kakuninMethNm = ""; // 確認方法
        this.failureRankNm = ""; // 障害ランク
        this.geninSortDsp = ""; // 原因分類
        this.koukaiNm = ""; // 社外公開
        this.syanaiMessage = ""; // 社内向け連絡事項・補足・備考欄
        // 改善情報
        this.kaizen = ""; // 改善情報
        // 対象CAN
        this.targetCan1 = ""; // 対象CAN1
        this.targetCan2 = ""; // 対象CAN2
        this.targetCan3 = ""; // 対象CAN3
        this.targetCan4 = ""; // 対象CAN4
        this.targetCan5 = ""; // 対象CAN5
        this.nativeWindow = winRef.getNativeWindow();
    }
    Mr2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var mkbId = this.route.snapshot.paramMap.get('mkbId');
        if (mkbId) {
            ps.set('mkbId', mkbId);
        }
        // 画面表示パラメータの取得処理
        this.isLoading = true;
        this.jsonpService.requestGet('mr2DataGet.php', ps)
            .subscribe(function (data) {
            console.log("MR2成功");
            console.log(data);
            // 通信成功時
            if (data[0]) {
                if (data[0].result !== '' && data[0].result == true) {
                    // 画面表示パラメータのセット処理
                    var mr2Data = data.slice(1);
                    _this.setDspParam(mr2Data[0]); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    // 画面表示パラメータのセット処理
    Mr2Component.prototype.setDspParam = function (data) {
        // 最終更新日・最終更新ユーザー
        this.updDateDsp = data.updDateDsp;
        this.updUserNmDsp = data.updUserNmDsp;
        // 基本情報
        this.incidentNo = data.incidentNo;
        this.actionCnt = data.actionCnt;
        this.PjId = data.PjId;
        this.custNm = data.custNm;
        this.kijoNm = data.kijoNm;
        this.makeDate = data.makeDate;
        this.callDate = data.callDate;
        this.startDate = data.startDate;
        this.actSectionNm = data.actSectionNm;
        this.checkSectionNm = data.checkSectionNm;
        this.checkUserNm = data.checkUserNm;
        this.requestSectionNm = data.requestSectionNm;
        this.requestUserNm = data.requestUserNm;
        this.workUserNm = data.workUserNm;
        this.issSectionNm = data.issSectionNm;
        this.mr2StsNm = data.mr2StsNm;
        // 行動記録
        this.goDate = data.goDate;
        this.arrivalDate = data.arrivalDate;
        this.workStartDate = data.workStartDate;
        this.workEndDate = data.workEndDate;
        this.retuenDate = data.retuenDate;
        this.arrivalBackDate = data.arrivalBackDate;
        // 作業情報
        this.subjectNm = data.subjectNm;
        this.setubiNm = data.setubiNm;
        this.triggerDsp = data.triggerDsp;
        this.hindoDsp = data.hindoDsp;
        this.gensyoDsp = data.gensyoDsp;
        this.jyotaiDsp = data.jyotaiDsp;
        this.defectComment = data.defectComment;
        this.setubiStop = data.setubiStop;
        this.dataDefect = data.dataDefect;
        this.setubiComment = data.setubiComment;
        this.researchComment = data.researchComment;
        this.genin = data.genin;
        this.geninComment = data.geninComment;
        this.actSyotiNm = data.actSyotiNm;
        this.actSyotiYoboDsp = data.actSyotiYoboDsp;
        this.actionTaisakuDt = data.actionTaisakuDt;
        this.actionSonotaComm = data.actionSonotaComm;
        this.actComment = data.actComment;
        this.kekka = data.kekka;
        this.kekkaComment = data.kekkaComment;
        this.taisyoKikiNm = data.taisyoKikiNm;
        this.banMeiKigou = data.banMeiKigou;
        this.goodsSyoriNm = data.goodsSyoriNm;
        this.setPlaceNm = data.setPlaceNm;
        this.goodsPayNm = data.goodsPayNm;
        this.payDate = data.payDate;
        this.repayDate = data.repayDate;
        this.slipNo = data.slipNo;
        this.finalCheckPassNm = data.finalCheckPassNm;
        this.finalCheckDetNm = data.finalCheckDetNm;
        // お客様入力欄
        this.thisTimeWorkNm = data.thisTimeWorkNm;
        this.custComment = data.custComment;
        // 社内向け入力欄
        this.supSotiSortNm = data.supSotiSortNm;
        this.supKisyuKbnNm = data.supKisyuKbnNm;
        this.seisakuMaker = data.seisakuMaker;
        this.sekouMaker = data.sekouMaker;
        this.hosyuKeiyakuUmuNm = data.hosyuKeiyakuUmuNm;
        this.hosyuKeiyakuNm = data.hosyuKeiyakuNm;
        this.kakuninMethNm = data.kakuninMethNm;
        this.failureRankNm = data.failureRankNm;
        this.geninSortDsp = data.geninSortDsp;
        this.koukaiNm = data.koukaiNm;
        this.syanaiMessage = data.syanaiMessage;
        // 改善情報
        this.kaizen = data.kaizen;
        // 対象CAN
        this.targetCan1 = data.targetCan1;
        this.targetCan2 = data.targetCan2;
        this.targetCan3 = data.targetCan3;
        this.targetCan4 = data.targetCan4;
        this.targetCan5 = data.targetCan5;
    };
    Mr2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-mr2',
            template: __webpack_require__("../../../../../src/app/mr2/mr2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mr2/mr2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_4__windowRef_service__["a" /* WindowRefService */]])
    ], Mr2Component);
    return Mr2Component;
}());



/***/ }),

/***/ "../../../../../src/app/pipe/datex.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatexPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DatexPipe = /** @class */ (function () {
    function DatexPipe() {
    }
    DatexPipe.prototype.transform = function (value, format) {
        if (format === void 0) { format = ""; }
        // Try and parse the passed value.
        var momentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(value);
        // If moment didn't understand the value, return it unformatted.
        if (!momentDate.isValid())
            return value;
        // Otherwise, return the date formatted as requested.
        return momentDate.format(format);
    };
    DatexPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'datex'
        })
    ], DatexPipe);
    return DatexPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipe/order.by.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByParam; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
var OrderByPipe = /** @class */ (function () {
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
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'orderBy',
            pure: false // パラメータが変わった場合にソートを動作させるためにはfalseにしないといけない
        })
    ], OrderByPipe);
    return OrderByPipe;
}());

/**
 * ソートする規則を設定する.
 *
 * デフォルトではカラム値がnullもしくはundefineの場合はNumber.MAX_VALUEとして扱う
 * カラム値がnullもしくはundefineの取り扱いをNumber.MIN_VALUEとして扱う場合は{{nullHandlingMin()}}を呼ぶ
 * @export
 * @class OrderByParam
 */
var OrderByParam = /** @class */ (function () {
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



/***/ }),

/***/ "../../../../../src/app/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    /**
     *  サーバ通信共通処理
     *   pram: url アクションのurl
     *   return: オブジェクト
     */
    PostService.prototype.requestPost = function (url, data) {
        url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].envPath + url; // 環境に合わせたURLを作成する
        return this.http.post(url, data)
            .subscribe(function (data) { return data; }, function (error) { return error; });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* トップ画面テーブルのヘッダ(オレンジ色) */\r\n.table-header {\r\n    text-align: center;\r\n    background-color: moccasin;\r\n}\r\n/* パネルのタイトルをインライン表示 */\r\n.top-panel-title {\r\n    display: inline;\r\n}\r\n/* テーブル　固定幅適用　文字列折り返し適用 */\r\n.list-table {\r\n    table-layout:fixed;\r\n    word-wrap: break-word;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n/* 関連情報有無のヘッダー幅*/\r\n.relate-th {\r\n    width:44px;\r\n}", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var ProjectComponent = /** @class */ (function () {
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
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-project',
            template: __webpack_require__("../../../../../src/app/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_3__windowRef_service__["a" /* WindowRefService */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/subDetail/subDetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* 小さいボタン　オリジナルクラス */\r\n.btn-sx-ori {\r\n    padding: 0px 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subDetail/subDetail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデント関連閲覧画面\n//\tHTMLID　　　　 ：\n//\t作成日付・作成者：2018.02.02 NEWTOUCH)newtouch\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<loading [loading]=\"isLoading\"></loading>\n\n<div ng-cloak>\n  <div class=\"container-fluid\">\n    <div class=\"text-right transition-button\" style=\"margin-top: 15px;\">\n      <span>\n        <button type=\"button\" class=\"btn\" (click)=\"windowClose()\">閉じる</button>\n      </span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n        <div class=\"panel panel-danger\">\n          <div class=\"panel-heading clearfix\">\n            <span class=\"h3 incident-title-status\">{{incidentNo}}</span>\n            <span class=\"h4 incident-title-status\">　{{incidentStatusNm}} {{incidentTypeNm}}</span>\n            <div class=\"pull-right\">\n              <strong>登録日：{{insDate | datex:'YYYY/MM/DD HH:mm'}} {{insUserNm}}　最終更新日：{{updDate | datex:'YYYY/MM/DD HH:mm'}} {{updUserNm}}</strong>\n            </div>\n          </div>\n          <!-- /.panel-heading -->\n          <div class=\"panel-body context-margin\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>親インシデント番号：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{parentIncidentNo}}</div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>発生日時：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{incidentStartDateTime | datex:'YYYY/MM/DD HH:mm'}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>業種区分：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{industryTypeNm}}</div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>情報提供元：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{infoSourceNm}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>情報提供者：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{infoProvider}}</div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>情報提供TEL：</strong>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{infoProvidedTel}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>添付ファイル：</strong>\n              </div>\n              <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                <!-- {{incidentFileNm}} -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                <strong>注記：</strong>\n              </div>\n              <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                <!-- TODO:改行コード反映 -->\n                {{memo}}\n              </div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>設備情報及び顧客情報</strong>\n            </h5>\n            <div class=\"setubi-and-cust-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機場：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{kijoNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>事業主体：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{jigyosyutaiNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>設備：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{setubiNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>都道府県：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{prefNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>納入プロジェクト：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{deliveryPjNo}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客分類：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custTypeNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>会社名・所属部署：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{custDept}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>依頼者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{requester}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>連絡先(TEL)：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{contactTel}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>連絡先(FAX)：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{contactFax}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>連絡先(E-mail)：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{contactMail}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>営業部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{salesDeptNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>営業担当者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{salesUserNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>主管部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{skanDeptNm}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>主管担当者：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{skanUserNm}}</div>\n              </div>\n\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>受付情報</strong>\n            </h5>\n            <div class=\"call-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付日：</strong>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{callDate | datex:'YYYY/MM/DD'}}</div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-6\">\n                  <strong>開始：</strong>&nbsp;&nbsp;{{callStartDate | datex:'HH:mm'}}&nbsp;&nbsp;&nbsp;&nbsp;\n                  <strong>終了：</strong>&nbsp;&nbsp;{{callEndDate | datex:'HH:mm'}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付部署：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callDeptNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付者：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callUserNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>\n                    <strong>TEL：</strong>\n                  </strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callTel}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>E-mail：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{callMail}}</div>\n              </div>\n              <div class=\"info-detail-area\">{{callContent}}</div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>対応情報</strong>\n            </h5>\n            <div class=\"taio-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>対応日：</strong>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">{{taioDate | datex:'YYYY/MM/DD'}}</div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-6\">\n                  <strong>開始：</strong>&nbsp;&nbsp;{{taioStartDate | datex: 'HH:mm'}}\n                  <strong>&nbsp;&nbsp;&nbsp;&nbsp;終了：</strong>&nbsp;&nbsp;{{taioEndDate | datex: 'HH:mm'}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>対応部署：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioDeptNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>対応者：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioUserNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>TEL：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioTel}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>E-mail：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{taioMail}}</div>\n              </div>\n              <div class=\"info-detail-area\">{{taioContent}}</div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>処置情報</strong>\n            </h5>\n            <div class=\"action-info-border\">\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置予定日：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actDate | datex:'YYYY/MM/DD'}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置区分：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actTypeNm}} </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置開始日時：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actStartDateTime | datex:'YYYY/MM/DD HH:mm'}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置終了日時：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actEndDateTime | datex:'YYYY/MM/DD HH:mm'}} </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置部署：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actDeptNm}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>処置者：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actUserNm}} </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>TEL：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actTel}} </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>E-mail：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{actMail}} </div>\n              </div>\n              <div class=\"info-detail-area\">{{actContent}} </div>\n            </div>\n\n            <h5 class=\"context-header\">\n              <strong>製品情報</strong>\n            </h5>\n            <div class=\"product-info-border\">\n              <h5 class=\"context-sub-header\">\n                <strong>対象機種区分</strong>\n              </h5>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　装置分類：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">\n                  {{sotiKbnNm}}\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機種区分：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">\n                  {{kisyuKbnNm}}\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　機種名：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">\n                  {{kisyuNm}}\n                </div>\n              </div>\n              <h5 class=\"context-sub-header\">\n                <strong>障害状況</strong>\n              </h5>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　トリガー：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productTriggerNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>頻度：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productHindoNm}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>　現象：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productGensyoNm}}</div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>状態：</strong>\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-6\">{{productStatusNm}}</div>\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関係者</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>\n                <i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i> 変更を通知する／\n                <i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i> 変更を通知しない\n              </strong>\n            </h5>\n            <div class=\"context-margin\">\n              <ul *ngFor=\"let dept of relateUserList;let deptIdx = index;\" style=\"list-style:none;padding-left: 0px;\">\n                <div>{{dept.relateUserSectionNm}}</div>\n                <li *ngFor=\"let user of dept.relateUsers;let userIdx = index;\">\n                  <div style=\"width:235px;display: inline-block;\">\n                    <span class=\"context-margin relate-user-nm\">\n                      {{user.relateUserNm}}\n                      <span *ngIf=\"user.kidokuDate != ''\">（既読日：{{user.kidokuDate}}）</span>\n                    </span>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関連リンク</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>プロジェクト情報\n                <span class=\"text-danger\">※プロジェクト情報はＡＲＣＳから行なってください。（ＡＲＣＳ登録後の翌日反映）</span>\n              </strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>プロジェクト番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showPj()\">\n                    <u>J1000000</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>PJ主管部門：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">プロ主管</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>プロジェクト名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>PM：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>代表機場：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>都道府県：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">東京都</div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>障害対応報告書(MR2)</strong>\n            </h5>\n            <div *ngFor=\"let data of MR2List\" class=\"context-margin\">\n              <a (click)=\"showMr2(data?.mkbid)\">\n                <u *ngIf=\"data?.subjectNm.length > 0\">{{data?.subjectNm}}</u>\n                <u *ngIf=\"data?.subjectNm.length == 0\">（件名なし）</u>\n              </a>\n              <div class=\"context-margin\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                    <strong>作成日：</strong>\n                  </div>\n                  <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{data?.makeDate | datex:'YYYY/MM/DD'}}</div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                    <strong>依頼元：</strong>\n                  </div>\n                  <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{data?.requestUserNm}}</div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                    <strong>作業担当者：</strong>\n                  </div>\n                  <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{data?.workUserNm}}</div>\n                </div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>労災・事故・クレーム連絡</strong>\n            </h5>\n            <div class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>受付No：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <a (click)=\"showJiko()\">\n                    <u>17122602</u>\n                  </a>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>状態：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">第1報 正式発行</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>区分：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">品質（ランクＡ）</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>概要：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  XXXXXXXXXXXXXXXXXXXXXX\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>顧客名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">川本　健</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>機場名：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>発行日：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">2017/1/1</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>発行元：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">ｘｘｘｘｘｘｘｘｘｘｘｘｘ</div>\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>費用決裁申請</strong>\n            </h5>\n            <div *ngFor=\"let data of hiyoList\" class=\"context-margin\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>ID番号：</strong>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">\n                  <a (click)=\"showHiyo('dsp','dsp',data?.idNo,'', data?.division)\">\n                    <u>{{data?.idNo}}</u>\n                  </a>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>ステータス：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{data?.status}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>区分：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{data?.division}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>件名：</strong>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-6 col-xs-6\">{{data?.subject}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>決裁番号：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">{{data?.approvalNo}}</div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <strong>概算金額（千円）：</strong>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                  <div class=\"numbers-list\">{{data?.amount | number}}</div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <br>\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼関連インシデント</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <h5 class=\"context-header\">\n              <strong>同一機場インシデント</strong>\n            </h5>\n            <div class=\"context-margin\" *ngFor=\"let jikoIdList of relateIncidentKijoIdList\">\n              #{{jikoIdList.relateIncidentNo}} {{jikoIdList.relateIncidentType}} {{jikoIdList.relateIncidentStartDateTime}} {{jikoIdList.relateIncidentKijoNm}}\n              {{jikoIdList.relateIncidentCustNm}}\n              <div class=\"context-margin\">\n                {{jikoIdList.relateIncidentContent}}\n              </div>\n            </div>\n            <h5 class=\"context-header\">\n              <strong>同一顧客インシデント</strong>\n            </h5>\n            <div class=\"context-margin\" *ngFor=\"let custIdList of relateIncidentCustIdList\">\n              #{{custIdList.relateIncidentNo}} {{custIdList.relateIncidentType}} {{custIdList.relateIncidentStartDateTime}} {{custIdList.relateIncidentKijoNm}}\n              {{custIdList.relateIncidentCustNm}}\n              <div class=\"context-margin\">\n                {{custIdList.relateIncidentContent}}\n              </div>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n\n        <h4 class=\"panel-header text-primary\">\n          <strong>▼変更履歴</strong>\n        </h4>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body context-margin\">\n            <div *ngFor=\"let data of chanegeRev\">\n              <h5 class=\"context-header\">\n                <strong>更新者：{{data?.updUserNm}}({{data?.updDate | datex:'YYYY/MM/DD HH:mm'}})</strong>\n              </h5>\n              <ul>\n                <li *ngFor=\"let changeData of data.DetailList\">\n                  <strong>{{changeData?.key}}</strong>&emsp;{{changeData?.value}}\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/subDetail/subDetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__ = __webpack_require__("../../../../../src/environments/environment.local.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubDetailComponent = /** @class */ (function () {
    function SubDetailComponent(route, jsonpService, loginService) {
        var _this = this;
        this.route = route;
        this.jsonpService = jsonpService;
        this.loginService = loginService;
        this.isLoading = true;
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
        this.deliveryPjNo = ""; //納入プロジェクト
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
        this.sotiKbnCd = ""; // 装置分類CD
        this.sotiKbnNm = ""; // 装置分類名
        this.kisyuKbnCd = ""; // 機種区分CD
        this.kisyuKbnNm = ""; // 機種区分名
        this.kisyuNm = ""; // 機種名
        this.productTriggerCd = ""; //障害状況トリガーCD
        this.productTriggerNm = ""; //障害状況トリガー名
        this.productHindoCd = ""; //障害状況頻度CD
        this.productHindoNm = ""; //障害状況頻度名
        this.productGensyoCd = ""; //障害状況現象CD
        this.productGensyoNm = ""; //障害状況現象名
        this.productStatusCd = ""; //障害状況状態CD
        this.productStatusNm = ""; //障害状況状態名
        // 関連インシデント
        this.relateIncidentKijoIdList = []; //同一機場インシデント
        this.relateIncidentCustIdList = []; //同一顧客インシデント
        // ２ー２．障害対応報告(MR2)
        this.MR2List = ""; // MR2リスト
        // ２．関連リンク
        // ２－４. 費用決裁申請
        // 費用リスト
        this.hiyoList = "";
        // ３．関連インシデント
        // ３－１．同一機場インシデント
        this.sameKijoIncidents = ""; // 配列で保持
        // ３－２．同一顧客インシデント
        this.sameCustIncidents = ""; // 配列で保持
        // ４．変更履歴
        this.chanegeRev = ""; // 配列で保持
        // インシデント情報 
        this.relateUserList = [];
        /* ログイン情報の取得 */
        this.subscription = loginService.loginUserNm$.subscribe(function (user) { _this.userNm = user; });
        this.subscription = loginService.loginUserId$.subscribe(function (user) { _this.userId = user; });
        this.subscription = loginService.loginUserSectionCd$.subscribe(function (user) { _this.userSectionCd = user; });
        this.subscription = loginService.loginUserSectionNm$.subscribe(function (user) { _this.userSectionNm = user; });
    }
    SubDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var prmIncientId = this.route.snapshot.paramMap.get('incidentId');
        if (prmIncientId) {
            this.pageIncidentId = prmIncientId;
            ps.set('incidentId', prmIncientId);
        }
        ps.set('userId', this.userId);
        ps.set('userName', this.userNm);
        ps.set('sectionCd', this.userSectionCd);
        ps.set('sectionName', this.userSectionNm);
        // 画面表示パラメータの取得処理
        this.isLoading = true;
        this.jsonpService.requestGet('IncidentDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParam(data.slice(1, -1)[0]);
                    // 変更履歴パラメータのセット処理
                    _this.setChangeRev(data.slice(2)[0]);
                    // 関連リンク 障害対応報告書(MR2) 取得
                    _this.findMr2List(_this.incidentNo);
                    // 関連リンク 費用決裁申請　取得
                    _this.findHiyoList(_this.incidentId);
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
        // 画面表示パラメータ(関連インシデント)の取得処理
        this.jsonpService.requestGet('RelateIncidentGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                var relateIncidentKijoId = data['relateIncidentKijiIdAry'];
                var relateIncidentCustId = data['relateIncidentCustIdAry'];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.setDspParamRelateIncident(relateIncidentKijoId, relateIncidentCustId);
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    SubDetailComponent.prototype.ngOnDestroy = function () {
        // 親サービスDIの影響 メモリリーク防止
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    //MR2情報を取得する
    SubDetailComponent.prototype.findMr2List = function (incidentNo) {
        var _this = this;
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        if (incidentNo) {
            ps.set('callNo', incidentNo);
        }
        // 画面表示パラメータの取得処理
        this.isLoading = true;
        this.jsonpService.requestGet('mr2ListDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log(data);
            if (data[0]) {
                if (data[0].result !== '' && data[0].result == true) {
                    // 画面表示パラメータのセット処理
                    var mr2Data = data.slice(1);
                    _this.setMr2DspParam(mr2Data); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    //費用情報を取得する
    SubDetailComponent.prototype.findHiyoList = function (incidentId) {
        var _this = this;
        console.log("費用情報成功");
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        if (incidentId) {
            ps.set('incidentId', incidentId);
        }
        // 画面表示パラメータの取得処理
        this.isLoading = true;
        this.jsonpService.commonRequestGet('HiyoKessaiListDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            console.log("ID番号成功");
            console.log(data);
            if (data[0]) {
                if (data[0].result !== '' && data[0].result == true) {
                    // 画面表示パラメータのセット処理
                    var hiyoData = data.slice(1);
                    _this.setHiyoDspParam(hiyoData); // 配列1つ目は、サーバ処理成功フラグなので除外
                }
            }
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    //新しいウィンドウを開く(パターン1)
    // CMN_openNewWindow1(url,name,sizex,sizey,top,left){
    SubDetailComponent.prototype.CMN_openNewWindow1 = function (url, name, sizex, sizey) {
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
    SubDetailComponent.prototype.showMr2 = function (mkbid) {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        this.SUB_WIN = this.CMN_openNewWindow1("./#/mr2/" + mkbid, "sub_mr2", 1000, 760);
    };
    // 関連プロジェクト表示処理
    SubDetailComponent.prototype.showPj = function () {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        this.SUB_WIN = this.CMN_openNewWindow1("./#/project", "sub_project", 1000, 760);
    };
    // 関連事故クレーム情報表示処理
    SubDetailComponent.prototype.showJiko = function () {
        if (this.SUB_WIN)
            this.SUB_WIN.close();
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__["a" /* environment */].jikoPath + "jiko171211.html"; // 環境に合わせたURLを作成する TODO:固定値
        this.SUB_WIN = this.CMN_openNewWindow1(url, "sub_jiko", 1200, 800);
    };
    // 関連費用決済申請表示処理 TODO:固定値表示
    SubDetailComponent.prototype.showHiyo = function (status, division, idno, bno, system_mode) {
        if (system_mode == "障害対応") {
            this.system_id = "1281";
        }
        else if (system_mode == "クレーム対応") {
            this.system_id = "1282";
        }
        // var frm = window.document.fm1;
        var strurl;
        strurl = __WEBPACK_IMPORTED_MODULE_5__environments_environment_local__["a" /* environment */].hiyoPath + "wf_main_input.php";
        strurl += "?user_id=ADF";
        strurl += "&authority=9";
        //	strurl += "&system_id=1282";
        strurl += "&system_id=" + this.system_id;
        strurl += "&status=" + status;
        strurl += "&division=" + division;
        strurl += "&idno=" + idno;
        strurl += "&win_kbn=1";
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
    // 画面表示パラメータのセット処理
    SubDetailComponent.prototype.setDspParam = function (data) {
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
        this.deliveryPjNo = data.deliveryPjNo; //納入プロジェクト
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
        this.sotiKbnCd = data.sotiKbnCd; //装置分類CD
        this.sotiKbnNm = data.sotiKbnNm; //装置分類名
        this.kisyuKbnCd = data.kisyuKbnCd; //機種区分CD
        this.kisyuKbnNm = data.kisyuKbnNm; //機種区分名
        this.kisyuNm = data.kisyuNm; //機種名
        this.productTriggerCd = data.productTriggerCd; //障害状況トリガーCD
        this.productTriggerNm = data.productTriggerNm; //障害状況トリガー名
        this.productHindoCd = data.productHindoCd; //障害状況頻度CD
        this.productHindoNm = data.productHindoNm; //障害状況頻度名
        this.productGensyoCd = data.productGensyoCd; //障害状況現象CD
        this.productGensyoNm = data.productGensyoNm; //障害状況現象名
        this.productStatusCd = data.productStatusCd; //障害状況状態CD
        this.productStatusNm = data.productStatusNm; //障害状況状態名
        this.initRelateUserList(data.relateUserList);
    };
    // 画面表示パラメータ(関連インシデント)のセット処理
    SubDetailComponent.prototype.setDspParamRelateIncident = function (relateIncidentKijoId, relateIncidentCustId) {
        this.relateIncidentKijoIdList = relateIncidentKijoId;
        this.relateIncidentCustIdList = relateIncidentCustId;
    };
    // 画面表示パラメータのセット処理
    SubDetailComponent.prototype.setMr2DspParam = function (data) {
        this.MR2List = data;
    };
    // 変更履歴パラメータのセット処理
    SubDetailComponent.prototype.setChangeRev = function (data) {
        this.chanegeRev = data;
    };
    // 画面表示パラメータのセット処理
    SubDetailComponent.prototype.setHiyoDspParam = function (data) {
        this.hiyoList = data;
    };
    // それが空であるかどうかを判断する
    SubDetailComponent.prototype.isEmpty = function (str) {
        return str == null || str == undefined || str == "" ? true : false;
    };
    // インシデント関係者 
    SubDetailComponent.prototype.initRelateUserList = function (relateUserArray) {
        this.relateUserList = [];
        var length = relateUserArray.length;
        if (relateUserArray.length > 0) {
            for (var i = 0; i < length; i++) {
                var sectionObj = {};
                var section = relateUserArray[i];
                if (!this.isEmpty(section.relateUserSectionCd)) {
                    if (this.isDeptExist(section.relateUserSectionCd, section.relateUserSectionNm) != -1) {
                        continue;
                    }
                    sectionObj["relateUserSectionCd"] = section.relateUserSectionCd;
                    sectionObj["relateUserSectionNm"] = section.relateUserSectionNm;
                    var userList = [];
                    for (var j = 0; j < length; j++) {
                        var userObj = {};
                        var user = relateUserArray[j];
                        if (!this.isEmpty(user.relateUserId)) {
                            if (user.relateUserSectionCd == section.relateUserSectionCd && user.relateUserSectionNm == section.relateUserSectionNm) {
                                userObj["relateId"] = user.relateId;
                                userObj["relateUserId"] = user.relateUserId;
                                userObj["relateUserNm"] = user.relateUserNm;
                                userObj["kidokuDate"] = user.kidokuDate;
                                userList.push(userObj);
                            }
                        }
                    }
                    sectionObj["relateUsers"] = userList;
                    this.relateUserList.push(sectionObj);
                }
            }
        }
    };
    // インシデント関係者 
    SubDetailComponent.prototype.findRelateUser = function () {
        var _this = this;
        var ps = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        ps.set('incidentId', this.pageIncidentId);
        // 画面表示パラメータの取得処理
        this.jsonpService.requestGet('IncidentDataGet.php', ps)
            .subscribe(function (data) {
            // 通信成功時
            if (data[0]) {
                var one = data[0];
                if (one.result !== '' && one.result == true) {
                    // 画面表示パラメータのセット処理
                    _this.initRelateUserList(data.slice(1, -1)[0].relateUserList);
                }
            }
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            return false;
        });
    };
    // 部門が既に存在するかどうかを判断する
    SubDetailComponent.prototype.isDeptExist = function (targetCd, targetNm) {
        var index = -1;
        for (var i = 0; i < this.relateUserList.length; i++) {
            var tmpCd = this.relateUserList[i].relateUserSectionCd.toString();
            var tmpNm = this.relateUserList[i].relateUserSectionNm.toString();
            if (tmpCd == targetCd.toString() && tmpNm == targetNm.toString()) {
                index = i;
            }
        }
        return index;
    };
    // 現在のページを閉じる
    SubDetailComponent.prototype.windowClose = function () {
        window.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('relateUser'),
        __metadata("design:type", Object)
    ], SubDetailComponent.prototype, "relateUser", void 0);
    SubDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/subDetail/subDetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subDetail/subDetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], SubDetailComponent);
    return SubDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/top/top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* トップ画面テーブルのヘッダ(オレンジ色) */\r\n.table-header {\r\n    text-align: center;\r\n    background-color: moccasin;\r\n}\r\n/* パネルのタイトルをインライン表示 */\r\n.top-panel-title {\r\n    display: inline;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>thead>tr>th{\r\n    vertical-align: middle;\r\n}\r\n/* テーブル 中央揃え */\r\n.list-table>tbody>tr>td{\r\n    vertical-align: middle;\r\n}\r\n/* インシデント番号のヘッダー幅*/\r\n.incident-no-th {\r\n    width:102px;\r\n}\r\n/* 関連情報有無のヘッダー幅*/\r\n.relate-th {\r\n    width:44px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top/top.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n//*****************************************************************************\n//\tシステム名　　　：インシデント管理システム\n//\tサブシステム名　：\n//\t画面名　　　　　：インシデントTOP画面\n//\tHTML_ID　　　　 ：IncidentTopView.php\n//\t作成日付・作成者：2017.10.05 ADF)S.Yoshida\n//\t修正履歴　　　　：\n//*****************************************************************************\n-->\n<loading [loading]=\"isLoading\"></loading>\n<my-header></my-header>\n\n<div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"panel panel-danger\">\n          <div class=\"panel-heading\">\n            <h4 class=\"top-panel-title\">\n              <i class=\"fa fa-check\"></i> 最新のインシデント\n            </h4>\n          </div>\n          <table class=\"table table-striped list-table\">\n            <thead>\n              <tr>\n                <th class=\"table-header incident-no-th\">インシデント番号</th>\n                <th class=\"table-header\" width=\"25%\">受付内容</th>\n                <th class=\"table-header\">機場</th>\n                <th class=\"table-header\">設備</th>\n                <th class=\"table-header\">都道府県</th>\n                <th class=\"table-header\">発生日時</th>\n                <th class=\"table-header\">受付日\n                  <i class=\"fa fa-caret-down\"></i>\n                </th>\n                <th class=\"table-header\">分類</th>\n                <th class=\"table-header\">ステータス</th>\n                <th class=\"table-header relate-th\" popover=\"関連プロジェクト\" triggers=\"mouseenter:mouseleave\">関連PJ</th>\n                <th class=\"table-header relate-th\" popover=\"事故クレーム連絡\" triggers=\"mouseenter:mouseleave\">事ク連絡</th>\n                <th class=\"table-header relate-th\" popover=\"現地出動（MR2）\" triggers=\"mouseenter:mouseleave\">現地出動</th>\n                <th class=\"table-header relate-th\">費用決済</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of incidentList\">\n                <td class=\"code-list\">\n                  <a routerLink=\"/detail/{{data?.incidentId}}\" routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                    <u>{{data?.incidentNo}}</u>\n                  </a>\n                </td>\n                <td class=\"char-list\" title={{data?.callContent}}>\n                  {{data?.callContent | slice: 0:40 }}\n                  <span *ngIf=\"data?.callContent?.length >= 40\" >…</span>\n                </td>\n                <td class=\"char-list\">{{data?.kijoNm}}</td>\n                <td class=\"char-list\">{{data?.setubiNm}}</td>\n                <td class=\"status-list\">{{data?.prefNm}}</td>\n                <td class=\"date-list\">{{data?.incidentStartDateTime| datex:'YYYY/MM/DD HH:mm'}}</td>\n                <td class=\"date-list\">{{data?.callDate| datex:'YYYY/MM/DD HH:mm'}}</td>\n                <td class=\"status-list\">{{data?.incidentTypeNm}}</td>\n                <td class=\"status-list\">{{data?.incidentStatusNm}}</td>\n                <td class=\"status-list\">{{data?.relatePj}}</td>\n                <td class=\"status-list\">{{data?.relateJiko}}</td>\n                <td class=\"status-list\">{{data?.relateMr2}}</td>\n                <td class=\"status-list\">{{data?.relateHiyo}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/top/top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonp_service__ = __webpack_require__("../../../../../src/app/jsonp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopComponent = /** @class */ (function () {
    function TopComponent(route, jsonpService, loginService) {
        var _this = this;
        this.route = route;
        this.jsonpService = jsonpService;
        this.loginService = loginService;
        this.isLoading = true;
        this.incidentList = [];
        /* ログイン情報の取得 */
        this.subscription = loginService.loginUserId$.subscribe(function (user) { _this.userId = user; });
        this.subscription = loginService.loginUserNm$.subscribe(function (user) { _this.userNm = user; });
        this.subscription = loginService.loginUserSectionCd$.subscribe(function (user) { _this.userSectionCd = user; });
        this.subscription = loginService.loginUserSectionNm$.subscribe(function (user) { _this.userSectionNm = user; });
    }
    TopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (obj) { return console.log(obj['category']); });
        // 画面表示パラメータの取得処理
        this.isLoading = true;
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
            _this.isLoading = false;
        }, function (error) {
            // 通信失敗もしくは、コールバック関数内でエラー
            console.log(error);
            console.log('サーバとのアクセスに失敗しました。');
            _this.isLoading = false;
            return false;
        });
    };
    TopComponent.prototype.ngOnDestroy = function () {
        // 親サービスDIの影響 メモリリーク防止
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    // 画面表示パラメータのセット処理
    TopComponent.prototype.setDspParam = function (data) {
        this.incidentList = data;
    };
    TopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/top/top.component.html"),
            styles: [__webpack_require__("../../../../../src/app/top/top.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__jsonp_service__["a" /* JsonpService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/windowRef.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    WindowRefService.prototype.getNativeWindow = function () {
        return window;
    };
    WindowRefService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WindowRefService);
    return WindowRefService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.local.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    location: 'local',
    envPath: 'http://localhost/INCIDENT/',
    envCommonPath: 'http://localhost/COMMONAPI/',
    jikoPath: 'http://localhost/JIKO/',
    hiyoPath: 'http://localhost/WORKFLOW/',
    crmPath: 'http://localhost/CALL/php/',
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    location: 'server',
    envPath: 'http://172.20.108.34/INCIDENT/',
    envCommonPath: 'http://172.20.108.34/COMMONAPI/',
    jikoPath: 'http://172.20.108.34/JIKO/',
    hiyoPath: 'http://172.20.108.34/WORKFLOW/',
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map