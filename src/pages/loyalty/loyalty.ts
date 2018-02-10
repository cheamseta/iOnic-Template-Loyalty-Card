import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CardCode } from './cardCode'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import {  AppHelper } from '../../app/app.services';


@Component({
  selector: 'loyalty-page',
  templateUrl: 'loyalty.html'
})
export class Loyalty {

  loyaltyArray: any[] = [];

  constructor(public navCtrl: NavController, private helper : AppHelper, public modCtrl: ModalController, private barcode : BarcodeScanner) { }

  ionViewDidLoad() {

    this.loyaltyArray = [
      {
      placeName : "Starbuck",
      imageProfile : "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Linkedin-128.png",
      expiredDate : 1517370117,
      textColor : '#939303',
      backgroundColor : '#eee',
      code : "08484404",
      imageUrl : "https://cdn2.iconfinder.com/data/icons/Siena/256/credit_card%20blue.png"
    },
    {
      placeName : "Costa",
      imageProfile : "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Linkedin-128.png",
      expiredDate : 1517370117,
      textColor : '#fff',
      backgroundColor : '#633974',
      code : "0849383404",
      imageUrl : "https://cdn2.iconfinder.com/data/icons/Siena/256/credit_card%20green.png"
    },
    {
      placeName : "Amazon",
      imageProfile : "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Linkedin-128.png",
      expiredDate : 1517370117,
      textColor : '#fff',
      backgroundColor : '#1F618D',
      code : "0849383404",
      imageUrl : "https://cdn2.iconfinder.com/data/icons/Siena/256/credit_card%20red.png"
    }
  ]

  }

  showQRModal(data) {
    this.modCtrl.create(CardCode, {
      cardData: data
    }).present();
  }

  scanToIssueNewCard() {
    this.barcode.scan().then((barcodeData) => {
      this.helper.presentToast("Successfully scan it");
    }, (err) => {
      this.helper.presentToast("Sorry !! SOMETHING WENT WRONG PLEASE TRY AGAIN");
    });
  }

}
