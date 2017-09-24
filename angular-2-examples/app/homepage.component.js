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
    }
    Homepage = __decorate([
        core_1.Component({
            selector: 'homepage-text',
            template: '<h3>This text is coming from a new component</h3>',
            styles: ["\n     h3 {\n         color: red\n     }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Homepage);
    return Homepage;
}());
exports.Homepage = Homepage;
//# sourceMappingURL=homepage.component.js.map