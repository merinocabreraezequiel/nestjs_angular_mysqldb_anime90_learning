import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Serie } from './serie.model';

@Injectable()
export class SeriesService {
  constructor(
    @InjectModel(Serie)
    private serieModel: typeof Serie,
  ) {}

  async findAll() {
    return this.serieModel.findAll({ include: { all: true } });
  }
}
