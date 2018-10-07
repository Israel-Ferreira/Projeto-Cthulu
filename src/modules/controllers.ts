import Beasts from './repository';

class BeastController {
    constructor(){}

    getBeasts(){
        return Beasts.find({});
    }

    createBeast(obj){
        return Beasts.create(obj);
    }

    getBeastById(id){
        return Beasts.findById(id);
    }

    updateBeast(id,obj){
        let { nome,tipoDeMonstro,foto,midia,anoDeAparicao } = obj;
        let beast= {nome,tipoDeMonstro,foto,midia,anoDeAparicao }
        return Beasts.findByIdAndUpdate(id,beast);
    }

    deleteBeast(id){
        return Beasts.remove(id);
    }
}


export default new BeastController;