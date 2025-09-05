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
  this.http.get<any>('http://localhost:3000/personajes')
    .subscribe({
      next: data => {
        console.log('✅ Respuesta cruda del backend:', data);

        if (Array.isArray(data)) {
          this.personajes = data;
        } else if (data && data.data && Array.isArray(data.data)) {
          this.personajes = data.data;
        } else {
          console.warn('⚠️ No se detectó array en la respuesta');
        }

        console.log('📋 Personajes asignados al componente:', this.personajes);
      },
      error: err => console.error('❌ Error al cargar personajes:', err)
    });
}

}
