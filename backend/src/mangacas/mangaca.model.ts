import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Serie } from '../series/serie.model';

@Table
export class Mangaca extends Model {
  @Column
  nombre: string;

  @ForeignKey(() => Serie)
  @Column
  id_series: number;

  @BelongsTo(() => Serie)
  serie: Serie;
}
