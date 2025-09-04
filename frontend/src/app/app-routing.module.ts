import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  { path: '', redirectTo: 'series', pathMatch: 'full' }, // redirección por defecto
  { path: 'series', component: SeriesComponent },
  { path: 'personajes', component: PersonajesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
