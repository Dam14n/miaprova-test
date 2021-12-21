import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import { HTMLserviceService } from 'src/app/services/htmlservice.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  id:any;
  HTML:any = "";
 
  constructor(private route: ActivatedRoute, private HTMLsvc: HTMLserviceService, private sanitized: DomSanitizer) {
    this.route.params.subscribe(params=>{
     this.id= params["id"]
    })
    
   this.HTMLsvc.getHTML(this.id).subscribe(data =>{
     this.HTML = this.sanitized.bypassSecurityTrustHtml(data);
   })
}

  ngOnInit(): void {
  }


};
