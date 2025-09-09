import { Controller, Get } from '@nestjs/common';
import { MangacasService } from './mangacas.service';

@Controller('mangacas')
export class MangacasController {
  constructor(private readonly mangacasService: MangacasService) {}

  @Get()
  async findAll() {
    return this.mangacasService.findAll();
  }
}
