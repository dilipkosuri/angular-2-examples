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
var core_2 = require("@angular/core");
var Homepage = (function () {
    function Homepage() {
        this.titleMsg = "This text is coming from a new component";
        this.imgLink = "http://lorempixel.com/400/200";
        this.childEvent = new core_2.EventEmitter();
    }
    Homepage.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    Homepage = __decorate([
        core_1.Component({
            selector: "homepage-text",
            template: "<h3>{{titleMsg}}</h3>\n      <img [src]=\"imgLink\"><br>\n     <label>Enter child Homepage-text component value: </label>\n     <input class=\"input-text\" type=\"text\" #childText (keyup)=\"onChange(childText.value)\">\n     <p>The value from parent app component is: </p>\n     {{parentData}}\n    ",
            inputs: ["parentData"],
            outputs: ["childEvent"],
            styles: [
                "\n    .default-section {\n      font-size: 28px;\n      font-weight: bold;\n      border: 1px solid black;\n    }\n\n    .input-text {\n      border: 1px solid black;\n    }\n\n    .classOne {\n       color: white;\n    }\n\n    .classTwo {\n      background-color: black;\n    }\n\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Homepage);
    return Homepage;
}());
exports.Homepage = Homepage;
//# sourceMappingURL=homepage.component.js.map