import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "homepage-text",
  template: `<h3>{{titleMsg}}</h3>
      <img [src]="imgLink"><br>
     
    `,
   
  styles: [
    `
    .default-section {
      font-size: 28px;
      font-weight: bold;
      border: 1px solid black;
    }

    .input-text {
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
}
