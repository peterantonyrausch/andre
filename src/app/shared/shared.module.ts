import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { AilosCardComponent } from './components/ailos-card/ailos-card.component';
import { AilosStepperComponent } from './components/ailos-stepper/ailos-stepper.component';
import { AilosFormGroupComponent } from './components/ailos-form-group/ailos-form-group.component';
import { AilosCardItemComponent } from './components/ailos-card/components/ailos-card-item/ailos-card-item.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    AilosStepperComponent,
    AilosFormGroupComponent,
    AilosCardComponent,
    AilosCardItemComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    AilosStepperComponent,
    AilosFormGroupComponent,
    ButtonComponent,
    AilosCardComponent,
    AilosCardItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskPipe,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
})
export class SharedModule {}
