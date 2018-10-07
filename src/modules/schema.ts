import { Schema } from 'mongoose';

const BeastSchema = new Schema({
    nome:{type: String, required: true},
    tipoDeMonstro:{type: String, required: true},
    foto: {type: String, required: true},
    midia:{type: String, required: true},
    anoDeAparicao: { type: String, required: true},
    createdAt:{type: Date, default: Date.now}
})

export default BeastSchema;