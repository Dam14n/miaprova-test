import { Component, Input, OnInit } from '@angular/core';
import { Stories } from 'src/interfaces/stories.interface';

@Component({
  selector: 'app-storie',
  templateUrl: './storie.component.html',
  styleUrls: ['./storie.component.scss']
})
export class StorieComponent implements OnInit {
  @Input ()storie!: Stories
  constructor() { }

  ngOnInit(): void {
  }

}
