import { CommuneSelectGuard } from './commune-select.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ApiService} from './services/api.service';

import {routes} from './app.routes';

// for material gesture support
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, ApiService, CommuneSelectGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
