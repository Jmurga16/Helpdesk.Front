import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/Menu';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  _api: string = environment.base_url_api

  demo$ = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  fnServiceMenu(nOpcion: number, pParametro: any): Observable<Menu[]> {
    const urlEndPoint = this._api + 'api/Menu';
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    const params = {
      nOpcion: nOpcion,
      pParametro: pParametro.join('|')
    };

    return this.http.post<Menu[]>(urlEndPoint, JSON.stringify(params), { headers: httpHeaders });
  }



}
