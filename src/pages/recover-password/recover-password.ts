import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LStorage } from '../../app/app.services';

@Component({
  selector: 'recover-password-page',
  templateUrl: 'recover-password.html'
})
export class RecoverPassword {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  currentUserData: any;
  recoverOption : string = "email";

  constructor(public navCtrl: NavController, public navParams: NavParams,  private lstorage: LStorage, private vCtrl : ViewController) {
    this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
  }

  ionViewDidLoad() {

  }

   closePage() {
    this.vCtrl.dismiss();
  }



}
