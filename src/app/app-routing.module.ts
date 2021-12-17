import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { Exos1dot1Component } from './components/exos/exos1dot1/exos1dot1.component';
import { Exos1dot2Component } from './components/exos/exos1dot2/exos1dot2.component';
import { Exos2Component } from './components/exos/exos2/exos2.component';
import { ForOforComponent } from './components/shared/for-ofor/for-ofor.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "demo", children : [
    { path : "demo1", component : Demo1Component},
    { path : "demo2", component : Demo2Component},
    { path : "demo3", component : Demo3Component},
    { path : "demo4", component : Demo4Component},
    { path : "demo5", component : Demo5Component},
    { path : "demo6", component : Demo6Component},
    { path : "demo7", component : Demo7Component},
    { path : "demo8", component : Demo8Component}
  ]},
  { path : "exos", children : [
    { path : "exos1dot1", component : Exos1dot1Component},
    { path : "exos1dot2", component : Exos1dot2Component},
    { path : "exos2", component : Exos2Component}
  ]},
    

  { path : "**", component : ForOforComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
