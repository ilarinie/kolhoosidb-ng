import { Commune } from '../models/commune';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-communelist',
  templateUrl: './communelist.component.html',
  styleUrls: ['./communelist.component.scss']
})
export class CommunelistComponent implements OnInit {

  communes: Commune[];
  user: User;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.unSelectCommune();
    this.apiService.getCommunes().then((communes) => this.communes = communes)
    this.user = this.apiService.current_user;
    this.apiService.getCurrentUser().then((user) => this.user = user)
  }

  selectCommune(commune: Commune) {
    this.apiService.selectCommune(commune);
    this.router.navigate(['/dashboard'])
  }

  logout = () => {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
