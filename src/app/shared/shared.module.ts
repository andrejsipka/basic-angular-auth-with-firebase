import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { InputFormComponent } from './input-form/input-form.component';



@NgModule({
  declarations: [
    InputFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputFormComponent
  ]
})
export class SharedModule { }
