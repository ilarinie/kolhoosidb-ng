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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TasksComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
