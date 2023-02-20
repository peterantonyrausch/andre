import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './components/elements/input/input.component';
import { ButtonComponent } from './components/elements/button/button.component';


@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
