import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})

export class EventoPage {
  evento: any;
  //2222
  map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //OJOOO
    public geolocation: Geolocation,
    public alertCtrl: AlertController,
    public authService: AuthServiceProvider,
  ) {
    this.evento = navParams.get('evento');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
    //DEspues de los metodos
    this.loadMap();
  }

  loadMap(){

  let mapOptions: GoogleMapOptions = {
    camera: {
      target: {
        lat: 1.205884, // default location
        lng: -77.285787 // default location
      },
      zoom: 18,
      tilt: 30
    }
  };

  this.map = GoogleMaps.create('map_canvas', mapOptions);

  // Wait the MAP_READY before using any methods.
  this.map.one(GoogleMapsEvent.MAP_READY)
  .then(() => {
    // Now you can use all methods safely.
    this.getPosition();
  })
  .catch(error =>{
    console.log(error);
  });

}

getPosition(): void{
  this.map.getMyLocation()
  .then(response => {
    this.map.moveCamera({
      target: response.latLng
    });
    this.map.addMarker({
      title: 'My Position',
      //icon: 'blue',
      animation: 'DROP',
      position: response.latLng
    });
  })
  .catch(error =>{
    console.log(error);
  });
}

  mostrarConfirmar() {
    let confirm = this.alertCtrl.create({
      title: 'Información',
      message: 'Estás seguro de borrar este evento?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Si!',
          handler: () => {
            this.borrarEvento();
          }
        }
      ]
    });
    confirm.present();
  }

  borrarEvento(){
    this.authService.deleteData('cuenta/evento/'+this.evento.id).then((result)=>{
      console.log(result)
      if (result['eliminado']) {
        this.navCtrl.pop();
      }else{
        this.alertCtrl.create({
          title: 'Información',
          message: 'Usted no es el creador de este evento',
          buttons: ['Aceptar']
        }).present();
      }
    });
  }
}
