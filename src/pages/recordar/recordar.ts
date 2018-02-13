import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-recordar',
  templateUrl: 'recordar.html',
})
export class RecordarPage {

  formulario: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    private alertCtrl: AlertController,
    public formBuilder: FormBuilder) {
      this.formulario = this.crearFormulario();
  }

  private crearFormulario(){
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  recordarContrasena(){
    console.log(this.formulario.value)
    console.log(this.formulario.valid)

      this.authService.postData(this.formulario.value, 'cuenta/cambiar-clave').then((result)=>{
        console.log(result)
        if(result['actualizado']){
          this.alertCtrl.create({
            title: 'Información',
            subTitle: `Tu nueva clave es ${result['mensaje']}`,
            buttons: ['Aceptar']
          }).present();
        }else{
          this.alertCtrl.create({
            title: 'Información',
            subTitle: result['mensaje'],
            buttons: ['Aceptar']
          }).present();
        }
      });
  }
}
