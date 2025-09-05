import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { Serie } from './serie.model';
import { Personaje } from '../personajes/personaje.model';

@Module({
  imports: [SequelizeModule.forFeature([Serie, Personaje])],
  providers: [SeriesService],
  controllers: [SeriesController],
})
export class SeriesModule {}
