import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ActivityModel } from '../../models/ActivityModel';
import { Observable } from 'rxjs/Observable';



/*
  Generated class for the ActivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let base_url = "http://localhost:3000/activity"

@Injectable()
export class ActivityServiceProvider {
  constructor(private http: HttpClient) {

  }
  public postActivity(currentActivity, userId, date) {
    console.log(currentActivity);
    this.http.post(base_url, {
      userId: userId,
      date: date,
      activityTitle: currentActivity.activityTitle,
      startTime: currentActivity.startTime,
      endTime: currentActivity.endTime,
      description: currentActivity.description
    }).subscribe(res => {
      console.log(res);
    }, err => {
      console.log("Error occured", err);
    });
  }
  public getActivities(): Observable<Array<ActivityModel>>{
    return this.http.get<Array<ActivityModel>>(base_url);
  }

  public deleteActivity(activity:ActivityModel): Observable<Object>{
    console.log(activity._id);
    return this.http.delete(base_url + "/" + activity._id);



  }

}
