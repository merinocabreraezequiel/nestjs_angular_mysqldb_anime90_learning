import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {
  personajes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Cargando personajes...');
    this.http.get<any[]>('http://localhost:3000/personajes')
      .subscribe({
        next: data => {
          this.personajes = data;
          console.log('✅ Personajes recibidos:', this.personajes);
        },
        error: err => console.error('❌ Error al cargar personajes:', err)
      });
  }
}
