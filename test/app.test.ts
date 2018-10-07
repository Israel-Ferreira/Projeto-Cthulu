import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as should from 'should';

chai.use(chaiHttp);


describe('[GET] / ',() => {
    it("Deve retornar uma mensagem de bem vindo", done => {
        chai.request('http://localhost:3450')
            .get("/")
            .end((err,res) => {
                should(res.body).Object
                done();
            });
    });
});

describe('[GET] /api/beasts', () => {
    it("Deve retornar todos os monstros", done => {
        chai.request('http://localhost:3450')
            .get("/api/beasts")
            .end((err,res) => {
                should(res.status).equal(200);
                should(res.body).Array;
                done();
            })
    })
})
