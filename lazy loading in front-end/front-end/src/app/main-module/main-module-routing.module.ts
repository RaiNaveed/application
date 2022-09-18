import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-component/about-us/about-us.component';
import { CheckOutComponent } from './main-component/check-out/check-out.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { EditCartComponent } from './main-component/edit-cart/edit-cart.component';
import { FailedComponent } from './main-component/failed/failed.component';
import { HomeComponent } from './main-component/home/home.component';
import { ProductsComponent } from './main-component/products/products.component';
import { PurchasedSuccessfullyComponent } from './main-component/purchased-successfully/purchased-successfully.component';
import { ViewCartComponent } from './main-component/view-cart/view-cart.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [
  { path: '', component: MainModuleComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'products',component:ProductsComponent},
    {path:'view-cart',component:ViewCartComponent},
    {path:'check-out',component:CheckOutComponent},
    {path:'edit-cart',component:EditCartComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'purchased-successfully',component:PurchasedSuccessfullyComponent},
    {path:'failed',component:FailedComponent}


  ]
},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
