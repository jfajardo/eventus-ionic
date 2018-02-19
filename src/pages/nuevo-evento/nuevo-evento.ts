import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the NuevoEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-evento',
  templateUrl: 'nuevo-evento.html',
})
export class NuevoEventoPage {
  formulario: FormGroup;
  evento: any;
  imagen: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public authService: AuthServiceProvider,
    private imagePicker: ImagePicker) {
      this.formulario = this.crearFormulario();
      this.evento = {
        nombre: '',
        fecha: '',
        direccion: '',
        observaciones: '',
        imagen: 'assets/imgs/noimage.jpg'
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoEventoPage');
  }

  cargarImagen() {
    let options = {
      maximumImagesCount: 1,
      width: 200,
      height: 200,
      quality: 90,
      outputType: 1
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.evento.imagen = results[i];
        this.imagen = 'data:image/jpeg;base64,'+results[i];
      }
    }, (err) => { });
  }

  private crearFormulario(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      direccion: ['', Validators.required],
      observaciones: ['', Validators.required],
    });
  }

  guardar(){
    console.log(this.evento);
    this.authService.postDataAuth(this.evento, 'cuenta/evento').then((result)=>{
      console.log(result)
      this.navCtrl.pop();
    });
  }
}
