"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("./controllers");
var httpStatus = require("http-status");
var sendResponse = function (res, code, data) { return res.status(code).send({ 'result': data }); };
var BeastRoutes = /** @class */ (function () {
    function BeastRoutes() {
    }
    BeastRoutes.prototype.getAll = function (req, res) {
        controllers_1.default.getBeasts()
            .then(function (reslt) { return sendResponse(res, httpStatus.OK, reslt); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    BeastRoutes.prototype.getById = function (req, res) {
        var id = req.params.id;
        if (!id) {
            sendResponse(res, httpStatus.OK, "Fera não Encontrada");
        }
        controllers_1.default.getBeastById(id)
            .then(function (rslt) { return sendResponse(res, httpStatus.OK, rslt); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    BeastRoutes.prototype.create = function (req, res) {
        var fera = req.body;
        controllers_1.default.createBeast(fera)
            .then(function (rslt) { return sendResponse(res, httpStatus.OK, "Fera criada com muito medo e cagaço"); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    BeastRoutes.prototype.update = function (req, res) {
        var id = req.params.id;
        var fera = req.body;
        controllers_1.default.updateBeast(id, fera)
            .then(function (beast) { return sendResponse(res, httpStatus.OK, "Fera atualizada com sucesso"); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    BeastRoutes.prototype.delete = function (req, res) {
        var id = req.params.id;
        controllers_1.default.deleteBeast(id)
            .then(function (rslt) { return sendResponse(res, httpStatus.OK, rslt); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    return BeastRoutes;
}());
exports.default = new BeastRoutes;
