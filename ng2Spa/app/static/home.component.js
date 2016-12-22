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
//import dependency
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//decorator @Component({})
var HomeComponent = (function () {
    function HomeComponent(_http) {
        this._http = _http;
        this.pageTitle = "Homepage";
    }
    HomeComponent.prototype.ngOnInit = function () {
        //display iframe
        console.log("Display?");
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/static/home.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map