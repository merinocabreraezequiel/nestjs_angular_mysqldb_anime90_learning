import { SeriesService } from './series.service';
export declare class SeriesController {
    private readonly seriesService;
    constructor(seriesService: SeriesService);
    findAll(): Promise<import("./serie.model").Serie[]>;
}
