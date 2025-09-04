import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnimeService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getSeries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/series`);
  }

  getPersonajes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/personajes`);
  }
}
