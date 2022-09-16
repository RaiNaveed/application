import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './main-component/products/products.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [
  { path: '', component: MainModuleComponent,
  children:[
    {path:'',component:ProductsComponent}
  ]
},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
