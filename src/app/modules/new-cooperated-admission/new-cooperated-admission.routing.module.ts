import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCooperatedComponent } from './pages/add-cooperated/add-cooperated.component';

const routes: Routes = [{ path: '', component: AddCooperatedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCooperatedAdmissionRoutingModule {}
