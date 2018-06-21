webpackJsonp([3],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/confirmation-code/confirmation-code.module": [
		277,
		2
	],
	"../pages/login/login.module": [
		278,
		1
	],
	"../pages/signup/signup.module": [
		279,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overview_overview__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_track__ = __webpack_require__(197);
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return overviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
    function overviewPage(navCtrl) {
        this.navCtrl = navCtrl;
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
    overviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-overview',template:/*ion-inline-start:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/overview/overview.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Overview\n    </ion-title>\n    <button ion-button icon-only float-right (click)= "logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/carolineberger/Documents/abroad/UNIBO/TecnologieWeb/productiv_without_dynamo/client/src/pages/overview/overview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], overviewPage);
    return overviewPage;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ActivityModel__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Activity } from '../../../../api/controllers/productivController';
//import { DynamoDB } from '../../providers/provider'
// you want to change this 
var base_url = "http://localhost:3000/";
var trackPage = /** @class */ (function () {
    //public db: DynamoDB;
    function trackPage(alertCtrl, navCtrl, toastCtrl, http) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.populatePageVars();
        this.userId = "Test User";
        /*
         Auth.currentCredentials()
        .then(credentials => {
          this.userId = credentials.identityId;
          this.populatePageVars();
        })
        .catch(err => {
          this.logout(); //logout immediately if the credentials aren't valid
        });
  
   
        */
    }
    trackPage.prototype.populatePageVars = function () {
        this.myDate = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        this.myTime = new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
        // Activities array should be connected to list_all_activities
        this.Activities = new Array();
        this.currentActivity = new __WEBPACK_IMPORTED_MODULE_2__models_ActivityModel__["a" /* ActivityModel */]();
    };
    trackPage.prototype.getOutlook = function () {
        var url = 'localhost:3000/productiv';
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
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
                startTime: this.myStartTime.toDateString(),
                endTime: this.myEndTime.toDateString(),
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
            // THIS IS WHERE THE create_an_activity -> POST
            // SAVE ACTIVITY TO  
            /*
                  this.http.get(base_url + "productiv")
              .map(res => res.json())
                 .subscribe(data => {
                  this.currentActivity = data;
                    console.log(this.currentActivity)
                  });
                  */
            this.currentActivity = new __WEBPACK_IMPORTED_MODULE_2__models_ActivityModel__["a" /* ActivityModel */]();
            // want to do the same thing here for the posting => will call the 5000 one 
            /*
             this.http.get(base_url + "api/outlook")
             .map(res => res.json())
             .subscribe(data => {
               this.data = data;
               console.log(this.data)
             });
             */
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
                        _this.Activities = _this.Activities.filter(function (item) { return item !== item; });
                        // delete_an_activity, DELETE
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
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], trackPage);
    return trackPage;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(99);
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_overview_overview__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_track_track__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_confirmation_code_confirmation_code__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { PeopleServiceProvider } from '../providers/people-service/people-service';
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
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
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
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityModel; });
var ActivityModel = /** @class */ (function () {
    function ActivityModel() {
    }
    return ActivityModel;
}());

//# sourceMappingURL=ActivityModel.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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

/***/ })

},[201]);
//# sourceMappingURL=main.js.map