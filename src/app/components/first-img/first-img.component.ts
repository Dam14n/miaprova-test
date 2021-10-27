import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-img',
  templateUrl: './first-img.component.html',
  styleUrls: ['./first-img.component.scss']
})
export class FirstImgComponent implements OnInit {
  img!:string
  constructor() { }

  ngOnInit(): void {
    this.img= "assets/mainImage.png"
  }

}
