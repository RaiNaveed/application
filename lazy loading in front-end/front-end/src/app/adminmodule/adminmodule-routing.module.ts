import { NgModule } from '@angular/core';
import { AdminmoduleComponent } from './adminmodule.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { NewProductComponent } from './admin-component/new-product/new-product.component';
import { ProductsComponent } from './admin-component/products/products.component';


const routes: Routes = [{ path: '', component: AdminmoduleComponent,
children:[
  {path:'', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'newproduct', component: NewProductComponent},
  {path:'adminproducts', component: ProductsComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }


