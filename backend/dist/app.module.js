"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const series_module_1 = require("./series/series.module");
const personajes_module_1 = require("./personajes/personajes.module");
const serie_model_1 = require("./series/serie.model");
const personaje_model_1 = require("./personajes/personaje.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT ?? '3306', 10),
                username: process.env.DB_USER || 'nestangular',
                password: process.env.DB_PASS || 'NA123456',
                database: process.env.DB_NAME || 'anime90s',
                models: [serie_model_1.Serie, personaje_model_1.Personaje],
                autoLoadModels: true,
                synchronize: false,
            }),
            series_module_1.SeriesModule,
            personajes_module_1.PersonajesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map