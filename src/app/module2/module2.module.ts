import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2.component';
import { Module2ErrorHandler } from './module2-error.handler.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Component2Component],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: Component2Component }]),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: Module2ErrorHandler,
    },
  ],
})
export class Module2Module {}
