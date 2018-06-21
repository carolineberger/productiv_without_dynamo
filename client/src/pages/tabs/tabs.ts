import { Component } from '@angular/core';

import { overviewPage } from '../overview/overview';
import { trackPage } from '../track/track';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = trackPage;
  tab2Root = overviewPage;
  

  constructor() {

  }
}
