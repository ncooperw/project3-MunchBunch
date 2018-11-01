(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consumer-consumer-module"],{

/***/ "./src/app/consumer/account/account.component.css":
/*!********************************************************!*\
  !*** ./src/app/consumer/account/account.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consumer/account/account.component.html":
/*!*********************************************************!*\
  !*** ./src/app/consumer/account/account.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  account works!\n</p>\n"

/***/ }),

/***/ "./src/app/consumer/account/account.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/consumer/account/account.component.ts ***!
  \*******************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/consumer/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/consumer/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/consumer/consumer-navbar/consumer-navbar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/consumer/consumer-navbar/consumer-navbar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consumer/consumer-navbar/consumer-navbar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/consumer/consumer-navbar/consumer-navbar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">Let's Eat!</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a routerLink=\"/consumer\" class=\"nav-link\" href=\"/consumer\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink= \"/account\" class=\"nav-link\" href=\"/account\">Account</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/reviews\" class=\"nav-link\"  href=\"/review\">Reviews</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink= \"/search\" class=\"nav-link\" href=\"/truck-search\">Search</a>\n        </li>\n        <li class=\"nav-item\">\n            <!-- <button class=\"btn btn-primary\" (click)=\"onLogin()\">Tweet</button> -->\n          <a routerLink=\"/tweet\" class=\"nav-link\" href=\"/\">Tweet</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Fav Updates!</a>\n        </li>\n      </ul>\n    </div>\n    </div>\n  </nav>\n  <div class = \"container\">\n    <router-outlet></router-outlet>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/consumer/consumer-navbar/consumer-navbar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/consumer/consumer-navbar/consumer-navbar.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConsumerNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerNavbarComponent", function() { return ConsumerNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsumerNavbarComponent = /** @class */ (function () {
    function ConsumerNavbarComponent() {
    }
    ConsumerNavbarComponent.prototype.ngOnInit = function () {
    };
    ConsumerNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumer-navbar',
            template: __webpack_require__(/*! ./consumer-navbar.component.html */ "./src/app/consumer/consumer-navbar/consumer-navbar.component.html"),
            styles: [__webpack_require__(/*! ./consumer-navbar.component.css */ "./src/app/consumer/consumer-navbar/consumer-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsumerNavbarComponent);
    return ConsumerNavbarComponent;
}());



/***/ }),

/***/ "./src/app/consumer/consumer-page/consumer-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/consumer/consumer-page/consumer-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consumer/consumer-page/consumer-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/consumer/consumer-page/consumer-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to Munch Bunch</h2>\n\n<app-consumer-navbar></app-consumer-navbar>\n<div class=\"container bg-light\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h5>What's Hot</h5>\n          <span><i class=\"hot text-danger fas fa-fire\"></i>\n            <i class=\"hot text-danger fas fa-fire\"></i>\n            <i class=\"hot text-danger fas fa-fire\"></i></span>\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-success\">Search for Food</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\">Tweet</button>\n    </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-warning\">Find Your Friends</button>\n    </div>\n  </div>\n\n</div>\n\n\n      \n      <app-truck-search></app-truck-search>\n    \n  \n\n\n\n"

/***/ }),

/***/ "./src/app/consumer/consumer-page/consumer-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/consumer/consumer-page/consumer-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConsumerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerPageComponent", function() { return ConsumerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsumerPageComponent = /** @class */ (function () {
    function ConsumerPageComponent() {
    }
    ConsumerPageComponent.prototype.ngOnInit = function () {
    };
    ConsumerPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumer-page',
            template: __webpack_require__(/*! ./consumer-page.component.html */ "./src/app/consumer/consumer-page/consumer-page.component.html"),
            styles: [__webpack_require__(/*! ./consumer-page.component.css */ "./src/app/consumer/consumer-page/consumer-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsumerPageComponent);
    return ConsumerPageComponent;
}());



/***/ }),

/***/ "./src/app/consumer/consumer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/consumer/consumer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ConsumerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerRoutingModule", function() { return ConsumerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review/review.component */ "./src/app/consumer/review/review.component.ts");
/* harmony import */ var _truck_search_truck_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./truck-search/truck-search.component */ "./src/app/consumer/truck-search/truck-search.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/consumer/user-info/user-info.component.ts");
/* harmony import */ var _consumer_page_consumer_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consumer-page/consumer-page.component */ "./src/app/consumer/consumer-page/consumer-page.component.ts");
/* harmony import */ var _trucks_truck_detail_truck_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trucks/truck-detail/truck-detail.component */ "./src/app/trucks/truck-detail/truck-detail.component.ts");
/* harmony import */ var _trucks_truck_list_truck_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../trucks/truck-list/truck-list.component */ "./src/app/trucks/truck-list/truck-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { from } from 'rxjs';





var consumerRoutes = [
    { path: '', pathMatch: 'full',
        component: _consumer_page_consumer_page_component__WEBPACK_IMPORTED_MODULE_5__["ConsumerPageComponent"] },
    { path: 'reviews', component: _review_review_component__WEBPACK_IMPORTED_MODULE_2__["ReviewComponent"] },
    { path: 'truck-search', component: _truck_search_truck_search_component__WEBPACK_IMPORTED_MODULE_3__["TruckSearchComponent"] },
    { path: 'account', component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__["UserInfoComponent"] },
    { path: ':cuisineName', component: _trucks_truck_list_truck_list_component__WEBPACK_IMPORTED_MODULE_7__["TruckListComponent"] },
    { path: ':cuisineName/:truckId', component: _trucks_truck_detail_truck_detail_component__WEBPACK_IMPORTED_MODULE_6__["TruckDetailComponent"] },
];
var ConsumerRoutingModule = /** @class */ (function () {
    function ConsumerRoutingModule() {
    }
    ConsumerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(consumerRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsumerRoutingModule);
    return ConsumerRoutingModule;
}());



/***/ }),

/***/ "./src/app/consumer/consumer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/consumer/consumer.module.ts ***!
  \*********************************************/
/*! exports provided: ConsumerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerModule", function() { return ConsumerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _consumer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consumer-routing.module */ "./src/app/consumer/consumer-routing.module.ts");
/* harmony import */ var _consumer_page_consumer_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consumer-page/consumer-page.component */ "./src/app/consumer/consumer-page/consumer-page.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review/review.component */ "./src/app/consumer/review/review.component.ts");
/* harmony import */ var _consumer_navbar_consumer_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consumer-navbar/consumer-navbar.component */ "./src/app/consumer/consumer-navbar/consumer-navbar.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/consumer/user-info/user-info.component.ts");
/* harmony import */ var _truck_search_truck_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./truck-search/truck-search.component */ "./src/app/consumer/truck-search/truck-search.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/account.component */ "./src/app/consumer/account/account.component.ts");
/* harmony import */ var _consumer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./consumer.service */ "./src/app/consumer/consumer.service.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _trucks_truck_list_truck_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../trucks/truck-list/truck-list.component */ "./src/app/trucks/truck-list/truck-list.component.ts");
/* harmony import */ var _trucks_truck_detail_truck_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../trucks/truck-detail/truck-detail.component */ "./src/app/trucks/truck-detail/truck-detail.component.ts");
/* harmony import */ var _cusines_cuisine_cuisine_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cusines/cuisine/cuisine.component */ "./src/app/consumer/cusines/cuisine/cuisine.component.ts");
/* harmony import */ var _search_detail_search_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search-detail/search-detail.component */ "./src/app/consumer/search-detail/search-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var ConsumerModule = /** @class */ (function () {
    function ConsumerModule() {
    }
    ConsumerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _consumer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsumerRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [
                _consumer_page_consumer_page_component__WEBPACK_IMPORTED_MODULE_6__["ConsumerPageComponent"], _review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"], _consumer_navbar_consumer_navbar_component__WEBPACK_IMPORTED_MODULE_8__["ConsumerNavbarComponent"], _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__["UserInfoComponent"], _truck_search_truck_search_component__WEBPACK_IMPORTED_MODULE_10__["TruckSearchComponent"], _trucks_truck_detail_truck_detail_component__WEBPACK_IMPORTED_MODULE_16__["TruckDetailComponent"], _trucks_truck_list_truck_list_component__WEBPACK_IMPORTED_MODULE_15__["TruckListComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
                _cusines_cuisine_cuisine_component__WEBPACK_IMPORTED_MODULE_17__["CuisineComponent"],
                _search_detail_search_detail_component__WEBPACK_IMPORTED_MODULE_18__["SearchDetailComponent"]
            ],
            providers: [_consumer_service__WEBPACK_IMPORTED_MODULE_12__["ConsumerService"]]
        })
    ], ConsumerModule);
    return ConsumerModule;
}());



/***/ }),

/***/ "./src/app/consumer/cusines/cuisine.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/consumer/cusines/cuisine.service.ts ***!
  \*****************************************************/
/*! exports provided: CuisineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuisineService", function() { return CuisineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/message.service */ "./src/app/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_cuisines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-cuisines */ "./src/app/consumer/cusines/mock-cuisines.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CuisineService = /** @class */ (function () {
    function CuisineService(messageService) {
        this.messageService = messageService;
    }
    CuisineService.prototype.getCuisines = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_cuisines__WEBPACK_IMPORTED_MODULE_3__["CUISINES"]);
    };
    ;
    CuisineService.prototype.getCuisine = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_cuisines__WEBPACK_IMPORTED_MODULE_3__["CUISINES"].find(function (cuisine) { return cuisine.id === id; }));
    };
    CuisineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], CuisineService);
    return CuisineService;
}());



/***/ }),

/***/ "./src/app/consumer/cusines/cuisine/cuisine.component.css":
/*!****************************************************************!*\
  !*** ./src/app/consumer/cusines/cuisine/cuisine.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cuisine-card {\n    width: 150px;\n    height: 150px;\n    margin: 3px;\n    border: solid 5px black;\n    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2), 0 8px 22px 0 rgba(0,0,0,0.19);\n    cursor: pointer;\n}\n.cuisine-card:hover {\n    background-color:#f39cc3;\n    color: white;\n}\n.cuisine-name {\n    text-align: center;\n    font-size: 20px;\n    font-size-adjust: inherit;\n    \n}\n.cuisine-image {\n    height: 100px;\n\n}\n.hot {\n    padding: 3px;\n    font-size: 24px;\n}\n@media screen and (min-width: 300px) and (max-width: 600px) {\n.cuisine-card{\n    height: auto;\n    width: auto;\n}\nimg{\n    height: auto;\n    width: auto;\n    align-content: center;\n}\n.cuisine-name{\n    display: none;\n}\n}"

/***/ }),

/***/ "./src/app/consumer/cusines/cuisine/cuisine.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/consumer/cusines/cuisine/cuisine.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-9\">\n      <h5>Search by cuisine</h5>\n      <div class=\"card-deck\">\n        <div *ngFor=\"let cuisine of cuisines\" [class.selected]=\"cuisine === selectedCuisine\" (click)=\"onSelect(cuisine)\" class=\"row\">\n          <div class=\"col-sm-4 justify-content-center\">\n            <div class=\"card p-3 cuisine-card\">\n              <a routerLink=\"{{cuisine.name}}\">\n                <img class=\"card-img-top cuisine-image\" src=\"{{cuisine.imgLink}}\" alt=\"{{cuisine.name}}\">\n                <div class=\"card-body p-0\">\n                  <p class=\"cuisine-name\">{{cuisine.name}}</p>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>\n<!-- <a routerLink=\"{{cuisine.name}}\">\n  <img class=\"card-img-top cuisine-image\" src=\"../cuisineImages/salad.png\" alt=\"\">\n  <div class=\"card-body p-0\">\n    <p class=\"cuisine-name\">{{cuisine.name}}</p>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/consumer/cusines/cuisine/cuisine.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/consumer/cusines/cuisine/cuisine.component.ts ***!
  \***************************************************************/
/*! exports provided: CuisineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuisineComponent", function() { return CuisineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cuisine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cuisine.service */ "./src/app/consumer/cusines/cuisine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CuisineComponent = /** @class */ (function () {
    function CuisineComponent(cuisineService) {
        this.cuisineService = cuisineService;
    }
    CuisineComponent.prototype.getCuisines = function () {
        var _this = this;
        this.cuisineService.getCuisines().subscribe(function (cuisines) { return _this.cuisines = cuisines; });
    };
    CuisineComponent.prototype.ngOnInit = function () {
        this.getCuisines();
    };
    CuisineComponent.prototype.OnSelect = function (cuisines) {
        this.selectedCuisine = cuisines;
    };
    CuisineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cuisine',
            template: __webpack_require__(/*! ./cuisine.component.html */ "./src/app/consumer/cusines/cuisine/cuisine.component.html"),
            styles: [__webpack_require__(/*! ./cuisine.component.css */ "./src/app/consumer/cusines/cuisine/cuisine.component.css")]
        }),
        __metadata("design:paramtypes", [_cuisine_service__WEBPACK_IMPORTED_MODULE_1__["CuisineService"]])
    ], CuisineComponent);
    return CuisineComponent;
}());



/***/ }),

/***/ "./src/app/consumer/cusines/mock-cuisines.ts":
/*!***************************************************!*\
  !*** ./src/app/consumer/cusines/mock-cuisines.ts ***!
  \***************************************************/
/*! exports provided: CUISINES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUISINES", function() { return CUISINES; });
var CUISINES = [
    { id: 1, name: 'American', imgLink: '../../../../assets/cuisineImages/american.png' },
    { id: 2, name: 'BBQ', imgLink: '../../../../assets/cuisineImages/bbq.jpg' },
    { id: 3, name: 'Italian', imgLink: '../../../../assets/cuisineImages/spaghetti.jpeg' },
    { id: 4, name: 'Dessert', imgLink: '../../../../assets/cuisineImages/cupcake.png' },
    { id: 5, name: 'Asian', imgLink: '../../../../assets/cuisineImages/asian.png' },
    { id: 5, name: 'Pizza', imgLink: '../../../../assets/cuisineImages/pizza.png' },
    { id: 5, name: 'Vegetarian', imgLink: '../../../../assets/cuisineImages/salad.png' },
];


/***/ }),

/***/ "./src/app/consumer/review/review.component.css":
/*!******************************************************!*\
  !*** ./src/app/consumer/review/review.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consumer/review/review.component.html":
/*!*******************************************************!*\
  !*** ./src/app/consumer/review/review.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  review works!\n</p>\n"

/***/ }),

/***/ "./src/app/consumer/review/review.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/consumer/review/review.component.ts ***!
  \*****************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/consumer/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/consumer/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/consumer/search-detail/search-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/consumer/search-detail/search-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consumer/search-detail/search-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/consumer/search-detail/search-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cuisine\">\n\n  <h2>{{cuisine.name | uppercase}} Search</h2>\n  \n  <div *ngFor=\"let truck of Trucks\">\n    \n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/consumer/search-detail/search-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/consumer/search-detail/search-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDetailComponent", function() { return SearchDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchDetailComponent = /** @class */ (function () {
    function SearchDetailComponent() {
    }
    SearchDetailComponent.prototype.ngOnInit = function () {
    };
    SearchDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-detail',
            template: __webpack_require__(/*! ./search-detail.component.html */ "./src/app/consumer/search-detail/search-detail.component.html"),
            styles: [__webpack_require__(/*! ./search-detail.component.css */ "./src/app/consumer/search-detail/search-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchDetailComponent);
    return SearchDetailComponent;
}());



/***/ }),

/***/ "./src/app/consumer/truck-search/truck-search.component.css":
/*!******************************************************************!*\
  !*** ./src/app/consumer/truck-search/truck-search.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cuisine-card {\n    width: 150px;\n    height: 150px;\n    margin: 3px;\n    border: solid 1px red;\n    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2), 0 8px 22px 0 rgba(0,0,0,0.19);\n    cursor: pointer;\n}\n.cuisine-card:hover {\n    background-color: red;\n    color: white;\n}\n.cuisine-name {\n    text-align: center;\n    font-size: 20px;\n    font-size-adjust: inherit;\n    \n}\n.cuisine-image {\n    height: 100px;\n\n}\n.hot {\n    padding: 3px;\n    font-size: 24px;\n}\n@media screen and (min-width: 300px) and (max-width: 600px) {\n.cuisine-card{\n    height: auto;\n    width: auto;\n}\nimg{\n    height: auto;\n    width: auto;\n    align-content: center;\n}\n.cuisine-name{\n    display: none;\n}\n}"

/***/ }),

/***/ "./src/app/consumer/truck-search/truck-search.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/consumer/truck-search/truck-search.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-cuisine></app-cuisine>\n</div>\n<div class=\"container\">\n  <app-truck-list></app-truck-list>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h3>Search by Map</h3>\n    \n    <app-map></app-map>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/consumer/truck-search/truck-search.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/consumer/truck-search/truck-search.component.ts ***!
  \*****************************************************************/
/*! exports provided: TruckSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckSearchComponent", function() { return TruckSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TruckSearchComponent = /** @class */ (function () {
    function TruckSearchComponent(commonService, client) {
        this.commonService = commonService;
        this.client = client;
    }
    TruckSearchComponent.prototype.getTrucks = function () {
        return this.commonService.getTrucks();
        //.subscribe(trucks => this.trucks = trucks);
    };
    // cuisines: Cuisine[];
    // getCuisines(): void {
    //  this.searchService.getCuisines().subscribe(cuisines => this.cuisines = cuisines);
    // }
    TruckSearchComponent.prototype.ngOnInit = function () {
        //this.getCuisines();
        this.getTrucks();
    };
    TruckSearchComponent.prototype.onSelect = function (trucks) {
        this.selectedTruck = trucks;
    };
    TruckSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-search',
            template: __webpack_require__(/*! ./truck-search.component.html */ "./src/app/consumer/truck-search/truck-search.component.html"),
            styles: [__webpack_require__(/*! ./truck-search.component.css */ "./src/app/consumer/truck-search/truck-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TruckSearchComponent);
    return TruckSearchComponent;
}());



/***/ }),

/***/ "./src/app/consumer/user-info/user-info.component.css":
/*!************************************************************!*\
  !*** ./src/app/consumer/user-info/user-info.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consumer/user-info/user-info.component.html":
/*!*************************************************************!*\
  !*** ./src/app/consumer/user-info/user-info.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form #userForm=\"ngForm\"   (ngSubmit)=\"onSave(userForm.value)\" novalidate>  \n  <p>Is \"myForm\" valid? {{userForm.valid}}</p>  \n <table>  \n<tr>  \n<td>name</td>  \n<td>   \n    <input name=\"id\" type=\"hidden\"     [(ngModel)]=\"id\" />  \n     <input name=\"name\" type=\"text\"  required  [(ngModel)]=\"name\" />  \n  \n </td>  \n</tr>  \n  \n<tr>  \n    <td>address</td>  \n    <td>    <input name=\"address\" required  type=\"text\"   [(ngModel)]=\"address\" /></td>  \n    </tr>  \n    <tr>  \n        <td colspan=\"2\">  \n    <input type=\"submit\" value=\"{{valbutton}}\" />  \n    </td>  \n    </tr>  \n </table>  \n</form>   \n  \n<table border='1'>  \n  \n  <tr>  \n    <td>Id</td>  \n    <td>Name</td>  \n    <td>Address</td>  \n    <td>Edit</td>  \n    <td>Delete</td>  \n  </tr>  \n  <tr *ngFor=\"let kk of Repdata;let ind = index\">  \n       \n    <td>{{ind + 1}}</td>  \n    <td>{{kk.name}}</td>  \n    <td>{{kk.address}}</td>  \n    <td><a (click)=\"edit(kk)\" style=\"color:blueviolet\">Edit</a></td>  \n    <td><a (click)=\"delete(kk._id)\" style=\"color:blueviolet\">Delete</a>  </td>  \n  </tr>  \n</table>   -->\n"

/***/ }),

/***/ "./src/app/consumer/user-info/user-info.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/consumer/user-info/user-info.component.ts ***!
  \***********************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _consumer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consumer.service */ "./src/app/consumer/consumer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(newService) {
        this.newService = newService;
        this.valbutton = "Save";
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        //   this.newService.getConsumer().subscribe(data => this.Repdata = data)
        // }
        // onSave = function(consumer, isValid: boolean) {
        //   consumer.mode = this.valbutton;
        //   this.newService.saveConsumer(consumer).subscribe(data => { alert(data.data);
        //   this.ngOnInit();
        //   },
        //   error => this.errorMessage = error)
        // }
        // edit = function (kk) {
        //   this.id = kk._id;
        //   this.name = kk.name;
        //   this.address = kk.address;
        //   this.valbutton = "Update";
        // }
        // delete = function(id) {
        //   this.newService.deleteConsumer(id).subscribe(data => { alert(data.data); this.ngOnInit();}, error => this.errorMessage = error)
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/consumer/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/consumer/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [_consumer_service__WEBPACK_IMPORTED_MODULE_1__["ConsumerService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 500px;\n  }"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <agm-map [latitude]=\"lat\" \n  [longitude]=\"lng\" \n  [zoom] =\"zoom\" \n  [disableDefaultUI]=\"false\" \n  [zoomControl]=\"false\"\n  (mapClick)=\"OnChoseLocation($event)\">\n\n  <agm-marker *ngFor= \"let m of markers; let i = index\"\n  [latitude]=\"lat\" \n  [longitude]=\"lng\"\n  [markerDraggable]=\"m.draggable\"\n  (dragEnd)=\"markerDraggable(m,event)\">\n  \n  <agm-info-window>Information when you click the pin</agm-info-window></agm-marker>\n      \n  </agm-map>\n\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.zoom = 12;
        this.lat = 39.6768129;
        this.lng = -104.9578801;
        this.markers = [
            {
                lat: 39.6768129,
                lng: -104.9578801,
                label: 'A',
                draggable: true
            }
        ];
    }
    MapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapComponent.prototype.OnChoseLocation = function (event) {
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        console.log("lat", event.coords.lat);
        console.log("lng", event.coords.lng);
    };
    MapComponent.prototype.mapClicked = function (event) {
        this.markers.push({
            lat: event.coords.lat,
            lng: event.coords.lng,
            draggable: true
        });
    };
    MapComponent.prototype.markerDragEnd = function (m, event) {
        console.log('dragEnd', m, event);
    };
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.trucksUrl = '/api/trucks';
        this._url = 'http://localhost:8080/account';
    }
    CommonService.prototype.getTrucks = function () {
        return this.http.get('api/trucks');
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/trucks/truck-detail/truck-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/trucks/truck-detail/truck-detail.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trucks/truck-detail/truck-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/trucks/truck-detail/truck-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"truck\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"truck._id\">Truck Details</h2>\n    <h2 *ngIf=\"!truck._id\">New Truck</h2>\n  </div>\n</div>\n<div *ngIf=\"truck\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"truck-name\">Name</label>\n      <input class=\"form-control\" name=\"truck-name\" [(ngModel)]=\"truck.name\" placeholder=\"Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"truck-imgLink\">Image</label>\n      <input class=\"form-control\" name=\"truck-imgLink\" [(ngModel)]=\"truck.truck-imgLink\" placeholder=\"image\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"truck-cuisine\">Cuisine</label>\n      <input class=\"form-control\" name=\"truck-cuisine\" [(ngModel)]=\"truck.cuisine\" placeholder=\"cuisine\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"truck-description\">Brief Description</label>\n      <input class=\"form-control\" name=\"truck-description\" [(ngModel)]=\"truck.description\" placeholder=\"description\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"truck-menuLink\">Menu</label>\n      <input class=\"form-control\" name=\"truck-menuLink\" [(ngModel)]=\"truck.menuLink\" placeholder=\"menu\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"truck-price\">Price</label>\n      <input class=\"form-control\" name=\"truck-price\" [(ngModel)]=\"truck.price\" placeholder=\"$$$\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"truck-latitude\">Latitude</label>\n      <input class=\"form-control\" name=\"truck-latitude\" [(ngModel)]=\"truck.latitude\" placeholder=\"latitude\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"truck-longitude\">Longitude</label>\n      <input class=\"form-control\" name=\"truck-longitude\" [(ngModel)]=\"truck.longitude\" placeholder=\"longitude\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!truck._id\" (click)=\"createtruck(truck)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"truck._id\" (click)=\"updatetruck(truck)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"truck._id\" (click)=\"deletetruck(truck._id)\">Delete</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/trucks/truck-detail/truck-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/trucks/truck-detail/truck-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: TruckDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckDetailComponent", function() { return TruckDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _truck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../truck */ "./src/app/trucks/truck.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TruckDetailComponent = /** @class */ (function () {
    function TruckDetailComponent(route, router, 
    //private searchService: SearchService,
    commonService) {
        this.route = route;
        this.router = router;
        this.commonService = commonService;
    }
    // createTruck(truck: Truck) {
    //   this.searchService.createTruck(truck).then((newTruck: Truck) => {
    //     this.createHandler(newTruck);
    //   });
    // }
    // updateTruck(truck: Truck): void {
    //   this.searchService.updateTruck(truck).then((updatedTruck: Truck) => {
    //     this.updateHandler(updatedTruck);
    //   });
    // }
    // deleteTruck(TruckId: String): void {
    //   this.searchService.deleteTruck(TruckId).then((deletedTruckId: String) => {
    //     this.deleteHandler(deletedTruckId);
    //   });
    // }
    TruckDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _truck__WEBPACK_IMPORTED_MODULE_2__["Truck"])
    ], TruckDetailComponent.prototype, "truck", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], TruckDetailComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], TruckDetailComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], TruckDetailComponent.prototype, "deleteHandler", void 0);
    TruckDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-detail',
            template: __webpack_require__(/*! ./truck-detail.component.html */ "./src/app/trucks/truck-detail/truck-detail.component.html"),
            styles: [__webpack_require__(/*! ./truck-detail.component.css */ "./src/app/trucks/truck-detail/truck-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], TruckDetailComponent);
    return TruckDetailComponent;
}());



/***/ }),

/***/ "./src/app/trucks/truck-list/truck-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/trucks/truck-list/truck-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trucks/truck-list/truck-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/trucks/truck-list/truck-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>trucks</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let truck of trucks\"\n        (click)=\"selectTruck(truck)\"\n        [class.active]=\"truck === selectedTruck\">\n        {{truck.name}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewTruck()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <app-truck-detail\n      [truck]=\"selectedTruck\"\n      [createHandler]=\"addTruck\"\n      [updateHandler]=\"updateTruck\"\n      [deleteHandler]=\"deleteTruck\">\n    </app-truck-detail>\n  </div>\n</div>\n\n    \n    <!-- <div class=\"container\">\n        <div class=\"card-deck\"> -->\n          <!-- ngonit for gettrucks() -->\n            <!-- <div *ngFor=\"let truck of trucks\" class=\"row \">\n              <div class=\"col-sm-4 justify-content-center\">\n                <div class=\"card p-3 truck-card\">\n                  <a routerLink=\"{{cuisine.name}}/{{truck.id}}\">\n                  <img class=\"card-img-top truck-image\" src=\"{{truck.imgLink}}\" alt=\"{{truck.name}}\">\n                  <div class=\"card-body p-0\">\n                    <p class=\"text-center font-weight-bold\">{{truck.name}}\n                      <br>\n                      {{truck.price}}\n                      <br>\n                      <a href=\"{{truck.menuLink}}\">Website</a>\n                    </p>\n                  </div>\n          \n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> -->"

/***/ }),

/***/ "./src/app/trucks/truck-list/truck-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/trucks/truck-list/truck-list.component.ts ***!
  \***********************************************************/
/*! exports provided: TruckListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckListComponent", function() { return TruckListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_trucks_truckSearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/trucks/truckSearch.service */ "./src/app/trucks/truckSearch.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TruckDetailComponent } from '../trucks/truck-detail/truck-detail.component';
var TruckListComponent = /** @class */ (function () {
    function TruckListComponent(route, router, commonService) {
        this.route = route;
        this.router = router;
        this.commonService = commonService;
    }
    TruckListComponent.prototype.getTrucks = function () {
        var _this = this;
        this.commonService.getTrucks().subscribe(function (trucks) { return _this.truck = trucks; });
    };
    TruckListComponent.prototype.ngOnInit = function () {
        this.getTrucks();
        // this.commonService.getTrucks(); 
        // .then((trucks: Truck[]) => {
        //   this.trucks = trucks.map((truck) => {
        //     if (!truck.location) {
        //       truck.location = {
        //         latitude: 39.7392,
        //         longitude: 104.9903
        //       }
        //     }
        //return Truck;
        //};
        // });
    };
    ;
    // private getIndexOfTruck = (truckId: String) => {
    //   return this.trucks.findIndex((truck) => {
    //     return truck._id === truckId;
    //   });
    // }
    TruckListComponent.prototype.selectTruck = function (truck) {
        this.selectedTruck = truck;
    };
    TruckListComponent.prototype.createNewtruck = function () {
        var truck = {
            name: '',
            imgLink: '',
            cuisine: '',
            description: '',
            menuLink: '',
            price: '',
            location: {
                latitude: 0,
                longitude: 0
            }
        };
        // By default, a newly-created truck will have the selected state.
        this.selectTruck(truck);
    };
    TruckListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-list',
            template: __webpack_require__(/*! ./truck-list.component.html */ "./src/app/trucks/truck-list/truck-list.component.html"),
            styles: [__webpack_require__(/*! ./truck-list.component.css */ "./src/app/trucks/truck-list/truck-list.component.css")],
            providers: [src_app_trucks_truckSearch_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], TruckListComponent);
    return TruckListComponent;
}());



/***/ }),

/***/ "./src/app/trucks/truck.ts":
/*!*********************************!*\
  !*** ./src/app/trucks/truck.ts ***!
  \*********************************/
/*! exports provided: Truck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Truck", function() { return Truck; });
var Truck = /** @class */ (function () {
    function Truck() {
    }
    return Truck;
}());

;


/***/ })

}]);
//# sourceMappingURL=consumer-consumer-module.js.map