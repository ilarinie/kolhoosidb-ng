import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommunelistComponent} from "./communelist.component";
import {RouterModule, Routes} from "@angular/router";
import {ProfileModule} from "../dashboard/profile/profile.module";
import {UserFormModule} from "../form-modules/user-form/user-form.module";

export const communelistRoutes: Routes = [
  {path: '', component: CommunelistComponent}
]

@NgModule({
  imports: [
    CommonModule,
    UserFormModule,
    RouterModule.forChild(communelistRoutes)
  ],
  declarations: [
    CommunelistComponent
  ]
})
export class CommunelistModule { }
