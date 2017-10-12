import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "homepage-text",
  template: `<h3>{{titleMsg}}</h3>
      <img [src]="imgLink"><br>
     <label>Enter child Homepage-text component value: </label>
     <input class="input-text" type="text" #childText (keyup)="onChange(childText.value)">
     <p>The value from parent app component is: </p>
     {{parentData}}
    `,
    inputs: [`parentData`],
    outputs: [`childEvent`],
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

  public parentData: string;
  public childEvent = new EventEmitter<string>();

  onChange(value) {
     this.childEvent.emit(value);
  }
}
