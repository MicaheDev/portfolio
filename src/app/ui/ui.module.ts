import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './sections/navbar/navbar.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NavbarComponent, MainLayoutComponent]
})
export class UiModule { }
