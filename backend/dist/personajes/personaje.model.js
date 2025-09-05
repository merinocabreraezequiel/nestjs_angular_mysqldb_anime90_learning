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
exports.Personaje = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const serie_model_1 = require("../series/serie.model");
let Personaje = class Personaje extends sequelize_typescript_1.Model {
    nombre;
    rol;
    serieId;
    serie;
};
exports.Personaje = Personaje;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Personaje.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Personaje.prototype, "rol", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => serie_model_1.Serie),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Personaje.prototype, "serieId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => serie_model_1.Serie),
    __metadata("design:type", serie_model_1.Serie)
], Personaje.prototype, "serie", void 0);
exports.Personaje = Personaje = __decorate([
    sequelize_typescript_1.Table
], Personaje);
//# sourceMappingURL=personaje.model.js.map