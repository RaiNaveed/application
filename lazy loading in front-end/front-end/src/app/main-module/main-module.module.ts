import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { AboutUsComponent } from './main-component/about-us/about-us.component';
import { ProductsComponent } from './main-component/products/products.component';
import { ViewCartComponent } from './main-component/view-cart/view-cart.component';
import { EditCartComponent } from './main-component/edit-cart/edit-cart.component';
import { CheckOutComponent } from './main-component/check-out/check-out.component';
import { FailedComponent } from './main-component/failed/failed.component';
import { PurchasedSuccessfullyComponent } from './main-component/purchased-successfully/purchased-successfully.component';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    ProductsComponent,
    ViewCartComponent,
    EditCartComponent,
    CheckOutComponent,
    FailedComponent,
    PurchasedSuccessfullyComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MainModuleModule { }
