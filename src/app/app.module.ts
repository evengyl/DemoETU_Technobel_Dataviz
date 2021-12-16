import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { ForOforComponent } from './components/shared/for-ofor/for-ofor.component';
import { HomeComponent } from './components/shared/home/home.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { PowerPipe } from './components/demo/demo6/power.pipe';
import { Exos1dot1Component } from './components/exos/exos1dot1/exos1dot1.component';
import { Exos1dot2Component } from './components/exos/exos1dot2/exos1dot2.component';
import { ConverterTempPipe } from './components/exos/exos1dot1/converter-temp.pipe';
import { ConverterSecPipe } from './components/exos/exos1dot2/converter-sec.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    ForOforComponent,
    HomeComponent,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    PowerPipe,
    Exos1dot1Component,
    Exos1dot2Component,
    ConverterTempPipe,
    ConverterSecPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
