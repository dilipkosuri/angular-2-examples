import { Component } from '@angular/core';

@Component({
  selector: 'homepage-text',
  template: `<h3>{{titleMsg}}</h3>
      <img [src]="imgLink"><br>
      <br>


      <input class="inputTextBoxStyle" type="text" [(ngModel)]="fname">
      <input class="inputTextBoxStyle" type="text" [(ngModel)]="lname">

      <p>Full Name: {{fname}} {{lname}}!</p>

    `,
  styles: [`
    .default-section {
      font-size: 28px;
      font-weight: bold;
    }  
    .inputTextBoxStyle {
      border: thick solid #CCC;
    }
    `]
})

export class Homepage {
  public titleMsg = "This text is coming from a new component";
  public imgLink = "http://lorempixel.com/400/200";
  public fname;
  public lname;

  constructor() {
  }

}    