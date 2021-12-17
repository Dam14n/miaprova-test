import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HTMLserviceService } from 'src/app/services/htmlservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  id:any;
  files:any;
  HTML:string = "";
 

  constructor(private route: ActivatedRoute, private HTMLsvc: HTMLserviceService, private http: HttpClient ) {
    this.route.params.subscribe(params=>{
     this.id= params["id"]
     this.files= params["files"]
    })
    
   this.HTMLsvc.getHTML().subscribe(data =>{
     this.HTML = data
   })
}

  ngOnInit(): void {
  }



};
