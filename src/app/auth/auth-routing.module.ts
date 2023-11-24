import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAuthComponent } from './common/components/container-auth/container-auth.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: ContainerAuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
        data: {
          title: "Autenticación"
        }
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
