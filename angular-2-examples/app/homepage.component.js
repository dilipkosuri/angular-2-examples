"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Homepage = (function () {
    function Homepage() {
        this.titleMsg = "This text is coming from a new component";
        this.imgLink = "http://lorempixel.com/400/200";
        this.showState = true;
        this.color = "red";
        this.colors = ["yellow", "orange", "blue", "aqua"];
        this.cOne = true;
        this.cTwo = true;
        this.size = '30px';
        this.style = 'italic';
    }
    Homepage.prototype.toggle = function () {
        this.cOne = !this.cOne;
        this.cTwo = !this.cTwo;
    };
    Homepage = __decorate([
        core_1.Component({
            selector: "homepage-text",
            template: "<h3>{{titleMsg}}</h3>\n      <img [src]=\"imgLink\"><br>\n      <div *ngIf=\"showState\"> This is shown when the showState becomes true</div>\n      <div *ngIf=\"!showState\"> This is shown when the showState becomes false</div>\n\n      <p>The following shows ngSwitch usage</p>\n      <div [ngSwitch]=\"color\">\n         <div *ngSwitchWhen=\"'red'\">This is shown when the color is set to red</div>\n         <div *ngSwitchWhen=\"'blue'\">This is shown when the color is set to blue</div>\n         <div *ngSwitchDefault>This is shown when the color is not set to any value</div>\n      </div>\n\n      <p>The following shows the usage of ngFor directive</p>\n      <ul>\n      <li *ngFor=\"let color of colors\">{{color}}</li>\n      </ul>\n\n      <p>The following demonstrates ngClass & ngStyle i.e, inline styling</p>\n\n      <p [ngClass]=\"{classOne:cOne, classTwo: cTwo}\">ngClass Paragraph</p>\n\n      <button class=\"default-section\" (click) = \"toggle()\">Toggle the ngClass paragraph</button>\n     \n      <p [ngStyle]=\"{'font-size': size, 'font-style': style}\">This is inline type of styling</p>\n    ",
            styles: [
                "\n    .default-section {\n      font-size: 28px;\n      font-weight: bold;\n      border: 1px solid black;\n    }\n\n    .classOne {\n       color: white;\n    }\n\n    .classTwo {\n      background-color: black;\n    }\n\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Homepage);
    return Homepage;
}());
exports.Homepage = Homepage;
//# sourceMappingURL=homepage.component.js.map