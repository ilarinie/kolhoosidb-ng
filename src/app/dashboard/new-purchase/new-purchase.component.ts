import { fadeIn, slideInDownAnimation } from '../../animations';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.scss'],
  animations: [fadeIn]
})
export class NewPurchaseComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
