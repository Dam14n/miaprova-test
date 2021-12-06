import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl= environment.apiUrl + "/files"

  constructor(private http: HttpClient) { }

  uploadFile( file:any){
    return this.http.post( this.apiUrl, file);
  }

  getFile():Observable<File[]>{
    return this.http.get<File[]>(this.apiUrl);
  }
}
