import { Injectable } from '@angular/core';
import { Stories } from 'src/interfaces/stories.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private apiUrl= environment.apiUrl + "/api/stories"
  constructor(private http: HttpClient) { }

  gerStories():Observable<Stories[]>{
    return this.http.get<Stories[]>(this.apiUrl)
  }
}
