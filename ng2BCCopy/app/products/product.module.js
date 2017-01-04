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
var router_1 = require('@angular/router');
var product_component_1 = require('./product.component');
var product_list_component_1 = require('./product-list.component');
// import { ProductDetailComponent } from './product-detail.component';
// import { ProductFilterPipe } from './product-filter.pipe';
// import { CatIdToNamePipe } from './catIdToName.pipe';
// import { ProductDetailGuard } from './product-guard.service';
var product_service_1 = require('./product.service');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_component_1.ProductComponent,
                product_list_component_1.ProductListComponent,
            ],
            imports: [
                // SharedModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([
                    { path: 'products', component: product_component_1.ProductComponent,
                        children: [
                            { path: '', component: product_list_component_1.ProductListComponent },
                        ]
                    }
                ])
            ],
            providers: [
                product_service_1.ProductService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map