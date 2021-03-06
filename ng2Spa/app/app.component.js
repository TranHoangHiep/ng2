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
var AppComponent = (function () {
    function AppComponent() {
        //another prop
        //typescript prop: type
        this.slogan = "Only men make men happy";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'body',
        template: "\n        <div class=\"wrapper\">\n            <header class=\"main-header\" id=\"header\"></header>\n\n            <!-- /.sidebar -->\n            <aside class=\"main-sidebar\" id=\"sidebar\"></aside>\n            \n            <!-- content -->\n            <div class=\"content-wrapper\">\n                <router-outlet></router-outlet>\n            </div>\n            \n            <!-- Control Sidebar -->\n            <aside class=\"control-sidebar control-sidebar-dark\"></aside>\n            <!-- /.control-sidebar -->\n            <!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->\n            <div class=\"control-sidebar-bg\"></div>\n        <div>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map