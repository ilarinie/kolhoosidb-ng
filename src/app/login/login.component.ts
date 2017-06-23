import { fadeIn } from '../animations';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ fadeIn ]
})
export class LoginComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  username: string;
  password: string;
  loading: boolean = false;
  disableRegister: boolean = false;
  errorText: string;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }
  get diagnostic() {
    return this.username + ' ' + this.password;
  }

  login = () => {
    this.errorText = null;
    this.loading = true;
    this.apiService.login(this.username, this.password).then((response) => {
      console.log(response);
      localStorage.setItem('token', 'Bearer ' + response.jwt);
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      this.loading = false;
      console.log(error);
      console.log(typeof (error));
      if (error.status === 404) {
        this.errorText = 'Login failed, wrong username or password entered.';
      } else {
        this.errorText = error;
      }
    })
  }

  handleRegister = (event: any) => {
    this.disableRegister = true;
    const user: User = event as User;
    this.apiService.saveUser(user).then((response) => {
     alert('Created succesfully, you can log in');
     this.loading = false;
     }).catch((error) => {
     this.loading = false;
     this.handleError(error);
     this.disableRegister = false;
     });
  }

  handleError = (errors: any) => {
    let errorText: string = '';

    errors.map((error, index) => {
      errorText = errorText + error + '\n';
    });
    alert(errorText);
  }

}
