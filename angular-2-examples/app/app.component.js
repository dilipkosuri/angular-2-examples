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
var homepage_component_1 = require('./homepage.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Below is some text fetched from another component</h1>\n             <p>This is Parent App Component</p>\n             <label>Input parent app component value</label>\n             <input class=\"input-text\" type=\"text\" #pText (keyup)=\"0\">\n             <p>Value from child app component i.e. homepage component is: </p>\n             {{childData}}\n             <homepage-text (childEvent)=\"childData=$event\" [parentData]=\"pText.value\"></homepage-text>",
            styles: ["h1 {\n     color: orange\n  }\n  .input-text {\n    border: 1px solid black;\n  }\n  "],
            directives: [homepage_component_1.Homepage],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map