import { Component, OnInit } from '@angular/core';
import { SecondMiddleTextService } from 'src/app/services/second-middle-text.service';
import { Text } from 'src/interfaces/second-middle-text.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-second-middle-text',
  templateUrl: './second-middle-text.component.html',
  styleUrls: ['./second-middle-text.component.scss']
})
export class SecondMiddleTextComponent implements OnInit {
  texts!: Text[]
  
  constructor( private secondMiddleTextSvc: SecondMiddleTextService ) { }

  ngOnInit(): void {
     this.secondMiddleTextSvc.getSecondMiddleText()
    .pipe(
      tap((text:Text[]) => this.texts = text)
    ).subscribe()
   }

}
