import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Serie } from '../series/serie.model';

@Table
export class Personaje extends Model {
  @Column
  nombre: string;

  @Column
  rol: string;

  @ForeignKey(() => Serie)
  @Column
  serieId: number;

  @BelongsTo(() => Serie)
  serie: Serie;
}
