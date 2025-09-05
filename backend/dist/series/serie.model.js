"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const personaje_model_1 = require("../personajes/personaje.model");
let Serie = class Serie extends sequelize_typescript_1.Model {
    nombre;
    anio;
    personajes;
};
exports.Serie = Serie;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Serie.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Serie.prototype, "anio", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => personaje_model_1.Personaje),
    __metadata("design:type", Array)
], Serie.prototype, "personajes", void 0);
exports.Serie = Serie = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'series', timestamps: false })
], Serie);
//# sourceMappingURL=serie.model.js.map