import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl= "http://localhost:3000/api/upload";

  constructor(private http: HttpClient) { }

  uploadFile(file:FormData){
    return this.http.post(this.apiUrl, file);
  }

  getFile():Observable<File[]>{
    return this.http.get<File[]>(this.apiUrl);
  }
}
