import { Commune } from '../models/commune';
import { fadeIn, slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit, HostBinding } from '@angular/core';
import { ApiService } from "../services/api.service";
import { User } from "../models/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeIn]
})
export class DashboardComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  //@HostBinding('style.position') position = 'absolute'


  userSub: any;
  communeSub: any;
  commune: Commune;
  user: User = new User();

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.user = this.apiService.current_user;
    this.userSub = this.apiService.userSub.subscribe(
      (user) => {
        this.user = user;
      }
    )
    this.commune = this.apiService.selected_commune;
    this.communeSub = this.apiService.communeSub.subscribe(
      (commune) => {
        this.commune = commune;
      }
    )
  }

  ngOnDestroy = () => {
    this.userSub.unsubscribe();
    this.communeSub.unsubscribe();
  }

  get userDg() {
    return JSON.stringify(this.user);
  }

  logOut = () => {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
