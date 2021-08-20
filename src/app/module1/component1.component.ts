import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Module1ErrorHandler } from './module-error.handler.service';

@Component({
  selector: 'app-component1',
  template: `<h2>Lazy Loaded Module 1</h2>
    <app-shared-button></app-shared-button> `,
  providers: [
    {
      provide: ErrorHandler,
      useClass: Module1ErrorHandler,
    },
  ],
})
export class Component1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
