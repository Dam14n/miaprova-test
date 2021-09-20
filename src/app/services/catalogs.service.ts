import { Injectable } from '@angular/core';
import { Catalog } from 'src/interfaces/catalog.interface';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CatalogsService {
 
  private apiUrl=  environment.apiUrl + "/catalogs"
  constructor(private http: HttpClient) { }

  getCatalogs():Observable<Catalog[]>{
    return this.http.get<Catalog[]>(this.apiUrl)

  }
}
