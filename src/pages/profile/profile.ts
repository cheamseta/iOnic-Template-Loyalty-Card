import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LStorage, AppHelper } from '../../app/app.services';
import { Reward } from '../../pages/reward-point/reward-point';
import { RedeemHistoryComponent } from '../../pages/redeem-history/redeem-history';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class Profile {
  currentUserData: any;
  isShop: boolean = false;

  loyaltyCardSubscr: any;
  updateCardSubscr: any;

  constructor(public navCtrl: NavController, private barcode : BarcodeScanner, public navParams: NavParams, private lstorage: LStorage, public helper: AppHelper, public modCtrl: ModalController) {
    this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
  }

  ionViewDidLoad() { }

  activateLoyaltyCard() {
    this.barcode.scan().then((barcodeData) => {
      this.helper.presentToast("Successfully scan it");
    }, (err) => {
      this.helper.presentToast("Sorry !! SOMETHING WENT WRONG PLEASE TRY AGAIN");
    });
  }

  showRewardPoint() {
    this.modCtrl.create(Reward).present();
  }

  ngOnDestroy() {
    if (this.loyaltyCardSubscr) { this.loyaltyCardSubscr.unsubscribe(); }
    if (this.updateCardSubscr) { this.updateCardSubscr.unsubscribe(); }
  }

  showRedeemHistory() {
    this.navCtrl.push(RedeemHistoryComponent);
  }

}
