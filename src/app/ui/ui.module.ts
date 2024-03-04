import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainLayoutComponent, NavbarComponent, HeroComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [NavbarComponent, MainLayoutComponent, HeroComponent],
})
export class UiModule {}
