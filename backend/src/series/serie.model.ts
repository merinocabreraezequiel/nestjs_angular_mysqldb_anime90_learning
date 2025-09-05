import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Personaje } from '../personajes/personaje.model';

@Table({ tableName: 'series', timestamps: false })
export class Serie extends Model {
  @Column
  nombre: string;

  @Column
  anio: number;

  @HasMany(() => Personaje)
  personajes: Personaje[];
}
