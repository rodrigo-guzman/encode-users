import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {

  constructor(private http: HttpClient) { }

  url: string = "https://localhost:7013/api/User";

  getUsuarios() {
    return this.http.get(this.url);
  }

  addUsuario(usuario: usuario): Observable<usuario> {
    return this.http.post<usuario>(this.url, usuario);
  }

  updateusuario(id: number, usuario: usuario): Observable<usuario> {
    return this.http.put<usuario>(this.url + `/${id}`, usuario);
  }

  deleteusuario(id: number) {
    return this.http.delete(this.url + `/${id}`);
  }
}
