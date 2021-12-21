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
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Exos2Component } from './components/exos/exos2/exos2.component';
import { ConvertNumberPipe } from './components/exos/exos2/convert-number.pipe';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { PrepareRenderDirective } from './components/demo/demo8/prepare-render.directive';
import { HighlightDirective } from './components/demo/demo8/highlight.directive';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { Input10Component } from './components/demo/demo10/input10/input10.component';
import { Output10Component } from './components/demo/demo10/output10/output10.component';
import { ProductsComponent } from './components/exos/exos3/products/products.component';
import { DetailsComponent } from './components/exos/exos3/details/details.component';
import { Demo11Component } from './components/demo/demo11/demo11.component';



import { FakeLoginDemo11Service } from './components/demo/demo11/services/fake-login-demo11.service';
import { FakeLoginExos3Service } from './components/exos/exos3dot2/services/fake-login-exos3.service';
import { GestProductsService } from './components/exos/exos3dot2/services/gest-products.service';
import { Products2Component } from './components/exos/exos3dot2/products/products2.component';


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
    Demo7Component,
    Exos2Component,
    ConvertNumberPipe,
    Demo8Component,
    PrepareRenderDirective,
    HighlightDirective,
    Demo9Component,
    Demo10Component,
    Input10Component,
    Output10Component,
    ProductsComponent,
    DetailsComponent,
    Demo11Component,
    Products2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FakeLoginDemo11Service, FakeLoginExos3Service, GestProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
