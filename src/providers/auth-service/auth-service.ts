import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

//URL de nuestra API
//let apiUrl = 'http://jfajardo.pythonanywhere.com/';
let apiUrl = 'http://127.0.0.1:8000/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  // data: Datos que se envian al API - route:ruta de nustra url
  // funcion para enviar datos por medio de POST a nuestro servidor
  // Promise: representa un valor que puede estar disponible ahora, en el futuro, o nunca
  postData(data, route) {
    return new Promise((resolve, reject) => {
      //headers - se utiliza para pasar información adicional como tokens y formato de datos
      let headers = new Headers({ 'Content-Type': 'application/json' });
      this.http.post(apiUrl + route, JSON.stringify(data), { headers: headers }).
        subscribe(res => {
          resolve(res.json());
        }, (err) => {
          resolve(err.json());
        });
    });
  }

  getData(route) {
    return new Promise((resolve) => {
      //headers - se utiliza para pasar información adicional como tokens y formato de datos
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `token ${localStorage.getItem('token')}`
      });
      this.http.get(apiUrl + route, {headers: headers}).subscribe(res => {
          resolve(res.json());
        }, error => {
          resolve(error.json());
        });
    });
  }
}
