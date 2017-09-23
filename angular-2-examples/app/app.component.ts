import { Component } from '@angular/core';
import { Homepage } from './homepage.component'

@Component({
  selector: 'my-app',
  template: `<h1>Below is some text fetched from another component</h1>
             <homepage-text></homepage-text>`,
  directives: [Homepage]
})
export class AppComponent { }
