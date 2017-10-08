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
    Homepage.prototype.getStyle = function () {
        return "background-image: url(\"http://lorempixel.com/400/200\")";
    };
    Homepage = __decorate([
        core_1.Component({
            selector: 'homepage-text',
            template: "<h3>{{titleMsg}}</h3>\n      <img [src]=\"imgLink\">\n      <div class=\"myClass\"><p>Using styles attribute along with the template</p></div>\n      <div [ngClass]=\"{myClass: flag}\" >The condition is set to true. Hence, the text below is getting displayed.</div>\n      <div [style.background-color]=\"'yellow'\">This is inline styling</div>\n      <div>\n      <div class=\"default-section\" [style]=\"getStyle()\">\n       using a function to return the style. i.e [style]=\"getStyle()\"\n      </div>\n      <div [class.myClass]=\"showStyle\">\n       Using [style.myClass] = \"showStyle\"\n       </div>\n    </div>",
            styles: [".myClass {\n         font-size: 28px;\n         font-weight: bold;\n         color: pink;\n    }\n    .default-section {\n      height: 200px;\n      width: 100%;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Homepage);
    return Homepage;
}());
exports.Homepage = Homepage;
//# sourceMappingURL=homepage.component.js.map