import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SlidersApiService {

  constructor(private http: HttpClient) { }

  getListSlider(){
    const url = 'http://localhost:3000/sliders';
    return this.http.get(url);
  }
}
