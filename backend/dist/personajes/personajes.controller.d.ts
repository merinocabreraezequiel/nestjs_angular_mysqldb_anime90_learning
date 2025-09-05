import { PersonajesService } from './personajes.service';
export declare class PersonajesController {
    private readonly personajesService;
    constructor(personajesService: PersonajesService);
    findAll(): Promise<import("./personaje.model").Personaje[]>;
}
