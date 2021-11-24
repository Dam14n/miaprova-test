import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  id:any
  files:any

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params=>{
    //  document.write(params["id"])
     this.id= params["id"]
     this.files= params["files"]
    })
   }

  ngOnInit(): void {
  }

}
