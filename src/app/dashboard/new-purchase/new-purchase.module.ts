import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewPurchaseComponent} from "./new-purchase.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewPurchaseComponent
  ],
  exports: [
    NewPurchaseComponent
  ]
})
export class NewPurchaseModule { }
