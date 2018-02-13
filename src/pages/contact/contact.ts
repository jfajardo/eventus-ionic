import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  formulario: FormGroup;
  usuario:any;
  //foto: string = null;

  constructor(
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    public formBuilder: FormBuilder,
    private camara: Camera
  ) {
    this.usuario= {
      first_name: '',
      last_name: '',
      avatar: '',
      email: '',
      username: ''
    }
    this.formulario = this.crearFormulario();
  }

  private crearFormulario(){
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
    });
  }

  ionViewWillEnter(){
    this.authService.getData('auth/me/').then((result)=>{
      console.log(result)
      this.usuario = result;
    });
  }

  actualizarInformacion(){
    this.authService.putData(this.formulario.value, 'auth/me/').then((result)=>{
      console.log(result)
      if(result.hasOwnProperty('id')){
        alert('Información Actualizada');
      }else{
        alert('Tenemos un problema');
      }
    });
  }

  
}
