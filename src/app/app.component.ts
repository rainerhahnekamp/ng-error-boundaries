import { Component, ErrorHandler, Injector } from '@angular/core';
import { GlobalErrorHandler } from './global-error-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  handleClick() {
    throw new Error('Error');
  }
}
