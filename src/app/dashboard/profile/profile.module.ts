import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./profile.component";
import {UserFormModule} from "../../form-modules/user-form/user-form.module";

@NgModule({
  imports: [
    CommonModule,
    UserFormModule
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
