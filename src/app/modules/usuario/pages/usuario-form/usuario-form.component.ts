import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../common/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent {

  titulo: string = ""
  idUsuario: number = 0;
  formUsuario: FormGroup
  listRoles: any = [
    { id: 1, nombre: "Administrador" },
    { id: 2, nombre: "TI" }
  ]

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,

  ) {


    this.formUsuario = this.formBuilder.group({
      idUsuario: [0, Validators.required],
      correo: ["", Validators.required],
      primerNombre: ["", Validators.required],
      segundoNombre: [""],
      apellidoPaterno: ["", Validators.required],
      apellidoMaterno: ["", Validators.required],
      roles: ["", Validators.required],
      celular: ["", Validators.required],
    });


    //Cargar los Datos en caso de edicion

    // Obtener los parametros segun ruta
    const params = this.activatedRoute.snapshot.params;
    this.idUsuario = params['id'] == undefined ? 0 : params['id']

    //Definimos la accion Agregar o Editar
    this.titulo = this.idUsuario == 0 ? "Agregar Usuario" : "Editar Usuario";

    //Cargar si es Editar
    if (this.idUsuario != 0) {
      this.fnLoadData();
    }

  }

  goToAtras() {
    if (this.idUsuario == 0) {
      this.router.navigate(['../list'], {
        relativeTo: this.activatedRoute,
      });
    } else {
      this.router.navigate(['../../list'], {
        relativeTo: this.activatedRoute,
      });
    }

  }

  //#region Listar Usuarios
  async fnLoadData() {

    let nOpcion: number = 2;

    let pParametro: any = [];
    pParametro.push(this.idUsuario)

    await this.usuarioService.fnServiceUsuario(nOpcion, pParametro).subscribe({
      next: (data) => {
        this.formUsuario.patchValue(data);
      },
      error: (e) => {
        console.log(e);
      }
    });

  }
  //#endregion


  //#region Grabar Usuario
  async fnGuardar() {

    //Validar que todos los campos tengan datos
    if (this.formUsuario.invalid) {
      return Swal.fire({
        title: `Ingrese todos los campos.`,
        icon: 'warning',
        timer: 1500
      });
    }

    else {

      let pParametro = [];
      let pOpcion = this.idUsuario == 0 ? 3 : 4; // 1-> Insertar / 2-> Editar

      var roles = this.formUsuario.controls["roles"].value;
      var rolesString: string = ""

      roles.forEach((element: any) => {
        rolesString = rolesString + element.toString() + ','
      });

      rolesString = rolesString.slice(0, -1);

      pParametro.push(this.formUsuario.controls["correo"].value);
      pParametro.push(this.formUsuario.controls["primerNombre"].value);
      pParametro.push(this.formUsuario.controls["segundoNombre"].value);
      pParametro.push(this.formUsuario.controls["apellidoPaterno"].value);
      pParametro.push(this.formUsuario.controls["apellidoMaterno"].value);
      pParametro.push(rolesString)
      pParametro.push(this.formUsuario.controls["celular"].value);
      pParametro.push(this.formUsuario.controls["idUsuario"].value);

      console.log(pParametro)

      await this.usuarioService.fnServicePostUser(pOpcion, pParametro).subscribe({
        next: (value: any) => {

          if (value.cod == 1) {
            Swal.fire({
              title: value.mensaje,
              icon: 'success',
              timer: 3500
            }).then(() => {
              this.goToAtras();
            });
          }

        },
        error: (e) => {
          console.error(e);
        }
      });

      return
    }

  }
  //#endregion




}
