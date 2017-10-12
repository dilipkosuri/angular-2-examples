import { Component } from '@angular/core';
import { Homepage } from './homepage.component'

@Component({
  selector: 'my-app',
  template: `<h1>Below is some text fetched from another component</h1>
             <p>This is Parent App Component</p>
             <label>Input parent app component value</label>
             <input class="input-text" type="text" #pText (keyup)="0">
             <p>Value from child app component i.e. homepage component is: </p>
             {{childData}}
             <homepage-text (childEvent)="childData=$event" [parentData]="pText.value"></homepage-text>`,
  styles: [`h1 {
     color: orange
  }
  .input-text {
    border: 1px solid black;
  }
  `],
  directives: [Homepage],
})
export class AppComponent { 
  public childData;
}
