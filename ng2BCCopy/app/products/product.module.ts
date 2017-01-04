import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list.component';
// import { ProductDetailComponent } from './product-detail.component';

// import { ProductFilterPipe } from './product-filter.pipe';
// import { CatIdToNamePipe } from './catIdToName.pipe';

// import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent,
        // ProductDetailComponent,
        // ProductFilterPipe,
        // CatIdToNamePipe
    ],
    imports: [
        // SharedModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'products', component: ProductComponent,
            children: [
                { path: '', component: ProductListComponent },
                // { path: 'detail/:id', //dynamic parameter
                //   canActivate: [ ProductDetailGuard ], //filter
                //   component: ProductDetailComponent },
            ]
            }
        ])
    ],
    providers: [
        ProductService,
        // ProductDetailGuard
    ]
})
export class ProductModule {}
