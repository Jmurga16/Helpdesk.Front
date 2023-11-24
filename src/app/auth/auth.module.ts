import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { ContainerAuthComponent } from './common/components/container-auth/container-auth.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
    declarations: [
        ContainerAuthComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,

    ],
})
export class AuthModule { }
