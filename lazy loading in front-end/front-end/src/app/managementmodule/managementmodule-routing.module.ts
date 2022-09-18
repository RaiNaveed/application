import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './managementcomponenet/admin-management/admin-login/admin-login.component';
import { AdminRegisterComponent } from './managementcomponenet/admin-management/admin-register/admin-register.component';
import { UserLoginComponent } from './managementcomponenet/user-management/user-login/user-login.component';
import { UserRegisterComponent } from './managementcomponenet/user-management/user-register/user-register.component';
import { ManagementmoduleComponent } from './managementmodule.component';

const routes: Routes = [
  { path: '', component: ManagementmoduleComponent,
  children:[
    {path:'user-login', component:UserLoginComponent},
    {path:'user-register', component:UserRegisterComponent},
    {path:'admin-login', component:AdminLoginComponent},
    {path:'admin-register',component:AdminRegisterComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementmoduleRoutingModule { }
