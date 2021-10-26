import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/interfaces/product.interface';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[]
  constructor( private productsSvc: ProductsService) { }

  ngOnInit(): void {
    this.productsSvc.getProduct()
    .pipe(
      tap((products:Product[])=> this.products = products)
    ).subscribe()
  }

}
