import { CommuneSelectGuard } from './commune-select.guard';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { BudgetComponent } from './dashboard/budget/budget.component';
import { NewPurchaseComponent } from './dashboard/new-purchase/new-purchase.component';
import { UsersComponent } from './dashboard/users/users.component';
import { CommunelistComponent} from './communelist/communelist.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import {ProfileComponent} from './dashboard/profile/profile.component';


export const routes: Routes = [
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: 'communes', canActivate:[AuthGuard], loadChildren: './communelist/communelist.module#CommunelistModule'},
    { path: 'dashboard', canActivate:[AuthGuard, CommuneSelectGuard], loadChildren: './dashboard/dashboard.module#DashboardModule'},
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
]
