import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>G'day from {{ name }}!</h1>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
