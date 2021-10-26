import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  rideToTheTop= "Ride To The Top"
  displayArrowUp= true
  constructor() { }

  ngOnInit(): void {
  }
  scrollTop():void{
    window.scrollTo(0,0)
  }
}
