webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(281);
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
        console.log(currentActivity);
        this.http.post(base_url, {
            userId: userId,
            date: date,
            activityTitle: currentActivity.activityTitle,
            startTime: currentActivity.startTime,
            endTime: currentActivity.endTime,
            description: currentActivity.description
        }).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured", err);
        });
    };
    ActivityServiceProvider.prototype.getActivities = function () {
        return this.http.get(base_url);
    };
    ActivityServiceProvider.prototype.deleteActivity = function (activity) {
        console.log(activity._id);
        return this.http.delete(base_url + "/" + activity._id);
    };
    ActivityServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ActivityServiceProvider);
    return ActivityServiceProvider;
    var _a;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.username = '';
        this.email = '';
        this.password = '';
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onSignIn = function (username, email, password) {
        console.log(username);
        var phone_number = '';
        /*Auth.signUp({
          username,
          password,
          attributes: {
              email,         // optional
              phone_number
          },
          validationData: []  //optional
      })
      .then(data => {
        console.log(data);
        this.navCtrl.push(ConfirmationCodePage);
        let toast = this.toastCtrl.create({
          message: "A confirmation code has been sent to your email",
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        })
      .catch(err =>
        {
          console.log(err);
          let toast = this.toastCtrl.create({
            message: "All fields must be completed and password must be 6 or more characters long.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
    
        });
        */
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sign up</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input [(ngModel)]="username" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input [(ngModel)]="email" type="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="password" type="password"></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button block color="secondary" (click)="onSignIn(username, email, password)">\n          Sign up!\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/confirmation-code/confirmation-code.module": [
		284,
		2
	],
	"../pages/login/login.module": [
		285,
		1
	],
	"../pages/signup/signup.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overview_overview__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_track__ = __webpack_require__(201);
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return overviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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



var overviewPage = /** @class */ (function () {
    function overviewPage(navCtrl, alertCtrl, activityServiceProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.activityServiceProvider = activityServiceProvider;
        this.userId = "Test User";
        this.refreshActivities();
    }
    overviewPage.prototype.logout = function () {
        /*
        Auth.signOut()
        .then(data => {
          console.log(data);
          this.navCtrl.setRoot(LoginPage);
        })
        .catch(err => console.log(err));
    */
    };
    overviewPage.prototype.refreshActivities = function () {
        var _this = this;
        this.activityServiceProvider.getActivities()
            .subscribe(function (data) {
            _this.Activities = data.filter(function (activity) { return activity.userId === _this.userId; });
        });
    };
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
                        // Delete item from Activities list, might make sense for this to be move elsewhere
                        _this.Activities = _this.Activities.filter(function (Activity) { return Activity !== activity; });
                        _this.activityServiceProvider.deleteActivity(activity).subscribe(function () { return console.log("user deleted"); });
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
            selector: 'page-overview',template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/overview/overview.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Overview\n    </ion-title>\n    <button ion-button icon-only float-right (click)= "logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item (click)="showMore(activity)" [color]="even? \'primary\' : \'secondary\'" *ngFor="let activity of Activities;" >\n      <label float-left>{{activity.date}} at {{activity.startTime}} - {{activity.endTime}}</label>\n      <label float-right>{{activity.activityTitle}}</label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/overview/overview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */]])
    ], overviewPage);
    return overviewPage;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ActivityModel__ = __webpack_require__(282);
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
                        console.log(item);
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
    trackPage.prototype.logout = function () {
        /*
        Auth.signOut()
        .then(data => {
          console.log(data);
          this.navCtrl.setRoot(LoginPage);
        })
        .catch(err => console.log(err));
        */
    };
    trackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-track',template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/track/track.html"*/'<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title float-left>\n      {{myDate}} {{myTime}}\n    </ion-title>\n    <button ion-button icon-only float-right (click)= "logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n      \n\n  </ion-navbar>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Activity" [(ngModel)]="activityTitle"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-datetime displayFormat="HH:mm" placeholder="Start time" [(ngModel)]="myStartTime">\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-datetime displayFormat="HH:mm" placeholder="End time" [(ngModel)]="myEndTime">\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="Description (optional)" [(ngModel)]="description"></ion-input>\n    </ion-item>\n    <button ion-button float-right (click)="addActivity()">Add</button>\n  </ion-list>\n\n</ion-header>\n<!-- SCROLLING -->\n<ion-content padding>\n  <ion-list>\n    <ion-item (click)="showMore(item)" [color]="even? \'primary\' : \'secondary\'" *ngFor="let item of Activities;" >\n      <label float-left>{{item.activityTitle}}</label>\n      <label float-right>{{item.startTime}} - {{item.endTime}}</label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/track/track.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */]])
    ], trackPage);
    return trackPage;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
 * Generated class for the ConfirmationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmationCodePage = /** @class */ (function () {
    function ConfirmationCodePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    ConfirmationCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmationCodePage');
    };
    ConfirmationCodePage.prototype.confirmationCode = function (code, username) {
        /*
        Auth.confirmSignUp(username, code)
        .then(data => {
          console.log(data);
          this.navCtrl.push(TabsPage);
    
        })
        .catch(err => {
          console.log(err)
          let toast = this.toastCtrl.create({
            message: 'Invalid confirmation code, please try again.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();});
          */
    };
    ConfirmationCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmation-code',template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/confirmation-code/confirmation-code.html"*/'<!--\n  Generated template for the ConfirmationCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Confirmation Code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input type="text"[(ngModel)]="username"></ion-input>\n          </ion-item>\n      <ion-item>\n        <ion-label floating>Confirmation Code</ion-label>\n        <ion-input type="text"[(ngModel)]="code"></ion-input>\n      </ion-item>\n</ion-list>\n    <div padding>\n     <button ion-button block (click)="confirmationCode(code, username)">Confirm</button>\n   </div>\n   </ion-content>\n'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/confirmation-code/confirmation-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ConfirmationCodePage);
    return ConfirmationCodePage;
}());

//# sourceMappingURL=confirmation-code.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(101);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.username = '';
        this.password = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onSignIn = function (username, password) {
        /*Auth.signIn(username, password)
        .then(user => {
          console.log(user);
          this.navCtrl.push(TabsPage);
    
    
        })
        .catch(err =>
          {
            console.log(err);
            let toast = this.toastCtrl.create({
              message: 'Invalid username and password combination.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          }
        );
        */
    };
    LoginPage.prototype.navToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Login</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <ion-list>\n    \n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input [(ngModel)]="username" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]="password" type="password"></ion-input>\n      </ion-item>\n  \n      <ion-row>\n        <ion-col text-center>\n          <button ion-button block color="secondary" (click)="onSignIn(username, password)">\n            Sign in\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col text-center>\n            <button ion-button block color="secondary" (click)="navToSignup()">\n              No account? Register Now!\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_overview_overview__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_track_track__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_confirmation_code_confirmation_code__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_activity_service_activity_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(200);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_confirmation_code_confirmation_code__["a" /* ConfirmationCodePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_overview_overview__["a" /* overviewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_track_track__["a" /* trackPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/confirmation-code/confirmation-code.module#ConfirmationCodePageModule', name: 'ConfirmationCodePage', segment: 'confirmation-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_confirmation_code_confirmation_code__["a" /* ConfirmationCodePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_overview_overview__["a" /* overviewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_track_track__["a" /* trackPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_activity_service_activity_service__["a" /* ActivityServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
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

},[204]);
//# sourceMappingURL=main.js.map