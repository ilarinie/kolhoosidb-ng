import { Router } from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {User} from "../models/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  userSub: any;
  user: User = new User();

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.user = this.apiService.current_user;
    this.userSub = this.apiService.userSub.subscribe(
      (user) => {
        this.user = user;
      }
    )
  }

  ngOnDestroy = () => {
    this.userSub.unsubscribe();
  }

  get userDg() {
    return JSON.stringify(this.user);
  }

  logOut = () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
