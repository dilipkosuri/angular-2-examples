import { Component } from "@angular/core";

@Component({
  selector: "homepage-text",
  template: `<h3>{{titleMsg}}</h3>
      <img [src]="imgLink"><br>
      <div *ngIf="showState"> This is shown when the showState becomes true</div>
      <div *ngIf="!showState"> This is shown when the showState becomes false</div>

      <p>The following shows ngSwitch usage</p>
      <div [ngSwitch]="color">
         <div *ngSwitchWhen="'red'">This is shown when the color is set to red</div>
         <div *ngSwitchWhen="'blue'">This is shown when the color is set to blue</div>
         <div *ngSwitchDefault>This is shown when the color is not set to any value</div>
      </div>

      <p>The following shows the usage of ngFor directive</p>
      <ul>
      <li *ngFor="let color of colors">{{color}}</li>
      </ul>

      <p>The following demonstrates ngClass & ngStyle i.e, inline styling</p>

      <p [ngClass]="{classOne:cOne, classTwo: cTwo}">ngClass Paragraph</p>

      <button class="default-section" (click) = "toggle()">Toggle the ngClass paragraph</button>
     
      <p [ngStyle]="{'font-size': size, 'font-style': style}">This is inline type of styling</p>
    `,
  styles: [
    `
    .default-section {
      font-size: 28px;
      font-weight: bold;
      border: 1px solid black;
    }

    .classOne {
       color: white;
    }

    .classTwo {
      background-color: black;
    }

    `
  ]
})
export class Homepage {
  public titleMsg = "This text is coming from a new component";
  public imgLink = "http://lorempixel.com/400/200";

  public showState = true;

  public color = "red";

  public colors = ["yellow", "orange", "blue", "aqua"];

  constructor() {}

  public cOne = true;
  public cTwo = true;

  public size = '30px';
  public style = 'italic';

  toggle() {
    this.cOne = !this.cOne;
    this.cTwo = !this.cTwo;
  }
}
