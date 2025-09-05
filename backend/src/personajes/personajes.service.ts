import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Personaje } from './personaje.model';

@Injectable()
export class PersonajesService {
  constructor(
    @InjectModel(Personaje)
    private personajeModel: typeof Personaje,
  ) {}

  async findAll() {
    return this.personajeModel.findAll();
  }
}
