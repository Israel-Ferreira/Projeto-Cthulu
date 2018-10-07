"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var routes_1 = require("./modules/routes");
var db_1 = require("./config/db");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.database = new db_1.default();
        this.databaseConnection();
    }
    App.prototype.middlewares = function () {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.databaseConnection = function () {
        this.database.createConnection();
    };
    App.prototype.closeDbConnection = function (message, callback) {
        this.database.closeConnection(message, callback);
    };
    App.prototype.routes = function () {
        this.app.get("/", function (req, res) { return res.send({ message: "Bem Vindo ao Bestiário" }); });
        this.app.get("/api/beasts", routes_1.default.getAll);
        this.app.post("/api/beasts", routes_1.default.create);
        this.app.get("/api/beasts/:id", routes_1.default.getById);
        this.app.put("/api/beasts/:id", routes_1.default.update);
        this.app.delete("/api/beasts/:id", routes_1.default.delete);
    };
    return App;
}());
exports.default = new App();
