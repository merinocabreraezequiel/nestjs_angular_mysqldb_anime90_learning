"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonajesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const personajes_service_1 = require("./personajes.service");
const personajes_controller_1 = require("./personajes.controller");
const personaje_model_1 = require("./personaje.model");
let PersonajesModule = class PersonajesModule {
};
exports.PersonajesModule = PersonajesModule;
exports.PersonajesModule = PersonajesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([personaje_model_1.Personaje])],
        providers: [personajes_service_1.PersonajesService],
        controllers: [personajes_controller_1.PersonajesController],
    })
], PersonajesModule);
//# sourceMappingURL=personajes.module.js.map