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
var Menu = (function () {
    function Menu() {
    }
    return Menu;
}());
Menu = __decorate([
    core_1.Component({
        selector: 'menu',
        template: "\n        <ul>\n            <li><a [routerLink]=\"['/']\">\n                <img style=\"position: relative; top: 5px;\" src=\"assets/images/home.png\" \n                alt=\"\"></a></li>\n        </ul>\n     "
    }),
    __metadata("design:paramtypes", [])
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map