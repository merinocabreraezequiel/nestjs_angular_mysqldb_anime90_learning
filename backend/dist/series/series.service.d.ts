import { Serie } from './serie.model';
export declare class SeriesService {
    private serieModel;
    constructor(serieModel: typeof Serie);
    findAll(): Promise<Serie[]>;
}
