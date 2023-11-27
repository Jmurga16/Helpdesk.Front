import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './pages/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';


const MATERIAL_MODULES = [
  MatDialogModule,
];

@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioFormComponent
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
