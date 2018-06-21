import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class overviewPage {

  constructor(public navCtrl: NavController) {

  }
  logout(){
    /*
    Auth.signOut()
    .then(data => {
      console.log(data);
      this.navCtrl.setRoot(LoginPage);
    })
    .catch(err => console.log(err));
*/
  }


}
