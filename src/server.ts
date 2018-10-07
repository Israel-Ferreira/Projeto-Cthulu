import App from '../src/App';

let { app } = App;
const PORT = process.env.PORT || 3450;

app.listen(PORT,() => console.log(`Servidor Iniciado na Porta ${PORT}`));

process.on("SIGUSR2", () => {
    App.closeDbConnection("nodemon restart",() => process.kill(process.pid,'SIGUSR2'));
})

process.on("SIGINT",() => {
    App.closeDbConnection("A conexão foi Interrompida",() => process.exit(0));
})