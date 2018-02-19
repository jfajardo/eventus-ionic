import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { EventoPage } from '../evento/evento';
import { NuevoEventoPage } from '../nuevo-evento/nuevo-evento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eventos:any;

  constructor(
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
  ) {
    this.eventos = [];
  }

  ionViewWillEnter(){
    this.traerEventos();
  }

  traerEventos(){
    this.authService.getData('cuenta/eventos').then((result)=>{
      console.log(result)
      this.eventos = result;
    });
  }

  actualizar(refresher) {
    setTimeout(() => {
      this.traerEventos();
      refresher.complete();
    }, 1000);
  }

  verEvento(evento){
    console.log(evento);
    this.navCtrl.push(EventoPage, {evento:evento});
  }

  nuevoEvento(){
    this.navCtrl.push(NuevoEventoPage);
  }
}
