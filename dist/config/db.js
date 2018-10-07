"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.DB_URI = "mongodb://localhost:27017/beasts";
    }
    DataBase.prototype.createConnection = function () {
        if (process.env.NODE_ENV === "production") {
            mongoose.connect(process.env.MONGODB_URI);
            this.logger(process.env.MONGODB_URI);
        }
        else {
            mongoose.connect(this.DB_URI, { useNewUrlParser: true });
            this.logger(this.DB_URI);
        }
    };
    DataBase.prototype.logger = function (uri) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on("connected", function () { return console.log("Mongoose foi conectado"); });
        this.DB_CONNECTION.on("error", function (err) { return console.log("Erro na conex\u00E3o: " + err); });
        this.DB_CONNECTION.on("disconnected", function () { return console.log("Mongoose foi desconectado"); });
    };
    DataBase.prototype.closeConnection = function (message, callback) {
        this.DB_CONNECTION.close(function () {
            console.log("O mongoose foi desconectado por: " + message);
            callback();
        });
    };
    return DataBase;
}());
exports.default = DataBase;
