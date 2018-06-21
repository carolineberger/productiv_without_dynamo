import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { ActivityModel } from '../../models/ActivityModel'
import { LoginPage } from '../login/login';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Activity } from '../../../../api/controllers/productivController';

//import { DynamoDB } from '../../providers/provider'

// you want to change this 
let base_url = "http://localhost:3000/"

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
  

  //public db: DynamoDB;

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController, 
    private toastCtrl:ToastController,
    private http:Http) { 
      this.populatePageVars();
      this.userId = "Test User";

      /*
       Auth.currentCredentials()
      .then(credentials => {
        this.userId = credentials.identityId;
        this.populatePageVars();
      })
      .catch(err => {
        this.logout(); //logout immediately if the credentials aren't valid
      });

 
      */
  }

  private populatePageVars() {
    this.myDate = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    this.myTime = new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
    // Activities array should be connected to list_all_activities
    this.Activities = new Array<ActivityModel>(); 
    this.currentActivity = new ActivityModel();
  

  }
  getOutlook() {
              var url = 'localhost:3000/productiv';
              var response = this.http.get(url).map(res => res.json());
              return response;
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
        startTime: this.myStartTime.toDateString(),
        endTime: this.myEndTime.toDateString(),
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

      // THIS IS WHERE THE create_an_activity -> POST

      // SAVE ACTIVITY TO  
/*
      this.http.get(base_url + "productiv")
  .map(res => res.json())
     .subscribe(data => {
      this.currentActivity = data;
        console.log(this.currentActivity)
      });
      */

      this.currentActivity = new ActivityModel();
    
      // want to do the same thing here for the posting => will call the 5000 one 
     /*
      this.http.get(base_url + "api/outlook")
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(this.data)
      });
      */
     
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
            this.Activities = this.Activities.filter(item => item !== item);
            // delete_an_activity, DELETE

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
