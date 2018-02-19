import { Component } from '@angular/core';

/**
 * Generated class for the EventoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'evento',
  templateUrl: 'evento.html'
})
export class EventoComponent {

  text: string;

  constructor() {
    console.log('Hello EventoComponent Component');
    this.text = 'Hello World';
  }

}
