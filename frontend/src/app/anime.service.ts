import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private baseUrl = 'http://localhost:3000'; // API NestJS

  constructor(private http: HttpClient) {}

  getSeries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/series`);
  }

  getPersonajes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/personajes`);
  }

  getMangacas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mangacas`);
  }
}
