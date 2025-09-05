import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonajesService } from './personajes.service';
import { PersonajesController } from './personajes.controller';
import { Personaje } from './personaje.model';
import { Serie } from '../series/serie.model';

@Module({
  imports: [SequelizeModule.forFeature([Personaje, Serie])],
  controllers: [PersonajesController],
  providers: [PersonajesService],
})
export class PersonajesModule {}
