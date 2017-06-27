import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskComponent} from "./task/task.component";
import {TasksComponent} from "./tasks.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TaskComponent,
    TasksComponent
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
