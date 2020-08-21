import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BaseService } from './http/base.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoutButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[HeaderComponent,FooterComponent,LogoutButtonComponent],
  providers: [BaseService],
})
export class CoreModule { }
