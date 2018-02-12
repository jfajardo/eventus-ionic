import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  formulario: FormGroup;
  usuario: any;

  constructor(
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    public formBuilder: FormBuilder
  ) {
    this.formulario = this.crearFormulario();
  }

  private crearFormulario(){
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      avatar: [''],
    });
  }

  ionViewWillEnter(){
    this.authService.getData('auth/me').then((result)=>{
      console.log(result)
      console.log(this.formulario.value)
      this.usuario = result;
      this.formulario.value=result;
    });
  }
}
