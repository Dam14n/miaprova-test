import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl= environment.apiUrl ;

  constructor(private http: HttpClient) { }

  uploadFile(file:FormData, route:string){
    return this.http.post(this.apiUrl + "/api/upload" + "?route=" + route, file);
  }

  getFile():Observable<File[]>{
    return this.http.get<File[]>(this.apiUrl + "/api/upload");
  }

  getAll():Observable<any>{
    return this.http.get(this.apiUrl + "/api/files")
  }

  uploadName(name:string, ext:string):Observable<any>{
    return this.http.get(this.apiUrl + "/api/fileParty" + "?name=" + name + ext, { responseType: 'blob', observe: 'response' } )
  }
}
