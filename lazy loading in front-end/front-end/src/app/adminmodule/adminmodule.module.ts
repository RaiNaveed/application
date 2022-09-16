import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminmoduleRoutingModule } from './adminmodule-routing.module';
import { AdminmoduleComponent } from './adminmodule.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductsComponent } from './admin-component/products/products.component';


@NgModule({
  declarations: [
    AdminmoduleComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminmoduleRoutingModule
  ]
})
export class AdminmoduleModule { }
