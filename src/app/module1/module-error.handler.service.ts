import { ErrorHandler } from '@angular/core';

export class Module1ErrorHandler implements ErrorHandler {
  handleError() {
    console.error('Error Handler of Module 1');
  }
}
