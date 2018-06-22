import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {ActivityServiceProvider } from '../../providers/activity-service/activity-service'
import { ActivityModel } from '../../models/ActivityModel'


@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class overviewPage {
  private Activities: Array<ActivityModel>;
  private userId: string;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private activityServiceProvider:ActivityServiceProvider
    
    ) {
      this.userId = "Test User";
      this.refreshActivities();
      
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
  refreshActivities(){
    this.activityServiceProvider.getActivities()
      .subscribe(data => {
      this.Activities = data.filter(activity => activity.userId === this.userId)
      });
  }
  showMore(activity:ActivityModel) {
    if (activity.description == null){
      activity.description = '';
    }
    let alert = this.alertCtrl.create({
      title: activity.activityTitle,
      message: activity.startTime + ' - ' + activity.endTime + '<br/>' + activity.description ,
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            // Delete item from Activities list, might make sense for this to be move elsewhere
            this.Activities = this.Activities.filter(Activity => Activity !== activity);
            this.activityServiceProvider.deleteActivity(activity).subscribe(() => console.log("user deleted"));
            this.refreshActivities();
          }
        },
        {
          text: 'Close',
          role: 'cancel',
        }]
    });
    alert.present();
  }


}
