import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    localStorageName = "usuarioname"
    url: string = environment.base_url_api

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {

    }

    //#region Iniciar Sesión
    Login(sNombreUsuario: string, sContrasenia: string): Observable<any> {
        const urlEndPoint = this.url + 'api/Login';
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        const params = {
            sNombreUsuario: sNombreUsuario,
            sContrasenia: sContrasenia
        };

        return this.httpClient.post(urlEndPoint, JSON.stringify(params), { headers: httpHeaders });
    }
    //#endregion

    //#region Obtener Nombre de Usuario
    get currentUsuarioValue(): boolean {
        let bValue: boolean = false;

        bValue = localStorage.getItem("usuarioname") != null ? true : false

        return bValue

    }
    //#endregion

    //#region Servicio Cerrar Sesion
    Logout() {

        localStorage.removeItem(this.localStorageName);

        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }
    //#endregion

}
