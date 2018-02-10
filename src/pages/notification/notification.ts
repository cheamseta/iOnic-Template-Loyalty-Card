import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LStorage } from '../../app/app.services';

@Component({
  selector: 'notification-page',
  templateUrl: 'notification.html'
})
export class TheNotifications {

  currentUserData : any = {};
  notificationArray : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private lstorage : LStorage, public priv : ViewController) {
    this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
  }

  ionViewDidLoad () {

      this.notificationArray = [
        {
          isRead : false,
          username : "Nary Chan",
          action : "liked coupon",
          timestamp : 1517378877
        },
        {
          isRead : false,
          username : "Leap",
          action : "liked coupon",
          timestamp : 1517385877
        },
        {
          isRead : true,
          username : "Tharo",
          action : "liked coupon",
          timestamp : 1517375877
        }
      ]

  }

  closePage() {
    this.priv.dismiss();
  }

}
