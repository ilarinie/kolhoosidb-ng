import { Commune } from '../models/commune';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';
import {User} from '../models/user';
import {commune1, commune2} from './mock-data';
import { Task } from '../models/task';
import { TaskCompletion } from '../models/task-completion';

// Feikkikommuuneja testausta varten
let fakeCommunes = [
  commune1,
  commune2
]

@Injectable()
export class ApiService {

  apiUrl = 'https://kolhoosidb-api.herokuapp.com';
  // apiUrl = 'http://localhost:3000';
  current_user: User;
  selected_commune: Commune = null;

  userSub: Subject<User> = new Subject<User>();
  communeSub: Subject<Commune> = new Subject<Commune>();

  constructor(private http: Http) {
    this.current_user = JSON.parse(localStorage.getItem('current_user'));
    this.selected_commune = JSON.parse(localStorage.getItem('selected_commune'))
    if (this.current_user) {
      this.userSub.next(this.current_user);
    }
    if (this.selected_commune) {
      this.communeSub.next(this.selected_commune);
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

  selectCommune = (commune: Commune) => {
    this.selected_commune = commune;
    localStorage.setItem('selected_commune', JSON.stringify(commune));
    this.communeSub.next(this.selected_commune);
  }
  unSelectCommune = () => {
    this.selected_commune = null;
    localStorage.removeItem('selected_commune');
    this.communeSub.next(this.selected_commune);
  }

  getCommunes = () => {
    return Promise.resolve(fakeCommunes);
  }

  completeTask = (task: Task): Promise<Task> => {
    const completion: TaskCompletion = new TaskCompletion();
    completion.task_id = task.id;
    completion.user_id = this.current_user.id;
    completion.user_name = this.current_user.name;
    completion.created_at = new Date();
    completion.id = 9999999;
    task.task_completions.push(completion);
    this.communeSub.next(this.selected_commune);
    return new Promise((resolve) => {
      setTimeout(() => resolve(task), 1000);
    })
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
    const headers = this.getHeader();
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
    return Promise.reject(error.message || error);
  }



}
