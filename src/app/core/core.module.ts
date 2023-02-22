import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AilosLayoutComponent } from './layout/ailos-layout/ailos-layout.component';

@NgModule({
  declarations: [
    AilosLayoutComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  exports: [AilosLayoutComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
