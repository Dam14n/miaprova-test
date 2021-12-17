import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTMLserviceService {

  private path:string = "assets/prueba.html"
  
  constructor(private http: HttpClient) { }

  getHTML(){
    return this.http.get('assets/prueba.html', { responseType: 'text' })
  }
}
