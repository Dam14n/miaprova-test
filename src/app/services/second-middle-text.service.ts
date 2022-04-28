import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Text } from 'src/interfaces/second-middle-text.interface';

@Injectable({
  providedIn: 'root'
})
export class SecondMiddleTextService {
  private apiUrl = "http://localhost:3000/text"
  constructor( private http: HttpClient) { }

  getSecondMiddleText(): Observable<Text[]>{
    return this.http.get<Text[]>(this.apiUrl)
  }

}
