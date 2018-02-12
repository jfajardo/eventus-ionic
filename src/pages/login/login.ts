import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { RecordarPage } from '../recordar/recordar';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formulario: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public authService: AuthServiceProvider,
    private alertCtrl: AlertController
  ) {
    this.formulario = this.crearFormulario();
  }

  recordarContrasena(){
    this.navCtrl.push(RecordarPage);
  }

  private crearFormulario(){
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ingresar(){
    console.log(this.formulario.value);
    this.authService.postData(this.formulario.value, 'auth/login/').then((result)=>{
      console.log(result)
      if(result.hasOwnProperty('auth_token')){
        localStorage.setItem('token', result.auth_token);
        this.navCtrl.setRoot(TabsPage);
      }else{
        this.alertCtrl.create({
          title: 'Información',
          subTitle: 'Usuaio y/o contraseña incorrecta!',
          buttons: ['Aceptar']
        }).present();
      }
    });
  }
}
