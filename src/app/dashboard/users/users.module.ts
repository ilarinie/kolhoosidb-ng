import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./users.component";
import {UserFormModule} from "../../form-modules/user-form/user-form.module";

@NgModule({
  imports: [
    CommonModule,
    UserFormModule
  ],
  declarations: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
