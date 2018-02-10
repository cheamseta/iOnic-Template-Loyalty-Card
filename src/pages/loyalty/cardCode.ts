import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'cardCode-page',
  templateUrl: 'cardCode.html'
})
export class CardCode {

  size: number = 230;
  cardData: any = {};
  totalPoint: number = 0;

  constructor(public navCtrl: NavController,  public param: NavParams, public vCtrl: ViewController) {
    if (param.get("cardData")) {
      this.cardData = param.get("cardData");
      this.calcucatePoint();
    };

  }

  calcucatePoint() {
    if (this.cardData.points) {
      for (let point of this.cardData.points) {
        this.totalPoint += Number(point.point);
      }
    }
  }

  dismissPage() {
    this.vCtrl.dismiss();
  }

}
