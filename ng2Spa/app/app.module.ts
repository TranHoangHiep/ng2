import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { Header } from './header';
import { SideBar } from './sidebar';
import { Admin } from './admin';
import { Todos } from './static/todos.component';
// import { Menu }  from './menu';

// import { HomeComponent } from './static/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      // { path: '', component: HomeComponent },
      { path: 'admin', component: Admin},
      { path: 'todos', component: Todos},
      { path: '', redirectTo: 'admin', pathMatch: 'full'},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    // Todos
  ],
  declarations: [
    // Menu, //directive
    AppComponent, //bootstrap
    // HomeComponent, //home directive/page
    Header,
    SideBar,
    Admin,
    Todos,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
