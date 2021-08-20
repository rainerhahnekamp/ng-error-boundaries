import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1.component';
import { SharedModule } from '../shared/shared.module';
import { Module1ErrorHandler } from './module-error.handler.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Component1Component],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Component1Component,
      },
    ]),
  ],
  exports: [Component1Component],
  providers: [
    {
      provide: ErrorHandler,
      useClass: Module1ErrorHandler,
    },
  ],
})
export class Module1Module {}
