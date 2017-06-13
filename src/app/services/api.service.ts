import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';
import {User} from '../models/user';

@Injectable()
export class ApiService {

  apiUrl = 'https://kolhoosidb-api.herokuapp.com';
  // apiUrl = 'http://localhost:3000';
  current_user: User;

  userSub: Subject<User> = new Subject<User>();

  constructor(private http: Http) {
    this.current_user = JSON.parse(localStorage.getItem('current_user'));
    if (this.current_user) {
      this.userSub.next(this.current_user);
    }
  }

  getHeader = () => {
    const headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));
    headers.append('Accept', 'application/json');
    return headers;
  }



  changeUser = (user: User) => {
    localStorage.setItem('current_user', JSON.stringify(user));
    this.current_user = user;
    this.userSub.next(this.current_user);
  }



  login = (username: string, password: string ) => {
    return this.http.post(this.apiUrl + '/user_token', { auth: { username: username, password: password}})
               .toPromise()
               .then((response) => {
                  this.changeUser(response.json().user);
                  return response.json()
               })
               .catch(this.handleError);
  }

  getCurrentUser = (): Promise<User> => {
    return this.http.get(this.apiUrl + '/current_user', { headers: this.getHeader(), body: ''})
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  saveUser = (user: User) => {
    if (user.id) {
      return this.putUser(user);
    }
    return this.postUser(user);
  }

  postUser = (user: User) => {
    return this.http.post(this.apiUrl + '/users', {user: user},  { headers: this.getHeader() })
      .toPromise()
      .then((response) => {
        response.json();
      })
      .catch(this.handleError);
  }

  putUser = (user: User) => {
    let headers = this.getHeader();
    return this.http.put(this.apiUrl + '/users/' + user.id, user ,  { headers: headers })
      .toPromise()
      .then((response) => {
        response.json();
      })
      .catch(this.handleError);
  }

  changeUserPassword = (password: string, password_confirmation: string) => {
    return this.http
      .put(this.apiUrl + '/change_password', {password: password, password_confirmation: password}, {headers: this.getHeader()})
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError)
  }


  handleError = (error: any): Promise<any> => {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }



}
