import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';


import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { overviewPage } from '../pages/overview/overview';
import { trackPage } from '../pages/track/track';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfirmationCodePage } from '../pages/confirmation-code/confirmation-code';
import { ActivityServiceProvider } from '../providers/activity-service/activity-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmationCodePage,
    overviewPage,
    trackPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule, 
    HttpClientModule
   ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmationCodePage,
    overviewPage,
    trackPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActivityServiceProvider,
  ]
})
export class AppModule {}