import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Coupons } from '../pages/coupons/coupons';
import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { Loyalty } from '../pages/loyalty/loyalty';
import { LStorage } from './app.services';
import { Login } from '../pages/login/login';
import { Setting } from '../pages/setting/setting';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public lstorage: LStorage, public statusBar : StatusBar, public splashScreen : SplashScreen ) {
    this.initializeApp();


    if (this.lstorage.localStorageGETCurrentUserData()) {
      this.pages = [
        { title: 'Home', component: Home },
        { title: 'My Profile', component: Profile },
        { title: 'My Coupons', component: Coupons },
        { title: 'My Loyalty Card', component: Loyalty },
        { title: 'Setting', component: Setting }
      ];
    } else {
      this.pages = [
        { title: 'Home', component: Home },
        { title: 'Login', component: Login },
        { title: 'Setting', component: Setting }
      ];
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
