import { Component, OnInit } from '@angular/core';
import { CatalogsService } from 'src/app/services/catalogs.service';
import { Catalog } from 'src/interfaces/catalog.interface';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
  catalogs!:Catalog[];
  constructor(private catalogsSvc: CatalogsService) { }

  ngOnInit(): void {
    this.catalogsSvc.getCatalogs()
    .pipe(
      tap((catalogs:Catalog[]) => this.catalogs = catalogs)
    ).subscribe()
  }
  
}

