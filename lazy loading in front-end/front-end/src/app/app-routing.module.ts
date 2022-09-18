import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) },
   { path: 'MainPortal', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) },
    { path: 'admin', loadChildren: () => import('./adminmodule/adminmodule.module').then(m => m.AdminmoduleModule) },
  { path: 'managementmodule', loadChildren: () => import('./managementmodule/managementmodule.module').then(m => m.ManagementmoduleModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
