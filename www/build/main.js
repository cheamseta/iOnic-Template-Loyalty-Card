webpackJsonp([0],{

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isContainArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return convertTimeToReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LStorage; });
/* unused harmony export PartnerLoyatyCardModel */
/* unused harmony export ImageObj */
/* unused harmony export Pointer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var isContainArray = (function () {
    function isContainArray() {
    }
    isContainArray.prototype.transform = function (value) {
        var storage = new LStorage();
        if (value && value.indexOf(storage.userId) != -1) {
            return true;
        }
        else {
            return false;
        }
    };
    isContainArray = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'isContain' })
    ], isContainArray);
    return isContainArray;
}());

var convertTimeToReadable = (function () {
    function convertTimeToReadable() {
    }
    convertTimeToReadable.prototype.transform = function (value) {
        var startD = new Date(value * 1000);
        return startD.toDateString();
    };
    convertTimeToReadable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'dateT' })
    ], convertTimeToReadable);
    return convertTimeToReadable;
}());

var Service = (function () {
    function Service() {
    }
    Service.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    ;
    Service.prototype.generateUUID4 = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(4);
        });
        return uuid;
    };
    ;
    Service.prototype.getVRecommendCouponFeeds = function (skip, limit, type) {
        return [
            {
                "_id": "MY-STOREa7a126834769",
                "username": "new user",
                "userProfile": "https://cdn3.iconfinder.com/data/icons/emoticon-6/512/28-128.png",
                "color": "#869ceb",
                "saves": [],
                "likes": [],
                "image": {
                    "path": "https://marketplace.canva.com/MAB4r0eKuD8/2/0/thumbnail_large/canva-doughnut-shop-grand-opening-flyer-MAB4r0eKuD8.jpg",
                    "thumb": "https://marketplace.canva.com/MAB4r0eKuD8/2/0/thumbnail_large/canva-doughnut-shop-grand-opening-flyer-MAB4r0eKuD8.jpg"
                },
                "redeems": [],
                "feedType": "coupon",
                "viewCount": 96,
                "savedLimit": 0,
                "type": "percent",
                "title": "Sample One",
                "amount": 30,
                "desc": "*** discount up to 30%",
                "userId": "FvWeR0uNbD",
                "expiredDate": 1538524800,
                "placeId": "1xe0jVcdYh",
                "code": "07370115",
            },
            {
                "_id": "MY-STOREa7a126834769",
                "username": "new user",
                "userProfile": "https://cdn3.iconfinder.com/data/icons/emoticon-6/512/28-128.png",
                "color": "#869ceb",
                "saves": [],
                "likes": [],
                "image": {
                    "path": "http://freebiesland.my/wp-content/uploads/2015/12/Starbucks-Frappuccino-e1451521210438.jpg",
                    "thumb": "http://freebiesland.my/wp-content/uploads/2015/12/Starbucks-Frappuccino-e1451521210438.jpg"
                },
                "redeems": [],
                "feedType": "coupon",
                "viewCount": 96,
                "savedLimit": 0,
                "type": "percent",
                "title": "Sample One",
                "amount": 30,
                "desc": "*** From starbuck promotion today ",
                "userId": "FvWeR0uNbD",
                "expiredDate": 1538524800,
                "placeId": "1xe0jVcdYh",
                "code": "07370115",
            },
            {
                "_id": "MY-STOREa7a126834769",
                "username": "new user",
                "userProfile": "https://cdn3.iconfinder.com/data/icons/emoticon-6/512/28-128.png",
                "color": "#869ceb",
                "saves": [],
                "likes": [],
                "image": {
                    "path": "http://4.bp.blogspot.com/-ONWrBpAfbKM/VTiOWICFxlI/AAAAAAAAQxI/dvliL8Fc8hw/s1600/Starbucks%2BBuy%2B1%2BGet%2B1%2BSummer%2B2015.png",
                    "thumb": "http://4.bp.blogspot.com/-ONWrBpAfbKM/VTiOWICFxlI/AAAAAAAAQxI/dvliL8Fc8hw/s1600/Starbucks%2BBuy%2B1%2BGet%2B1%2BSummer%2B2015.png"
                },
                "redeems": [],
                "feedType": "coupon",
                "viewCount": 96,
                "savedLimit": 0,
                "type": "percent",
                "title": "Sample One",
                "amount": 30,
                "desc": "*** buy one and get one free",
                "userId": "FvWeR0uNbD",
                "expiredDate": 1538524800,
                "placeId": "1xe0jVcdYh",
                "code": "07370115",
            }
        ];
    };
    Service.prototype.getUserByEmail = function (email) {
        return {
            "_id": "8bc6a835",
            "country": "Cambodia",
            "isPrivate": false,
            "lastName": "Chea",
            "nickname": "Vibol",
            "username": "c.vibol",
            "isActivated": true,
            "email": "c.vibol@gbscambodia.com",
            "paidPackage": "gold",
            "firstName": "Vibol",
            "profileImage": "https://cdn4.iconfinder.com/data/icons/reaction/32/joy-128.png",
            "address": "Phnom Penh",
            "timestamp": 1513912457.0,
            "updatedTimestamp": 1519862399.0,
            "_hashed_password": "$2a$10$XNz8JhvXj7mosLXMRCRHu.UYA2Eh7fCK4Urq/WatL1JZUhFr4/lAS",
            "isActivatedPOS": false,
            "paymentDate": 1519862399.0,
            "province": "Phnom Penh"
        };
    };
    Service.prototype.getUserByUserId = function (userId) {
        return {
            "_id": "8bc6a835",
            "country": "Cambodia",
            "isPrivate": false,
            "lastName": "Chea",
            "nickname": "Vibol",
            "username": "c.vibol",
            "isActivated": true,
            "email": "c.vibol@gbscambodia.com",
            "paidPackage": "gold",
            "firstName": "Vibol",
            "profileImage": "https://cdn4.iconfinder.com/data/icons/reaction/32/joy-128.png",
            "address": "Phnom Penh",
            "timestamp": 1513912457.0,
            "updatedTimestamp": 1519862399.0,
            "_hashed_password": "$2a$10$XNz8JhvXj7mosLXMRCRHu.UYA2Eh7fCK4Urq/WatL1JZUhFr4/lAS",
            "isActivatedPOS": false,
            "paymentDate": 1519862399.0,
            "province": "Phnom Penh"
        };
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Service);
    return Service;
}());

var AppHelper = (function () {
    function AppHelper(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    AppHelper.prototype.presentLoading = function () {
        this.progresser = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 10000
        });
        this.progresser.present();
    };
    AppHelper.prototype.presentToast = function (alert) {
        var toast = this.toastCtrl.create({
            message: alert,
            duration: 3000
        });
        toast.present();
    };
    AppHelper.prototype.dismissLoading = function () {
        this.progresser.dismiss();
    };
    AppHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AppHelper);
    return AppHelper;
}());

var LStorage = (function () {
    function LStorage() {
        this.currentUserStorage = "cVRMLStorage";
        this.userId = "";
        if (this.localStorageGETCurrentUserData()) {
            this.userId = this.localStorageGETCurrentUserData().objectId;
        }
    }
    // encry 
    LStorage.prototype.localStorageSETCurrentUserData = function (data) {
        if (data) {
            var ency = JSON.stringify(data);
            localStorage.setItem(this.currentUserStorage, ency);
        }
    };
    LStorage.prototype.localStorageGETCurrentUserData = function () {
        if (localStorage.getItem(this.currentUserStorage)) {
            var decy = localStorage.getItem(this.currentUserStorage);
            return JSON.parse(decy);
        }
    };
    LStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LStorage);
    return LStorage;
}());

// --- model
var PartnerLoyatyCardModel = (function () {
    function PartnerLoyatyCardModel() {
        this.backgroundColor = "#2b8cc2";
        this.textColor = "#fff";
        this.imageUrl = "https://firebasestorage.googleapis.com/v0/b/gooutte.appspot.com/o/VRecommend%2FAssets%2FcardImg.jpg?alt=media&token=f046b3e1-191c-4662-b4cc-86ea09f64e03";
    }
    return PartnerLoyatyCardModel;
}());

var ImageObj = (function () {
    function ImageObj(thePath, thumb, storeId, thumbStoreId, width, height) {
        this.path = thePath;
        this.thumb = thumb;
        this.storeId = storeId;
        this.thumbStoreId = thumbStoreId;
        this.height = height;
        this.width = width;
    }
    ImageObj.prototype.setImage = function () {
        return {
            "path": this.path,
            "amazonId": this.storeId,
            "thumb": this.thumb,
            "amazonIdThumb": this.thumbStoreId,
            "width": this.width,
            "height": this.height
        };
    };
    return ImageObj;
}());

var Pointer = (function () {
    function Pointer(className, objectId) {
        this.className = className;
        this.objectId = objectId;
    }
    Pointer.prototype.setPointer = function () {
        return { "__type": "Pointer", "className": this.className, "objectId": this.objectId };
    };
    return Pointer;
}());

//# sourceMappingURL=app.services.js.map

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coupons; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redeem__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Coupons = (function () {
    function Coupons(navCtrl, services, modCtrl) {
        this.navCtrl = navCtrl;
        this.services = services;
        this.modCtrl = modCtrl;
        this.couponArray = [];
    }
    Coupons.prototype.ionViewDidLoad = function () {
        this.couponArray = this.services.getVRecommendCouponFeeds(100, 0, 'coupon');
    };
    Coupons.prototype.showRedeem = function (data) {
        var modal = this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_3__redeem__["a" /* Redeem */], {
            cardData: data
        });
        modal.present();
    };
    Coupons = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'coupons-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/coupons/coupons.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Coupons</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="grayBG card-background-page">\n    <div class="mainCardHolder">\n      <ion-card>\n        <ion-item>\n            <p>These are my coupons I have added</p>\n        </ion-item>\n      </ion-card>\n  <ion-card *ngFor="let feed of couponArray" class="mainCardHolder padding" (tap)="showRedeem(feed)">\n    <img-loader src="{{feed.image.path}}" useImg></img-loader>\n    <ion-card-content>\n      <ion-card-title>\n        {{feed.title}} \n        <br/><ion-badge>{{feed.amount}}{{feed.type}} </ion-badge>\n      </ion-card-title>\n      <p><strong>Expire Date : {{feed.expiredDate | dateT}}</strong></p>\n    </ion-card-content>\n  </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/coupons/coupons.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["c" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], Coupons);
    return Coupons;
}());

//# sourceMappingURL=coupons.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Redeem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Redeem = (function () {
    function Redeem(navCtrl, param, vCtrl, lstorage, helper) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.vCtrl = vCtrl;
        this.lstorage = lstorage;
        this.helper = helper;
        this.size = 230;
        this.cardData = {};
        this.currentUserData = {};
        this.totalPoint = 0;
        if (param.get("cardData")) {
            this.cardData = param.get("cardData");
        }
        ;
        this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
    }
    Redeem.prototype.dismissPage = function (isRefresh) {
        this.vCtrl.dismiss({ isRefresh: isRefresh });
    };
    Redeem.prototype.removeAction = function () {
        this.helper.presentToast("Sucessfully remove your coupon");
        this.dismissPage(true);
    };
    Redeem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'redeem-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/coupons/redeem.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Coupon</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="dismissPage()">\n        <ion-icon clear name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="grayBG">\n  <ion-card class="qrcodeCard padding">\n    <ion-list>\n      <ion-card-header>\n        <strong>Customer Information</strong>\n      </ion-card-header>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="{{currentUserData.profileImage}}">\n        </ion-avatar>\n        <h1><strong>{{currentUserData.nickname}}</strong></h1>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-card class="qrcodeCard padding">\n    <qr-code [value]="cardData.code" [size]="size"></qr-code>\n    <ion-card-header>\n      <strong>Redeem with this code</strong><br/>\n      <strong class="colorBlue">{{cardData.code}}</strong>\n    </ion-card-header>\n  </ion-card>\n  <ion-card class="qrcodeCard padding">\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/discount.png">\n        </ion-avatar>\n        <h1><strong>{{cardData.amount}}{{cardData.type}}</strong></h1>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-card class="qrcodeCard" padding>\n  <button full color="danger" ion-button outline (click)="removeAction()">Remove</button>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/coupons/redeem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["a" /* AppHelper */]])
    ], Redeem);
    return Redeem;
}());

//# sourceMappingURL=redeem.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_notification_notification__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_coupon_detail_coupon_detail__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { IBeacon } from 'ionic-native';


var Home = (function () {
    function Home(navCtrl, services, modCtrl, helper, lstorage) {
        this.navCtrl = navCtrl;
        this.services = services;
        this.modCtrl = modCtrl;
        this.helper = helper;
        this.lstorage = lstorage;
        this.feedArray = [];
        this.device = [];
        this.segmentName = "coupon";
        this.isLoaded = true;
        this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
    }
    Home.prototype.ionViewDidLoad = function () {
        this.feedArray = this.services.getVRecommendCouponFeeds(100, 0, 'coupon');
    };
    Home.prototype.showCouponDetail = function (coupon) {
        this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_coupon_detail_coupon_detail__["a" /* CouponDetail */], {
            couponDetail: coupon
        }).present();
    };
    Home.prototype.addCoupon = function () {
        this.helper.presentToast("Sucessfully add to your coupon collections");
    };
    Home.prototype.notification = function () {
        var modal = this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_notification_notification__["a" /* TheNotifications */]);
        modal.present();
    };
    Home.prototype.checkFacebookAuthentication = function () {
    };
    Home.prototype.iBeaconRequest = function () {
        // IBeacon.requestAlwaysAuthorization();
        // // create a new delegate and register it with the native layer
        // let delegate = IBeacon.Delegate();
        // // Subscribe to some of the delegate's event handlers
        // delegate.didRangeBeaconsInRegion()
        //   .subscribe(
        //   data => {
        //     console.log('didRangBeaconsInRegion: ', JSON.stringify(data));
        //   }, error => console.log("error")
        //   );
        // delegate.didStartMonitoringForRegion()
        //   .subscribe(
        //   data => console.log('didStartMonitoringForRegion: ', JSON.stringify(data)),
        //   error => console.log("error")
        //   );
        // delegate.didEnterRegion()
        //   .subscribe(
        //   data => {
        //     console.log('didEnterRegion: ', JSON.stringify(data));
        //   });
        // let beaconRegion = IBeacon.BeaconRegion("user", this.services.generateUUID());
        // IBeacon.startMonitoringForRegion(beaconRegion)
        //   .then(
        //   () => console.log('Native layer recieved the request to monitoring'),
        //   error => console.error('Native layer failed to begin monitoring: ', error)
        //   );
    };
    Home.prototype.video = function () {
    };
    Home.prototype.ngOnDestroy = function () {
        if (this.allRecommSubscr) {
            this.allRecommSubscr.unsubscribe();
        }
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Discounty</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="notification()">\n        <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="grayBG card-background-page">\n  <div [ngSwitch]="segmentName">\n    <div *ngSwitchCase="\'coupon\'">\n      <ion-card>\n        <ion-item>\n          <strong>COUPONS</strong>\n        </ion-item>\n      </ion-card>\n      <ion-card *ngIf="feedArray.length <= 0 && isLoaded" class="mainCardHolder">\n        <img src="assets/empty.jpg" />\n        <ion-card-content>\n          <ion-card-title>\n            You have added all coupons. They are coming soon.\n          </ion-card-title>\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngFor="let feed of feedArray" class="mainCardHolder padding">\n        <ion-list (tap)="showCouponDetail(feed)">\n          <ion-item>\n            <ion-avatar item-left>\n              <img-loader src="{{feed.userProfile}}" useImg></img-loader>\n            </ion-avatar>\n            <h2>{{feed.username}}</h2>\n            <button *ngIf="feed.likes | isContain" ion-button clear color="danger" icon-left item-right>\n              <ion-icon ios="ios-heart" md="md-heart"></ion-icon>{{feed.likes.length}}</button>\n            <button *ngIf="!(feed.likes | isContain)" ion-button clear icon-left item-right>\n              <ion-icon ios="ios-heart" md="md-heart"></ion-icon>0</button>\n          </ion-item>\n        </ion-list>\n        <img-loader spinner="true" height="100px" src="{{feed.image.path}}" useImg (tap)="showCouponDetail(feed)"></img-loader>\n        <ion-card-content>\n          <ion-card-title>\n            {{feed.title}}\n            <br/>\n            <ion-badge item-left large>{{feed.amount}} {{feed.type}}</ion-badge>\n          </ion-card-title>\n          <p class="padding">{{feed.desc}}\n            <br/>\n            <strong>Expire Date : {{feed.expiredDate | dateT}}</strong>\n          </p>\n          <ion-grid *ngIf="!(feed.saves | isContain)">\n            <ion-row>\n              <ion-col width-100>\n                <button ion-button full round (tap)="addCoupon()">Add To My Coupon</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__app_app_services__["c" /* Service */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__app_app_services__["a" /* AppHelper */], __WEBPACK_IMPORTED_MODULE_1__app_app_services__["b" /* LStorage */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheNotifications; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TheNotifications = (function () {
    function TheNotifications(navCtrl, navParams, lstorage, priv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lstorage = lstorage;
        this.priv = priv;
        this.currentUserData = {};
        this.notificationArray = [];
        this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
    }
    TheNotifications.prototype.ionViewDidLoad = function () {
        this.notificationArray = [
            {
                isRead: false,
                username: "Nary Chan",
                action: "liked coupon",
                timestamp: 1517378877
            },
            {
                isRead: false,
                username: "Leap",
                action: "liked coupon",
                timestamp: 1517385877
            },
            {
                isRead: true,
                username: "Tharo",
                action: "liked coupon",
                timestamp: 1517375877
            }
        ];
    };
    TheNotifications.prototype.closePage = function () {
        this.priv.dismiss();
    };
    TheNotifications = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notification-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/notification/notification.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Notification</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="closePage()">\n<ion-icon ios="ios-close" md="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="grayBG card-background-page">\n\n    <ion-list>\n        <ion-item *ngFor="let stt of notificationArray">\n          <ion-avatar item-start>\n            <img *ngIf="!stt.isRead" src="assets/notificationRed.jpg">\n            <img *ngIf="stt.isRead" src="assets/notification.png">\n          </ion-avatar>\n          <h2><strong>{{stt.usernam}}</strong> {{stt.action}}</h2>\n          <p>{{ stt.timestamp | dateT}}</p>\n        </ion-item>\n      </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], TheNotifications);
    return TheNotifications;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CouponDetail = (function () {
    function CouponDetail(navCtrl, navParams, lstorage, priv, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lstorage = lstorage;
        this.priv = priv;
        this.helper = helper;
        this.currentUserData = {};
        this.userArray = [];
        this.couponDetail = {};
        this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
        if (this.navParams.get("couponDetail")) {
            this.couponDetail = this.navParams.get("couponDetail");
        }
    }
    CouponDetail.prototype.ionViewDidLoad = function () {
    };
    CouponDetail.prototype.likeDislikeAction = function () {
        this.couponDetail.likes.push("user");
    };
    CouponDetail.prototype.addCoupon = function (vrmId) {
        this.helper.presentToast("Sucessfully add to your coupon collections");
    };
    CouponDetail.prototype.closePage = function () {
        this.priv.dismiss();
    };
    CouponDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'coupon-detail-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/coupon-detail/coupon-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Coupon Detail</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="closePage()">\n        <ion-icon ios="ios-close" md="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="grayBG card-background-page">\n  <ion-card class="mainCardHolder padding">\n    <img-loader src="{{couponDetail.image.path}}" useImg></img-loader>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-avatar item-left>\n            <img-loader src="{{couponDetail.userProfile}}" useImg></img-loader>\n          </ion-avatar>\n          <h2>{{couponDetail.username}}</h2>\n          <button (tap)="likeDislikeAction()" ion-button item-right round color="danger" icon-left><ion-icon ios="ios-heart" md="md-heart"></ion-icon>{{couponDetail.likes.length}}</button>\n        </ion-item>\n      </ion-list>\n      <ion-card-title>\n        {{couponDetail.title}}\n      </ion-card-title>\n      <p>{{couponDetail.desc}} <br/><strong>Expire Date : {{couponDetail.expiredDate | dateT}}</strong></p>\n      <ion-grid *ngIf="!(couponDetail.saves | isContain)">\n        <ion-row>\n          <ion-col width-100><button ion-button full large round (click)="addCoupon(couponDetail.objectId)">Add {{couponDetail.amount}} {{couponDetail.type}} Coupon</button></ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-card-title>\n          Store Information\n        </ion-card-title>\n\n        <div class="padding">\n            <p><strong>Store : Starbuck</strong></p>\n            <p><strong>Phone Number : (+1) 000 0000 000</strong></p>\n            <p><strong>Address : California, USA</strong></p>\n        </div>\n\n      <img class="effect2 roundcard" src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&scale=2&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCIh3b0WyqWSmGqOJ0KcBKOrwmIGQWAOeA"/>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-fab right bottom>\n    <button ion-fab color="light"><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/coupon-detail/coupon-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["a" /* AppHelper */]])
    ], CouponDetail);
    return CouponDetail;
}());

//# sourceMappingURL=coupon-detail.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_reward_point_reward_point__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_redeem_history_redeem_history__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Profile = (function () {
    function Profile(navCtrl, barcode, navParams, lstorage, helper, modCtrl) {
        this.navCtrl = navCtrl;
        this.barcode = barcode;
        this.navParams = navParams;
        this.lstorage = lstorage;
        this.helper = helper;
        this.modCtrl = modCtrl;
        this.isShop = false;
        this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
    }
    Profile.prototype.ionViewDidLoad = function () { };
    Profile.prototype.activateLoyaltyCard = function () {
        var _this = this;
        this.barcode.scan().then(function (barcodeData) {
            _this.helper.presentToast("Successfully scan it");
        }, function (err) {
            _this.helper.presentToast("Sorry !! SOMETHING WENT WRONG PLEASE TRY AGAIN");
        });
    };
    Profile.prototype.showRewardPoint = function () {
        this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_reward_point_reward_point__["a" /* Reward */]).present();
    };
    Profile.prototype.ngOnDestroy = function () {
        if (this.loyaltyCardSubscr) {
            this.loyaltyCardSubscr.unsubscribe();
        }
        if (this.updateCardSubscr) {
            this.updateCardSubscr.unsubscribe();
        }
    };
    Profile.prototype.showRedeemHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_redeem_history_redeem_history__["a" /* RedeemHistoryComponent */]);
    };
    Profile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="grayBG card-background-page">\n  <div class="mainCardHolder">\n    <ion-card class="mainCardProfile">\n      <img-loader [src]="currentUserData.profileImage" useImg></img-loader>\n    </ion-card>\n    <ion-card>\n      <ion-list no-lines>\n        <button ion-button clear full large color="primary">\n          <strong>{{currentUserData.nickname.toUpperCase()}}<br/><small>@{{currentUserData.username}}</small></strong>\n        </button>\n      </ion-list>\n    </ion-card>\n    <ion-card>\n      <ion-list no-lines>\n          <button ion-button clear full large color="primary" (click)="showRewardPoint()">Total Points : 10</button>\n        </ion-list>\n    </ion-card>\n    <ion-card>\n      <ion-list>\n        <button ion-item icon-left large (click)="showRedeemHistory()">\n          <ion-icon ios="ios-time" md="md-time"></ion-icon>\n          My Redeems History\n        </button>\n      </ion-list>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_3__app_app_services__["a" /* AppHelper */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], Profile);
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reward; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__claim_reward__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Reward = (function () {
    function Reward(navCtrl, mCtrl, navParams, lstorage, vCtrl) {
        this.navCtrl = navCtrl;
        this.mCtrl = mCtrl;
        this.navParams = navParams;
        this.lstorage = lstorage;
        this.vCtrl = vCtrl;
        this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
    }
    Reward.prototype.ionViewDidLoad = function () {
    };
    Reward.prototype.showClaimReward = function () {
        this.mCtrl.create(__WEBPACK_IMPORTED_MODULE_3__claim_reward__["a" /* ClaimReward */]).present();
    };
    Reward.prototype.dismissPage = function () {
        this.vCtrl.dismiss();
    };
    Reward = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'reward-point-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/reward-point/reward-point.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Reward List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="dismissPage()">\n        <ion-icon clear name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="grayBG card-background-page">\n  <div class="mainCardHolder">\n    <ion-grid>\n      <ion-row>\n        <ion-col width-100>\n          <ion-card padding>\n            <button ion-button outline full>How to start ?</button>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col width-50>\n          <ion-card padding (click)="showClaimReward()">\n            <img src="https://cdn0.iconfinder.com/data/icons/travel-and-leisure/512/12-128.png" />\n            <p>Hello Movie 50pt</p>\n          </ion-card>\n        </ion-col>\n        <ion-col width-50 >\n          <ion-card padding>\n            <img src="https://cdn1.iconfinder.com/data/icons/all_google_icons_symbols_by_carlosjj-du/128/coupon_tag-r.png" />\n            <p>Crazy Shop 100pt</p>\n          </ion-card>\n        </ion-col>\n        <ion-col width-50>\n          <ion-card padding>\n            <img src="https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/box-128.png" />\n            <p>Bundle 250pt</p>\n          </ion-card>\n        </ion-col>\n        <ion-col width-50>\n          <ion-card padding>\n            <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/flower-128.png" />\n            <p>Flower 50pt</p>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/reward-point/reward-point.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], Reward);
    return Reward;
}());

//# sourceMappingURL=reward-point.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimReward; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClaimReward = (function () {
    function ClaimReward(navCtrl, navParams, lstorage, vCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lstorage = lstorage;
        this.vCtrl = vCtrl;
        this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
    }
    ClaimReward.prototype.ionViewDidLoad = function () {
    };
    ClaimReward.prototype.dismissPage = function () {
        this.vCtrl.dismiss();
    };
    ClaimReward = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'claim-reward-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/reward-point/claim-reward.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Claim Reward</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="dismissPage()">\n        <ion-icon clear name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="grayBG card-background-page">\n  <div class="mainCardHolder">\n    <ion-card class="mainCardHolder padding">\n      <img src="http://www.impawards.com/2016/posters/xmen_apocalypse_ver18_xxlg.jpg" />\n      <ion-card-content>\n        <ion-card-title>\n          Free movie ticket at AEON Cineplex\n        </ion-card-title>\n        <div class="point">\n          <p>50 points</p>\n        </div>\n        <ion-grid>\n          <ion-row>\n            <ion-col width-100><button ion-button full large round>Claim NOW</button></ion-col>\n          </ion-row>\n        </ion-grid>\n        <p><small>* this reward can be trade for VRecommend point only</small></p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/reward-point/claim-reward.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ClaimReward);
    return ClaimReward;
}());

//# sourceMappingURL=claim-reward.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemHistoryComponent; });
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

var RedeemHistoryComponent = (function () {
    function RedeemHistoryComponent() {
        this.redeems = [];
        this.redeems = [
            {
                timestamp: 1518101656,
                redeem: "10 Dollar"
            },
            {
                timestamp: 1518101656,
                redeem: "5 Dollar"
            },
            {
                timestamp: 1518101656,
                redeem: "5 Dollar"
            }
        ];
    }
    RedeemHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'redeem-history',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/redeem-history/redeem-history.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Redeem History</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="grayBG card-background-page">\n\n    <ion-list>\n        <ion-item *ngFor="let stt of redeems">\n          <h2><strong>{{stt.redeem}}</strong></h2>\n          <p>{{ stt.timestamp | dateT}}</p>\n        </ion-item>\n      </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/redeem-history/redeem-history.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RedeemHistoryComponent);
    return RedeemHistoryComponent;
}());

//# sourceMappingURL=redeem-history.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loyalty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardCode__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Loyalty = (function () {
    function Loyalty(navCtrl, helper, modCtrl, barcode) {
        this.navCtrl = navCtrl;
        this.helper = helper;
        this.modCtrl = modCtrl;
        this.barcode = barcode;
        this.loyaltyArray = [];
    }
    Loyalty.prototype.ionViewDidLoad = function () {
        this.loyaltyArray = [
            {
                placeName: "Starbuck",
                imageProfile: "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Linkedin-128.png",
                expiredDate: 1517370117,
                textColor: '#939303',
                backgroundColor: '#eee',
                code: "08484404",
                imageUrl: "https://cdn2.iconfinder.com/data/icons/Siena/256/credit_card%20blue.png"
            },
            {
                placeName: "Costa",
                imageProfile: "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Linkedin-128.png",
                expiredDate: 1517370117,
                textColor: '#fff',
                backgroundColor: '#633974',
                code: "0849383404",
                imageUrl: "https://cdn2.iconfinder.com/data/icons/Siena/256/credit_card%20green.png"
            },
            {
                placeName: "Amazon",
                imageProfile: "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Linkedin-128.png",
                expiredDate: 1517370117,
                textColor: '#fff',
                backgroundColor: '#1F618D',
                code: "0849383404",
                imageUrl: "https://cdn2.iconfinder.com/data/icons/Siena/256/credit_card%20red.png"
            }
        ];
    };
    Loyalty.prototype.showQRModal = function (data) {
        this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cardCode__["a" /* CardCode */], {
            cardData: data
        }).present();
    };
    Loyalty.prototype.scanToIssueNewCard = function () {
        var _this = this;
        this.barcode.scan().then(function (barcodeData) {
            _this.helper.presentToast("Successfully scan it");
        }, function (err) {
            _this.helper.presentToast("Sorry !! SOMETHING WENT WRONG PLEASE TRY AGAIN");
        });
    };
    Loyalty = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'loyalty-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/loyalty/loyalty.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Loyalty Cards</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="grayBG card-background-page">\n  <div class="padding">\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </div>\n\n  <ion-card class="roundcard mainLoyaltyHolder padding" (click)="scanToIssueNewCard()">\n  <ion-card-title>\n    <h3>\n      <strong>Scan from a store to issue a new card</strong>\n    </h3>\n  </ion-card-title>\n  <span class="codeScan">\n    <img class="codeScan" src="assets/scan.png" />\n  </span>\n</ion-card>\n\n\n  <ion-card class="roundcard mainLoyaltyHolder padding" *ngFor="let card of loyaltyArray" [ngStyle]="{\'background\': card.backgroundColor}"\n    (tap)="showQRModal(card)">\n    <ion-card-title>\n      <img class="imgCode" src="assets/qrcode.jpg" />\n      <h1 [ngStyle]="{\'color\': card.textColor}">\n        <strong>{{card.placeName}}</strong>\n        <br/>\n        <small>Loyalty Card</small>\n      </h1>\n      <p>\n        <small [ngStyle]="{\'color\': card.textColor}">EXP: {{card.expiredDate | dateT}}</small>\n      </p>\n    </ion-card-title>\n    <span class="codePoster">\n      <img-loader [src]="card.imageUrl" useImg></img-loader>\n    </span>\n  </ion-card>\n</ion-content>\n<ion-fab left bottom>\n  <button ion-fab color="primary">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n</ion-fab>\n<ion-fab right bottom>\n  <button ion-fab color="primary">\n    <ion-icon name="arrow-forward"></ion-icon>\n  </button>\n</ion-fab>\n'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/loyalty/loyalty.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__app_app_services__["a" /* AppHelper */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], Loyalty);
    return Loyalty;
}());

//# sourceMappingURL=loyalty.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardCode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardCode = (function () {
    function CardCode(navCtrl, param, vCtrl) {
        this.navCtrl = navCtrl;
        this.param = param;
        this.vCtrl = vCtrl;
        this.size = 230;
        this.cardData = {};
        this.totalPoint = 0;
        if (param.get("cardData")) {
            this.cardData = param.get("cardData");
            this.calcucatePoint();
        }
        ;
    }
    CardCode.prototype.calcucatePoint = function () {
        if (this.cardData.points) {
            for (var _i = 0, _a = this.cardData.points; _i < _a.length; _i++) {
                var point = _a[_i];
                this.totalPoint += Number(point.point);
            }
        }
    };
    CardCode.prototype.dismissPage = function () {
        this.vCtrl.dismiss();
    };
    CardCode = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cardCode-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/loyalty/cardCode.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Card</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="dismissPage()">\n        <ion-icon clear name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="grayBG">\n  <div class="qrCode">\n    <ion-card class="qrcodeCard">\n      <qr-code [value]="cardData.code" [size]="size"></qr-code>\n      <ion-list>\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="{{cardData.profileImage}}" onError="src=\'assets/PlaceHolder.png\'">\n          </ion-avatar>\n          <h2>{{cardData.placeName}}</h2>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n    <ion-card class="qrcodeCard padding">\n      <ion-list>\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="https://cdn4.iconfinder.com/data/icons/gamification-1/256/--04-128.png">\n          </ion-avatar>\n          <h1>\n            <strong>{{totalPoint}} Points</strong>\n          </h1>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n    <ion-card>\n      <div *ngIf="!cardData.points">\n        <ion-list>\n          <ion-list-header>\n            <strong>History</strong>\n          </ion-list-header>\n          <ion-list>\n            <ion-item>\n              <h2>Point : 3</h2>\n              <p>{{ 1517459974 | dateT }}</p>\n            </ion-item>\n            <ion-item>\n                <h2>Point : 2</h2>\n                <p>{{ 1517459974 | dateT }}</p>\n              </ion-item>\n              <ion-item>\n                  <h2>Point : 4</h2>\n                  <p>{{ 1517459974 | dateT }}</p>\n                </ion-item>\n                <ion-item>\n                    <h2>Point : 4</h2>\n                    <p>{{ 1517459974 | dateT }}</p>\n                  </ion-item>\n          </ion-list>\n        </ion-list>\n\n      </div>\n\n    </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/loyalty/cardCode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], CardCode);
    return CardCode;
}());

//# sourceMappingURL=cardCode.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recover_password_recover_password__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Login = (function () {
    function Login(navCtrl, navParams, services, lstorage, help, modCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.lstorage = lstorage;
        this.help = help;
        this.modCtrl = modCtrl;
        this.loginData = {
            username: "discounty",
            password: "discounty"
        };
    }
    Login.prototype.recoverPassword = function () {
        this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_2__recover_password_recover_password__["a" /* RecoverPassword */]).present();
    };
    Login.prototype.userLogin = function () {
        if (this.loginData.username != "discounty" && this.loginData.password != "discounty") {
            this.help.presentToast("Your password is not correct");
            return;
        }
        this.help.presentLoading();
        var data = this.services.getUserByUserId("");
        this.lstorage.localStorageSETCurrentUserData(data);
        location.reload();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Registration</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="grayBG card-background-page">\n  <div class="mainCardHolder">\n    <ion-card>\n      <img src="assets/login.png" />\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <strong>Login</strong>\n      </ion-card-header>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="loginData.username" name="username" placeholder="Username or Email or Phone number"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" [(ngModel)]="loginData.password" name="password" placeholder="Password"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button full color="light" (click)="userLogin()">Login</button>\n    </ion-card>\n    <button ion-button full clear color="light" small (click)="recoverPassword()">Forget Password</button>\n\n    <ion-card>\n      <ion-card-header>\n        <strong>Email Sign up</strong>\n      </ion-card-header>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Confirm Password"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button full color="light">Sign up</button>\n    </ion-card>\n    <button ion-button full color="light" clear small>Term & Conditions</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_app_services__["c" /* Service */], __WEBPACK_IMPORTED_MODULE_3__app_app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_3__app_app_services__["a" /* AppHelper */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoverPassword = (function () {
    function RecoverPassword(navCtrl, navParams, lstorage, vCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lstorage = lstorage;
        this.vCtrl = vCtrl;
        this.recoverOption = "email";
        this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
    }
    RecoverPassword.prototype.ionViewDidLoad = function () {
    };
    RecoverPassword.prototype.closePage = function () {
        this.vCtrl.dismiss();
    };
    RecoverPassword = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recover-password-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/recover-password/recover-password.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Recover Password</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="closePage()">\n        <ion-icon ios="ios-close" md="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="grayBG card-background-page">\n  <div class="mainCardHolder">\n    <ion-card>\n      <ion-item>\n        <ion-input type="text" placeholder="Fill your {{recoverOption}}"></ion-input>\n        <ion-select [(ngModel)]="recoverOption">\n          <ion-option value="email">Email</ion-option>\n            <ion-option value="phone">Phone Number</ion-option>\n        </ion-select>\n      </ion-item>\n     <button ion-button (click)="video()" full icon-left color="secondary">Recover my password</button>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/recover-password/recover-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], RecoverPassword);
    return RecoverPassword;
}());

//# sourceMappingURL=recover-password.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Setting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Setting = (function () {
    function Setting(navCtrl, navParams, lstorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lstorage = lstorage;
        this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
    }
    Setting.prototype.ionViewDidLoad = function () {
    };
    Setting.prototype.signOut = function () {
        localStorage.clear();
        location.reload();
    };
    Setting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'setting-page',template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/setting/setting.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Setting</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="grayBG card-background-page">\n  <div class="mainCardHolder">\n  <ion-card>\n    <ion-card-header>\n      <strong>Languages</strong>\n    </ion-card-header>\n    <ion-list radio-group>\n        <ion-item>\n            <ion-label>English</ion-label>\n            <ion-radio checked="true" value="en"></ion-radio>\n          </ion-item>\n      <ion-item>\n        <ion-label>Spanish</ion-label>\n        <ion-radio checked="false" value="sp"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-card *ngIf="currentUserData">\n    <ion-list>\n      <button ion-item (click)="signOut()">\n          <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n      Sign Out\n    </button>\n    </ion-list>\n  </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/pages/setting/setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_services__["b" /* LStorage */]])
    ], Setting);
    return Setting;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_coupons_coupons__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_loyalty_loyalty__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_loyalty_cardCode__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_coupons_redeem__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_coupon_detail_coupon_detail__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_reward_point_reward_point__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_reward_point_claim_reward__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_image_loader__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_qrcode__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_barcode_scanner__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_recover_password_recover_password__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_redeem_history_redeem_history__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__["a" /* TheNotifications */],
                __WEBPACK_IMPORTED_MODULE_9__pages_coupons_coupons__["a" /* Coupons */],
                __WEBPACK_IMPORTED_MODULE_11__pages_loyalty_cardCode__["a" /* CardCode */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* Profile */],
                __WEBPACK_IMPORTED_MODULE_17__pages_reward_point_reward_point__["a" /* Reward */],
                __WEBPACK_IMPORTED_MODULE_16__pages_coupon_detail_coupon_detail__["a" /* CouponDetail */],
                __WEBPACK_IMPORTED_MODULE_8__app_services__["e" /* isContainArray */],
                __WEBPACK_IMPORTED_MODULE_12__pages_coupons_redeem__["a" /* Redeem */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reward_point_claim_reward__["a" /* ClaimReward */],
                __WEBPACK_IMPORTED_MODULE_23__pages_recover_password_recover_password__["a" /* RecoverPassword */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* Setting */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loyalty_loyalty__["a" /* Loyalty */],
                __WEBPACK_IMPORTED_MODULE_24__pages_redeem_history_redeem_history__["a" /* RedeemHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_services__["d" /* convertTimeToReadable */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_19_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_11__pages_loyalty_cardCode__["a" /* CardCode */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reward_point_claim_reward__["a" /* ClaimReward */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__["a" /* TheNotifications */],
                __WEBPACK_IMPORTED_MODULE_24__pages_redeem_history_redeem_history__["a" /* RedeemHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_recover_password_recover_password__["a" /* RecoverPassword */],
                __WEBPACK_IMPORTED_MODULE_9__pages_coupons_coupons__["a" /* Coupons */],
                __WEBPACK_IMPORTED_MODULE_16__pages_coupon_detail_coupon_detail__["a" /* CouponDetail */],
                __WEBPACK_IMPORTED_MODULE_17__pages_reward_point_reward_point__["a" /* Reward */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* Setting */],
                __WEBPACK_IMPORTED_MODULE_12__pages_coupons_redeem__["a" /* Redeem */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* Profile */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loyalty_loyalty__["a" /* Loyalty */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__app_services__["c" /* Service */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_8__app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_8__app_services__["a" /* AppHelper */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_coupons_coupons__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_loyalty_loyalty__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, lstorage, statusBar, splashScreen) {
        this.platform = platform;
        this.lstorage = lstorage;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* Home */];
        this.initializeApp();
        if (this.lstorage.localStorageGETCurrentUserData()) {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* Home */] },
                { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* Profile */] },
                { title: 'My Coupons', component: __WEBPACK_IMPORTED_MODULE_4__pages_coupons_coupons__["a" /* Coupons */] },
                { title: 'My Loyalty Card', component: __WEBPACK_IMPORTED_MODULE_7__pages_loyalty_loyalty__["a" /* Loyalty */] },
                { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* Setting */] }
            ];
        }
        else {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* Home */] },
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */] },
                { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* Setting */] }
            ];
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header class="menuHeader headerCard">\n    <ion-card>\n    </ion-card>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/setacheam/Documents/MyProject/Github/iOnic-Template-Loyalty-Card/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__app_services__["b" /* LStorage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map