import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { trackPage } from '../track/track';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ConfirmationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-code',
  templateUrl: 'confirmation-code.html',
})
export class ConfirmationCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationCodePage');
  }
  confirmationCode(code, username){
    /*
    Auth.confirmSignUp(username, code)
    .then(data => {
      console.log(data);
      this.navCtrl.push(TabsPage);

    })
    .catch(err => {
      console.log(err)
      let toast = this.toastCtrl.create({
        message: 'Invalid confirmation code, please try again.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();});
      */
  }

}
