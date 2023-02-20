import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { AilosLayoutComponent } from './layout/ailos-layout/ailos-layout.component';

@NgModule({
  declarations: [
    AilosLayoutComponent,
    HeaderComponent,
    MenuComponent,
  ],
  exports: [
    AilosLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule { }
