import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  protected username:string;
  protected password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.username = '';
    this.password = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  onSignIn(username, password){
    /*Auth.signIn(username, password)
    .then(user => {
      console.log(user);
      this.navCtrl.push(TabsPage);


    })
    .catch(err => 
      {
        console.log(err);
        let toast = this.toastCtrl.create({
          message: 'Invalid username and password combination.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
    );
    */

  }
  navToSignup(){
    this.navCtrl.push(SignupPage);
  }

}
