import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/services/stories.service';
import { Stories } from 'src/interfaces/stories.interface';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories!: Stories[]
  constructor( private storiesSvc: StoriesService) { }

  ngOnInit(): void {
    this.storiesSvc.gerStories()
    .pipe(
      tap((stories:Stories[]) => this.stories = stories)
    ).subscribe()
  }

}
