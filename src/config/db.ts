import * as mongoose from 'mongoose';

class DataBase {
    private DB_URI = "mongodb://localhost:27017/beasts";
    private DB_CONNECTION;

    constructor(){}

    createConnection(){
        if(process.env.NODE_ENV === "production"){
            mongoose.connect(process.env.MONGODB_URI);
            this.logger(process.env.MONGODB_URI)
        }else{
            mongoose.connect(this.DB_URI,{useNewUrlParser: true})
            this.logger(this.DB_URI);
        }
    }

    logger(uri){
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on("connected",() => console.log("Mongoose foi conectado"))
        this.DB_CONNECTION.on("error",err => console.log(`Erro na conexão: ${err}`));
        this.DB_CONNECTION.on("disconnected",() => console.log("Mongoose foi desconectado"));
    }

    closeConnection(message,callback){
        this.DB_CONNECTION.close(() => {
            console.log(`O mongoose foi desconectado por: ${message}`);
            callback();
        })
    }

}

export default DataBase;