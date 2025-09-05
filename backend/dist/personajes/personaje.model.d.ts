import { Model } from 'sequelize-typescript';
import { Serie } from '../series/serie.model';
export declare class Personaje extends Model {
    nombre: string;
    rol: string;
    serieId: number;
    serie: Serie;
}
