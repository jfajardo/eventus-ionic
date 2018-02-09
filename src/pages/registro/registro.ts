import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
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
    if (this.userData.first_name === '') {
      this.mostrarMensaje('Ingrese su Nombre!');
    }else if (this.userData.last_name === '') {
      this.mostrarMensaje('Ingrese su Apellido!');
    }else if (this.userData.username === '') {
      this.mostrarMensaje('Ingrese su Usuario!');
    }else if (this.userData.email === '') {
      this.mostrarMensaje('Ingrese su Email!');
    }else if (this.userData.password === '') {
      this.mostrarMensaje('Ingrese su Contraseña!');
    }else{
      this.authService.postData(this.userData, 'auth/register/').then((result)=>{
        if (result.hasOwnProperty('id')) {
            this.mostrarMensaje('Registro Exitoso!');
            this.navCtrl.pop();
        }else{
          this.mostrarMensaje('Por favor revise la información!');
        }
      });
    }
  }

}
