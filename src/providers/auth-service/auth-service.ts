import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


let apiUrl = 'http://jfajardo.pythonanywhere.com/';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(data, route){
    return new Promise((resolve, reject) =>{
      let headers = new Headers({'Content-Type': 'application/json'});
      this.http.post(apiUrl+route, JSON.stringify(data), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        resolve(err.json());
      });
    });
  }
}
