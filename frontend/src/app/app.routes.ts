import { Routes } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { PersonajesComponent } from './personajes/personajes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/series', pathMatch: 'full' },
  { path: 'series', component: SeriesComponent },
  { path: 'personajes', component: PersonajesComponent },
];
