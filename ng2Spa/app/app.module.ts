import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { Header } from './header';
import { SideBar } from './sidebar';
<<<<<<< HEAD
=======
import { Content } from './content';
>>>>>>> 71954c65cc89914735b1437b58427683a0d658ce
// import { Menu }  from './Menu';

// import { HomeComponent } from './static/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      // { path: '', component: HomeComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
  ],
  declarations: [
    // Menu, //directive
    AppComponent, //bootstrap
    // HomeComponent, //home directive/page
    Header,
    SideBar,
    Content
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
