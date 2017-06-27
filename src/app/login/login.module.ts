import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {MaterialModule} from '../material-imports';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserFormModule} from '../form-modules/user-form/user-form.module';
import {RouterModule, Routes} from '@angular/router';

export const loginRoutes: Routes = [
  { path: '', component: LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UserFormModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
