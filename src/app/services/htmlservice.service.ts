import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTMLserviceService {

  private apiUrl= environment.apiUrl + '/api/file';
  
  constructor(private http: HttpClient) { }

  getHTML(name:String){
    return this.http.get(this.apiUrl + "?name=" + name, { responseType: 'text' })
  }
}
