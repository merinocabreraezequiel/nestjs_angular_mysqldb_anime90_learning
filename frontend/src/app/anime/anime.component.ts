import { Component } from '@angular/core';
import { SeriesComponent } from '../series/series.component';
import { PersonajesComponent } from '../personajes/personajes.component';
import {MangacasComponent} from '../mangacas/mangacas.component';

@Component({
  selector: 'app-anime',
  standalone: true,
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
  imports: [SeriesComponent, PersonajesComponent, MangacasComponent]
})
export class AnimeComponent {}
