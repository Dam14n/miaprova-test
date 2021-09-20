import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl= environment.apiUrl +"/products"
  constructor(private http: HttpClient) { }

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }
}
