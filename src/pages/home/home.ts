import { Component } from '@angular/core';
import { Service, AppHelper, LStorage } from '../../app/app.services';
import { NavController, ModalController } from 'ionic-angular';
// import { IBeacon } from 'ionic-native';
import { TheNotifications } from '../../pages/notification/notification';
import { CouponDetail } from "../../pages/coupon-detail/coupon-detail";

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class Home {

  feedArray: any[] = [];
  device: any[] = [];
  currentUserData: any;

  allRecommSubscr: any;

  segmentName: string = "coupon";
  isLoaded : boolean = true;

  constructor(public navCtrl: NavController, private services: Service, private modCtrl: ModalController, private helper: AppHelper, private lstorage: LStorage) {
    this.currentUserData = this.lstorage.localStorageGETCurrentUserData();
  }

  ionViewDidLoad() {
    this.feedArray = this.services.getVRecommendCouponFeeds(100, 0, 'coupon');
  }

  showCouponDetail(coupon: any) {
    this.modCtrl.create(CouponDetail, {
      couponDetail: coupon
    }).present();
  }

  addCoupon() {
    this.helper.presentToast("Sucessfully add to your coupon collections");
  }

  notification() {
    let modal = this.modCtrl.create(TheNotifications);
    modal.present();
  }

  checkFacebookAuthentication() {

  }

  iBeaconRequest() {

    // IBeacon.requestAlwaysAuthorization();
    // // create a new delegate and register it with the native layer
    // let delegate = IBeacon.Delegate();

    // // Subscribe to some of the delegate's event handlers
    // delegate.didRangeBeaconsInRegion()
    //   .subscribe(
    //   data => {
    //     console.log('didRangBeaconsInRegion: ', JSON.stringify(data));
    //   }, error => console.log("error")
    //   );

    // delegate.didStartMonitoringForRegion()
    //   .subscribe(
    //   data => console.log('didStartMonitoringForRegion: ', JSON.stringify(data)),
    //   error => console.log("error")
    //   );

    // delegate.didEnterRegion()
    //   .subscribe(
    //   data => {
    //     console.log('didEnterRegion: ', JSON.stringify(data));
    //   });

    // let beaconRegion = IBeacon.BeaconRegion("user", this.services.generateUUID());

    // IBeacon.startMonitoringForRegion(beaconRegion)
    //   .then(
    //   () => console.log('Native layer recieved the request to monitoring'),
    //   error => console.error('Native layer failed to begin monitoring: ', error)
    //   );
  }

  video() {
  
  }

  ngOnDestroy() {
    if (this.allRecommSubscr) { this.allRecommSubscr.unsubscribe(); }
  }

}
