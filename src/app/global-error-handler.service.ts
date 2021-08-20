import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {
  handleError() {
    console.error('GlobalErrorHandler catched error');
  }
}
