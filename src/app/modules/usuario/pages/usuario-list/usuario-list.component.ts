import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from "sweetalert2";
import { FormControl } from '@angular/forms';
import { EstadoUsuario } from '../../common/interfaces/estado-usuario.interface';
import { UsuarioService } from '../../common/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  title: string = 'Lista de Usuarios';
  usuarios: any = [];
  txtFiltro = new FormControl();

  fNombre = new FormControl();
  fRol = new FormControl();
  fEstado = new FormControl();

  lEstados: EstadoUsuario[] = [
    { valor: 2, nombre: 'Todos' },
    { valor: 1, nombre: 'Activo' },
    { valor: 0, nombre: 'Inactivo' },
  ];

  lRoles: any[] = [
    { valor: 0, nombre: 'Todos' },
    { valor: 1, nombre: 'Administrador' },
    { valor: 2, nombre: 'Supervisor' },
    { valor: 3, nombre: 'Asistente' },
  ];

  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = [
    'nombres',
    'correo',
    'roles',
    'estado',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  usuarioTemp = [
    { idUsuario: 1, nombres: 'Jose Perales', correo: 'jose@gmail.com', roles: 'administrador', estado: true },
    { idUsuario: 2, nombres: 'Franco Martinz', correo: 'franco@gmail.com', roles: 'TI', estado: true }
  ]


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
  ) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.fnListarUsuarios();

  }

  //#region Limpiar Caja de Texto
  async limpiarFiltro() {
    if (this.dataSource) {
      this.dataSource.filter = '';
    }
    this.txtFiltro.setValue('');
  }
  //#endregion


  //#region Filtrado de Tabla
  aplicarFiltro(event: Event) {
    //Leer el filtro
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    //Si hay paginacion
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //#endregion


  //#region Listar Usuarios
  async fnListarUsuarios() {

    let nOpcion: number = 1;

    let pParametro: any = [];

    await this.usuarioService.fnServiceUsuario(nOpcion, pParametro).subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (e) => {
        console.log(e);
      }
    });

  }
  //#endregion


  //#region Eliminar/Activar
  async fnCambiarEstado(IdUsuario: number, Activo: number) {

    let nOpcion = 5
    let sTitulo: string, sRespuesta: string;

    if (Activo == 1) {
      sTitulo = '¿Desea activar el usuario?'
      sRespuesta = 'Se activó el usuario con éxito'
    }
    else {
      sTitulo = '¿Desea eliminar el usuario?'
      sRespuesta = 'Se eliminó el usuario con éxito'
    }

    var resp = await Swal.fire({
      title: sTitulo,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    })

    if (!resp.isConfirmed) {
      return;
    }

    let pParametro = [];
    pParametro.push(IdUsuario);
    pParametro.push(Activo);

    await this.usuarioService.fnServicePostUser(nOpcion, pParametro).subscribe({
      next: (value: any) => {

        if (value.cod == 1) {
          Swal.fire({
            title: sRespuesta,
            icon: 'success',
            timer: 3500
          })
        }
        this.fnListarUsuarios();

      },
      error: (e) => {
        console.error(e);
      }
    });

  }
  //#endregion Eliminar


  //#region Redirección a Formulario
  goToCrear() {
    this.router.navigate(['../create'], {
      relativeTo: this.activatedRoute,
    });
  }

  goToEditar(id: number) {
    this.router.navigate(['../edit', id], {
      relativeTo: this.activatedRoute,
    });
  }
  //#endregion

}
