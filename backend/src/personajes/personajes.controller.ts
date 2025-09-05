import { Controller, Get } from '@nestjs/common';
import { PersonajesService } from './personajes.service';

@Controller('personajes')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}

  @Get()
  async findAll() {
    return this.personajesService.findAll();
  }
}
