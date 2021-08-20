import { ErrorHandler } from '@angular/core';

export class Module2ErrorHandler implements ErrorHandler {
  handleError() {
    console.error('Error Handler of Module 2');
  }
}
