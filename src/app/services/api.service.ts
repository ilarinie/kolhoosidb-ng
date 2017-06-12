import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  apiUrl = 'https://kolhoosidb-api.herokuapp.com';

  constructor(private http: Http) { }


  login = (username: string, password: string ) => {
    return this.http.post(this.apiUrl + '/user_token', { auth: { username: username, password: password}})
               .toPromise()
               .then((response) => response.json())
               .catch(this.handleError);
  }


  handleError = (error: any): Promise<any> => {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }



}
