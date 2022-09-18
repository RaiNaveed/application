import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductsComponent } from './admin-component/products/products.component';
import { AdminmoduleComponent } from './adminmodule.component';

const routes: Routes = [{ path: '', component: AdminmoduleComponent,
children:[
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'products', component:ProductsComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
