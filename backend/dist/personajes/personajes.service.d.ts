import { Personaje } from './personaje.model';
export declare class PersonajesService {
    private personajeModel;
    constructor(personajeModel: typeof Personaje);
    findAll(): Promise<Personaje[]>;
}
