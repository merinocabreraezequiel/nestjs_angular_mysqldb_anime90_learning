import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html'
})
export class SeriesComponent implements OnInit {
  series: any[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getSeries().subscribe(data => this.series = data);
  }
}
