import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { Demo11Component } from './components/demo/demo11/demo11.component';
import { Demo12Component } from './components/demo/demo12/demo12.component';
import { Demo13Component } from './components/demo/demo13/demo13.component';
import { Demo13guardedComponent } from './components/demo/demo13/demo13guarded/demo13guarded.component';
import { LoginGuard } from './components/demo/demo13/guard/login.guard';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { Exos1dot1Component } from './components/exos/exos1dot1/exos1dot1.component';
import { Exos1dot2Component } from './components/exos/exos1dot2/exos1dot2.component';
import { Exos2Component } from './components/exos/exos2/exos2.component';
import { ProductsComponent } from './components/exos/exos3/products/products.component';
import { Products2Component } from './components/exos/exos3dot2/products/products2.component';
import { ForOforComponent } from './components/shared/for-ofor/for-ofor.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "demo", /* canActivateChild : [LoginGuard], */ children : [
    { path : "demo1", component : Demo1Component},
    { path : "demo2", component : Demo2Component},
    { path : "demo3", component : Demo3Component},
    { path : "demo4", component : Demo4Component},
    { path : "demo5", component : Demo5Component},
    { path : "demo6", component : Demo6Component},
    { path : "demo7", component : Demo7Component},
    { path : "demo8", component : Demo8Component},
    { path : "demo9", component : Demo9Component},
    { path : "demo10", component : Demo10Component},
    { path : "demo11", component : Demo11Component},
    { path : "demo12", component : Demo12Component},
    { path : "demo13", children : [
      {path : "", component : Demo13Component},
      {path : "demo13g", component : Demo13guardedComponent, canActivate : [LoginGuard] /*canDeactivate : [LoginGuard]*/}
    ]}
  ]},
  { path : "exos", children : [
    { path : "exos1dot1", component : Exos1dot1Component},
    { path : "exos1dot2", component : Exos1dot2Component},
    { path : "exos2", component : Exos2Component},
    { path : "exos3", component : ProductsComponent },
    { path : "exos3dot2", component : Products2Component}
  ]},
    

  { path : "**", component : ForOforComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
