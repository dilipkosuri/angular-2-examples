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
        this.stringValue = 'Hello World';
        this.numberValue = 8.463;
        this.date = new Date();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Below is some text fetched from another component</h1>\n             <p>This is Parent App Component</p>\n             <h2>The following demonstrates the PIPES design in AngularJS-2</h2>\n             \n             <h2>String Values with Pipe</h2>\n             <p>{{stringValue | uppercase}}</p>\n             <p>{{stringValue | lowercase}}</p>\n             <p>{{stringValue | slice:'1':'6'}}</p>\n             <p>{{stringValue | replace:'Hello':'Dilip'}}</p>\n             <p>{{stringValue | replace:'World':'Kosuri'}}</p>\n             \n             <h2>Numbers with Pipe</h2>\n             <p>{{numberValue | number:'2.3-5'}}</p>\n             <p>{{numberValue | number:'1.5-8'}}</p>\n             <p>{{numberValue | number:'2.2-2'}}</p>\n\n             <h2>Numbers with Currency using Pipe</h2>\n\n             <p>{{numberValue | currency:'EUR'}}</p>\n             <p>{{numberValue | currency:'INR':true:'2.2-2'}}</p>\n\n             <h2>Date with Pipe</h2>\n            <p>{{date}}</p>\n             <p>{{date | date:'fullDate'}}</p>\n             <p>{{date | date:'shortDate'}}</p>\n             <p>{{date | date:'mediumTime'}}</p>\n             <p>{{date | date:'shortTime'}}</p>\n\n             <homepage-text></homepage-text>\n             ",
            styles: [
                "\n    h1 {\n     color: orange\n  }\n  .input-text {\n    border: 1px solid black;\n  }\n  ",
            ],
            directives: [homepage_component_1.Homepage],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map