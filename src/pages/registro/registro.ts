import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {TabsPage} from '../tabs/tabs';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  userData = {
    first_name: '',
    last_name: '',
    email: '',
    username:"",
    password:""
  };
  responseData:any;

  constructor(
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    private alertCtrl: AlertController
  ) {
  }

  mostrarMensaje(mensaje:string) {
    let alert = this.alertCtrl.create({
      title: 'Información',
      subTitle: mensaje,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrarme(){
    this.authService.postData(this.userData, 'auth/register/').then((result)=>{
      console.log(result);
      if (result.hasOwnProperty('id')) {
          this.mostrarMensaje('Registro Exitoso!');
          this.navCtrl.pop();
      }else{
        this.mostrarMensaje('Por favor revise la información!');
      }
    });
  }

}
