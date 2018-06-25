import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ActivityModel } from '../../models/ActivityModel';
import { Observable } from 'rxjs/Observable';
// the api/server side code is running on
let base_url = "https://productivbackend.herokuapp.com/activity" 

@Injectable()
// Activity Service Provider
// Interface for the pages to modify
// the Activity resource
// HTTP post(currentActivity, userId, date)
// HTTP get -> Observable<Array<ActivityModel>>
// HTTP delete(activity:ActivityModel)

export class ActivityServiceProvider {
  constructor(private http: HttpClient) {

  }
  public postActivity(currentActivity, userId, date) {
    this.http.post(base_url, {
      userId: userId,
      date: date,
      activityTitle: currentActivity.activityTitle,
      startTime: currentActivity.startTime,
      endTime: currentActivity.endTime,
      description: currentActivity.description
    }).subscribe();
  }
  public getActivities(): Observable<Array<ActivityModel>>{

    return this.http.get<Array<ActivityModel>>(base_url);
    
  }

  public deleteActivity(activity:ActivityModel): Observable<Object>{
    return this.http.delete(base_url + "/" + activity._id);
  }

}
