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
//java, ...
var core_1 = require('@angular/core');
//service
var product_service_1 = require('./product.service');
//decorator
var ProductListComponent = (function () {
    //aggregration
    //DI
    function ProductListComponent(_productService) {
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.catId = 0;
        this._productService = _productService;
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    //hook life cycle
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
            //console.log
        }, function (error) { return _this.errorMessage = error; }, function () {
            console.log("Complete ok bebi");
        });
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/product-list.component.html',
            styleUrls: ['app/products/product-list.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof product_service_1.ProductService !== 'undefined' && product_service_1.ProductService) === 'function' && _a) || Object])
    ], ProductListComponent);
    return ProductListComponent;
    var _a;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map