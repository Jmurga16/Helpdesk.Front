import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserFormComponent } from './pages/user-form/user-form.component';


/* const MATERIAL_MODULES = [
 
]; */

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    //MATERIAL_MODULES


  ]
})
export class UserModule { }
