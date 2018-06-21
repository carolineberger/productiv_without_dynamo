import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { ConfirmationCodePage } from '../confirmation-code/confirmation-code';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  protected username:string;
  protected email:string;
  protected password:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController
    ) {
      this.username = '';
      this.email = '';
      this.password = '';

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onSignIn(username, email, password) {
    console.log(username);
    let phone_number = '';
    /*Auth.signUp({
      username,
      password,
      attributes: {
          email,         // optional
          phone_number
      },
      validationData: []  //optional
  })
  .then(data => {
    console.log(data);
    this.navCtrl.push(ConfirmationCodePage);
    let toast = this.toastCtrl.create({
      message: "A confirmation code has been sent to your email",
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    })
  .catch(err => 
    {
      console.log(err);      
      let toast = this.toastCtrl.create({
        message: "All fields must be completed and password must be 6 or more characters long.",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();

    });
    */
  }
  

}
