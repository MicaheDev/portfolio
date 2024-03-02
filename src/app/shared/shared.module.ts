import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmokeBackgroundComponent } from './components/smoke-background/smoke-background.component';

@NgModule({
  declarations: [
    SmokeBackgroundComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [SmokeBackgroundComponent]
})
export class SharedModule { }
