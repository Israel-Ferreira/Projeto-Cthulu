import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as morgan from 'morgan';
import BeastRoutes from './modules/routes';

import DataBase from './config/db';

class App {
    public app : express.Application;
    private bodyParser;
    private morgan : morgan.Morgan;
    private database : DataBase;

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        this.database = new DataBase();
        this.databaseConnection();
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    databaseConnection(){
        this.database.createConnection();
    }

    closeDbConnection(message,callback){
        this.database.closeConnection(message,callback);
    }

    routes(){
        this.app.get("/",(req,res) => res.send({message:"Bem Vindo ao Bestiário"}));
        this.app.get("/api/beasts",BeastRoutes.getAll);
        this.app.post("/api/beasts",BeastRoutes.create);
        this.app.get("/api/beasts/:id",BeastRoutes.getById);
        this.app.put("/api/beasts/:id",BeastRoutes.update);
        this.app.delete("/api/beasts/:id",BeastRoutes.delete);
    }
}

export default new App();