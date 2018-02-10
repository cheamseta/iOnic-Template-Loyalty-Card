import { Component } from '@angular/core';

@Component({
  selector: 'redeem-history',
  templateUrl: 'redeem-history.html'
})
export class RedeemHistoryComponent {

  redeems : any[] = [];

  constructor() {

    this.redeems = [
      {
        timestamp : 1518101656,
        redeem : "10 Dollar"
      },
      {
        timestamp : 1518101656,
        redeem : "5 Dollar"
      },
      {
        timestamp : 1518101656,
        redeem : "5 Dollar"
      }
    ]

  }

}
