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
    {path: 'login', component: LoginComponent},
    { path: 'communes', component: CommunelistComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard, CommuneSelectGuard], canActivateChild: [AuthGuard, CommuneSelectGuard],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full'},
            { path: 'tasks', component: TasksComponent},
            { path: 'profile', component: ProfileComponent },
            { path: 'budget', component: BudgetComponent},
            { path: 'new_purchase', component: NewPurchaseComponent},
            { path: 'users', component: UsersComponent},
            { path: '**', component: ProfileComponent }
        ]
    },
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
]
