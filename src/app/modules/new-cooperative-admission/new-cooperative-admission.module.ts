import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { NewCooperativeAdmissionRoutingModule } from './new-cooperative-admission.routing.module';
import { CreateCooperativeComponent } from './pages/create-cooperative/create-cooperative.component';

@NgModule({
  declarations: [CreateCooperativeComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    NewCooperativeAdmissionRoutingModule,
  ],
})
export class NewCooperativeAdmissionModule {}
