import {Component} from '@angular/core';

@Component({
    selector: 'menu',
    template: `
        <ul>
            <li><a [routerLink]="['/']">
                <img style="position: relative; top: 5px;" src="assets/images/home.png" 
                alt=""></a></li>
        </ul>
     `
})


export class Menu {
}
