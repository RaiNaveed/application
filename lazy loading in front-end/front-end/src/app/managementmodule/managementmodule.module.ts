import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementmoduleRoutingModule } from './managementmodule-routing.module';
import { ManagementmoduleComponent } from './managementmodule.component';
import { UserLoginComponent } from './managementcomponenet/user-management/user-login/user-login.component';
import { UserRegisterComponent } from './managementcomponenet/user-management/user-register/user-register.component';
import { AdminLoginComponent } from './managementcomponenet/admin-management/admin-login/admin-login.component';
import { AdminRegisterComponent } from './managementcomponenet/admin-management/admin-register/admin-register.component';


@NgModule({
  declarations: [
    ManagementmoduleComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AdminLoginComponent,
    AdminRegisterComponent
  ],
  imports: [
    CommonModule,
    ManagementmoduleRoutingModule
  ]
})
export class ManagementmoduleModule { }
