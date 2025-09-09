import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mangacas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mangacas.component.html',
})
export class MangacasComponent implements OnInit {
  mangacas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
  console.log('Cargando mangacas...');
  this.http.get<any>('http://localhost:3000/mangacas')
    .subscribe({
      next: data => {
        console.log('✅ Respuesta del backend:', data);

        if (Array.isArray(data)) {
          this.mangacas = data;
        } else if (data && data.data && Array.isArray(data.data)) {
          this.mangacas = data.data;
        } else {
          console.warn('⚠️ No se detectó array en la respuesta');
        }

        console.log('📋 mangacas asignados al componente:', this.mangacas);
      },
      error: err => console.error('❌ Error al cargar mangacas:', err)
    });
}

}
