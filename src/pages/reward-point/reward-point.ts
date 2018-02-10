import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { LStorage } from '../../app/app.services';
import { ClaimReward } from './claim-reward';

@Component({
  selector: 'reward-point-page',
  templateUrl: 'reward-point.html'
})
export class Reward {

  currentUserData: any;

  constructor(public navCtrl: NavController, public mCtrl : ModalController, public navParams: NavParams, private lstorage: LStorage, public vCtrl: ViewController) {
    this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
  }

  ionViewDidLoad() {

  }

  showClaimReward() {
    this.mCtrl.create(ClaimReward).present();
  }

  dismissPage() {
    this.vCtrl.dismiss();
  }

}
