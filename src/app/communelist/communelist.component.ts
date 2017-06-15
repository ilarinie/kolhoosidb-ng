import { Commune } from '../models/commune';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communelist',
  templateUrl: './communelist.component.html',
  styleUrls: ['./communelist.component.scss']
})
export class CommunelistComponent implements OnInit {

  communes: Commune[];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.unSelectCommune();
    this.apiService.getCommunes().then((communes) => this.communes = communes)
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
