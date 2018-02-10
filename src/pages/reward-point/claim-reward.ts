import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LStorage } from '../../app/app.services';

@Component({
  selector: 'claim-reward-page',
  templateUrl: 'claim-reward.html'
})
export class ClaimReward {

  currentUserData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private lstorage: LStorage, public vCtrl: ViewController) {
    this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
  }

  ionViewDidLoad() {

  }

  dismissPage() {
    this.vCtrl.dismiss();
  }

}
