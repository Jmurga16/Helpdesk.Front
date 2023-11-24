import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-layout.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const ANGULAR_MATERIAL = [
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ANGULAR_MATERIAL
 
  ]
})
export class AdminLayoutModule { }
