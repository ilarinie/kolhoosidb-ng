import { CommuneSelectGuard } from './commune-select.guard';
import { MaterialModule } from './material-imports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ApiService} from './services/api.service';

import {routes} from './app.routes';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RegisterComponent } from './login/register/register.component';

// for material gesture support
import 'hammerjs';
import { NewPurchaseComponent } from './dashboard/new-purchase/new-purchase.component';
import { BudgetComponent } from './dashboard/budget/budget.component';
import { UsersComponent } from './dashboard/users/users.component';
import { CommunelistComponent } from './communelist/communelist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TasksComponent,
    ProfileComponent,
    RegisterComponent,
    NewPurchaseComponent,
    BudgetComponent,
    UsersComponent,
    CommunelistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AuthGuard, ApiService, CommuneSelectGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
