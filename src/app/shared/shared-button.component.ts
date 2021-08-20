import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  template: `<button (click)="handleClick()">Throw Error</button>`,
})
export class SharedButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    throw new Error('error has been raised');
  }
}
