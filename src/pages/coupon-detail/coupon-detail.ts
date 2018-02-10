import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LStorage, AppHelper } from '../../app/app.services';

@Component({
  selector: 'coupon-detail-page',
  templateUrl: 'coupon-detail.html'
})
export class CouponDetail {

  currentUserData: any = {};
  userArray: any[] = [];
  couponDetail: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private lstorage: LStorage, public priv: ViewController, public helper: AppHelper) {
    this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
    if (this.navParams.get("couponDetail")) { this.couponDetail = this.navParams.get("couponDetail"); }
  }

  ionViewDidLoad() {

  }

  likeDislikeAction() {
    this.couponDetail.likes.push("user");
  }

    addCoupon(vrmId: string) {
      this.helper.presentToast("Sucessfully add to your coupon collections");
  }


  closePage() {
    this.priv.dismiss();
  }

}
