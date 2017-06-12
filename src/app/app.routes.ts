import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import {ProfileComponent} from './dashboard/profile/profile.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full'},
            { path: 'tasks', component: TasksComponent},
            { path: 'profile', component: ProfileComponent },
            { path: '**', component: ProfileComponent }
        ]
    },
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
]
