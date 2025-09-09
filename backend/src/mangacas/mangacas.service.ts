import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Mangaca } from './mangaca.model';
import { Serie } from '../series/serie.model';

@Injectable()
export class MangacasService {
  constructor(
    @InjectModel(Mangaca)
    private mangacaModel: typeof Mangaca,
  ) {}

  async findAll() {
    return this.mangacaModel.findAll({ include: [Serie] });
  }
}
