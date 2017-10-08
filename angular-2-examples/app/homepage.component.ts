import { Component } from '@angular/core';

@Component({
    selector: 'homepage-text',
    template: `<h3>{{titleMsg}}</h3>
      <img [src]="imgLink">
      <div class="myClass"><p>Using styles attribute along with the template</p></div>
      <div [ngClass]="{myClass: flag}" >The condition is set to true. Hence, the text below is getting displayed.</div>
      <div [style.background-color]="'yellow'">This is inline styling</div>
      <div>
      <div class="default-section" [style]="getStyle()">
       using a function to return the style. i.e [style]="getStyle()"
      </div>
      <div [class.myClass]="showStyle">
       Using [style.myClass] = "showStyle"
       </div>
    </div>`,
    styles: [`.myClass {
         font-size: 28px;
         font-weight: bold;
         color: pink;
    }
    .default-section {
      height: 200px;
      width: 100%;
    }
    `]  
})

export class Homepage{
    public  titleMsg = "This text is coming from a new component";
    public imgLink = "http://lorempixel.com/400/200";
    public flag = true;

    showStyle: true;
    
    constructor() {
    }
    
    getStyle() {
      return `background-image: url("http://lorempixel.com/400/200")`;
    }
}    