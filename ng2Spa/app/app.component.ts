import { Component } from '@angular/core';

@Component({
    selector: 'sampleapp',
    template: `
        <!-- header -->
        <div>
            <div>
                <!-- logo -->
                <div class="logo"><a href="/"><img src="http://images.tienphong.vn/hoahau/App_Themes/Version2/images/logo.png" alt=""></a></div>
                <div class="clearfix"></div>
            </div>
            
            <!-- menu -->
            <menu id="mainMnu"></menu>
        </div>
        
        <!-- outlet -->
        <router-outlet></router-outlet>
        
        <!-- footer -->
        <div class="footer">Footer</div>
        <div class="clearfix"></div>
     `
})


export class AppComponent {
    //another prop
    //typescript prop: type
    slogan: string = "Only men make men happy";
}
