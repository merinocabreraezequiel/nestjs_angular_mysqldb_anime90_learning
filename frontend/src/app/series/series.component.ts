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
    this.http.get<any[]>('http://localhost:3000/series')
      .subscribe({
        next: data => {
          this.series = data;
          console.log('✅ Series recibidas:', this.series);
        },
        error: err => console.error('❌ Error al cargar series:', err)
      });
  }
}
