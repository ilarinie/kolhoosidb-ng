import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdInputModule, MdCheckboxModule, MdButtonModule],
  exports: [MdButtonModule, MdInputModule, MdCheckboxModule, MdButtonModule],
})
export class MaterialModule { }