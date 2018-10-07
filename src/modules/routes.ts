import BeastController from './controllers';
import * as httpStatus from 'http-status';

const sendResponse = (res,code,data) => res.status(code).send({'result':data})

class BeastRoutes {
    constructor(){}

    getAll(req,res){
        BeastController.getBeasts()
            .then(reslt => sendResponse(res,httpStatus.OK,reslt))
            .catch(err => console.error(`Erro: ${err}`));
    }

    getById(req,res){
        let { id } = req.params;

        if(!id){
            sendResponse(res,httpStatus.OK,"Fera não Encontrada");
        }

        BeastController.getBeastById(id)
            .then(rslt => sendResponse(res,httpStatus.OK,rslt))
            .catch(err => console.error(`Erro: ${err}`));
    }

    create(req,res){
        let fera = req.body;
        BeastController.createBeast(fera)
            .then(rslt => sendResponse(res,httpStatus.OK,"Fera criada com muito medo e cagaço"))
            .catch(err => console.error(`Erro: ${err}`));
    }

    update(req,res){
        let { id } = req.params;
        let fera = req.body;
        BeastController.updateBeast(id,fera)
            .then(beast => sendResponse(res,httpStatus.OK,"Fera atualizada com sucesso"))
            .catch(err => console.error(`Erro: ${err}`));
    }

    delete(req,res){
        let { id } = req.params;
        BeastController.deleteBeast(id)
            .then(rslt => sendResponse(res,httpStatus.OK,rslt))
            .catch(err => console.error(`Erro: ${err}`));
    }

}

export default new BeastRoutes;