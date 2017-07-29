import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {ProfileComponent} from './profile/profile.component';
import {BudgetComponent} from "./budget/budget.component";
import {UsersComponent} from "./users/users.component";
import {NewPurchaseComponent} from "./new-purchase/new-purchase.component";
import {TasksModule} from "./tasks/tasks.module";
import {ProfileModule} from "./profile/profile.module";
import {BudgetModule} from "./budget/budget.module";
import {NewPurchaseModule} from "./new-purchase/new-purchase.module";
import {UsersModule} from "./users/users.module";
import { FrontpageComponent } from './frontpage/frontpage.component';
import {FrontpageModule} from "./frontpage/frontpage.module";


export const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: 'tasks', component: TasksComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'budget', component: BudgetComponent},
      { path: 'new_purchase', component: NewPurchaseComponent},
      { path: 'users', component: UsersComponent},
      { path: '**', component: FrontpageComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    TasksModule,
    ProfileModule,
    BudgetModule,
    NewPurchaseModule,
    UsersModule,
    FrontpageModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
