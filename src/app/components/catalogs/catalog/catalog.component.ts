import { Component, Input, OnInit } from '@angular/core';
import { Catalog } from 'src/interfaces/catalog.interface';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @Input() catalog!: Catalog;
  
  constructor() { }

  ngOnInit(): void {
  }

}
