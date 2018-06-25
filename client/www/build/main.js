webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ActivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var base_url = "http://localhost:8080/activity";
var ActivityServiceProvider = /** @class */ (function () {
    function ActivityServiceProvider(http) {
        this.http = http;
    }
    ActivityServiceProvider.prototype.postActivity = function (currentActivity, userId, date) {
        this.http.post(base_url, {
            userId: userId,
            date: date,
            activityTitle: currentActivity.activityTitle,
            startTime: currentActivity.startTime,
            endTime: currentActivity.endTime,
            description: currentActivity.description
        }).subscribe();
    };
    ActivityServiceProvider.prototype.getActivities = function () {
        return this.http.get(base_url);
    };
    ActivityServiceProvider.prototype.deleteActivity = function (activity) {
        return this.http.delete(base_url + "/" + activity._id);
    };
    ActivityServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ActivityServiceProvider);
    return ActivityServiceProvider;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overview_overview__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_track__ = __webpack_require__(200);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__track_track__["a" /* trackPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__overview_overview__["a" /* overviewPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="alarm"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="trending-up"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return overviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_service_activity_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// OVERVIEW PAGE
// uses ActivityServiceProvider to fetch all 
// of the activities associated with a certain user
// from overview, user is able to delete an activity
var overviewPage = /** @class */ (function () {
    function overviewPage(navCtrl, alertCtrl, activityServiceProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.activityServiceProvider = activityServiceProvider;
        this.userId = "Test User"; //ideally, userId is fetched from
        // an authentication service
        this.refreshActivities();
    }
    /*
  logout(){
    
    Auth.signOut()
    .then(data => {
      console.log(data);
      this.navCtrl.setRoot(LoginPage);
    })
    .catch(err => console.log(err));
  
  }
  */
    overviewPage.prototype.refreshActivities = function () {
        var _this = this;
        this.activityServiceProvider.getActivities()
            .subscribe(function (data) {
            _this.Activities = data.filter(function (activity) { return activity.userId === _this.userId; });
        });
        // subscribe to method, trap activities in callback, filter activities by userId
        // only the Activities associated with this userId will be considered
    };
    // when user clicks on an activity, an alert shows
    // with more information about the activity
    // from the alert, the user can delete said activity
    overviewPage.prototype.showMore = function (activity) {
        var _this = this;
        if (activity.description == null) {
            activity.description = '';
        }
        var alert = this.alertCtrl.create({
            title: activity.activityTitle,
            message: activity.startTime + ' - ' + activity.endTime + '<br/>' + activity.description,
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        // Delete item from Activities list using service provider
                        _this.Activities = _this.Activities.filter(function (Activity) { return Activity !== activity; });
                        _this.activityServiceProvider.deleteActivity(activity).subscribe();
                        _this.refreshActivities();
                    }
                },
                {
                    text: 'Close',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    overviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-overview',template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/overview/overview.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Overview\n    </ion-title>\n    <!--\n    <button ion-button icon-only float-right (click)= "logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item (click)="showMore(activity)" [color]="even? \'primary\' : \'secondary\'" *ngFor="let activity of Activities;" >\n      <label float-left>{{activity.date}} at {{activity.startTime}} - {{activity.endTime}}</label>\n      <label float-right>{{activity.activityTitle}}</label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/overview/overview.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */]) === "function" && _c || Object])
    ], overviewPage);
    return overviewPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ActivityModel__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_activity_service_activity_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// TRACK PAGE
// user can add activities from this page
// error checking implemented to ensure
// correct input of activity fields
// uses ActivityServiceProvider to post
// activities and to fetch activities
// associated with the current date
// and current user
// users can delete an activity
var trackPage = /** @class */ (function () {
    function trackPage(alertCtrl, navCtrl, toastCtrl, activityServiceProvider) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.activityServiceProvider = activityServiceProvider;
        this.populatePageVars();
        this.userId = "Test User";
        this.refreshPage();
    }
    trackPage.prototype.refreshPage = function () {
        var _this = this;
        this.myTime = new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
        this.activityServiceProvider.getActivities()
            .subscribe(function (data) {
            // only activities for this user and this current date
            _this.Activities = data.filter(function (activity) { return activity.userId === _this.userId; })
                .filter(function (activity) { return activity.date === _this.myDate; });
            // all users activities -> this.Activities = data.filter(activity => activity.userId === this.userId)
        });
    };
    trackPage.prototype.populatePageVars = function () {
        this.myDate = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        this.myTime = new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
        this.currentActivity = new __WEBPACK_IMPORTED_MODULE_2__models_ActivityModel__["a" /* ActivityModel */]();
    };
    trackPage.prototype.addActivity = function () {
        if (this.activityTitle == null) {
            this.showError('Activity must have a title.');
        }
        else if (this.myStartTime == null || this.myEndTime == null) {
            this.showError('Activity must have a start and end time.');
        }
        else if (this.myStartTime > this.myEndTime) {
            this.showError('Start time must be earlier than end time.');
        }
        else {
            this.currentActivity = {
                userId: this.userId,
                date: this.myDate,
                activityTitle: this.activityTitle,
                startTime: this.myStartTime.toString(),
                endTime: this.myEndTime.toString(),
                description: this.description,
            };
            this.Activities.push(this.currentActivity);
            this.Activities.sort(function (a, b) {
                if (a.startTime < b.startTime)
                    return -1;
                else if (a.startTime == b.startTime)
                    return 0;
                else
                    return 1;
            });
            this.activityServiceProvider.postActivity(this.currentActivity, this.userId, this.myDate);
            this.refreshPage();
            this.currentActivity = new __WEBPACK_IMPORTED_MODULE_2__models_ActivityModel__["a" /* ActivityModel */]();
            this.clearForm();
        }
    };
    trackPage.prototype.clearForm = function () {
        this.activityTitle = null;
        this.myStartTime = null;
        this.myEndTime = null;
        this.description = null;
    };
    trackPage.prototype.showMore = function (item) {
        var _this = this;
        if (item.description == null) {
            item.description = '';
        }
        var alert = this.alertCtrl.create({
            title: item.activityTitle,
            message: item.startTime + ' - ' + item.endTime + '<br/>' + item.description,
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        // Delete item from Activities list, might make sense for this to be move elsewhere
                        _this.Activities = _this.Activities.filter(function (Activity) { return Activity !== item; });
                        _this.activityServiceProvider.deleteActivity(item).subscribe();
                    }
                },
                {
                    text: 'Close',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    trackPage.prototype.showError = function (errorMessage) {
        var toast = this.toastCtrl.create({
            message: errorMessage,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    trackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-track',template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/track/track.html"*/'<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title float-left>\n      {{myDate}} {{myTime}}\n    </ion-title>\n    <!--\n    <button ion-button icon-only float-right (click)= "logout()">\n        <ion-icon name="log-out"></ion-icon>\n    </button>\n    -->\n\n  </ion-navbar>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Activity" [(ngModel)]="activityTitle"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-datetime displayFormat="HH:mm" placeholder="Start time" [(ngModel)]="myStartTime">\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-datetime displayFormat="HH:mm" placeholder="End time" [(ngModel)]="myEndTime">\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="Description (optional)" [(ngModel)]="description"></ion-input>\n    </ion-item>\n    <button ion-button float-right (click)="addActivity()">Add</button>\n  </ion-list>\n\n</ion-header>\n<!-- SCROLLING -->\n<ion-content padding>\n  <ion-list>\n    <ion-item (click)="showMore(item)" [color]="even? \'primary\' : \'secondary\'" *ngFor="let item of Activities;" >\n      <label float-left>{{item.activityTitle}}</label>\n      <label float-right>{{item.startTime}} - {{item.endTime}}</label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/track/track.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */]) === "function" && _d || Object])
    ], trackPage);
    return trackPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_overview_overview__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_track_track__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_activity_service_activity_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(199);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_overview_overview__["a" /* overviewPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_track_track__["a" /* trackPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_overview_overview__["a" /* overviewPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_track_track__["a" /* trackPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityModel; });
var ActivityModel = /** @class */ (function () {
    function ActivityModel() {
    }
    return ActivityModel;
}());

//# sourceMappingURL=ActivityModel.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map