import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class actividadService {

  constructor(private http: HttpClient) { }

  url: string = "https://localhost:7013/api/Activities";

  getActividades() {
    return this.http.get(this.url);
  }
}
