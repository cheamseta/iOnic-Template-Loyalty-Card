import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LStorage } from '../../app/app.services';

@Component({
  selector: 'setting-page',
  templateUrl: 'setting.html'
})
export class Setting {

  currentUserData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private lstorage: LStorage) {
    this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
  }

  ionViewDidLoad() {

  }

  signOut() {
    localStorage.clear();
    location.reload();
  }

}
