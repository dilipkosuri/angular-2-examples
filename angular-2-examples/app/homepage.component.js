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
var core_1 = require('@angular/core');
var Homepage = (function () {
    function Homepage() {
        this.titleMsg = "This text is coming from a new component";
        this.imgLink = "http://lorempixel.com/400/200";
        this.flag = true;
        this.showStyle = true;
    }
    Homepage.prototype.buttonClicked = function () {
        console.log("Button is clicked");
    };
    Homepage.prototype.buttonClickWithPassingAttr = function (value) {
        console.log("input value passed through event handling is: \n", value);
    };
    Homepage = __decorate([
        core_1.Component({
            selector: 'homepage-text',
            template: "<h3>{{titleMsg}}</h3>\n      <img [src]=\"imgLink\"><br>\n      <button class=\"default-section\" (click)=\"buttonClicked()\">Event handling</button>\n      <br>\n      <input class=\"inputTextBoxStyle\" type=\"text\" #inputParam>\n      <button class=\"default-section\" (click)=\"buttonClickWithPassingAttr(inputParam.value)\">Event handling</button>\n    ",
            styles: [".myClass {\n         font-size: 28px;\n         font-weight: bold;\n         color: pink;\n    }\n    .default-section {\n      font-size: 28px;\n      font-weight: bold;\n    }\n    .inputTextBoxStyle {\n      border: thick solid #CCC;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Homepage);
    return Homepage;
}());
exports.Homepage = Homepage;
//# sourceMappingURL=homepage.component.js.map