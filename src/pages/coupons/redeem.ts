import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { LStorage, AppHelper } from '../../app/app.services';

@Component({
  selector: 'redeem-page',
  templateUrl: 'redeem.html'
})
export class Redeem {

  size: number = 230;
  cardData: any = {};
  currentUserData: any = {};
  totalPoint: number = 0;

  constructor(public navCtrl: NavController,  public param: NavParams, public vCtrl: ViewController, public lstorage: LStorage, public helper : AppHelper) {
    if (param.get("cardData")) { this.cardData = param.get("cardData"); };
    this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
  }

  dismissPage(isRefresh : boolean) {
    this.vCtrl.dismiss({isRefresh : isRefresh});
  }

  removeAction() {
    this.helper.presentToast("Sucessfully remove your coupon");
    this.dismissPage(true);
  }

}
