import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = localStorage.getItem('token') !== null ? TabsPage:BienvenidaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      console.log(localStorage.getItem('token'));
    

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
