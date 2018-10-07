"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var BeastSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    tipoDeMonstro: { type: String, required: true },
    foto: { type: String, required: true },
    midia: { type: String, required: true },
    anoDeAparicao: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = BeastSchema;
