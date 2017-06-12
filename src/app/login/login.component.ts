import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loading: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }
  get diagnostic() {
    return this.username + ' ' + this.password;
  }

  login = () => {
    this.loading = true;
    this.apiService.login(this.username, this.password).then((response) => {
      localStorage.setItem('token', 'Bearer: ' + response.jwt);
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      this.loading = false;
      console.log('loginissa: ' + error);
    })
  }

}
