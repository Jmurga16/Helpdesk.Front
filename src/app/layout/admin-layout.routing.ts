import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    //canActivate: [authenticationGuard],
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./../modules/user/user.module').then((m) => m.UserModule),
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
