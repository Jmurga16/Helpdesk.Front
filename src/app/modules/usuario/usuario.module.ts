import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './pages/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { RolListComponent } from './pages/rol-list/rol-list.component';
import { RolFormModalComponent } from './pages/rol-form-modal/rol-form-modal.component';
import { PermisoListComponent } from './pages/permiso-list/permiso-list.component';


const MATERIAL_MODULES = [
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatCardModule
];

@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioFormComponent,
    RolListComponent,
    RolFormModalComponent,
    PermisoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
    SharedModule,
    MATERIAL_MODULES,

  ]
})
export class UsuarioModule { }
