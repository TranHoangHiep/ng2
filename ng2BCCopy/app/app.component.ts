import { Component } from '@angular/core';

@Component({
    selector: 'bc-shop',
    template: `
    <!-- interpolation -->
    <h4>{{slogan}}</h4>
    <h4>{{pageTitle}}</h4>
    <div>
        <menu class='navbar navbar-default'></menu>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>
     `
})


export class AppComponent {
    //another prop
    //typescript prop: type
    slogan: string = "Demo BCShop";

    pageTitle: string = 'BCShop';
}
