import { Model } from 'sequelize-typescript';
import { Personaje } from '../personajes/personaje.model';
export declare class Serie extends Model {
    nombre: string;
    anio: number;
    personajes: Personaje[];
}
