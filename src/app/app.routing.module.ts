import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'new-cooperative-admission', pathMatch: 'full' },
  {
    path: 'new-cooperative-admission',
    loadChildren: () =>
      import(
        './modules/new-cooperated-admission/new-cooperated-admission.module'
      ).then((m) => m.NewCooperatedAdmissionModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
})
export class AppRoutingModule {}
