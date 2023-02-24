import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { AddCooperatedComponent } from './pages/add-cooperated/add-cooperated.component';
import { NewCooperatedAdmissionRoutingModule } from './new-cooperated-admission.routing.module';

@NgModule({
  declarations: [AddCooperatedComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    NewCooperatedAdmissionRoutingModule,
  ],
})
export class NewCooperatedAdmissionModule {}
