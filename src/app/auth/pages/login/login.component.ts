import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Usuario = new FormControl();
  Password = new FormControl();


  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
  }


  //#region Login
  async fnLogin() {

    let sNombreUsuario = this.Usuario.value;
    let sContrasenia = this.Password.value;

    this.router.navigate(['/usuario/list']);

    return;

    await this.authService.Login(sNombreUsuario, sContrasenia).subscribe({
      next: (data) => {

        if (data[0].result == 1) {
          localStorage.setItem("usuarioname", this.Usuario.value)
          this.router.navigate(['/usuario/list']);
        }
        //else {
        //  Swal.fire({
        //    title: `Ingrese los datos correctamente.`,
        //    icon: 'warning',
        //    timer: 1500
        //  });
        //}
      },
      error: (e) => {
        console.error(e)
      }
    });
  }
  //#endregion



}
