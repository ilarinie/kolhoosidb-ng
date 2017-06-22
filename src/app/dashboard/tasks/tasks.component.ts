import { fadeIn, slideInDownAnimation } from '../../animations';
import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Commune} from '../../models/commune';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  animations: [fadeIn]
})
export class TasksComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  commune: Commune;

  constructor(private apiService: ApiService) {
    this.commune = apiService.selected_commune;
    apiService.communeSub.subscribe(
      commune => {
        this.commune = commune;
      }
    )
   }

  ngOnInit() { }

}
