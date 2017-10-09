import { Component } from '@angular/core';

@Component({
    selector: 'homepage-text',
    template: `<h3>{{titleMsg}}</h3>
      <img [src]="imgLink"><br>
      <button class="default-section" (click)="buttonClicked()">Event handling</button>
      <br>
      <input class="inputTextBoxStyle" type="text" #inputParam>
      <button class="default-section" (click)="buttonClickWithPassingAttr(inputParam.value)">Event handling</button>
    `,
    styles: [`.myClass {
         font-size: 28px;
         font-weight: bold;
         color: pink;
    }
    .default-section {
      font-size: 28px;
      font-weight: bold;
    }
    .inputTextBoxStyle {
      border: thick solid #CCC;
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
    
    buttonClicked() {
      console.log("Button is clicked");
    }

    buttonClickWithPassingAttr(value) {
        console.log("input value passed through event handling is: \n",value)
    }
}    