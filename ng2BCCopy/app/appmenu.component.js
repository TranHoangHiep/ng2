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
var AppMenuComponent = (function () {
    function AppMenuComponent() {
    }
    AppMenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            template: "\n        <div class='container-fluid'>\n            <!-- interpolation binding -->\n            <a class='navbar-brand'>{{logo}}</a>\n            <ul class='nav navbar-nav'>\n                <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                <li><a [routerLink]=\"['/about']\">About</a></li>\n            </ul>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppMenuComponent);
    return AppMenuComponent;
}());
exports.AppMenuComponent = AppMenuComponent;
//# sourceMappingURL=appmenu.component.js.map