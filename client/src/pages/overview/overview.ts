import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ActivityServiceProvider } from '../../providers/activity-service/activity-service'
import { ActivityModel } from '../../models/ActivityModel'

// OVERVIEW PAGE
// uses ActivityServiceProvider to fetch all 
// of the activities associated with a certain user
// from overview, user is able to delete an activity

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})

export class overviewPage {
  // Activities array follows the structure
  // of the backend database entries
  // userId would be passed through an authentication
  // service
  private Activities: Array<ActivityModel>;
  private userId: string;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private activityServiceProvider: ActivityServiceProvider
  ) {
    this.userId = "Test User"; //ideally, userId is fetched from
    // an authentication service
    this.refreshActivities();

  }
  /*
logout(){
  
  Auth.signOut()
  .then(data => {
    console.log(data);
    this.navCtrl.setRoot(LoginPage);
  })
  .catch(err => console.log(err));

}
*/
  refreshActivities() {
    this.activityServiceProvider.getActivities()
      .subscribe(data => {
        this.Activities = data.filter(activity => activity.userId === this.userId)
      });
    // subscribe to method, trap activities in callback, filter activities by userId
    // only the Activities associated with this userId will be considered
  }
  // when user clicks on an activity, an alert shows
  // with more information about the activity
  // from the alert, the user can delete said activity
  showMore(activity: ActivityModel) {
    if (activity.description == null) {
      activity.description = '';
    }
    let alert = this.alertCtrl.create({
      title: activity.activityTitle,
      message: activity.startTime + ' - ' + activity.endTime + '<br/>' + activity.description,
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            // Delete item from Activities list using service provider
            this.Activities = this.Activities.filter(Activity => Activity !== activity);
            this.activityServiceProvider.deleteActivity(activity).subscribe();
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
