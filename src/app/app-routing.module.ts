import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { ForOforComponent } from './components/shared/for-ofor/for-ofor.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "demo1", component : Demo1Component},
  { path : "demo2", component : Demo2Component},
  { path : "demo3", component : Demo3Component},
  { path : "**", component : ForOforComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
