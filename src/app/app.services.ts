import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { LoadingController, Loading, ToastController } from 'ionic-angular';


@Pipe({ name: 'isContain' })
export class isContainArray implements PipeTransform {
  transform(value: string[]): boolean {
    let storage: LStorage = new LStorage();
    if (value && value.indexOf(storage.userId) != -1) {
      return true;
    } else {
      return false;
    }
  }
}

@Pipe({ name: 'dateT' })
export class convertTimeToReadable implements PipeTransform {
  transform(value: number): string {
    let startD = new Date(value * 1000);
    return startD.toDateString();
  }
}

@Injectable()
export class Service {

  constructor() {

  }



  generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  };

  generateUUID4() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(4);
    });
    return uuid;
  };



  getVRecommendCouponFeeds(skip: number, limit: number, type: string): any[] {
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
    ]
  }


  getUserByEmail(email: string): any {

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
    }

  }


  getUserByUserId(userId: string): any {
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
    }
  }


}

@Injectable()
export class AppHelper {

  progresser: Loading;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }

  presentLoading() {
    this.progresser = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 10000
    });
    this.progresser.present();
  }

  presentToast(alert: string) {
    let toast = this.toastCtrl.create({
      message: alert,
      duration: 3000
    });
    toast.present();
  }

  dismissLoading() {
    this.progresser.dismiss();
  }

}

@Injectable()
export class LStorage {

  private currentUserStorage: string = "cVRMLStorage";
  userId: string = "";
  constructor() {
    if (this.localStorageGETCurrentUserData()) {
      this.userId = this.localStorageGETCurrentUserData().objectId;
    }
  }


  // encry 

  localStorageSETCurrentUserData(data) {
    if (data) {
      let ency = JSON.stringify(data);
      localStorage.setItem(this.currentUserStorage, ency);
    }
  }

  localStorageGETCurrentUserData(): any {
    if (localStorage.getItem(this.currentUserStorage)) {
      let decy = localStorage.getItem(this.currentUserStorage);
      return JSON.parse(decy);
    }
  }

}

// --- model

export class PartnerLoyatyCardModel {
  backgroundColor: string = "#2b8cc2";
  textColor: string = "#fff";
  imageUrl: string = "https://firebasestorage.googleapis.com/v0/b/gooutte.appspot.com/o/VRecommend%2FAssets%2FcardImg.jpg?alt=media&token=f046b3e1-191c-4662-b4cc-86ea09f64e03";
  code: string;
  expiredDate: number;
  placeId: string;
  place: any;
  userId: string;
  user: any;
}

export class ImageObj {
  path: string;
  thumb: string;
  storeId: string;
  thumbStoreId: string;
  width: number;
  height: number;

  constructor(thePath: string, thumb: string, storeId: string, thumbStoreId: string, width: number, height: number) {
    this.path = thePath;
    this.thumb = thumb;
    this.storeId = storeId;
    this.thumbStoreId = thumbStoreId;
    this.height = height;
    this.width = width;
  }

  setImage(): any {
    return {
      "path": this.path,
      "amazonId": this.storeId,
      "thumb": this.thumb,
      "amazonIdThumb": this.thumbStoreId,
      "width": this.width,
      "height": this.height
    };
  }
}

export class Pointer {

  className: string;
  objectId: string;

  constructor(className: string, objectId: string) {
    this.className = className;
    this.objectId = objectId;
  }

  setPointer(): any {
    return { "__type": "Pointer", "className": this.className, "objectId": this.objectId };
  }

}
