import {Component} from '@angular/core';
import {Homepage} from './homepage.component';

@Component({
  selector: 'my-app',
  template: `<h1>Below is some text fetched from another component</h1>
             <p>This is Parent App Component</p>
             <h2>The following demonstrates the PIPES design in AngularJS-2</h2>
             
             <h2>String Values with Pipe</h2>
             <p>{{stringValue | uppercase}}</p>
             <p>{{stringValue | lowercase}}</p>
             <p>{{stringValue | slice:'1':'6'}}</p>
             <p>{{stringValue | replace:'Hello':'Dilip'}}</p>
             <p>{{stringValue | replace:'World':'Kosuri'}}</p>
             
             <h2>Numbers with Pipe</h2>
             <p>{{numberValue | number:'2.3-5'}}</p>
             <p>{{numberValue | number:'1.5-8'}}</p>
             <p>{{numberValue | number:'2.2-2'}}</p>

             <h2>Numbers with Currency using Pipe</h2>

             <p>{{numberValue | currency:'EUR'}}</p>
             <p>{{numberValue | currency:'INR':true:'2.2-2'}}</p>

             <h2>Date with Pipe</h2>
            <p>{{date}}</p>
             <p>{{date | date:'fullDate'}}</p>
             <p>{{date | date:'shortDate'}}</p>
             <p>{{date | date:'mediumTime'}}</p>
             <p>{{date | date:'shortTime'}}</p>

             <homepage-text></homepage-text>
             `,
  styles: [
    `
    h1 {
     color: orange
  }
  .input-text {
    border: 1px solid black;
  }
  `,
  ],
  directives: [Homepage],
})
export class AppComponent {
  public stringValue = 'Hello World';
  public numberValue = 8.463;

  date = new Date();
}
