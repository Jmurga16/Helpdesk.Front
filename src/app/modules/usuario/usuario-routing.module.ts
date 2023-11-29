import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './pages/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';
import { RolListComponent } from './pages/rol-list/rol-list.component';
import { PermisoListComponent } from './pages/permiso-list/permiso-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: UsuarioListComponent,
  },
  {
    path: 'create',
    component: UsuarioFormComponent,
  },
  {
    path: 'edit/:id',
    component: UsuarioFormComponent,
  },
  {
    path: 'rol',
    component: RolListComponent,
  },
  {
    path: 'permiso',
    component: PermisoListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule { }
