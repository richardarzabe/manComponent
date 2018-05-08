webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicProyects\manComponent\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\ionicProyects\manComponent\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.valueUpdated = function ($event) {
        console.log('AboutPage valueUpdated:', $event);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\ionicProyects\manComponent\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>asdasd</ion-item>\n    <ion-item>asdasd</ion-item><ion-item>asdasd</ion-item><ion-item>asdasd</ion-item>\n    \n    <ion-item>\n      <body-map \n        (valueUpdate)="valueUpdated($event)">     \n      </body-map>\n      \n    </ion-item>\n    <ion-item>asdasd</ion-item>\n    <ion-item>asdasd</ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicProyects\manComponent\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\ionicProyects\manComponent\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicProyects\manComponent\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionicProyects\manComponent\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    Home Page\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicProyects\manComponent\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_body_map_body_map__ = __webpack_require__(272);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_body_map_body_map__["a" /* BodyMapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicProyects\manComponent\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\ionicProyects\manComponent\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BodyMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BodyMapComponent = /** @class */ (function () {
    function BodyMapComponent() {
        this.lista = [
            {
                title: "Head",
                id: 113,
                dbId: "80222a42-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Frontal",
                id: 72,
                dbId: "80cf1136-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Temporal",
                id: 71,
                dbId: "81c1444a-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Face",
                id: 70,
                dbId: "820d4137-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Jaw",
                id: 73,
                dbId: "82693aa1-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Eye Left",
                id: 792,
                dbId: "83115b28-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Eye Right",
                id: 791,
                dbId: "82c43d55-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Ear Left",
                id: 782,
                dbId: "848dd66c-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Ear Right",
                id: 781,
                dbId: "84301604-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Nose",
                id: 75,
                dbId: "856dbcc3-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Lip",
                id: 74,
                dbId: "edcdf938-5afa-11e4-a87d-842b2b4bbc99"
            },
            {
                title: "Cheek",
                id: 772,
                dbId: "85d1db28-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Cheek",
                id: 771,
                dbId: "85d1db28-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Gum",
                id: 76,
                dbId: "862508f4-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Neck",
                id: 114,
                dbId: "86df53eb-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "chest",
                id: 106,
                dbId: "cc5a4585-eaef-11e5-9a7d-3052cb650342"
            },
            {
                title: "Arm Right",
                id: 105,
                dbId: "87705a00-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Elbow Right",
                id: 110,
                dbId: "87dc4c57-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Hand Right",
                id: 112,
                dbId: "4fdf8cf8-41ee-11e5-b94a-842b2b4bbc99"
            },
            {
                title: "Palm Right",
                id: 60,
                dbId: "586fb08f-41ee-11e5-b94a-842b2b4bbc99"
            },
            {
                title: "1st Digit",
                id: 61,
                dbId: "89274037-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "2st Digit",
                id: 62,
                dbId: "8990090c-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "3st Digit",
                id: 63,
                dbId: "89fe37cf-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "4st Digit",
                id: 64,
                dbId: "8a76b071-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "5st Digit",
                id: 65,
                dbId: "8b579a9e-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Arm Left",
                id: 104,
                dbId: "8bc5c409-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Elbow Left",
                id: 109,
                dbId: "8c6aa617-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Hand Left",
                id: 111,
                dbId: "042eb2d5-41d7-11e5-b94a-842b2b4bbc99"
            },
            {
                title: "Palm Left",
                id: 50,
                dbId: "0d99bf0c-41d7-11e5-b94a-842b2b4bbc99"
            },
            {
                title: "1st Digit",
                id: 51,
                dbId: "8e15e1e3-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "2st Digit",
                id: 52,
                dbId: "8e7a3cc1-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "3st Digit",
                id: 53,
                dbId: "8ee36678-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "4st Digit",
                id: 54,
                dbId: "8f4ddf8c-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "5st Digit",
                id: 55,
                dbId: "8fba5726-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Abdomen",
                id: 103,
                dbId: "9140e45a-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Groin",
                id: 100,
                dbId: "97365df6-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Thigh Left",
                id: 102,
                dbId: "9cbc8501-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Knee Left",
                id: 115,
                dbId: "9bb56f6e-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Thigh Right",
                id: 101,
                dbId: "9cbc8501-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Knee Right",
                id: 116,
                dbId: "9bb56f6e-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Lower Left Leg",
                id: 107,
                dbId: "a151ea8c-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Foot Left",
                id: 30,
                dbId: "9fa0ee3e-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "1st Digit",
                id: 31,
                dbId: "a336b195-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "2st Digit",
                id: 32,
                dbId: "a39de610-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "3st Digit",
                id: 33,
                dbId: "a3fb099d-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "4st Digit",
                id: 34,
                dbId: "a4629e59-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "5st Digit",
                id: 35,
                dbId: "a4d2b732-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Lower Right Leg",
                id: 108,
                dbId: "9c49072f-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Foot Right",
                id: 40,
                dbId: "9a393ee0-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "1st Digit",
                id: 41,
                dbId: "9d91fd73-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "2st Digit",
                id: 42,
                dbId: "9dfc99a0-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "3st Digit",
                id: 43,
                dbId: "9e7a3395-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "4st Digit",
                id: 44,
                dbId: "9edc78c8-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "5st Digit",
                id: 45,
                dbId: "9f417c46-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Cervical",
                id: 216,
                dbId: "671b1001-d71f-11e4-b770-842b2b4bbc99"
            },
            {
                title: "Thoracic",
                id: 205,
                dbId: "97d728f3-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Lumbar",
                id: 215,
                dbId: "985a9174-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Buttocks",
                id: 200,
                dbId: "99cc2170-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Arm Right",
                id: 204,
                dbId: "87705a00-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Elbow Right",
                id: 209,
                dbId: "87dc4c57-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Hand Right",
                id: 211,
                dbId: "4fdf8cf8-41ee-11e5-b94a-842b2b4bbc99"
            },
            {
                title: "Arm Left",
                id: 203,
                dbId: "8bc5c409-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Elbow Left",
                id: 208,
                dbId: "8c6aa617-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Hand Left",
                id: 210,
                dbId: "042eb2d5-41d7-11e5-b94a-842b2b4bbc99"
            },
            {
                title: "Thigh Left",
                id: 201,
                dbId: "9cbc8501-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Thigh Right",
                id: 202,
                dbId: "9cbc8501-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Foot Right",
                id: 207,
                dbId: "9a393ee0-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Foot Left",
                id: 206,
                dbId: "9fa0ee3e-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Occipital",
                id: 212,
                dbId: "816080c6-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Knee Left",
                id: 213,
                dbId: "9bb56f6e-03d9-11e0-8458-b228b30b1b68"
            },
            {
                title: "Knee Right",
                id: 214,
                dbId: "9bb56f6e-03d9-11e0-8458-b228b30b1b68"
            },
        ];
        this.valueUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('Hello BodyMapComponent Component');
        this.text = 'Hello World';
    }
    BodyMapComponent.prototype.valueUpdated = function ($event) {
        // console.log('AboutPage valueUpdated:', $event);
    };
    BodyMapComponent.prototype.CommandNoImageClass = function (n, m) {
        console.log(n);
        var element = document.getElementById("image" + n);
        var component = document.getElementById("componentBody" + n);
        //console.log(element);
        this.ClearAll(n, m);
        if (element.className.indexOf("noImage") > -1) {
            //console.log('estoy');
            //this.GetIdComponent(element);
            this.GetIdComponent(n);
            element.className = element.className.replace(/\bnoImage\b/g, "").trim();
            if (this.IsInPage(component)) {
                component.className = component.className.replace(/\bhiddenImage\b/g, "").trim();
                //console.log('Entro aqui en IsInPage');//Agregado por Richard
            }
            document.getElementById("changeBodyPart").value = n;
        }
        else {
            //console.log('No entro');
            element.className += element.className ? ' noImage' : 'noImage';
            document.getElementById("changeBodyPart").value = "0";
        }
    };
    BodyMapComponent.prototype.IsInPage = function (node) {
        return (node === document.body) ? false : document.body.contains(node);
    };
    BodyMapComponent.prototype.ClearAll = function (n, m) {
        var noComponents;
        if (m === 2) {
            noComponents = ["200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216"];
        }
        else if (m === 7) {
            noComponents = ["70", "71", "72", "73", "74", "75", "76", "771", "772", "781", "782", "791", "792"];
        }
        else if (m === 5) {
            noComponents = ["50", "51", "52", "53", "54", "55"];
        }
        else if (m === 6) {
            noComponents = ["60", "61", "62", "63", "64", "65"];
        }
        else if (m === 3) {
            noComponents = ["30", "31", "32", "33", "34", "35"];
        }
        else if (m === 4) {
            noComponents = ["40", "41", "42", "43", "44", "45"];
        }
        else if (m === 1) {
            noComponents = ["100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116"];
        }
        for (var i = 0; i < noComponents.length; i++) {
            if (n != noComponents[i]) {
                var element = document.getElementById("image" + noComponents[i]);
                //console.log(element.className.indexOf("noImage"));
                if (element.className.indexOf("noImage") <= -1) {
                    element.className += element.className ? ' noImage' : 'noImage';
                }
            }
        }
    };
    BodyMapComponent.prototype.ChangeToBlue = function () {
        var n = document.getElementById("changeBodyPart").value;
        console.log(n); //agregado por Richard
        if (n != '0') {
            var element = document.getElementById("image" + n);
            //esto es una prueba hecho por Richard
            console.log(element.className.indexOf("Blue"));
            //termina la prueba
            if (element.className.indexOf("Blue") <= -1) {
                element.className += (element.className ? ' ' : '') + (element.className + 'Blue');
                console.log('Entro aqui en blue'); //Agregado por Richard
                console.log(element.className); //Agregado por Richard
            }
        }
    };
    BodyMapComponent.prototype.ChangeToRed = function () {
        var n = document.getElementById("changeBodyPart").value;
        console.log(n); //agregado por Richard
        if (n != '0') {
            var element = document.getElementById("image" + n);
            //esto es una prueba hecho por Richard
            console.log(element.className.indexOf("Blue"));
            //termina la prueba
            if (element.className.indexOf("Blue") > -1) {
                var elClass = element.className.split(" ");
                element.className = elClass[0];
                console.log('Entro aqui en red'); //Agregado por Richard
                console.log(element.className); //Agregado por Richard
            }
        }
    };
    BodyMapComponent.prototype.GoBack = function (n) {
        var element = document.getElementById("componentBody" + n);
        element.className += element.className ? ' hiddenImage' : 'hiddenImage';
    };
    BodyMapComponent.prototype.GoToBackBody = function () {
        var component = document.getElementById("componentBody0");
        component.className = component.className.replace(/\bhiddenImage\b/g, "").trim();
    };
    BodyMapComponent.prototype.GetIdComponent = function (n) {
        //console.log(element.id);
        //this.showAlert(element.id);
        for (var _i = 0, _a = this.lista; _i < _a.length; _i++) {
            var item = _a[_i];
            if (n === item.id) {
                // console.log(item.title+' '+item.dbId);
                this.valueUpdate.emit(item);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]) === "function" && _a || Object)
    ], BodyMapComponent.prototype, "valueUpdate", void 0);
    BodyMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'body-map',template:/*ion-inline-start:"D:\ionicProyects\manComponent\src\components\body-map\body-map.html"*/'<div class="col-lg-6 col-md-6" style="position: relative; width: 350px; height: 450px;">\n    <div class="col-lg-6 col-md-6" style="position: absolute; left: 0px; top: 0px;">\n        <!--man-front\n          (valueUpdate)="valueUpdated($event)">\n        </man-front-->\n        <div style="width: 600px;">\n          <div class="divComponent">\n            <div class="counter">\n              <div class="BodyFront" id="bodyFront"></div>\n              <div class="GroinFrontColor noImage" id="image100"></div>\n              <div class="GroinFrontColor1" (click)="CommandNoImageClass(100,1);"></div>\n              <div class="ThighRightFrontColor noImage" id="image101"></div>\n              <div class="ThighRightFrontColor1" (click)="CommandNoImageClass(101,1);"></div>\n              <div class="ThighLeftFrontColor noImage" id="image102"></div>\n              <div class="ThighLeftFrontColor1" (click)="CommandNoImageClass(102,1);"></div>\n              <div class="AbdomenFrontColor noImage" id="image103"></div>\n              <div class="AbdomenFrontColor1" (click)="CommandNoImageClass(103,1);"></div>\n              <div class="ArmLeftFrontColor noImage" id="image104"></div>\n              <div class="ArmLeftFrontColor1" (click)="CommandNoImageClass(104,1);"></div>\n              <div class="ArmRightFrontColor noImage" id="image105"></div>\n              <div class="ArmRightFrontColor1" (click)="CommandNoImageClass(105,1);"></div>\n              <div class="ChestFrontColor noImage" id="image106"></div>\n              <div class="ChestFrontColor1" (click)="CommandNoImageClass(106,1);"></div>\n              <div class="FootLeftFrontColor noImage" id="image107"></div>\n              <div class="FootLeftFrontColor1" (click)="CommandNoImageClass(107,1);"></div>\n              <div class="FootRightFrontColor noImage" id="image108"></div>\n              <div class="FootRightFrontColor1" (click)="CommandNoImageClass(108,1);"></div>\n              <div class="ForearmLeftFrontColor noImage" id="image109"></div>\n              <div class="ForearmLeftFrontColor1" (click)="CommandNoImageClass(109,1);"></div>\n              <div class="ForearmRightFrontColor noImage" id="image110"></div>\n              <div class="ForearmRightFrontColor1" (click)="CommandNoImageClass(110,1);"></div>\n              <div class="HandLeftFrontColor noImage" id="image111"></div>\n              <div class="HandLeftFrontColor1" (click)="CommandNoImageClass(111,1);"></div>\n              <div class="HandRightFrontColor noImage" id="image112"></div>\n              <div class="HandRightFrontColor1" (click)="CommandNoImageClass(112,1);"></div>\n              <div class="HeadFrontColor noImage" id="image113"></div>\n              <div class="HeadFrontColor1" (click)="CommandNoImageClass(113,1);"></div>\n              <div class="NeckFrontColor noImage" id="image114"></div>\n              <div class="NeckFrontColor1" (click)="CommandNoImageClass(114,1);"></div>\n              <div class="LegbobLeftFrontColor noImage" id="image115"></div>\n              <div class="LegbobLeftFrontColor1" (click)="CommandNoImageClass(115,1);"></div>\n              <div class="LegbobRightFrontColor noImage" id="image116"></div>\n              <div class="LegbobRightFrontColor1" (click)="CommandNoImageClass(116,1);"></div>\n              <input type="hidden" id="changeBodyPart" value="0"/>\n            </div>\n        \n            <button ion-button (click)="GoToBackBody()" id="boton"> Go To Back of the Body</button>\n          </div>\n          <div class="divButtons">\n            <div style="height: 160px;"></div>\n            <div><button ion-button (click)="ChangeToBlue()" id="boton">Complete</button></div>\n            <div><button ion-button (click)="ChangeToRed()" id="boton">Incomplete</button></div>\n          </div>\n        </div>\n    </div>\n<div id="chargeBodyPart" class="col-lg-6 col-md-6" style="position: absolute; left: 0px; top: 0px; z-index: 1000; background-color: white;">\n    <div id="componentBody0" class="hiddenImage">\n      <div style="width: 600px;">\n        <div class="divComponent">\n          <div class="counter">\n            <div class="BodyBehind" id="bodyBehind"></div>\n            <div class="ButtocksBehindColor noImage" id="image200"></div>\n            <div class="ButtocksBehindColor1" (click)="CommandNoImageClass(200,2);"></div>\n            <div class="ThighLeftBehindColor noImage" id="image201"></div>\n            <div class="ThighLeftBehindColor1" (click)="CommandNoImageClass(201,2);"></div>\n            <div class="ThighRightBehindColor noImage" id="image202"></div>\n            <div class="ThighRightBehindColor1" (click)="CommandNoImageClass(202,2);"></div>\n            <div class="ArmLeftBehindColor noImage" id="image203"></div>\n            <div class="ArmLeftBehindColor1" (click)="CommandNoImageClass(203,2);"></div>\n            <div class="ArmRightBehindColor noImage" id="image204"></div>\n            <div class="ArmRightBehindColor1" (click)="CommandNoImageClass(204,2);"></div>\n            <div class="ColumnBehindColor noImage" id="image205"></div>\n            <div class="ColumnBehindColor1" (click)="CommandNoImageClass(205,2);"></div>\n            <div class="FootLeftBehindColor noImage" id="image206"></div>\n            <div class="FootLeftBehindColor1" (click)="CommandNoImageClass(206,2);"></div>\n            <div class="FootRightBehindColor noImage" id="image207"></div>\n            <div class="FootRightBehindColor1" (click)="CommandNoImageClass(207,2);"></div>\n            <div class="ForearmLeftBehindColor noImage" id="image208"></div>\n            <div class="ForearmLeftBehindColor1" (click)="CommandNoImageClass(208,2);"></div>\n            <div class="ForearmRightBehindColor noImage" id="image209"></div>\n            <div class="ForearmRightBehindColor1" (click)="CommandNoImageClass(209,2);"></div>\n            <div class="HandLeftBehindColor noImage" id="image210"></div>\n            <div class="HandLeftBehindColor1" (click)="CommandNoImageClass(210,2);"></div>\n            <div class="HandRightBehindColor noImage" id="image211"></div>\n            <div class="HandRightBehindColor1" (click)="CommandNoImageClass(211,2);"></div>\n            <div class="HeadBehindColor noImage" id="image212"></div>\n            <div class="HeadBehindColor1" (click)="CommandNoImageClass(212,2);"></div>\n            <div class="LegbobLeftBehindColor noImage" id="image213"></div>\n            <div class="LegbobLeftBehindColor1" (click)="CommandNoImageClass(213,2);"></div>\n            <div class="LegbobRightBehindColor noImage" id="image214"></div>\n            <div class="LegbobRightBehindColor1" (click)="CommandNoImageClass(214,2);"></div>\n            <div class="LowerbackBehindColor noImage" id="image215"></div>\n            <div class="LowerbackBehindColor1" (click)="CommandNoImageClass(215,2);"></div>\n            <div class="ShouldersBehindColor noImage" id="image216"></div>\n            <div class="ShouldersBehindColor1" (click)="CommandNoImageClass(216,2);"></div>\n            <input type="hidden" id="changeBodyBehindPart" value="0"/>\n          </div>\n      \n          <button ion-button (click)="GoBack(0)" id="boton"> Go To Front Body</button>\n        </div>  \n        <div class="divButtons">\n          <div style="height: 160px;"></div>\n          <div><button ion-button (click)="ChangeToBlue()" id="boton">Complete</button></div>\n          <div><button ion-button (click)="ChangeToRed()" id="boton">Incomplete</button></div>\n        </div> \n      </div>\n      \n    </div>\n    <div id="componentBody113" class="hiddenImage">\n      <div style="width: 600px;">\n        <div class="divComponent">\n          <div class="counter">\n            <div class="Torso" id="Torso"></div>\n            <div class="FaceColor noImage" id="image70"></div>\n            <div class="FaceColor1" (click)="CommandNoImageClass(70,7);"></div>\n            <div class="SkullColor noImage" id="image71"></div>\n            <div class="SkullColor1" (click)="CommandNoImageClass(71,7);"></div>\n            <div class="ForeheadColor noImage" id="image72"></div>\n            <div class="ForeheadColor1" (click)="CommandNoImageClass(72,7);"></div>\n            <div class="JawColor noImage" id="image73"></div>\n            <div class="JawColor1" (click)="CommandNoImageClass(73,7);"></div>\n            <div class="LipsColor noImage" id="image74"></div>\n            <div class="LipsColor1" (click)="CommandNoImageClass(74,7);"></div>\n            <div class="NoseColor noImage" id="image75"></div>\n            <div class="NoseColor1" (click)="CommandNoImageClass(75,7);"></div>\n            <div class="TongueColor noImage" id="image76"></div>\n            <div class="TongueColor1" (click)="CommandNoImageClass(76,7);"></div>\n            <div class="CheeksRightColor noImage" id="image771"></div>\n            <div class="CheeksColor1" (click)="CommandNoImageClass(771,7);"></div>\n            <div class="CheeksLeftColor noImage" id="image772"></div>\n            <div class="CheeksColor2" (click)="CommandNoImageClass(772,7);"></div>\n            <div class="EarsRightColor noImage" id="image781"></div>\n            <div class="EarsColor1" (click)="CommandNoImageClass(781,7);"></div>\n            <div class="EarsLeftColor noImage" id="image782"></div>\n            <div class="EarsColor2" (click)="CommandNoImageClass(782,7);"></div>\n            <div class="EyesRightColor noImage" id="image791"></div>\n            <div class="EyesColor1" (click)="CommandNoImageClass(791,7);"></div>\n            <div class="EyesLeftColor noImage" id="image792"></div>\n            <div class="EyesColor2" (click)="CommandNoImageClass(792,7);"></div>\n            <input type="hidden" id="changeTorsoPart" value="0"/>\n          </div>\n          \n          <button ion-button (click)="GoBack(113)" id="boton"> Go Back</button>\n        </div>  \n        <div class="divButtons">\n          <div style="height: 160px;"></div>\n          <div><button ion-button (click)="ChangeToBlue()" id="boton">Complete</button></div>\n          <div><button ion-button (click)="ChangeToRed()" id="boton">Incomplete</button></div>\n        </div> \n      </div>\n    </div>\n    <div id="componentBody111" class="hiddenImage">\n      <div style="width: 600px;">\n        <div class="divComponent">\n          <div class="counter">\n            <div class="HandLeft" id="handLeft"></div>\n            <div class="BackHandLeftColor noImage" id="image50"></div>\n            <div class="BackHandLeftColor1" (click)="CommandNoImageClass(50,5);"></div>\n            <div class="ThumbHandLeftColor noImage" id="image51"></div>\n            <div class="ThumbHandLeftColor1" (click)="CommandNoImageClass(51,5);"></div>\n            <div class="IndexHandLeftColor noImage" id="image52"></div>\n            <div class="IndexHandLeftColor1" (click)="CommandNoImageClass(52,5);"></div>\n            <div class="MiddleHandLeftColor noImage" id="image53"></div>\n            <div class="MiddleHandLeftColor1" (click)="CommandNoImageClass(53,5);"></div>\n            <div class="AnnularHandLeftColor noImage" id="image54"></div>\n            <div class="AnnularHandLeftColor1" (click)="CommandNoImageClass(54,5);"></div>\n            <div class="LittleHandLeftColor noImage" id="image55"></div>\n            <div class="LittleHandLeftColor1" (click)="CommandNoImageClass(55,5);"></div>\n            <input type="hidden" id="changeHandLeftPart" value="0"/>\n          </div>\n        \n          <button ion-button (click)="GoBack(111)" id="boton"> Go Back</button>\n        </div>  \n        <div class="divButtons">\n          <div style="height: 160px;"></div>\n          <div><button ion-button (click)="ChangeToBlue()" id="boton">Complete</button></div>\n          <div><button ion-button (click)="ChangeToRed()" id="boton">Incomplete</button></div>\n        </div> \n      </div>\n    </div>\n\n    <div id="componentBody112" class="hiddenImage">\n      <div style="width: 600px;">\n        <div class="divComponent">\n          <div class="counter">\n            <div class="HandRight" id="handRight"></div>\n            <div class="BackHandRightColor noImage" id="image60"></div>\n            <div class="BackHandRightColor1" (click)="CommandNoImageClass(60,6);"></div>\n            <div class="ThumbHandRightColor noImage" id="image61"></div>\n            <div class="ThumbHandRightColor1" (click)="CommandNoImageClass(61,6);"></div>\n            <div class="IndexHandRightColor noImage" id="image62"></div>\n            <div class="IndexHandRightColor1" (click)="CommandNoImageClass(62,6);"></div>\n            <div class="MiddleHandRightColor noImage" id="image63"></div>\n            <div class="MiddleHandRightColor1" (click)="CommandNoImageClass(63,6);"></div>\n            <div class="AnnularHandRightColor noImage" id="image64"></div>\n            <div class="AnnularHandRightColor1" (click)="CommandNoImageClass(64,6);"></div>\n            <div class="LittleHandRightColor noImage" id="image65"></div>\n            <div class="LittleHandRightColor1" (click)="CommandNoImageClass(65,6);"></div>\n            <input type="hidden" id="changeHandRightPart" value="0"/>\n          </div>\n        \n          <button ion-button (click)="GoBack(112)" id="boton"> Go Back</button>\n        </div>  \n        <div class="divButtons">\n          <div style="height: 160px;"></div>\n          <div><button ion-button (click)="ChangeToBlue()" id="boton">Complete</button></div>\n          <div><button ion-button (click)="ChangeToRed()" id="boton">Incomplete</button></div>\n        </div>\n      </div>\n    </div>\n\n    <div id="componentBody107" class="hiddenImage">\n      <div style="width: 600px;">\n        <div class="divComponent">\n          <div class="counter">\n            <div class="FootLeft" id="footLeft"></div>\n            <div class="BackFootLeftColor noImage" id="image30"></div>\n            <div class="BackFootLeftColor1" (click)="CommandNoImageClass(30,3);"></div>\n            <div class="FattoeFootLeftColor noImage" id="image31"></div>\n            <div class="FattoeFootLeftColor1" (click)="CommandNoImageClass(31,3);"></div>\n            <div class="FirsttoeFootLeftColor noImage" id="image32"></div>\n            <div class="FirsttoeFootLeftColor1" (click)="CommandNoImageClass(32,3);"></div>\n            <div class="SecondtoeFootLeftColor noImage" id="image33"></div>\n            <div class="SecondtoeFootLeftColor1" (click)="CommandNoImageClass(33,3);"></div>\n            <div class="ThirdtoeFootLeftColor noImage" id="image34"></div>\n            <div class="ThirdtoeFootLeftColor1" (click)="CommandNoImageClass(34,3);"></div>\n            <div class="FourthtoeFootLeftColor noImage" id="image35"></div>\n            <div class="FourthtoeFootLeftColor1" (click)="CommandNoImageClass(35,3);"></div>\n            <input type="hidden" id="changeFootLeftPart" value="0"/>\n          </div>\n        \n          <button ion-button (click)="GoBack(107)" id="boton"> Go Back</button>\n        </div>  \n        <div class="divButtons">\n          <div style="height: 160px;"></div>\n          <div><button ion-button (click)="ChangeToBlue()" id="boton">Complete</button></div>\n          <div><button ion-button (click)="ChangeToRed()" id="boton">Incomplete</button></div>\n        </div> \n      </div>\n    </div>\n\n    <div id="componentBody108" class="hiddenImage">\n      <div style="width: 600px;">\n        <div class="divComponent">\n          <div class="counter">\n            <div class="FootRight" id="footRight"></div>\n            <div class="BackFootRightColor noImage" id="image40"></div>\n            <div class="BackFootRightColor1" (click)="CommandNoImageClass(40,4);"></div>\n            <div class="FattoeFootRightColor noImage" id="image41"></div>\n            <div class="FattoeFootRightColor1" (click)="CommandNoImageClass(41,4);"></div>\n            <div class="FirsttoeFootRightColor noImage" id="image42"></div>\n            <div class="FirsttoeFootRightColor1" (click)="CommandNoImageClass(42,4);"></div>\n            <div class="SecondtoeFootRightColor noImage" id="image43"></div>\n            <div class="SecondtoeFootRightColor1" (click)="CommandNoImageClass(43,4);"></div>\n            <div class="ThirdtoeFootRightColor noImage" id="image44"></div>\n            <div class="ThirdtoeFootRightColor1" (click)="CommandNoImageClass(44,4);"></div>\n            <div class="FourthtoeFootRightColor noImage" id="image45"></div>\n            <div class="FourthtoeFootRightColor1" (click)="CommandNoImageClass(45,4);"></div>\n            <input type="hidden" id="changeFootRightPart" value="0"/>\n          </div>\n        \n          <button ion-button (click)="GoBack(108)" id="boton"> Go Back</button>\n        </div>  \n        <div class="divButtons">\n          <div style="height: 160px;"></div>\n          <div><button ion-button (click)="ChangeToBlue()" id="boton">Complete</button></div>\n          <div><button ion-button (click)="ChangeToRed()" id="boton">Incomplete</button></div>\n        </div> \n      </div>\n    </div>\n\n  </div>\n  \n\n\n</div>'/*ion-inline-end:"D:\ionicProyects\manComponent\src\components\body-map\body-map.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BodyMapComponent);
    return BodyMapComponent;
    var _a;
}());

//# sourceMappingURL=body-map.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map