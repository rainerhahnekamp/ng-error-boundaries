import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `<h2>Lazy Loaded Module 2</h2>
    <app-shared-button></app-shared-button> `,
})
export class Component2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
