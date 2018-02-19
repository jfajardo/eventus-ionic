import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { BienvenidaPage } from '../bienvenida/bienvenida';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider) {

  }

  cerrarSesion(){
    this.authService.postDataAuth({}, 'auth/logout/').then((result)=>{
      if(result === null){
        localStorage.clear();
        this.navCtrl.setRoot(BienvenidaPage);
      }
    });
  }
}
