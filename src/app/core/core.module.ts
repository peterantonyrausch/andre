import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { FakeBackendInterceptor } from './interceptors/fake-backend.interceptor';
import { AilosLayoutComponent } from './layout/ailos-layout/ailos-layout.component';

@NgModule({
  declarations: [
    AilosLayoutComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  exports: [AilosLayoutComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
