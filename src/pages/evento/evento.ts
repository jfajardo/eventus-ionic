import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {
  evento: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.evento = navParams.get('evento');
    console.log('ok'+this.evento);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

}
