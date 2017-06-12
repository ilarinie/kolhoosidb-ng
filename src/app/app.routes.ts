import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { CanActivate, CanActivateChild, Routes } from '@angular/router';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: 'tasks', pathMatch: 'full'},
            { path: 'tasks', component: TasksComponent}
        ]
    }
]
