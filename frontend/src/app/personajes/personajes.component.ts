import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {
  personajes: any[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getPersonajes().subscribe(data => this.personajes = data);
  }
}
