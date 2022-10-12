import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminmoduleRoutingModule } from './adminmodule-routing.module';
import { AdminmoduleComponent } from './adminmodule.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductsComponent } from './admin-component/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './admin-component/new-product/new-product.component';



@NgModule({
  declarations: [
    AdminmoduleComponent,
    DashboardComponent,
    ProductsComponent,
    NewProductComponent,
  ],
  imports: [
    CommonModule,
    AdminmoduleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminmoduleModule { }
