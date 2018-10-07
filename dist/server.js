"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("../src/App");
var app = App_1.default.app;
var PORT = process.env.PORT || 3450;
app.listen(PORT, function () { return console.log("Servidor Iniciado na Porta " + PORT); });
process.on("SIGUSR2", function () {
    App_1.default.closeDbConnection("nodemon restart", function () { return process.kill(process.pid, 'SIGUSR2'); });
});
process.on("SIGINT", function () {
    App_1.default.closeDbConnection("A conexão foi Interrompida", function () { return process.exit(0); });
});
