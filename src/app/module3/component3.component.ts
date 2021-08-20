import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `<h2>Lazy Loaded Module 3</h2>
    <p>This module has no own ErrorHandler</p>
    <app-shared-button></app-shared-button>`,
})
export class Component3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
