import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCooperativeComponent } from './pages/create-cooperative/create-cooperative.component';

const routes: Routes = [{ path: '', component: CreateCooperativeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCooperativeAdmissionRoutingModule {}
