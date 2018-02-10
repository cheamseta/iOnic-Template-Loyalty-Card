import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Service } from '../../app/app.services';
import { Redeem } from "./redeem";

@Component({
  selector: 'coupons-page',
  templateUrl: 'coupons.html'
})
export class Coupons {

  couponArray: any[] = [];

  constructor(public navCtrl: NavController, public services: Service, public modCtrl: ModalController) { }

  ionViewDidLoad() {
    this.couponArray = this.services.getVRecommendCouponFeeds(100, 0, 'coupon');
  }

  showRedeem(data) {
    let modal = this.modCtrl.create(Redeem, {
      cardData: data
    });
    modal.present();
  }

}
