import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
img!:string




  constructor() { }

  ngOnInit(): void {
    this.img= "assets/logo.png"
    
  }

}
