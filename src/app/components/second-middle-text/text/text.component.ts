import { Component, OnInit, Input } from '@angular/core';
import { Text } from 'src/interfaces/second-middle-text.interface';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input () text!: Text; 
  constructor() { }

  ngOnInit(): void {
    
  }

}
