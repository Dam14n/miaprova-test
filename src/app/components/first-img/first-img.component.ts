import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-img',
  templateUrl: './first-img.component.html',
  styleUrls: ['./first-img.component.scss']
})
export class FirstImgComponent implements OnInit {
  shopNowTextButton= "Shop Now";
  constructor() { }

  ngOnInit(): void {
  }

}
