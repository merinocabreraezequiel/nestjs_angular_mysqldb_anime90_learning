import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series.component.html',
})
export class SeriesComponent implements OnInit {
  series: any[] = [];

  constructor(private http: HttpClient) {}

ngOnInit() {
  console.log('Cargando series...');
  this.http.get<any>('http://localhost:3000/series')
    .subscribe({
      next: data => {
        console.log('✅ Respuesta cruda del backend:', data);

        // Si el backend responde { data: [...] }
        if (Array.isArray(data)) {
          this.series = data;
        } else if (data && data.data && Array.isArray(data.data)) {
          this.series = data.data;
        } else {
          console.warn('⚠️ No se detectó array en la respuesta');
        }

        console.log('📋 Series asignadas al componente:', this.series);
      },
      error: err => console.error('❌ Error al cargar series:', err)
    });
}

}
