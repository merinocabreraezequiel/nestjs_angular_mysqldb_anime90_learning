import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MangacasService } from './mangacas.service';
import { MangacasController } from './mangacas.controller';
import { Mangaca } from './mangaca.model';

@Module({
  imports: [SequelizeModule.forFeature([Mangaca])],
  providers: [MangacasService],
  controllers: [MangacasController],
})
export class MangacasModule {}
