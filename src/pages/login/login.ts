import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RecoverPassword } from '../recover-password/recover-password';
import { Service, LStorage, AppHelper } from '../../app/app.services';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class Login {

  loginData: any = {
    username : "discounty",
    password : "discounty"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: Service, private lstorage: LStorage, public help: AppHelper, public modCtrl: ModalController) { }

  recoverPassword() {
    this.modCtrl.create(RecoverPassword).present();
  }

  userLogin() {

    if (this.loginData.username != "discounty" && this.loginData.password != "discounty") {
      this.help.presentToast("Your password is not correct");
      return;
    }

    this.help.presentLoading();
    let data = this.services.getUserByUserId("");
    this.lstorage.localStorageSETCurrentUserData(data);
    location.reload();

  }

}
