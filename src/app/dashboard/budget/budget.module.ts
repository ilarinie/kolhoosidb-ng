import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BudgetComponent} from "./budget.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BudgetComponent
  ],
  exports: [
    BudgetComponent
  ]
})
export class BudgetModule { }
