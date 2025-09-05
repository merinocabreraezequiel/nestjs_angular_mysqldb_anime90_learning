import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonajesService } from './personajes.service';
import { PersonajesController } from './personajes.controller';
import { Personaje } from './personaje.model';

@Module({
  imports: [SequelizeModule.forFeature([Personaje])],
  providers: [PersonajesService],
  controllers: [PersonajesController],
})
export class PersonajesModule {}
