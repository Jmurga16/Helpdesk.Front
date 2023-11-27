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
        path: 'dashboard',
        loadChildren: () =>
          import('./../modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'usuario',
        loadChildren: () =>
          import('./../modules/usuario/usuario.module').then((m) => m.UsuarioModule),
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
