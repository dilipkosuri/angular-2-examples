import { Component } from '@angular/core';
import { Homepage } from './homepage.component'

@Component({
  selector: 'my-app',
  template: `<h1>Below is some text fetched from another component</h1>
             <homepage-text></homepage-text>`,
  styles: [`h1 {
     color: orange
  }`]
  directives: [Homepage]
})
export class AppComponent { }
