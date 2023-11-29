import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    _api: string = environment.base_url_api

    constructor(private http: HttpClient) { }

    fnServiceUsuario(nOpcion: number, pParametro: any): Observable<any> {
        const urlEndPoint = this._api + 'api/Usuario';
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        const params = {
            nOpcion: nOpcion,
            pParametro: pParametro.join('|')
        };

        return this.http.post<any>(urlEndPoint, JSON.stringify(params), { headers: httpHeaders });
    }

    //#region Servicio Post (Insertar / Editar / Eliminar)
    fnServicePostUser(nOpcion: number, pParametro: any): Observable<any> {
        const urlEndPoint = this._api + 'api/Usuario';
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        const params = {
            nOpcion: nOpcion,
            pParametro: pParametro.join('|')
        };

        return this.http.post(urlEndPoint, JSON.stringify(params), { headers: httpHeaders });
    }
    //#endregion


}
