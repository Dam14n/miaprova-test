import { environment } from 'src/environments/environment';
import { FileService } from './../../services/file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  files = []
  url= environment.apiUrl;
  
  constructor(private fileSvc: FileService) { 
    this.fileSvc.getAll().subscribe(data=>{
      this.files = data;
    });
    console.log(this.files)
  };

  ngOnInit(): void {

  };
 
  getRoute(file: string): string {
    const pointIndex = file.lastIndexOf(".");
    const name = file.substring(0, pointIndex);
 
    return `${this.url}/route/${name}`;
  }


};
