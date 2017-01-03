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
var ProductFilterPipe = (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (products, filterBy, catId) {
        //tenery
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        var productsTmp = products;
        //logic, if null -> k co fiter
        //if MUI -> filter
        if (filterBy) {
            //get name ->lowercase
            //reative
            productsTmp = products.filter(function (product) {
                var name = product.productName.toLocaleLowerCase();
                if (name.indexOf(filterBy) > -1) {
                    return true;
                }
                return false; //fast return
            });
        }
        //filter by catId
        productsTmp = (catId > 0) ? productsTmp.filter(function (product) { return product.catId == catId; }) : productsTmp;
        return productsTmp;
    };
    ProductFilterPipe = __decorate([
        core_1.Pipe({
            name: 'productFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductFilterPipe);
    return ProductFilterPipe;
}());
exports.ProductFilterPipe = ProductFilterPipe;
//# sourceMappingURL=product-filter.pipe.js.map