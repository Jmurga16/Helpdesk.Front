import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../common/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

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
      segundoNombre: ["", Validators.required],
      primerApellido: ["", Validators.required],
      segundoApellido: ["", Validators.required],
      roles: ["", Validators.required],
      celular: ["", Validators.required],
    });

    this.titulo = this.idUsuario == 0 ? "Agregar Usuario" : "Editar Usuario";

    //Cargar los Datos en caso de edicion

  }

  goToAtras() {
    this.router.navigate(['../list'], {
      relativeTo: this.activatedRoute,
    });
  }

  fnGuardar() {

  }

}
