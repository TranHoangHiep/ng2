import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { Header } from './header';
import { SideBar } from './sidebar';
import { Content } from './content';
import { Todos } from './static/todos.component';
// import { Menu }  from './menu';

// import { HomeComponent } from './static/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      // { path: '', component: HomeComponent },
      // { path: 'todos', component: Todos},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
  ],
  declarations: [
    // Menu, //directive
    AppComponent, //bootstrap
    // HomeComponent, //home directive/page
    Header,
    SideBar,
    Content,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
