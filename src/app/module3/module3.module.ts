import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Component3Component } from './component3.component';

@NgModule({
  declarations: [Component3Component],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: Component3Component }]),
  ],
})
export class Module3Module {}
