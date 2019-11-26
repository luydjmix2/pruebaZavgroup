import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SlidersApiService {

  constructor(private http: HttpClient) { }

  getListSlider(){
    const url = 'http://prueba01.lesframework.com/php/webserviceSlider.php?user=valido';
    return this.http.get(url);
  }

  getListConten(){
    const Url_conten = 'http://localhost:3000/contenido';
    return this.http.get(Url_conten);
  }
}
