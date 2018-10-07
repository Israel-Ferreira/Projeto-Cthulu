"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("./repository");
var BeastController = /** @class */ (function () {
    function BeastController() {
    }
    BeastController.prototype.getBeasts = function () {
        return repository_1.default.find({});
    };
    BeastController.prototype.createBeast = function (obj) {
        return repository_1.default.create(obj);
    };
    BeastController.prototype.getBeastById = function (id) {
        return repository_1.default.findById(id);
    };
    BeastController.prototype.updateBeast = function (id, obj) {
        var nome = obj.nome, tipoDeMonstro = obj.tipoDeMonstro, foto = obj.foto, midia = obj.midia, anoDeAparicao = obj.anoDeAparicao;
        var beast = { nome: nome, tipoDeMonstro: tipoDeMonstro, foto: foto, midia: midia, anoDeAparicao: anoDeAparicao };
        return repository_1.default.findByIdAndUpdate(id, beast);
    };
    BeastController.prototype.deleteBeast = function (id) {
        return repository_1.default.remove(id);
    };
    return BeastController;
}());
exports.default = new BeastController;
