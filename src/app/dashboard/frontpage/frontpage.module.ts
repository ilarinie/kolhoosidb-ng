import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrontpageComponent} from "./frontpage.component";
import {BudgetModule} from "../budget/budget.module";
import {NewPurchaseModule} from "../new-purchase/new-purchase.module";
import {ProfileModule} from "../profile/profile.module";
import {TasksModule} from "../tasks/tasks.module";
import {UsersModule} from "../users/users.module";

@NgModule({
  imports: [
    CommonModule,
    BudgetModule,
    NewPurchaseModule,
    ProfileModule,
    TasksModule,
    UsersModule
  ],
  declarations: [
    FrontpageComponent
  ],
  exports: [
    FrontpageComponent
  ]
})
export class FrontpageModule { }
