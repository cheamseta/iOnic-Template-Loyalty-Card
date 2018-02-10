import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { TheNotifications } from '../pages/notification/notification';
import { Service, convertTimeToReadable, LStorage, AppHelper, isContainArray } from './app.services';
import { Coupons} from '../pages/coupons/coupons';
import { Loyalty} from '../pages/loyalty/loyalty';
import { CardCode } from '../pages/loyalty/cardCode';
import { Redeem } from '../pages/coupons/redeem';
import { Profile } from '../pages/profile/profile';
import { Login }  from "../pages/login/login"
import { Setting }  from "../pages/setting/setting"
import { CouponDetail} from "../pages/coupon-detail/coupon-detail";
import { Reward } from '../pages/reward-point/reward-point';
import { ClaimReward } from '../pages/reward-point/claim-reward';

import { IonicImageLoader } from 'ionic-image-loader';
import { QRCodeModule } from 'angular2-qrcode';
import { HttpModule } from '@angular/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { RecoverPassword } from '../pages/recover-password/recover-password' 
import { RedeemHistoryComponent } from '../pages/redeem-history/redeem-history';

@NgModule({
  declarations: [
    MyApp,
    Home,
    TheNotifications,
    Coupons,
    CardCode,
    Profile,
    Reward,
    CouponDetail,
    isContainArray,
    Redeem,
    ClaimReward,
    RecoverPassword,
    Login,
    Setting,
    Loyalty,
    RedeemHistoryComponent,
    convertTimeToReadable
  ],
  imports: [
    IonicImageLoader.forRoot(),
    BrowserModule,
    QRCodeModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    CardCode,
    Login,
    ClaimReward,
    TheNotifications,
    RedeemHistoryComponent,
    RecoverPassword,
    Coupons,
    CouponDetail,
    Reward,
    Setting,
    Redeem,
    Profile,
    Loyalty
  ],
  providers: [StatusBar,SplashScreen,Service, BarcodeScanner,  LStorage, AppHelper, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
