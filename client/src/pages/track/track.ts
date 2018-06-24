import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ViewController } from 'ionic-angular';
import { ActivityModel } from '../../models/ActivityModel'
import {ActivityServiceProvider } from '../../providers/activity-service/activity-service'

@Component({
  selector: 'page-track',
  templateUrl: 'track.html'
})
export class trackPage {
  private myDate: string;
  private myTime: string;
  private myStartTime: Date;
  private myEndTime: Date;
  private description: string;
  private activityTitle: string;
  private Activities: Array<ActivityModel>;
  private currentActivity: ActivityModel;
  private userId: string;

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private toastCtrl:ToastController,
    private activityServiceProvider:ActivityServiceProvider) {
      this.populatePageVars();
      this.userId = "Test User";
      this.refreshPage();
  
      

  }

  private refreshPage() {
  
    this.myTime = new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
    this.activityServiceProvider.getActivities()
    .subscribe(data => {
      // only activities for this user and this current date
      this.Activities = data.filter(activity => activity.userId === this.userId)
      .filter(activity => activity.date === this.myDate);
      // all users activities -> this.Activities = data.filter(activity => activity.userId === this.userId)
    });

    
  }

  private populatePageVars() {
    this.myDate = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    this.myTime = new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
    this.currentActivity = new ActivityModel();
  }


  addActivity() {
    if( this.activityTitle == null ){
      this.showError('Activity must have a title.');
    }
    else if(this.myStartTime == null || this.myEndTime == null){
      this.showError('Activity must have a start and end time.')
    }
    else if (this.myStartTime > this.myEndTime){
      this.showError('Start time must be earlier than end time.');
    }
    else {
      this.currentActivity = {
        userId: this.userId,
        date: this.myDate,
        activityTitle: this.activityTitle,
        startTime: this.myStartTime.toString(),
        endTime: this.myEndTime.toString(),
        description: this.description,
      };

      this.Activities.push(this.currentActivity);
      this.Activities.sort(function (a, b) {
        if (a.startTime < b.startTime)
          return -1;
        else if (a.startTime == b.startTime)
          return 0;
        else
          return 1;
      });

      this.activityServiceProvider.postActivity(this.currentActivity, this.userId, this.myDate);
      this.refreshPage();

      this.currentActivity = new ActivityModel();

      this.clearForm();
    }
  }


  
  

  private clearForm() {
    this.activityTitle = null;
    this.myStartTime = null;
    this.myEndTime = null;
    this.description = null;
  }

  showMore(item) {
    if (item.description == null){
      item.description = '';
    }
    let alert = this.alertCtrl.create({
      title: item.activityTitle,
      message: item.startTime + ' - ' + item.endTime + '<br/>' + item.description ,
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            // Delete item from Activities list, might make sense for this to be move elsewhere
            this.Activities = this.Activities.filter(Activity => Activity !== item);
            console.log(item);
            this.activityServiceProvider.deleteActivity(item).subscribe();

          }
        },
        {
          text: 'Close',
          role: 'cancel',
        }]
    });
    alert.present();
  }

  private showError(errorMessage) {
    let toast = this.toastCtrl.create({
      message: errorMessage,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

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