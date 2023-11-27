import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PanelComponent } from './pages/panel/panel.component';

/* const MATERIAL_MODULES = [
 
]; */

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    //MATERIAL_MODULES


  ]
})
export class DashboardModule { }
