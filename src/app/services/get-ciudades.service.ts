import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCiudadesService {

  urlFile = '../../assets/ciudades.json';

  constructor(public http:HttpClient) { }

  getCiudades():Observable<any>{
    return this.http.get(this.urlFile);
  }

}
