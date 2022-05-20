import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl= "http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }
}
