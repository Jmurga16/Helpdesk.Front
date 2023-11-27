import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    _api: string = environment.base_url_api

    constructor(private http: HttpClient) { }

    get() {

    }

    put() {

    }

    post() {

    }

    delete() {

    }

}
